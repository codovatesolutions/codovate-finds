export const AMAZON_ASSOCIATE_TAG = "codovateaffil-21";
export const PRIMARY_LAPTOP_STAND_URL = "https://link.amazon/B0iN6y6os";

/**
 * Formats an Amazon URL to ensure the Amazon Associates tag is included
 * without breaking shortened links or existing custom URLs.
 */
export function formatAffiliateUrl(url: string, tag: string = AMAZON_ASSOCIATE_TAG): string {
  if (!url) return "#";
  
  // Preserve exact provided shortlinks like link.amazon/B0iN6y6os
  if (url.includes("link.amazon") || url.includes("amzn.to")) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("amazon.")) {
      parsed.searchParams.set("tag", tag);
      return parsed.toString();
    }
    return url;
  } catch {
    return url;
  }
}

export const AFFILIATE_REL = "nofollow sponsored noopener";
export const AFFILIATE_DISCLOSURE_SHORT =
  "This article contains affiliate links. We may earn a commission when you purchase through qualifying links, at no additional cost to you.";
export const AMAZON_ASSOCIATE_STATEMENT =
  "As an Amazon Associate I earn from qualifying purchases.";
