import { Metadata } from "next";
import { ShieldCheck, Target, Sparkles } from "lucide-react";
import NewsletterBox from "@/components/NewsletterBox";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us — Independent Setup & Buying Guides",
  description:
    "Learn about Codovate Finds. Practical buying guides, student essentials, and affordable setup ideas for Indian college students, engineering, and hostel setups.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Independent Platform</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About {SITE_NAME}
        </h1>
        <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
          Smart finds for better study, work and everyday setups.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Our Mission &amp; Purpose
          </h2>
          <p>
            {SITE_NAME} was founded to simplify desk setups and daily buying decisions for Indian college students, engineering undergrads, work-from-home developers, and hostel residents.
          </p>
          <p>
            The modern internet is flooded with generic product listicles, automated affiliate scrapers, and inflated claims. Our mission is to provide clear, practical guidance focused on real desk dimensions, cable management, ergonomics, and honest price-to-utility ratios.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Who We Write For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-slate-100 mb-1">Indian College &amp; Hostel Students</h3>
              <p className="text-xs text-slate-400">
                Practical, durable gear tailored for small hostel rooms and shared study tables.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-slate-100 mb-1">Engineering &amp; CSE Undergrads</h3>
              <p className="text-xs text-slate-400">
                Ergonomic laptop elevation, silent optical mice, and multi-port USB hubs for coding.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-slate-100 mb-1">Budget Setup Builders</h3>
              <p className="text-xs text-slate-400">
                High-utility upgrades under ₹1,000 and complete desk setup roadmaps under ₹5,000.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-slate-100 mb-1">Work From Home Professionals</h3>
              <p className="text-xs text-slate-400">
                Flicker-free study lighting, surge protection, and desk decluttering tools.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Editorial Principles &amp; Trust
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>No Fabricated Testing:</strong> We never claim personal long-term use unless a product has actually been verified by our team.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>No Scraped Reviews:</strong> We do not automatically reuse scraped Amazon customer reviews or invent star ratings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span><strong>No Fake Urgency:</strong> You will never find fake countdown timers, fake stock counters, or false discount claims on our site.</span>
            </li>
          </ul>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
}
