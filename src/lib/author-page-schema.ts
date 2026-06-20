import { SITE_NAME, SITE_LOGO, SITE_DESCRIPTION } from "./constants";
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

/**
 * Author page: 5 independent schemas (no @id cross-links).
 * Validator shows Organization, WebSite, ProfilePage, Person, BreadcrumbList separately.
 */
export function buildAuthorPageJsonLdScripts(
  input: AuthorPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { pageTitle, pageDescription, path, breadcrumbs } = input;
  const name = cleanSchemaText(pageTitle);
  const description = cleanSchemaText(pageDescription);
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
      "@type": "ProfilePage",
      url,
      name,
      description,
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: AUTHOR.name,
      url,
      image: `${baseUrl}${AUTHOR.image}`,
      jobTitle: AUTHOR.role,
      email: AUTHOR.email,
      description: AUTHOR.bio.join(" "),
      knowsAbout: [...AUTHOR.expertise],
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
  ];
}
