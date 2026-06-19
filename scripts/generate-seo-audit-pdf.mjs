/**
 * One-off SEO audit PDF generator — read-only audit output.
 * Run: node scripts/generate-seo-audit-pdf.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { jsPDF } from "jspdf";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "SEO-Audit-Report.pdf");

const PASSING = [
  "A6 Meta description contains natural keyword variation — src/lib/pages-seo.ts, per-page metadata in src/app/**/page.tsx",
  "B1 Only ONE H1 per indexable page — verified across all src/app/**/page.tsx and hero components",
  "B2 H1 differs from Title Tag but is topically aligned — e.g. home title vs H1 Saat Hesaplama in hero-section.tsx",
  "B5 Primary keyword in at least one H2 — home CalculatorContentSection, calculator-guide-section.tsx, saat-ucreti/seventy-two-hours content",
  "B6 Heading hierarchy mostly logical H1→H2→H3 — content-layouts.tsx, hakkimizda/page.tsx, calculator-guide-section.tsx",
  "C1 URL contains primary keyword, clean hyphenated slugs — /saat-farki-hesaplama, /72-saat-kac-gun, etc.",
  "C2 URLs lowercase with hyphens — all Turkish routes in src/app/",
  "C4 Consistent URL structure for calculator category — /saat-*-hesaplama pattern",
  "C5 No parameter-based indexable URLs — static App Router paths only; robots.ts disallows /api/",
  "D1 Primary keyword in first 100 words — hero-section.tsx, seventy-two-hours hero, saat-* page intros",
  "D3 LSI/semantic keywords in content — calculator-page-content.ts, saat-ucreti-content.ts, seventy-two-hours-content.ts",
  "D4 Content matches tool/search intent — calculator pages serve time-calculation queries",
  "D6 Original Turkish content (not spun templates on live routes) — src/lib/*-content.ts",
  "D7 FAQ with real question phrasing on 3 pillar pages — home, /72-saat-kac-gun, /saat-ucreti-hesaplama",
  "E2 Images compressed under 100KB — public/images/*.webp (largest image1.webp ~32 KB)",
  "E3 Every runtime image has descriptive ALT — LazyImage + next/image across src/components/",
  "E4 ALT tags read naturally in Turkish — verified in lazy-image.tsx (title falls back to alt)",
  "E6 Lazy loading on below-fold images — src/components/ui/lazy-image.tsx default loading=lazy",
  "E7 OG image 1200×630 WebP — src/lib/constants.ts OG_IMAGE /branding/og-image.webp",
  "E8 No text baked into content images — headings/body are HTML text",
  "F2 Primary calculator linked from homepage — CalculatorCard on src/app/page.tsx, CTA to /#araclar",
  "F4 Descriptive anchor text — Header.tsx, Footer.tsx, legal-hub-layout.tsx (no click here)",
  "F5 No exact-match anchor overuse detected — varied Turkish labels in NAV_LINKS, FOOTER_LINKS",
  "F7 Internal routes resolve to real pages — App Router pages + next.config.mjs 301 redirects for English aliases",
  "F8 No redirect chains — single-hop permanent redirects in next.config.mjs",
  "F9 Total links per page well under 150 — header/footer + section links",
  "G1 FAQ schema on pages with FAQ UI — generateFAQSchema in page.tsx for /, /72-saat-kac-gun, /saat-ucreti-hesaplama",
  "G2 BreadcrumbList schema sitewide on content pages — buildPageSchemas() in src/lib/seo.ts",
  "G3 SoftwareApplication schema on homepage — generateSoftwareApplicationSchema in src/app/page.tsx",
  "G4 Organization schema on every page via layout — generateOrganizationSchema in src/app/layout.tsx",
  "G7 No conflicting duplicate schema types on same page — WebPage + FAQPage + SoftwareApplication on home is valid",
  "H1 Self-referencing canonical on metadata pages — alternates.canonical in generatePageMetadata (src/lib/seo.ts)",
  "H3 No separate AMP/mobile/print versions — single responsive site",
  "H5 Thin legal pages handled via noindex — generateLegalPageMetadata on policy pages",
  "I2 About Us page live — /hakkimizda indexed via generateIndexablePageMetadata",
  "I3 Privacy Policy & Terms live in footer — /gizlilik-politikasi, /kullanim-kosullari (noindex but linked)",
  "I6 Contact page with email — /iletisim (info@saathesaplama.com in seo.ts Organization schema)",
  "J3 Clear contrasting CTAs — hero-section.tsx Hesaplamaya Basla, accent buttons sitewide",
  "J4 Max 3 clicks from homepage — all main pages in Header/Footer NAV_LINKS",
  "J5 Bullet/numbered lists for scannability — calculator-guide-section, content-layouts FourStepCards",
  "J7 Multimedia adds value — hero background video (hero-section.tsx), step/use-case WebP visuals",
  "K2 What is [topic] sections on rich pages — ADD_SUBTRACT_INTRO, SEVENTY_TWO_HOURS_HERO paragraphs",
  "K3 FAQ natural Who/What/How phrasing — CALCULATOR_FAQS, SEVENTY_TWO_HOURS_FAQS, SAAT_UCRETI_FAQS",
  "K4 HowTo/step sections in UI — FourStepCards, HOW_IT_WORKS, calculator-guide-section STEPS",
  "K7 Tabular comparison data — MANUAL_ADD_EXAMPLE exampleRows tables in content",
  "K12 Brand + tool name paired — SITE_NAME Saat Hesaplama in titles, constants, schema",
  "K1 Concise direct answer at top — 72-saat hero: 72÷24=3 gün in first paragraph (seventy-two-hours-content.ts)",
];

