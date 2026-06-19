import {
  SITE_NAME,
  SITE_LOGO,
  SITE_DESCRIPTION,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from "./constants";
import { AUTHOR } from "./legal-pages-config";

export interface ToolPageSchemaInput {
  name: string;
  description: string;
  path: string;
  webAppName: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

const AUTHOR_PATH = `/yazar/${AUTHOR.slug}`;

/** Build-time base URL. Preview deploys use VERCEL_URL; production uses NEXT_PUBLIC_SITE_URL. */
export function getSchemaBaseUrl(): string {
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`.replace(/\/$/, "")
    : null;

  // Preview / branch deploys — schema URLs must match the preview domain
  if (vercelUrl && process.env.VERCEL_ENV !== "production") {
    return vercelUrl;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (vercelUrl) {
    return vercelUrl;
  }

  return "https://isaathesaplama.tr";
}

function pageUrl(baseUrl: string, path: string) {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

/** Six separate JSON-LD objects — Organization, Person, WebPage, BreadcrumbList, WebApplication, FAQPage. */
export function buildToolPageJsonLdScripts(
  input: ToolPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { name, description, path, webAppName, breadcrumbs, faqs } = input;

  const url = pageUrl(baseUrl, path);
  const orgId = `${baseUrl}/#organization`;
  const authorUrl = `${baseUrl}${AUTHOR_PATH}`;
  const authorId = `${authorUrl}#person`;
  const webPageId = `${url}#webpage`;
  const webAppId = `${url}#webapp`;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqId = `${url}#faqpage`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": orgId,
      name: SITE_NAME,
      url: `${baseUrl}/`,
      logo: `${baseUrl}${SITE_LOGO}`,
      description: SITE_DESCRIPTION,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@saathesaplama.com",
        url: `${baseUrl}/iletisim`,
        availableLanguage: "Turkish",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": authorId,
      name: AUTHOR.name,
      url: authorUrl,
      jobTitle: AUTHOR.role,
      worksFor: { "@id": orgId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webPageId,
      url,
      name,
      description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": orgId },
      publisher: { "@id": orgId },
      author: { "@id": authorId },
      mainEntity: { "@id": webAppId },
      breadcrumb: { "@id": breadcrumbId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}${OG_IMAGE}`,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: pageUrl(baseUrl, item.url),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": webAppId,
      name: webAppName,
      description,
      url,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      inLanguage: "tr-TR",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
      isPartOf: { "@id": orgId },
      mainEntityOfPage: { "@id": webPageId },
      author: { "@id": authorId },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": faqId,
      url,
      name: `${name} — Sık Sorulan Sorular`,
      inLanguage: "tr-TR",
      isPartOf: { "@id": webPageId },
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
