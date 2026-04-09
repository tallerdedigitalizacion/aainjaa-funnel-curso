import { defaultLocale, locales } from "@/config/site";
import { enMessages } from "@/i18n/messages/en";
import { esMessages } from "@/i18n/messages/es";
import type { MessageBundle } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

const bundles: Record<LanguageOption, MessageBundle> = {
  es: esMessages,
  en: enMessages,
};

export function isLocale(value: string): value is LanguageOption {
  return locales.includes(value as LanguageOption);
}

export function getMessages(locale: LanguageOption): MessageBundle {
  return bundles[locale] ?? bundles[defaultLocale];
}

export function resolveLocale(value?: string): LanguageOption {
  return value && isLocale(value) ? value : defaultLocale;
}
