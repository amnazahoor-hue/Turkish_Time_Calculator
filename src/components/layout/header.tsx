"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "border-b border-transparent bg-transparent transition-all duration-300",
          isScrolled && "border-navy-100/50 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-6">
          <Link
            href="/"
            aria-label="Ana Sayfa"
            className="group flex items-center gap-1.5"
          >
            <SiteLogo
              size={44}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-base font-semibold text-primary md:text-lg">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/90 nav-link-hover"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              href="/#araclar"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-accent-500 hover:shadow-glow active:scale-95"
            >
              Hesaplamaya Başla
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-primary lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-b border-navy-100/60 bg-white/80 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:translate-x-1 hover:bg-navy-50 hover:text-primary"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 -rotate-90 text-accent" />
                </Link>
              ))}
              <div className="mt-4 border-t border-navy-100 pt-4">
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
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
