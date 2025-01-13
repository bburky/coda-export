#!/usr/bin/env node --experimental-strip-types --experimental-transform-types

import type { AxiosRequestConfig } from 'openapi-client-axios';
import type { Client as AdminClient, Page, Doc } from './admin.ts';
import type { AxiosInstance, AxiosResponse } from 'axios';

import fs from 'node:fs';
import { parseArgs } from 'node:util';
import axios, { AxiosHeaders } from 'axios';
import axiosRetry from 'axios-retry';
import rateLimit from '@hokify/axios-rate-limit';
import { OpenAPIClientAxios } from 'openapi-client-axios';
import { OpenAPIV3 } from 'openapi-types';
import { JSDOM } from 'jsdom';
import { diffArrays } from 'diff';
import mime from 'mime-types';

const DEBUG = process.env.DEBUG === 'true';

const ALLOWED_FILENAME_CHARACTER_REGEX = /[^\w [\]()]/g;
const cleanFilename = (filename: string) => filename.replaceAll(ALLOWED_FILENAME_CHARACTER_REGEX, '-');

const FORMATS = ['HTML', 'PDF', 'Plaintext'] as const;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const args = parseArgs({
  options: {
    orgName: { type: 'string' },
    orgId: { type: 'string' },
    docName: { type: 'string' },
    docId: { type: 'string' },
    codaApiKey: { type: 'string' },
    out: { type: 'string' },
  },
  allowPositionals: false,
});

function printUsage() {
  console.error('Usage: coda-export [options]');
  console.error('Options:');
  console.error('  --codaApiKey    Coda API key (or set CODA_API_KEY environment variable)');
  console.error('  --orgId         Organization ID to export from');
  console.error('  --docId         Document ID to export (optional, will download all documents by default)');
  console.error('  --out           Output directory');
}

const codaApiKey = args.values.codaApiKey || process.env.CODA_API_KEY;
if (!codaApiKey) {
  console.error('Error: --codaApiKey or CODA_API_KEY environment variable is required\n');
  printUsage();
  process.exit(1);
}

const outputDir = args.values.out;
if (!outputDir) {
  console.error('Error: --out is required\n');
  printUsage();
  process.exit(1);
}

// Simple axios instance for downloading files with no auth
const axiosDownload = axios.create();
axiosRetry(axiosDownload, { retries: 3, retryDelay: axiosRetry.exponentialDelay });
// No idea what I did wrong with rateLimit's import to need .default
// @ts-expect-error something is wrong with the AxiosInstance types here too
rateLimit.default(axiosDownload, { maxRequests: 20, maxRPS: 100 });

// Coda Admin API client
const definition = JSON.parse(await fs.promises.readFile(new URL('admin-v1-openapi.json', import.meta.url), 'utf-8')) as OpenAPIV3.Document;
const api = new OpenAPIClientAxios({
  definition,
  axiosConfigDefaults: {
    headers: {
      'Authorization': `Bearer ${process.env.CODA_API_KEY}`,
    },
  },
});
const client = await api.getClient<AdminClient>();

if (DEBUG) {
  client.interceptors.request.use((config) => {
    console.log(`START REQUEST: ${config.method} ${config.url}`);
    return config;
  });
}

axiosRetry(client as AxiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  onRetry(retryCount, error, requestConfig) {
    console.log(`RETRY: attempt ${retryCount}: ${error.message}: ${requestConfig.url}`);
  }
});

rateLimit.default(client, { maxRequests: 20, maxRPS: 100 });

if (DEBUG) {
  process.env.DEBUG_AXIOS_RATE_LIMITER = 'true';

  client.interceptors.request.use((config) => {
    console.log(`SENDING REQUEST: ${config.method} ${config.url}`);
    return config;
  });
}

// Paginate through a Coda API operation that returns a nextPageToken, returning combined .data.items
async function paginate<O, I>(
  operation: (options?: O, data?: never, config?: AxiosRequestConfig) => Promise<{ data: { items: I[], nextPageToken?: string } }>,
  options?: O
): Promise<I[]> {
  const items: I[] = [];
  let nextPageToken: string | undefined;

  do {
    const response = await operation({
      ...options,
      pageToken: nextPageToken,
    } as O);

    items.push(...response.data.items);
    nextPageToken = response.data.nextPageToken;
  } while (nextPageToken);

  return items;
}

