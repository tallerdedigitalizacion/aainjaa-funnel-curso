import Link from "next/link";

import { SectionShell } from "@/components/ui/section-shell";
import { defaultLocale } from "@/config/site";
import { getMessages } from "@/i18n";

export default function LocaleNotFound() {
  const locale = defaultLocale;
  const messages = getMessages(locale);

  return (
    <SectionShell className="flex min-h-[70vh] items-center justify-center py-20 text-center">
      <div className="max-w-2xl">
        <p className="font-display text-8xl uppercase tracking-[0.14em] text-red-500">
          404
        </p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
          {messages.notFound.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/70">{messages.notFound.body}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-500"
        >
          {messages.notFound.cta}
        </Link>
      </div>
    </SectionShell>
  );
}
