import type { LanguageOption } from "@/types/purchase";

export interface LocalizedOffer {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  originalPrice: number;
  discountPercentage: number;
  launchWindowDays: number;
  currency: "EUR";
  launchBadge: string;
  discountBadge: string;
  summary: string;
  highlights: string[];
  ctaLabel: string;
  checkoutNote: string;
}

const offerContent: Record<LanguageOption, Omit<LocalizedOffer, "id" | "originalPrice" | "discountPercentage" | "launchWindowDays" | "currency">> = {
  es: {
    name: "Masterclass digital AAINJAA",
    eyebrow: "Oferta",
    title: "Una sola masterclass. Una oferta clara. Un checkout directo.",
    intro:
      "Hemos simplificado la landing para validar la demanda real con una sola propuesta de valor, un solo precio y un flujo de compra directo con Stripe Checkout.",
    launchBadge: "Oferta de lanzamiento · 7 dias",
    discountBadge: "20% descuento lanzamiento",
    summary:
      "Accede a una masterclass digital de percusion con estructura clara, material listo para estudiar y una experiencia de compra enfocada en conversion, sin fricciones innecesarias.",
    highlights: [
      "Acceso a la masterclass digital completa",
      "Recursos claros para aprender la pieza con contexto",
      "Checkout seguro con Stripe al enviar el pedido",
    ],
    ctaLabel: "Quiero acceder ahora",
    checkoutNote:
      "Al enviar el formulario te llevaremos directamente a Stripe para completar el pago seguro.",
  },
  en: {
    name: "AAINJAA digital masterclass",
    eyebrow: "Offer",
    title: "One masterclass. One clear offer. One direct checkout.",
    intro:
      "The landing is now simplified to validate real demand with a single value proposition, one price, and a direct Stripe Checkout flow.",
    launchBadge: "Launch offer · 7 days",
    discountBadge: "20% launch discount",
    summary:
      "Get access to a digital percussion masterclass with a clear structure, focused study material, and a conversion-first purchase flow without unnecessary friction.",
    highlights: [
      "Access to the full digital masterclass",
      "Clear resources for learning the piece with context",
      "Secure Stripe checkout after submitting the form",
    ],
    ctaLabel: "Get access now",
    checkoutNote:
      "When you submit the form, we will take you directly to Stripe to complete the secure payment.",
  },
};

const baseOffer = {
  id: "aainjaa-masterclass-launch",
  originalPrice: 49,
  discountPercentage: 20,
  launchWindowDays: 7,
  currency: "EUR" as const,
};

export function getLocalizedOffer(locale: LanguageOption): LocalizedOffer {
  return {
    ...baseOffer,
    ...offerContent[locale],
  };
}

export function getDiscountedOfferPrice(originalPrice: number, discountPercentage: number) {
  const discounted = originalPrice * (1 - discountPercentage / 100);
  return Math.round(discounted * 100) / 100;
}

export function formatOfferPrice(
  amount: number,
  currency: LocalizedOffer["currency"],
  locale: LanguageOption,
) {
  return new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
