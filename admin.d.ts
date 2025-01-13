import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Parameters {
        export type ApiTokenId = string; // uuid
        export type DocAvailabilityState = /* The availability state of a doc. */ Schemas.DocAvailabilityState;
        export type DocId = string;
        export type DocIds = string[];
        export type DocPermissionId = string; // uuid
        export type DocTypes = Schemas.DocType[];
        export type ExportId = string; // uuid
        export type FolderId = string;
        export type FolderIds = string[];
        export type FolderType = Schemas.FolderType;
        export type GroupId = string;
        export type IsActivated = boolean;
        export type LegalHoldExportId = string; // uuid
        export type LegalHoldId = string; // uuid
        export type Limit = number;
        export type OptionalQueryPackId = number;
        export type OptionalQueryPackIds = number[];
        export type OrganizationId = string;
        export type OutputFormat = /* Output format of the doc or page content. */ Schemas.OutputFormat;
        export type PackConfigurationId = string;
        export type PackConfigurationPermissionId = string;
        export type PackId = number;
        export type PageId = string;
        export type PageToken = string;
        export type PageViewersLimit = number;
        export type PermissionId = string;
        export type Query = string;
        export type SinceDate = string; // date
        export type UntilDate = string; // date
        export type UserEmail = string; // email
        export type WebhookId = string; // uuid
        export type WorkspaceId = string;
        export type WorkspaceIds = string[];
        export type WorkspaceUserRoles = Schemas.WorkspaceUserRole[];
    }
    export interface PathParameters {
        apiTokenId: Parameters.ApiTokenId /* uuid */;
        packConfigurationId: Parameters.PackConfigurationId;
        docId: Parameters.DocId;
        docPermissionId: Parameters.DocPermissionId /* uuid */;
        exportId: Parameters.ExportId /* uuid */;
        folderId: Parameters.FolderId;
        groupId: Parameters.GroupId;
        legalHoldExportId: Parameters.LegalHoldExportId /* uuid */;
        legalHoldId: Parameters.LegalHoldId /* uuid */;
        organizationId: Parameters.OrganizationId;
        packId: Parameters.PackId;
        pageId: Parameters.PageId;
        permissionId: Parameters.PermissionId;
        packConfigurationPermissionId: Parameters.PackConfigurationPermissionId;
        userEmail: Parameters.UserEmail /* email */;
        webhookId: Parameters.WebhookId /* uuid */;
        workspaceId: Parameters.WorkspaceId;
    }
    export interface QueryParameters {
        docAvailabilityState?: Parameters.DocAvailabilityState;
        docIds?: Parameters.DocIds;
        docTypes?: Parameters.DocTypes;
        folderIds?: Parameters.FolderIds;
        folderType?: Parameters.FolderType;
        isActivated?: Parameters.IsActivated;
        limit?: Parameters.Limit;
        optionalQueryPackId?: Parameters.OptionalQueryPackId;
        optionalQueryPackIds?: Parameters.OptionalQueryPackIds;
        outputFormat?: Parameters.OutputFormat;
        pageToken?: Parameters.PageToken;
        pageViewersLimit?: Parameters.PageViewersLimit;
        query?: Parameters.Query;
        sinceDate: Parameters.SinceDate /* date */;
        untilDate: Parameters.UntilDate /* date */;
        workspaceIds?: Parameters.WorkspaceIds;
        workspaceUserRoles?: Parameters.WorkspaceUserRoles;
    }
    namespace Responses {
        /**
         * An HTTP error resulting from an unsuccessful request.
         */
        export interface BadRequestError {
            /**
             * HTTP status code of the error.
             * example:
             * 400
             */
            statusCode: number;
            /**
             * HTTP status message of the error.
             * example:
             * Bad Request
             */
            statusMessage: string;
            /**
             * Any additional context on the error, or the same as `statusMessage` otherwise.
             * example:
             * Bad Request
             */
            message: string;
        }
        /**
         * An HTTP error resulting from an unsuccessful request.
         */
        export interface ForbiddenError {
            /**
             * HTTP status code of the error.
             * example:
             * 403
             */
            statusCode: number;
            /**
             * HTTP status message of the error.
             * example:
             * Forbidden
             */
            statusMessage: string;
            /**
             * Any additional context on the error, or the same as `statusMessage` otherwise.
             * example:
             * Forbidden
             */
            message: string;
        }
        /**
         * An HTTP error resulting from an unsuccessful request.
         */
        export interface NotFoundError {
            /**
             * HTTP status code of the error.
             * example:
             * 404
             */
            statusCode: number;
            /**
             * HTTP status message of the error.
             * example:
             * Not Found
             */
            statusMessage: string;
            /**
             * Any additional context on the error, or the same as `statusMessage` otherwise.
             * example:
             * Not Found
             */
            message: string;
        }
        /**
         * An HTTP error resulting from an unsuccessful request.
         */
        export interface TooManyRequestsError {
            /**
             * HTTP status code of the error.
             * example:
             * 429
             */
            statusCode: number;
            /**
             * HTTP status message of the error.
             * example:
             * Too Many Requests
             */
            statusMessage: string;
            /**
             * Any additional context on the error, or the same as `statusMessage` otherwise.
             * example:
             * Too Many Requests
             */
            message: string;
        }
        /**
         * An HTTP error resulting from an unsuccessful request.
         */
        export interface UnauthorizedError {
            /**
             * HTTP status code of the error.
             * example:
             * 401
             */
            statusCode: number;
            /**
             * HTTP status message of the error.
             * example:
             * Unauthorized
             */
            statusMessage: string;
            /**
             * Any additional context on the error, or the same as `statusMessage` otherwise.
             * example:
             * Unauthorized
             */
            message: string;
        }
    }
    namespace Schemas {
        /**
         * Type of access.
         */
        export type AccessType = "readonly" | "write" | "comment" | "none";
        /**
         * Type of access (excluding none).
         */
        export type AccessTypeNotNone = "readonly" | "write" | "comment";
        /**
         * Paginated list of Permissions.
         */
        export interface Acl {
            items: /* A specific permission granted to a principal. */ Permission[];
            /**
             * API link to these results
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             */
            nextPageLink?: string; // url
        }
        /**
         * Doc level metadata associated with ACL.
         */
        export interface AclMetadata {
            /**
             * When true, the user of the API can share
             */
            canShare: boolean;
            /**
             * When true, the user of the API can share with the workspace
             */
            canShareWithWorkspace: boolean;
            /**
             * When true, the user of the API can share with the org
             */
            canShareWithOrg: boolean;
            /**
             * When true, the user of the API can copy the doc
             */
            canCopy: boolean;
        }
        /**
         * Request payload for creating a legal hold export.
         */
        export interface AddLegalHoldExportRequest {
            /**
             * The name of the new legal hold export
             * example:
             * Export of docs for investigation matter 123
             */
            name: string;
            /**
             * Exports docs in the state they were in as of this timestamp
             * example:
             * 2024-01-08T00:00:00.000Z
             */
            exportAt?: string; // date-time
            /**
             * List of doc IDs to include in the export
             */
            docIds?: string[];
        }
        /**
         * The result of creating a legal hold export.
         */
        export interface AddLegalHoldExportResult {
            /**
             * Id of the new legal hold export
             */
            id: string; // uuid
        }
        /**
         * Request payload for creating a legal hold.
         */
        export interface AddLegalHoldRequest {
            /**
             * The name of the new legal hold
             * example:
             * Investigation Matter 123
             */
            name: string;
            /**
             * Description of the new legal hold
             * example:
             * Holding docs for legal matter 123
             */
            description?: string;
            /**
             * Timestamp of the beginning of the hold range
             * example:
             * 2024-01-08T00:00:00.000Z
             */
            rangeStart: string; // date-time
            /**
             * Timestamp of the end of the hold range
             * example:
             * 2024-04-11T00:00:00.000Z
             */
            rangeEnd?: string; // date-time
            /**
             * List of email addresses of users to include in the hold.
             */
            userEmails: string /* email */[];
        }
        /**
         * The result of creating a legal hold.
         */
        export interface AddLegalHoldResult {
            /**
             * Id of the new legal hold
             */
            id: string; // uuid
        }
        /**
         * Payload for granting a new Pack configuration permission.
         */
        export interface AddPackConfigurationPermissionRequest {
            principal: /* Metadata about a principal to add to a doc. */ AddedPrincipal;
        }
        /**
         * Payload for a request to add a Pack configuration.
         */
        export interface AddPackConfigurationRequest {
            /**
             * The name for the Pack configuration
             */
            name: string;
            policy: /* The Pack configuration policy that governs connection details and Pack resources that a principal is allowed to use. It also defines if doc sharing permissions will be enforced to match principals allowed to use this policy. */ Policy;
            /**
             * The ID of the Pack.
             * example:
             * 123
             */
            packId: number;
        }
        /**
         * Payload for granting a new permission.
         */
        export interface AddPermissionRequest {
            access: /* Type of access (excluding none). */ AccessTypeNotNone;
            principal: /* Metadata about a principal to add to a doc. */ AddedPrincipal;
            /**
             * When true suppresses email notification
             */
            suppressEmail?: boolean;
        }
        /**
         * The result of adding a permission.
         */
        export interface AddPermissionResult {
        }
        /**
         * Payload for creating or updating a webhook subscription.
         */
        export interface AddWebhookRequest {
            /**
             * Name of the webhook subscription.
             * example:
             * My webhook
             */
            name?: string;
            resource: /* Type of resource a webhook is subscribed to. */ WebhookWatchedResource;
            /**
             * The target URL where webhook payloads will be sent
             * example:
             * https://example.com/my/coda/webhook/endpoint
             */
            target: string; // url
            filters?: /* Filter set for the webhook subscription. */ WebhookFilter;
        }
        /**
         * Payload for adding an existing user to a workspace.
         */
        export interface AddWorkspaceUserRequest {
            /**
             * The email address of the existing user to add to the workspace.
             * example:
             * joe@example.com
             */
            email: string;
            role: WorkspaceUserRole;
        }
        export interface AddedAnyonePrincipal {
            /**
             * The type of this principal.
             */
            type: "anyone";
        }
        export interface AddedDomainPrincipal {
            /**
             * The type of this principal.
             */
            type: "domain";
            /**
             * Domain for the principal.
             * example:
             * domain.com
             */
            domain: string;
        }
        export interface AddedEmailPrincipal {
            /**
             * The type of this principal.
             */
            type: "email";
            /**
             * Email for the principal.
             * example:
             * example@domain.com
             */
            email: string;
        }
        export interface AddedGroupPrincipal {
            /**
             * The type of this principal.
             */
            type: "group";
            /**
             * Group ID for the principal.
             * example:
             * grp-6SM9xrKcqW
             */
            groupId: string;
        }
        /**
         * Metadata about a principal to add to a doc.
         */
        export type AddedPrincipal = /* Metadata about a principal to add to a doc. */ AddedEmailPrincipal | AddedGroupPrincipal | AddedDomainPrincipal | AddedWorkspacePrincipal | AddedAnyonePrincipal;
        export interface AddedWorkspacePrincipal {
            /**
             * The type of this principal.
             */
            type: "workspace";
            /**
             * WorkspaceId for the principal.
             * example:
             * ws-sdfmsdf9
             */
            workspaceId: string;
        }
        export interface AnyonePrincipal {
            /**
             * The type of this principal.
             */
            type: "anyone";
        }
        /**
         * Info about an API Token.
         */
        export interface ApiToken {
            /**
             * The type of this resource.
             */
            type: "apiToken";
            /**
             * ID of the Coda API Token.
             * example:
             * AbCDeFGH
             */
            id: string;
            /**
             * Name of the Coda API Token.
             * example:
             * Cool Coda Integration
             */
            name: string;
        }
        /**
         * Info about a Coda billing account.
         */
        export interface BillingAccount {
            /**
             * The type of this resource.
             */
            type: "billingAccount";
            /**
             * ID of the Coda billing account.
             * example:
             * ba-1Ab234
             */
            id: string;
        }
        /**
         * Info about a Coda Brain query.
         */
        export interface BrainQuery {
            /**
             * The type of this resource.
             */
            type: "brainQuery";
        }
        /**
         * Broadest type of principal a Pack configuration is shared with.
         */
        export type BroadestSharedWith = "user" | "group" | "organization" | "nobody";
        /**
         * Type of doc activity date.
         */
        export type DateActivity = "lastModified" | "created";
        /**
         * The result of deleting a doc.
         */
        export interface DeleteDocResult {
        }
        /**
         * The result of deleting a legal hold export.
         */
        export interface DeleteLegalHoldExportResult {
        }
        /**
         * The result of deleting a legal hold.
         */
        export interface DeleteLegalHoldResult {
        }
        /**
         * The result of deleting OAuth configuration metadata associated with a Pack configuration.
         */
        export interface DeletePackConfigurationOauthConfigResult {
        }
        /**
         * The result of deleting a Pack configuration permission.
         */
        export interface DeletePackConfigurationPermissionResponse {
        }
        /**
         * Response indication a request to delete a Pack configuration was successful.
         */
        export interface DeletePackConfigurationResponse {
        }
        /**
         * The result of deleting a permission.
         */
        export interface DeletePermissionResult {
        }
        /**
         * The result of deleting a webhook subscription.
         */
        export interface DeleteWebhookResult {
        }
        /**
         * Info about a Coda doc.
         */
        export interface Doc {
            /**
             * The type of this resource.
             */
            type: "doc";
            /**
             * ID of the Coda doc.
             * example:
             * AbCDeFGH
             */
            id: string;
            /**
             * Name of the doc.
             * example:
             * Product Launch Hub
             */
            name: string;
            /**
             * Name of the icon.
             * example:
             * exclamation-circle-filled
             */
            icon?: string;
            /**
             * API link to the Coda doc.
             * example:
             * https://coda.io/apis/admin/v1/docs/AbCDeFGH
             */
            href: string; // url
            /**
             * Browser-friendly link to the Coda doc.
             * example:
             * https://coda.io/d/_dAbCDeFGH
             */
            browserLink: string; // url
            /**
             * ID of the Coda doc's folder.
             * example:
             * fl-es129308
             */
            folderId: string;
            /**
             * ID of the Coda doc's workspace.
             * example:
             * ws-sdfmsdf9
             */
            workspaceId: string;
            /**
             * Email address of the doc owner
             * example:
             * april@example.com
             */
            owner?: string; // email
            /**
             * Name of the doc owner
             * example:
             * April Jane
             */
            ownerName?: string;
            /**
             * Timestamp for when the doc was created.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            createdAt?: string; // date-time
            /**
             * Timestamp for when the doc was last modified.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            updatedAt?: string; // date-time
            acl?: /* A specific permission granted to a principal. */ Permission[];
            /**
             * True if the inline ACL field was truncated; use a paginated ACL query to fetch all permissions.
             */
            truncatedAcl?: boolean;
            aclSummary?: /* Summary of permissions. */ PermissionsSummary;
            searchHit?: /* Details on where the search query appeared in the doc. */ DocSearchHit;
            /**
             * Deprecated, use documentAnalytics instead.
             * example:
             * 42
             */
            docUsersLast90Days?: number;
            /**
             * True if the doc has been deleted.
             * example:
             * false
             */
            isDeleted?: boolean;
            /**
             * Number of Packs installed in the doc.
             * example:
             * 3
             */
            installedPackCount?: number;
            /**
             * True if the doc is published and discoverable via the web.
             * example:
             * true
             */
            discoverableViaWeb?: boolean;
            documentAnalytics?: /* Metrics for a doc. */ DocumentAnalytics;
        }
        /**
         * The availability state of a doc.
         */
        export type DocAvailabilityState = "online" | "deleted";
        /**
         * Format of the doc export
         */
        export type DocExportFormat = "PDF" | "Plaintext" | "HTML";
        /**
         * Orientation of the doc export. Defaults to Portrait.
         */
        export type DocExportOrientation = "Landscape" | "Portrait";
        /**
         * Size of pages in the resulting export, if supported by the export format. Defaults to Letter.
         */
        export type DocExportPaperSize = "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6" | "Letter" | "Legal" | "Tabloid";
        /**
         * Request payload for exporting a doc
         */
        export interface DocExportRequest {
            format: /* Format of the doc export */ DocExportFormat;
            orientation?: /* Orientation of the doc export. Defaults to Portrait. */ DocExportOrientation;
            paperSize?: /* Size of pages in the resulting export, if supported by the export format. Defaults to Letter. */ DocExportPaperSize;
            /**
             * The email address of the user to export the doc as.
             * example:
             * joe@example.com
             */
            exportDocAsUserEmail?: string;
        }
        /**
         * Status of a doc export request
         */
        export type DocExportStatus = "InProgress" | "Failed" | "Complete";
        /**
         * Response payload that includes the status and location of a doc export request.
         */
        export interface DocExportStatusResponse {
            /**
             * ID of the export request.
             * example:
             * AbCDeFGH
             */
            id: string;
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs/<your doc id>/export/<your export request id>
             */
            href?: string; // url
            status: /* Status of a doc export request */ DocExportStatus;
            /**
             * If the export failed, this field includes the reason.
             */
            error?: string;
            /**
             * Once the export completes, the location where the resulting file can be downloaded; this link typically expires after a short time.  Call this method again to get a fresh link.
             */
            downloadLink?: string;
        }
        /**
         * List of docs.
         */
        export interface DocList {
            items: /* Info about a Coda doc. */ Doc[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * The field to sort by.
         */
        export type DocListSortField = "name" | "createdAt" | "lastActiveDate" | "numPages" | "numPageViewsLast90Days" | "numCollaboratorsLast90Days";
        /**
         * Metadata for a Packs connection linked to a doc.
         */
        export interface DocPackConnection {
            /**
             * The type of this resource.
             */
            type: "docPackConnection";
            doc: /* Info about a Coda doc. */ Doc;
            /**
             * ID of the connection linked to this doc.
             * example:
             * 88648447-d2c3-4bdb-b476-2150596da2e4
             */
            connectionId: string;
            pack: /* Info about a Pack. */ Pack;
            owner: /* Info about the user who initiated an action. */ User;
            workspace: /* Info about a Coda workspace. */ Workspace;
            /**
             * Description of the Pack connection.
             * example:
             * hello@coda.io (2)
             */
            description: string;
            readAccess: /* Who in the doc has access to read data using the connection. */ DocPackConnectionReadAccess;
            writeAccess: /* Who in the doc has access to perform actions using the connection. */ DocPackConnectionWriteAccess;
        }
        /**
         * List of connections linked to docs.
         */
        export interface DocPackConnectionList {
            items: /* Metadata for a Packs connection linked to a doc. */ DocPackConnection[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/{organizationId}/docs/packConnections
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/{organizationId}/docs/packConnections?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Who in the doc has access to read data using the connection.
         */
        export type DocPackConnectionReadAccess = "Anyone" | "None";
        /**
         * Who in the doc has access to perform actions using the connection.
         */
        export type DocPackConnectionWriteAccess = "Anyone" | "Self" | "None";
        /**
         * Details on where the search query appeared in the doc.
         */
        export interface DocSearchHit {
            /**
             * Snippet of text from the doc showing context for the search match.
             * example:
             * Objective: Key Results:
             * * Reach <span class="hit">feature parity</span> with previous version
             *
             */
            matchText: string;
            /**
             * Browser-friendly link to the location in the Coda doc where the search term appears.
             * example:
             * https://coda.io/d/_dAbCDeFGH
             */
            browserLink: string; // url
        }
        export type DocType = "doc" | "form" | "template";
        /**
         * Metrics for a doc.
         */
        export interface DocumentAnalytics {
            /**
             * Timestamp for when the doc was last accessed.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            lastActiveDate?: string; // date-time
            /**
             * Number of pages in the doc.
             * example:
             * 3
             */
            numPages: number;
            /**
             * Number of page views in the last 90 days.
             * example:
             * 42
             */
            numPageViewsLast90Days: number;
            /**
             * Number of unique users that have viewed the doc in the last 90 days.
             * example:
             * 42
             */
            numCollaboratorsLast90Days: number;
            /**
             * Domains of users external to the organization this doc is shared with.
             * example:
             * [
             *   "gmail.com",
             *   "outlook.com"
             * ]
             */
            externallySharedUserDomains?: string /* email */[];
        }
        export interface DomainPrincipal {
            /**
             * The type of this principal.
             */
            type: "domain";
            /**
             * Domain for the principal.
             * example:
             * domain.com
             */
            domain: string;
        }
        export interface EmailPrincipal {
            /**
             * The type of this principal.
             */
            type: "email";
            /**
             * Email for the principal.
             * example:
             * example@domain.com
             */
            email: string;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export type Entity = {
            /**
             * Entity type.
             */
            type: "apiToken" | "billingAccount" | "brainQuery" | "doc" | "docPackConnection" | "folder" | "group" | "ingestion" | "legalHold" | "legalHoldExport" | "organization" | "pack" | "page" | "permission" | "syncPage" | "syncPageTunnel" | "user" | "webhook" | "workspace";
        } & (/* Info about the entity or resource being acted upon. */ /* Info about the entity or resource being acted upon. */ EntityApiToken | /* Info about the entity or resource being acted upon. */ EntityBillingAccount | /* Info about the entity or resource being acted upon. */ EntityBrainQuery | /* Info about the entity or resource being acted upon. */ EntityDoc | /* Info about the entity or resource being acted upon. */ EntityDocPackConnection | /* Info about the entity or resource being acted upon. */ EntityFolder | /* Info about the entity or resource being acted upon. */ EntityGroup | /* Info about the entity or resource being acted upon. */ EntityIngestion | /* Info about the entity or resource being acted upon. */ EntityLegalHold | /* Info about the entity or resource being acted upon. */ EntityLegalHoldExport | /* Info about the entity or resource being acted upon. */ EntityOrganization | /* Info about the entity or resource being acted upon. */ EntityPack | /* Info about the entity or resource being acted upon. */ EntityPage | /* Info about the entity or resource being acted upon. */ EntityPermission | /* Info about the entity or resource being acted upon. */ EntitySyncPage | /* Info about the entity or resource being acted upon. */ EntitySyncPageTunnel | /* Info about the entity or resource being acted upon. */ EntityUser | /* Info about the entity or resource being acted upon. */ EntityWebhook | /* Info about the entity or resource being acted upon. */ EntityWorkspace);
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityApiToken {
            /**
             * Entity type.
             */
            type: "apiToken";
            apiToken: /* Info about an API Token. */ ApiToken;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityBillingAccount {
            /**
             * Entity type.
             */
            type: "billingAccount";
            billingAccount: /* Info about a Coda billing account. */ BillingAccount;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityBrainQuery {
            /**
             * Entity type.
             */
            type: "brainQuery";
            brainQuery: /* Info about a Coda Brain query. */ BrainQuery;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityDoc {
            /**
             * Entity type.
             */
            type: "doc";
            doc: /* Info about a Coda doc. */ Doc;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityDocPackConnection {
            /**
             * Entity type.
             */
            type: "docPackConnection";
            docPackConnection: /* Metadata for a Packs connection linked to a doc. */ DocPackConnection;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityFolder {
            /**
             * Entity type.
             */
            type: "folder";
            folder: /* Info about a Coda folder. */ Folder;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityGroup {
            /**
             * Entity type.
             */
            type: "group";
            group: /* Info about a group. */ Group;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityIngestion {
            /**
             * Entity type.
             */
            type: "ingestion";
            ingestion: /* Info about a Coda Brain ingestion. */ Ingestion;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityLegalHold {
            /**
             * Entity type.
             */
            type: "legalHold";
            legalHold: /* Info about a legal hold. */ LegalHold;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityLegalHoldExport {
            /**
             * Entity type.
             */
            type: "legalHoldExport";
            legalHoldExport: /* Info about a legal hold export */ LegalHoldExport;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityOrganization {
            /**
             * Entity type.
             */
            type: "organization";
            organization: /* Info about a Coda organization. */ Organization;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityPack {
            /**
             * Entity type.
             */
            type: "pack";
            pack: /* Info about a Pack. */ Pack;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityPage {
            /**
             * Entity type.
             */
            type: "page";
            page: /* Info about a page. */ Page;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityPermission {
            /**
             * Entity type.
             */
            type: "permission";
            permission: /* A specific permission granted to a principal. */ Permission;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntitySyncPage {
            /**
             * Entity type.
             */
            type: "syncPage";
            syncPage: /* Information about a sync page */ SyncPage;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntitySyncPageTunnel {
            /**
             * Entity type.
             */
            type: "syncPageTunnel";
            syncPageTunnel: /* Information about a sync page tunnel */ SyncPageTunnel;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityUser {
            /**
             * Entity type.
             */
            type: "user";
            user: /* Info about the user who initiated an action. */ User;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityWebhook {
            /**
             * Entity type.
             */
            type: "webhook";
            webhook: /* Info about a webhook subscription. */ Webhook;
        }
        /**
         * Info about the entity or resource being acted upon.
         */
        export interface EntityWorkspace {
            /**
             * Entity type.
             */
            type: "workspace";
            workspace: /* Info about a Coda workspace. */ Workspace;
        }
        /**
         * Info about the event.
         */
        export interface Event {
            /**
             * Unix timestamp of when this audit event was created.
             * example:
             * 1614175261
             */
            timestamp: number;
            user: /* Info about the user who initiated an action. */ User;
            userContext: /* Additional context about how the user who initiated an action. */ UserContext;
            /**
             * Name of the action attempted.
             * example:
             * docAccessDenied
             */
            action: string;
            entity: /* Info about the entity or resource being acted upon. */ Entity;
            /**
             * Additional details for this event.
             */
            eventDetails?: {
                [key: string]: any;
            };
            /**
             * Result of the attempted action.
             * example:
             * Success
             */
            result: string;
            /**
             * ID of the Coda organization.
             * example:
             * org-1AbcdeFgh1
             */
            organizationId: string;
            /**
             * ID of the event.
             * example:
             * c4515dc3-cb8d-4a57-9346-d37953f0a628
             */
            eventId: string;
        }
        export interface EventList {
            items: /* Info about the event. */ Event[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/audit/events?limit=20
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/audit/events?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Exact count of permissions.
         */
        export interface ExactPermissionCount {
            /**
             * The type of this resource.
             */
            type: "exactCount";
            /**
             * Exact count of permissions.
             */
            exactCount: number;
        }
        /**
         * Pricing plan associated with a workspace.
         */
        export type FeatureSet = "Free" | "Pro" | "Team" | "Enterprise";
        /**
         * How to fetch permissions for a given doc. List returns all permissions (up to a limit), summary gives an aggregated permission summary, and none returns no permissions.
         */
        export type FetchPermissionsMode = "list" | "summary" | "none";
        /**
         * Info about a Coda folder.
         */
        export interface Folder {
            /**
             * The type of this resource.
             */
            type: "folder";
            /**
             * ID of the Coda folder.
             * example:
             * fl-1Ab234
             */
            id: string;
            /**
             * Name of the Coda folder.
             * example:
             * My docs
             */
            name: string;
            /**
             * Name of the Coda folder icon.
             * example:
             * exclamation-circle-filled
             */
            icon?: string;
            /**
             * Description of the Coda folder.
             * example:
             * This folder holds my important docs.
             */
            description?: string;
            folderType: FolderType;
            /**
             * Deprecated, use folder permissions instead.
             */
            isPrivate?: boolean;
            acl?: /* A specific permission granted to a principal. */ Permission[];
            /**
             * True if the inline ACL field was truncated; use a paginated ACL query to fetch all permissions.
             */
            truncatedAcl?: boolean;
        }
        /**
         * List of folders.
         */
        export interface FolderList {
            items: /* Info about a Coda folder. */ Folder[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/workspaces/<your workspace id>/folders
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/workspaces/<your workspace id>/folders?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export type FolderType = "Standard" | "Personal";
        /**
         * Info about a group.
         */
        export interface Group {
            /**
             * The type of this resource.
             */
            type: "group";
            /**
             * ID of the group.
             * example:
             * grp-6SM9xrKcqW
             */
            id: string;
            /**
             * Name of the group.
             * example:
             * Engineering
             */
            name: string;
            /**
             * Description of the group.
             * example:
             * All engineers.
             */
            description?: string;
        }
        /**
         * List of groups.
         */
        export interface GroupList {
            items: /* Info about a group. */ Group[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/groups
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/groups?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export interface GroupMemberList {
            items: /* Info about the user who initiated an action. */ User[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/groups/grp-1AbcdeFgh1/members?limit=20
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/groups/grp-1AbcdeFgh1/members?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export interface GroupPrincipal {
            /**
             * The type of this principal.
             */
            type: "group";
            /**
             * Group ID for the principal.
             * example:
             * grp-6SM9xrKcqW
             */
            groupId: string;
            /**
             * Name of the group.
             * example:
             * Marketing team
             */
            groupName: string;
        }
        /**
         * Info about a Coda Brain ingestion.
         */
        export interface Ingestion {
            /**
             * The type of this resource.
             */
            type: "ingestion";
            /**
             * ID of the ingestion.
             * example:
             * 928329ce-186f-419b-9bca-211a8d06689b
             */
            id: string;
            /**
             * Name of the ingestion.
             * example:
             * My Google Drive Connection
             */
            name?: string;
        }
        /**
         * Info about a legal hold.
         */
        export interface LegalHold {
            /**
             * The type of this resource.
             */
            type: "legalHold";
            /**
             * ID of the legal hold.
             * example:
             * 0d470e5b-d145-4440-a897-df57f4d72dfb
             */
            id: string; // uuid
            /**
             * Name of the hold.
             * example:
             * Investigation Matter 123
             */
            name: string;
            /**
             * Description of the hold.
             * example:
             * Holding docs for legal matter 123
             */
            description?: string;
            /**
             * Email address of the legal hold creator
             * example:
             * april@example.com
             */
            creator: string; // email
            /**
             * Name of the legal hold creator
             * example:
             * April Jane
             */
            creatorName: string;
            /**
             * Timestamp of the beginning of the hold range
             * example:
             * 2024-01-08T00:00:00.000Z
             */
            rangeStart: string; // date-time
            /**
             * Timestamp of the end of the hold range
             * example:
             * 2024-04-11T00:00:00.000Z
             */
            rangeEnd?: string; // date-time
            /**
             * Count of docs included in the hold, after indexing has stabilized
             * example:
             * 143
             */
            docCount?: number;
            /**
             * Count of users included in the hold
             * example:
             * 12
             */
            userCount: number;
            state: LegalHoldState;
            /**
             * Timestamp for when the legal hold was created.
             * example:
             * 2024-04-13T00:18:57.946Z
             */
            createdAt: string; // date-time
            /**
             * Timestamp for when the legal hold was last modified.
             * example:
             * 2024-04-13T00:18:57.946Z
             */
            updatedAt: string; // date-time
        }
        /**
         * Info about a legal hold export
         */
        export interface LegalHoldExport {
            /**
             * The type of this resource.
             */
            type: "legalHoldExport";
            /**
             * ID of the legal hold export.
             * example:
             * 0d470e5b-d145-4440-a897-df57f4d72dfb
             */
            id: string; // uuid
            /**
             * Name of the export.
             * example:
             * Export of docs for investigation matter 123
             */
            name: string;
            /**
             * Email address of the legal hold export creator
             * example:
             * april@example.com
             */
            creator: string; // email
            /**
             * Name of the legal hold export creator
             * example:
             * April Jane
             */
            creatorName: string;
            /**
             * Docs are exported in the state corresponding to this timestamp
             * example:
             * 2024-01-08T00:00:00.000Z
             */
            exportAt: string; // date-time
            format: LegalHoldExportFormat;
            /**
             * Count of docs included in the export
             * example:
             * 143
             */
            docCount?: number;
            state: LegalHoldExportState;
            /**
             * Timestamp for when the legal hold export was created.
             * example:
             * 2024-04-13T00:18:57.946Z
             */
            createdAt: string; // date-time
            /**
             * Timestamp for when the legal hold export was last modified.
             * example:
             * 2024-04-13T00:18:57.946Z
             */
            updatedAt: string; // date-time
            /**
             * URL to download the exported doc package once the export is complete
             */
            downloadUrl?: string; // url
            /**
             * Size of the exported doc package in bytes
             */
            downloadSize?: number;
            /**
             * Error message if the export failed
             */
            error?: string;
        }
        export type LegalHoldExportFormat = "pdfzip";
        /**
         * List of legal hold exports.
         */
        export interface LegalHoldExportList {
            items: /* Info about a legal hold export */ LegalHoldExport[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds/<your legal hold id>/exports
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds/<your legal hold id>/exports?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export type LegalHoldExportState = "generating" | "ready" | "error";
        /**
         * List of legal holds.
         */
        export interface LegalHoldList {
            items: /* Info about a legal hold. */ LegalHold[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export type LegalHoldState = "indexing" | "active";
        /**
         * List of legal hold users.
         */
        export interface LegalHoldUsersList {
            items: /* Metadata of a user in an organization. */ OrgUser[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds/<your legal hold id>/users
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/legalHolds/<your legal hold id>/users?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Minimum count of permissions.
         */
        export interface MinPermissionCount {
            /**
             * The type of this resource.
             */
            type: "minCount";
            /**
             * Minimum count of permissions.
             */
            minCount: number;
        }
        /**
         * Request payload for moving a doc.
         */
        export interface MoveDocRequest {
            /**
             * The ID of the folder to move the doc to.
             * example:
             * fl-AbCDeFGHIj
             */
            destinationFolderId: string;
        }
        /**
         * The result of moving a doc.
         */
        export interface MoveDocResult {
        }
        /**
         * If specified, a link that can be used to fetch the next page of results.
         */
        export type NextPageLink = string; // url
        /**
         * If specified, an opaque token used to fetch the next page of results.
         * example:
         * eyJsaW1pd
         */
        export type NextPageToken = string;
        /**
         * Metadata of a user in an organization.
         */
        export interface OrgUser {
            /**
             * Unique id of the user.
             * example:
             * 12345
             */
            id?: number;
            /**
             * Email of the user.
             * example:
             * hello@coda.io
             */
            email: string;
            /**
             * Name of the user.
             * example:
             * Sally Jane
             */
            name: string;
            /**
             * Picture url of the user.
             * example:
             * codahosted.io/123
             */
            pictureUrl?: string; // url
            status: OrgUserStatus;
            /**
             * Timestamp representing when the user registered with Coda.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            registeredAt: string; // date-time
            /**
             * Timestamp representing when the user was deactivated from Coda.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            deactivatedAt?: string; // date-time
            /**
             * Number of docs owned by this user.
             * example:
             * 12
             */
            ownedDocCount?: number;
        }
        /**
         * Payload for making changes to an org user's state.
         */
        export interface OrgUserActivationChangeRequest {
            /**
             * By default, requests to update org users' activation state are rejected if SCIM is enabled for the organization. Updating membership here may cause Coda to be out of sync with your identity provider and/or refreshes from SCIM may overwrite your changes here. Set this flag to bypass this protection.
             */
            bypassScim?: boolean;
        }
        /**
         * The result of a change to an org user's state.
         */
        export interface OrgUserActivationChangeResult {
        }
        /**
         * Info about an API Token for a user within an organization.
         */
        export interface OrgUserApiToken {
            owner: /* Info about the user who initiated an action. */ User;
            /**
             * ID of the Coda API Token.
             * example:
             * AbCDeFGH
             */
            id: string;
            /**
             * Name of the Coda API Token.
             * example:
             * Cool Coda Integration
             */
            name: string;
            /**
             * Timestamp representing when the user created this API token.
             */
            createdAt: string; // date-time
            /**
             * Timestamp representing when this API token was last used.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            lastUsedAt: string; // date-time
        }
        /**
         * List of API Tokens for users within an organization.
         */
        export interface OrgUserApiTokenList {
            items: /* Info about an API Token for a user within an organization. */ OrgUserApiToken[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/apiTokens
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/apiTokens?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * The result of an API token revocation.
         */
        export interface OrgUserApiTokenRevoke {
        }
        export interface OrgUserList {
            items: /* Metadata of a user in an organization. */ OrgUser[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/users?limit=20
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/users?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export type OrgUserStatus = "Active" | "Deactivated" | "Deleted";
        /**
         * Info about a Coda organization.
         */
        export interface Organization {
            /**
             * The type of this resource.
             */
            type: "organization";
            /**
             * ID of the Coda organization.
             * example:
             * org-1AbcdeFgh1
             */
            id: string;
            /**
             * Name of the organization.
             * example:
             * Coda
             */
            name: string;
        }
        /**
         * List of organizations.
         */
        export interface OrganizationList {
            items: /* Info about a Coda organization. */ Organization[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Output format of the doc or page content.
         */
        export type OutputFormat = "None" | "LossyPlainText";
        /**
         * Info about a Pack.
         */
        export interface Pack {
            /**
             * The type of this resource.
             */
            type: "pack";
            /**
             * ID of the Pack.
             * example:
             * 1003
             */
            id: number;
            /**
             * The name of the Pack.
             * example:
             * Cool Geometry Formulas
             */
            name: string;
        }
        /**
         * Determines how the Pack can be used in the context of the organization.
         */
        export type PackAccess = "allow" | "deny" | "requiresConfiguration";
        /**
         * Info about a Pack configuration.
         */
        export interface PackConfiguration {
            /**
             * The type of this resource.
             */
            type: "packConfiguration";
            /**
             * ID of the Coda organization.
             * example:
             * org-1AbcdeFgh1
             */
            organizationId: string;
            /**
             * ID of the Pack configuration.
             */
            packConfigurationId: string;
            /**
             * The ID of the Pack.
             * example:
             * 123
             */
            packId: number;
            /**
             * Name of the Pack configuration.
             */
            name: string;
            policy: /* The Pack configuration policy that governs connection details and Pack resources that a principal is allowed to use. It also defines if doc sharing permissions will be enforced to match principals allowed to use this policy. */ Policy;
            broadestSharing: /* Broadest type of principal a Pack configuration is shared with. */ BroadestSharedWith;
            /**
             * Timestamp when the Pack configuration was created.
             */
            creationTimestamp: number;
            /**
             * Timestamp when the Pack configuration was last modified.
             */
            modificationTimestamp: number;
            /**
             * ID of the user who last modified the Pack configuration.
             */
            modificationUserId: number;
        }
        /**
         * Paginated list of PackConfigurationPermissions.
         */
        export interface PackConfigurationAcl {
            items: /* A specific permission granted to a principal allowing use of or the ability to edit a Pack configuration. */ PackConfigurationPermission[];
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             */
            nextPageLink?: string; // url
        }
        /**
         * List of Pack configurations.
         */
        export interface PackConfigurationList {
            items: /* Info about a Pack configuration. */ PackConfiguration[];
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             */
            nextPageLink?: string; // url
        }
        /**
         * Info about a OAuth configuration associated with a Pack configuration.
         */
        export interface PackConfigurationOauthConfigMetadata {
            /**
             * Masked OAuth client id. If not set, empty string will be returned.
             */
            maskedClientId: string;
            /**
             * Masked OAuth client secret. If not set, empty string will be returned.
             */
            maskedClientSecret: string;
            /**
             * Authorization URL of the OAuth provider.
             */
            authorizationUrl: string;
            /**
             * Token URL of the OAuth provider.
             */
            tokenUrl: string;
        }
        /**
         * A specific permission granted to a principal allowing use of or the ability to edit a Pack configuration.
         */
        export interface PackConfigurationPermission {
            principal: /* Metadata about a principal. */ Principal;
            /**
             * ID for the Permission
             */
            id: string;
            /**
             * Type of access. Only readonly is supported for Pack configuration permissions.
             */
            access: "readonly";
            /**
             * Timestamp when the Pack configuration permission was created.
             */
            creationTimestamp: number;
            /**
             * ID of the user who last modified the Pack configuration permission.
             */
            modificationUserId: number;
        }
        /**
         * Info about how access to a Pack has been configured for an organization.
         */
        export interface PackControl {
            /**
             * The type of this resource.
             */
            type: "packControl";
            /**
             * ID of the Coda organization.
             * example:
             * org-1AbcdeFgh1
             */
            organizationId: string;
            pack: /* Info about a Pack. */ Pack;
            access: /* Determines how the Pack can be used in the context of the organization. */ PackAccess;
            /**
             * Timestamp when the Pack configuration was created.
             */
            creationTimestamp: number;
            /**
             * Timestamp when the Pack configuration was last modified.
             */
            modificationTimestamp: number;
        }
        /**
         * List of Pack controls.
         */
        export interface PackControlList {
            items: /* Info about how access to a Pack has been configured for an organization. */ PackControl[];
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             */
            nextPageLink?: string; // url
        }
        /**
         * Info about a Pack request.
         */
        export interface PackRequest {
            /**
             * The type of this resource.
             */
            type: "packRequest";
            pack?: /* Info about a Pack. */ Pack;
            /**
             * ID of the Pack requested.
             */
            packId: number;
            /**
             * The name of the Pack requested. This may not exist if the Pack has been deleted or you do not have access to the Pack.
             */
            packName?: string;
            /**
             * The ID of the requesting user.
             */
            requestingUserId: number;
            /**
             * The requesting user's email.
             */
            requestingUserEmail?: string;
            /**
             * The requesting user's name.
             */
            requestingUserName: string;
            /**
             * The URL of the requesting user's avatar picture.
             */
            requestingUserPictureUrl?: string;
            /**
             * The message accompanying the user's request.
             */
            requestMessage: string;
        }
        /**
         * List of Pack requests.
         */
        export interface PackRequestList {
            items: /* Info about a Pack request. */ PackRequest[];
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             */
            nextPageLink?: string; // url
        }
        /**
         * Info about a page.
         */
        export interface Page {
            /**
             * The type of this resource.
             */
            type: "page";
            /**
             * ID of the page.
             * example:
             * canvas-IjkLmnO
             */
            id: string;
            /**
             * API link to the page.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your org id>/docs/<doc id>/pages/<page id>
             */
            href: string; // url
            /**
             * Browser-friendly link to the page.
             * example:
             * https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO
             */
            browserLink: string; // url
            /**
             * Name of the page.
             * example:
             * Launch Status
             */
            name: string;
            /**
             * Subtitle of the page.
             * example:
             * See the status of launch-related tasks.
             */
            subtitle?: string;
            parent?: /* Reference to a page. */ PageReference;
        }
        /**
         * Content of a page
         */
        export interface PageContent {
            /**
             * Timestamp representing when Coda generated this page output.
             */
            createdAt: string; // date-time
            /**
             * The content of the page.
             * example:
             * Some page contents.\nAnd some more page contents!\n
             */
            content: string;
        }
        /**
         * List of pages.
         */
        export interface PageList {
            items: /* Info about a page. */ Page[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs/<your doc id>/pages
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs/<your doc id>/pages?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Reference to a page.
         */
        export interface PageReference {
            /**
             * The type of this resource.
             */
            type: "page";
            /**
             * ID of the page.
             * example:
             * canvas-IjkLmnO
             */
            id: string;
            /**
             * API link to the page.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your org id>/docs/<doc id>/pages/<page id>
             */
            href: string; // url
            /**
             * Browser-friendly link to the page.
             * example:
             * https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO
             */
            browserLink: string; // url
            /**
             * Name of the page.
             * example:
             * Launch Status
             */
            name: string;
        }
        /**
         * Metadata with page info and page viewer user info
         */
        export interface PageViewersItem {
            /**
             * ID of the page.
             * example:
             * canvas-IjkLmnO
             */
            pageId: string;
            /**
             * Name of the page.
             * example:
             * Launch Status
             */
            pageName: string;
            viewers: /* Info about the user who initiated an action. */ User[];
        }
        /**
         * List of viewers per page.
         */
        export interface PageViewersList {
            items: /* Metadata with page info and page viewer user info */ PageViewersItem[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs/<your doc id>/pageViewers
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/docs/<your doc id>/pageViewers?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Info about a page.
         */
        export interface PageWithContent {
            /**
             * The type of this resource.
             */
            type: "page";
            /**
             * ID of the page.
             * example:
             * canvas-IjkLmnO
             */
            id: string;
            /**
             * API link to the page.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your org id>/docs/<doc id>/pages/<page id>
             */
            href: string; // url
            /**
             * Browser-friendly link to the page.
             * example:
             * https://coda.io/d/_dAbCDeFGH/Launch-Status_sumnO
             */
            browserLink: string; // url
            /**
             * Name of the page.
             * example:
             * Launch Status
             */
            name: string;
            /**
             * Subtitle of the page.
             * example:
             * See the status of launch-related tasks.
             */
            subtitle?: string;
            parent?: /* Reference to a page. */ PageReference;
            pageContent?: /* Content of a page */ PageContent;
        }
        /**
         * A specific permission granted to a principal.
         */
        export interface Permission {
            /**
             * The type of this resource.
             */
            type: "permission";
            principal: /* Metadata about a principal. */ Principal;
            /**
             * ID for the Permission
             */
            id: string;
            access: /* Type of access. */ AccessType;
        }
        /**
         * Count of permissions.
         */
        export type PermissionCount = /* Count of permissions. */ /* Exact count of permissions. */ ExactPermissionCount | /* Minimum count of permissions. */ MinPermissionCount;
        /**
         * Type of permission count.
         */
        export type PermissionCountType = "exactCount" | "minCount";
        /**
         * Summary of permissions.
         */
        export interface PermissionsSummary {
            worldwideAccess: /* Type of access. */ AccessType;
            /**
             * List of domains that have access
             */
            domainShares: string[];
            /**
             * List of workspaces that have access
             */
            workspaceShares: string[];
            numGroupPermissions: /* Count of permissions. */ PermissionCount;
            numUserPermissions: /* Count of permissions. */ PermissionCount;
        }
        /**
         * The Pack configuration policy that governs connection details and Pack resources that a principal is allowed to use. It also defines if doc sharing permissions will be enforced to match principals allowed to use this policy.
         */
        export interface Policy {
            [name: string]: any;
        }
        /**
         * Metadata about a principal.
         */
        export type Principal = /* Metadata about a principal. */ EmailPrincipal | GroupPrincipal | DomainPrincipal | WorkspacePrincipal | AnyonePrincipal;
        /**
         * Type of principal.
         */
        export type PrincipalType = "email" | "group" | "domain" | "workspace" | "anyone";
        /**
         * Result of the user workspace removal request
         */
        export interface RemoveWorkspaceUserResponse {
        }
        /**
         * The result of reviving a doc.
         */
        export interface ReviveDocResult {
            /**
             * URL of the revived doc
             */
            docUrl: string;
        }
        /**
         * Payload for setting a Pack configuration's permissions.
         */
        export interface SetPackConfigurationPermissionsRequest {
            principals: /* Metadata about a principal to add to a doc. */ AddedPrincipal[];
        }
        /**
         * The result of settings a Pack configuration's permissions.
         */
        export interface SetPackConfigurationPermissionsResponse {
            permissions: /* A specific permission granted to a principal allowing use of or the ability to edit a Pack configuration. */ PackConfigurationPermission[];
        }
        /**
         * Options for filtering a doc shared with anyone.
         */
        export type SharedWithAnyoneFilter = "all" | "linkOnly" | "discoverableViaWeb";
        /**
         * Filter for docs directly shared with a user external to the organization.
         */
        export type SharedWithExternalDomainFilter = boolean | null;
        /**
         * The direction to sort by. Defaults to ascending.
         */
        export type SortDirection = "asc" | "desc";
        /**
         * Information about a sync page
         */
        export interface SyncPage {
            /**
             * Document ID that contains the sync page
             */
            docId: string;
            /**
             * Document ID of the document embedded as a sync page
             */
            sourceDocId: string;
            /**
             * Page ID that is embedded as a sync page
             */
            sourcePageId?: string;
            /**
             * Include subpages in the sync page.
             */
            includeSubpages?: boolean;
        }
        /**
         * Information about a sync page tunnel
         */
        export interface SyncPageTunnel {
            /**
             * ID for the sync page tunnel
             */
            id: string;
            access: /* Type of access. */ AccessType;
            /**
             * Document ID that contains the sync page
             */
            docId: string;
            /**
             * Document ID of the document embedded as a sync page
             */
            sourceDocId: string;
            /**
             * ID of the user who last modified the sync page tunnel
             */
            modificationUserId: number;
        }
        /**
         * Payload for transferring resources between users.
         */
        export interface TransferResourcesRequest {
            /**
             * The email address of the user to transfer resources away from.
             * example:
             * joe@example.com
             */
            fromEmail: string;
            /**
             * The email address of the user to transfer resources to.
             * example:
             * april@example.com
             */
            toEmail: string;
            /**
             * List of IDs of docs to transfer. Must be owned by the from user. If unspecified transfers all docs the from user owns.
             * example:
             * [
             *   "AbCDeFGH"
             * ]
             */
            filterDocIds?: string[];
        }
        /**
         * Result of the transfer resources request
         */
        export interface TransferResourcesResponse {
            /**
             * An opaque identifier that represents the request.
             * example:
             * c5cb3278-800e-4ae3-be53-19b0b794f8e1
             */
            requestId: string;
        }
        /**
         * A constant identifying the type of the resource.
         */
        export type Type = "apiToken" | "billingAccount" | "brainQuery" | "doc" | "docPackConnection" | "event" | "folder" | "group" | "ingestion" | "legalHold" | "legalHoldExport" | "organization" | "pack" | "packControl" | "packConfiguration" | "packConfigurationOauth" | "packConfigurationPermission" | "packRequest" | "page" | "permission" | "syncPage" | "syncPageTunnel" | "user" | "webhook" | "workspace";
        /**
         * Request payload for updating a legal hold.
         */
        export interface UpdateLegalHoldRequest {
            /**
             * The name of the legal hold
             * example:
             * Investigation Matter 123
             */
            name?: string;
            /**
             * Description of the legal hold
             */
            description?: string;
            /**
             * Timestamp of the beginning of the hold range
             * example:
             * 2024-01-08T00:00:00.000Z
             */
            rangeStart?: string; // date-time
            /**
             * Timestamp of the end of the hold range
             * example:
             * 2024-04-11T00:00:00.000Z
             */
            rangeEnd?: string | null; // date-time
        }
        /**
         * The result of updating a legal hold.
         */
        export interface UpdateLegalHoldResult {
        }
        /**
         * Request payload for updating a legal hold's users collection.
         */
        export interface UpdateLegalHoldUsersRequest {
            /**
             * List of email addresses of users to add to the hold.
             */
            userEmailsToAdd?: string /* email */[];
            /**
             * List of email addresses of users to remove from the hold.
             */
            userEmailsToRemove?: string /* email */[];
        }
        /**
         * The result of updating a legal hold's users.
         */
        export interface UpdateLegalHoldUsersResult {
        }
        /**
         * Request to set the OAuth configuration associated with a Pack configuration.
         */
        export interface UpdatePackConfigurationOauthConfigRequest {
            clientId?: string;
            clientSecret?: string;
            authorizationUrl?: string;
            tokenUrl?: string;
        }
        /**
         * Payload for a request to update a Pack configuration.
         */
        export interface UpdatePackConfigurationRequest {
            /**
             * The name for the Pack configuration
             */
            name?: string;
            policy?: /* The Pack configuration policy that governs connection details and Pack resources that a principal is allowed to use. It also defines if doc sharing permissions will be enforced to match principals allowed to use this policy. */ Policy;
        }
        /**
         * Payload for a updating a Pack control
         */
        export interface UpdatePackControlRequest {
            access: /* Determines how the Pack can be used in the context of the organization. */ PackAccess;
        }
        /**
         * Payload for creating or updating a webhook subscription.
         */
        export interface UpdateWebhookRequest {
            /**
             * Name of the webhook subscription.
             * example:
             * My webhook
             */
            name?: string;
            /**
             * The target URL where webhook payloads will be sent
             * example:
             * https://example.com/my/coda/webhook/endpoint
             */
            target?: string; // url
            filters?: /* Filter set for the webhook subscription. */ WebhookFilter;
        }
        /**
         * Payload for updating an existing user in a workspace.
         */
        export interface UpdateWorkspaceUserRequest {
            role: WorkspaceUserRole;
        }
        /**
         * Info about the user who initiated an action.
         */
        export interface User {
            /**
             * The type of this resource.
             */
            type: "user";
            /**
             * Internal Coda ID of the user.
             * example:
             * 867102
             */
            id: number;
            /**
             * Email address of the user.
             * example:
             * user@example.com
             */
            email: string;
        }
        /**
         * Additional context about how the user who initiated an action.
         */
        export type UserContext = /* Additional context about how the user who initiated an action. */ {
            /**
             * The originating source of this user's action.
             */
            source: "browser";
            /**
             * If available, the user session ID.
             * example:
             * as-zxfl5qXkN2
             */
            sessionId: string;
            /**
             * User context for an action triggered from a browser.
             */
            browser: {
                /**
                 * User agent string
                 * example:
                 * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
                 */
                ua: string;
                /**
                 * If available, the user IP address.
                 * example:
                 * 192.0.2.0
                 */
                ipAddress: string;
            };
        } | {
            /**
             * The originating source of this user's action.
             */
            source: "codaApi";
            /**
             * User context for an action triggered from the Coda API.
             */
            codaApi: {
                /**
                 * API Token Name
                 * example:
                 * Cool Coda Integration
                 */
                tokenName: string;
                /**
                 * User agent string
                 * example:
                 * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36
                 */
                ua: string;
                /**
                 * If available, the user IP address.
                 * example:
                 * 192.0.2.0
                 */
                ipAddress: string;
            };
        } | {
            /**
             * The originating source of this user's action.
             */
            source: "scim";
            /**
             * Context for an action triggered via SCIM.
             */
            scim: {
                /**
                 * User agent string
                 * example:
                 * Okta SCIM Client 1.0.0
                 */
                ua: string;
                /**
                 * The IP address of the IdP or entity invoking the SCIM API.
                 * example:
                 * 192.0.2.0
                 */
                ipAddress: string;
            };
        } | {
            /**
             * The originating source of this user's action.
             */
            source: "slack";
            /**
             * User context for an action triggered from Slack.
             */
            slack: {
                /**
                 * Slack User ID
                 * example:
                 * UA8RXUSPL
                 */
                slackUserId?: string;
                /**
                 * Slack User Name
                 * example:
                 * johndoe
                 */
                slackUserName?: string;
                /**
                 * Slack Team ID
                 * example:
                 * T9TK3CUKW
                 */
                slackTeamId?: string;
            };
        } | {
            /**
             * The originating source of this user's action.
             */
            source: "system";
            /**
             * Context for an action triggered by a backend system within Coda
             */
            system: {
                /**
                 * Name of the system process that generated the change
                 * example:
                 * Some Backend Process
                 */
                process: string;
            };
        };
        /**
         * Info about a webhook subscription.
         */
        export interface Webhook {
            /**
             * The type of this resource.
             */
            type: "webhook";
            /**
             * ID of the Coda webhook subscription.
             * example:
             * f88ba9d9-037d-41df-a49c-49798701ed41
             */
            id: string;
            /**
             * Name of the webhook subscription.
             * example:
             * My webhook
             */
            name?: string;
            /**
             * Key used to generate HMAC payload signatures; should be used to verify the signature of incoming webhook notifications.
             *
             */
            signatureKey?: string;
            resource: /* Type of resource a webhook is subscribed to. */ WebhookWatchedResource;
            /**
             * The target URL where webhook payloads will be sent
             * example:
             * https://example.com/my/coda/webhook/endpoint
             */
            target: string; // url
            filters?: /* Filter set for the webhook subscription. */ WebhookFilter;
            /**
             * Timestamp for when the webhook subscription was created.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            createdAt: string; // date-time
            /**
             * The current state of the webhook subscription.
             * example:
             * Active
             */
            state: string;
            /**
             * Timestamp for when the webhook last received an error while attempting to send a payload to the target.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            lastFailureAt?: string; // date-time
            /**
             * Last error reported by the target.
             * example:
             * 500 Server Error
             */
            lastFailureContent?: string;
            /**
             * Timestamp for when the webhook last successfully sent a payload to the target.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            lastSuccessAt?: string; // date-time
        }
        /**
         * Filter set for the webhook subscription.
         */
        export interface WebhookFilter {
            or?: /* One entry in a webhook subscription filter. */ WebhookFilterPredicate[];
        }
        /**
         * One entry in a webhook subscription filter.
         */
        export interface WebhookFilterPredicate {
            /**
             * The event action.
             * example:
             * EditDoc
             */
            action: string;
        }
        /**
         * List of webhooks.
         */
        export interface WebhookList {
            items: /* Info about a webhook subscription. */ Webhook[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/webhooks
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/webhooks?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        /**
         * Type of resource a webhook is subscribed to.
         */
        export type WebhookWatchedResource = "auditEvents";
        /**
         * Info about a Coda workspace.
         */
        export interface Workspace {
            /**
             * The type of this resource.
             */
            type: "workspace";
            /**
             * ID of the Coda workspace.
             * example:
             * ws-1Ab234
             */
            id: string;
            /**
             * Name of the workspace.
             * example:
             * coda.io
             */
            name: string;
            featureSet?: /* Pricing plan associated with a workspace. */ FeatureSet;
            /**
             * When enabled for the org new users matching the specified auto-join domains will get added as workspace members.
             * example:
             * [
             *   "example.com"
             * ]
             */
            autoJoinDomains?: string /* domain */[];
            /**
             * Whether the auto-join domains list is truncated; if true use a paginated query to fetch all domains.
             * example:
             * false
             */
            truncatedAutoJoinDomains?: boolean;
            /**
             * Number of Doc Maker Admins in the workspace.
             * example:
             * 3
             */
            numDocMakerAdmins?: number;
            /**
             * Number of Doc Makers in the workspace.
             * example:
             * 13
             */
            numDocMakers?: number;
            /**
             * Number of Editors in the workspace.
             * example:
             * 5
             */
            numEditors?: number;
        }
        /**
         * List of workspaces.
         */
        export interface WorkspaceList {
            items: /* Info about a Coda workspace. */ Workspace[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/workspaces
             */
            href: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/<your organization id>/workspaces?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export interface WorkspacePrincipal {
            /**
             * The type of this principal.
             */
            type: "workspace";
            /**
             * WorkspaceId for the principal.
             * example:
             * ws-sdfmsdf9
             */
            workspaceId: string;
        }
        /**
         * Metadata of a user in a workspace.
         */
        export interface WorkspaceUser {
            /**
             * Unique id of the user.
             * example:
             * 12345
             */
            id: number;
            /**
             * Email of the user.
             * example:
             * hello@coda.io
             */
            email: string;
            role: WorkspaceUserRole;
            /**
             * Name of the user.
             * example:
             * Sally Jane
             */
            name: string;
            /**
             * Picture url of the user.
             * example:
             * codahosted.io/123
             */
            pictureUrl?: string; // url
            /**
             * Timestamp for when the user registered in this workspace
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            registeredAt: string; // date-time
            /**
             * Timestamp for when the user's role last changed in this workspace.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            roleChangedAt?: string; // date-time
            /**
             * Member's last login date to Coda.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            lastActiveAt?: string; // date-time
            /**
             * The last date anyone used any of the member's Total docs.
             * example:
             * 2018-04-11T00:18:57.946Z
             */
            docsLastActiveAt?: string; // date-time
            /**
             * Docs the member owns, is an admin of, or has taken a Doc Maker action on in the last 90 days.
             * example:
             * 2
             */
            totalDocs?: number;
            /**
             * Unique members who have viewed any of the member's Total docs in the last 90 days.
             * example:
             * 5
             */
            totalCollaborators?: number;
        }
        export interface WorkspaceUserList {
            items: /* Metadata of a user in a workspace. */ WorkspaceUser[];
            /**
             * API link to these results
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/workspaces/ws-n123897sfd/users?limit=20
             */
            href?: string; // url
            nextPageToken?: /**
             * If specified, an opaque token used to fetch the next page of results.
             * example:
             * eyJsaW1pd
             */
            NextPageToken;
            /**
             * If specified, a link that can be used to fetch the next page of results.
             * example:
             * https://coda.io/apis/admin/v1/organizations/org-1AbcdeFgh1/workspaces/ws-n123897sfd/users?pageToken=eyJsaW1pd
             */
            nextPageLink?: string; // url
        }
        export type WorkspaceUserRole = "Admin" | "DocMaker" | "Editor";
    }
}
declare namespace Paths {
    namespace ActivateOrgUser {
        namespace Parameters {
            export type OrganizationId = string;
            export type UserEmail = string; // email
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            userEmail: Parameters.UserEmail /* email */;
        }
        export type RequestBody = /* Payload for making changes to an org user's state. */ Components.Schemas.OrgUserActivationChangeRequest;
        namespace Responses {
            export type $200 = /* The result of a change to an org user's state. */ Components.Schemas.OrgUserActivationChangeResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddDocPermission {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export type RequestBody = /* Payload for granting a new permission. */ Components.Schemas.AddPermissionRequest;
        namespace Responses {
            export type $200 = /* The result of adding a permission. */ Components.Schemas.AddPermissionResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddFolderPermission {
        namespace Parameters {
            export type FolderId = string;
            export type OrganizationId = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            folderId: Parameters.FolderId;
        }
        export type RequestBody = /* Payload for granting a new permission. */ Components.Schemas.AddPermissionRequest;
        namespace Responses {
            export type $200 = /* The result of adding a permission. */ Components.Schemas.AddPermissionResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddLegalHold {
        namespace Parameters {
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export type RequestBody = /* Request payload for creating a legal hold. */ Components.Schemas.AddLegalHoldRequest;
        namespace Responses {
            export type $200 = /* The result of creating a legal hold. */ Components.Schemas.AddLegalHoldResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddLegalHoldExport {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export type RequestBody = /* Request payload for creating a legal hold export. */ Components.Schemas.AddLegalHoldExportRequest;
        namespace Responses {
            export type $200 = /* The result of creating a legal hold export. */ Components.Schemas.AddLegalHoldExportResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddOrganizationPackConfiguration {
        namespace Parameters {
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export type RequestBody = /* Payload for a request to add a Pack configuration. */ Components.Schemas.AddPackConfigurationRequest;
        namespace Responses {
            export type $200 = /* Info about a Pack configuration. */ Components.Schemas.PackConfiguration;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddOrganizationPackConfigurationPermission {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        export type RequestBody = /* Payload for granting a new Pack configuration permission. */ Components.Schemas.AddPackConfigurationPermissionRequest;
        namespace Responses {
            export type $200 = /* A specific permission granted to a principal allowing use of or the ability to edit a Pack configuration. */ Components.Schemas.PackConfigurationPermission;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddWebhook {
        namespace Parameters {
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export type RequestBody = /* Payload for creating or updating a webhook subscription. */ Components.Schemas.AddWebhookRequest;
        namespace Responses {
            export type $200 = /* Info about a webhook subscription. */ Components.Schemas.Webhook;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace AddWorkspaceUser {
        namespace Parameters {
            export type OrganizationId = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
        }
        export type RequestBody = /* Payload for adding an existing user to a workspace. */ Components.Schemas.AddWorkspaceUserRequest;
        namespace Responses {
            export type $200 = /* Metadata of a user in a workspace. */ Components.Schemas.WorkspaceUser;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeactivateOrgUser {
        namespace Parameters {
            export type OrganizationId = string;
            export type UserEmail = string; // email
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            userEmail: Parameters.UserEmail /* email */;
        }
        export type RequestBody = /* Payload for making changes to an org user's state. */ Components.Schemas.OrgUserActivationChangeRequest;
        namespace Responses {
            export type $200 = /* The result of a change to an org user's state. */ Components.Schemas.OrgUserActivationChangeResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteDoc {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a doc. */ Components.Schemas.DeleteDocResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteDocPermission {
        namespace Parameters {
            export type DocId = string;
            export type DocPermissionId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
            docPermissionId: Parameters.DocPermissionId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a permission. */ Components.Schemas.DeletePermissionResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteFolderPermission {
        namespace Parameters {
            export type FolderId = string;
            export type OrganizationId = string;
            export type PermissionId = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            folderId: Parameters.FolderId;
            permissionId: Parameters.PermissionId;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a permission. */ Components.Schemas.DeletePermissionResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteLegalHold {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a legal hold. */ Components.Schemas.DeleteLegalHoldResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteLegalHoldExport {
        namespace Parameters {
            export type LegalHoldExportId = string; // uuid
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
            legalHoldExportId: Parameters.LegalHoldExportId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a legal hold export. */ Components.Schemas.DeleteLegalHoldExportResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteOrganizationPackConfiguration {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        namespace Responses {
            export type $200 = /* Response indication a request to delete a Pack configuration was successful. */ Components.Schemas.DeletePackConfigurationResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteOrganizationPackConfigurationOauthMetadata {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        namespace Responses {
            export type $200 = /* The result of deleting OAuth configuration metadata associated with a Pack configuration. */ Components.Schemas.DeletePackConfigurationOauthConfigResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace DeleteOrganizationPackConfigurationPermission {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
            export type PackConfigurationPermissionId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
            packConfigurationPermissionId: Parameters.PackConfigurationPermissionId;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a Pack configuration permission. */ Components.Schemas.DeletePackConfigurationPermissionResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ExportDoc {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export type RequestBody = /* Request payload for exporting a doc */ Components.Schemas.DocExportRequest;
        namespace Responses {
            export type $200 = /* Response payload that includes the status and location of a doc export request. */ Components.Schemas.DocExportStatusResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetDoc {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        namespace Responses {
            export type $200 = /* Info about a Coda doc. */ Components.Schemas.Doc;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetExportRequestStatus {
        namespace Parameters {
            export type DocId = string;
            export type ExportId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
            exportId: Parameters.ExportId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* Response payload that includes the status and location of a doc export request. */ Components.Schemas.DocExportStatusResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetFolder {
        namespace Parameters {
            export type FolderId = string;
            export type OrganizationId = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            folderId: Parameters.FolderId;
        }
        namespace Responses {
            export type $200 = /* Info about a Coda folder. */ Components.Schemas.Folder;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetGroup {
        namespace Parameters {
            export type GroupId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            groupId: Parameters.GroupId;
        }
        namespace Responses {
            export type $200 = /* Info about a group. */ Components.Schemas.Group;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetLegalHold {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* Info about a legal hold. */ Components.Schemas.LegalHold;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetLegalHoldExport {
        namespace Parameters {
            export type LegalHoldExportId = string; // uuid
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
            legalHoldExportId: Parameters.LegalHoldExportId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* Info about a legal hold export */ Components.Schemas.LegalHoldExport;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetOrganization {
        namespace Parameters {
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        namespace Responses {
            export type $200 = /* Info about a Coda organization. */ Components.Schemas.Organization;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetOrganizationPackConfiguration {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        namespace Responses {
            export type $200 = /* Info about a Pack configuration. */ Components.Schemas.PackConfiguration;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetOrganizationPackConfigurationOauthMetadata {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        namespace Responses {
            export type $200 = /* Info about a OAuth configuration associated with a Pack configuration. */ Components.Schemas.PackConfigurationOauthConfigMetadata;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetPage {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
            export type OutputFormat = /* Output format of the doc or page content. */ Components.Schemas.OutputFormat;
            export type PageId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
            pageId: Parameters.PageId;
        }
        export interface QueryParameters {
            outputFormat?: Parameters.OutputFormat;
        }
        namespace Responses {
            export type $200 = /* Info about a page. */ Components.Schemas.PageWithContent;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetWebhook {
        namespace Parameters {
            export type OrganizationId = string;
            export type WebhookId = string; // uuid
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            webhookId: Parameters.WebhookId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* Info about a webhook subscription. */ Components.Schemas.Webhook;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace GetWorkspace {
        namespace Parameters {
            export type OrganizationId = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
        }
        namespace Responses {
            export type $200 = /* Info about a Coda workspace. */ Components.Schemas.Workspace;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListDocPackConnections {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type ReadAccess = /* Who in the doc has access to read data using the connection. */ Components.Schemas.DocPackConnectionReadAccess;
            export type WorkspaceId = string;
            export type WriteAccess = /* Who in the doc has access to perform actions using the connection. */ Components.Schemas.DocPackConnectionWriteAccess;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            workspaceId?: Parameters.WorkspaceId;
            readAccess?: Parameters.ReadAccess;
            writeAccess?: Parameters.WriteAccess;
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of connections linked to docs. */ Components.Schemas.DocPackConnectionList;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListDocPermissions {
        namespace Parameters {
            export type DocId = string;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* Paginated list of Permissions. */ Components.Schemas.Acl;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListDocs {
        namespace Parameters {
            export type DateActivity = /* Type of doc activity date. */ Components.Schemas.DateActivity;
            export type DocAvailabilityState = /* The availability state of a doc. */ Components.Schemas.DocAvailabilityState;
            export type DocIds = string[];
            export type DocTypes = Components.Schemas.DocType[];
            export type FetchPermissionsMode = /* How to fetch permissions for a given doc. List returns all permissions (up to a limit), summary gives an aggregated permission summary, and none returns no permissions. */ Components.Schemas.FetchPermissionsMode;
            export type FolderIds = string[];
            export type IncludeInstalledPackCount = boolean;
            export type Limit = number;
            export type OrganizationId = string;
            export type OwnerUserEmails = string /* email */[];
            export type PageToken = string;
            export type Query = string;
            export type SharedWithAnyone = /* Options for filtering a doc shared with anyone. */ Components.Schemas.SharedWithAnyoneFilter;
            export type SharedWithDomains = string /* domain */[];
            export type SharedWithExternalDomain = /* Filter for docs directly shared with a user external to the organization. */ Components.Schemas.SharedWithExternalDomainFilter;
            export type SharedWithWorkspace = boolean;
            export type Since = string;
            export type SortDirection = /* The direction to sort by. Defaults to ascending. */ Components.Schemas.SortDirection;
            export type SortField = /* The field to sort by. */ Components.Schemas.DocListSortField;
            export type Title = string;
            export type Until = string;
            export type WorkspaceIds = string[];
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            query?: Parameters.Query;
            docIds?: Parameters.DocIds;
            folderIds?: Parameters.FolderIds;
            workspaceIds?: Parameters.WorkspaceIds;
            docAvailabilityState?: Parameters.DocAvailabilityState;
            docTypes?: Parameters.DocTypes;
            dateActivity?: Parameters.DateActivity;
            since?: Parameters.Since;
            until?: Parameters.Until;
            ownerUserEmails?: Parameters.OwnerUserEmails;
            title?: Parameters.Title;
            sharedWithWorkspace?: Parameters.SharedWithWorkspace;
            sharedWithDomains?: Parameters.SharedWithDomains;
            sharedWithAnyone?: Parameters.SharedWithAnyone;
            sharedWithExternalDomain?: Parameters.SharedWithExternalDomain;
            sortField?: Parameters.SortField;
            sortDirection?: Parameters.SortDirection;
            includeInstalledPackCount?: Parameters.IncludeInstalledPackCount;
            fetchPermissionsMode?: Parameters.FetchPermissionsMode;
        }
        namespace Responses {
            export type $200 = /* List of docs. */ Components.Schemas.DocList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListEvents {
        namespace Parameters {
            export type Action = string[];
            export type ContainerBillingAccountId = string;
            export type ContainerFolderId = string;
            export type ContainerWorkspaceId = string;
            export type Email = string /* email */[];
            export type EndTime = number;
            export type EntityId = string;
            export type EntityType = /* A constant identifying the type of the resource. */ Components.Schemas.Type;
            export type Limit = number;
            export type Order = "asc" | "desc";
            export type OrganizationId = string;
            export type PageToken = string;
            export type StartTime = number;
            export type UserId = number;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            startTime?: Parameters.StartTime;
            endTime?: Parameters.EndTime;
            action?: Parameters.Action;
            userId?: Parameters.UserId;
            email?: Parameters.Email;
            entityType?: Parameters.EntityType;
            entityId?: Parameters.EntityId;
            containerWorkspaceId?: Parameters.ContainerWorkspaceId;
            containerFolderId?: Parameters.ContainerFolderId;
            containerBillingAccountId?: Parameters.ContainerBillingAccountId;
            order?: Parameters.Order;
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = Components.Schemas.EventList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListFolderPermissions {
        namespace Parameters {
            export type FolderId = string;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            folderId: Parameters.FolderId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* Paginated list of Permissions. */ Components.Schemas.Acl;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListFolders {
        namespace Parameters {
            export type FolderIds = string[];
            export type FolderType = Components.Schemas.FolderType;
            /**
             * When true, permissions metadata is included
             */
            export type IncludeAcl = boolean;
            /**
             * When true, deleted folders are included
             */
            export type IncludeDeleted = boolean;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            folderIds?: Parameters.FolderIds;
            folderType?: Parameters.FolderType;
            query?: Parameters.Query;
            includeAcl?: /* When true, permissions metadata is included */ Parameters.IncludeAcl;
            includeDeleted?: /* When true, deleted folders are included */ Parameters.IncludeDeleted;
        }
        namespace Responses {
            export type $200 = /* List of folders. */ Components.Schemas.FolderList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListGroupMembers {
        namespace Parameters {
            export type GroupId = string;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            groupId: Parameters.GroupId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = Components.Schemas.GroupMemberList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListGroups {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of groups. */ Components.Schemas.GroupList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListLegalHoldDocs {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            query?: Parameters.Query;
        }
        namespace Responses {
            export type $200 = /* List of docs. */ Components.Schemas.DocList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListLegalHoldExports {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            query?: Parameters.Query;
        }
        namespace Responses {
            export type $200 = /* List of legal hold exports. */ Components.Schemas.LegalHoldExportList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListLegalHoldUsers {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of legal hold users. */ Components.Schemas.LegalHoldUsersList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListLegalHolds {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            query?: Parameters.Query;
        }
        namespace Responses {
            export type $200 = /* List of legal holds. */ Components.Schemas.LegalHoldList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrgApiTokens {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of API Tokens for users within an organization. */ Components.Schemas.OrgUserApiTokenList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrgUsers {
        namespace Parameters {
            export type DeactivatedAfter = number;
            export type Emails = string /* email */[];
            export type IncludeOwnedDocCounts = boolean;
            export type IsActivated = boolean;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            isActivated?: Parameters.IsActivated;
            query?: Parameters.Query;
            emails?: Parameters.Emails;
            deactivatedAfter?: Parameters.DeactivatedAfter;
            includeOwnedDocCounts?: Parameters.IncludeOwnedDocCounts;
        }
        namespace Responses {
            export type $200 = Components.Schemas.OrgUserList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrganizationPackConfigurationPermissions {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PackConfigurationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* Paginated list of PackConfigurationPermissions. */ Components.Schemas.PackConfigurationAcl;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrganizationPackConfigurations {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PackId = number;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            packId?: Parameters.PackId;
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of Pack configurations. */ Components.Schemas.PackConfigurationList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrganizationPackControls {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of Pack controls. */ Components.Schemas.PackControlList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrganizationPackRequests {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PackIds = number[];
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            packIds?: Parameters.PackIds;
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of Pack requests. */ Components.Schemas.PackRequestList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListOrganizations {
        namespace Parameters {
            export type Limit = number;
            export type PageToken = string;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of organizations. */ Components.Schemas.OrganizationList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListPageViewers {
        namespace Parameters {
            export type DocId = string;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type PageViewersLimit = number;
            export type SinceDate = string; // date
            export type UntilDate = string; // date
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export interface QueryParameters {
            sinceDate: Parameters.SinceDate /* date */;
            untilDate: Parameters.UntilDate /* date */;
            pageToken?: Parameters.PageToken;
            limit?: Parameters.Limit;
            pageViewersLimit?: Parameters.PageViewersLimit;
        }
        namespace Responses {
            export type $200 = /* List of viewers per page. */ Components.Schemas.PageViewersList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListPages {
        namespace Parameters {
            export type DocId = string;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of pages. */ Components.Schemas.PageList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListWebhooks {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
        }
        namespace Responses {
            export type $200 = /* List of webhooks. */ Components.Schemas.WebhookList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListWorkspaceUsers {
        namespace Parameters {
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type WorkspaceId = string;
            export type WorkspaceUserRoles = Components.Schemas.WorkspaceUserRole[];
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
        }
        export interface QueryParameters {
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            workspaceUserRoles?: Parameters.WorkspaceUserRoles;
        }
        namespace Responses {
            export type $200 = Components.Schemas.WorkspaceUserList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ListWorkspaces {
        namespace Parameters {
            export type IncludeAllWorkspaceData = boolean;
            export type Limit = number;
            export type OrganizationId = string;
            export type PageToken = string;
            export type Query = string;
            export type WorkspaceIds = string[];
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export interface QueryParameters {
            workspaceIds?: Parameters.WorkspaceIds;
            limit?: Parameters.Limit;
            pageToken?: Parameters.PageToken;
            query?: Parameters.Query;
            includeAllWorkspaceData?: Parameters.IncludeAllWorkspaceData;
        }
        namespace Responses {
            export type $200 = /* List of workspaces. */ Components.Schemas.WorkspaceList;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace MoveDoc {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        export type RequestBody = /* Request payload for moving a doc. */ Components.Schemas.MoveDocRequest;
        namespace Responses {
            export type $200 = /* The result of moving a doc. */ Components.Schemas.MoveDocResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace RemoveWebhook {
        namespace Parameters {
            export type OrganizationId = string;
            export type WebhookId = string; // uuid
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            webhookId: Parameters.WebhookId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* The result of deleting a webhook subscription. */ Components.Schemas.DeleteWebhookResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace RemoveWorkspaceUser {
        namespace Parameters {
            export type OrganizationId = string;
            export type UserEmail = string; // email
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            userEmail: Parameters.UserEmail /* email */;
        }
        namespace Responses {
            export type $200 = /* Result of the user workspace removal request */ Components.Schemas.RemoveWorkspaceUserResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ResetWebhook {
        namespace Parameters {
            export type OrganizationId = string;
            export type WebhookId = string; // uuid
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            webhookId: Parameters.WebhookId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* Info about a webhook subscription. */ Components.Schemas.Webhook;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace ReviveDoc {
        namespace Parameters {
            export type DocId = string;
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            docId: Parameters.DocId;
        }
        namespace Responses {
            export type $200 = /* The result of reviving a doc. */ Components.Schemas.ReviveDocResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace RevokeApiToken {
        namespace Parameters {
            export type ApiTokenId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            apiTokenId: Parameters.ApiTokenId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* The result of an API token revocation. */ Components.Schemas.OrgUserApiTokenRevoke;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace SetOrganizationPackConfigurationOauthMetadata {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        export type RequestBody = /* Request to set the OAuth configuration associated with a Pack configuration. */ Components.Schemas.UpdatePackConfigurationOauthConfigRequest;
        namespace Responses {
            export type $200 = /* Info about a OAuth configuration associated with a Pack configuration. */ Components.Schemas.PackConfigurationOauthConfigMetadata;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace SetOrganizationPackConfigurationPermissions {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        export type RequestBody = /* Payload for setting a Pack configuration's permissions. */ Components.Schemas.SetPackConfigurationPermissionsRequest;
        namespace Responses {
            export type $200 = /* The result of settings a Pack configuration's permissions. */ Components.Schemas.SetPackConfigurationPermissionsResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace SetOrganizationPackControl {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackId = number;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packId: Parameters.PackId;
        }
        export type RequestBody = /* Payload for a updating a Pack control */ Components.Schemas.UpdatePackControlRequest;
        namespace Responses {
            export type $200 = /* Info about how access to a Pack has been configured for an organization. */ Components.Schemas.PackControl;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace TransferResources {
        namespace Parameters {
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
        }
        export type RequestBody = /* Payload for transferring resources between users. */ Components.Schemas.TransferResourcesRequest;
        namespace Responses {
            export type $202 = /* Result of the transfer resources request */ Components.Schemas.TransferResourcesResponse;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace UpdateLegalHold {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export type RequestBody = /* Request payload for updating a legal hold. */ Components.Schemas.UpdateLegalHoldRequest;
        namespace Responses {
            export type $200 = /* The result of updating a legal hold. */ Components.Schemas.UpdateLegalHoldResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace UpdateLegalHoldUsers {
        namespace Parameters {
            export type LegalHoldId = string; // uuid
            export type OrganizationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            legalHoldId: Parameters.LegalHoldId /* uuid */;
        }
        export type RequestBody = /* Request payload for updating a legal hold's users collection. */ Components.Schemas.UpdateLegalHoldUsersRequest;
        namespace Responses {
            export type $200 = /* The result of updating a legal hold's users. */ Components.Schemas.UpdateLegalHoldUsersResult;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace UpdateOrganizationPackConfiguration {
        namespace Parameters {
            export type OrganizationId = string;
            export type PackConfigurationId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            packConfigurationId: Parameters.PackConfigurationId;
        }
        export type RequestBody = /* Payload for a request to update a Pack configuration. */ Components.Schemas.UpdatePackConfigurationRequest;
        namespace Responses {
            export type $200 = /* Info about a Pack configuration. */ Components.Schemas.PackConfiguration;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace UpdateWebhook {
        namespace Parameters {
            export type OrganizationId = string;
            export type WebhookId = string; // uuid
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            webhookId: Parameters.WebhookId /* uuid */;
        }
        export type RequestBody = /* Payload for creating or updating a webhook subscription. */ Components.Schemas.UpdateWebhookRequest;
        namespace Responses {
            export type $200 = /* Info about a webhook subscription. */ Components.Schemas.Webhook;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
    namespace UpdateWorkspaceUserRole {
        namespace Parameters {
            export type OrganizationId = string;
            export type UserEmail = string; // email
            export type WorkspaceId = string;
        }
        export interface PathParameters {
            organizationId: Parameters.OrganizationId;
            workspaceId: Parameters.WorkspaceId;
            userEmail: Parameters.UserEmail /* email */;
        }
        export type RequestBody = /* Payload for updating an existing user in a workspace. */ Components.Schemas.UpdateWorkspaceUserRequest;
        namespace Responses {
            export type $200 = /* Metadata of a user in a workspace. */ Components.Schemas.WorkspaceUser;
            export type $400 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.BadRequestError;
            export type $401 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.UnauthorizedError;
            export type $403 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.ForbiddenError;
            export type $404 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.NotFoundError;
            export type $429 = /* An HTTP error resulting from an unsuccessful request. */ Components.Responses.TooManyRequestsError;
        }
    }
}

export interface OperationMethods {
  /**
   * listOrganizations - List organizations
   * 
   * Returns a list of organizations the caller is an administrator for
   * 
   */
  'listOrganizations'(
    parameters?: Parameters<Paths.ListOrganizations.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrganizations.Responses.$200>
  /**
   * getOrganization - Get organization
   * 
   * Returns the requested organization.
   * 
   */
  'getOrganization'(
    parameters?: Parameters<Paths.GetOrganization.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOrganization.Responses.$200>
  /**
   * listOrgApiTokens - List API tokens for organization users
   * 
   * Returns a list of API tokens created by users within an organization.
   * 
   */
  'listOrgApiTokens'(
    parameters?: Parameters<Paths.ListOrgApiTokens.QueryParameters & Paths.ListOrgApiTokens.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrgApiTokens.Responses.$200>
  /**
   * revokeApiToken - Revoke the given API token
   * 
   * Revokes the given API token and prevents future use.
   * 
   */
  'revokeApiToken'(
    parameters?: Parameters<Paths.RevokeApiToken.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RevokeApiToken.Responses.$200>
  /**
   * listEvents - List audit events
   * 
   * Returns a list of audit events within an organization.
   * 
   */
  'listEvents'(
    parameters?: Parameters<Paths.ListEvents.QueryParameters & Paths.ListEvents.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListEvents.Responses.$200>
  /**
   * listDocs - List docs
   * 
   * Returns a list of docs in the organization
   * 
   */
  'listDocs'(
    parameters?: Parameters<Paths.ListDocs.QueryParameters & Paths.ListDocs.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListDocs.Responses.$200>
  /**
   * listDocPackConnections - List doc Pack connections
   * 
   * Returns a list of Pack connections linked to docs across the organization.
   * 
   */
  'listDocPackConnections'(
    parameters?: Parameters<Paths.ListDocPackConnections.QueryParameters & Paths.ListDocPackConnections.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListDocPackConnections.Responses.$200>
  /**
   * getDoc - Get doc metadata
   * 
   * Returns metadata for a specific doc
   * 
   */
  'getDoc'(
    parameters?: Parameters<Paths.GetDoc.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetDoc.Responses.$200>
  /**
   * deleteDoc - Delete doc
   * 
   * Deletes an existing doc
   */
  'deleteDoc'(
    parameters?: Parameters<Paths.DeleteDoc.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteDoc.Responses.$200>
  /**
   * listDocPermissions - List doc permissions
   * 
   * Returns a list of permissions for this doc
   */
  'listDocPermissions'(
    parameters?: Parameters<Paths.ListDocPermissions.QueryParameters & Paths.ListDocPermissions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListDocPermissions.Responses.$200>
  /**
   * addDocPermission - Add permission to a doc
   * 
   * Adds a new permission to the doc.
   */
  'addDocPermission'(
    parameters?: Parameters<Paths.AddDocPermission.PathParameters> | null,
    data?: Paths.AddDocPermission.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddDocPermission.Responses.$200>
  /**
   * deleteDocPermission - Delete doc permission
   * 
   * Deletes an existing permission.
   */
  'deleteDocPermission'(
    parameters?: Parameters<Paths.DeleteDocPermission.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteDocPermission.Responses.$200>
  /**
   * exportDoc - Launch request to export a doc
   * 
   * Begins the export process for a doc; the response carries the request ID that can be polled for status & used to download the exported file once ready.
   */
  'exportDoc'(
    parameters?: Parameters<Paths.ExportDoc.PathParameters> | null,
    data?: Paths.ExportDoc.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ExportDoc.Responses.$200>
  /**
   * getExportRequestStatus - Determine the status of a doc export request
   * 
   * Returns the status of a previous doc export request, including a file download link once ready. Download links are valid for 5 minutes and a new download link is returned on each call to this API once the export has completed.
   * 
   */
  'getExportRequestStatus'(
    parameters?: Parameters<Paths.GetExportRequestStatus.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetExportRequestStatus.Responses.$200>
  /**
   * reviveDoc - Revive doc
   * 
   * Revives a deleted doc in the organization
   */
  'reviveDoc'(
    parameters?: Parameters<Paths.ReviveDoc.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ReviveDoc.Responses.$200>
  /**
   * moveDoc - Move doc
   * 
   * Moves a doc to another folder within the organization
   */
  'moveDoc'(
    parameters?: Parameters<Paths.MoveDoc.PathParameters> | null,
    data?: Paths.MoveDoc.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.MoveDoc.Responses.$200>
  /**
   * listPages - List pages
   * 
   * Returns a list of pages in the doc
   * 
   */
  'listPages'(
    parameters?: Parameters<Paths.ListPages.QueryParameters & Paths.ListPages.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPages.Responses.$200>
  /**
   * getPage - Get page information
   * 
   * Returns information for a specific page
   * 
   */
  'getPage'(
    parameters?: Parameters<Paths.GetPage.QueryParameters & Paths.GetPage.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPage.Responses.$200>
  /**
   * listPageViewers - List page viewers
   * 
   * Returns users who viewed the pages in a doc in a given time range
   * 
   */
  'listPageViewers'(
    parameters?: Parameters<Paths.ListPageViewers.QueryParameters & Paths.ListPageViewers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPageViewers.Responses.$200>
  /**
   * listGroups - List groups
   * 
   * Returns a list of groups in the organization
   * 
   */
  'listGroups'(
    parameters?: Parameters<Paths.ListGroups.QueryParameters & Paths.ListGroups.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListGroups.Responses.$200>
  /**
   * getGroup - Get group
   * 
   * Returns the requested group.
   */
  'getGroup'(
    parameters?: Parameters<Paths.GetGroup.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetGroup.Responses.$200>
  /**
   * listGroupMembers - List group members
   * 
   * Returns a list of members for this group
   */
  'listGroupMembers'(
    parameters?: Parameters<Paths.ListGroupMembers.QueryParameters & Paths.ListGroupMembers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListGroupMembers.Responses.$200>
  /**
   * listLegalHolds - List legal holds
   * 
   * Returns a list of legal holds in the organization
   * 
   */
  'listLegalHolds'(
    parameters?: Parameters<Paths.ListLegalHolds.QueryParameters & Paths.ListLegalHolds.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListLegalHolds.Responses.$200>
  /**
   * addLegalHold - Create a new legal hold
   * 
   * Creates a new legal hold in the Organization.
   */
  'addLegalHold'(
    parameters?: Parameters<Paths.AddLegalHold.PathParameters> | null,
    data?: Paths.AddLegalHold.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddLegalHold.Responses.$200>
  /**
   * getLegalHold - Get legal hold
   * 
   * Returns metadata for a specific legal hold
   * 
   */
  'getLegalHold'(
    parameters?: Parameters<Paths.GetLegalHold.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLegalHold.Responses.$200>
  /**
   * updateLegalHold - Update legal hold
   * 
   * Updates the legal hold.
   * 
   */
  'updateLegalHold'(
    parameters?: Parameters<Paths.UpdateLegalHold.PathParameters> | null,
    data?: Paths.UpdateLegalHold.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateLegalHold.Responses.$200>
  /**
   * deleteLegalHold - Delete the legal hold
   * 
   * Deletes an existing legal hold.
   */
  'deleteLegalHold'(
    parameters?: Parameters<Paths.DeleteLegalHold.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteLegalHold.Responses.$200>
  /**
   * listLegalHoldDocs - List docs covered by the legal hold
   * 
   * Returns a list of docs held by the legal hold
   * 
   */
  'listLegalHoldDocs'(
    parameters?: Parameters<Paths.ListLegalHoldDocs.QueryParameters & Paths.ListLegalHoldDocs.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListLegalHoldDocs.Responses.$200>
  /**
   * listLegalHoldExports - List exports for the legal hold
   * 
   * Returns a list of exports created for the legal hold
   * 
   */
  'listLegalHoldExports'(
    parameters?: Parameters<Paths.ListLegalHoldExports.QueryParameters & Paths.ListLegalHoldExports.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListLegalHoldExports.Responses.$200>
  /**
   * addLegalHoldExport - Create a new legal hold export
   * 
   * Creates a new legal hold export for the hold.
   */
  'addLegalHoldExport'(
    parameters?: Parameters<Paths.AddLegalHoldExport.PathParameters> | null,
    data?: Paths.AddLegalHoldExport.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddLegalHoldExport.Responses.$200>
  /**
   * getLegalHoldExport - Get legal hold export
   * 
   * Returns metadata for a specific legal hold export
   * 
   */
  'getLegalHoldExport'(
    parameters?: Parameters<Paths.GetLegalHoldExport.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetLegalHoldExport.Responses.$200>
  /**
   * deleteLegalHoldExport - Delete the legal hold export
   * 
   * Deletes an existing legal hold export.
   */
  'deleteLegalHoldExport'(
    parameters?: Parameters<Paths.DeleteLegalHoldExport.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteLegalHoldExport.Responses.$200>
  /**
   * listLegalHoldUsers - List users included in the legal hold
   * 
   * Returns a list of users included in the legal hold
   * 
   */
  'listLegalHoldUsers'(
    parameters?: Parameters<Paths.ListLegalHoldUsers.QueryParameters & Paths.ListLegalHoldUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListLegalHoldUsers.Responses.$200>
  /**
   * updateLegalHoldUsers - Update legal hold users
   * 
   * Updates the users included in the legal hold.
   * 
   */
  'updateLegalHoldUsers'(
    parameters?: Parameters<Paths.UpdateLegalHoldUsers.PathParameters> | null,
    data?: Paths.UpdateLegalHoldUsers.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateLegalHoldUsers.Responses.$200>
  /**
   * listOrgUsers - List organization users
   * 
   * Returns a list of users within an organization, across all registered domains.
   * 
   */
  'listOrgUsers'(
    parameters?: Parameters<Paths.ListOrgUsers.QueryParameters & Paths.ListOrgUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrgUsers.Responses.$200>
  /**
   * transferResources - Transfer user resources
   * 
   * Transfers resources such as docs and workspace membership from a deactivated user to an active user.
   * 
   */
  'transferResources'(
    parameters?: Parameters<Paths.TransferResources.PathParameters> | null,
    data?: Paths.TransferResources.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TransferResources.Responses.$202>
  /**
   * activateOrgUser - Activate a user
   * 
   * Activates a deactivated user.
   */
  'activateOrgUser'(
    parameters?: Parameters<Paths.ActivateOrgUser.PathParameters> | null,
    data?: Paths.ActivateOrgUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ActivateOrgUser.Responses.$200>
  /**
   * deactivateOrgUser - Deactivate a user
   * 
   * Deactivates a user, ensuring the user is no longer paid and allowing their docs to be reassigned to a new owner.
   * 
   */
  'deactivateOrgUser'(
    parameters?: Parameters<Paths.DeactivateOrgUser.PathParameters> | null,
    data?: Paths.DeactivateOrgUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeactivateOrgUser.Responses.$200>
  /**
   * listWebhooks - List webhooks
   * 
   * Returns a list of webhooks in the organization
   * 
   */
  'listWebhooks'(
    parameters?: Parameters<Paths.ListWebhooks.QueryParameters & Paths.ListWebhooks.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListWebhooks.Responses.$200>
  /**
   * addWebhook - Create new webhook subscription
   * 
   * Creates a new webhook subscription for the organization.
   */
  'addWebhook'(
    parameters?: Parameters<Paths.AddWebhook.PathParameters> | null,
    data?: Paths.AddWebhook.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddWebhook.Responses.$200>
  /**
   * getWebhook - Get a webhook subscription
   * 
   * Returns the requested webhook subscription.
   * 
   */
  'getWebhook'(
    parameters?: Parameters<Paths.GetWebhook.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWebhook.Responses.$200>
  /**
   * updateWebhook - Update a webhook subscription
   * 
   * Updates parameters for an existing webhook subscription.
   */
  'updateWebhook'(
    parameters?: Parameters<Paths.UpdateWebhook.PathParameters> | null,
    data?: Paths.UpdateWebhook.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateWebhook.Responses.$200>
  /**
   * removeWebhook - Deletes a webhook subscription
   * 
   * Deletes a webhook subscription.
   */
  'removeWebhook'(
    parameters?: Parameters<Paths.RemoveWebhook.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveWebhook.Responses.$200>
  /**
   * resetWebhook - Reset a webhook subscription
   * 
   * Resets a webhook subscription. Will force re-initialization of the webhook subscription, including the initial handshake process. Used to re-start a webhook that previously failed the initial handshake or that has become disabled due to the target failing too many consecutive webhook payloads.
   * 
   */
  'resetWebhook'(
    parameters?: Parameters<Paths.ResetWebhook.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ResetWebhook.Responses.$200>
  /**
   * listWorkspaces - List workspaces
   * 
   * Returns a list of workspaces in the organization
   * 
   */
  'listWorkspaces'(
    parameters?: Parameters<Paths.ListWorkspaces.QueryParameters & Paths.ListWorkspaces.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListWorkspaces.Responses.$200>
  /**
   * getWorkspace - Get workspace
   * 
   * Returns the requested workspace.
   * 
   */
  'getWorkspace'(
    parameters?: Parameters<Paths.GetWorkspace.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetWorkspace.Responses.$200>
  /**
   * listFolders - List folders
   * 
   * Returns a list of folders in the workspace
   * 
   */
  'listFolders'(
    parameters?: Parameters<Paths.ListFolders.QueryParameters & Paths.ListFolders.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListFolders.Responses.$200>
  /**
   * getFolder - Get folder
   * 
   * Returns the requested folder.
   * 
   */
  'getFolder'(
    parameters?: Parameters<Paths.GetFolder.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetFolder.Responses.$200>
  /**
   * listFolderPermissions - List folder permissions
   * 
   * Returns a list of permissions for this folder
   */
  'listFolderPermissions'(
    parameters?: Parameters<Paths.ListFolderPermissions.QueryParameters & Paths.ListFolderPermissions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListFolderPermissions.Responses.$200>
  /**
   * addFolderPermission - Add permission to a folder
   * 
   * Adds a new permission to the folder.
   */
  'addFolderPermission'(
    parameters?: Parameters<Paths.AddFolderPermission.PathParameters> | null,
    data?: Paths.AddFolderPermission.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddFolderPermission.Responses.$200>
  /**
   * deleteFolderPermission - Delete folder permission
   * 
   * Deletes an existing permission.
   */
  'deleteFolderPermission'(
    parameters?: Parameters<Paths.DeleteFolderPermission.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteFolderPermission.Responses.$200>
  /**
   * listWorkspaceUsers - List workspace users
   * 
   * Returns a list of users within a workspace.
   * 
   */
  'listWorkspaceUsers'(
    parameters?: Parameters<Paths.ListWorkspaceUsers.QueryParameters & Paths.ListWorkspaceUsers.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListWorkspaceUsers.Responses.$200>
  /**
   * addWorkspaceUser - Add workspace user
   * 
   * Adds an existing user to a workspace.
   * 
   */
  'addWorkspaceUser'(
    parameters?: Parameters<Paths.AddWorkspaceUser.PathParameters> | null,
    data?: Paths.AddWorkspaceUser.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddWorkspaceUser.Responses.$200>
  /**
   * updateWorkspaceUserRole - Update workspace user role
   * 
   * Updates the role of the given user in the workspace.
   * 
   */
  'updateWorkspaceUserRole'(
    parameters?: Parameters<Paths.UpdateWorkspaceUserRole.PathParameters> | null,
    data?: Paths.UpdateWorkspaceUserRole.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateWorkspaceUserRole.Responses.$200>
  /**
   * removeWorkspaceUser - Removes a user from a workspace
   * 
   * Removes a user from a workspace. Note this does not remove the user from Coda or from other workspaces.
   * 
   */
  'removeWorkspaceUser'(
    parameters?: Parameters<Paths.RemoveWorkspaceUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RemoveWorkspaceUser.Responses.$200>
  /**
   * listOrganizationPackRequests - List Pack requests for an organization
   * 
   * Returns a list of Pack requests for the organization
   * 
   */
  'listOrganizationPackRequests'(
    parameters?: Parameters<Paths.ListOrganizationPackRequests.QueryParameters & Paths.ListOrganizationPackRequests.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrganizationPackRequests.Responses.$200>
  /**
   * listOrganizationPackControls - List Pack controls for an organization
   * 
   * Returns a list of Pack controls for the organization
   * 
   */
  'listOrganizationPackControls'(
    parameters?: Parameters<Paths.ListOrganizationPackControls.QueryParameters & Paths.ListOrganizationPackControls.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrganizationPackControls.Responses.$200>
  /**
   * setOrganizationPackControl - Sets pack control for an Pack
   * 
   * Sets pack control for an Pack
   * 
   */
  'setOrganizationPackControl'(
    parameters?: Parameters<Paths.SetOrganizationPackControl.PathParameters> | null,
    data?: Paths.SetOrganizationPackControl.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetOrganizationPackControl.Responses.$200>
  /**
   * listOrganizationPackConfigurations - List Pack configurations for an organization
   * 
   * Returns a list of Pack configurations for the organization
   * 
   */
  'listOrganizationPackConfigurations'(
    parameters?: Parameters<Paths.ListOrganizationPackConfigurations.QueryParameters & Paths.ListOrganizationPackConfigurations.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrganizationPackConfigurations.Responses.$200>
  /**
   * addOrganizationPackConfiguration - Adds Pack configuration
   * 
   * Adds a Pack configuration for a Pack to an organization
   * 
   */
  'addOrganizationPackConfiguration'(
    parameters?: Parameters<Paths.AddOrganizationPackConfiguration.PathParameters> | null,
    data?: Paths.AddOrganizationPackConfiguration.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddOrganizationPackConfiguration.Responses.$200>
  /**
   * getOrganizationPackConfiguration - Get a Pack configuration
   * 
   * Returns a Pack configuration
   * 
   */
  'getOrganizationPackConfiguration'(
    parameters?: Parameters<Paths.GetOrganizationPackConfiguration.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOrganizationPackConfiguration.Responses.$200>
  /**
   * updateOrganizationPackConfiguration - Updates a Pack configuration
   * 
   * Updates a Pack configuration and asynchronously applies to the organization by updating any existing Pack installations using the now updated Pack configuration.
   * 
   */
  'updateOrganizationPackConfiguration'(
    parameters?: Parameters<Paths.UpdateOrganizationPackConfiguration.PathParameters> | null,
    data?: Paths.UpdateOrganizationPackConfiguration.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateOrganizationPackConfiguration.Responses.$200>
  /**
   * deleteOrganizationPackConfiguration - Delete the given Pack configuration
   * 
   * Deletes the given Pack configuration and asynchronously applies to the organization by updating any existing Pack installations using the deleted Pack configuration.
   * 
   */
  'deleteOrganizationPackConfiguration'(
    parameters?: Parameters<Paths.DeleteOrganizationPackConfiguration.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteOrganizationPackConfiguration.Responses.$200>
  /**
   * listOrganizationPackConfigurationPermissions - List permissions assigned to a Pack configuration
   * 
   * Returns a list of Pack configuration permissions
   * 
   */
  'listOrganizationPackConfigurationPermissions'(
    parameters?: Parameters<Paths.ListOrganizationPackConfigurationPermissions.QueryParameters & Paths.ListOrganizationPackConfigurationPermissions.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListOrganizationPackConfigurationPermissions.Responses.$200>
  /**
   * setOrganizationPackConfigurationPermissions - Replaces the permissions to use a Pack configuration
   * 
   * Replaces the permissions to use a Pack configuration
   * 
   */
  'setOrganizationPackConfigurationPermissions'(
    parameters?: Parameters<Paths.SetOrganizationPackConfigurationPermissions.PathParameters> | null,
    data?: Paths.SetOrganizationPackConfigurationPermissions.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetOrganizationPackConfigurationPermissions.Responses.$200>
  /**
   * addOrganizationPackConfigurationPermission - Adds a permission to use a Pack configuration
   * 
   * Adds a permission to use a Pack configuration
   * 
   */
  'addOrganizationPackConfigurationPermission'(
    parameters?: Parameters<Paths.AddOrganizationPackConfigurationPermission.PathParameters> | null,
    data?: Paths.AddOrganizationPackConfigurationPermission.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AddOrganizationPackConfigurationPermission.Responses.$200>
  /**
   * deleteOrganizationPackConfigurationPermission - Delete the given Pack configuration permission
   * 
   * Deletes the given Pack configuration and triggers necessarily workflows to update docs with the policy
   * 
   */
  'deleteOrganizationPackConfigurationPermission'(
    parameters?: Parameters<Paths.DeleteOrganizationPackConfigurationPermission.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteOrganizationPackConfigurationPermission.Responses.$200>
  /**
   * getOrganizationPackConfigurationOauthMetadata - Gets OAuth configuration metadata
   * 
   * Returns OAuth configuration metadata associated with the pack configuration
   * 
   */
  'getOrganizationPackConfigurationOauthMetadata'(
    parameters?: Parameters<Paths.GetOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetOrganizationPackConfigurationOauthMetadata.Responses.$200>
  /**
   * setOrganizationPackConfigurationOauthMetadata - Sets OAuth configuration metadata
   * 
   * Sets OAuth configuration metadata associated with the pack configuration
   * 
   */
  'setOrganizationPackConfigurationOauthMetadata'(
    parameters?: Parameters<Paths.SetOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
    data?: Paths.SetOrganizationPackConfigurationOauthMetadata.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SetOrganizationPackConfigurationOauthMetadata.Responses.$200>
  /**
   * deleteOrganizationPackConfigurationOauthMetadata - Removes OAuth configuration metadata
   * 
   * Removes any OAuth configuration metadata associated with the pack configuration
   * 
   */
  'deleteOrganizationPackConfigurationOauthMetadata'(
    parameters?: Parameters<Paths.DeleteOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteOrganizationPackConfigurationOauthMetadata.Responses.$200>
}

export interface PathsDictionary {
  ['/organizations']: {
    /**
     * listOrganizations - List organizations
     * 
     * Returns a list of organizations the caller is an administrator for
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrganizations.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrganizations.Responses.$200>
  }
  ['/organizations/{organizationId}']: {
    /**
     * getOrganization - Get organization
     * 
     * Returns the requested organization.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetOrganization.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOrganization.Responses.$200>
  }
  ['/organizations/{organizationId}/apiTokens']: {
    /**
     * listOrgApiTokens - List API tokens for organization users
     * 
     * Returns a list of API tokens created by users within an organization.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrgApiTokens.QueryParameters & Paths.ListOrgApiTokens.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrgApiTokens.Responses.$200>
  }
  ['/organizations/{organizationId}/apiTokens/{apiTokenId}']: {
    /**
     * revokeApiToken - Revoke the given API token
     * 
     * Revokes the given API token and prevents future use.
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.RevokeApiToken.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RevokeApiToken.Responses.$200>
  }
  ['/organizations/{organizationId}/audit/events']: {
    /**
     * listEvents - List audit events
     * 
     * Returns a list of audit events within an organization.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListEvents.QueryParameters & Paths.ListEvents.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListEvents.Responses.$200>
  }
  ['/organizations/{organizationId}/docs']: {
    /**
     * listDocs - List docs
     * 
     * Returns a list of docs in the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListDocs.QueryParameters & Paths.ListDocs.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListDocs.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/packConnections']: {
    /**
     * listDocPackConnections - List doc Pack connections
     * 
     * Returns a list of Pack connections linked to docs across the organization.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListDocPackConnections.QueryParameters & Paths.ListDocPackConnections.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListDocPackConnections.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}']: {
    /**
     * getDoc - Get doc metadata
     * 
     * Returns metadata for a specific doc
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetDoc.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetDoc.Responses.$200>
    /**
     * deleteDoc - Delete doc
     * 
     * Deletes an existing doc
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteDoc.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteDoc.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/acl/permissions']: {
    /**
     * listDocPermissions - List doc permissions
     * 
     * Returns a list of permissions for this doc
     */
    'get'(
      parameters?: Parameters<Paths.ListDocPermissions.QueryParameters & Paths.ListDocPermissions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListDocPermissions.Responses.$200>
    /**
     * addDocPermission - Add permission to a doc
     * 
     * Adds a new permission to the doc.
     */
    'post'(
      parameters?: Parameters<Paths.AddDocPermission.PathParameters> | null,
      data?: Paths.AddDocPermission.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddDocPermission.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/acl/permissions/{docPermissionId}']: {
    /**
     * deleteDocPermission - Delete doc permission
     * 
     * Deletes an existing permission.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteDocPermission.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteDocPermission.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/export']: {
    /**
     * exportDoc - Launch request to export a doc
     * 
     * Begins the export process for a doc; the response carries the request ID that can be polled for status & used to download the exported file once ready.
     */
    'post'(
      parameters?: Parameters<Paths.ExportDoc.PathParameters> | null,
      data?: Paths.ExportDoc.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ExportDoc.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/export/{exportId}']: {
    /**
     * getExportRequestStatus - Determine the status of a doc export request
     * 
     * Returns the status of a previous doc export request, including a file download link once ready. Download links are valid for 5 minutes and a new download link is returned on each call to this API once the export has completed.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetExportRequestStatus.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetExportRequestStatus.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/revive']: {
    /**
     * reviveDoc - Revive doc
     * 
     * Revives a deleted doc in the organization
     */
    'post'(
      parameters?: Parameters<Paths.ReviveDoc.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ReviveDoc.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/move']: {
    /**
     * moveDoc - Move doc
     * 
     * Moves a doc to another folder within the organization
     */
    'post'(
      parameters?: Parameters<Paths.MoveDoc.PathParameters> | null,
      data?: Paths.MoveDoc.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.MoveDoc.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/pages']: {
    /**
     * listPages - List pages
     * 
     * Returns a list of pages in the doc
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListPages.QueryParameters & Paths.ListPages.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPages.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/pages/{pageId}']: {
    /**
     * getPage - Get page information
     * 
     * Returns information for a specific page
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetPage.QueryParameters & Paths.GetPage.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPage.Responses.$200>
  }
  ['/organizations/{organizationId}/docs/{docId}/pageViewers']: {
    /**
     * listPageViewers - List page viewers
     * 
     * Returns users who viewed the pages in a doc in a given time range
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListPageViewers.QueryParameters & Paths.ListPageViewers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPageViewers.Responses.$200>
  }
  ['/organizations/{organizationId}/groups']: {
    /**
     * listGroups - List groups
     * 
     * Returns a list of groups in the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListGroups.QueryParameters & Paths.ListGroups.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListGroups.Responses.$200>
  }
  ['/organizations/{organizationId}/groups/{groupId}']: {
    /**
     * getGroup - Get group
     * 
     * Returns the requested group.
     */
    'get'(
      parameters?: Parameters<Paths.GetGroup.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetGroup.Responses.$200>
  }
  ['/organizations/{organizationId}/groups/{groupId}/members']: {
    /**
     * listGroupMembers - List group members
     * 
     * Returns a list of members for this group
     */
    'get'(
      parameters?: Parameters<Paths.ListGroupMembers.QueryParameters & Paths.ListGroupMembers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListGroupMembers.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds']: {
    /**
     * listLegalHolds - List legal holds
     * 
     * Returns a list of legal holds in the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListLegalHolds.QueryParameters & Paths.ListLegalHolds.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListLegalHolds.Responses.$200>
    /**
     * addLegalHold - Create a new legal hold
     * 
     * Creates a new legal hold in the Organization.
     */
    'post'(
      parameters?: Parameters<Paths.AddLegalHold.PathParameters> | null,
      data?: Paths.AddLegalHold.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddLegalHold.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds/{legalHoldId}']: {
    /**
     * getLegalHold - Get legal hold
     * 
     * Returns metadata for a specific legal hold
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetLegalHold.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLegalHold.Responses.$200>
    /**
     * updateLegalHold - Update legal hold
     * 
     * Updates the legal hold.
     * 
     */
    'put'(
      parameters?: Parameters<Paths.UpdateLegalHold.PathParameters> | null,
      data?: Paths.UpdateLegalHold.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateLegalHold.Responses.$200>
    /**
     * deleteLegalHold - Delete the legal hold
     * 
     * Deletes an existing legal hold.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteLegalHold.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteLegalHold.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds/{legalHoldId}/docs']: {
    /**
     * listLegalHoldDocs - List docs covered by the legal hold
     * 
     * Returns a list of docs held by the legal hold
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListLegalHoldDocs.QueryParameters & Paths.ListLegalHoldDocs.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListLegalHoldDocs.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds/{legalHoldId}/exports']: {
    /**
     * listLegalHoldExports - List exports for the legal hold
     * 
     * Returns a list of exports created for the legal hold
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListLegalHoldExports.QueryParameters & Paths.ListLegalHoldExports.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListLegalHoldExports.Responses.$200>
    /**
     * addLegalHoldExport - Create a new legal hold export
     * 
     * Creates a new legal hold export for the hold.
     */
    'post'(
      parameters?: Parameters<Paths.AddLegalHoldExport.PathParameters> | null,
      data?: Paths.AddLegalHoldExport.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddLegalHoldExport.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds/{legalHoldId}/exports/{legalHoldExportId}']: {
    /**
     * getLegalHoldExport - Get legal hold export
     * 
     * Returns metadata for a specific legal hold export
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetLegalHoldExport.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetLegalHoldExport.Responses.$200>
    /**
     * deleteLegalHoldExport - Delete the legal hold export
     * 
     * Deletes an existing legal hold export.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteLegalHoldExport.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteLegalHoldExport.Responses.$200>
  }
  ['/organizations/{organizationId}/legalHolds/{legalHoldId}/users']: {
    /**
     * listLegalHoldUsers - List users included in the legal hold
     * 
     * Returns a list of users included in the legal hold
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListLegalHoldUsers.QueryParameters & Paths.ListLegalHoldUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListLegalHoldUsers.Responses.$200>
    /**
     * updateLegalHoldUsers - Update legal hold users
     * 
     * Updates the users included in the legal hold.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.UpdateLegalHoldUsers.PathParameters> | null,
      data?: Paths.UpdateLegalHoldUsers.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateLegalHoldUsers.Responses.$200>
  }
  ['/organizations/{organizationId}/users']: {
    /**
     * listOrgUsers - List organization users
     * 
     * Returns a list of users within an organization, across all registered domains.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrgUsers.QueryParameters & Paths.ListOrgUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrgUsers.Responses.$200>
  }
  ['/organizations/{organizationId}/users/transferResources']: {
    /**
     * transferResources - Transfer user resources
     * 
     * Transfers resources such as docs and workspace membership from a deactivated user to an active user.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.TransferResources.PathParameters> | null,
      data?: Paths.TransferResources.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TransferResources.Responses.$202>
  }
  ['/organizations/{organizationId}/users/{userEmail}/activate']: {
    /**
     * activateOrgUser - Activate a user
     * 
     * Activates a deactivated user.
     */
    'post'(
      parameters?: Parameters<Paths.ActivateOrgUser.PathParameters> | null,
      data?: Paths.ActivateOrgUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ActivateOrgUser.Responses.$200>
  }
  ['/organizations/{organizationId}/users/{userEmail}/deactivate']: {
    /**
     * deactivateOrgUser - Deactivate a user
     * 
     * Deactivates a user, ensuring the user is no longer paid and allowing their docs to be reassigned to a new owner.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.DeactivateOrgUser.PathParameters> | null,
      data?: Paths.DeactivateOrgUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeactivateOrgUser.Responses.$200>
  }
  ['/organizations/{organizationId}/webhooks']: {
    /**
     * listWebhooks - List webhooks
     * 
     * Returns a list of webhooks in the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListWebhooks.QueryParameters & Paths.ListWebhooks.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListWebhooks.Responses.$200>
    /**
     * addWebhook - Create new webhook subscription
     * 
     * Creates a new webhook subscription for the organization.
     */
    'post'(
      parameters?: Parameters<Paths.AddWebhook.PathParameters> | null,
      data?: Paths.AddWebhook.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddWebhook.Responses.$200>
  }
  ['/organizations/{organizationId}/webhooks/{webhookId}']: {
    /**
     * getWebhook - Get a webhook subscription
     * 
     * Returns the requested webhook subscription.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWebhook.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWebhook.Responses.$200>
    /**
     * updateWebhook - Update a webhook subscription
     * 
     * Updates parameters for an existing webhook subscription.
     */
    'put'(
      parameters?: Parameters<Paths.UpdateWebhook.PathParameters> | null,
      data?: Paths.UpdateWebhook.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateWebhook.Responses.$200>
    /**
     * removeWebhook - Deletes a webhook subscription
     * 
     * Deletes a webhook subscription.
     */
    'delete'(
      parameters?: Parameters<Paths.RemoveWebhook.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveWebhook.Responses.$200>
  }
  ['/organizations/{organizationId}/webhooks/{webhookId}/reset']: {
    /**
     * resetWebhook - Reset a webhook subscription
     * 
     * Resets a webhook subscription. Will force re-initialization of the webhook subscription, including the initial handshake process. Used to re-start a webhook that previously failed the initial handshake or that has become disabled due to the target failing too many consecutive webhook payloads.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.ResetWebhook.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ResetWebhook.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces']: {
    /**
     * listWorkspaces - List workspaces
     * 
     * Returns a list of workspaces in the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListWorkspaces.QueryParameters & Paths.ListWorkspaces.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListWorkspaces.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}']: {
    /**
     * getWorkspace - Get workspace
     * 
     * Returns the requested workspace.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetWorkspace.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetWorkspace.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/folders']: {
    /**
     * listFolders - List folders
     * 
     * Returns a list of folders in the workspace
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListFolders.QueryParameters & Paths.ListFolders.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListFolders.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/folders/{folderId}']: {
    /**
     * getFolder - Get folder
     * 
     * Returns the requested folder.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetFolder.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetFolder.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/folders/{folderId}/acl/permissions']: {
    /**
     * listFolderPermissions - List folder permissions
     * 
     * Returns a list of permissions for this folder
     */
    'get'(
      parameters?: Parameters<Paths.ListFolderPermissions.QueryParameters & Paths.ListFolderPermissions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListFolderPermissions.Responses.$200>
    /**
     * addFolderPermission - Add permission to a folder
     * 
     * Adds a new permission to the folder.
     */
    'post'(
      parameters?: Parameters<Paths.AddFolderPermission.PathParameters> | null,
      data?: Paths.AddFolderPermission.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddFolderPermission.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/folders/{folderId}/acl/permissions/{permissionId}']: {
    /**
     * deleteFolderPermission - Delete folder permission
     * 
     * Deletes an existing permission.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteFolderPermission.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteFolderPermission.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/users']: {
    /**
     * listWorkspaceUsers - List workspace users
     * 
     * Returns a list of users within a workspace.
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListWorkspaceUsers.QueryParameters & Paths.ListWorkspaceUsers.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListWorkspaceUsers.Responses.$200>
    /**
     * addWorkspaceUser - Add workspace user
     * 
     * Adds an existing user to a workspace.
     * 
     */
    'post'(
      parameters?: Parameters<Paths.AddWorkspaceUser.PathParameters> | null,
      data?: Paths.AddWorkspaceUser.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddWorkspaceUser.Responses.$200>
  }
  ['/organizations/{organizationId}/workspaces/{workspaceId}/users/{userEmail}']: {
    /**
     * updateWorkspaceUserRole - Update workspace user role
     * 
     * Updates the role of the given user in the workspace.
     * 
     */
    'put'(
      parameters?: Parameters<Paths.UpdateWorkspaceUserRole.PathParameters> | null,
      data?: Paths.UpdateWorkspaceUserRole.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateWorkspaceUserRole.Responses.$200>
    /**
     * removeWorkspaceUser - Removes a user from a workspace
     * 
     * Removes a user from a workspace. Note this does not remove the user from Coda or from other workspaces.
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.RemoveWorkspaceUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RemoveWorkspaceUser.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/requests']: {
    /**
     * listOrganizationPackRequests - List Pack requests for an organization
     * 
     * Returns a list of Pack requests for the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrganizationPackRequests.QueryParameters & Paths.ListOrganizationPackRequests.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrganizationPackRequests.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/controls']: {
    /**
     * listOrganizationPackControls - List Pack controls for an organization
     * 
     * Returns a list of Pack controls for the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrganizationPackControls.QueryParameters & Paths.ListOrganizationPackControls.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrganizationPackControls.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/controls/{packId}']: {
    /**
     * setOrganizationPackControl - Sets pack control for an Pack
     * 
     * Sets pack control for an Pack
     * 
     */
    'put'(
      parameters?: Parameters<Paths.SetOrganizationPackControl.PathParameters> | null,
      data?: Paths.SetOrganizationPackControl.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetOrganizationPackControl.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/configurations']: {
    /**
     * listOrganizationPackConfigurations - List Pack configurations for an organization
     * 
     * Returns a list of Pack configurations for the organization
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrganizationPackConfigurations.QueryParameters & Paths.ListOrganizationPackConfigurations.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrganizationPackConfigurations.Responses.$200>
    /**
     * addOrganizationPackConfiguration - Adds Pack configuration
     * 
     * Adds a Pack configuration for a Pack to an organization
     * 
     */
    'post'(
      parameters?: Parameters<Paths.AddOrganizationPackConfiguration.PathParameters> | null,
      data?: Paths.AddOrganizationPackConfiguration.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddOrganizationPackConfiguration.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/configurations/{packConfigurationId}']: {
    /**
     * getOrganizationPackConfiguration - Get a Pack configuration
     * 
     * Returns a Pack configuration
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetOrganizationPackConfiguration.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOrganizationPackConfiguration.Responses.$200>
    /**
     * updateOrganizationPackConfiguration - Updates a Pack configuration
     * 
     * Updates a Pack configuration and asynchronously applies to the organization by updating any existing Pack installations using the now updated Pack configuration.
     * 
     */
    'put'(
      parameters?: Parameters<Paths.UpdateOrganizationPackConfiguration.PathParameters> | null,
      data?: Paths.UpdateOrganizationPackConfiguration.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateOrganizationPackConfiguration.Responses.$200>
    /**
     * deleteOrganizationPackConfiguration - Delete the given Pack configuration
     * 
     * Deletes the given Pack configuration and asynchronously applies to the organization by updating any existing Pack installations using the deleted Pack configuration.
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteOrganizationPackConfiguration.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteOrganizationPackConfiguration.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/configurations/{packConfigurationId}/permissions']: {
    /**
     * listOrganizationPackConfigurationPermissions - List permissions assigned to a Pack configuration
     * 
     * Returns a list of Pack configuration permissions
     * 
     */
    'get'(
      parameters?: Parameters<Paths.ListOrganizationPackConfigurationPermissions.QueryParameters & Paths.ListOrganizationPackConfigurationPermissions.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListOrganizationPackConfigurationPermissions.Responses.$200>
    /**
     * addOrganizationPackConfigurationPermission - Adds a permission to use a Pack configuration
     * 
     * Adds a permission to use a Pack configuration
     * 
     */
    'post'(
      parameters?: Parameters<Paths.AddOrganizationPackConfigurationPermission.PathParameters> | null,
      data?: Paths.AddOrganizationPackConfigurationPermission.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AddOrganizationPackConfigurationPermission.Responses.$200>
    /**
     * setOrganizationPackConfigurationPermissions - Replaces the permissions to use a Pack configuration
     * 
     * Replaces the permissions to use a Pack configuration
     * 
     */
    'put'(
      parameters?: Parameters<Paths.SetOrganizationPackConfigurationPermissions.PathParameters> | null,
      data?: Paths.SetOrganizationPackConfigurationPermissions.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetOrganizationPackConfigurationPermissions.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/configurations/{packConfigurationId}/permissions/{packConfigurationPermissionId}']: {
    /**
     * deleteOrganizationPackConfigurationPermission - Delete the given Pack configuration permission
     * 
     * Deletes the given Pack configuration and triggers necessarily workflows to update docs with the policy
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteOrganizationPackConfigurationPermission.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteOrganizationPackConfigurationPermission.Responses.$200>
  }
  ['/organizations/{organizationId}/packs/configurations/{packConfigurationId}/oauth']: {
    /**
     * getOrganizationPackConfigurationOauthMetadata - Gets OAuth configuration metadata
     * 
     * Returns OAuth configuration metadata associated with the pack configuration
     * 
     */
    'get'(
      parameters?: Parameters<Paths.GetOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetOrganizationPackConfigurationOauthMetadata.Responses.$200>
    /**
     * setOrganizationPackConfigurationOauthMetadata - Sets OAuth configuration metadata
     * 
     * Sets OAuth configuration metadata associated with the pack configuration
     * 
     */
    'put'(
      parameters?: Parameters<Paths.SetOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
      data?: Paths.SetOrganizationPackConfigurationOauthMetadata.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SetOrganizationPackConfigurationOauthMetadata.Responses.$200>
    /**
     * deleteOrganizationPackConfigurationOauthMetadata - Removes OAuth configuration metadata
     * 
     * Removes any OAuth configuration metadata associated with the pack configuration
     * 
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteOrganizationPackConfigurationOauthMetadata.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteOrganizationPackConfigurationOauthMetadata.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

export type AccessType = Components.Schemas.AccessType;
export type AccessTypeNotNone = Components.Schemas.AccessTypeNotNone;
export type Acl = Components.Schemas.Acl;
export type AclMetadata = Components.Schemas.AclMetadata;
export type AddLegalHoldExportRequest = Components.Schemas.AddLegalHoldExportRequest;
export type AddLegalHoldExportResult = Components.Schemas.AddLegalHoldExportResult;
export type AddLegalHoldRequest = Components.Schemas.AddLegalHoldRequest;
export type AddLegalHoldResult = Components.Schemas.AddLegalHoldResult;
export type AddPackConfigurationPermissionRequest = Components.Schemas.AddPackConfigurationPermissionRequest;
export type AddPackConfigurationRequest = Components.Schemas.AddPackConfigurationRequest;
export type AddPermissionRequest = Components.Schemas.AddPermissionRequest;
export type AddPermissionResult = Components.Schemas.AddPermissionResult;
export type AddWebhookRequest = Components.Schemas.AddWebhookRequest;
export type AddWorkspaceUserRequest = Components.Schemas.AddWorkspaceUserRequest;
export type AddedAnyonePrincipal = Components.Schemas.AddedAnyonePrincipal;
export type AddedDomainPrincipal = Components.Schemas.AddedDomainPrincipal;
export type AddedEmailPrincipal = Components.Schemas.AddedEmailPrincipal;
export type AddedGroupPrincipal = Components.Schemas.AddedGroupPrincipal;
export type AddedPrincipal = Components.Schemas.AddedPrincipal;
export type AddedWorkspacePrincipal = Components.Schemas.AddedWorkspacePrincipal;
export type AnyonePrincipal = Components.Schemas.AnyonePrincipal;
export type ApiToken = Components.Schemas.ApiToken;
export type BillingAccount = Components.Schemas.BillingAccount;
export type BrainQuery = Components.Schemas.BrainQuery;
export type BroadestSharedWith = Components.Schemas.BroadestSharedWith;
export type DateActivity = Components.Schemas.DateActivity;
export type DeleteDocResult = Components.Schemas.DeleteDocResult;
export type DeleteLegalHoldExportResult = Components.Schemas.DeleteLegalHoldExportResult;
export type DeleteLegalHoldResult = Components.Schemas.DeleteLegalHoldResult;
export type DeletePackConfigurationOauthConfigResult = Components.Schemas.DeletePackConfigurationOauthConfigResult;
export type DeletePackConfigurationPermissionResponse = Components.Schemas.DeletePackConfigurationPermissionResponse;
export type DeletePackConfigurationResponse = Components.Schemas.DeletePackConfigurationResponse;
export type DeletePermissionResult = Components.Schemas.DeletePermissionResult;
export type DeleteWebhookResult = Components.Schemas.DeleteWebhookResult;
export type Doc = Components.Schemas.Doc;
export type DocAvailabilityState = Components.Schemas.DocAvailabilityState;
export type DocExportFormat = Components.Schemas.DocExportFormat;
export type DocExportOrientation = Components.Schemas.DocExportOrientation;
export type DocExportPaperSize = Components.Schemas.DocExportPaperSize;
export type DocExportRequest = Components.Schemas.DocExportRequest;
export type DocExportStatus = Components.Schemas.DocExportStatus;
export type DocExportStatusResponse = Components.Schemas.DocExportStatusResponse;
export type DocList = Components.Schemas.DocList;
export type DocListSortField = Components.Schemas.DocListSortField;
export type DocPackConnection = Components.Schemas.DocPackConnection;
export type DocPackConnectionList = Components.Schemas.DocPackConnectionList;
export type DocPackConnectionReadAccess = Components.Schemas.DocPackConnectionReadAccess;
export type DocPackConnectionWriteAccess = Components.Schemas.DocPackConnectionWriteAccess;
export type DocSearchHit = Components.Schemas.DocSearchHit;
export type DocType = Components.Schemas.DocType;
export type DocumentAnalytics = Components.Schemas.DocumentAnalytics;
export type DomainPrincipal = Components.Schemas.DomainPrincipal;
export type EmailPrincipal = Components.Schemas.EmailPrincipal;
export type Entity = Components.Schemas.Entity;
export type EntityApiToken = Components.Schemas.EntityApiToken;
export type EntityBillingAccount = Components.Schemas.EntityBillingAccount;
export type EntityBrainQuery = Components.Schemas.EntityBrainQuery;
export type EntityDoc = Components.Schemas.EntityDoc;
export type EntityDocPackConnection = Components.Schemas.EntityDocPackConnection;
export type EntityFolder = Components.Schemas.EntityFolder;
export type EntityGroup = Components.Schemas.EntityGroup;
export type EntityIngestion = Components.Schemas.EntityIngestion;
export type EntityLegalHold = Components.Schemas.EntityLegalHold;
export type EntityLegalHoldExport = Components.Schemas.EntityLegalHoldExport;
export type EntityOrganization = Components.Schemas.EntityOrganization;
export type EntityPack = Components.Schemas.EntityPack;
export type EntityPage = Components.Schemas.EntityPage;
export type EntityPermission = Components.Schemas.EntityPermission;
export type EntitySyncPage = Components.Schemas.EntitySyncPage;
export type EntitySyncPageTunnel = Components.Schemas.EntitySyncPageTunnel;
export type EntityUser = Components.Schemas.EntityUser;
export type EntityWebhook = Components.Schemas.EntityWebhook;
export type EntityWorkspace = Components.Schemas.EntityWorkspace;
export type Event = Components.Schemas.Event;
export type EventList = Components.Schemas.EventList;
export type ExactPermissionCount = Components.Schemas.ExactPermissionCount;
export type FeatureSet = Components.Schemas.FeatureSet;
export type FetchPermissionsMode = Components.Schemas.FetchPermissionsMode;
export type Folder = Components.Schemas.Folder;
export type FolderList = Components.Schemas.FolderList;
export type FolderType = Components.Schemas.FolderType;
export type Group = Components.Schemas.Group;
export type GroupList = Components.Schemas.GroupList;
export type GroupMemberList = Components.Schemas.GroupMemberList;
export type GroupPrincipal = Components.Schemas.GroupPrincipal;
export type Ingestion = Components.Schemas.Ingestion;
export type LegalHold = Components.Schemas.LegalHold;
export type LegalHoldExport = Components.Schemas.LegalHoldExport;
export type LegalHoldExportFormat = Components.Schemas.LegalHoldExportFormat;
export type LegalHoldExportList = Components.Schemas.LegalHoldExportList;
export type LegalHoldExportState = Components.Schemas.LegalHoldExportState;
export type LegalHoldList = Components.Schemas.LegalHoldList;
export type LegalHoldState = Components.Schemas.LegalHoldState;
export type LegalHoldUsersList = Components.Schemas.LegalHoldUsersList;
export type MinPermissionCount = Components.Schemas.MinPermissionCount;
export type MoveDocRequest = Components.Schemas.MoveDocRequest;
export type MoveDocResult = Components.Schemas.MoveDocResult;
export type NextPageLink = Components.Schemas.NextPageLink;
export type NextPageToken = Components.Schemas.NextPageToken;
export type OrgUser = Components.Schemas.OrgUser;
export type OrgUserActivationChangeRequest = Components.Schemas.OrgUserActivationChangeRequest;
export type OrgUserActivationChangeResult = Components.Schemas.OrgUserActivationChangeResult;
export type OrgUserApiToken = Components.Schemas.OrgUserApiToken;
export type OrgUserApiTokenList = Components.Schemas.OrgUserApiTokenList;
export type OrgUserApiTokenRevoke = Components.Schemas.OrgUserApiTokenRevoke;
export type OrgUserList = Components.Schemas.OrgUserList;
export type OrgUserStatus = Components.Schemas.OrgUserStatus;
export type Organization = Components.Schemas.Organization;
export type OrganizationList = Components.Schemas.OrganizationList;
export type OutputFormat = Components.Schemas.OutputFormat;
export type Pack = Components.Schemas.Pack;
export type PackAccess = Components.Schemas.PackAccess;
export type PackConfiguration = Components.Schemas.PackConfiguration;
export type PackConfigurationAcl = Components.Schemas.PackConfigurationAcl;
export type PackConfigurationList = Components.Schemas.PackConfigurationList;
export type PackConfigurationOauthConfigMetadata = Components.Schemas.PackConfigurationOauthConfigMetadata;
export type PackConfigurationPermission = Components.Schemas.PackConfigurationPermission;
export type PackControl = Components.Schemas.PackControl;
export type PackControlList = Components.Schemas.PackControlList;
export type PackRequest = Components.Schemas.PackRequest;
export type PackRequestList = Components.Schemas.PackRequestList;
export type Page = Components.Schemas.Page;
export type PageContent = Components.Schemas.PageContent;
export type PageList = Components.Schemas.PageList;
export type PageReference = Components.Schemas.PageReference;
export type PageViewersItem = Components.Schemas.PageViewersItem;
export type PageViewersList = Components.Schemas.PageViewersList;
export type PageWithContent = Components.Schemas.PageWithContent;
export type Permission = Components.Schemas.Permission;
export type PermissionCount = Components.Schemas.PermissionCount;
export type PermissionCountType = Components.Schemas.PermissionCountType;
export type PermissionsSummary = Components.Schemas.PermissionsSummary;
export type Policy = Components.Schemas.Policy;
export type Principal = Components.Schemas.Principal;
export type PrincipalType = Components.Schemas.PrincipalType;
export type RemoveWorkspaceUserResponse = Components.Schemas.RemoveWorkspaceUserResponse;
export type ReviveDocResult = Components.Schemas.ReviveDocResult;
export type SetPackConfigurationPermissionsRequest = Components.Schemas.SetPackConfigurationPermissionsRequest;
export type SetPackConfigurationPermissionsResponse = Components.Schemas.SetPackConfigurationPermissionsResponse;
export type SharedWithAnyoneFilter = Components.Schemas.SharedWithAnyoneFilter;
export type SharedWithExternalDomainFilter = Components.Schemas.SharedWithExternalDomainFilter;
export type SortDirection = Components.Schemas.SortDirection;
export type SyncPage = Components.Schemas.SyncPage;
export type SyncPageTunnel = Components.Schemas.SyncPageTunnel;
export type TransferResourcesRequest = Components.Schemas.TransferResourcesRequest;
export type TransferResourcesResponse = Components.Schemas.TransferResourcesResponse;
export type Type = Components.Schemas.Type;
export type UpdateLegalHoldRequest = Components.Schemas.UpdateLegalHoldRequest;
export type UpdateLegalHoldResult = Components.Schemas.UpdateLegalHoldResult;
export type UpdateLegalHoldUsersRequest = Components.Schemas.UpdateLegalHoldUsersRequest;
export type UpdateLegalHoldUsersResult = Components.Schemas.UpdateLegalHoldUsersResult;
export type UpdatePackConfigurationOauthConfigRequest = Components.Schemas.UpdatePackConfigurationOauthConfigRequest;
export type UpdatePackConfigurationRequest = Components.Schemas.UpdatePackConfigurationRequest;
export type UpdatePackControlRequest = Components.Schemas.UpdatePackControlRequest;
export type UpdateWebhookRequest = Components.Schemas.UpdateWebhookRequest;
export type UpdateWorkspaceUserRequest = Components.Schemas.UpdateWorkspaceUserRequest;
export type User = Components.Schemas.User;
export type UserContext = Components.Schemas.UserContext;
export type Webhook = Components.Schemas.Webhook;
export type WebhookFilter = Components.Schemas.WebhookFilter;
export type WebhookFilterPredicate = Components.Schemas.WebhookFilterPredicate;
export type WebhookList = Components.Schemas.WebhookList;
export type WebhookWatchedResource = Components.Schemas.WebhookWatchedResource;
export type Workspace = Components.Schemas.Workspace;
export type WorkspaceList = Components.Schemas.WorkspaceList;
export type WorkspacePrincipal = Components.Schemas.WorkspacePrincipal;
export type WorkspaceUser = Components.Schemas.WorkspaceUser;
export type WorkspaceUserList = Components.Schemas.WorkspaceUserList;
export type WorkspaceUserRole = Components.Schemas.WorkspaceUserRole;
