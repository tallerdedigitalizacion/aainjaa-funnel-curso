import type { LanguageOption } from "@/types/purchase";

export const locales: LanguageOption[] = ["es", "en"];
export const defaultLocale: LanguageOption = "es";

export const siteConfig = {
  brand: "AAINJAA",
  founder: "Homero Cortes",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://aainjaa.example.com",
  supportEmail: "hola@aainjaa.com",
  socialImagePath: "/social-image.jpg",
  teaserAnchor: "highlights",
  orderAnchor: "order",
  legalReviewNote:
    "Internal note: this copy is editable and requires final legal review before production launch.",
};

export const localeLabels: Record<LanguageOption, string> = {
  es: "ES",
  en: "EN",
};
