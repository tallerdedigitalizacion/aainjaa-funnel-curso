import type {
  CurrencyOption,
  LanguageOption,
  PaymentMethod,
  SelectedPack,
} from "@/types/purchase";

export interface LocalizedPack {
  id: SelectedPack;
  name: string;
  defaultCurrency: CurrencyOption;
  prices: Partial<Record<CurrencyOption, number>>;
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
  defaultCurrency: CurrencyOption;
  prices: Partial<Record<CurrencyOption, number>>;
  recommended?: boolean;
  shippingRequired?: boolean;
  paymentLinks: Partial<Record<PaymentMethod, string>>;
  translations: Record<LanguageOption, PackTranslation>;
}

const packDefinitions: BasePackConfig[] = [
  {
    id: "basic",
    name: "Basic",
    defaultCurrency: "EUR",
    prices: {
      EUR: 9.99,
    },
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_BASIC_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "Acceso al contenido base para aprender la pieza con claridad.",
        ctaLabel: "Elegir Basic",
        features: [
          "Acceso al contenido esencial",
          "Una entrada clara y directa al material base",
          "Pensado para empezar sin friccion",
        ],
      },
      en: {
        summary: "Access to the core content for learning the piece with clarity.",
        ctaLabel: "Choose Basic",
        features: [
          "Access to the essential content",
          "A clear and direct entry to the core material",
          "Designed for getting started with low friction",
        ],
      },
    },
  },
  {
    id: "premium",
    name: "Premium",
    defaultCurrency: "EUR",
    prices: {
      EUR: 19.99,
    },
    recommended: true,
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_PREMIUM_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "La opcion recomendada: version guiada, mejor estructura y recursos extra.",
        ctaLabel: "Elegir Premium",
        badge: "Recomendado",
        features: [
          "Version guiada para avanzar con mejor estructura",
          "Recursos extra para estudiar con mas contexto",
          "La opcion mas equilibrada para la mayoria",
        ],
      },
      en: {
        summary: "The recommended option: guided version, better structure, and extra resources.",
        ctaLabel: "Choose Premium",
        badge: "Recommended",
        features: [
          "Guided version for a clearer progression",
          "Extra resources for stronger study context",
          "The most balanced option for most buyers",
        ],
      },
    },
  },
  {
    id: "pro",
    name: "Pro",
    defaultCurrency: "EUR",
    prices: {
      EUR: 39.99,
    },
    paymentLinks: {
      stripe: process.env.NEXT_PUBLIC_STRIPE_PRO_URL || "",
      manual: "",
    },
    translations: {
      es: {
        summary: "La experiencia mas completa, con acceso ampliado y valor adicional.",
        ctaLabel: "Elegir Pro",
        features: [
          "Acceso ampliado para una experiencia mas completa",
          "Valor adicional para quien quiere ir mas alla",
          "Pensado para quienes buscan la opcion mas alta",
        ],
      },
      en: {
        summary: "The fullest experience, with expanded access and added value.",
        ctaLabel: "Choose Pro",
        features: [
          "Expanded access for the fullest experience",
          "Added value for buyers who want more depth",
          "Built for people choosing the highest tier",
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
      defaultCurrency: pack.defaultCurrency,
      prices: pack.prices,
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

function getCurrencyLocale(locale: LanguageOption) {
  return locale === "es" ? "es-ES" : "en-US";
}

export function getPackPrice(
  pack: Pick<LocalizedPack, "prices" | "defaultCurrency">,
  currency: CurrencyOption,
) {
  const amount = pack.prices[currency] ?? pack.prices[pack.defaultCurrency] ?? 0;
  const resolvedCurrency = pack.prices[currency] ? currency : pack.defaultCurrency;

  return {
    amount,
    currency: resolvedCurrency,
  };
}

export function formatPackPrice(
  pack: Pick<LocalizedPack, "prices" | "defaultCurrency">,
  currency: CurrencyOption,
  locale: LanguageOption,
) {
  const resolved = getPackPrice(pack, currency);

  return new Intl.NumberFormat(getCurrencyLocale(locale), {
    style: "currency",
    currency: resolved.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(resolved.amount);
}
