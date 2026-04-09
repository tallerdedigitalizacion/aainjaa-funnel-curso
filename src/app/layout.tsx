import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";
import { TrackingScripts } from "@/components/tracking-scripts";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

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
      <body className={`${bebas.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
