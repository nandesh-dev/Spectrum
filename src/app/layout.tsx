import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Megrim } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import AnimatedStars from "@/components/AnimatedStars";
import BackgroundWrapper from "@/components/background/BackgroundWrapper";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";

import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const megrimFont = Megrim({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-megrim",
});

const Xeroda = localFont({
  src: "../../public/fonts/Xeroda.otf", // Correct path
  variable: "--font-Xeroda",
  display: "swap",
});

// Metadata configuration based on comprehensive SEO strategy
export const metadata: Metadata = {
  metadataBase: new URL("https://spectrum25.tech"),
  title: {
    default: "Spectrum'25",
    template: "%s | Spectrum Hackathon 2025",
  },
  description:
    "Join VIT Chennai's flagship hackathon on April 11-12, 2025. Organized by OSPC and CSED with sponsors including Devfolio, Polygon, and Radisson BLU.",
  keywords: [
    "Spectrum Hackathon 2025",
    "VIT Chennai hackathon",
    "coding competition Chennai",
    "student hackathon Tamil Nadu",
    "blockchain hackathon VIT",
    "AI hackathon Chennai 2025",
    "tech competition for students in Chennai",
  ],
  authors: [
    {
      name: "Open Source Programming Club (OSPC)",
      url: "https://ospcvitc.club",
    },
  ],
  creator: "Spectrum Hackathon Team",
  publisher: "VIT Chennai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spectrum25.tech/",
    title: "Spectrum Hackathon 2025 | VIT Chennai",
    description:
      "Join VIT Chennai's premier hackathon on April 11-12, 2025. Build innovative solutions with top tech sponsors including Devfolio, Polygon, and more.",
    siteName: "Spectrum Hackathon",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Spectrum Hackathon 2025 - VIT Chennai's Premier Coding Event",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://spectrum25.tech",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${megrimFont.variable} ${Xeroda.variable}`}
    >
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon configuration */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-black min-h-screen">
        {/* Performance Optimizer - Apply site-wide scroll optimizations */}
        <PerformanceOptimizer />

        {/* Site-wide Parallax Stars - Using a separate client component */}
        <AnimatedStars />

        <BackgroundWrapper>
          <ClientWrapper>
            {children}
            <Analytics />
          </ClientWrapper>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
