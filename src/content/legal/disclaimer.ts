import type { LegalSection } from "@/components/LegalPageLayout";
import type { FAQItem } from "@/types";

export const disclaimerSections: LegalSection[] = [
  {
    id: "general-disclaimer",
    title: "General Disclaimer",
    level: 2,
    paragraphs: [
      "Welcome to the Time Calculator website (the \"Site\"). This disclaimer sets out the terms, limitations, and conditions that apply to everyone who visits the Site and uses our online time calculation tool. By accessing or using the Site, you confirm that you have read, understood, and agree to be bound by the provisions in this disclaimer. Time Calculator provides a free online time calculation service for workers, shift staff, students, managers, and anyone who needs to measure or plan time intervals in everyday situations.",
      "The Site is operated solely for informational purposes and to offer calculation convenience. Nothing on the Site—including any content, calculation output, summary, or suggestion—constitutes legal, financial, human resources, payroll, tax, or other professional advice. You are responsible for evaluating any information obtained through the Site and for deciding how to use it. For official matters, contracts, employment records, or legal proceedings, you should consult your employer, a qualified professional, or the relevant authority before relying on Site content.",
      "The Time Calculator team does not provide any express or implied warranty regarding the accuracy, completeness, or currency of Site content. The Site is made available on an \"as is\" and \"as available\" basis. Access may be interrupted temporarily because of technical faults, maintenance, connectivity problems, or outages affecting third-party services. To the fullest extent permitted by applicable law, the operator of the Site is not liable for loss or damage arising from such interruptions or from your inability to access the Site at any given time.",
      "This disclaimer should be read together with our Terms of Use and Privacy Policy. Where those documents address the same subject matter, they apply in addition to this disclaimer. If you do not agree with any part of this disclaimer, you must stop using the Site.",
    ],
  },
  {
    id: "tool-use-disclaimer",
    title: "Time Calculator Tool Use Disclaimer",
    level: 2,
    paragraphs: [
      "Our time calculator performs duration between two clock times and add-or-subtract operations in your browser on your device. The times and intervals you enter are not stored on our servers as part of the calculation process; however, the correctness of any result depends on the accuracy of your inputs and on the mode you select (for example, the option for intervals that cross midnight).",
      "You should not rely on Site results alone for critical matters such as payroll, award interpretation, overtime entitlements, official working-hours records, or compliance reporting. Employer break rules, public holidays, maximum ordinary hours, industry awards, enterprise agreements, and sector-specific regulations are outside the scope of the tool. You are responsible for checking outputs against your workplace policies and against the laws and instruments that apply to you in Australia or in any other jurisdiction relevant to your situation.",
      "When calculating night or overnight shifts, enabling the \"Crosses midnight\" option helps the tool treat intervals that span midnight correctly. Even so, organisations define shifts differently. A shift from 10:00 PM to 6:00 AM may not produce the same outcome as a shift from 11:00 PM to 7:00 AM under your employer's rules. Use the tool as a reference aid and confirm results against your roster, timesheet system, or payroll provider where accuracy is essential.",
      "Rounding, paid breaks, unpaid breaks, and minimum engagement periods can change payable hours even when gross elapsed time appears straightforward. The calculator measures elapsed time between entered clock values; it does not automatically apply award-specific rounding or break deductions unless you account for those separately in your own records.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    level: 2,
    paragraphs: [
      "The Site may include links to third-party websites to improve user experience or to provide supplementary information. Those links are provided for convenience only and do not mean that Time Calculator endorses the linked site, its operators, or its content. Third-party sites are solely responsible for their own content, privacy practices, security measures, and terms of use.",
      "When you follow an external link, the terms and privacy policy of that site govern your interaction with it. Time Calculator accepts no responsibility for the accuracy, reliability, security, or legal compliance of information on third-party websites. You should use external links at your own discretion and assess the trustworthiness of any site before sharing personal, employment, or financial information.",
      "Third-party tools embedded or referenced on the Site, including advertising and analytics providers, may collect information according to their own policies. Our Privacy Policy describes how we use certain third-party services on the Site itself; it does not control how separate websites handle data after you leave our pages.",
    ],
  },
  {
    id: "professional-advice",
    title: "No Professional Advice",
    level: 2,
    paragraphs: [
      "Nothing published on Time Calculator is professional legal or financial advice about employment law, workplace relations, taxation, superannuation, or industry working-time rules in Australia or elsewhere. Questions involving working hours, overtime pay, leave entitlements, unfair dismissal, or contract disputes should be directed to a qualified lawyer, your human resources department, a registered tax agent, or an appropriate government agency such as the Fair Work Ombudsman where applicable.",
      "Students may use the tool for class schedules, study blocks, and exam timing, but official academic calendars and institutional rules remain authoritative. Users in healthcare, logistics, hospitality, security, and other shift-based sectors should also follow hospital, facility, or employer-specific policies. The Site is a general-purpose calculation utility and cannot reflect every sector's operational or regulatory requirements.",
      "Examples, guides, and FAQ entries on the Site are illustrative. They are not tailored to your individual employment arrangement, visa conditions, contractor status, or enterprise agreement. Always treat calculator output as a starting point for your own review rather than as a definitive record of hours worked or payable.",
    ],
  },
  {
    id: "affiliate-advertising",
    title: "Affiliate and Advertising Disclaimer",
    level: 2,
    paragraphs: [
      "Time Calculator may display advertisements through Google AdSense or similar advertising networks so that we can continue to offer the Site free of charge. Advertisements are supplied by third-party advertisers and do not imply that Time Calculator endorses any advertised product or service. Any transaction, purchase, or dispute arising from an advertisement is strictly between you and the advertiser.",
      "The Site may occasionally include affiliate links. If you make a purchase through an affiliate link, Time Calculator may receive a commission. That arrangement does not increase the price you pay to the merchant. We aim to maintain editorial independence and to disclose affiliate relationships clearly where they exist. Participation in affiliate programmes is optional for users and does not require you to buy anything.",
      "Advertising content is selected in part by automated systems. We do not control every creative or landing page shown to every visitor. If you believe an advertisement on the Site is misleading or inappropriate, please contact us through our Contact page so we can review the matter with our advertising partners where possible.",
    ],
  },
  {
    id: "errors-and-omissions",
    title: "Errors and Omissions",
    level: 2,
    paragraphs: [
      "Time Calculator uses reasonable efforts to keep Site content and the calculation tool free of errors and omissions. Nevertheless, software defects, browser incompatibilities, incorrect user input, daylight-saving transitions, or unexpected technical failures may produce incorrect or incomplete results. If you discover an error, please report it through our Contact page; your feedback helps us improve the service.",
      "To the maximum extent permitted by law, the Site operator is not liable for direct, indirect, incidental, consequential, or special damages arising from incorrect calculations, outdated information, or unavailable content—including loss of profit, loss of data, loss of goodwill, or business interruption. Australian Consumer Law may confer rights that cannot be excluded; nothing in this disclaimer is intended to limit those non-excludable rights where they apply to you as a consumer.",
      "You use the Site at your own risk. Where permitted, you agree that your sole remedy for dissatisfaction with the Site or the tool is to stop using them. We may modify, suspend, or discontinue features without prior notice, subject to applicable law.",
    ],
  },
  {
    id: "contact-reference",
    title: "Contact",
    level: 2,
    paragraphs: [
      "If you have questions or concerns about this disclaimer, please reach us through our Contact page. We reserve the right to amend this disclaimer; updates will be published on this page and the \"Last Updated\" date will be revised accordingly. Continued use of the Site after changes are posted constitutes acceptance of the updated disclaimer.",
      "For technical support, feedback, or partnership enquiries relating to the time calculator, you may email info@saathesaplama.com. We aim to respond as promptly as practicable. For formal correspondence, please use our contact form and provide a valid email address so we can reply efficiently.",
      "When contacting us about a specific calculation issue, include the times you entered, the mode selected, the result you received, and the result you expected. That detail helps us reproduce and investigate reported problems more quickly.",
    ],
  },
];

export const disclaimerFaq: FAQItem[] = [
  {
    question: "Do time calculator results have official legal status?",
    answer:
      "No. Results from the Time Calculator tool are for reference only. They are not official payroll records, timesheets, or legal documents. For official employment or compliance matters, confirm figures with your employer or the relevant authority.",
  },
  {
    question: "Are advertisements on the Site managed by Time Calculator?",
    answer:
      "Advertisements are served by third-party networks such as Google AdSense. Advertisers are responsible for ad content. Display of an ad does not mean Time Calculator endorses the advertised product or service.",
  },
  {
    question: "When is this disclaimer updated?",
    answer:
      "We update this disclaimer when our services, legal requirements, or risk disclosures change. The current text is always published on this page, with the last updated date shown at the top of the page.",
  },
];
