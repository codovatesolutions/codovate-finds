"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle, Sparkles } from "lucide-react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="my-12 sm:my-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 border border-blue-900/40 p-8 sm:p-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Setup &amp; Student Finds Weekly</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Build a better setup without overspending
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get practical buying guides, budget desk setups, and essential college gear picks delivered straight to your inbox. No spam ever.
          </p>

          {submitted ? (
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2 animate-in fade-in duration-300">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>You&apos;re subscribed! We will notify you when new setup guides drop.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 pt-2 max-w-lg mx-auto"
            >
              <div className="relative w-full">
                <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your college or personal email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 text-sm transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 hover:scale-105 transition-all whitespace-nowrap"
              >
                Join Newsletter
              </button>
            </form>
          )}

          <p className="text-[11px] text-slate-400">
            Placeholder ready for integration with Resend, ConvertKit, or Mailchimp.
          </p>
        </div>
      </div>
    </section>
  );
}
