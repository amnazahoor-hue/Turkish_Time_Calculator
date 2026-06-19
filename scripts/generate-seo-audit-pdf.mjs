/**
 * SEO audit PDF — post-fix re-audit (June 2025)
 * Run: node scripts/generate-seo-audit-pdf.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { jsPDF } from "jspdf";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outPath = path.join(root, "SEO-Audit-Report.pdf");

const fontRegular = fs
  .readFileSync(path.join(root, "public/fonts/NotoSans-Regular.ttf"))
  .toString("base64");
const fontBold = fs
  .readFileSync(path.join(root, "public/fonts/NotoSans-Bold.ttf"))
  .toString("base64");

const AUDIT_DATE = "June 19, 2026";
const SITE = "https://isaathesaplama.tr";

/** Priority developer fixes — reason + solution */
const DEVELOPER_ACTIONS = [
  {
    id: "A1-A2-A4",
    title: "Title & meta description lengths",
    reason:
      "Home title 60 chars (keyword not at start). Wage title 78 chars. Meta desc: 72h=171, wage=164, about=97, contact=109 (target 140–160).",
    solution:
      "Edit src/lib/pages-seo.ts and page metadata in src/app/hakkimizda/page.tsx, src/app/iletisim/page.tsx. Lead with primary keyword; trim to 50–60 (title) and 140–160 (description).",
  },
  {
    id: "F6-F10",
    title: "Topic cluster & related tools",
    reason:
      "Only footer links connect tools. No dedicated “Related Tools” block at the bottom of each tool page.",
    solution:
      "Add a RelatedTools component using TOOL_LINKS from constants.ts; place it above the footer on /, /72-saat-kac-gun, and /saat-ucreti-hesaplama.",
  },
  {
    id: "J2",
    title: "Calculator below the fold",
    reason:
      "Home: HeroSection renders before CalculatorCard (#araclar). Mobile users must scroll to use tool.",
    solution:
      "Move compact calculator into hero grid or add sticky mobile CTA bar linking to #araclar.",
  },
  {
    id: "I1",
    title: "Author byline on content pages",
    reason:
      "Author shown only on /hakkimizda and /yazar/aylin-durmus. Tool pages lack E-E-A-T attribution.",
    solution:
      "Add compact byline component linking to /yazar/aylin-durmus on indexable tool/pillar pages.",
  },
  {
    id: "K2-K8",
    title: "AEO content blocks missing",
    reason:
      "seo-content-section.tsx (“What is Saat Hesaplama?”) exists but is not mounted. No Key Takeaways box on tool pages.",
    solution:
      "Mount seo-content-section on the homepage. Add a Key Takeaways / summary box under the hero on pillar pages.",
  },
  {
    id: "D9-D10",
    title: "Freshness & answer emphasis",
    reason:
      "Tool pages lack a visible “Last updated” date. Key answers are not semantically bolded.",
    solution:
      "Display CONTENT_SCHEMA_DATES.dateModified on pages. Use <strong> on direct answers (e.g. 72 hours = 3 days).",
  },
  {
    id: "G4",
    title: "Organization sameAs generic URLs",
    reason:
      "sameAs uses youtube.com/, facebook.com/ etc. — not brand-specific profile URLs.",
    solution:
      "Update FOOTER_SOCIAL_LINKS in constants.ts with real profile URLs when available.",
  },
  {
    id: "G8",
    title: "Schema not validated in production",
    reason:
      "No Rich Results Test evidence in repo.",
    solution:
      "Validate /, /72-saat-kac-gun, /saat-ucreti-hesaplama in Google Rich Results Test before launch.",
  },
  {
    id: "K15",
    title: "Calculator results not crawlable",
    reason:
      "Results render via client useState — empty HTML until the user clicks Calculate.",
    solution:
      "Add static example result snippets in HTML for default/demo values, or SSR placeholder text for bots.",
  },
  {
    id: "H5-J8",
    title: "Thin pages & social share",
    reason:
      "/iletisim and /hakkimizda under ~300 words. No share buttons on pillar pages.",
    solution:
      "Expand company pages with FAQ/trust copy. Add Web Share API or WhatsApp share on tool sections.",
  },
];

