import Link from "next/link";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-blue-950/80 border border-blue-800/80 flex items-center justify-center text-blue-400 font-mono text-2xl font-bold shadow-xl">
        404
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-black text-white">Guide Page Not Found</h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          The setup guide or page you are looking for might have been moved, renamed, or does not exist.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/40 inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
        <Link
          href="/guides"
          className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
        >
          <Search className="w-4 h-4 text-blue-400" />
          <span>Explore All Guides</span>
        </Link>
      </div>
    </div>
  );
}
