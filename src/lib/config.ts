export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://codovatefinds.codovatesolutions.in";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME || "Codovate Finds";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "codovatesolutions@gmail.com";

export const PINTEREST_VERIFICATION =
  process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION || "54c480283a5c152afb85422bbf117785";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-HXVDZD6T6D";

export function getFullUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