const FIXED_SINCE_LAST_AUDIT = [
  "F7 Legacy /contact links fixed — site-config.ts, schema.ts, FAQ.tsx now point to /iletisim",
  "F7 Redirects merged into next.config.ts (/contact, /about-us, legal URLs); next.config.mjs deleted",
  "F7 Sitemap dead routes removed — src/app/sitemap.ts (5 valid URLs only)",
  "Contact components folder renamed — src/components/iletisim/ (import path updated)",
  "G7 SearchAction removed from WebSite schema — src/lib/seo.ts",
  "G3 WebApplication schema on /, /72-saat-kac-gun, /saat-ucreti-hesaplama",
  "G4 Organization sameAs added — FOOTER_SOCIAL_LINKS in generateOrganizationSchema()",
  "G5 Article schema on 3 pillar pages — generateArticleSchema()",
  "G6 VideoObject on homepage — generateHeroVideoSchema() + HERO_VIDEO_SCHEMA",
  "K5 SpeakableSpecification — speakableSelectors on WebPage schema (hero IDs)",
  "E1 favicon.ico removed; all raster assets are WebP",
  "E2 All public WebP images ≤50KB (hero-hourglass, hero-hours-days, salary-calc-visual compressed)",
  "E5 Renamed image1/image2 → manual-subtract-visual.webp, salary-calc-visual.webp",
  "Internal linking added — cross-links for saat hesaplama and 72 saat kaç gündür in content sections",
  "Legal/author pages max-w-6xl width aligned with tool pages",
];

const PASSING = [
  "[A3] Unique title per live page — each src/app/*/page.tsx has distinct metadata",
  "[A6] Meta description keyword variation on main tool pages — pages-seo.ts",
  "[B1] One H1 per page — hero/legal hub components",
  "[B2] H1 topically aligned with title — home, 72h, wage pages",
  "[B3] H2 subtopics on rich pages — SectionTitle (h2) in content-layouts.tsx",
  "[B5] Primary keyword in H2 — Saat Farkı Nasıl Bulunur?, Saatlik Ücret Nasıl Hesaplanır?",
  "[B6] Logical heading hierarchy — no H2→H4 skips on live pages",
  "[C1-C2] Clean lowercase hyphen URLs — /72-saat-kac-gun, /saat-ucreti-hesaplama",
  "[C4-C5] Static App Router URLs; robots.ts disallows /api/",
  "[D1] Keyword in first 100 words — hero paragraphs on pillar pages",
  "[D4] Content matches search intent — calculator/conversion/wage tools",
  "[D7] FAQ sections on 3 pillar pages + FAQPage schema",
  "[E1] All raster images WebP — no .png/.jpg/.ico in public/",
  "[E2] Images ≤50KB — verified via scripts/compress-large-images.mjs",
  "[E3-E4] Descriptive natural ALT on LazyImage components",
  "[E5] Descriptive filenames — manual-subtract-visual, salary-calc-visual, hero-hourglass, etc.",
  "[E6] Lazy loading default — lazy-image.tsx",
  "[E7] OG image 1200×630 — constants.ts OG_IMAGE",
  "[E8] Content text in HTML not images",
  "[F2] Calculator linked from homepage header + hero → /#araclar",
  "[F4] Descriptive anchor text on internal links",
  "[F7] Sitemap matches existing pages only — sitemap.ts",
  "[F7] Contact route consistency — /iletisim in nav, schema, FAQ; legacy /contact 301 redirect in next.config.ts",
  "[F9] Links per page well under 150",
  "[G1] FAQ schema on pages with FAQ UI",
  "[G2] BreadcrumbList on content pages — buildPageSchemas()",
  "[G3] WebApplication on all 3 pillar tool pages",
  "[G4] Organization schema with sameAs — layout.tsx",
  "[G5] Article schema on pillar pages",
  "[G6] VideoObject on homepage hero video",
  "[G7] No conflicting SearchAction — removed",
  "[H1] Self-referencing canonical — generatePageMetadata()",
  "[H3] Single responsive site — no AMP",
  "[I2-I3] About + legal pages live and footer-linked",
  "[I6] Contact page with info@saathesaplama.com",
  "[J3-J5] Clear CTAs, ≤3 clicks nav, lists/tables for scannability",
  "[J7] Hero video + infographics + conversion tables",
  "[K1] Direct answer in 72h hero first paragraph (72÷24=3)",
  "[K3-K4] Natural FAQ phrasing + HowTo steps",
  "[K5] SpeakableSpecification with CSS selectors on hero elements",
  "[K7] Tabular data on wage and 72h pages",
  "[K9] Calculator outputs include formatted explanatory strings",
  "[K15] Pillar pages indexable with substantial static Turkish copy",
];

