"use client";

import { useState, useEffect, FormEvent } from "react";
import { Lock, LogOut, CheckCircle2, AlertCircle, Edit, ExternalLink, ShieldCheck, Database } from "lucide-react";
import { GUIDES } from "@/lib/data/guides";
import { PRODUCTS } from "@/lib/data/products";
import { Guide, Product } from "@/lib/types";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"articles" | "products" | "database">("articles");

  // In-memory editable data state
  const [articlesList, setArticlesList] = useState<Guide[]>(GUIDES);
  const [productsList, setProductsList] = useState<Product[]>(PRODUCTS);

  // Edit modal state
  const [editingArticle, setEditingArticle] = useState<Guide | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/admin/auth")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setIsAuthenticated(data.authenticated);
      })
      .catch(() => {
        if (isMounted) setIsAuthenticated(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setError(data.message || "Invalid admin password");
      }
    } catch {
      setError("Network error logging in");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setIsAuthenticated(false);
  };

  const toggleProductVerified = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, verified: !p.verified } : p))
    );
  };

  const handleSaveArticleMetadata = (e: FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;
    setArticlesList((prev) =>
      prev.map((g) => (g.slug === editingArticle.slug ? editingArticle : g))
    );
    setEditingArticle(null);
  };

  const handleSaveProductMetadata = (e: FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setProductsList((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
  };

  if (isAuthenticated === null) {
    return (
      <div className="max-w-md mx-auto my-24 p-8 text-center text-slate-400">
        Checking authentication status...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mx-auto">
            <Lock className="w-6 h-6" />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-white">Protected Admin Portal</h1>
            <p className="text-xs text-slate-400">
              Enter your environment password (ADMIN_PASSWORD) to manage metadata &amp; recommendations.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Admin Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter ADMIN_PASSWORD..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition-all"
            >
              Authenticate &amp; Access Dashboard
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center">
            Set <code className="text-blue-300 font-mono">ADMIN_PASSWORD</code> in your Vercel or environment settings.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Content Architecture Portal
          </span>
          <h1 className="text-3xl font-black text-white">Admin Management Dashboard</h1>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit Admin</span>
        </button>
      </div>

      {/* Database Persistence Status Banner */}
      <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-900/60 flex items-center justify-between gap-4 text-xs text-amber-300">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            <strong>Database Status:</strong> Persistent database integration not configured — In-Memory Demo Mode. Edits reflect in current active session.
          </span>
        </div>
        <button
          onClick={() => setActiveTab("database")}
          className="px-3 py-1 rounded-xl bg-amber-900/60 border border-amber-700 hover:bg-amber-800 text-white font-semibold shrink-0"
        >
          Setup Supabase &rarr;
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-2 text-xs">
        <button
          onClick={() => setActiveTab("articles")}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            activeTab === "articles"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          Articles ({articlesList.length})
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            activeTab === "products"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          Affiliate Products ({productsList.length})
        </button>
        <button
          onClick={() => setActiveTab("database")}
          className={`px-4 py-2 rounded-xl font-bold transition-all ${
            activeTab === "database"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-slate-900 text-slate-400 hover:text-white"
          }`}
        >
          Database / Supabase Integration
        </button>
      </div>

      {/* Tab 1: Articles Manager */}
      {activeTab === "articles" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Seeded Guides Metadata</h2>
            <span className="text-xs text-slate-400">
              Edit SEO title, meta description, and Pinterest tags
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Guide Title</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">SEO / Pinterest Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {articlesList.map((g) => (
                  <tr key={g.slug} className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-100 max-w-xs truncate">
                      {g.title}
                    </td>
                    <td className="p-4 text-slate-400">{g.category}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Configured
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setEditingArticle(g)}
                        className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-800 text-blue-300 hover:bg-blue-900 font-semibold inline-flex items-center gap-1"
                      >
                        <Edit className="w-3 h-3" /> Edit Metadata
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Products Manager */}
      {activeTab === "products" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Affiliate Products &amp; Links</h2>
            <span className="text-xs text-slate-400">
              Tag: <code className="text-blue-300 font-bold">codovateaffil-21</code>
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Affiliate URL</th>
                  <th className="p-4">Recommendation Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {productsList.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-100 max-w-xs truncate">
                      {p.name}
                    </td>
                    <td className="p-4 text-slate-400">{p.category}</td>
                    <td className="p-4 font-mono text-blue-400 max-w-xs truncate">
                      <a href={p.affiliateUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                        <span>{p.affiliateUrl}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => toggleProductVerified(p.id)}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          p.verified
                            ? "bg-emerald-950 border border-emerald-800 text-emerald-300"
                            : "bg-amber-950 border border-amber-800 text-amber-300"
                        }`}
                      >
                        {p.verified ? "Verified Recommendation" : "Featured Recommendation"}
                      </button>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setEditingProduct(p)}
                        className="px-3 py-1.5 rounded-lg bg-blue-950 border border-blue-800 text-blue-300 hover:bg-blue-900 font-semibold inline-flex items-center gap-1"
                      >
                        <Edit className="w-3 h-3" /> Edit Product
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Database / Supabase Info */}
      {activeTab === "database" && (
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Database Integration Architecture</h2>
              <p className="text-xs text-slate-400">
                Supabase / PostgreSQL connection status and instructions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-3 leading-relaxed">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Public Website Operating Mode: High-Performance Static/JSON Fallback</span>
            </div>
            <p>
              The public website operates with zero database dependencies. If persistent dynamic edits from the web admin panel are required in production, populate these environment variables in your Vercel deployment:
            </p>
            <pre className="p-3 rounded-xl bg-slate-900 font-mono text-[11px] text-blue-300">
              NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co{"\n"}
              NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key{"\n"}
              SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
            </pre>
          </div>
        </div>
      )}

      {/* Edit Article Modal */}
      {editingArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white">
              Edit Article Metadata: {editingArticle.title}
            </h3>
            <form onSubmit={handleSaveArticleMetadata} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">SEO Meta Title</label>
                <input
                  type="text"
                  value={editingArticle.metaTitle || editingArticle.title}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, metaTitle: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">SEO Meta Description</label>
                <textarea
                  rows={2}
                  value={editingArticle.metaDescription || editingArticle.description}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, metaDescription: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Pinterest Share Title</label>
                <input
                  type="text"
                  value={editingArticle.pinterestTitle || editingArticle.title}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, pinterestTitle: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Pinterest Share Description</label>
                <textarea
                  rows={2}
                  value={editingArticle.pinterestDescription || editingArticle.description}
                  onChange={(e) =>
                    setEditingArticle({ ...editingArticle, pinterestDescription: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingArticle(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold"
                >
                  Save Article Metadata
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white">
              Edit Product: {editingProduct.name}
            </h3>
            <form onSubmit={handleSaveProductMetadata} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">Product Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, name: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Amazon Affiliate URL</label>
                <input
                  type="url"
                  value={editingProduct.affiliateUrl}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, affiliateUrl: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 font-mono text-blue-300"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">Best For Badge</label>
                <input
                  type="text"
                  value={editingProduct.bestFor || ""}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, bestFor: e.target.value })
                  }
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold"
                >
                  Save Product Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
