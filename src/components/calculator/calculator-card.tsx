"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FadeUp, HoverLift } from "@/components/motion";
import {
  calculateTimeDifference,
  addTimeToDate,
  subtractTimeFromDate,
  calculateWorkHours,
  getDefaultDate,
  getDefaultTime,
} from "@/lib/calculator";
import { CalculatorResultActions } from "@/components/calculator/calculator-result-actions";
import { CalculatorResetButton } from "@/components/calculator/calculator-reset-button";
import { CALCULATOR_TAB_EXPORT_META } from "@/lib/calculator-export";
import { capitalizeHeadingWords } from "@/lib/utils";
import type { CalculatorTab } from "@/types";

const tabTriggerClass =
  "min-w-[46%] shrink-0 snap-start whitespace-normal rounded-none border-b-2 border-transparent px-2 py-2.5 text-center text-[11px] leading-snug text-white/60 shadow-none hover:!bg-white/10 hover:text-white/90 data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-white data-[state=active]:shadow-none min-[400px]:min-w-0 min-[400px]:shrink md:flex-1 md:whitespace-nowrap md:px-3 md:py-3 md:text-sm";
const toolLabelClass =
  "text-[10px] font-bold uppercase tracking-wide text-navy-400 sm:tracking-widest";
const toolInputClass =
  "mt-1 h-10 min-w-0 w-full border-navy-200 bg-navy-50/50 px-2 text-sm font-semibold text-gray-900 focus-visible:border-navy-300 focus-visible:ring-navy-300 min-[400px]:px-2.5 sm:mt-1.5 sm:h-11 sm:px-4";
const toolHeadingClass = "text-sm font-semibold text-primary";
const toolSectionClass = "space-y-2 sm:space-y-3";
const toolFieldsRowClass = "grid grid-cols-1 gap-2 min-[400px]:grid-cols-2 sm:gap-3";
const toolGridClass = "grid gap-3 sm:grid-cols-2 sm:gap-4";

interface CalculatorCardProps {
  defaultTab?: CalculatorTab;
  showTitle?: boolean;
}

