import {
  SITE_NAME,
  SITE_URL,
  SITE_LOGO,
  SITE_DESCRIPTION,
} from "./constants";

export interface ToolPageSchemaInput {
  name: string;
  description: string;
  path: string;
  breadcrumbs: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}

/** Canonical production URL for all JSON-LD schema fields. */
export function getSchemaBaseUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

function cleanSchemaText(value: string): string {
  return value.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
}

function pageUrl(baseUrl: string, path: string) {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

/**
 * Tool pages: 5 independent schemas (no @id cross-links).
 * Validator shows Organization, WebSite, WebPage, BreadcrumbList, FAQPage separately.
 */
export function buildToolPageJsonLdScripts(
  input: ToolPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { name, description, path, breadcrumbs, faqs } = input;
  const pageName = cleanSchemaText(name);
  const pageDescription = cleanSchemaText(description);
  const url = pageUrl(baseUrl, path);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: `${baseUrl}/`,
      logo: `${baseUrl}${SITE_LOGO}`,
      description: SITE_DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: `${baseUrl}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url,
      name: pageName,
      description: pageDescription,
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: pageUrl(baseUrl, item.url),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: cleanSchemaText(faq.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: cleanSchemaText(faq.answer),
        },
      })),
    },
  ];
}
