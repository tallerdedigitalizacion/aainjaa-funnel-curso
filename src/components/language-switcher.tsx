"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localeLabels } from "@/config/site";
import { cn } from "@/lib/utils";
import type { LanguageOption } from "@/types/purchase";

interface LanguageSwitcherProps {
  currentLocale: LanguageOption;
  label: string;
}

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const currentPath = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-2" aria-label={label}>
      {(Object.keys(localeLabels) as LanguageOption[]).map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${currentPath ? `/${currentPath}` : ""}`}
          className={cn(
            "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] transition",
            locale === currentLocale
              ? "border-white bg-white text-neutral-950"
              : "border-white/15 text-white/72 hover:border-red-500 hover:text-white",
          )}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
