"use client";

import { trackingConfig } from "@/config/tracking";
import type { TrackingEventPayload } from "@/types/tracking";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(payload: TrackingEventPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (trackingConfig.gaId && typeof window.gtag === "function") {
    window.gtag("event", payload.event, payload);
  }

  if (trackingConfig.metaPixelId && typeof window.fbq === "function") {
    window.fbq("trackCustom", payload.event, payload);
  }
}
