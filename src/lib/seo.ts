import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_LOGO,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  FOOTER_SOCIAL_LINKS,
} from "./constants";
import { AUTHOR } from "./legal-pages-config";

/** Backend-managed media metadata for structured data. */
export const HERO_VIDEO_SCHEMA = {
  name: "Saat Hesaplama — Ana Sayfa Tanıtım Videosu",
  description:
    "Saat Hesaplama platformunun ana sayfa arka plan videosu; zaman hesaplama aracının görsel tanıtımını sunar.",
  mp4Path: "/hero-background.mp4",
  webmPath: "/hero-background.webm",
  thumbnailPath: "/branding/og-image.webp",
  duration: "PT12S",
  uploadDate: "2024-06-01",
} as const;

export const CONTENT_SCHEMA_DATES = {
  datePublished: "2024-06-01",
  dateModified: "2026-06-19",
} as const;

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

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${SITE_LOGO}`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TR",
      addressLocality: "İstanbul",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@saathesaplama.com",
      url: `${SITE_URL}/iletisim`,
      availableLanguage: "Turkish",
    },
    sameAs: FOOTER_SOCIAL_LINKS.map((link) => link.href),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${SITE_LOGO}`,
    },
  };
}

export type PageSchemaType = "WebPage" | "ProfilePage";

export interface WebPageSchemaOptions {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  hasBreadcrumb?: boolean;
  schemaType?: PageSchemaType;
  /** ProfilePage — person @id */
  mainEntityId?: string;
  /** WebPage — linked tool/application @id */
  mainEntityRef?: string;
  primaryImage?: string;
  primaryImageWidth?: number;
  primaryImageHeight?: number;
  speakableSelectors?: string[];
  aboutTopic?: string;
  includeAuthor?: boolean;
}

export function generateWebPageSchema({
  name,
  description,
  path,
  datePublished,
  dateModified,
  hasBreadcrumb = false,
  schemaType = "WebPage",
  mainEntityId,
  mainEntityRef,
  primaryImage,
  primaryImageWidth,
  primaryImageHeight,
  speakableSelectors,
  aboutTopic,
  includeAuthor = false,
}: WebPageSchemaOptions) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${primaryImage ?? OG_IMAGE}`;
  const imageWidth = primaryImageWidth ?? OG_IMAGE_WIDTH;
  const imageHeight = primaryImageHeight ?? OG_IMAGE_HEIGHT;
  const authorUrl = `${SITE_URL}/yazar/${AUTHOR.slug}`;
  const organizationRef = {
    "@type": "Organization" as const,
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
  };

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "tr-TR",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: organizationRef,
    ...(includeAuthor
      ? {
          author: {
            "@type": "Person",
            "@id": `${authorUrl}#person`,
            name: AUTHOR.name,
            url: authorUrl,
          },
        }
      : {}),
    ...(schemaType === "WebPage"
      ? {
          about: {
            "@type": "Thing",
            name: aboutTopic ?? name,
          },
        }
      : {}),
    ...(schemaType === "ProfilePage" && mainEntityId
      ? { mainEntity: { "@id": mainEntityId } }
      : {}),
    ...(schemaType === "WebPage" && mainEntityRef
      ? { mainEntity: { "@id": mainEntityRef } }
      : {}),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: imageWidth,
      height: imageHeight,
    },
    ...(hasBreadcrumb
      ? { breadcrumb: { "@id": `${url}#breadcrumb` } }
      : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(speakableSelectors && speakableSelectors.length > 0
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: speakableSelectors,
          },
        }
      : {}),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  pagePath?: string
) {
  const currentPath =
    pagePath ?? items[items.length - 1]?.url ?? "/";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${currentPath}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export interface PageSchemaBundleOptions extends WebPageSchemaOptions {
  breadcrumbs?: BreadcrumbItem[];
  additional?: Record<string, unknown>[];
  speakableSelectors?: string[];
}

export function buildPageSchemas({
  breadcrumbs,
  additional = [],
  hasBreadcrumb,
  speakableSelectors,
  ...webPage
}: PageSchemaBundleOptions): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    generateWebPageSchema({
      ...webPage,
      hasBreadcrumb: hasBreadcrumb ?? Boolean(breadcrumbs?.length),
      speakableSelectors,
    }),
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs, webPage.path));
  }

  return [...schemas, ...additional];
}

