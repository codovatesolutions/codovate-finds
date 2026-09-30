import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  LayoutGrid,
  Laptop,
  Home as HomeIcon,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import GuideCard from "@/components/GuideCard";
import ProductCard from "@/components/ProductCard";
import NewsletterBox from "@/components/NewsletterBox";
import { GUIDES, getLatestGuides, getGuidesByCategory } from "@/lib/data/guides";
import { CATEGORIES } from "@/lib/data/categories";
import { PRODUCTS } from "@/lib/data/products";

export default function HomePage() {
  const latestGuides = getLatestGuides(6);
  const featuredLaptopStandGuide = GUIDES.find((g) => g.slug === "best-laptop-stands-for-students") || GUIDES[0];
  const deskSetupGuides = getGuidesByCategory("desk-setup").slice(0, 3);
  const laptopAccessoryGuides = getGuidesByCategory("laptop-accessories").slice(0, 3);
  const hostelGuides = getGuidesByCategory("hostel-essentials").slice(0, 3);
  const studentPicksProduct = PRODUCTS[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Practical Picks &bull; India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Build a Better Setup <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
                  Without Overspending
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Practical buying guides, student essentials and affordable setup ideas for study, work and everyday life.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/guides"
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/40 hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/category/student-essentials"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-bold text-sm sm:text-base transition-all"
                >
                  Student Essentials
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Original Editorial Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Mobile-First Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Transparent Affiliate Links</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
                    Student Setup Focus
                  </span>
                  <span className="text-xs text-slate-400 font-mono">EST. 2026</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                  Upgrades that make studying, writing &amp; coding more comfortable.
                </h3>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <Laptop className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                    <span className="text-[11px] font-medium text-slate-300 block">Laptop Stands</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <BookOpen className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                    <span className="text-[11px] font-medium text-slate-300 block">Study Lamps</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <HomeIcon className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                    <span className="text-[11px] font-medium text-slate-300 block">Hostel Gear</span>
                  </div>
                </div>

                <Link
                  href="/guides/best-laptop-stands-for-students"
                  className="block w-full text-center py-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/70 border border-blue-800/60 text-blue-300 text-xs font-bold transition-all"
                >
                  Featured: Best Laptop Stands Guide &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Popular Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Start with what you need
            </h2>
          </div>
          <Link
            href="/guides"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            View all categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {cat.slug === "student-essentials" && <GraduationCap className="w-6 h-6" />}
                {cat.slug === "desk-setup" && <LayoutGrid className="w-6 h-6" />}
                {cat.slug === "laptop-accessories" && <Laptop className="w-6 h-6" />}
                {cat.slug === "study-essentials" && <BookOpen className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-300 transition-colors mb-2">
                {cat.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {cat.description}
              </p>
              <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Explore Category &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Trending Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Top Student Setup Recommendations
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GuideCard guide={featuredLaptopStandGuide} featured />
          {GUIDES.slice(1, 3).map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* STUDENT PICKS (FEATURED MONETIZED PRODUCT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Student Picks
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Featured Laptop Stand Recommendation
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Direct affiliate pick with link preserved for verified laptop stand recommendation.
          </p>
        </div>

        <ProductCard product={studentPicksProduct} categorySlug="laptop-accessories" />
      </section>

      {/* DESK SETUP IDEAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Desk Setup Ideas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Optimizing Your Study Workspace
            </h2>
          </div>
          <Link
            href="/category/desk-setup"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300"
          >
            All Desk Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deskSetupGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* LAPTOP ACCESSORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Laptop Accessories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Essential Tools for Daily Productivity
            </h2>
          </div>
          <Link
            href="/category/laptop-accessories"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300"
          >
            All Accessory Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {laptopAccessoryGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* HOSTEL ESSENTIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Hostel Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Smart Finds for Small Rooms
            </h2>
          </div>
          <Link
            href="/category/hostel-essentials"
            className="text-xs font-semibold text-blue-400 hover:text-blue-300"
          >
            All Hostel Guides &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hostelGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* LATEST GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Latest Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Recently Published Articles
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* WHY TRUST CODOVATE FINDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Editorial Integrity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Why Trust Codovate Finds
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              We build trustworthy buying guides for real setup problems. Here is how we evaluate products and monetize our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1">
                No Scraped or Fake Reviews
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We never fabricate customer reviews, simulate fake limited-stock urgency, or claim personal testing unless explicitly performed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
              <Zap className="w-8 h-8 text-indigo-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1">
                Focus on Practical Value
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We evaluate ergonomics, build materials, cable safety, and real desk dimensions so college students don&apos;t waste money.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1">
                Clear Affiliate Disclosures
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every monetized article contains a prominent disclosure. Buying through qualifying Amazon links supports our research at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterBox />
      </div>
    </div>
  );
}
