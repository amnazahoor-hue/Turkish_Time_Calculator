"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Copy, Download, Check } from "lucide-react";
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
import { copyToClipboard, downloadTextFile } from "@/lib/utils";
import type { CalculatorTab } from "@/types";

const toolLabelClass =
  "text-[10px] font-bold uppercase tracking-widest text-navy-400";
const toolInputClass =
  "mt-1.5 border-navy-200 bg-navy-50/50 font-semibold text-gray-900 focus-visible:border-navy-300 focus-visible:ring-navy-300";
const toolHeadingClass = "text-sm font-semibold text-primary";

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
  const [copied, setCopied] = useState(false);

  const handleCalculate = () => {
    let output = "";

    switch (activeTab) {
      case "fark": {
        const res = calculateTimeDifference(
          startDate,
          startTime,
          endDate,
          endTime
        );
        output = `Saat Farkı: ${res.formatted}\nToplam: ${res.totalHours} saat (${res.totalMinutes} dakika)`;
        break;
      }
      case "ekle": {
        const res = addTimeToDate(startDate, startTime, hours, minutes);
        output = `Yeni Tarih: ${res.formatted}`;
        break;
      }
      case "cikar": {
        const res = subtractTimeFromDate(startDate, startTime, hours, minutes);
        output = `Yeni Tarih: ${res.formatted}`;
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
        break;
      }
    }

    setResult(output);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!result) return;
    await copyToClipboard(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExport = () => {
    if (!result) return;
    downloadTextFile(result, "saat-hesaplama-sonuc.txt");
  };

  return (
    <section id="araclar" className="bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {showTitle && (
          <FadeUp className="mb-6 text-center md:mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
              Saat Hesaplama Aracı
            </h2>
            <p className="mt-2 text-sm text-accent md:mt-3 md:text-base">
              Tüm saat hesaplama işlemlerinizi tek bir yerden yapın.
            </p>
          </FadeUp>
        )}

        <FadeUp delay={0.1}>
          <HoverLift>
          <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(0,43,91,0.18)] md:rounded-3xl">
            <div className="border-b border-navy-100 bg-primary px-4 py-3 sm:px-5 sm:py-4 md:px-6">
              <Tabs
                value={activeTab}
                onValueChange={(v) => {
                  setActiveTab(v as CalculatorTab);
                  setResult(null);
                }}
              >
                <TabsList className="grid h-auto grid-cols-2 gap-0 rounded-none border-0 bg-transparent p-0 sm:flex sm:gap-0">
                  <TabsTrigger
                    value="fark"
                    className="rounded-none border-b-2 border-transparent px-2 py-3 text-xs text-white/60 shadow-none hover:text-white/80 data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-accent data-[state=active]:shadow-none sm:flex-1 sm:px-3 sm:text-sm"
                  >
                    Saat Farkı
                  </TabsTrigger>
                  <TabsTrigger
                    value="ekle"
                    className="rounded-none border-b-2 border-transparent px-2 py-3 text-xs text-white/60 shadow-none hover:text-white/80 data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-accent data-[state=active]:shadow-none sm:flex-1 sm:px-3 sm:text-sm"
                  >
                    Saat Ekle
                  </TabsTrigger>
                  <TabsTrigger
                    value="cikar"
                    className="rounded-none border-b-2 border-transparent px-2 py-3 text-xs text-white/60 shadow-none hover:text-white/80 data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-accent data-[state=active]:shadow-none sm:flex-1 sm:px-3 sm:text-sm"
                  >
                    Saat Çıkar
                  </TabsTrigger>
                  <TabsTrigger
                    value="calisma"
                    className="rounded-none border-b-2 border-transparent px-2 py-3 text-xs text-white/60 shadow-none hover:text-white/80 data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:font-semibold data-[state=active]:text-accent data-[state=active]:shadow-none sm:flex-1 sm:px-3 sm:text-sm"
                  >
                    Çalışma Süresi
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="p-4 sm:p-5 md:p-6">
              <Tabs value={activeTab}>
                <TabsContent value="fark" className="mt-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className={toolHeadingClass}>Başlangıç</h4>
                      <div className="space-y-3">
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
                    <div className="space-y-4">
                      <h4 className={toolHeadingClass}>Bitiş</h4>
                      <div className="space-y-3">
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
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
                    <div className="space-y-3">
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-3">
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
                    <div className="space-y-3">
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-4">
                      <h4 className={toolHeadingClass}>Giriş</h4>
                      <div className="space-y-3">
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
                    <div className="space-y-4">
                      <h4 className={toolHeadingClass}>Çıkış</h4>
                      <div className="space-y-3">
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
                  <div className="mt-4">
                    <Label htmlFor="break-minutes" className={toolLabelClass}>
                      Mola Süresi (dakika)
                    </Label>
                    <Input
                      id="break-minutes"
                      type="number"
                      min={0}
                      value={breakMinutes}
                      onChange={(e) => setBreakMinutes(Number(e.target.value))}
                      className={`${toolInputClass} max-w-xs`}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <motion.button
                type="button"
                onClick={handleCalculate}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 24px -4px rgba(211, 84, 0, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500 sm:mt-8"
              >
                <Calculator className="h-4 w-4" />
                Hesapla
              </motion.button>

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
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    Sonuç
                  </h4>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-2xl font-bold text-accent md:text-4xl">
                    {result}
                  </pre>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleCopy}
                      className="border-navy-200 bg-white text-foreground hover:border-navy-300 hover:bg-navy-50"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {copied ? "Kopyalandı" : "Sonucu Kopyala"}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleExport}
                      className="border-navy-200 bg-white text-foreground hover:border-navy-300 hover:bg-navy-50"
                    >
                      <Download className="h-4 w-4" />
                      Dışa Aktar
                    </Button>
                  </div>
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
