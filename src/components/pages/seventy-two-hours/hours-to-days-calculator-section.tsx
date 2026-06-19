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
import { CalculatorResultActions } from "@/components/calculator/calculator-result-actions";
import { CalculatorResetButton } from "@/components/calculator/calculator-reset-button";
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



const fieldLabelClass =

  "text-[9px] font-bold uppercase tracking-widest text-navy-400 sm:text-[10px]";

const fieldInputClass =

  "mt-1 h-10 min-w-0 rounded-xl border-border/80 px-2.5 text-sm sm:mt-1.5 sm:h-11 sm:px-4 sm:text-base";

const selectTriggerClass = "mt-1 h-10 min-w-0 rounded-xl sm:mt-1.5 sm:h-11";



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
  const [inputsSummary, setInputsSummary] = useState<string>("");
  const [calculatedAt, setCalculatedAt] = useState<Date | null>(null);

  const handleCalculate = () => {
    const numericValue = Number(value);

    if (!value || Number.isNaN(numericValue)) {
      setResult(null);
      setInputsSummary("");
      setCalculatedAt(null);
      return;
    }

    const conversion = convertTimeUnits(numericValue, fromUnit, toUnit);
    const fromLabel = TIME_UNITS.find((u) => u.value === fromUnit)?.label ?? fromUnit;
    const toLabel = TIME_UNITS.find((u) => u.value === toUnit)?.label ?? toUnit;

    setResult(formatTurkishResult(conversion));
    setInputsSummary(`${value} ${fromLabel} → ${toLabel}`);
    setCalculatedAt(new Date());
  };

  const handleReset = () => {
    setValue("72");
    setFromUnit("hours");
    setToUnit("days");
    setResult(null);
    setInputsSummary("");
    setCalculatedAt(null);
  };

  return (

    <section

      id="saatten-gune-hesaplayici"

      className="scroll-mt-20 bg-white py-8 sm:py-10 md:scroll-mt-24 md:py-14 lg:py-16"

    >

      <div className="mx-auto max-w-2xl px-3 sm:px-4 md:px-6">

        <div className="mb-4 text-center sm:mb-6">

          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 sm:h-11 sm:w-11">

            <Timer className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={2.25} />

          </div>

          <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl md:text-3xl">

            Saatten Güne Hesaplayıcı

          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-base">

            Saat, gün ve diğer zaman birimleri arasında hızlıca dönüştürün.

          </p>

        </div>



        <div className="rounded-2xl border border-border/50 bg-white p-4 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] sm:p-6 md:rounded-3xl md:p-8">

          <div className="space-y-4 sm:space-y-5">

            <div>

              <Label htmlFor="converter-value" className={fieldLabelClass}>

                Değer Girin

              </Label>

              <Input

                id="converter-value"

                type="number"

                min={0}

                step="any"

                value={value}

                onChange={(e) => setValue(e.target.value)}

                className={fieldInputClass}

              />

            </div>



            <div className="grid grid-cols-2 gap-2 sm:gap-4">

              <div className="min-w-0">

                <Label className={fieldLabelClass}>Kaynak</Label>

                <Select

                  value={fromUnit}

                  onValueChange={(unit) => setFromUnit(unit as TimeUnit)}

                >

                  <SelectTrigger className={selectTriggerClass}>

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



              <div className="min-w-0">

                <Label className={fieldLabelClass}>Hedef</Label>

                <Select

                  value={toUnit}

                  onValueChange={(unit) => setToUnit(unit as TimeUnit)}

                >

                  <SelectTrigger className={selectTriggerClass}>

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



            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button
                onClick={handleCalculate}
                className="h-10 w-full sm:h-11 sm:w-auto"
              >
                <Calculator className="h-4 w-4" />
                Hesapla
              </Button>
              <CalculatorResetButton
                onReset={handleReset}
                className="h-10 w-full sm:h-11 sm:w-auto"
              />
            </div>



            {result && (
              <div className="rounded-xl bg-[#fff5eb] px-4 py-4 sm:px-6 sm:py-5">
                <p className="text-center text-base font-bold text-primary sm:text-lg md:text-xl">
                  {result}
                </p>
                <CalculatorResultActions
                  className="mt-4 justify-center"
                  payload={{
                    toolTitle: "72 Saat Kaç Gündür — Birim Dönüştürücü",
                    toolPath: "/72-saat-kac-gun",
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

    </section>

  );

}


