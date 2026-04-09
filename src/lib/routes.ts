import type { LanguageOption } from "@/types/purchase";

export function localizedPath(locale: LanguageOption, pathname = "") {
  return `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`.replace(/\/+$/, "") || `/${locale}`;
}
