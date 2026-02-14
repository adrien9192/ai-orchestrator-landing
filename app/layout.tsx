import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { allSchemas } from "@/lib/schema";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-orchestrator-landing.vercel.app'),
  
  title: "Formation AI | Automatisez vos processus métier avec l'IA",
  description: "Orchestration multi-LLM production-ready. Automatisez vos processus métier avec nos agents IA testés. Formation pratique, templates production-ready. Essai gratuit.",
  
  keywords: [
    "ai agents",
    "multi-llm",
    "formation ia",
    "orchestration",
    "agents autonomes",
    "claude",
    "openai",
    "anthropic",
    "mistral",
    "google gemini",
    "formation pratique",
    "templates production",
    "agents ia français"
  ],
  
  authors: [{ name: "Adrien Laine", url: "https://github.com/adrienlaine" }],
  creator: "Adrien Laine",
  publisher: "Pilow AI",
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Formation AI | Automatisez vos processus métier",
    description: "Agents IA testés en production. Templates production-ready. Formation pratique. Essai gratuit.",
    url: "https://ai-orchestrator-landing.vercel.app",
    siteName: "Formation AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Formation AI - Automatisez vos processus métier avec l'IA"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Formation AI | Automatisez vos processus",
    description: "Agents IA production-ready. Formation pratique. Essai gratuit.",
    images: ["/og-image.png"],
    creator: "@Pillaw_AI"
  },
  
  // Canonical URL
  alternates: {
    canonical: '/'
  },
  
  // Icons
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png'
  },
  
  // Verification (add when available)
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
  
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
            
            // Track page load time for exit analysis
            window.pageLoadTime = Date.now();
          `}
        </Script>
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
