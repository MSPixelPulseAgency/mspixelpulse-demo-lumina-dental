import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver, ScrollProgress } from "@/components/motion";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "LUMINA Dental Studio | Brampton Dental Website Demo",
    template: "%s | LUMINA Dental Studio Demo",
  },
  description:
    "A fictional Brampton dental studio website by MSPixelPulse. Explore family and cosmetic care concepts and a safe demonstration appointment experience.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "LUMINA Dental Studio — A Brighter Smile Begins Here",
    description:
      "A premium dental-clinic website concept by MSPixelPulse. Fictional studio, demonstration only.",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "LUMINA Dental Studio — portfolio website demonstration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMINA Dental Studio — Website Demo",
    images: ["/brand/og-image.png"],
  },
  icons: { icon: "/brand/favicon.svg", apple: "/brand/app-icon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link
          rel="preload"
          href="/fonts/dm-sans-latin-400-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/cormorant-garamond-latin-500-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