interface DocExport {
  exportId: string;
  format: typeof FORMATS[number];
  filename: string;
  doc: Doc;
  pageInfo: PageInfo[];
}

async function exportDoc(doc: Doc, organizationId: string) {
  console.log(`Exporting: doc ${doc.id}: ${doc.name}`);
  const docId = doc.id;
  const pages = await paginate(client.listPages, { organizationId, docId });
  const pageInfo = buildPageInfo(pages);
  const nameCleaned = cleanFilename(doc.name);
  const tmpOutDir = `${outputDir}/${nameCleaned}.tmp-${Math.random().toString(36).slice(2)}`;

  await Promise.all(FORMATS.map(async format => {
    console.log(`Exporting:${format}: ${doc.name}`);
    const exportId = (await client.exportDoc({ organizationId, docId }, { format })).data.id;
    const filename = `${tmpOutDir}/${nameCleaned}`;
    return getExport(organizationId, docId, { exportId, format, filename, doc, pageInfo });
  }));

  await fs.promises.rename(tmpOutDir, `${outputDir}/${nameCleaned}`);
}

interface PageInfo {
  page: Page;
  children: PageInfo[];
  parent: PageInfo | null;
  path: string;
}

function buildPageInfo(pages: Page[]): PageInfo[] {
  const map = new Map<string, PageInfo>(pages.map((page) => [page.id, { page, children: [], path: '', parent: null }]));
  const roots: PageInfo[] = [];

  for (const pageInfo of map.values()) {
    const parent = pageInfo.page.parent && map.get(pageInfo.page.parent.id);
    if (parent) {
      parent.children.push(pageInfo);
      pageInfo.parent = parent;
    } else {
      roots.push(pageInfo);
    }

    const parents: PageInfo[] = [];
    let current = pageInfo;
    while (current.parent) {
      parents.unshift(current.parent);
      current = current.parent;
    }

    pageInfo.path = [...parents, pageInfo].map(p => cleanFilename(p.page.name)).join('/') + '/index.html';
  }

  return [...map.values()];
}

async function getExport(organizationId: string, docId: string, docExport: DocExport, retries = 0) {
  if (retries > 3) {
    throw new Error('Too many retries');
  }
  const { exportId, filename } = docExport;
  const exportStatus = (await client.getExportRequestStatus({ organizationId, docId, exportId })).data;
  switch (exportStatus.status) {
    case 'Complete': {
      const filenameWithExtension = `${filename}.${docExport.format.toLowerCase()}`;
      console.log(`Downloading:${docExport.format}: ${filenameWithExtension}`);
      const downloadLink = exportStatus.downloadLink!;
      let response;
      try {
        response = await axiosDownload.get<ArrayBuffer>(downloadLink, { responseType: 'arraybuffer' });
      } catch (e) {
        if (axios.isAxiosError(e) && (e.response?.status === 403)) {
          // Sometimes the download link seems to expire, so retry
          console.error('EXPORT 403 ERROR (expired download link?), retrying:', e.message, downloadLink);
          return getExport(organizationId, docId, docExport, retries + 1);
        }
        throw e;
      }
      const buffer = Buffer.from(response.data);
      await fs.promises.mkdir(filenameWithExtension.split('/').slice(0, -1).join('/'), { recursive: true });
      await fs.promises.writeFile(filenameWithExtension, buffer);
      if (docExport.format === 'HTML') {
        console.log(`Parsing: ${filenameWithExtension}`);
        const htmlDocExport = {
          ...docExport,
          filename: docExport.filename.split('/').slice(0, -1).join('/'),
        }
        await parseHTML(htmlDocExport, buffer)
      }
      console.log(`Done:${docExport.format}: ${filenameWithExtension}`);
      break;
    }
    case 'InProgress':
      console.log(`Export in progress: ${docExport.doc.name} ${JSON.stringify(exportStatus)}`);
      await sleep(5000);
      return getExport(organizationId, docId, docExport);
    case 'Failed':
      throw new Error(`Failed export: ${JSON.stringify(exportStatus)}`);
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`Unhandled export status ${exportStatus.status satisfies never}: ${JSON.stringify(exportStatus)}`);
  }
}

