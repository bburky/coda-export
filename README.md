# coda-export

Using the [Coda Admin API](https://coda.io/developers/apis/admin/v1), export all [coda.io](https://coda.io/) docs in all available formats (PDF, HTML and Plaintext).

Coda's native export appears to order the pages in the export in a weird preorder tree traversal order (that is: the all of the parent pages first, then all the child pages at the end).

So this script additionally splits Coda's HTML export into multiple files per Coda page and stores the files on disk in a tree structure. A TOC/index page is also built and added to the split HTML export. All images from https://codahosted.io/ are downloaded locally and `<img>` tags are rewritten to reference the local files.

Note the page splitting is a heuristic based on matching `<h2>` tags in the export to page names, which is a fuzzy heuristic and may be imprecise. Worst case some of your content may be added to a different page, but no data should not be lost.

I wrote this script to export all data from Coda before we deactivated our account, so I will likely not be updating this script in the future. But hopefully it's useful to someone else.

This script is a bit hacky in parts, sorry.

```sh
npm install

# Run the Coda export
npm run coda-export --codaApiKey your-api-key --orgId org-1AbcdeFgh1 --out out/
```

In the future this will probably work, but currently errors with "Stripping types is currently unsupported for files under node_modules" (this project uses `--experimental-strip-types --experimental-transform-types`)
```sh
npx github:bburky/coda-export
```

If you need to update the Admin API TypeScript types:
```sh
curl -o admin-v1-openapi.json https://coda.io/apis/admin/v1/openapi.json
npx openapicmd typegen ./admin-v1-openapi.yaml > admin.d.ts
```

### Notes

* Deleted/hidden pages show up in the output, and are not marked as hidden
* Some Coda Pages are apparently missing from the API and export (the UI is also missing a "copy link to page" for these pages)
* Page splitting is a heuristic, it may be it wrong. But worst case, stuff just goes on a different page, there is no data loss
* Sometimes you may get an export error of `Failed due to internal error; please contact Coda support.`, especially on PDF downloads
* Axios error messages include the authentication header unredacted

### TODO

* Handle duplicate doc names gracefully
  * include doc id in filename? This is ugly, maybe make it optional
  * Can be worked around with exporting docs individually with --docId
* fixup links between docs? (could build a map of doc id and page id, and attempt to parse Coda URLs)
* check for duplicate page names, avoid clobbering duplicate filenames (filenames may collide after substituting characters)
* I assume codaBlobHash is actually a unique hash on images?
* maybe download images on domains other than than codahosted too
* yellow styling boxes are lost, perhaps they can be restored if the expected style can be guessed from HTML tag attributes
* switch back to parallel download of docs (seems to too easily exhaust rate limits though)
* stream images and PDF downloads to disk and avoid buffering in RAM
* figure out what good ratelimit settings are and try reenabling parallel download of docs
