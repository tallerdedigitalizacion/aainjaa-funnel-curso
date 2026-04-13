"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { formConfig } from "@/config/forms";
import { formatPackPrice, getLocalizedPacks, getPackPrice } from "@/config/packs";
import { trackingConfig } from "@/config/tracking";
import { submitPurchaseRequest } from "@/lib/forms";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import type { FormCopy } from "@/types/content";
import type {
  FormSubmissionState,
  LanguageOption,
  PaymentMethod,
  PreferredLanguageOption,
  PurchaseRequestPayload,
  SelectedPack,
  ShippingAddress,
  TrackingConsentState,
} from "@/types/purchase";

interface OrderFormProps {
  locale: LanguageOption;
  copy: FormCopy;
}

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  language: PreferredLanguageOption;
  currency: PurchaseRequestPayload["currency"];
  selectedPack: SelectedPack;
  paymentMethodPreferred: PaymentMethod;
  shippingAddress: ShippingAddress;
  privacyConsent: boolean;
  honeypot: string;
}

type ErrorMap = Partial<Record<string, string>>;

const emptyShipping: ShippingAddress = {
  line1: "",
  city: "",
  postalCode: "",
  country: "",
  region: "",
  line2: "",
};

export function OrderForm({ locale, copy }: OrderFormProps) {
  const packs = getLocalizedPacks(locale);
  const [state, setState] = useState<FormSubmissionState>("idle");
  const [globalError, setGlobalError] = useState("");
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    language: locale,
    currency: "EUR",
    selectedPack: "premium",
    paymentMethodPreferred: "stripe",
    shippingAddress: emptyShipping,
    privacyConsent: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState<ErrorMap>({});

  const selectedPack = packs.find((pack) => pack.id === values.selectedPack) ?? packs[0];
  const requiresShipping = Boolean(selectedPack.shippingRequired);
  const packSelectionCopy =
    locale === "es"
      ? { selected: "Seleccionado", action: "Seleccionar" }
      : { selected: "Selected", action: "Select" };

  function getTrackingConsentState(): TrackingConsentState {
    if (typeof window === "undefined") return "rejected";
    const stored = window.localStorage.getItem(trackingConfig.cookieName);
    if (!stored) return "rejected";
    try {
      const parsed = JSON.parse(stored) as { state?: TrackingConsentState };
      return parsed.state || "rejected";
    } catch {
      return "rejected";
    }
  }

  function validateForm() {
    const nextErrors: ErrorMap = {};
    const normalizedPhone = normalizePhone(values.phone);

    if (!values.fullName.trim()) nextErrors.fullName = copy.errors.fullName;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = copy.errors.email;
    if (values.phone.trim() && !isValidInternationalPhone(normalizedPhone)) {
      nextErrors.phone = copy.errors.phone;
    }
    if (!values.country.trim()) nextErrors.country = copy.errors.country;
    if (!values.privacyConsent) nextErrors.privacyConsent = copy.errors.privacyConsent;

    if (requiresShipping) {
      const shipping = values.shippingAddress;
      if (
        !shipping.line1.trim() ||
        !shipping.city.trim() ||
        !shipping.postalCode.trim() ||
        !shipping.country.trim()
      ) {
        nextErrors.shippingAddress = copy.errors.shippingAddress;
      }
    }

    return nextErrors;
  }

  function updateValue<Key extends keyof FormValues>(key: Key, value: FormValues[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;

    const nextErrors = validateForm();
    setErrors(nextErrors);
    setGlobalError("");

    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      setGlobalError(copy.errors.global);
      trackEvent({ event: "form_submit_error", locale, pack: values.selectedPack });
      return;
    }

    const payload: PurchaseRequestPayload = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: normalizePhone(values.phone) || undefined,
      country: values.country.trim(),
      language: values.language,
      currency: values.currency,
      selectedPack: values.selectedPack,
      paymentMethodPreferred: values.paymentMethodPreferred,
      shippingAddress: requiresShipping ? values.shippingAddress : undefined,
      privacyConsent: values.privacyConsent,
      trackingConsent: getTrackingConsentState(),
      honeypot: values.honeypot,
      formKey: formConfig.formKey,
      source: "landing-page",
      locale,
      submittedAt: new Date().toISOString(),
    };

    setState("loading");
    trackEvent({
      event: "form_submit",
      locale,
      pack: values.selectedPack,
      paymentMethod: values.paymentMethodPreferred,
    });

    try {
      const response = await submitPurchaseRequest(payload);
      setState("success");
      trackEvent({
        event: "form_submit_success",
        locale,
        pack: values.selectedPack,
        paymentMethod: values.paymentMethodPreferred,
      });

      if (response.ok && response.flow === "stripe") {
        if (response.checkoutUrl) {
          trackEvent({ event: "stripe_checkout_click", locale, pack: values.selectedPack });
          window.location.href = response.checkoutUrl;
          return;
        }
      }

      if (response.ok && response.flow === "manual") {
        window.location.href =
          response.redirectUrl ||
          `/${locale}/gracias?payment=manual&status=pending`;
        return;
      }

      throw new Error(copy.errors.global);
    } catch (error) {
      setState("error");
      setGlobalError(
        error instanceof Error ? error.message : copy.errors.global,
      );
      trackEvent({
        event: "form_submit_error",
        locale,
        pack: values.selectedPack,
        paymentMethod: values.paymentMethodPreferred,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 sm:p-8"
      noValidate
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field
          label={copy.labels.fullName}
          error={errors.fullName}
          input={
            <input
              value={values.fullName}
              onChange={(event) => updateValue("fullName", event.target.value)}
              placeholder={copy.placeholders.fullName}
              className={inputClass}
            />
          }
        />
        <Field
          label={copy.labels.email}
          error={errors.email}
          input={
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              placeholder={copy.placeholders.email}
              className={inputClass}
            />
          }
        />
        <Field
          label={copy.labels.phone}
          error={errors.phone}
          input={
            <input
              value={values.phone}
              onChange={(event) => updateValue("phone", sanitizePhoneInput(event.target.value))}
              placeholder={copy.placeholders.phone}
              autoComplete="tel"
              inputMode="tel"
              className={inputClass}
            />
          }
        />
        <Field
          label={copy.labels.country}
          error={errors.country}
          input={
            <input
              value={values.country}
              onChange={(event) => updateValue("country", event.target.value)}
              placeholder={copy.placeholders.country}
              className={inputClass}
            />
          }
        />
        <Field
          label={copy.labels.language}
          input={
            <select
              value={values.language}
              onChange={(event) =>
                updateValue("language", event.target.value as PreferredLanguageOption)
              }
              className={inputClass}
            >
              {copy.options.languages.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          }
        />
        <Field
          label={copy.labels.currency}
          input={
            <select
              value={values.currency}
              onChange={(event) =>
                updateValue("currency", event.target.value as PurchaseRequestPayload["currency"])
              }
              className={inputClass}
            >
              {copy.options.currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          }
        />
      </div>

      <fieldset className="mt-6 grid gap-4">
        <legend className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
          {copy.labels.selectedPack}
        </legend>
        <div className="grid gap-3 md:grid-cols-3">
          {packs.map((pack) => (
            <label key={pack.id} className="block cursor-pointer">
              <input
                type="radio"
                name="selectedPack"
                value={pack.id}
                checked={values.selectedPack === pack.id}
                onChange={() => {
                  updateValue("selectedPack", pack.id);
                  trackEvent({ event: "pack_select", locale, pack: pack.id });
                }}
                className="peer sr-only"
              />
              <div
                className={cn(
                  "relative h-full rounded-[1.5rem] border p-4 text-left transition duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-red-400/80 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-black",
                  values.selectedPack === pack.id
                    ? "border-red-500 bg-red-600/15 shadow-[0_0_40px_rgba(220,38,38,0.18)]"
                    : pack.recommended
                      ? "border-red-500/40 bg-red-500/8 hover:border-red-400/70"
                      : "border-white/10 bg-black/30 hover:border-white/25",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {pack.badge ? (
                      <span className="inline-flex rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-100">
                        {pack.badge}
                      </span>
                    ) : null}
                    <p className="mt-3 font-display text-2xl uppercase tracking-[0.1em] text-white">
                      {pack.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">{pack.summary}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-3xl font-semibold leading-none text-white">
                      {formatPackPrice(pack, values.currency, locale)}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/55">
                      {getPackPrice(pack, values.currency).currency}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <span
                    className={cn(
                      "text-xs uppercase tracking-[0.22em]",
                      values.selectedPack === pack.id ? "text-red-100" : "text-white/45",
                    )}
                  >
                    {values.selectedPack === pack.id
                      ? packSelectionCopy.selected
                      : packSelectionCopy.action}
                  </span>
                  <span
                    className={cn(
                      "h-3.5 w-3.5 rounded-full border transition",
                      values.selectedPack === pack.id
                        ? "border-red-300 bg-red-500 shadow-[0_0_16px_rgba(239,68,68,0.65)]"
                        : "border-white/20 bg-transparent",
                    )}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <button
          type="button"
          onClick={() => updateValue("paymentMethodPreferred", "stripe")}
          className={choiceClass(values.paymentMethodPreferred === "stripe")}
        >
          <span className="font-semibold text-white">{copy.stripeInfoLabel}</span>
          <span className="text-sm text-white/60">{copy.stripeHelperLabel}</span>
        </button>
        <button
          type="button"
          onClick={() => updateValue("paymentMethodPreferred", "manual")}
          className={choiceClass(values.paymentMethodPreferred === "manual")}
        >
          <span className="font-semibold text-white">{copy.manualInfoLabel}</span>
          <span className="text-sm text-white/60">{copy.manualHelperLabel}</span>
        </button>
      </div>

      {requiresShipping ? (
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
            {copy.labels.shippingAddress}
          </p>
          {errors.shippingAddress ? (
            <p className="mt-2 text-sm text-red-300">{errors.shippingAddress}</p>
          ) : null}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input
              value={values.shippingAddress.line1}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  line1: event.target.value,
                })
              }
              placeholder={copy.placeholders.line1}
              className={inputClass}
            />
            <input
              value={values.shippingAddress.line2}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  line2: event.target.value,
                })
              }
              placeholder={copy.placeholders.line2}
              className={inputClass}
            />
            <input
              value={values.shippingAddress.city}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  city: event.target.value,
                })
              }
              placeholder={copy.placeholders.city}
              className={inputClass}
            />
            <input
              value={values.shippingAddress.region}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  region: event.target.value,
                })
              }
              placeholder={copy.placeholders.region}
              className={inputClass}
            />
            <input
              value={values.shippingAddress.postalCode}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  postalCode: event.target.value,
                })
              }
              placeholder={copy.placeholders.postalCode}
              className={inputClass}
            />
            <input
              value={values.shippingAddress.country}
              onChange={(event) =>
                updateValue("shippingAddress", {
                  ...values.shippingAddress,
                  country: event.target.value,
                })
              }
              placeholder={copy.placeholders.shippingCountry}
              className={inputClass}
            />
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4">
        <label className="flex items-start gap-3 text-sm text-white/75">
          <input
            type="checkbox"
            checked={values.privacyConsent}
            onChange={(event) => updateValue("privacyConsent", event.target.checked)}
            className="mt-1 h-4 w-4 accent-red-500"
          />
          <span>{copy.privacyLabel}</span>
        </label>
        {errors.privacyConsent ? (
          <p className="text-sm text-red-300">{errors.privacyConsent}</p>
        ) : null}
      </div>

      <input
        tabIndex={-1}
        autoComplete="off"
        value={values.honeypot}
        onChange={(event) => updateValue("honeypot", event.target.value)}
        className="hidden"
        name="company"
      />

      {globalError ? (
        <div className="mt-6 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-100">
          <p className="font-semibold">{copy.errorTitle}</p>
          <p className="mt-1 text-red-100/80">{globalError}</p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={state === "loading"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-red-900"
      >
        {state === "loading" ? copy.submittingLabel : copy.submitLabel}
      </button>

      <pre className="mt-6 overflow-auto rounded-[1.5rem] border border-white/10 bg-black/30 p-4 text-xs leading-6 text-white/55">
        {JSON.stringify(
          {
            contract: "PurchaseFlowResponse",
            readyForBackend: true,
            endpoint: formConfig.apiUrl || "NEXT_PUBLIC_PURCHASE_ENDPOINT",
            notes:
              "Backend should validate honeypot, formKey, consent, selectedPack, and payment method, then return either { flow: 'manual', redirectUrl } or { flow: 'stripe', checkoutUrl }.",
          },
          null,
          2,
        )}
      </pre>
    </form>
  );
}

function Field({
  label,
  input,
  error,
}: {
  label: string;
  input: ReactNode;
  error?: string;
}) {
  return (
    <label className="grid gap-2 text-sm text-white/75">
      <span>{label}</span>
      {input}
      {error ? <span className="text-red-300">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-red-500";

function choiceClass(active: boolean) {
  return cn(
    "flex flex-col gap-1 rounded-[1.5rem] border p-4 text-left transition",
    active
      ? "border-red-500 bg-red-500/10"
      : "border-white/10 bg-black/25 hover:border-white/25",
  );
}

function sanitizePhoneInput(value: string) {
  const sanitized = value.replace(/[^\d+\s\-().]/g, "");
  const leadingPlus = sanitized.startsWith("+") ? "+" : "";
  const body = (leadingPlus ? sanitized.slice(1) : sanitized).replace(/\+/g, "");
  return `${leadingPlus}${body}`;
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

function isValidInternationalPhone(value: string) {
  if (!/^\+?\d+$/.test(value)) return false;
  const digitsOnly = value.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15;
}
