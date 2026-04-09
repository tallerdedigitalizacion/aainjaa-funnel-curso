import Link from "next/link";
import type { Metadata } from "next";

import { SectionShell } from "@/components/ui/section-shell";
import { getMessages, isLocale } from "@/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = getMessages(locale);
  return buildPageMetadata(locale, "/gracias", {
    title: `${messages.thanks.title} | AAINJAA`,
    description: messages.thanks.body,
  });
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;

  const messages = getMessages(locale);

  return (
    <SectionShell className="flex min-h-[70vh] items-center py-20">
      <div className="max-w-3xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.35em] text-red-400">Gracias</p>
        <h1 className="mt-5 font-display text-6xl uppercase leading-none text-white">
          {messages.thanks.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
          {messages.thanks.body}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-500"
        >
          {messages.thanks.cta}
        </Link>
      </div>
    </SectionShell>
  );
}
