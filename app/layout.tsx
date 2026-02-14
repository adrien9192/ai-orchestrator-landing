import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { allSchemas } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-orchestrator-landing.vercel.app'),
  
  title: "Formation AI Orchestrator | Orchestration Multi-LLM Production (€299)",
  description: "Templates production-ready testés 6 mois. 5 agents IA qui tournent 24/7 pour €73/mois. De zéro à production en 7-10 jours. Formation pratique FR.",
  
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
    title: "Formation AI Orchestrator | Templates Production-Ready (€299)",
    description: "5 agents IA qui tournent 24/7 depuis 6 mois. Templates complets. Formation pratique FR. Early Bird: 12/90 places restantes.",
    url: "https://ai-orchestrator-landing.vercel.app",
    siteName: "Formation AI Orchestrator",
    images: [
      {
        url: "/og-image.png", // TODO: Create 1200×630px image
        width: 1200,
        height: 630,
        alt: "Formation AI Orchestrator - Orchestration Multi-LLM Production - 5 agents testés 6 mois"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Formation AI Orchestrator | Templates Production-Ready",
    description: "5 agents IA testés 6 mois. Du chat au système en prod 24/7. €299 Early Bird (12/90 places).",
    images: ["/og-image.png"],
    creator: "@Pillaw_AI"
  },
  
  // Canonical URL
  alternates: {
    canonical: '/'
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
