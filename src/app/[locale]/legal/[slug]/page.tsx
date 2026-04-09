import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SectionShell } from "@/components/ui/section-shell";
import { getMessages, isLocale } from "@/i18n";
import { buildPageMetadata } from "@/lib/metadata";

const legalMap = {
  "aviso-legal": "avisoLegal",
  privacidad: "privacidad",
  cookies: "cookies",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !(slug in legalMap)) return {};
  const messages = getMessages(locale);
  const content = messages.legal[legalMap[slug as keyof typeof legalMap]];
  return buildPageMetadata(locale, `/legal/${slug}`, {
    title: `${content.title} | AAINJAA`,
    description: content.intro,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !(slug in legalMap)) notFound();

  const messages = getMessages(locale);
  const content = messages.legal[legalMap[slug as keyof typeof legalMap]];

  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="max-w-4xl rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-red-400">Legal</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
          {content.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/72">{content.intro}</p>
        <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-100">
          {content.reviewNote}
        </div>
        <div className="mt-10 grid gap-8">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-4xl uppercase text-white">
                {section.heading}
              </h2>
              <div className="mt-4 grid gap-4 text-base leading-8 text-white/72">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <Link
          href={`/${locale}`}
          className="mt-10 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/35"
        >
          {messages.legal.commonBackLabel}
        </Link>
      </div>
    </SectionShell>
  );
}
