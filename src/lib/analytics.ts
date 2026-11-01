// Privacy-friendly analytics helper and CTA event tracking

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // Plausible
  if (window.plausible) {
    window.plausible(eventName, { props: properties });
  }

  // Google Analytics 4 (GA4)
  if (window.gtag) {
    window.gtag("event", eventName, properties);
  }
}

export function trackCtaClick(ctaName: string, destination: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    destination: destination,
    timestamp: new Date().toISOString(),
  });
}
