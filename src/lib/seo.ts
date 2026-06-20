import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from "./constants";

export interface PageSEOProps {
  title: string;
  description?: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  index?: boolean;
}

export function getOpenGraphImages(alt = SITE_NAME) {
  return [
    {
      url: OG_IMAGE,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt,
      type: "image/webp",
    },
  ] as const;
}

export function generatePageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  keywords = [],
  noIndex = false,
  index,
}: PageSEOProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === "/"
      ? title
      : `${title} | ${SITE_NAME}`;
  const ogImages = getOpenGraphImages(fullTitle);

  return {
    title: fullTitle,
    description,
    keywords: [
      "saat hesaplama",
      "saat farkı hesaplama",
      "çalışma saati hesaplama",
      "tarih hesaplama",
      "dakika hesaplama",
      ...keywords,
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [...ogImages],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: index ?? true,
          follow: true,
          googleBot: {
            index: index ?? true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

/** Legal, policy, and author profile pages — not for search indexing. */
export function generateLegalPageMetadata(
  props: Omit<PageSEOProps, "noIndex" | "index">
): Metadata {
  return generatePageMetadata({ ...props, noIndex: true });
}

/** Company pages that should remain indexed (about, contact). */
export function generateIndexablePageMetadata(
  props: Omit<PageSEOProps, "noIndex" | "index">
): Metadata {
  return generatePageMetadata({ ...props, noIndex: false, index: true });
}
