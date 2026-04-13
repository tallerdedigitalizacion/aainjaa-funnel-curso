import type { MetadataRoute } from "next";

import { locales, siteConfig } from "@/config/site";

export const dynamic = "force-static";

const paths = [
  "",
  "/gracias",
  "/legal/aviso-legal",
  "/legal/privacidad",
  "/legal/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path ? "monthly" : "weekly",
      priority: path ? 0.7 : 1,
    })),
  );
}
