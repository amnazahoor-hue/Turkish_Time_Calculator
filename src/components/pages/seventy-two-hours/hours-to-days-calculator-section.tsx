"use client";

import { useState } from "react";
import { Calculator, Timer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { convertTimeUnits } from "@/lib/calculator";
import type { TimeUnit, TimeUnitConversionResult } from "@/types";

const TIME_UNITS: { value: TimeUnit; label: string }[] = [
  { value: "minutes", label: "Dakika" },
  { value: "hours", label: "Saat" },
  { value: "days", label: "Gün" },
  { value: "weeks", label: "Hafta" },
];

const TR_UNIT_LABELS: Record<TimeUnit, string> = {
  minutes: "dakika",
  hours: "saat",
  days: "gün",
  weeks: "hafta",
};

function formatTurkishResult(result: TimeUnitConversionResult): string {
  const formatNumber = (value: number) => {
    if (Number.isInteger(value)) return value.toString();
    return parseFloat(value.toFixed(4)).toString();
  };

  return `${formatNumber(result.inputValue)} ${TR_UNIT_LABELS[result.fromUnit]} = ${formatNumber(result.outputValue)} ${TR_UNIT_LABELS[result.toUnit]}`;
}

export function HoursToDaysCalculatorSection() {
  const [value, setValue] = useState("72");
  const [fromUnit, setFromUnit] = useState<TimeUnit>("hours");
  const [toUnit, setToUnit] = useState<TimeUnit>("days");
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = () => {
    const numericValue = Number(value);
    if (!value || Number.isNaN(numericValue)) {
      setResult(null);
      return;
    }

    const conversion = convertTimeUnits(numericValue, fromUnit, toUnit);
    setResult(formatTurkishResult(conversion));
  };

  return (
    <section className="section-padding pt-0">
      <div className="mx-auto max-w-2xl px-4 md:px-6">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="section-heading">Saatten Güne Hesaplayıcı</h2>
        </div>

        <div className="rounded-2xl border border-border/50 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] sm:p-8 md:rounded-3xl md:p-10">
          <div className="flex items-start gap-3">
            <Timer
              className="mt-1 h-7 w-7 shrink-0 text-primary"
              strokeWidth={2.25}
            />
            <div>
              <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Saatten Güne Hesaplayıcı
              </h3>
              <p className="mt-1 text-sm text-muted sm:text-base">
                Saat, gün ve diğer zaman birimleri arasında hızlıca dönüştürün.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <Label
                htmlFor="converter-value"
                className="text-sm font-medium text-foreground"
              >
                Değer Girin
              </Label>
              <Input
                id="converter-value"
                type="number"
                min={0}
                step="any"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mt-2 h-12 rounded-xl border-border/80 text-base"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Kaynak
                </Label>
                <Select
                  value={fromUnit}
                  onValueChange={(unit) => setFromUnit(unit as TimeUnit)}
                >
                  <SelectTrigger className="mt-2 h-12 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_UNITS.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground">
                  Hedef / Dönüştür
                </Label>
                <Select
                  value={toUnit}
                  onValueChange={(unit) => setToUnit(unit as TimeUnit)}
                >
                  <SelectTrigger className="mt-2 h-12 rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_UNITS.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={handleCalculate} className="h-12 w-full sm:w-auto">
              <Calculator className="h-4 w-4" />
              Hesapla
            </Button>

            {result && (
              <div className="rounded-xl bg-[#fff5eb] px-5 py-5 text-center sm:px-6 sm:py-6">
                <p className="text-lg font-bold text-primary sm:text-xl">
                  {result}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
