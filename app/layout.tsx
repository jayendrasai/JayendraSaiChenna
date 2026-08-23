import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/constants/site";
import { Navbar } from "@/components/navbar";
import { AppErrorBoundary } from "@/components/common/error-boundary";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: siteConfig.title, description: siteConfig.heroSubheadline, keywords: [...siteConfig.keywords], openGraph: { title: siteConfig.title, description: siteConfig.heroSubheadline, url: siteConfig.url, siteName: siteConfig.name, type: "website" }, twitter: { card: "summary", title: siteConfig.title, description: siteConfig.heroSubheadline }, icons: { icon: "/icon.svg" } };
export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body className="min-h-screen bg-background font-sans text-foreground antialiased"><AppErrorBoundary><Navbar />{children}</AppErrorBoundary><Analytics /><SpeedInsights /></body></html>;
}