const FAILING = [
  {
    id: "A1",
    item: "Title keyword at start",
    reason: "Home title starts with a marketing phrase, not the primary keyword “saat hesaplama”.",
    solution: "Rewrite HOME_PAGE.title in pages-seo.ts.",
  },
  {
    id: "A2",
    item: "Title length 50–60",
    reason: "Wage title 78 chars with suffix; home 60 borderline.",
    solution: "Shorten HOURLY_WAGE_PAGE.title.",
  },
  {
    id: "A4",
    item: "Meta description 140–160",
    reason: "72h=171, wage=164 chars; about/contact too short.",
    solution: "Normalize all descriptions in pages-seo.ts + company pages.",
  },
  {
    id: "D6",
    item: "Non-filler content",
    reason: "Marketing phrases (e.g. kanıtlanmış, heyecan verici) read templated.",
    solution: "Replace with specific user scenarios in content files.",
  },
  {
    id: "D8",
    item: "Answer-first H2 openings",
    reason: "Many sections open with context, not direct answers.",
    solution: "Lead each H2 block with one-sentence answer.",
  },
  {
    id: "F3",
    item: "Early internal links",
    reason: "Most cross-links appear mid-page, not in first 3–4 paragraphs.",
    solution: "Add one contextual link in each hero intro paragraph.",
  },
  {
    id: "F10",
    item: "Related tools at page bottom",
    reason: "Only global footer links tools; no dedicated section.",
    solution: "Add RelatedTools component per pillar page.",
  },
  {
    id: "G8",
    item: "Schema validated",
    reason: "No Rich Results Test run documented.",
    solution: "Run Google Rich Results Test on production URLs.",
  },
  {
    id: "H5",
    item: "Thin indexable pages",
    reason: "/hakkimizda and /iletisim under ~300 words.",
    solution: "Expand with trust/FAQ content.",
  },
  {
    id: "I1",
    item: "Author on all content pages",
    reason: "Byline only on about/author pages.",
    solution: "Add author component to tool pages.",
  },
  {
    id: "I4-I5",
    item: "Citations & fresh stats",
    reason: "No outbound authoritative links; TRUST_STATS unverified.",
    solution: "Cite Turkish Labor Law (İş Kanunu) / TÜİK sources; update or remove unverified stats.",
  },
  {
    id: "J1-J2-J6-J8",
    item: "UX: TOC, above-fold tool, CLS, share",
    reason: "Long pages lack TOC; calculator below hero; CLS unmeasured; no share buttons.",
    solution: "See developer action box items J2, H5-J8.",
  },
  {
    id: "K10-K14",
    item: "AEO external signals",
    reason: "Citation phrasing, Wikipedia/Wikidata, AI citation tests not evidenced.",
    solution: "Content + off-site brand building (not code-only).",
  },
];

function setupFonts(doc) {
  doc.addFileToVFS("NotoSans-Regular.ttf", fontRegular);
  doc.addFileToVFS("NotoSans-Bold.ttf", fontBold);
  doc.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");
  doc.addFont("NotoSans-Bold.ttf", "NotoSans", "bold");
}

function pageW(doc) {
  return doc.internal.pageSize.getWidth();
}

function pageH(doc) {
  return doc.internal.pageSize.getHeight();
}

function footer(doc, page, total) {
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(`SEO Audit Report — ${AUDIT_DATE} — Page ${page} of ${total}`, 14, pageH(doc) - 8);
  doc.setTextColor(0, 0, 0);
}

function ensureSpace(doc, y, need, margin) {
  if (y + need > pageH(doc) - 18) {
    doc.addPage();
    return margin + 4;
  }
  return y;
}

function wrapText(doc, text, x, y, maxW, lineH, margin) {
  doc.setFont("NotoSans", "normal");
  const lines = doc.splitTextToSize(text, maxW);
  for (const line of lines) {
    y = ensureSpace(doc, y, lineH, margin);
    doc.text(line, x, y);
    y += lineH;
  }
  return y;
}

function drawDeveloperBox(doc, title, actions, startY, margin, maxW) {
  let y = startY;
  y = ensureSpace(doc, y, 20, margin);

  doc.setFillColor(255, 248, 240);
  doc.setDrawColor(211, 84, 0);
  const boxTop = y;
  y += 8;

  doc.setFont("NotoSans", "bold");
  doc.setFontSize(12);
  doc.setTextColor(0, 43, 91);
  doc.text(title, margin + 4, y);
  y += 7;

  doc.setFont("NotoSans", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);

  for (const action of actions) {
    y = ensureSpace(doc, y, 24, margin);
    doc.setFont("NotoSans", "bold");
    doc.setFontSize(9);
    doc.text(`${action.id} — ${action.title}`, margin + 4, y);
    y += 4.5;
    doc.setFont("NotoSans", "normal");
    doc.setFontSize(8.5);
    y = wrapText(doc, `Issue: ${action.reason}`, margin + 4, y, maxW - 8, 3.8, margin);
    y = wrapText(doc, `Fix: ${action.solution}`, margin + 4, y, maxW - 8, 3.8, margin);
    y += 2;
  }

  const boxH = y - boxTop + 4;
  doc.setDrawColor(211, 84, 0);
  doc.setLineWidth(0.6);
  doc.rect(margin, boxTop, maxW, boxH, "S");
  doc.setTextColor(0, 0, 0);
  return y + 6;
}

