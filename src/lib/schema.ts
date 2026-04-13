import { getDiscountedOfferPrice, getLocalizedOffer } from "@/config/offer";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";
import type { LanguageOption } from "@/types/purchase";

export function buildSchema(locale: LanguageOption) {
  const offer = getLocalizedOffer(locale);
  const discountedPrice = getDiscountedOfferPrice(
    offer.originalPrice,
    offer.discountPercentage,
  );
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
        name: offer.name,
        provider: {
          "@type": "Organization",
          name: siteConfig.brand,
        },
        inLanguage: locale,
        description: offer.summary,
        offers: [
          {
            "@type": "Offer",
            price: discountedPrice,
            priceCurrency: offer.currency,
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/${locale}`),
            category: offer.name,
          },
        ],
      },
    ],
  };
}
