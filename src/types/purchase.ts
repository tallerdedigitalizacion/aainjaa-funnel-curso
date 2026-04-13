export type LanguageOption = "es" | "en";
export type CurrencyOption = "EUR";
export type TrackingConsentState = "accepted" | "rejected" | "custom";
export type FormSubmissionState = "idle" | "loading" | "success" | "error";

export interface PurchaseRequest {
  productId: string;
  fullName: string;
  email: string;
  language: LanguageOption;
  currency: CurrencyOption;
  privacyConsent: boolean;
  trackingConsent: TrackingConsentState;
  honeypot: string;
  formKey: string;
}

export interface PurchaseRequestPayload extends PurchaseRequest {
  source: "landing-page";
  locale: LanguageOption;
  submittedAt: string;
}

export type PurchaseFlowResponse =
  | {
      ok: true;
      requestCode: string;
      checkoutUrl: string;
    }
  | {
      ok: false;
      error: string;
    };

export interface PurchaseRequestResponse {
  ok: boolean;
  message?: string;
  requestCode?: string;
  redirectUrl?: string;
  paymentInstructions?: string;
}
