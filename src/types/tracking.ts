export interface TrackingEventPayload {
  event: string;
  locale?: string;
  pack?: string;
  paymentMethod?: string;
  [key: string]: string | number | boolean | undefined;
}
