# Codovate Finds — Affiliate Content Platform

> **Smart finds for better study, work, and everyday setups.**  
> A professional Next.js 16 App Router affiliate-content application tailored for Indian college students, engineering undergrads, and hostel room setups.

---

## 🚀 1. Prerequisites
- **Node.js**: v18.17+ or v20+ or v24+
- **npm**: v9+ or v10+ / v11+
- **Amazon Associates Account**: Store ID (e.g. `codovateaffil-21`)

---

## 📦 2. Installation
```bash
git clone https://github.com/your-username/codovate-finds.git
cd codovate-finds
npm install
```

---

## 💻 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 4. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Supported Variables:
| Variable | Description | Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Base domain URL (no trailing slash) | `https://codovatefinds.com` |
| `NEXT_PUBLIC_SITE_NAME` | Website name | `Codovate Finds` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public contact email | `contact@codovatefinds.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_PINTEREST_VERIFICATION` | Pinterest domain claim meta tag code | `abcdef1234567890` |
| `ADMIN_PASSWORD` | Password for protected `/admin` portal | `codovate2026` |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional Supabase URL | `https://xyz.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional Supabase Anon key | `eyJhb...` |

---

## 🏗️ 5. Production Build
```bash
npm run build
npm run start
```

---

## ⚡ 6. Vercel Deployment
1. Push your repository to **GitHub**.
2. Log into **Vercel** and click **"Add New Project"**.
3. Import `codovate-finds`.
4. Configure **Environment Variables** in Vercel settings (e.g., `NEXT_PUBLIC_SITE_URL`, `ADMIN_PASSWORD`).
5. Click **Deploy**.

---

## 🌐 7. Custom Domain Configuration
1. In your Vercel Dashboard, navigate to **Settings &rarr; Domains**.
2. Add your domain (e.g. `codovatefinds.com` or `finds.codovate.com`).
3. Add the required DNS records (A record pointing to `76.76.21.21` or CNAME pointing to `cname.vercel-dns.com`) at your domain registrar (GoDaddy, Namecheap, Cloudflare).
4. Update `NEXT_PUBLIC_SITE_URL` in Vercel to match your final domain.

---

## 📌 8. Pinterest Verification
1. Log into your **Pinterest Business Account**.
2. Go to **Settings &rarr; Claimed Accounts &rarr; Claim Website**.
3. Select **Add HTML Tag** and copy the verification hash.
4. Set `NEXT_PUBLIC_PINTEREST_VERIFICATION` in Vercel environment variables.
5. Redeploy your site and click **Verify** in Pinterest.

---

## 📊 9. Google Analytics Setup
1. Create a Web Data Stream in **Google Analytics 4**.
2. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_ID` in your environment variables.
4. Outbound affiliate clicks (`affiliate_click`), guide views (`article_view`), and site search terms (`search`) will automatically stream to GA4.

---

## 🔍 10. Google Search Console Setup
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property as a **URL Prefix** or **Domain**.
3. Submit your XML Sitemap URL: `https://yourdomain.com/sitemap.xml`.

---

## 🛒 11. Amazon Associates Website Registration Reminder
> [!IMPORTANT]
> **ACTION REQUIRED FROM OWNER**
> You must register your domain URL (`https://yourdomain.com`) in your **Amazon Associates India Central Dashboard**:
> 1. Log into [Amazon Associates India](https://affiliate-program.amazon.in).
> 2. Go to **Account Settings &rarr; Edit Your Website And Mobile App List**.
> 3. Add your production domain URL.
> 4. Ensure your Store ID (`codovateaffil-21`) matches the tag configured in `src/lib/affiliate.ts`.

---

## 📝 12. How to Create or Edit Products
Product recommendations are stored centrally in `src/lib/data/products.ts`:
```typescript
{
  id: "prod-laptop-stand-01",
  name: "Featured Adjustable Ergonomic Laptop Stand",
  slug: "featured-adjustable-laptop-stand",
  category: "laptop-accessories",
  affiliateUrl: "https://link.amazon/B0iN6y6os",
  bestFor: "Students with compact study desks",
  summary: "A sturdy ventilated aluminum laptop stand...",
  pros: ["Height adjustable", "Ventilated", "Portable"],
  cons: ["Requires external keyboard"],
  verified: true,
  badge: "Top Pick"
}
```

---

## 📖 13. How to Create a New Guide
Guides are stored in `src/lib/data/guides.ts`:
```typescript
{
  slug: "my-new-guide-slug",
  title: "Guide Title",
  subtitle: "Guide Subtitle",
  description: "Meta description...",
  category: "desk-setup",
  publishedAt: "2026-09-30",
  updatedAt: "2026-09-30",
  readTime: "5 min read",
  isMonetized: true,
  products: [PRODUCTS[0]],
  toc: [{ id: "overview", title: "Overview" }],
  contentSections: [{ id: "overview", title: "Overview", content: "..." }],
  faqs: [{ question: "...", answer: "..." }]
}
```

---

## 🎨 14. How to Generate Pinterest Pins
1. Open your browser to `/tools/pin-studio`.
2. Select an article or enter custom headline and subtitle.
3. Choose a template style (**Minimal Slate**, **Ocean Blue**, or **Neon Gradient**).
4. Click **Download PNG (1000 × 1500)**.
