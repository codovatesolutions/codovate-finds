declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("config", GA_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  eventName: string,
  params: Record<string, unknown> = {}
) => {
  if (typeof window !== "undefined" && window.gtag && GA_ID) {
    window.gtag("event", eventName, params);
  } else {
    // Development or unconfigured logger fallback
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event: ${eventName}]`, params);
    }
  }
};

export const trackAffiliateClick = (
  productName: string,
  affiliateUrl: string,
  category?: string
) => {
  trackEvent("affiliate_click", {
    product_name: productName,
    affiliate_url: affiliateUrl,
    category: category || "general",
    timestamp: new Date().toISOString(),
  });
};

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent("search", {
    search_term: query,
    results_count: resultsCount,
  });
};

export const trackPinterestShare = (guideTitle: string, guideSlug: string) => {
  trackEvent("pinterest_share", {
    guide_title: guideTitle,
    guide_slug: guideSlug,
  });
};
