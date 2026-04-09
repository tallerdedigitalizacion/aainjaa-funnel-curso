import { LandingPage } from "@/components/landing-page";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLocale } from "@/config/site";
import { getMessages } from "@/i18n";
import { buildSchema } from "@/lib/schema";

export default function RootPage() {
  const messages = getMessages(defaultLocale);
  const schema = buildSchema(defaultLocale);

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
          locale={defaultLocale}
          links={messages.nav}
          switcherLabel={messages.languageSwitcherLabel}
        />
        <LandingPage locale={defaultLocale} messages={messages} />
        <SiteFooter locale={defaultLocale} content={messages.footer} />
      </div>
      <CookieBanner locale={defaultLocale} messages={messages.cookieBanner} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
