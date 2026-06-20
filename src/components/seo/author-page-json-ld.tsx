import {
  buildAuthorPageJsonLdScripts,
  type AuthorPageSchemaInput,
} from "@/lib/author-page-schema";
import { StandaloneJsonLd } from "./standalone-json-ld";

export function AuthorPageJsonLd(props: AuthorPageSchemaInput) {
  return <StandaloneJsonLd scripts={buildAuthorPageJsonLdScripts(props)} />;
}
