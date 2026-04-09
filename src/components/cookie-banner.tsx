"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { trackingConfig } from "@/config/tracking";
import {
  defaultConsent,
  type ConsentPreferences,
} from "@/lib/cookies";
import type { MessageBundle } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

interface CookieBannerProps {
  locale: LanguageOption;
  messages: MessageBundle["cookieBanner"];
}

export function CookieBanner({ locale, messages }: CookieBannerProps) {
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const stored = window.localStorage.getItem(trackingConfig.cookieName);
      if (!stored) {
        setOpen(true);
        return;
      }

      try {
        const parsed = JSON.parse(stored) as ConsentPreferences;
        setAnalytics(parsed.analytics);
      } catch {
        setOpen(true);
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function saveConsent(consent: ConsentPreferences) {
    window.localStorage.setItem(trackingConfig.cookieName, JSON.stringify(consent));
    setAnalytics(consent.analytics);
    setOpen(false);
    window.dispatchEvent(new Event("aainjaa-consent-change"));
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-neutral-950/95 p-6 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
              {messages.title}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              {messages.description} {messages.legalPrefix}{" "}
              <Link href={`/${locale}/legal/cookies`} className="text-red-400 hover:text-red-300">
                cookies
              </Link>{" "}
              y{" "}
              <Link href={`/${locale}/legal/privacidad`} className="text-red-400 hover:text-red-300">
                privacidad
              </Link>
              .
            </p>
            {customize ? (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-white">{messages.essentials}</p>
                    <p className="text-white/55">Always on</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
                    On
                  </span>
                </div>
                <label className="mt-4 flex items-center justify-between gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-white">{messages.analytics}</p>
                    <p className="text-white/55">GA, GTM, Meta Pixel</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-red-500"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                  />
                </label>
              </div>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() =>
                saveConsent({ essential: true, analytics: false, state: "rejected" })
              }
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35"
            >
              {messages.reject}
            </button>
            <button
              type="button"
              onClick={() => setCustomize((value) => !value)}
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-200"
            >
              {messages.customize}
            </button>
            {customize ? (
              <button
                type="button"
                onClick={() =>
                  saveConsent({
                    essential: true,
                    analytics,
                    state: analytics ? "custom" : "rejected",
                  })
                }
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-red-500 hover:text-white"
              >
                {messages.savePreferences}
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  saveConsent({ essential: true, analytics: true, state: "accepted" })
                }
                className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                {messages.accept}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
