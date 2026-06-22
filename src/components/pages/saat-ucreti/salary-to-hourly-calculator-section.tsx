"use client";

import { useState } from "react";
import { LazyImage } from "@/components/ui/lazy-image";
import { Calculator, Coins } from "lucide-react";
import { FadeUp } from "@/components/motion";
import { SectionTitle } from "@/components/calculator/content-layouts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalculatorResultActions } from "@/components/calculator/calculator-result-actions";
import { CalculatorResetButton } from "@/components/calculator/calculator-reset-button";
import { SALARY_TO_HOURLY } from "@/lib/saat-ucreti-content";
import { capitalizeHeadingWords } from "@/lib/utils";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function SalaryToHourlyCalculatorSection() {
  const {
    title,
    intro,
    reverseTitle,
    reverseIntro,
    formulaTitle,
    formula,
    stepsTitle,
    steps,
    exampleTitle,
    exampleLines,
    exampleOutro,
    monthlyHours,
  } = SALARY_TO_HOURLY;

  const [monthlySalary, setMonthlySalary] = useState("3000");
  const [result, setResult] = useState<string | null>(null);
  const [inputsSummary, setInputsSummary] = useState<string>("");
  const [calculatedAt, setCalculatedAt] = useState<Date | null>(null);

  const handleCalculate = () => {
    const salary = Number(monthlySalary);

    if (
      !monthlySalary ||
      Number.isNaN(salary) ||
      salary < 0
    ) {
      setResult(null);
      setInputsSummary("");
      setCalculatedAt(null);
      return;
    }

    const hourly = Math.round((salary / monthlyHours) * 100) / 100;
    setResult(
      `${formatCurrency(salary)} ÷ ${monthlyHours} = ${formatCurrency(hourly)} saatlik ücret`
    );
    setInputsSummary(
      `Aylık maaş: ${formatCurrency(salary)}\nAylık çalışma saati: ${monthlyHours} saat`
    );
    setCalculatedAt(new Date());
  };

  const handleReset = () => {
    setMonthlySalary("3000");
    setResult(null);
    setInputsSummary("");
    setCalculatedAt(null);
  };

  return (
    <section
      id="saat-ucreti-hesaplayici"
      className="relative scroll-mt-20 overflow-hidden py-10 md:scroll-mt-24 md:py-14 lg:py-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <LazyImage
          src="/images/salary-hourly-calculator-bg.webp"
          alt="Saat ücreti hesaplayıcı bölümü arka plan görseli"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.22] saturate-[0.85]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/88 to-background/78" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(211,84,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(0,43,91,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <div className="text-center">
            <SectionTitle className="mx-auto">{title}</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
              {intro}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div>
              <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-base font-bold text-navy">{capitalizeHeadingWords(reverseTitle)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
                    {reverseIntro}
                  </p>

                  <h4 className="mt-5 text-sm font-bold text-navy">{capitalizeHeadingWords(formulaTitle)}</h4>
                  <p className="mt-2 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-base font-bold text-navy">
                    {formula}
                  </p>

                  <h4 className="mt-5 text-sm font-bold text-navy">{capitalizeHeadingWords(stepsTitle)}</h4>
                  <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-foreground/75 sm:text-[15px]">
                    {steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>

                  <h4 className="mt-5 text-sm font-bold text-navy">{capitalizeHeadingWords(exampleTitle)}</h4>
                  <div className="mt-3 space-y-1 text-sm leading-relaxed text-foreground/80 sm:text-[15px]">
                    {exampleLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-[15px] sm:leading-7">
                  {exampleOutro}
                </p>
              </div>
            </div>

              <div className="flex flex-col justify-center">
                <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(0,43,91,0.12)] sm:p-8">
                  <div className="flex items-start gap-3">
                    <Coins className="mt-1 h-7 w-7 shrink-0 text-accent" strokeWidth={2.25} />
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
                        {capitalizeHeadingWords("Hesaplayıcı")}
                      </h3>
                      <p className="mt-1 text-sm text-foreground/70 sm:text-base">
                        Aylık maaşınızı girin, saatlik ücreti anında hesaplayın.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div>
                      <Label htmlFor="monthly-salary" className="text-sm font-medium text-navy">
                        Aylık Maaş (₺)
                      </Label>
                      <Input
                        id="monthly-salary"
                        type="number"
                        min={0}
                        step="any"
                        value={monthlySalary}
                        onChange={(e) => setMonthlySalary(e.target.value)}
                        className="mt-2 h-12 rounded-xl border-navy-100 text-base"
                      />
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                      <Button onClick={handleCalculate} className="h-12 w-full sm:w-auto">
                        <Calculator className="h-4 w-4" />
                        Hesapla
                      </Button>
                      <CalculatorResetButton
                        onReset={handleReset}
                        className="h-12 w-full sm:w-auto"
                      />
                    </div>

                    {result && (
                      <div className="rounded-xl bg-accent/10 px-5 py-5 sm:px-6 sm:py-6">
                        <p className="text-center text-lg font-bold text-navy sm:text-xl">{result}</p>
                        <CalculatorResultActions
                          className="mt-4 justify-center"
                          payload={{
                            toolTitle: "Saat Ücreti Hesaplama",
                            toolPath: "/saat-ucreti-hesaplama",
                            resultText: result,
                            inputsSummary,
                            calculatedAt: calculatedAt ?? undefined,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
