import Link from "next/link";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { Guide } from "@/lib/types";

interface GuideCardProps {
  guide: Guide;
  featured?: boolean;
}

export default function GuideCard({ guide, featured = false }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/20 ${
        featured ? "lg:col-span-2 lg:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-blue-900/40" : ""
      }`}
    >
      <div>
        {/* Category & Read Time */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-lg">
            <Tag className="w-3 h-3" />
            {guide.category.replace("-", " ")}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-slate-100 group-hover:text-blue-300 transition-colors leading-tight mb-3 ${
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {guide.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {guide.description}
        </p>
      </div>

      {/* Footer link trigger */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300">
        <span>Read Buying Guide</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </Link>
  );
}
