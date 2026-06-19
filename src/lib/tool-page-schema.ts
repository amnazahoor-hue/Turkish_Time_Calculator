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
  breadcrumbs: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

const AUTHOR_PATH = `/yazar/${AUTHOR.slug}`;

/** Build-time base URL. Preview deploys use VERCEL_URL; production uses NEXT_PUBLIC_SITE_URL. */
export function getSchemaBaseUrl(): string {
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`.replace(/\/$/, "")
    : null;

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

/** Tool pages only: Organization, WebSite, WebPage, BreadcrumbList, Person, FAQPage. */
export function buildToolPageJsonLdScripts(
  input: ToolPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { name, description, path, breadcrumbs, faqs } = input;

  const url = pageUrl(baseUrl, path);
  const orgId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const authorUrl = `${baseUrl}${AUTHOR_PATH}`;
  const authorId = `${authorUrl}#person`;
  const webPageId = `${url}#webpage`;
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
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      url: `${baseUrl}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "tr-TR",
      publisher: { "@id": orgId },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": webPageId,
      url,
      name,
      description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": orgId },
      author: { "@id": authorId },
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
      "@type": "Person",
      "@id": authorId,
      name: AUTHOR.name,
      url: authorUrl,
      jobTitle: AUTHOR.role,
      worksFor: { "@id": orgId },
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
