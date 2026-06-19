import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface LegalMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function createLegalMetadata({
  title,
  description,
  path,
  keywords = [],
}: LegalMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    keywords: [...siteConfig.keywords.slice(0, 4), ...keywords],
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: "/branding/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${title} — ${siteConfig.name}`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: ["/branding/og-image.png"],
    },
  };
}

export const LEGAL_LAST_UPDATED = "May 2026";
