"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Sparkles, BookOpen } from "lucide-react";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "Student Essentials", href: "/category/student-essentials" },
    { label: "Desk Setup", href: "/category/desk-setup" },
    { label: "Laptop Accessories", href: "/category/laptop-accessories" },
    { label: "Hostel Essentials", href: "/category/hostel-essentials" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Codovate Finds Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-500 flex items-center justify-center text-white font-black tracking-tighter text-lg shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform">
                CF
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Codovate Finds
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                  Smart finds for better setups
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      active
                        ? "text-blue-400 bg-blue-950/40 border border-blue-800/50"
                        : "text-slate-300 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                aria-label="Search site"
              >
                <Search className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline-block text-xs font-medium text-slate-400">
                  Search guides...
                </span>
              </button>

              <Link
                href="/tools/pin-studio"
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-300 bg-blue-950/60 hover:bg-blue-900/70 border border-blue-800/60 rounded-xl transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Pin Studio
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                Navigation
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive(item.href)
                      ? "text-blue-400 bg-blue-950/60 border border-blue-800/60 font-semibold"
                      : "text-slate-200 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-800 mt-3 space-y-2">
                <Link
                  href="/tools/pin-studio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-blue-300 bg-blue-950/60 border border-blue-800/60"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    Pinterest Pin Studio
                  </span>
                  <span className="text-xs bg-blue-900 px-2 py-0.5 rounded text-blue-200">Free Tool</span>
                </Link>
                <Link
                  href="/tools/utm-builder"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    UTM Campaign Builder
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
