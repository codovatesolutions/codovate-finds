"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { Search, X, BookOpen, ArrowRight, Tag } from "lucide-react";
import { searchGuides } from "@/lib/data/guides";
import { CATEGORIES } from "@/lib/data/categories";
import { Guide } from "@/lib/types";
import { trackSearch } from "@/lib/analytics";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [results, setResults] = useState<Guide[]>([]);
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      const filtered = searchGuides(query, selectedCategory);
      setResults(filtered);
    });

    if (query.trim().length > 2) {
      const timer = setTimeout(() => {
        trackSearch(query, results.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query, selectedCategory, results.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            type="text"
            placeholder="Search buying guides, desk accessories, hostel gear..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none text-base"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-200 p-1 rounded-lg"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 px-2.5 py-1 text-sm bg-slate-800 rounded-lg font-medium"
          >
            Esc
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-4 py-3 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3 py-1.5 rounded-full font-medium transition-colors shrink-0 ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Guides
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors shrink-0 ${
                selectedCategory === cat.slug
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          {results.length > 0 ? (
            results.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                onClick={onClose}
                className="group block p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/50 px-2 py-0.5 rounded-md">
                        <Tag className="w-3 h-3" />
                        {guide.category.replace("-", " ")}
                      </span>
                      <span className="text-xs text-slate-400">
                        {guide.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                      {guide.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                      {guide.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12 px-4">
              <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-300 font-semibold text-base mb-1">
                No matching guides found.
              </p>
              <p className="text-slate-400 text-xs max-w-sm mx-auto">
                Try searching with broader terms like &quot;laptop stand&quot;, &quot;desk setup&quot;, or &quot;hostel&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
