import { Metadata } from "next";
import { ShieldCheck, Info, ExternalLink } from "lucide-react";
import { AMAZON_ASSOCIATE_TAG, AMAZON_ASSOCIATE_STATEMENT } from "@/lib/affiliate";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Affiliate Disclosure & Transparency Policy",
  description:
    "Read our full affiliate disclosure. Codovate Finds participates in the Amazon Associates Program and earns commissions from qualifying purchases at no extra cost to you.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Trust &amp; Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Affiliate Disclosure &amp; Policy
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Complete transparency regarding how {SITE_NAME} operates, earns money, and maintains strict editorial independence.
        </p>
      </div>

      <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        {/* Statement Box */}
        <div className="p-6 rounded-3xl bg-blue-950/40 border border-blue-900/60 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" />
            Official Amazon Associate Statement
          </h2>
          <blockquote className="p-4 rounded-xl bg-slate-950/80 border-l-4 border-blue-500 text-slate-100 font-semibold text-base">
            &quot;{AMAZON_ASSOCIATE_STATEMENT}&quot;
          </blockquote>
          <p className="text-xs text-slate-300">
            Our registered Amazon Associates Store ID is: <code className="text-blue-300 font-bold bg-slate-900 px-2 py-0.5 rounded">{AMAZON_ASSOCIATE_TAG}</code>
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            How Affiliate Links Work
          </h2>
          <p>
            Some links on {SITE_NAME} are affiliate links. When you click on an Amazon link for a product recommended in our buying guides and make a purchase, Amazon pays us a small percentage commission as an affiliate referral fee.
          </p>
          <p className="font-semibold text-white">
            Crucially: Purchasing through an affiliate link does NOT increase the price you pay. You pay the exact same price as any other customer on Amazon India.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            What We Do NOT Do
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">✕</span>
              <span>We do not scrape Amazon for automated fake product listings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">✕</span>
              <span>We do not copy customer reviews or fabricate star ratings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">✕</span>
              <span>We do not display fake stock messages, fake timers, or misleading cloaked redirect links.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">✕</span>
              <span>We do not publish fixed product prices that become outdated as retailer prices fluctuate.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Link Attributes &amp; Identification
          </h2>
          <p>
            All outbound commercial affiliate links on {SITE_NAME} use standardized, compliant link attributes:
          </p>
          <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-blue-300 overflow-x-auto">
            rel=&quot;nofollow sponsored noopener&quot; target=&quot;_blank&quot;
          </pre>
          <p className="text-xs text-slate-400">
            This ensures full compliance with search engine guidelines (Google SEO guidelines) and FTC/consumer protection regulations.
          </p>
        </div>

        <div className="pt-4 flex justify-between items-center text-xs text-slate-400">
          <span>Last updated: September 30, 2026</span>
          <a
            href="https://affiliate-program.amazon.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <span>Amazon Associates India Program</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
