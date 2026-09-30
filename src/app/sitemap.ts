import { MetadataRoute } from "next";
import { GUIDES } from "@/lib/data/guides";
import { CATEGORIES } from "@/lib/data/categories";
import { getFullUrl } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Public indexable static pages (Internal noindex tools like /tools/* & /admin are excluded)
  const staticPages = [
    "",
    "/guides",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: getFullUrl(route),
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: getFullUrl(`/category/${cat.slug}`),
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const guidePages = GUIDES.map((g) => ({
    url: getFullUrl(`/guides/${g.slug}`),
    lastModified: new Date(g.updatedAt).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...guidePages];
}
