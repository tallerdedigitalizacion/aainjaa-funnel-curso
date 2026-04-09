import type { Metadata } from "next";

import "@/app/globals.css";
import { TrackingScripts } from "@/components/tracking-scripts";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.brand,
  description: "AAINJAA digital percussion product landing page.",
  icons: {
    icon: absoluteUrl("/icon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
