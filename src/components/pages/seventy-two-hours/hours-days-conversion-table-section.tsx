"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { cn, capitalizeHeadingWords } from "@/lib/utils";
import {
  HOURS_DAYS_TABLE_SECTION,
  HOURS_TO_DAYS_TABLE_ROWS,
} from "@/lib/hours-to-days-table";

const ROWS_PER_PAGE = 12;

export function HoursDaysConversionTableSection() {
  const {
    title,
    intro,
    formulaTitle,
    formulaIntro,
    formula,
    formulaExamples,
    formulaOutro,
  } = HOURS_DAYS_TABLE_SECTION;

  const totalPages = Math.ceil(HOURS_TO_DAYS_TABLE_ROWS.length / ROWS_PER_PAGE);
  const [page, setPage] = useState(0);

  const paginatedRows = useMemo(() => {
    const start = page * ROWS_PER_PAGE;
    return HOURS_TO_DAYS_TABLE_ROWS.slice(start, start + ROWS_PER_PAGE);
  }, [page]);

  const rangeStart = page * ROWS_PER_PAGE;
  const rangeEnd = Math.min(
    rangeStart + ROWS_PER_PAGE - 1,
    HOURS_TO_DAYS_TABLE_ROWS.length - 1
  );

  return (
    <section className="bg-background py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm md:rounded-3xl">
            <div className="h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="p-5 sm:p-6 md:p-8">
              <SectionTitle>{title}</SectionTitle>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                {intro}
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-navy-100">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-4 py-3 font-bold">Saat</th>
                        <th className="px-4 py-3 font-bold">Günler (Kesir)</th>
                        <th className="px-4 py-3 font-bold">Günler (Ondalık)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedRows.map((row, index) => (
                        <tr
                          key={row.hours}
                          className={cn(
                            "border-t border-navy-100",
                            row.hours === 72
                              ? "bg-accent/10 font-semibold"
                              : index % 2 === 0
                                ? "bg-white"
                                : "bg-background"
                          )}
                        >
                          <td className="px-4 py-2.5 tabular-nums text-navy">
                            {row.hours}
                          </td>
                          <td className="px-4 py-2.5 tabular-nums text-navy">
                            {row.fraction}
                          </td>
                          <td className="px-4 py-2.5 tabular-nums text-navy">
                            {row.decimal}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col gap-4 border-t border-navy-100 bg-background/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                  <p className="text-center text-xs text-muted sm:text-left sm:text-sm">
                    <span className="font-semibold text-navy">
                      {rangeStart}–{rangeEnd} saat
                    </span>{" "}
                    · Sayfa {page + 1} / {totalPages}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.max(0, p - 1))}
                      disabled={page === 0}
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-navy-100 bg-white px-3 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Önceki sayfa"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Önceki
                    </button>

                    <div className="hidden max-w-full items-center gap-1 overflow-x-auto sm:flex">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setPage(i)}
                          aria-label={`Sayfa ${i + 1}`}
                          aria-current={page === i ? "page" : undefined}
                          className={cn(
                            "flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-semibold tabular-nums transition-colors",
                            page === i
                              ? "bg-primary text-white shadow-sm"
                              : "border border-navy-100 bg-white text-navy hover:border-primary/30 hover:bg-primary/5"
                          )}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setPage((p) => Math.min(totalPages - 1, p + 1))
                      }
                      disabled={page >= totalPages - 1}
                      className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-navy-100 bg-white px-3 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Sonraki sayfa"
                    >
                      Sonraki
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 max-w-3xl">
                <h3 className="text-lg font-black text-navy sm:text-xl">
                  {capitalizeHeadingWords(formulaTitle)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  {formulaIntro}
                </p>
                <p className="mt-4 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-base font-bold text-navy sm:text-lg">
                  {formula}
                </p>
                <p className="mt-5 text-sm font-semibold text-navy sm:text-[15px]">
                  Örneğin:
                </p>
                <ul className="mt-3 space-y-2">
                  {formulaExamples.map((example) => (
                    <li
                      key={example}
                      className="text-sm leading-relaxed text-foreground/75 sm:text-[15px]"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  {formulaOutro}
                </p>
              </div>
            </div>
          </article>
        </FadeUp>
      </div>
    </section>
  );
}
