export const siteConfig = {
  name: "Time Calculator",
  title: "Time Calculator | Free Online Hour & Duration Calculator",
  description:
    "Calculate the difference between two times or add and subtract hours and minutes from any time. Free, fast, and easy-to-use online time calculator.",
  url: "https://isaathesaplama.tr",
  locale: "en_US",
  keywords: [
    "time calculator",
    "hour difference calculator",
    "add subtract time",
    "duration calculator",
    "time difference",
    "online time calculator",
    "work hours calculator",
    "shift duration calculator",
  ],
};

export const sectionNavLinks = [
  { href: "/#calculator", label: "Calculator", sectionId: "calculator" },
  { href: "/#how-it-works", label: "How It Works", sectionId: "how-it-works" },
  { href: "/#use-cases", label: "Use Cases", sectionId: "use-cases" },
  { href: "/#faq", label: "FAQ", sectionId: "faq" },
  { href: "/about-us", label: "About", sectionId: "about-us" },
];

/** Section IDs on the home page (scroll-spy targets). */
export const homeSectionIds = sectionNavLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.sectionId as string);

export const legalNavLinks = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms of Use" },
  { href: "/contact", label: "Contact" },
];

export const allNavLinks = [...sectionNavLinks, ...legalNavLinks];

export const socialLinks = [
  { href: "https://x.com/", label: "X (Twitter)", platform: "x" as const },
  { href: "https://facebook.com/", label: "Facebook", platform: "facebook" as const },
  { href: "https://linkedin.com/", label: "LinkedIn", platform: "linkedin" as const },
  { href: "https://youtube.com/", label: "YouTube", platform: "youtube" as const },
  { href: "https://pinterest.com/", label: "Pinterest", platform: "pinterest" as const },
];

export const faqItems = [
  {
    question: "How do I calculate the time difference?",
    answer:
      "Enter your start and end times, then click Calculate. Use quick presets like Work day or Night shift for common scenarios.",
    image: "/images/faq-time-diff.webp",
    category: "Basics",
  },
  {
    question: "How do I add or subtract hours and minutes?",
    answer:
      "Switch to Add / Subtract mode, set a starting time, choose Add or Subtract, enter hours and minutes, then click Calculate to see the new time.",
    image: "/images/faq-add-subtract.webp",
    category: "Basics",
  },
  {
    question: "How are overnight shifts calculated?",
    answer:
      "When the end time is earlier than the start time, the tool detects an overnight shift automatically. For example, 10:00 PM to 6:00 AM correctly returns 8 hours.",
    image: "/images/faq-overnight.webp",
    category: "Shifts",
  },
  {
    question: "Can I use this for work hours and payroll?",
    answer:
      "Yes — track clock-in and clock-out times for daily work duration. Ideal for HR reference, shift logs, and payroll prep. Always verify against your employer's policies.",
    image: "/images/faq-payroll.webp",
    category: "Work",
  },
  {
    question: "Is this time calculator free?",
    answer:
      "Completely free with no sign-up, no ads, and no app download. All calculations run instantly in your browser — use it as often as you need.",
    image: "/images/faq-free.webp",
    category: "General",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes. The calculator uses native time pickers on phones and tablets, with a responsive layout that adapts to every screen size.",
    image: "/images/faq-mobile.webp",
    category: "General",
  },
];
