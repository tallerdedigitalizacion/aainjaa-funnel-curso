import type { Metadata } from "next";

import { locales, siteConfig } from "@/config/site";
import { getMessages } from "@/i18n";
import { absoluteUrl } from "@/lib/utils";
import type { LanguageOption } from "@/types/purchase";

export function buildPageMetadata(
  locale: LanguageOption,
  pathname: string,
  overrides?: Partial<Metadata>,
): Metadata {
  const messages = getMessages(locale);
  const canonical = absoluteUrl(`/${locale}${pathname}`);
  const languages = Object.fromEntries(
    locales.map((item) => [item, absoluteUrl(`/${item}${pathname}`)]),
  );

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale,
      url: canonical,
      siteName: messages.meta.siteName,
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      images: [
        {
          url: absoluteUrl(siteConfig.socialImagePath),
          width: 1200,
          height: 630,
          alt: messages.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.ogTitle,
      description: messages.meta.ogDescription,
      images: [absoluteUrl(siteConfig.socialImagePath)],
    },
    ...overrides,
  };
}
