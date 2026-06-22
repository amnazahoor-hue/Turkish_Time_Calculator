"use client";

import { SEO_CONTENT } from "@/lib/seo-content";
import { FadeUp } from "@/components/motion";
import { capitalizeHeadingWords } from "@/lib/utils";

export function SEOContentSection() {
  return (
    <section id="blog" className="section-padding">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <FadeUp className="mb-6 text-center md:mb-8">
          <h2 className="section-heading">{capitalizeHeadingWords("Saat Hesaplama Rehberi")}</h2>
          <p className="section-subheading">
            Saat hesaplama hakkında bilmeniz gereken her şey.
          </p>
        </FadeUp>

        <div className="max-w-none">
          {SEO_CONTENT.sections.map((section, index) => (
            <FadeUp key={section.id} delay={index * 0.05}>
              <article
                id={section.id}
                className="mb-8 border-b border-border/40 pb-8 last:mb-0 last:border-0 last:pb-0 md:mb-10 md:pb-10"
              >
                <h2 className="text-xl font-bold text-foreground md:text-2xl">
                  {capitalizeHeadingWords(section.title)}
                </h2>
                <div
                  className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:mt-5 md:text-base [&_p]:mb-3"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
