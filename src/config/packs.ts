import type { LanguageOption, PaymentMethod, SelectedPack } from "@/types/purchase";

export interface LocalizedPack {
  id: SelectedPack;
  name: string;
  price: string;
  currency: "EUR" | "USD";
  badge?: string;
  recommended?: boolean;
  shippingRequired?: boolean;
  ctaLabel: string;
  summary: string;
  features: string[];
  paymentLinks: Partial<Record<PaymentMethod, string>>;
}

interface PackTranslation {
  summary: string;
  ctaLabel: string;
  badge?: string;
  features: string[];
}

interface BasePackConfig {
  id: SelectedPack;
  name: string;
  price: string;
  currency: "EUR" | "USD";
  recommended?: boolean;
  shippingRequired?: boolean;
  paymentLinks: Partial<Record<PaymentMethod, string>>;
  translations: Record<LanguageOption, PackTranslation>;
}

const packDefinitions: BasePackConfig[] = [
  {
    id: "basic",
    name: "Basic",
    price: "49",
    currency: "EUR",
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_BASIC_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "Entrada directa al material esencial para aprender y tocar con claridad.",
        ctaLabel: "Elegir Basic",
        features: [
          "Video principal paso a paso",
          "Desglose por instrumentos",
          "Version lenta para practicar",
          "Acceso digital privado tras validacion de pago",
        ],
      },
      en: {
        summary: "Straight access to the essential material for learning and playing with clarity.",
        ctaLabel: "Choose Basic",
        features: [
          "Main step-by-step video",
          "Instrument-by-instrument breakdown",
          "Slow practice version",
          "Private digital access after payment verification",
        ],
      },
    },
  },
  {
    id: "premium",
    name: "Premium",
    price: "89",
    currency: "EUR",
    recommended: true,
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "La opcion recomendada para avanzar mas rapido con recursos extra y mejor contexto.",
        ctaLabel: "Elegir Premium",
        badge: "Recomendado",
        features: [
          "Todo lo del pack Basic",
          "Partituras PDF editables",
          "Bonus de estudio y enfoque musical",
          "Prioridad en confirmacion de acceso",
        ],
      },
      en: {
        summary: "The recommended option for moving faster with extra resources and stronger context.",
        ctaLabel: "Choose Premium",
        badge: "Recommended",
        features: [
          "Everything in Basic",
          "Editable PDF scores",
          "Study bonus and musical focus resources",
          "Priority access confirmation",
        ],
      },
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: "149",
    currency: "EUR",
    shippingRequired: true,
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_PRO_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "Pensado para quienes quieren la experiencia mas completa y soporte ampliado.",
        ctaLabel: "Elegir Pro",
        features: [
          "Todo lo del pack Premium",
          "Material fisico opcional sujeto a disponibilidad",
          "Indicaciones extra de montaje o interpretacion",
          "Seguimiento manual con codigo de pedido",
        ],
      },
      en: {
        summary: "Built for people who want the fullest experience and expanded support.",
        ctaLabel: "Choose Pro",
        features: [
          "Everything in Premium",
          "Optional physical material subject to availability",
          "Extra setup or interpretation guidance",
          "Manual follow-up with request code",
        ],
      },
    },
  },
];

export function getLocalizedPacks(locale: LanguageOption): LocalizedPack[] {
  return packDefinitions.map((pack) => {
    const translation = pack.translations[locale];
    return {
      id: pack.id,
      name: pack.name,
      price: pack.price,
      currency: pack.currency,
      recommended: pack.recommended,
      shippingRequired: pack.shippingRequired,
      paymentLinks: pack.paymentLinks,
      summary: translation.summary,
      ctaLabel: translation.ctaLabel,
      badge: translation.badge,
      features: translation.features,
    };
  });
}
