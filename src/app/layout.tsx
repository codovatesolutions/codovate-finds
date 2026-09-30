import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_NAME, SITE_URL, PINTEREST_VERIFICATION } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Codovate Finds — Smart Buying Guides for Students & Tech Setups",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Smart finds for better study, work, and everyday setups. Practical, budget-aware buying guides for Indian college students, engineering, and hostel setups.",
  keywords: [
    "Codovate Finds",
    "laptop stands India",
    "student desk setup",
    "hostel room essentials",
    "college tech accessories",
    "engineering student tools",
    "budget study setup",
  ],
  authors: [{ name: "Codovate Finds Editorial Team" }],
  creator: "Codovate Finds",
  publisher: "Codovate Finds",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Codovate Finds — Smart Buying Guides for Students & Tech Setups",
    description:
      "Practical buying guides, student essentials, and affordable setup ideas for study, work, and everyday life in India.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Codovate Finds — Smart Buying Guides for Students & Tech",
    description: "Practical buying guides and budget desk setups for college students in India.",
  },
  ...(PINTEREST_VERIFICATION
    ? {
        other: {
          "p:domain_verify": PINTEREST_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: "Independent recommendation platform providing smart buying guides for Indian college students.",
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/guides?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-IN" className={`${inter.variable} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
        <GoogleAnalytics />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
