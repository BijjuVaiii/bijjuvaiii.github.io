import { useEffect } from "react";

export const Analytics = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

    // Optional Plausible script
    if (plausibleDomain && !document.getElementById("plausible-script")) {
      const script = document.createElement("script");
      script.id = "plausible-script";
      script.defer = true;
      script.dataset.domain = plausibleDomain;
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);
    }

    // Optional Google Analytics 4 script
    if (gaMeasurementId && !document.getElementById("ga4-script")) {
      const script = document.createElement("script");
      script.id = "ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", gaMeasurementId);
    }
  }, []);

  return null;
};

export default Analytics;
