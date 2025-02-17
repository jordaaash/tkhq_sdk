import type { definitions } from "./__generated__/services/coordinator/public/v1/public_api.types";

export type TActivity = definitions["v1Activity"];
export type TActivityResponse = definitions["v1ActivityResponse"];
export type TActivityId = TActivity["id"];
export type TActivityStatus = TActivity["status"];
export type TActivityType = TActivity["type"];

export class TurnkeyActivityError extends Error {
  activityId: TActivityId | null;
  activityStatus: TActivityStatus | null;
  activityType: TActivityType | null;
  cause: Error | null;

  constructor(input: {
    message: string;
    cause?: Error | null;
    activityId?: TActivityId | null;
    activityStatus?: TActivityStatus | null;
    activityType?: TActivityType | null;
  }) {
    const { message, cause, activityId, activityStatus, activityType } = input;
    super(message);

    this.name = "TurnkeyActivityError";
    this.activityId = activityId ?? null;
    this.activityStatus = activityStatus ?? null;
    this.activityType = activityType ?? null;
    this.cause = cause ?? null;
  }
}

export type TStamper = (input: {
  content: string;
  publicKey: string;
  privateKey: string;
}) => Promise<{
  publicKey: string;
  scheme: string;
  signature: string;
}>;

export type GrpcStatus = {
  message: string;
  code: number;
  details: unknown[] | null;
};

export class TurnkeyRequestError extends Error {
  details: any[] | null;
  code: number;

  constructor(input: GrpcStatus) {
    let turnkeyErrorMessage = `Turnkey error ${input.code}: ${input.message}`;

    if (input.details != null) {
      turnkeyErrorMessage += ` (Details: ${JSON.stringify(input.details)})`;
    }

    super(turnkeyErrorMessage);

    this.name = "TurnkeyRequestError";
    this.details = input.details ?? null;
    this.code = input.code;
  }
}

/**
 * Represents a signed request ready to be POSTed to Turnkey
 */
export type SignedRequest = {
  body: string;
  stamp: string;
  url: string;
};
