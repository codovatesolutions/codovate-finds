"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-rose-950/80 border border-rose-800 flex items-center justify-center text-rose-400">
        <AlertTriangle className="w-7 h-7" />
      </div>

      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          An unexpected error occurred while loading this page content.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md inline-flex items-center gap-2"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs inline-flex items-center gap-2"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
}
