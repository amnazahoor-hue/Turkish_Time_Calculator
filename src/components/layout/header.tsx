"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { SiteLogo } from "@/components/layout/site-logo";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full overflow-x-clip">
      <div
        className={cn(
          "border-b bg-white/95 backdrop-blur-md transition-all duration-300",
          isScrolled || isMobileOpen
            ? "border-navy-100/60 shadow-sm"
            : "border-navy-100/40 xl:border-transparent xl:shadow-none",
          !isScrolled && !isMobileOpen && "xl:bg-transparent xl:backdrop-blur-none"
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-2 px-4 md:h-16 md:px-6 xl:gap-4">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="group flex min-w-0 items-center gap-2"
          >
            <SiteLogo
              size={44}
              priority
              className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-10 md:w-10 xl:h-11 xl:w-11"
            />
            <span className="min-w-0 truncate text-sm font-semibold text-primary sm:text-base xl:text-xl">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-foreground/90 nav-link-hover"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 xl:flex">
            <Link
              href="/#araclar"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-500 hover:shadow-glow active:scale-95"
            >
              Hesaplamaya Başla
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-primary transition-colors hover:bg-navy-100 active:scale-95 xl:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2.25} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.25} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 z-40 bg-navy/20 backdrop-blur-[2px] md:top-16 xl:hidden"
              aria-label="Menüyü kapat"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 border-b border-navy-100/60 bg-white shadow-lg xl:hidden"
            >
              <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 md:px-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-navy-50 hover:text-primary"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
                  </Link>
                ))}
                <div className="mt-2 border-t border-navy-100 pt-3 pb-1">
                  <Link
                    href="/#araclar"
                    onClick={() => setIsMobileOpen(false)}
                    className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white transition-colors hover:bg-accent-500"
                  >
                    Hesaplamaya Başla
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
