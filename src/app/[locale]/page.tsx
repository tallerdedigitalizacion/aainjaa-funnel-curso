import { LandingPage } from "@/components/landing-page";
import { getMessages, isLocale } from "@/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchema } from "@/lib/schema";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata(locale, "");
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;

  const messages = getMessages(locale);
  const schema = buildSchema(locale);

  return (
    <>
      <LandingPage locale={locale} messages={messages} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
