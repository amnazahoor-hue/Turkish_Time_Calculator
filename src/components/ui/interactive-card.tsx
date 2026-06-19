"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const hoverEase = [0.22, 1, 0.36, 1] as const;

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  lift?: number;
  accent?: boolean;
}

export function InteractiveCard({
  children,
  className,
  lift = 8,
  accent = true,
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -lift,
        transition: { duration: 0.3, ease: hoverEase },
      }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "group relative overflow-hidden transition-[box-shadow,background-color,border-color] duration-300",
        "hover:z-10 hover:shadow-[0_20px_45px_-15px_rgba(0,43,91,0.22),0_0_28px_-6px_rgba(211,84,0,0.25)]",
        className
      )}
    >
      {accent && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-primary to-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/15"
      />
      {children}
    </motion.div>
  );
}

export function InteractiveIconBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center transition-all duration-300",
        "group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(211,84,0,0.45)]",
        className
      )}
    >
      {children}
    </span>
  );
}
