import { getLocalizedPacks, getPackPrice } from "@/config/packs";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import type { LanguageOption } from "@/types/purchase";

export function buildSchema(locale: LanguageOption) {
  const packs = getLocalizedPacks(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.brand,
        founder: siteConfig.founder,
        url: siteConfig.siteUrl,
        email: siteConfig.supportEmail,
        logo: absoluteUrl("/icon.svg"),
      },
      {
        "@type": "Course",
        name: `${siteConfig.brand} Percussion Digital Product`,
        provider: {
          "@type": "Organization",
          name: siteConfig.brand,
        },
        inLanguage: locale,
        description:
          "Digital percussion learning experience with configurable packs, private access, and bilingual landing support.",
        offers: packs.map((pack) => ({
          "@type": "Offer",
          price: getPackPrice(pack, pack.defaultCurrency).amount,
          priceCurrency: getPackPrice(pack, pack.defaultCurrency).currency,
          availability: "https://schema.org/InStock",
          url: absoluteUrl(`/${locale}`),
          category: pack.name,
        })),
      },
    ],
  };
}
