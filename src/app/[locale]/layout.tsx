import { notFound } from "next/navigation";

import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locales } from "@/config/site";
import { getMessages, isLocale } from "@/i18n";
import type { LanguageOption } from "@/types/purchase";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const messages = getMessages(locale as LanguageOption);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        {messages.skipToContent}
      </a>
      <div className="min-h-screen bg-transparent">
        <SiteHeader
          locale={locale as LanguageOption}
          links={messages.nav}
          switcherLabel={messages.languageSwitcherLabel}
        />
        {children}
        <SiteFooter locale={locale as LanguageOption} content={messages.footer} />
      </div>
      <CookieBanner locale={locale as LanguageOption} messages={messages.cookieBanner} />
    </>
  );
}
