"use client";

import { ExternalLink } from "lucide-react";
import { Product } from "@/lib/types";
import { formatAffiliateUrl, AFFILIATE_REL } from "@/lib/affiliate";
import { trackAffiliateClick } from "@/lib/analytics";

interface ComparisonTableProps {
  products: Product[];
  categorySlug?: string;
  guideSlug?: string;
}

export default function ComparisonTable({ products, categorySlug, guideSlug }: ComparisonTableProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
        <h4 className="text-lg font-bold text-slate-100">
          Quick Product Comparison
        </h4>
        <p className="text-xs text-slate-400 mt-0.5">
          Side-by-side breakdown of recommended products &amp; key specifications.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/90 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
            <tr>
              <th scope="col" className="py-3.5 px-4 min-w-[200px]">Product</th>
              <th scope="col" className="py-3.5 px-4 min-w-[160px]">Best For</th>
              <th scope="col" className="py-3.5 px-4 min-w-[180px]">Key Advantage</th>
              <th scope="col" className="py-3.5 px-4 text-right min-w-[160px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {products.map((prod) => {
              const url = formatAffiliateUrl(prod.affiliateUrl);
              return (
                <tr key={prod.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-100">
                    <div className="flex flex-col">
                      <span>{prod.name}</span>
                      {prod.badge && (
                        <span className="text-[10px] text-blue-400 font-bold uppercase mt-0.5">
                          {prod.badge}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-300">
                    {prod.bestFor || "General Student Use"}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-400">
                    {prod.pros && prod.pros.length > 0 ? prod.pros[0] : "Check Amazon for details"}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <a
                      href={url}
                      target="_blank"
                      rel={AFFILIATE_REL}
                      onClick={() => trackAffiliateClick(prod.id, categorySlug || prod.category, guideSlug)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all whitespace-nowrap"
                    >
                      <span>Check Price</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
