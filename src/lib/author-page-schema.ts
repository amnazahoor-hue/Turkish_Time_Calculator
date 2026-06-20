import { SITE_NAME } from "./constants";
import { AUTHOR } from "./legal-pages-config";
import { getSchemaBaseUrl } from "./tool-page-schema";

export interface AuthorPageSchemaInput {
  pageTitle: string;
  pageDescription: string;
  path: string;
}

function cleanSchemaText(value: string): string {
  return value.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
}

function pageUrl(baseUrl: string, path: string) {
  if (path === "/") return `${baseUrl}/`;
  return `${baseUrl}${path}`;
}

/** Author page only: ProfilePage + Person (author profile). */
export function buildAuthorPageJsonLdScripts(
  input: AuthorPageSchemaInput,
  baseUrl: string = getSchemaBaseUrl()
): Record<string, unknown>[] {
  const { pageTitle, pageDescription, path } = input;
  const name = cleanSchemaText(pageTitle);
  const description = cleanSchemaText(pageDescription);
  const url = pageUrl(baseUrl, path);

  return [
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
      homeLocation: {
        "@type": "Place",
        name: AUTHOR.location,
      },
      worksFor: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${baseUrl}/`,
      },
      knowsAbout: [...AUTHOR.expertise],
    },
  ];
}
