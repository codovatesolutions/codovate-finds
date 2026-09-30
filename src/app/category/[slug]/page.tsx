import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Tag } from "lucide-react";
import { CATEGORIES, getCategoryBySlug } from "@/lib/data/categories";
import { getGuidesByCategory, getGuideBySlug } from "@/lib/data/guides";
import GuideCard from "@/components/GuideCard";
import NewsletterBox from "@/components/NewsletterBox";
import { SITE_NAME, getFullUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  const canonicalUrl = getFullUrl(`/category/${category.slug}`);

  return {
    title: `${category.name} Buying Guides & Setup Ideas`,
    description: category.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.name} — Codovate Finds`,
      description: category.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryGuides = getGuidesByCategory(slug);
  const featuredGuide = category.featuredGuideSlug
    ? getGuideBySlug(category.featuredGuideSlug)
    : categoryGuides[0];

  const remainingGuides = categoryGuides.filter(
    (g) => g.slug !== featuredGuide?.slug
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400">
        <Link href="/" className="hover:text-slate-200">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/guides" className="hover:text-slate-200">
          Categories
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-400 font-semibold">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-lg">
          <Tag className="w-3.5 h-3.5" />
          <span>Category Archive</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {category.name}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Featured Guide for this Category */}
      {featuredGuide && (
        <section className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Featured Category Guide
          </h2>
          <GuideCard guide={featuredGuide} featured />
        </section>
      )}

      {/* Remaining Article Cards */}
      {remainingGuides.length > 0 ? (
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-white">
            More {category.name} Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </section>
      ) : (
        !featuredGuide && (
          <div className="p-8 text-center text-slate-400 bg-slate-900 rounded-2xl border border-slate-800">
            No guides available in this category yet.
          </div>
        )
      )}

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  );
}
