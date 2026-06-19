"use client";

import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalculatorResetButtonProps {
  onReset: () => void;
  className?: string;
  label?: string;
}

export function CalculatorResetButton({
  onReset,
  className,
  label = "Sıfırla",
}: CalculatorResetButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onReset}
      className={cn(
        "border-navy-200 bg-white text-navy hover:border-navy-300 hover:bg-navy-50",
        className
      )}
    >
      <RotateCcw className="h-4 w-4" />
      {label}
    </Button>
  );
}
