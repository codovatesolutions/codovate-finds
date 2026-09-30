"use client";

import { ExternalLink, CheckCircle2, XCircle, ShieldCheck, Tag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatAffiliateUrl, AFFILIATE_REL } from "@/lib/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

interface ProductCardProps {
  product: Product;
  categorySlug?: string;
}

export default function ProductCard({ product, categorySlug }: ProductCardProps) {
  const affiliateUrl = formatAffiliateUrl(product.affiliateUrl);

  const handleClick = () => {
    trackAffiliateClick(product.name, affiliateUrl, categorySlug || product.category);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all hover:border-slate-700">
      {/* Badge / Tag if present */}
      {product.badge && (
        <div className="absolute top-4 right-4 bg-blue-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {product.badge}
        </div>
      )}

      {/* Header section */}
      <div className="mb-4 pr-16">
        {product.bestFor && (
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800/60 px-3 py-1 rounded-lg mb-2.5">
            <Tag className="w-3.5 h-3.5" />
            <span>Best for: {product.bestFor}</span>
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-tight">
          {product.name}
        </h3>
        {product.verified ? (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium mt-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Featured Recommendation
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-amber-400/90 font-medium mt-1">
            Featured Recommendation
          </span>
        )}
      </div>

      {/* Summary */}
      {product.summary && (
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {product.summary}
        </p>
      )}

      {/* Key Features list if present */}
      {product.keyFeatures && product.keyFeatures.length > 0 && (
        <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Why Consider It
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {product.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Pros */}
        {product.pros && product.pros.length > 0 && (
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pros
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {product.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cons */}
        {product.cons && product.cons.length > 0 && (
          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
            <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-400" /> Cons
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              {product.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* CTA section */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={affiliateUrl}
          target="_blank"
          rel={AFFILIATE_REL}
          onClick={handleClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-900/40 hover:scale-[1.02] transition-all cursor-pointer"
        >
          <span>Check Current Price on Amazon</span>
          <ExternalLink className="w-4 h-4 shrink-0" />
        </a>
        <p className="text-[11px] text-slate-400 text-center sm:text-right leading-tight max-w-xs">
          Paid link • Amazon price, seller, and availability can change.
        </p>
      </div>
    </div>
  );
}
