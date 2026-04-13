"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { siteConfig } from "@/config/site";
import type { MessageBundle } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

interface ThankYouContentProps {
  locale: LanguageOption;
  messages: MessageBundle;
}

export function ThankYouContent({ locale, messages }: ThankYouContentProps) {
  const searchParams = useSearchParams();
  const payment = searchParams.get("payment") || undefined;
  const status = searchParams.get("status") || undefined;
  const variant = resolveThankYouVariant(payment, status);
  const content =
    variant === "manualPending"
      ? messages.thanks.manualPending
      : variant === "stripeSuccess"
        ? messages.thanks.stripeSuccess
        : variant === "stripeCancel"
          ? messages.thanks.stripeCancel
          : messages.thanks.default;
  const showSupport =
    variant === "manualPending" || variant === "stripeSuccess";

  return (
    <div className="max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
      <p className="text-sm uppercase tracking-[0.35em] text-red-400">{messages.thanks.eyebrow}</p>
      <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white">
        {content.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
        {content.body}
      </p>
      {showSupport ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
          {"supportPrefix" in content ? content.supportPrefix : ""}{" "}
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="font-semibold text-red-200 underline decoration-red-400/40 underline-offset-4 transition hover:text-white"
          >
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      ) : null}
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-500"
      >
        {"cta" in content ? content.cta : messages.thanks.default.cta}
      </Link>
    </div>
  );
}

function resolveThankYouVariant(payment?: string, status?: string) {
  if (payment === "manual" && status === "pending") return "manualPending";
  if (payment === "stripe" && status === "success") return "stripeSuccess";
  if (payment === "stripe" && status === "cancel") return "stripeCancel";
  return "default";
}
