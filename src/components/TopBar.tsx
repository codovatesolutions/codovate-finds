import Link from "next/link";
import { Info } from "lucide-react";
import { AMAZON_ASSOCIATE_STATEMENT } from "@/lib/affiliate";

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-300 border-b border-slate-800 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-1.5 font-medium">
          <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>
            Affiliate Disclosure: {AMAZON_ASSOCIATE_STATEMENT}
          </span>
        </div>
        <Link
          href="/affiliate-disclosure"
          className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors shrink-0"
        >
          Learn details & policies &rarr;
        </Link>
      </div>
    </div>
  );
}
