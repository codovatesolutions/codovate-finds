import { Metadata } from "next";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Codovate Finds. Information on data collection, Google Analytics, and cookies.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
        <p className="text-xs text-slate-400">Effective Date: September 30, 2026</p>
      </div>

      <div className="space-y-6 text-sm sm:text-base leading-relaxed bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">1. Overview</h2>
          <p>
            {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy outlines how we handle data when you visit our website and read our buying guides.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">2. Analytics &amp; Cookies</h2>
          <p>
            We use Google Analytics 4 (GA4) to analyze site traffic, page views, and outbound affiliate link clicks. GA4 collects anonymized telemetry data such as browser type, device type, referral source, and duration of visit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">3. Third-Party Links</h2>
          <p>
            Our guides contain external links to Amazon India and third-party websites. Once you leave {SITE_NAME}, your activity is governed by the privacy policies of those destination sites.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">4. Newsletter &amp; Email Data</h2>
          <p>
            If you voluntarily subscribe to our newsletter or send us a message via our contact form, we use your email solely to reply to your inquiry or send setup updates. We never sell or share email lists.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-white">5. Contact Information</h2>
          <p>
            For privacy questions or data deletion requests, contact us at our configured support email.
          </p>
        </section>
      </div>
    </div>
  );
}
