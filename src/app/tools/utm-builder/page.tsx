"use client";

import { useState, useMemo } from "react";
import { Link2, Copy, Check, Sparkles, RefreshCw } from "lucide-react";
import { SITE_URL } from "@/lib/config";

export default function UTMBuilderPage() {
  const [targetUrl, setTargetUrl] = useState(`${SITE_URL}/guides/best-laptop-stands-for-students`);
  const [source, setSource] = useState("pinterest");
  const [medium, setMedium] = useState("organic");
  const [campaign, setCampaign] = useState("student-setup-2026");
  const [content, setContent] = useState("laptop-stand-pin-1");
  const [term, setTerm] = useState("");
  const [copied, setCopied] = useState(false);

  const generatedUrl = useMemo(() => {
    if (!targetUrl) return "";
    try {
      const url = new URL(targetUrl);
      if (source) url.searchParams.set("utm_source", source);
      if (medium) url.searchParams.set("utm_medium", medium);
      if (campaign) url.searchParams.set("utm_campaign", campaign);
      if (content) url.searchParams.set("utm_content", content);
      if (term) url.searchParams.set("utm_term", term);
      return url.toString();
    } catch {
      return "Invalid Base URL";
    }
  }, [targetUrl, source, medium, campaign, content, term]);

  const handleCopy = () => {
    if (generatedUrl && generatedUrl !== "Invalid Base URL") {
      navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setTargetUrl(`${SITE_URL}/guides/best-laptop-stands-for-students`);
    setSource("pinterest");
    setMedium("organic");
    setCampaign("student-setup-2026");
    setContent("laptop-stand-pin-1");
    setTerm("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Marketing &amp; Growth Tool</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          UTM Campaign Link Builder
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Generate clean, trackable campaign URLs for Pinterest pins, newsletters, and social campaigns to monitor exact traffic sources in Google Analytics 4.
        </p>
      </div>

      {/* Main Form & Output */}
      <div className="space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="space-y-6">
          {/* Target URL */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Link2 className="w-4 h-4 text-blue-400" />
              Target Website / Guide URL *
            </label>
            <input
              type="url"
              required
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              placeholder="https://yourdomain.com/guides/..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Source */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Campaign Source (utm_source) *
              </label>
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="pinterest, google, newsletter"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
              <span className="text-[11px] text-slate-400 block">Default: pinterest</span>
            </div>

            {/* Medium */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Campaign Medium (utm_medium) *
              </label>
              <input
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                placeholder="organic, pin, email, cpc"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
              <span className="text-[11px] text-slate-400 block">Default: organic</span>
            </div>

            {/* Campaign Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Campaign Name (utm_campaign)
              </label>
              <input
                type="text"
                value={campaign}
                onChange={(e) => setCampaign(e.target.value)}
                placeholder="student_setup_promo"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Campaign Content (utm_content)
              </label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="pin_variant_a, banner_cta"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Generated Result Box */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Generated Campaign URL
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Defaults
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-blue-300 break-all leading-relaxed">
            {generatedUrl}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleCopy}
              disabled={!generatedUrl || generatedUrl === "Invalid Base URL"}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>URL Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Campaign URL</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
