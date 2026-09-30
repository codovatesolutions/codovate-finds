import { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import { GUIDES } from "@/lib/data/guides";
import { CATEGORIES } from "@/lib/data/categories";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "All Buying Guides & Setup Ideas",
  description:
    "Explore our complete collection of practical buying guides for student essentials, laptop stands, desk setups, hostel gear, and productivity accessories.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Complete Catalog ({GUIDES.length} Guides)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Buying Guides &amp; Setup Checklists
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Clear, no-hype guides focused on practical gear, sensible budgets, and what actually matters before buying products for college, study, or work.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 text-xs">
        <Link
          href="/guides"
          className="px-4 py-2 rounded-full font-bold bg-blue-600 text-white shadow-md shrink-0"
        >
          All Guides ({GUIDES.length})
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="px-4 py-2 rounded-full font-medium bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:text-white transition-colors shrink-0"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GUIDES.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
}
