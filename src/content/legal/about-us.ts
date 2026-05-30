import type { LegalSection } from "@/components/LegalPageLayout";
import type { LegalFaqItem } from "@/lib/schema";

export const aboutSections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    level: 2,
    paragraphs: [
      "Time Calculator is a free online platform built for workers, shift staff, students, project managers, and anyone who wants to measure or plan time more efficiently. Our mission is to make everyday time calculations accessible, fast, and dependable—whether you are tracking a shift, planning a meeting, or working out how long a task will take.",
      "Launched in 2024, the platform aims to be a practical choice for people searching for a reliable time calculator. Our team iterates based on user feedback, prioritising features such as overnight-shift support, mobile-friendly design, and privacy-conscious processing in the browser. We do not require registration, payment, or unnecessary personal data to use the core calculator.",
      "We publish clear legal pages, a detailed FAQ, and guides that explain common scenarios so visitors can use the tool confidently. Transparency about limitations—especially for payroll and compliance use—is part of how we build trust.",
    ],
  },
  {
    id: "what-we-do",
    title: "What We Do",
    level: 2,
    paragraphs: [
      "The Time Calculator tool offers two core functions: calculating the difference between two clock times in hours and minutes, and adding or subtracting hours and minutes from a base time. A dedicated mode for intervals that cross midnight supports night shifts common in healthcare, security, logistics, hospitality, and manufacturing. Calculations run locally in your browser, so your entered times are not sent to our servers as part of normal operation.",
      "Beyond the calculator, we provide educational content for everyday situations: tracking work hours, planning shifts, estimating meeting end times, accounting for breaks in your own records, and organising study schedules. Our FAQ addresses the questions users ask most often, and our How It Works section walks through each mode step by step.",
      "We continue to refine wording, examples, and edge-case handling so that results align with user expectations across twelve-hour and twenty-four-hour time formats and daylight-saving transitions where users apply the correct inputs.",
    ],
  },
  {
    id: "our-audience",
    title: "Our Audience",
    level: 2,
    paragraphs: [
      "Time Calculator serves users in Australia and around the world who need a straightforward way to work with clock times. Our English interface, practical examples, and shift-oriented features suit Australian working patterns—including awards, rosters, and overnight work—while remaining useful for international visitors who share similar needs.",
      "We design for real-world constraints: small screens on the job, quick checks between tasks, and users who may not have a spreadsheet handy. The Site loads quickly and works without installing an app.",
    ],
  },
  {
    id: "workers-and-shift-staff",
    title: "Workers and Shift Staff",
    level: 3,
    paragraphs: [
      "Employees in factories, hospitals, hotels, security firms, retail, and transport can enter start and end times to estimate daily or weekly hours worked. The crosses-midnight option helps with ranges such as 10:00 PM to 6:00 AM. Anyone tracking overtime for personal reference can see total duration to the minute before comparing against official timesheets.",
      "The tool does not replace employer systems or Fair Work records; it helps you sanity-check figures before you log them elsewhere.",
    ],
  },
  {
    id: "managers-and-hr",
    title: "Managers and HR Professionals",
    level: 3,
    paragraphs: [
      "Project managers can use add-and-subtract mode to plan meeting lengths and delivery deadlines. Human resources teams may use the Site as a quick reference calculator, but official payroll and compliance processes should always rely on authorised systems and professional advice. Operations managers comparing roster scenarios can test multiple time ranges in seconds.",
    ],
  },
  {
    id: "students",
    title: "Students",
    level: 3,
    paragraphs: [
      "University and school students use Time Calculator for class duration, exam timing, and daily planning. A simple interface and responsive layout make it easy to use on phones between classes or on laptops at home.",
    ],
  },
  {
    id: "trust-and-quality",
    title: "Trust and Quality",
    level: 2,
    paragraphs: [
      "We align our public information with recognised quality signals for helpful online tools: practical experience with time calculations, clear expertise in how the product handles shifts and durations, authoritative guides and FAQs, and trustworthy policies that explain limits and privacy.",
      "Experience: we focus on scenarios users report most often, including overnight work and back-to-back shifts. Expertise: our algorithms cover duration, addition, subtraction, and midnight crossover logic. Authority: we maintain structured help content and legal disclosures. Trustworthiness: our Privacy Policy, Disclaimer, and Terms of Use are easy to find, and calculator inputs stay on your device during normal use.",
      "When users report discrepancies, we investigate reproducible cases and improve the product where a genuine defect exists.",
    ],
  },
  {
    id: "our-values",
    title: "Our Values",
    level: 2,
    paragraphs: [
      "Free access: the core calculator remains free. Privacy: calculation inputs stay in your browser during normal use. Accuracy: we test algorithms and respond to feedback. Accessibility: we aim for readable typography, strong contrast, and layouts that work across phone, tablet, and desktop screens.",
      "Thank you for being part of the Time Calculator community. Your feedback, bug reports, and feature ideas help us improve. Visit our Contact page to reach the team.",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    level: 2,
    paragraphs: [
      "Time Calculator is built with modern web technology. A Next.js and React architecture supports fast page loads and a smooth experience. Calculation logic runs in JavaScript in your browser so results appear instantly and your times are not transmitted for storage as part of standard calculator use.",
      "The product follows a mobile-first approach so phones, tablets, and desktops receive a consistent experience. The overnight-shift mode reflects feedback from shift workers and continues to evolve as we learn from real usage patterns.",
    ],
  },
  {
    id: "community-and-feedback",
    title: "Community and Feedback",
    level: 2,
    paragraphs: [
      "Time Calculator grows through user feedback. Bug reports, feature suggestions, and general comments shape our roadmap. We aim to reply to contact form messages within two to three business days, though busy periods may occasionally extend that window.",
      "Sharing the Site with colleagues, classmates, or shift teammates helps others discover a free, privacy-conscious tool. Our mission is for anyone who needs a time calculation to have access without barriers.",
    ],
  },
  {
    id: "looking-ahead",
    title: "Looking Ahead",
    level: 2,
    paragraphs: [
      "We are committed to ongoing improvement. Future enhancements may include weekly hour totals, break adjustments in user-controlled workflows, and optional calendar-friendly exports—all designed to respect our browser-local calculation principle where feasible.",
      "Earning and keeping your trust is our highest priority. Legal pages remain publicly available and updated when practices change. We aim to be a dependable, accessible time calculator for Australian users and visitors worldwide.",
      "Try the calculator on our home page, read How It Works for step-by-step instructions, and contact us if you have questions. The Time Calculator team will keep working so people can measure time fairly and clearly in everyday life.",
      "We appreciate you choosing Time Calculator and hope the tool saves you time every day.",
    ],
  },
];

export const aboutFaq: LegalFaqItem[] = [
  {
    question: "Who operates Time Calculator?",
    answer:
      "Time Calculator is an independent online platform focused on free, accessible time calculations for workers, students, and managers. Our mission is to provide a reliable tool without unnecessary sign-up barriers.",
  },
  {
    question: "Why is the platform focused on practical shift and work use?",
    answer:
      "Many visitors need to check hours, overnight shifts, and schedule changes quickly. We tailor examples and features—such as crosses-midnight mode—to those real-world needs while keeping the tool useful for general time maths.",
  },
  {
    question: "How can I support the platform?",
    answer:
      "Send feedback, report issues with clear details, and share the Site with others who might benefit. Our contact form is always available for suggestions and corrections.",
  },
];
