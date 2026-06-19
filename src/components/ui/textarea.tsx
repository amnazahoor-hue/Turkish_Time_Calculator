import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full resize-none rounded-xl border border-navy-200 bg-background px-4 py-3 text-sm font-medium text-gray-900 transition-all duration-200 placeholder:text-navy-300 focus-visible:border-navy-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-300 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
