import Link from "next/link";

import { siteConfig } from "@/config/site";
import type { FooterContent } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

interface SiteFooterProps {
  locale: LanguageOption;
  content: FooterContent;
}

export function SiteFooter({ locale, content }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-white/70 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl uppercase tracking-[0.14em] text-white">
            {siteConfig.brand}
          </p>
          <p className="mt-3 max-w-xl text-white/65">{content.copyright}</p>
        </div>
        <div className="grid gap-3 sm:justify-self-end sm:text-right">
          <Link href={`/${locale}/legal/aviso-legal`} className="hover:text-white">
            {content.legalLabel} / Aviso legal
          </Link>
          <Link href={`/${locale}/legal/privacidad`} className="hover:text-white">
            {content.legalLabel} / Privacidad
          </Link>
          <Link href={`/${locale}/legal/cookies`} className="hover:text-white">
            {content.legalLabel} / Cookies
          </Link>
          <Link href={`/${locale}/private-access`} className="hover:text-white">
            {content.privateAccessLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}
