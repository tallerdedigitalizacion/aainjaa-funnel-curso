export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(pathname: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://aainjaa.example.com";
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalizedPath, base).toString();
}
