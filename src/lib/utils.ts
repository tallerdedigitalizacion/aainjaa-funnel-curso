export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(pathname: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://aainjaa.example.com";
  return new URL(pathname, base).toString();
}