async function downloadImage(img: HTMLImageElement, docExport: DocExport, pageInfo: PageInfo) {
  const src = img.src;
  console.log('image:', src);
  if (!src.startsWith("https://codahosted.io/")) {
    console.log('Non-coda hosted image:' + src);
    return;
  }
  // apparently not all images have data attributes?
  // const codaHash = img.dataset['codaBlobHash'];
  const codaHash = src.split('/').pop()!;
  if (codaHash.length != 200) {
    throw new Error('non codaBlobHash image?' + src);
  }

  // TODO capture the response content type and convert to file extension
  // probably use npm mime-types
  // or convert img.dataset.codaMimeType mime type to file extension, fall back to png if missing
  // or maybe guess based on magic in the image file

  let response: AxiosResponse<ArrayBuffer>;
  try {
    response = await axiosDownload.get(src, { responseType: 'arraybuffer' });
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      console.error('Image 404:', src);
      return;
    }
    throw e;
  }

  let extension = 'png';
  if (response.headers instanceof AxiosHeaders) {
    const contentType = response.headers.get('Content-Type');
    if (contentType && typeof contentType === 'string') {
      extension = mime.extension(contentType) || 'png';
    }
  }

  const imgAbsolutePath = `${docExport.filename}/images/${codaHash}.${extension}`;
  const imgRelativePath = '../'.repeat(pageInfo.path.split('/').length - 1) + `images/${codaHash}.${extension}`;

  const buffer = Buffer.from(response.data);
  await fs.promises.mkdir(`${docExport.filename}/images`, { recursive: true });
  const tmpPath = `${imgAbsolutePath}.tmp-${Math.random().toString(36).slice(2)}`;
  await fs.promises.writeFile(tmpPath, buffer);
  // atomic file write (other pages might write the same file)
  await fs.promises.rename(tmpPath, imgAbsolutePath);

  img.setAttribute('src', imgRelativePath);

  console.log('done:', src);
}

async function parseHTML(docExport: DocExport, buffer: Buffer) {
  const dom = new JSDOM(buffer.toString("utf-8"));

  // Try as hard as possible to only get the page headings, but this still picks up a few other headings
  const headings = [...dom.window.document.querySelectorAll('body > h2:not([style])')];

  // apparently the headings are in the exact order the pages api returns
  // which is basically all the "folders"/parent pages first and then the child pages, which is an insane ordering
  const pages = [...docExport.pageInfo];

  const bodyElements = [...dom.window.document.body.childNodes]
  let pageElements: ChildNode[] = [];
  let page: PageInfo | undefined;
  const pendingPageWrites: Promise<void>[] = [];

  const diff = diffArrays(pages, headings, {
    comparator: (a, b) => a.page.name === b.textContent?.replace(/\xa0/g, " "), // convert non-breaking spaces to space
  });

  if (DEBUG) {
    for (const change of diff) {
      for (const node of change.value) {
        const type = change.added ? '+ ' : change.removed ? '- ' : '  ';
        if ("tagName" in node) {
          console.log(`${type}${node.textContent}`);
        } else {
          console.log(`${type}PAGE: ${node.page.name}`);
        }
      }
    }
  }

  for (const change of diff) {
    if (change.removed) {
      throw new Error('Failed to align diff for doc: found removed element:' + docExport.doc.name);
    }
    if (change.added) {
      continue;
    }

    for (const node of change.value) {
      if ("tagName" in node) {
        if (page) {
          while (bodyElements[0] !== node) {
            pageElements.push(bodyElements.shift()!);
          }
          pendingPageWrites.push(writePage(pageElements, docExport, page));
        }

        pageElements = [];
        page = pages.shift()!;
      } else {
        throw new Error('Failed to align diff for doc: got non-element in diff results:' + docExport.doc.name);
      }
    }
  }

  if (page) {
    pageElements.push(...bodyElements);
    pendingPageWrites.push(writePage(pageElements, docExport, page));
  }

  pendingPageWrites.push(writeTOC(docExport));

  return Promise.all(pendingPageWrites);
}

