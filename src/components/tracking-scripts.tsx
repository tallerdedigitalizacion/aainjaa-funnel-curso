"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { trackingConfig } from "@/config/tracking";
import type { ConsentPreferences } from "@/lib/cookies";

export function TrackingScripts() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);

  useEffect(() => {
    const syncConsent = () => {
      const stored = window.localStorage.getItem(trackingConfig.cookieName);
      if (!stored) {
        setConsent(null);
        return;
      }
      try {
        setConsent(JSON.parse(stored) as ConsentPreferences);
      } catch {
        setConsent(null);
      }
    };

    syncConsent();
    window.addEventListener("aainjaa-consent-change", syncConsent);
    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener("aainjaa-consent-change", syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  if (!consent?.analytics) return null;

  return (
    <>
      {trackingConfig.gtmId ? (
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${trackingConfig.gtmId}');
          `}
        </Script>
      ) : null}
      {!trackingConfig.gtmId && trackingConfig.gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingConfig.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${trackingConfig.gaId}');
            `}
          </Script>
        </>
      ) : null}
      {trackingConfig.metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${trackingConfig.metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}
    </>
  );
}
