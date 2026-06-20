import type { Metadata } from "next";
import { LazyImage } from "@/components/ui/lazy-image";
import Link from "next/link";
import { MapPin, Mail, PenLine, CheckCircle2 } from "lucide-react";
import { PageTransition, FadeUp } from "@/components/motion";
import { generateLegalPageMetadata } from "@/lib/seo";
import { AUTHOR, LEGAL_LAST_UPDATED } from "@/lib/legal-pages-config";
import { LegalPageSidebar } from "@/components/legal/legal-hub-layout";
import { SITE_NAME } from "@/lib/constants";

const PAGE_PATH = `/yazar/${AUTHOR.slug}`;
const PAGE_TITLE = `${AUTHOR.name} — Yazar`;
const PAGE_DESCRIPTION = `${AUTHOR.name}, ${SITE_NAME} platformunun içerik editörü. Saat hesaplama rehberleri ve sık sorulan sorular içeriklerinin sorumlusu.`;

export const metadata: Metadata = generateLegalPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

export default function AuthorPage() {
  return (
    <PageTransition>
      <article className="pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <FadeUp>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 bg-gradient-to-br from-navy via-navy-600 to-navy-700 px-6 py-10 text-white sm:rounded-[2rem] sm:px-10 sm:py-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />
              <h1 className="text-2xl font-black sm:text-3xl md:text-4xl">{AUTHOR.name}</h1>
              <p className="mt-2 text-sm text-white/85 sm:text-base">{AUTHOR.role}</p>
              <p className="mt-4 text-xs text-white/70">Profil güncelleme: {LEGAL_LAST_UPDATED}</p>
            </div>
          </FadeUp>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
            <FadeUp delay={0.08}>
              <div className="overflow-hidden rounded-[1.75rem] border border-navy-100 bg-white shadow-sm">
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative bg-gradient-to-br from-navy-50 to-accent/10 p-6 md:p-8">
                    <div className="relative mx-auto aspect-square max-w-[240px] overflow-hidden rounded-3xl border-4 border-white shadow-[0_20px_40px_-16px_rgba(0,43,91,0.35)]">
                      <LazyImage
                        src={AUTHOR.image}
                        alt={`${AUTHOR.name} — ${SITE_NAME} içerik editörü portresi`}
                        width={AUTHOR.imageWidth}
                        height={AUTHOR.imageHeight}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {AUTHOR.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1">
                        <Mail className="h-3.5 w-3.5 text-accent" />
                        {AUTHOR.email}
                      </span>
                    </div>

                    <div className="mt-6 space-y-4">
                      {AUTHOR.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted sm:text-[15px] sm:leading-7">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8">
                      <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                        <PenLine className="h-5 w-5 text-accent" />
                        Uzmanlık Alanları
                      </h2>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {AUTHOR.expertise.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 rounded-xl border border-navy-100 bg-navy-50/50 px-3 py-2.5 text-sm text-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/#sik-sorulan-sorular"
                      className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600 hover:shadow-glow"
                    >
                      Sık sorulan soruları incele
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            <LegalPageSidebar />
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
