"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

import { getLocalizedOffer } from "@/config/offer";
import { formConfig } from "@/config/forms";
import { trackingConfig } from "@/config/tracking";
import { submitPurchaseRequest } from "@/lib/forms";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import type { FormCopy } from "@/types/content";
import type {
  FormSubmissionState,
  LanguageOption,
  PurchaseRequestPayload,
  TrackingConsentState,
} from "@/types/purchase";

interface OrderFormProps {
  locale: LanguageOption;
  copy: FormCopy;
}

interface FormValues {
  fullName: string;
  email: string;
  privacyConsent: boolean;
  honeypot: string;
}

type ErrorMap = Partial<Record<string, string>>;

export function OrderForm({ locale, copy }: OrderFormProps) {
  const offer = getLocalizedOffer(locale);
  const [state, setState] = useState<FormSubmissionState>("idle");
  const [globalError, setGlobalError] = useState("");
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    privacyConsent: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState<ErrorMap>({});

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

    if (!values.fullName.trim()) nextErrors.fullName = copy.errors.fullName;
    if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = copy.errors.email;
    if (!values.privacyConsent) nextErrors.privacyConsent = copy.errors.privacyConsent;

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
      trackEvent({ event: "form_submit_error", locale, productId: offer.id });
      return;
    }

    const payload: PurchaseRequestPayload = {
      productId: offer.id,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      language: locale,
      currency: offer.currency,
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
      productId: offer.id,
      currency: offer.currency,
    });

    try {
      const response = await submitPurchaseRequest(payload);
      if (response.ok && response.checkoutUrl) {
        trackEvent({
          event: "stripe_checkout_redirect",
          locale,
          productId: offer.id,
        });
        window.location.href = response.checkoutUrl;
        return;
      }

      throw new Error(copy.errors.global);
    } catch (error) {
      setState("error");
      setGlobalError(error instanceof Error ? error.message : copy.errors.global);
      trackEvent({ event: "form_submit_error", locale, productId: offer.id });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/20 sm:p-8"
      noValidate
    >
      <div className="grid gap-6">
        <Field
          label={copy.labels.fullName}
          error={errors.fullName}
          input={
            <input
              value={values.fullName}
              onChange={(event) => updateValue("fullName", event.target.value)}
              placeholder={copy.placeholders.fullName}
              autoComplete="name"
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
              autoComplete="email"
              className={inputClass}
            />
          }
        />
      </div>

      <p className="mt-6 text-sm leading-6 text-white/60">{copy.checkoutNote}</p>

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
