import {
  buildToolPageSchemaGraphForRequest,
  type ToolPageSchemaInput,
} from "@/lib/tool-page-schema";

export async function ToolPageJsonLd(props: ToolPageSchemaInput) {
  const graph = await buildToolPageSchemaGraphForRequest(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
