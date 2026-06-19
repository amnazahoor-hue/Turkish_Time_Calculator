"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLogo } from "@/components/layout/site-logo";
import { SITE_NAME } from "@/lib/constants";

export function PagePreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hide = () => setIsLoading(false);

    if (document.readyState === "complete") {
      const timer = window.setTimeout(hide, 500);
      return () => window.clearTimeout(timer);
    }

    window.addEventListener("load", hide);
    const fallback = window.setTimeout(hide, 2500);

    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-live="polite"
          aria-busy="true"
          aria-label="Sayfa yükleniyor"
        >
          <SiteLogo size={64} priority />
          <p className="mt-4 text-xl font-semibold text-primary">{SITE_NAME}</p>
          <div className="mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-navy-100">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