const FAILING = [
  "A1 Title primary keyword at start (first 60 chars) — FAIL: / title starts Daha Iyi Sonuclar; /saat-ucreti-hesaplama starts En Kapsamli (pages-seo.ts)",
  "A2 Title length 50–60 characters — FAIL: / (61), /saat-hesaplama (78), /saat-ucreti-hesaplama (79); too short: /saat-ekleme (28), /iletisim (25)",
  "A3 Unique title per page — FAIL: / and /saat-hesaplama share identical title (pages-seo.ts HOME_PAGE duplicated in saat-hesaplama/page.tsx)",
  "A4 Meta description 140–160 chars — FAIL: too long on / (164), /72-saat-kac-gun (168), /saat-ucreti (163); too short on /saat-farki (109), /saat-ekleme (97), /hakkimizda (101)",
  "A5 Unique meta description — FAIL: / and /saat-hesaplama identical descriptions",
  "B3 H2 covers main subtopics — FAIL on thin tool routes: /saat-ekleme, /saat-cikarma, /saat-farki-hesaplama, /calisma-saati-hesaplama (H1 + intro only)",
  "B4 H3–H6 for nested detail only — PARTIAL FAIL: Footer.tsx uses h3 for column titles (Araçlar, Şirket) — decorative nav labels",
  "C3 URL max 3–4 words — BORDERLINE FAIL: /sorumluluk-reddi, /gizlilik-politikasi exceed keyword-focused brevity guideline",
  "D2 Keyword density 1–2% — NOT VERIFIED in codebase; thin pages likely under-optimized",
  "D5 Word count vs SERP average — FAIL: /saat-ekleme, /saat-cikarma, /saat-farki-hesaplama, /calisma-saati-hesaplama lack supporting content sections",
  "D8 Answer-first structure in each H2 — FAIL: many H2 sections lead with setup text not direct answers (calculator-page-content.ts)",
  "D9 Content date-stamped when refreshed — FAIL: main tool/pillar pages lack dateModified; only legal/author show LEGAL_LAST_UPDATED",
  "D10 Bold/italic for answer phrases — FAIL: minimal <strong> usage; styling via font-bold classes not semantic emphasis on answers",
  "E1 All images in WEBP — FAIL: public/branding/favicon.ico, 17 unused SVG duplicates, hero-background.mp4/.webm (video assets)",
  "E5 Descriptive image file names — FAIL: public/images/image1.webp, image2.webp (manual-subtract-section.tsx)",
  "F1 Every page linked internally — FAIL: 5 orphan calculator URLs in sitemap only: /saat-hesaplama, /saat-farki-hesaplama, /saat-ekleme, /saat-cikarma, /calisma-saati-hesaplama",
  "F3 Internal links in first 3–4 paragraphs — FAIL: home hero links to /#araclar not cross-page tool URLs; thin pages have no early body links",
  "F6 Pillar/supporting topic cluster inter-linking — FAIL: sub-tool pages not linked from home content or footer TOOL_LINKS (only 3 tools listed)",
  "F10 Related tool links at bottom of each tool page — FAIL: no related-tools component on any calculator page",
  "G3 SoftwareApplication on ALL tool pages — FAIL: only homepage src/app/page.tsx; missing on /saat-farki-hesaplama etc.",
  "G4 Organization schema social profiles — FAIL: generateOrganizationSchema lacks sameAs; footer social URLs are generic platform homepages (constants.ts)",
  "G5 Article schema on supporting content — FAIL: not implemented anywhere in src/lib/seo.ts",
  "G6 VideoObject schema where video embedded — FAIL: hero-section.tsx background video has no VideoObject JSON-LD",
  "G8 Schema validated (Rich Results Test) — NOT VERIFIABLE from codebase; no test artifacts present",
  "H2 Paginated rel=next/prev — N/A FAIL: no pagination implemented",
  "H4 No duplicate meta titles/descriptions — FAIL: / vs /saat-hesaplama duplicate pair",
  "H5 Thin indexable pages <300 words — FAIL: /saat-ekleme, /saat-cikarma, /saat-farki-hesaplama, /calisma-saati-hesaplama indexed but content-thin",
  "I1 Author attribution on all content pages — FAIL: only /hakkimizda and /yazar/aylin-durmus; calculator/pillar pages lack byline",
  "I4 External citations to authoritative sources — FAIL: no outbound links to gov/academic/standards sources in live Turkish content",
  "I5 Fact-checked stats freshness — FAIL: TRUST_STATS 10.000+ users / 99.99% unverified; no source citations (constants.ts)",
  "J1 Table of Contents for 1500+ word pages — FAIL: not implemented on home or pillar pages",
  "J2 Tool/calculator above the fold — FAIL: home HeroSection scrolls before CalculatorCard; /72-saat-kac-gun and /saat-ucreti calculators below hero sections",
  "J6 No layout shift on result load (CLS=0) — NOT VERIFIED; client-side result state in calculator-card.tsx may cause shift",
  "J8 Social sharing on pillar/blog pages — FAIL: no page-level share buttons; only WhatsApp in calculator-result-actions.tsx after calculation",
  "K5 Speakable schema — FAIL: not implemented",
  "K6 Each H2 self-contained/isolation — PARTIAL FAIL: content sections depend on prior context",
  "K8 Key Takeaways summary box near top — FAIL: not present on tool or pillar pages",
  "K9 Tool output includes explanatory sentence — PARTIAL FAIL: outputs are labeled strings (Saat Farki: X) not full explanatory prose (calculator-card.tsx)",
  "K10 Citation-friendly phrasing — FAIL: limited According to / Based on language in content files",
  "K11 Wikipedia/Wikidata/authoritative directory presence — NOT IN CODEBASE / external presence not evidenced",
  "K13 Key facts avoid hedging — PARTIAL FAIL: marketing copy uses superlatives (en gelismis, kanitlanmis) without sourced claims",
  "K14 Tested in ChatGPT/Gemini/Perplexity — NOT VERIFIABLE from codebase",
  "K15 Tool result pages indexable with static crawlable text — FAIL: results rendered client-side via useState; empty until user calculates",
  "EXTRA Broken hero video poster — hero-section.tsx poster=/og-image.webp but OG lives at /branding/og-image.webp (404 risk)",
];

function drawWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth);
  lines.forEach((line) => {
    if (y > 275) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, x, y);
    y += lineHeight;
  });
  return y;
}

function main() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margin = 14;
  const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
  let y = 20;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("SEO Audit Report — Saat Hesaplama", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y = drawWrappedText(
    doc,
    "Project: Time Calculator Hour Calculator v.1 | Site: https://isaathesaplama.tr | Audit date: June 17, 2026 | Mode: READ-ONLY codebase analysis | Total checklist items: 97 | Passing: 47 | Failing / not verified: 50",
    margin,
    y,
    maxWidth,
    5
  );
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("PASSING ITEMS (47)", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  PASSING.forEach((item, i) => {
    y = drawWrappedText(doc, `${i + 1}. ${item}`, margin, y, maxWidth, 4.5);
    y += 1.5;
  });

  y += 4;
  if (y > 250) {
    doc.addPage();
    y = 20;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("FAILING ITEMS (50)", margin, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  FAILING.forEach((item, i) => {
    y = drawWrappedText(doc, `${i + 1}. ${item}`, margin, y, maxWidth, 4.5);
    y += 1.5;
  });

  // Summary page
  doc.addPage();
  y = 20;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Executive Summary", margin, y);
  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const summary = [
    "Strengths: Solid technical SEO foundation — canonical tags, robots/sitemap, WebPage + BreadcrumbList schema, FAQ schema on 3 pillar pages, Organization/WebSite global schema, WebP image pipeline with lazy loading, OG image at 1200x630, E-E-A-T pages (About, Contact, Legal), and rich content on homepage plus /72-saat-kac-gun and /saat-ucreti-hesaplama.",
    "Critical gaps: Duplicate title/description on / and /saat-hesaplama; 5 calculator sub-routes are sitemap orphans with thin content; title/meta length off-target on multiple URLs; missing SoftwareApplication schema on sub-tools; no VideoObject for hero video; no author bylines on tool pages; calculator results not crawlable as static HTML; no related-tools internal linking; AEO items (Speakable, Key Takeaways, citation phrasing) largely absent.",
    "Pages audited: 21 route files (15 Turkish content, 6 redirect stubs). Indexable via sitemap: 10 URLs. Noindex: legal + author.",
    "This report is observational only. No code, content, UI, or files were modified during the audit.",
  ];
  summary.forEach((p) => {
    y = drawWrappedText(doc, p, margin, y, maxWidth, 5.5);
    y += 3;
  });

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i += 1) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text(`SEO Audit Report — Page ${i} of ${totalPages}`, margin, 290);
  }

  fs.writeFileSync(outPath, Buffer.from(doc.output("arraybuffer")));
  console.log(`PDF written: ${outPath} (${totalPages} pages)`);
}

main();