export function CalculatorCard({
  defaultTab = "fark",
  showTitle = true,
}: CalculatorCardProps) {
  const [activeTab, setActiveTab] = useState<CalculatorTab>(defaultTab);
  const [startDate, setStartDate] = useState(getDefaultDate());
  const [startTime, setStartTime] = useState(getDefaultTime());
  const [endDate, setEndDate] = useState(getDefaultDate());
  const [endTime, setEndTime] = useState("18:00");
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(60);
  const [result, setResult] = useState<string | null>(null);
  const [inputsSummary, setInputsSummary] = useState<string>("");
  const [calculatedAt, setCalculatedAt] = useState<Date | null>(null);

  const handleCalculate = () => {
    let output = "";
    let summary = "";

    switch (activeTab) {
      case "fark": {
        const res = calculateTimeDifference(
          startDate,
          startTime,
          endDate,
          endTime
        );
        output = `Saat Farkı: ${res.formatted}\nToplam: ${res.totalHours} saat (${res.totalMinutes} dakika)`;
        summary = `Başlangıç: ${startDate} ${startTime}\nBitiş: ${endDate} ${endTime}`;
        break;
      }
      case "ekle": {
        const res = addTimeToDate(startDate, startTime, hours, minutes);
        output = `Yeni Tarih: ${res.formatted}`;
        summary = `Tarih/Saat: ${startDate} ${startTime}\nEklenen: ${hours} saat ${minutes} dakika`;
        break;
      }
      case "cikar": {
        const res = subtractTimeFromDate(startDate, startTime, hours, minutes);
        output = `Yeni Tarih: ${res.formatted}`;
        summary = `Tarih/Saat: ${startDate} ${startTime}\nÇıkarılan: ${hours} saat ${minutes} dakika`;
        break;
      }
      case "calisma": {
        const res = calculateWorkHours(
          startDate,
          startTime,
          endDate,
          endTime,
          breakMinutes
        );
        output = `Çalışma Süresi: ${res.formatted}\nMola: ${res.breakMinutes} dakika\nNet Süre: ${res.totalMinutes} dakika`;
        summary = `Giriş: ${startDate} ${startTime}\nÇıkış: ${endDate} ${endTime}\nMola: ${breakMinutes} dakika`;
        break;
      }
    }

    setResult(output);
    setInputsSummary(summary);
    setCalculatedAt(new Date());
  };

  const handleReset = () => {
    setStartDate(getDefaultDate());
    setStartTime(getDefaultTime());
    setEndDate(getDefaultDate());
    setEndTime("18:00");
    setHours(2);
    setMinutes(30);
    setBreakMinutes(60);
    setResult(null);
    setInputsSummary("");
    setCalculatedAt(null);
  };

  return (
    <section id="araclar" className="scroll-mt-20 bg-white py-8 sm:py-10 md:scroll-mt-24 md:py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {showTitle && (
          <FadeUp className="mb-6 text-center md:mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
              {capitalizeHeadingWords("Saat Hesaplama Aracı")}
            </h2>
            <p className="mt-2 text-sm text-accent md:mt-3 md:text-base">
              Tüm saat hesaplama işlemlerinizi tek bir yerden yapın.
            </p>
          </FadeUp>
        )}

        <FadeUp delay={0.1}>
          <HoverLift>
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,43,91,0.18)] md:rounded-3xl">
            <div className="border-b border-navy-100 bg-primary px-2 py-2 sm:px-5 sm:py-4 md:px-6">
              <Tabs
                value={activeTab}
                onValueChange={(v) => {
                  setActiveTab(v as CalculatorTab);
                  setResult(null);
                  setInputsSummary("");
                  setCalculatedAt(null);
                }}
              >
                <TabsList className="flex h-auto w-full snap-x snap-mandatory gap-0 overflow-x-auto rounded-none border-0 bg-transparent p-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden min-[400px]:grid min-[400px]:grid-cols-2 min-[400px]:overflow-visible min-[400px]:snap-none md:flex md:overflow-visible">
                  <TabsTrigger value="fark" className={tabTriggerClass}>
                    Saat Farkı
                  </TabsTrigger>
                  <TabsTrigger value="ekle" className={tabTriggerClass}>
                    Saat Ekle
                  </TabsTrigger>
                  <TabsTrigger value="cikar" className={tabTriggerClass}>
                    Saat Çıkar
                  </TabsTrigger>
                  <TabsTrigger value="calisma" className={tabTriggerClass}>
                    Çalışma Süresi
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-2.5 sm:p-5 md:p-6">
              <Tabs value={activeTab}>
                <TabsContent value="fark" className="mt-0">
                  <div className={toolGridClass}>
                    <div className={toolSectionClass}>
                      <p className={toolHeadingClass}>{capitalizeHeadingWords("Başlangıç")}</p>
                      <div className={toolFieldsRowClass}>
                        <div>
                          <Label htmlFor="start-date-fark" className={toolLabelClass}>
                            Tarih
                          </Label>
                          <Input
                            id="start-date-fark"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                        <div>
                          <Label htmlFor="start-time-fark" className={toolLabelClass}>
                            Saat
                          </Label>
                          <Input
                            id="start-time-fark"
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={toolSectionClass}>
                      <p className={toolHeadingClass}>{capitalizeHeadingWords("Bitiş")}</p>
                      <div className={toolFieldsRowClass}>
                        <div>
                          <Label htmlFor="end-date-fark" className={toolLabelClass}>
                            Tarih
                          </Label>
                          <Input
                            id="end-date-fark"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                        <div>
                          <Label htmlFor="end-time-fark" className={toolLabelClass}>
                            Saat
                          </Label>
                          <Input
                            id="end-time-fark"
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="ekle" className="mt-0">
                  <div className={toolGridClass}>
                    <div className={toolFieldsRowClass}>
                      <div>
                        <Label htmlFor="start-date-ekle" className={toolLabelClass}>
                          Tarih
                        </Label>
                        <Input
                          id="start-date-ekle"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className={toolInputClass}
                        />
                      </div>
                      <div>
                        <Label htmlFor="start-time-ekle" className={toolLabelClass}>
                          Saat
                        </Label>
                        <Input
                          id="start-time-ekle"
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className={toolInputClass}
                        />
                      </div>
                    </div>
                    <div className={toolFieldsRowClass}>
                      <div>
                        <Label htmlFor="hours-ekle" className={toolLabelClass}>
                          Eklenecek Saat
                        </Label>
                        <Input
                          id="hours-ekle"
                          type="number"
                          min={0}
                          value={hours}
                          onChange={(e) => setHours(Number(e.target.value))}
                          className={toolInputClass}
                        />
                      </div>
                      <div>
                        <Label htmlFor="minutes-ekle" className={toolLabelClass}>
                          Eklenecek Dakika
                        </Label>
                        <Input
                          id="minutes-ekle"
                          type="number"
                          min={0}
                          max={59}
                          value={minutes}
                          onChange={(e) => setMinutes(Number(e.target.value))}
                          className={toolInputClass}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cikar" className="mt-0">
                  <div className={toolGridClass}>
                    <div className={toolFieldsRowClass}>
                      <div>
                        <Label htmlFor="start-date-cikar" className={toolLabelClass}>
                          Tarih
                        </Label>
                        <Input
                          id="start-date-cikar"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className={toolInputClass}
                        />
                      </div>
                      <div>
                        <Label htmlFor="start-time-cikar" className={toolLabelClass}>
                          Saat
                        </Label>
                        <Input
                          id="start-time-cikar"
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className={toolInputClass}
                        />
                      </div>
                    </div>
                    <div className={toolFieldsRowClass}>
                      <div>
                        <Label htmlFor="hours-cikar" className={toolLabelClass}>
                          Çıkarılacak Saat
                        </Label>
                        <Input
                          id="hours-cikar"
                          type="number"
                          min={0}
                          value={hours}
                          onChange={(e) => setHours(Number(e.target.value))}
                          className={toolInputClass}
                        />
                      </div>
                      <div>
                        <Label htmlFor="minutes-cikar" className={toolLabelClass}>
                          Çıkarılacak Dakika
                        </Label>
                        <Input
                          id="minutes-cikar"
                          type="number"
                          min={0}
                          max={59}
                          value={minutes}
                          onChange={(e) => setMinutes(Number(e.target.value))}
                          className={toolInputClass}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="calisma" className="mt-0">
                  <div className={toolGridClass}>
                    <div className={toolSectionClass}>
                      <p className={toolHeadingClass}>{capitalizeHeadingWords("Giriş")}</p>
                      <div className={toolFieldsRowClass}>
                        <div>
                          <Label htmlFor="start-date-calisma" className={toolLabelClass}>
                            Tarih
                          </Label>
                          <Input
                            id="start-date-calisma"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                        <div>
                          <Label htmlFor="start-time-calisma" className={toolLabelClass}>
                            Saat
                          </Label>
                          <Input
                            id="start-time-calisma"
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={toolSectionClass}>
                      <p className={toolHeadingClass}>{capitalizeHeadingWords("Çıkış")}</p>
                      <div className={toolFieldsRowClass}>
                        <div>
                          <Label htmlFor="end-date-calisma" className={toolLabelClass}>
                            Tarih
                          </Label>
                          <Input
                            id="end-date-calisma"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                        <div>
                          <Label htmlFor="end-time-calisma" className={toolLabelClass}>
                            Saat
                          </Label>
                          <Input
                            id="end-time-calisma"
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className={toolInputClass}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <Label htmlFor="break-minutes" className={toolLabelClass}>
                      Mola Süresi (dakika)
                    </Label>
                    <Input
                      id="break-minutes"
                      type="number"
                      min={0}
                      value={breakMinutes}
                      onChange={(e) => setBreakMinutes(Number(e.target.value))}
                      className={`${toolInputClass} w-full min-[400px]:max-w-xs`}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:gap-3">
                <motion.button
                  type="button"
                  onClick={handleCalculate}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 24px -4px rgba(100, 116, 139, 0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex w-full flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-600 sm:py-3"
                >
                  <Calculator className="h-4 w-4" />
                  Hesapla
                </motion.button>
                <CalculatorResetButton
                  onReset={handleReset}
                  className="h-auto w-full py-2.5 sm:w-auto sm:py-3"
                />
              </div>

              <AnimatePresence mode="wait">
              {result && (
                <motion.div
                  key={result}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 rounded-2xl border border-navy-200 bg-gradient-to-br from-background to-accent-50 p-4 sm:mt-8 sm:p-6"
                >
                  <h4 className="text-sm font-semibold text-accent">
                    {capitalizeHeadingWords("Sonuç")}
                  </h4>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-lg font-bold text-accent min-[400px]:text-2xl md:text-4xl">
                    {result}
                  </pre>
                  <CalculatorResultActions
                    className="mt-4"
                    payload={{
                      toolTitle: CALCULATOR_TAB_EXPORT_META[activeTab].toolTitle,
                      toolPath: CALCULATOR_TAB_EXPORT_META[activeTab].toolPath,
                      resultText: result,
                      inputsSummary,
                      calculatedAt: calculatedAt ?? undefined,
                    }}
                  />
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>
          </HoverLift>
        </FadeUp>
      </div>
    </section>
  );
}
