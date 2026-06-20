import {
  SITE_NAME,
  SITE_LOGO,
  SITE_DESCRIPTION,
  OG_IMAGE,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
} from "./constants";
import { AUTHOR } from "./legal-pages-config";
import { getSchemaBaseUrl } from "./tool-page-schema";

export interface AuthorPageSchemaInput {
  pageTitle: string;
  pageDescription: string;
  path: string;
  breadcrumbs: { name: string; url: string }[];
}

function cleanSchemaText(value: string): string {
  return value.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
}

function pageUrl(baseUrl: string, path: string) {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

/** Author profile page: Organization, WebSite, ProfilePage, Person, BreadcrumbList. */
export function buildAuthorPageJsonLdScripts(
  input: AuthorPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { pageTitle, pageDescription, path, breadcrumbs } = input;
  const name = cleanSchemaText(pageTitle);
  const description = cleanSchemaText(pageDescription);

  const url = pageUrl(baseUrl, path);
  const orgId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const personId = `${url}#person`;
  const profilePageId = `${url}#profilepage`;
  const breadcrumbId = `${url}#breadcrumb`;

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
      "@type": "ProfilePage",
      "@id": profilePageId,
      url,
      name,
      description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": websiteId },
      publisher: { "@id": orgId },
      mainEntity: { "@id": personId },
      breadcrumb: { "@id": breadcrumbId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${baseUrl}${AUTHOR.image}`,
        width: AUTHOR.imageWidth,
        height: AUTHOR.imageHeight,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": personId,
      name: AUTHOR.name,
      url,
      image: {
        "@type": "ImageObject",
        url: `${baseUrl}${AUTHOR.image}`,
        width: AUTHOR.imageWidth,
        height: AUTHOR.imageHeight,
      },
      jobTitle: AUTHOR.role,
      email: AUTHOR.email,
      description: AUTHOR.bio.join(" "),
      homeLocation: {
        "@type": "Place",
        name: AUTHOR.location,
      },
      worksFor: { "@id": orgId },
      knowsAbout: [...AUTHOR.expertise],
      mainEntityOfPage: { "@id": profilePageId },
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
  ];
}
