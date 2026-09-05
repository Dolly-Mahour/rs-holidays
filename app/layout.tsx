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
  title: "RS Holidays",
  description:
    "Plan your perfect trip with RS Holidays. Explore customized holiday packages, family tours, honeymoon trips, corporate tours and memorable travel experiences.",
  // metadataBase: new URL("https://mywebsite.com"), ENTER THE SITE URL FOR THE BETTER CRAWLING -------------
  alternates: {
    canonical: "/",
  },
};

import { CurrencyProvider } from "@/src/context/CurrencyContext";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CurrencyProvider>
          <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
