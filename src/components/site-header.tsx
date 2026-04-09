import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import { siteConfig } from "@/config/site";
import type { NavLink } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

interface SiteHeaderProps {
  locale: LanguageOption;
  links: NavLink[];
  switcherLabel: string;
}

export function SiteHeader({
  locale,
  links,
  switcherLabel,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-end gap-3">
          <span className="font-display text-3xl uppercase tracking-[0.14em] text-white">
            {siteConfig.brand}
          </span>
          <span className="pb-1 text-xs uppercase tracking-[0.3em] text-white/55">
            {siteConfig.founder}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/72 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={locale} label={switcherLabel} />
      </div>
    </header>
  );
}
