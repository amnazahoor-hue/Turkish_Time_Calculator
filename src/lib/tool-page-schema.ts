import { headers } from "next/headers";
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

/** Use the domain the page is actually served on (fixes Vercel preview validation). */
export async function resolveSchemaBaseUrl(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (host && !host.startsWith("localhost")) {
      const proto = h.get("x-forwarded-proto") ?? "https";
      return `${proto}://${host.split(",")[0].trim()}`.replace(/\/$/, "");
    }
    if (host?.startsWith("localhost")) {
      return `http://${host.split(",")[0].trim()}`.replace(/\/$/, "");
    }
  } catch {
    // static analysis / build
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  return "https://isaathesaplama.tr";
}

function pageUrl(baseUrl: string, path: string) {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

/** Exactly 6 schema types for tool pages — nothing else. */
export function buildToolPageSchemaGraph(
  input: ToolPageSchemaInput,
  baseUrl: string
): Record<string, unknown> {
  const { name, description, path, webAppName, breadcrumbs, faqs } = input;

  const url = pageUrl(baseUrl, path);
  const orgId = `${baseUrl}/#organization`;
  const authorUrl = `${baseUrl}${AUTHOR_PATH}`;
  const authorId = `${authorUrl}#person`;
  const webPageId = `${url}#webpage`;
  const webAppId = `${url}#webapp`;
  const breadcrumbId = `${url}#breadcrumb`;
  const faqId = `${url}#faqpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
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
        "@type": "Person",
        "@id": authorId,
        name: AUTHOR.name,
        url: authorUrl,
        jobTitle: AUTHOR.role,
        worksFor: { "@id": orgId },
      },
      {
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
    ],
  };
}

export async function buildToolPageSchemaGraphForRequest(
  input: ToolPageSchemaInput
): Promise<Record<string, unknown>> {
  const baseUrl = await resolveSchemaBaseUrl();
  return buildToolPageSchemaGraph(input, baseUrl);
}
