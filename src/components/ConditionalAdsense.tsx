import pkg from "fetch-subscription-status";
const { fetchSubscriptionStatus } = pkg;
import { useEffect } from "react";

export const ConditionalAdsense = () => {
  if (process.env.NODE_ENV === "development") {
    return null;
  }
  useEffect(() => {
    const loadAdSense = async () => {
      const status = await fetchSubscriptionStatus();
      if (!status) {
        const head = document.head;
        // Add meta tag if not present
        if (!document.querySelector('meta[name="google-adsense-account"]')) {
          const metaTag = document.createElement("meta");
          metaTag.name = "google-adsense-account";
          metaTag.content = "ca-pub-7801483217621867";
          head.appendChild(metaTag);
        }

        // Add script tag if not present
        if (
          !document.querySelector(
            'script[src*="googlesyndication.com/pagead/js/adsbygoogle.js"]'
          )
        ) {
          const scriptTag = document.createElement("script");
          scriptTag.async = true;
          scriptTag.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7801483217621867";
          scriptTag.crossOrigin = "anonymous";
          head.appendChild(scriptTag);
        }
      }
    };

    loadAdSense();
  }, []);
  return null;
};
