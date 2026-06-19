"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  ChevronRight,
  Shield,
  Building2,
  ListTree,
  FileText,
  Scale,
  Cookie,
  AlertTriangle,
} from "lucide-react";
import { FadeUp } from "@/components/motion";
import {
  LEGAL_NAV,
  COMPANY_NAV,
  LEGAL_LAST_UPDATED,
  type LegalSection,
} from "@/lib/legal-pages-config";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

const sectionIcons = [FileText, Scale, Shield, Cookie, AlertTriangle, Building2];

function LegalTableOfContents({ sections }: { sections: LegalSection[] }) {
  return (
    <nav
      aria-label="İçindekiler"
      className="rounded-2xl border border-navy-100/80 bg-gradient-to-br from-navy-50/80 to-white p-5 shadow-sm sm:p-6"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
          <ListTree className="h-4 w-4 text-white" />
        </span>
        <h2 className="text-sm font-bold text-navy">İçindekiler</h2>
      </div>
      <ol className="mt-4 space-y-1.5">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground/75 transition-all hover:bg-white hover:text-navy hover:shadow-sm"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-[11px] font-bold text-navy transition-colors group-hover:bg-accent group-hover:text-white">
                {index + 1}
              </span>
              <span className="leading-snug">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-5">
      {sections.map((section, index) => {
        const Icon = sectionIcons[index % sectionIcons.length];
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 overflow-hidden rounded-2xl border border-navy-100/80 bg-white shadow-sm transition-all duration-300 hover:shadow-[0_16px_40px_-18px_rgba(0,43,91,0.2)]"
          >
            <div className="h-1 bg-gradient-to-r from-navy via-navy-400 to-accent" />
            <div className="p-5 sm:p-6 md:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-bold text-navy sm:text-xl">{section.title}</h2>
                    <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                      Bölüm {index + 1}
                    </span>
                  </div>
                  {section.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && section.list.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-navy-50 bg-navy-50/40 px-3 py-2.5 text-sm leading-relaxed text-foreground/85 sm:text-[15px]"
                        >
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function SidebarNav({
  title,
  icon: Icon,
  links,
}: {
  title: string;
  icon: ComponentType<{ className?: string }>;
  links: readonly { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
          <Icon className="h-4 w-4 text-white" />
        </span>
        <h3 className="text-sm font-bold text-navy">{title}</h3>
      </div>
      <ul className="space-y-1">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all duration-200",
                  active
                    ? "bg-navy text-white shadow-md"
                    : "text-foreground/75 hover:bg-navy-50 hover:text-navy"
                )}
              >
                <span>{link.label}</span>
                <ChevronRight
                  className={cn("h-4 w-4 shrink-0", active ? "text-white/80" : "text-accent")}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function LegalPageSidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <SidebarNav title="Yasal Sayfalar" icon={Shield} links={LEGAL_NAV} />
      <SidebarNav title="Şirket" icon={Building2} links={COMPANY_NAV} />

      <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/10 via-white to-navy-50/50 p-5 shadow-sm">
        <p className="text-sm font-bold text-navy">Sorunuz mu var?</p>
        <p className="mt-2 text-xs leading-relaxed text-muted">
          {SITE_NAME} aracı veya yasal metinler hakkında bize yazın.
        </p>
        <Link
          href="/iletisim"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600 hover:shadow-glow"
        >
          <Mail className="h-4 w-4" />
          İletişime Geç
        </Link>
      </div>
    </aside>
  );
}

export function LegalHubLayout({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <article className="pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto w-full px-4 md:px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-gradient-to-br from-navy via-navy-600 to-navy-700 px-6 py-10 text-white shadow-[0_24px_50px_-20px_rgba(0,43,91,0.45)] sm:rounded-[2rem] sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-1/4 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">{description}</p>
            <p className="mt-4 text-xs text-white/70">Son güncelleme: {LEGAL_LAST_UPDATED}</p>
          </div>
        </FadeUp>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <FadeUp delay={0.05}>
              <LegalTableOfContents sections={sections} />
            </FadeUp>
            <FadeUp delay={0.08}>
              <LegalSections sections={sections} />
            </FadeUp>
          </div>

          <LegalPageSidebar />
        </div>
      </div>
    </article>
  );
}

export { LegalSections };
