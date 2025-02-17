import { PublicApiService as TurnkeyApi } from "./__generated__/barrel";
export type { definitions as TurnkeyApiTypes } from "./__generated__/services/coordinator/public/v1/public_api.types";
export { init, browserInit } from "./config";

export { TurnkeyActivityError, TurnkeyRequestError } from "./shared";
export type { SignedRequest } from "./shared";
export { getWebAuthnAttestation } from "./webauthn";

export { withAsyncPolling } from "./async";

export { TurnkeyApi };

/**
 * @deprecated use `TurnkeyApi` instead
 */
const PublicApiService = TurnkeyApi;

export { PublicApiService };

export { sealAndStampRequestBody } from "./base";