async function writePage(nodes: ChildNode[], docExport: DocExport, pageInfo: PageInfo) {
  const dom = new JSDOM('<!DOCTYPE html><meta charset="utf-8">');
  const document = dom.window.document;

  const title = document.createElement('title');
  title.textContent = `${docExport.doc.name} • ${pageInfo.page.name}`;

  const style = document.createElement('style');
  style.innerHTML = `
  a[href^="mailto:"]::before{
    content: "@";
  }
  iframe#toc {
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    border: 0;
  }
  body {
    margin-left: 320px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  `;

  const tocRelativePath = '../'.repeat(pageInfo.path.split('/').length - 1) + `index.html`;
  const toc = document.createElement('iframe');
  toc.id = 'toc';
  toc.src = tocRelativePath;

  document.head.append(title, style);
  document.body.append(toc, ...nodes); // maybe should do node.cloneNode(true), but we don't care about these nodes in the old doc anymore

  const images = [...dom.window.document.getElementsByTagName('img')];
  await Promise.all(images.map(async (img) => { await downloadImage(img, docExport, pageInfo); }));

  const pagePath = `${docExport.filename}/${pageInfo.path}`;
  await fs.promises.mkdir(pagePath.split('/').slice(0, -1).join('/'), { recursive: true });
  await fs.promises.writeFile(pagePath, dom.serialize(), 'utf-8');
}

async function writeTOC(docExport: DocExport) {
  const dom = new JSDOM('<!DOCTYPE html><meta charset="utf-8">');
  const document = dom.window.document;

  const style = document.createElement('style');
  style.innerHTML = `
  body {
    margin-right: 10px;
    background-color:rgb(240, 240, 240);
  }
  h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    font-size: 1.5em;
  }
  ul {
    padding-left: 1rem;
  }
  `;
  document.head.append(style);

  const h1 = document.createElement('h1');
  h1.textContent = docExport.doc.name;
  document.body.append(h1);

  const toc = document.createElement('ul');
  document.body.append(toc);

  function addTOCLevel(parent: HTMLUListElement, pageInfo: PageInfo) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = pageInfo.page.name
    a.href = pageInfo.path;
    a.target = '_top';
    li.append(a);

    if (pageInfo.children.length) {
      const ul = document.createElement('ul');
      li.append(ul);
      for (const child of pageInfo.children) {
        addTOCLevel(ul, child);
      }
    }
    parent.append(li);
  }

  docExport.pageInfo
    .filter(pageInfo => pageInfo.parent === null)
    .forEach(pageInfo => addTOCLevel(toc, pageInfo));

  await fs.promises.mkdir(`${docExport.filename}`, { recursive: true });
  await fs.promises.writeFile(`${docExport.filename}/index.html`, dom.serialize(), 'utf-8');
}

const organizationId = args.values.orgId;
if (!organizationId) {
  console.error('Error: --orgId is required\n');
  const organizations = (await client.listOrganizations()).data.items;
  console.error('Available organizations from current API key:');
  console.error('ID                   NAME');
  for (const org of organizations) {
    console.error(`${org.id.padEnd(20)} ${org.name}`);
  }
  console.error('');
  printUsage();
  process.exit(1);
}

let docs: Doc[];
const docId = args.values.docId
if (docId) {
  const doc = (await client.getDoc({ organizationId, docId })).data;
  docs = [doc];
} else {
  console.log("docId not specified, will download all docs");
  docs = await paginate(client.listDocs, { organizationId });
}

// This is great for downloading all Docs in parallel, but I hit way too many rate limiting errors and weird issues
// await Promise.all(docs.map(doc => exportDoc(doc, organizationId)))

// Instead, download docs one at a time, and support resumption:

const exportLogPath = `${outputDir}/exported-doc-ids.txt`;
let completedExports = new Set<string>();
if (fs.existsSync(exportLogPath)) {
  const logContent = await fs.promises.readFile(exportLogPath, 'utf-8');
  completedExports = new Set(logContent.split('\n').filter(Boolean));
}

for (const doc of docs) {
  if (completedExports.has(doc.id)) {
    console.log(`Skipping already exported doc ${doc.id}: ${doc.name}`);
    continue;
  }

  await exportDoc(doc, organizationId);

  await fs.promises.appendFile(exportLogPath, doc.id + '\n');
  completedExports.add(doc.id);
}
