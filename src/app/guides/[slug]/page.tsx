import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, ShieldAlert, ChevronRight, Tag, HelpCircle, CheckCircle2 } from "lucide-react";
import { getGuideBySlug, GUIDES } from "@/lib/data/guides";
import { getCategoryBySlug } from "@/lib/data/categories";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import TableOfContents from "@/components/TableOfContents";
import PinterestShareButton from "@/components/PinterestShareButton";
import GuideCard from "@/components/GuideCard";
import NewsletterBox from "@/components/NewsletterBox";
import { AFFILIATE_DISCLOSURE_SHORT, AMAZON_ASSOCIATE_STATEMENT } from "@/lib/affiliate";
import { SITE_NAME, getFullUrl } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  const pageUrl = getFullUrl(`/guides/${guide.slug}`);

  return {
    title: guide.metaTitle || guide.title,
    description: guide.metaDescription || guide.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: pageUrl,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const category = getCategoryBySlug(guide.category);
  const relatedGuides = (guide.relatedGuideSlugs || [])
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const canonicalUrl = getFullUrl(`/guides/${guide.slug}`);

  // JSON-LD Article Schema
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getFullUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getFullUrl("/"),
    },
  };

  // JSON-LD Breadcrumb Schema
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getFullUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: getFullUrl("/guides"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category?.name || guide.category,
        item: getFullUrl(`/category/${guide.category}`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: guide.title,
        item: canonicalUrl,
      },
    ],
  };

  // JSON-LD FAQPage Schema if FAQs exist
  const jsonLdFAQ = guide.faqs && guide.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      )}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 overflow-x-auto no-scrollbar py-1">
          <Link href="/" className="hover:text-slate-200">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href="/guides" className="hover:text-slate-200">
            Guides
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link href={`/category/${guide.category}`} className="hover:text-blue-400 font-medium">
            {category?.name || guide.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
            {guide.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-lg">
              <Tag className="w-3.5 h-3.5" />
              {category?.name || guide.category}
            </span>
            <PinterestShareButton
              guideTitle={guide.title}
              guideSlug={guide.slug}
              pinterestDescription={guide.pinterestDescription}
            />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
            {guide.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal">
            {guide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              Updated: {guide.updatedAt}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {guide.readTime}
            </span>
            <span>&bull;</span>
            <span className="text-slate-400">By Codovate Finds Editorial</span>
          </div>

          {/* Explicit Affiliate Disclosure Box */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3 mt-4 shadow-inner">
            <ShieldAlert className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-200">
                {AFFILIATE_DISCLOSURE_SHORT}
              </p>
              <p className="text-slate-400 text-[11px]">
                {AMAZON_ASSOCIATE_STATEMENT} Prices and availability are subject to change. Learn more on our{" "}
                <Link href="/affiliate-disclosure" className="text-blue-400 hover:underline">
                  Affiliate Disclosure Page
                </Link>.
              </p>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {guide.toc && <TableOfContents items={guide.toc} />}

        {/* Content Sections */}
        {guide.contentSections && (
          <div className="space-y-8 text-slate-300 text-base leading-relaxed">
            {guide.contentSections.map((sec) => (
              <section key={sec.id} id={sec.id} className="space-y-3 scroll-mt-24">
                <h2 className="text-2xl font-bold text-white tracking-tight pt-2 border-t border-slate-900">
                  {sec.title}
                </h2>
                <div className="whitespace-pre-line text-slate-300 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Quick Comparison Table if products exist */}
        {guide.products && guide.products.length > 0 && (
          <ComparisonTable products={guide.products} categorySlug={guide.category} guideSlug={guide.slug} />
        )}

        {/* Detailed Product Cards Section */}
        {guide.products && guide.products.length > 0 && (
          <section id="featured-recommendation" className="space-y-6 scroll-mt-24 pt-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Detailed Recommendations &amp; Analysis
            </h2>
            <div className="space-y-8">
              {guide.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  categorySlug={guide.category}
                  guideSlug={guide.slug}
                />
              ))}
            </div>
          </section>
        )}

        {/* Buying Factors Section */}
        {guide.buyingFactors && guide.buyingFactors.length > 0 && (
          <section id="key-factors" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              What Matters Most When Choosing
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {guide.buyingFactors.map((factor, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ Section */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section id="faq" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {guide.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <h4 className="font-bold text-slate-100 text-base">
                    Q: {faq.question}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Guides Section */}
        {relatedGuides.length > 0 && (
          <section className="pt-10 border-t border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white">
              Related Setup &amp; Buying Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedGuides.map((rel) => (
                <GuideCard key={rel.slug} guide={rel} />
              ))}
            </div>
          </section>
        )}

        {/* Article Footer Newsletter */}
        <NewsletterBox />
      </article>
    </>
  );
}
