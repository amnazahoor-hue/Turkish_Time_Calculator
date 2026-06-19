"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "@/components/logo/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { sectionNavLinks, legalNavLinks, homeSectionIds, siteConfig } from "@/lib/site-config";
import { buttonMotion, DURATION, EASE_OUT } from "@/lib/animations";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeSection = useActiveSection(pathname === "/" ? homeSectionIds : []);
  const prefersReduced = usePrefersReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 60));
    return () => unsub();
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string, sectionId?: string) => {
    if (href === "/about-us") return pathname === "/about-us";
    if (sectionId && pathname === "/") return activeSection === sectionId;
    if (!sectionId) return pathname === href;
    return false;
  };

  const closeMobile = () => setMobileOpen(false);

  const navLinkClass = (href: string, sectionId?: string) =>
    `header-nav-link ${isActive(href, sectionId) ? "header-nav-link--active" : ""}`;

  const motionBtn = prefersReduced ? {} : buttonMotion;

  return (
    <div className="header-wrapper">
      <header className={`header-shell ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner section-container">
          <Link
            href="/"
            className="header-logo"
            aria-label="Home"
            onClick={closeMobile}
          >
            <span className="header-logo-mobile md:hidden">
              <Logo variant="icon" className="header-logo-icon shrink-0" />
              <span className="header-logo-name">{siteConfig.name}</span>
            </span>
            <span className="hidden md:block">
              <Logo variant="dark" className="h-9 w-auto" />
            </span>
          </Link>

          <nav className="header-nav" aria-label="Main navigation">
            {sectionNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(link.href, link.sectionId)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <motion.a
              href="/#calculator"
              {...motionBtn}
              className="header-cta hidden md:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Calculate
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-menu-btn md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={2.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={prefersReduced ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: prefersReduced ? 0 : DURATION.normal, ease: EASE_OUT }}
              className="header-mobile-panel md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="section-container">
                <div className="space-y-1">
                  {sectionNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={`header-mobile-link ${isActive(link.href, link.sectionId) ? "header-mobile-link--active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <p className="header-mobile-label">Legal</p>
                <div className="space-y-1">
                  {legalNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className={`header-mobile-link ${isActive(link.href) ? "header-mobile-link--active" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <motion.a
                  href="/#calculator"
                  onClick={closeMobile}
                  {...motionBtn}
                  className="header-cta mt-5 w-full"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Start Calculating
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReduced ? 0 : DURATION.fast }}
            className="header-mobile-backdrop md:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
