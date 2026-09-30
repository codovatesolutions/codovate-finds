export type CategorySlug =
  | "student-essentials"
  | "desk-setup"
  | "laptop-accessories"
  | "study-essentials"
  | "hostel-essentials"
  | "room-organization"
  | "productivity";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  featuredGuideSlug?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: CategorySlug;
  image?: string;
  affiliateUrl: string;
  bestFor?: string;
  summary?: string;
  pros?: string[];
  cons?: string[];
  verified?: boolean;
  keyFeatures?: string[];
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
}

export interface Guide {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: CategorySlug;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featuredImage?: string;
  pinterestImage?: string;
  pinterestTitle?: string;
  pinterestDescription?: string;
  metaTitle?: string;
  metaDescription?: string;
  isMonetized?: boolean;
  featuredProduct?: Product;
  products: Product[];
  toc?: { id: string; title: string }[];
  contentSections?: GuideSection[];
  buyingFactors?: string[];
  faqs?: FAQItem[];
  relatedGuideSlugs?: string[];
}

export interface UTMParams {
  url: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term?: string;
}
