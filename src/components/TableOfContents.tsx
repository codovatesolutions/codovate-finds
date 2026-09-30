"use client";

import { List } from "lucide-react";

interface TOCProps {
  items: { id: string; title: string }[];
}

export default function TableOfContents({ items }: TOCProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 my-6 shadow-md">
      <div className="flex items-center gap-2 text-slate-100 font-bold text-sm mb-3">
        <List className="w-4 h-4 text-blue-400" />
        <span>Table of Contents</span>
      </div>
      <nav className="space-y-1.5 text-xs sm:text-sm">
        {items.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-slate-300 hover:text-blue-400 hover:translate-x-1 transition-all py-1 border-l-2 border-slate-800 hover:border-blue-500 pl-3"
          >
            <span className="text-slate-400 mr-2">{idx + 1}.</span>
            {item.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
