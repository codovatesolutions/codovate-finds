"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Download, Sparkles, Image as ImageIcon, RefreshCw, Layout, Type, Palette } from "lucide-react";
import { GUIDES } from "@/lib/data/guides";

export default function PinStudioPage() {
  const [selectedGuideSlug, setSelectedGuideSlug] = useState(GUIDES[0].slug);
  const [headline, setHeadline] = useState(GUIDES[0].title);
  const [subtitle, setSubtitle] = useState(GUIDES[0].subtitle);
  const [ctaText, setCtaText] = useState("Read Full Setup Guide &rarr;");
  const [templateStyle, setTemplateStyle] = useState<"slate" | "ocean" | "neon">("slate");
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sync state when article selection changes
  const handleGuideChange = (slug: string) => {
    setSelectedGuideSlug(slug);
    const guide = GUIDES.find((g) => g.slug === slug);
    if (guide) {
      setHeadline(guide.title);
      setSubtitle(guide.subtitle);
    }
  };

  // Handle local image upload for background
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => setBgImage(img);
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  // Helper function to wrap text cleanly on canvas
  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = text.split(" ");
    let line = "";
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + " ";
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
    return currentY + lineHeight;
  };

  // Render Canvas (1000 x 1500)
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 1000;
    const height = 1500;

    canvas.width = width;
    canvas.height = height;

    // 1. Render Background
    if (bgImage) {
      ctx.drawImage(bgImage, 0, 0, width, height);
      // Dark overlay for text legibility
      ctx.fillStyle = "rgba(11, 15, 23, 0.75)";
      ctx.fillRect(0, 0, width, height);
    } else {
      if (templateStyle === "slate") {
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, "#0b0f17");
        grad.addColorStop(0.5, "#1e293b");
        grad.addColorStop(1, "#0b0f17");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (templateStyle === "ocean") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#030712");
        grad.addColorStop(0.4, "#1e3a8a");
        grad.addColorStop(1, "#0f172a");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      } else if (templateStyle === "neon") {
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, "#18181b");
        grad.addColorStop(0.5, "#312e81");
        grad.addColorStop(1, "#09090b");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }
    }

    // 2. Draw Subtle Pattern Lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 2;
    for (let i = 0; i < height; i += 60) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }

    // 3. Draw Header Branding Box
    ctx.fillStyle = templateStyle === "ocean" ? "#2563eb" : "#3b82f6";
    ctx.beginPath();
    ctx.roundRect(80, 90, 80, 80, 20);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "900 42px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CF", 120, 146);

    ctx.textAlign = "left";
    ctx.font = "bold 36px Inter, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Codovate Finds", 185, 128);

    ctx.font = "500 24px Inter, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("codovatefinds.com • Smart Buying Guides", 185, 162);

    // 4. Category / Tag Pill
    ctx.fillStyle = "rgba(37, 99, 235, 0.25)";
    ctx.strokeStyle = "#3b82f6";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(80, 240, 360, 60, 30);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#60a5fa";
    ctx.font = "bold 26px Inter, sans-serif";
    ctx.fillText("STUDENT SETUP GUIDE", 110, 278);

    // 5. Card Container for Headline & Text
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(51, 65, 85, 0.8)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect(70, 340, 860, 960, 40);
    ctx.fill();
    ctx.stroke();

    // 6. Draw Headline
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px Inter, sans-serif";
    wrapText(ctx, headline, 120, 440, 760, 82);

    // 7. Accent Divider Bar
    ctx.fillStyle = templateStyle === "neon" ? "#c084fc" : "#3b82f6";
    ctx.fillRect(120, 880, 160, 10);

    // 8. Draw Subtitle
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "400 34px Inter, sans-serif";
    wrapText(ctx, subtitle, 120, 940, 760, 50);

    // 9. CTA Button Box
    ctx.fillStyle = templateStyle === "neon" ? "#7c3aed" : "#2563eb";
    ctx.beginPath();
    ctx.roundRect(120, 1170, 760, 90, 24);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 38px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(ctaText.replace("&rarr;", "→"), 500, 1228);

    // 10. Footer Website Branding
    ctx.fillStyle = "#94a3b8";
    ctx.font = "600 24px Inter, sans-serif";
    ctx.fillText("codovatefinds.com", 500, 1420);
  }, [headline, subtitle, ctaText, templateStyle, bgImage]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `codovate-pin-${selectedGuideSlug}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Tool Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-blue-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Internal Growth Tool &bull; 100% Free</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Pinterest Pin Studio
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Create high-converting 1000 × 1500 px vertical graphics for Pinterest pins in seconds. Client-side processing ensures fast rendering and crisp PNG downloads.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          {/* Article Select */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Layout className="w-4 h-4 text-blue-400" />
              Select Article
            </label>
            <select
              value={selectedGuideSlug}
              onChange={(e) => handleGuideChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            >
              {GUIDES.map((g) => (
                <option key={g.slug} value={g.slug}>
                  {g.title}
                </option>
              ))}
            </select>
          </div>

          {/* Template Preset */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-indigo-400" />
              Design Template
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setTemplateStyle("slate")}
                className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                  templateStyle === "slate"
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Minimal Slate
              </button>
              <button
                type="button"
                onClick={() => setTemplateStyle("ocean")}
                className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                  templateStyle === "ocean"
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Ocean Blue
              </button>
              <button
                type="button"
                onClick={() => setTemplateStyle("neon")}
                className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                  templateStyle === "neon"
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Neon Gradient
              </button>
            </div>
          </div>

          {/* Custom Headline */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Type className="w-4 h-4 text-emerald-400" />
              Headline Text
            </label>
            <textarea
              rows={2}
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Subtitle */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Subtitle / Supporting Text
            </label>
            <textarea
              rows={2}
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* CTA Button Text */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              CTA Button Label
            </label>
            <input
              type="text"
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Optional Image Upload */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-blue-400" />
              Optional Background Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-950 file:text-blue-300 hover:file:bg-blue-900"
            />
            {bgImage && (
              <button
                type="button"
                onClick={() => setBgImage(null)}
                className="text-xs text-rose-400 hover:underline inline-flex items-center gap-1 pt-1"
              >
                <RefreshCw className="w-3 h-3" /> Clear Uploaded Background
              </button>
            )}
          </div>

          {/* Download Trigger */}
          <button
            onClick={handleDownload}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-900/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download PNG (1000 × 1500)</span>
          </button>
        </div>

        {/* Live Canvas Preview Column */}
        <div className="lg:col-span-6 flex flex-col items-center space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Live Preview (1000 × 1500 Canvas)
          </div>
          <div className="w-full max-w-[400px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xs text-slate-400 text-center">
            High-res output will render cleanly at 1000 × 1500 px on download.
          </p>
        </div>
      </div>
    </div>
  );
}
