import {
  buildAuthorPageJsonLdScripts,
  type AuthorPageSchemaInput,
} from "@/lib/author-page-schema";

const ORDER = [
  "Organization",
  "WebSite",
  "ProfilePage",
  "Person",
  "BreadcrumbList",
] as const;

function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function AuthorPageJsonLd(props: AuthorPageSchemaInput) {
  const scripts = buildAuthorPageJsonLdScripts(props);
  const ordered = ORDER.map((type) =>
    scripts.find((s) => s["@type"] === type)
  ).filter(Boolean) as Record<string, unknown>[];

  return (
    <>
      {ordered.map((schema) => (
        <script
          key={String(schema["@id"] ?? schema["@type"])}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
