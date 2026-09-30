import { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Codovate Finds.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Terms of Service</h1>
        <p className="text-xs text-slate-400">Effective Date: September 30, 2026</p>
      </div>

      <div className="space-y-6 text-sm sm:text-base leading-relaxed bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing {SITE_NAME}, you agree to comply with and be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">2. Content &amp; Disclaimer</h2>
          <p>
            All content on {SITE_NAME} is provided for informational and educational purposes. While we strive for accuracy, product specs, prices, and availability on third-party retailers like Amazon are controlled by the respective seller and may change at any time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">3. Affiliate Relationship</h2>
          <p>
            {SITE_NAME} participates in the Amazon Associates program. Purchases made through qualifying links generate commissions for our platform. We do not manufacture, sell, or ship products directly.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
          <p>
            The branding, design, original buying text, and Pin Studio tools are intellectual property of {SITE_NAME}.
          </p>
        </section>
      </div>
    </div>
  );
}
