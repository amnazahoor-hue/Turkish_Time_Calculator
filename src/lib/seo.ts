import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_LOGO,
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
      availableLanguage: "Turkish",
    },
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/saat-hesaplama?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export type PageSchemaType = "WebPage" | "ProfilePage";

export interface WebPageSchemaOptions {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
  hasBreadcrumb?: boolean;
  schemaType?: PageSchemaType;
  mainEntityId?: string;
  primaryImage?: string;
  primaryImageWidth?: number;
  primaryImageHeight?: number;
}

export function generateWebPageSchema({
  name,
  description,
  path,
  dateModified,
  hasBreadcrumb = false,
  schemaType = "WebPage",
  mainEntityId,
  primaryImage,
  primaryImageWidth,
  primaryImageHeight,
}: WebPageSchemaOptions) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${primaryImage ?? OG_IMAGE}`;
  const imageWidth = primaryImageWidth ?? OG_IMAGE_WIDTH;
  const imageHeight = primaryImageHeight ?? OG_IMAGE_HEIGHT;

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
    ...(schemaType === "WebPage"
      ? {
          about: {
            "@type": "Thing",
            name: SITE_NAME,
          },
        }
      : {}),
    ...(schemaType === "ProfilePage" && mainEntityId
      ? { mainEntity: { "@id": mainEntityId } }
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
    ...(dateModified ? { dateModified } : {}),
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
}

export function buildPageSchemas({
  breadcrumbs,
  additional = [],
  hasBreadcrumb,
  ...webPage
}: PageSchemaBundleOptions): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    generateWebPageSchema({
      ...webPage,
      hasBreadcrumb: hasBreadcrumb ?? Boolean(breadcrumbs?.length),
    }),
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs, webPage.path));
  }

  return [...schemas, ...additional];
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

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
}
