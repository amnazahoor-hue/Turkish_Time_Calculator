import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { PagePreloader } from "@/components/layout/page-preloader";
import { getOpenGraphImages } from "@/lib/seo";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [...getOpenGraphImages()],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
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
      <body className={`${inter.variable} overflow-x-clip bg-background font-sans`}>
        <div className="site-shell flex min-h-screen flex-col bg-background">
          <PagePreloader />
          <Header />
          <main className="w-full flex-1 overflow-x-clip">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