export interface ToolPageSchemaBundleOptions {
  name: string;
  description: string;
  path: string;
  webAppName: string;
  breadcrumbs: BreadcrumbItem[];
  faqs: { question: string; answer: string }[];
  speakableSelectors?: string[];
  aboutTopic?: string;
  primaryImage?: string;
  additional?: Record<string, unknown>[];
}

/** Full structured-data bundle for calculator / tool pages. */
export function buildToolPageSchemas({
  name,
  description,
  path,
  webAppName,
  breadcrumbs,
  faqs,
  speakableSelectors,
  aboutTopic,
  primaryImage,
  additional = [],
}: ToolPageSchemaBundleOptions): Record<string, unknown>[] {
  const webAppId = `${SITE_URL}${path}#webapp`;

  return [
    generateWebPageSchema({
      name,
      description,
      path,
      datePublished: CONTENT_SCHEMA_DATES.datePublished,
      dateModified: CONTENT_SCHEMA_DATES.dateModified,
      hasBreadcrumb: true,
      speakableSelectors,
      primaryImage,
      aboutTopic: aboutTopic ?? webAppName,
      includeAuthor: true,
      mainEntityRef: webAppId,
    }),
    generateBreadcrumbSchema(breadcrumbs, path),
    generateWebApplicationSchema({
      name: webAppName,
      description,
      path,
    }),
    generateArticleSchema({
      headline: name,
      description,
      path,
    }),
    generateFAQSchema(faqs, { path, name }),
    ...additional,
  ];
}

export interface PersonSchemaInput {
  name: string;
  role: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  email: string;
  location: string;
  bio: readonly string[];
  expertise: readonly string[];
}

export function generatePersonSchema(
  person: PersonSchemaInput,
  path: string
) {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: person.name,
    url,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${person.image}`,
      ...(person.imageWidth ? { width: person.imageWidth } : {}),
      ...(person.imageHeight ? { height: person.imageHeight } : {}),
    },
    jobTitle: person.role,
    email: person.email,
    description: person.bio.join(" "),
    homeLocation: {
      "@type": "Place",
      name: person.location,
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    knowsAbout: [...person.expertise],
  };
}

export interface FAQSchemaPageOptions {
  path: string;
  name?: string;
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
  page?: FAQSchemaPageOptions
) {
  const url = page ? `${SITE_URL}${page.path}` : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(url
      ? {
          "@id": `${url}#faq`,
          url,
          name: page?.name
            ? `${page.name} — Sık Sorulan Sorular`
            : "Sık Sorulan Sorular",
          inLanguage: "tr-TR",
          isPartOf: { "@id": `${url}#webpage` },
        }
      : { inLanguage: "tr-TR" }),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ToolApplicationSchemaOptions {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}

export function generateWebApplicationSchema({
  name,
  description,
  path,
  applicationCategory = "UtilitiesApplication",
}: ToolApplicationSchemaOptions) {
  const url = `${SITE_URL}${path}`;
  const authorUrl = `${SITE_URL}/yazar/${AUTHOR.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#webapp`,
    name,
    description,
    url,
    applicationCategory,
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "tr-TR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author: {
      "@type": "Person",
      "@id": `${authorUrl}#person`,
      name: AUTHOR.name,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
    },
  };
}

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateArticleSchema({
  headline,
  description,
  path,
  datePublished = CONTENT_SCHEMA_DATES.datePublished,
  dateModified = CONTENT_SCHEMA_DATES.dateModified,
}: ArticleSchemaOptions) {
  const url = `${SITE_URL}${path}`;
  const authorUrl = `${SITE_URL}/yazar/${AUTHOR.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    inLanguage: "tr-TR",
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    author: {
      "@type": "Person",
      "@id": `${authorUrl}#person`,
      name: AUTHOR.name,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${SITE_LOGO}`,
      },
    },
  };
}

export function generateHeroVideoSchema() {
  const video = HERO_VIDEO_SCHEMA;

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${SITE_URL}/#hero-video`,
    name: video.name,
    description: video.description,
    contentUrl: `${SITE_URL}${video.mp4Path}`,
    embedUrl: SITE_URL,
    thumbnailUrl: `${SITE_URL}${video.thumbnailPath}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return generateWebApplicationSchema({
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: "/",
  });
}
