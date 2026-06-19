import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePreloader } from "@/components/layout/page-preloader";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/images/favicon.webp", type: "image/webp" }],
    apple: [{ url: "/images/apple-touch-icon.webp", type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <PagePreloader />
        <SchemaMarkup
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
