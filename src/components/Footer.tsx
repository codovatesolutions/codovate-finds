import Link from "next/link";
import { AMAZON_ASSOCIATE_STATEMENT } from "@/lib/affiliate";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-md">
                CF
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Codovate Finds
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Smart finds for better study, work, and everyday setups. We build clear, practical buying guides tailored for Indian college students, engineering, and hostel setups.
            </p>
            <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80">
              {AMAZON_ASSOCIATE_STATEMENT}
            </div>
          </div>

          {/* Guides Col */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Featured Guides
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/guides" className="hover:text-blue-400 transition-colors">
                  All Buying Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/best-laptop-stands-for-students"
                  className="hover:text-blue-400 transition-colors"
                >
                  Best Laptop Stands Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/student-desk-setup-under-5000"
                  className="hover:text-blue-400 transition-colors"
                >
                  Desk Setup Under ₹5,000
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/engineering-student-essentials"
                  className="hover:text-blue-400 transition-colors"
                >
                  Engineering Student Gear
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/hostel-room-essentials"
                  className="hover:text-blue-400 transition-colors"
                >
                  Hostel Room Essentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Growth Tools & Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Tools & Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/tools/pin-studio" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span>Pinterest Pin Studio</span>
                  <span className="text-[10px] bg-blue-900 text-blue-200 px-1.5 py-0.2 rounded font-semibold">Tool</span>
                </Link>
              </li>
              <li>
                <Link href="/tools/utm-builder" className="hover:text-blue-400 transition-colors">
                  UTM Link Builder
                </Link>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Pinterest Page &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Disclosures */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Trust
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="hover:text-blue-400 transition-colors font-medium text-slate-300"
                >
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-blue-400 transition-colors text-xs text-slate-400">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} Codovate Finds. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Independent recommendation website. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </div>
        </div>
      </div>
    </footer>
  );
}
