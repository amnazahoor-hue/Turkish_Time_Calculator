import {
  buildToolPageJsonLdGraph,
  type ToolPageSchemaInput,
} from "@/lib/tool-page-schema";

function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export function ToolPageJsonLd(props: ToolPageSchemaInput) {
  const graph = buildToolPageJsonLdGraph(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
