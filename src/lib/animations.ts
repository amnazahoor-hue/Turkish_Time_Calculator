/** Shared Framer Motion tokens */
export const EASE_OUT = "easeOut" as const;
export const EASE_IN_OUT = "easeInOut" as const;

export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
  hero: 0.5,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE_OUT } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = stagger;

export const staggerItem = fadeUp;

export const buttonMotion = {
  whileHover: { scale: 1.02, y: -1 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

export const hoverScale = buttonMotion;

export const resultFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: DURATION.normal, ease: EASE_OUT },
};

export const faqCollapse = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: DURATION.normal, ease: EASE_OUT },
};

export const floatBadge = {
  animate: { y: [0, -8, 0] },
  transition: { repeat: Infinity, duration: 3, ease: EASE_IN_OUT },
};

export const noMotion = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
};

export function withReducedMotion<T extends Record<string, unknown>>(
  prefersReduced: boolean,
  motionProps: T
): T {
  if (!prefersReduced) return motionProps;
  return Object.fromEntries(
    Object.entries(motionProps).map(([key, value]) => {
      if (key === "transition") return [key, { duration: 0 }];
      if (key === "animate" && typeof value === "object" && value !== null) {
        return [key, value];
      }
      return [key, value];
    })
  ) as T;
}
