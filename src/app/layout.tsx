import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SciMSPT | Scientific Computing Investment Platform",
  description: "SciMSPT Foresight Mesh - The GitHub for Scientific Computing. Cross-volume investment recommender and discovery platform for scientific research projects.",
  keywords: [
    "SciMSPT", 
    "Scientific Computing", 
    "Investment Platform", 
    "Research Discovery", 
    "Foresight Mesh", 
    "Quantum Computing", 
    "Genomics Platform", 
    "AI Development", 
    "Next.js", 
    "TypeScript",
    "Enterprise Technology"
  ],
  authors: [{ name: "SciMSPT Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "SciMSPT | Scientific Computing Investment Platform",
    description: "Cross-volume investment recommender for scientific computing projects - The Future of Scientific Discovery",
    url: "https://testdemoqwenai2025-creator.github.io/DemoSciMSPT/",
    siteName: "SciMSPT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SciMSPT | Scientific Computing Investment Platform",
    description: "The GitHub for Scientific Computing - Advanced Research Investment Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
