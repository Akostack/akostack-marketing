import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AKOStack | Secure Enterprise AI Knowledge Platform",
  description: "AKOStack transforms scattered enterprise knowledge into secure, grounded AI answers using semantic search, intelligent retrieval, enterprise-grade security, and source citations.",
  keywords: [
    "Enterprise AI",
    "Retrieval-Augmented Generation",
    "RAG",
    "Semantic Search",
    "Grounded AI",
    "Enterprise Search",
    "Knowledge Management",
    "Secure AI",
    "Workspace Isolation"
  ],
  authors: [{ name: "AKOStack Team", url: "https://akostack.com" }],
  metadataBase: new URL("https://akostack.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AKOStack | Secure Enterprise AI Knowledge Platform",
    description: "Transform scattered enterprise knowledge into secure, grounded AI answers with enterprise-grade security and source citations.",
    url: "https://akostack.com",
    siteName: "AKOStack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AKOStack - From Chaos to Clarity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AKOStack | Secure Enterprise AI Knowledge Platform",
    description: "Transform scattered enterprise knowledge into secure, grounded AI answers with enterprise-grade security and source citations.",
    images: ["/og-image.png"],
    creator: "@akostack",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
