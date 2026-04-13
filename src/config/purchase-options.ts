import type {
  CurrencyOption,
  LanguageOption,
  PreferredLanguageOption,
} from "@/types/purchase";

const languageLabels: Record<
  LanguageOption,
  Record<PreferredLanguageOption, string>
> = {
  es: {
    es: "Español",
    en: "English",
    fr: "Français",
    de: "Deutsch",
    ru: "Русский",
    ro: "Română",
  },
  en: {
    es: "Español",
    en: "English",
    fr: "Français",
    de: "Deutsch",
    ru: "Русский",
    ro: "Română",
  },
};

export const supportedCurrencies: CurrencyOption[] = ["EUR", "USD", "GBP", "JPY", "COP"];

export const supportedPreferredLanguages: PreferredLanguageOption[] = [
  "es",
  "en",
  "fr",
  "de",
  "ru",
  "ro",
];

export function getPurchaseFormOptions(locale: LanguageOption) {
  return {
    languages: supportedPreferredLanguages.map((value) => ({
      value,
      label: languageLabels[locale][value],
    })),
    currencies: supportedCurrencies.map((value) => ({
      value,
      label: value,
    })),
  };
}
