export type PaymentMethod = "stripe" | "manual";
export type SelectedPack = "basic" | "premium" | "pro";
export type LanguageOption = "es" | "en";
export type CurrencyOption = "EUR" | "USD";
export type SkillLevel = "beginner" | "intermediate" | "advanced";
export type TrackingConsentState = "accepted" | "rejected" | "custom";
export type FormSubmissionState = "idle" | "loading" | "success" | "error";

export interface ShippingAddress {
  recipient?: string;
  line1: string;
  line2?: string;
  city: string;
  region?: string;
  postalCode: string;
  country: string;
}

export interface PurchaseRequest {
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  language: LanguageOption;
  currency: CurrencyOption;
  skillLevel?: SkillLevel;
  selectedPack: SelectedPack;
  paymentMethodPreferred: PaymentMethod;
  shippingAddress?: ShippingAddress;
  notes?: string;
  privacyConsent: boolean;
  trackingConsent: TrackingConsentState;
  honeypot: string;
  formKey: string;
  requestCode?: string;
}

export interface PurchaseRequestPayload extends PurchaseRequest {
  source: "landing-page";
  locale: LanguageOption;
  submittedAt: string;
}

export interface PurchaseRequestResponse {
  ok: boolean;
  message: string;
  requestCode?: string;
  redirectUrl?: string;
  paymentInstructions?: string;
}
