"use client";

import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/config";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Recommendation Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Generate mailto link fallback
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Codovate Contact] ${subject} - ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Contact Codovate Finds
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have a question about a buying guide, product recommendation, or setup idea? Send us a message or reach out via email.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
        {/* Email Direct Info */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <span className="text-slate-400 block">Configured Support Email</span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-slate-100 font-bold hover:text-blue-400 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="px-3.5 py-1.5 rounded-xl bg-blue-950 border border-blue-800 text-blue-300 font-semibold hover:bg-blue-900 transition-all shrink-0"
          >
            Email Directly &rarr;
          </a>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 space-y-2 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold">Mail Application Launched!</h3>
            <p className="text-xs text-slate-300">
              Your default email client opened with your formatted message to {CONTACT_EMAIL}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              >
                <option value="Recommendation Inquiry">Product Recommendation Question</option>
                <option value="Guide Suggestion">New Setup Guide Suggestion</option>
                <option value="Affiliate Inquiry">Affiliate / Partnership</option>
                <option value="General Question">General Feedback</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Your Message *
              </label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message or setup question here..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-900/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        <p className="text-[11px] text-slate-400 text-center">
          Architected to connect seamlessly with Resend or SendGrid when email API credentials exist.
        </p>
      </div>
    </div>
  );
}