function main() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  setupFonts(doc);
  const margin = 14;
  const maxW = pageW(doc) - margin * 2;
  let y = 18;

  doc.setFont("NotoSans", "bold");
  doc.setFontSize(18);
  doc.text("SEO Audit Report — Saat Hesaplama", margin, y);
  y += 8;
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(10);
  y = wrapText(
    doc,
    `Site: ${SITE} | Date: ${AUDIT_DATE} | Scope: Post-fix re-audit (10 routes) | Passing: ${PASSING.length} | Failing: ${FAILING.length} | Developer tasks: ${DEVELOPER_ACTIONS.length}`,
    margin,
    y,
    maxW,
    4.5,
    margin
  );
  y += 4;

  y = drawDeveloperBox(
    doc,
    "DEVELOPER — PRIORITY FIXES (Start)",
    DEVELOPER_ACTIONS,
    y,
    margin,
    maxW
  );

  doc.setFont("NotoSans", "bold");
  doc.setFontSize(13);
  y = ensureSpace(doc, y, 12, margin);
  doc.text("RECENT FIXES (Completed)", margin, y);
  y += 7;
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(9);
  FIXED_SINCE_LAST_AUDIT.forEach((item, i) => {
    y = wrapText(doc, `${i + 1}. ${item}`, margin, y, maxW, 4.2, margin);
    y += 1;
  });
  y += 4;

  doc.setFont("NotoSans", "bold");
  doc.setFontSize(13);
  y = ensureSpace(doc, y, 12, margin);
  doc.text(`PASSING ITEMS (${PASSING.length})`, margin, y);
  y += 7;
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(8.5);
  PASSING.forEach((item, i) => {
    y = wrapText(doc, `${i + 1}. ${item}`, margin, y, maxW, 4, margin);
    y += 0.5;
  });
  y += 4;

  doc.setFont("NotoSans", "bold");
  doc.setFontSize(13);
  y = ensureSpace(doc, y, 12, margin);
  doc.text(`REMAINING / FAILING ITEMS (${FAILING.length})`, margin, y);
  y += 7;
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(8.5);
  FAILING.forEach((f, i) => {
    y = ensureSpace(doc, y, 16, margin);
    doc.setFont("NotoSans", "bold");
    doc.text(`${i + 1}. [${f.id}] ${f.item}`, margin, y);
    y += 4.5;
    doc.setFont("NotoSans", "normal");
    y = wrapText(doc, `Issue: ${f.reason}`, margin + 2, y, maxW - 4, 3.8, margin);
    y = wrapText(doc, `Fix: ${f.solution}`, margin + 2, y, maxW - 4, 3.8, margin);
    y += 2;
  });

  y = drawDeveloperBox(
    doc,
    "DEVELOPER — PRIORITY FIXES (End / Checklist)",
    DEVELOPER_ACTIONS.map((a, i) => ({
      ...a,
      title: `[ ] ${i + 1}. ${a.title}`,
    })),
    y + 4,
    margin,
    maxW
  );

  y = ensureSpace(doc, y, 30, margin);
  doc.setFont("NotoSans", "bold");
  doc.setFontSize(11);
  doc.text("Executive Summary", margin, y);
  y += 6;
  doc.setFont("NotoSans", "normal");
  doc.setFontSize(9);
  const summary = [
    "Strengths: Solid technical SEO foundation — canonical tags, sitemap, breadcrumb/FAQ/Article/Video/WebApplication schema, Speakable markup, WebP images ≤50KB, Organization sameAs, internal cross-links, and E-E-A-T pages (About, Contact, Legal).",
    "Critical remaining work: Title/meta lengths, related-tools section, calculator above the fold, author byline, AEO summary box, Rich Results schema validation, and thin company pages.",
    "This report is observational only. Regenerate with: node scripts/generate-seo-audit-pdf.mjs",
  ];
  for (const p of summary) {
    y = wrapText(doc, p, margin, y, maxW, 4.5, margin);
    y += 2;
  }

  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i += 1) {
    doc.setPage(i);
    footer(doc, i, total);
  }

  fs.writeFileSync(outPath, Buffer.from(doc.output("arraybuffer")));
  console.log(`PDF written: ${outPath} (${total} pages, ${(fs.statSync(outPath).size / 1024).toFixed(0)} KB)`);
}

main();
