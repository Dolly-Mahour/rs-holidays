import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RS Holidays - Curated Holiday Packages & Adventure Trips",
    template: "%s | RS Holidays",
  },
  description:
    "Plan your perfect vacation with RS Holidays. Explore curated holiday packages, trekking adventures, weekend getaways, and international trips across India and beyond.",
  keywords: [
    "RS Holidays",
    "Holiday packages India",
    "Trekking in Himachal",
    "Ladakh tour packages",
    "Weekend getaways from Delhi",
    "Kashmir tour packages",
    "Adventure trips",
    "Travel agency India",
    "Curated tour itineraries",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rsholidays.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RS Holidays - Curated Holiday Packages & Adventure Trips",
    description:
      "Plan your perfect vacation with RS Holidays. Explore curated holiday packages, trekking adventures, and memorable travel experiences.",
    url: "/",
    siteName: "RS Holidays",
    images: [
      {
        url: "/images/banner-bg.png",
        width: 1200,
        height: 630,
        alt: "RS Holidays - Curated Travel Packages",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Holidays - Curated Holiday Packages & Adventure Trips",
    description:
      "Plan your perfect vacation with RS Holidays. Explore curated holiday packages, trekking adventures, and memorable travel experiences.",
    images: ["/images/banner-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { CurrencyProvider } from "@/src/context/CurrencyContext";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "RS Holidays",
  url: "https://rsholidays.com",
  logo: "https://rsholidays.com/images/RS-logo.png",
  image: "https://rsholidays.com/images/banner-bg.png",
  description:
    "Curated holiday packages, mountain expeditions, weekend getaways, and domestic & international tour packages.",
  telephone: "+91-9876543210",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://facebook.com/rsholidays",
    "https://instagram.com/rsholidays",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CurrencyProvider>
          <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <main className="w-100">{children}</main>
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
