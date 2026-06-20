import {
  buildAuthorPageJsonLdGraph,
  type AuthorPageSchemaInput,
} from "@/lib/author-page-schema";

function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function AuthorPageJsonLd(props: AuthorPageSchemaInput) {
  const graph = buildAuthorPageJsonLdGraph(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
