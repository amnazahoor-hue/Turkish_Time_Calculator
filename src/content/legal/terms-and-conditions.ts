import type { LegalSection } from "@/components/LegalPageLayout";
import type { FAQItem } from "@/types";

export const termsSections: LegalSection[] = [
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    level: 2,
    paragraphs: [
      "These Terms of Use (\"Terms\") govern your access to and use of the Time Calculator website. By visiting the Site, using the time calculator, or viewing any of our content, you confirm that you have read, understood, and agree to be legally bound by these Terms. If you do not agree, you must not use the Site.",
      "Time Calculator may update these Terms at any time. Updates take effect when published on this page unless a later effective date is stated. Continued use after changes are posted constitutes acceptance of the updated Terms. We encourage you to review this page periodically.",
      "If you use the Site on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms. In that case, \"you\" includes the organisation.",
    ],
  },
  {
    id: "lawful-and-appropriate-use",
    title: "Lawful and Appropriate Use",
    level: 2,
    paragraphs: [
      "You agree to use the Site only for lawful purposes and in accordance with these Terms. The following activities are prohibited: gaining unauthorised access to Site infrastructure, servers, or networks; overloading the Site with automated bots, scrapers, or similar tools beyond reasonable personal use; distributing malware or malicious code; or interfering with other users' access to the Site.",
      "You must not attempt to manipulate the calculator, reverse engineer the Site except where permitted by law, or run automated bulk calculations in a way that materially burdens our systems or circumvents reasonable use limits. Copying, distributing, modifying, or commercially exploiting Site content without permission infringes our intellectual property rights and may result in legal action.",
      "You are responsible for ensuring that your use complies with applicable workplace policies, school rules, and laws in your jurisdiction. We may suspend or restrict access if we reasonably believe you have violated these Terms or applicable law.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    level: 2,
    paragraphs: [
      "All content on the Time Calculator website—including text, graphics, logos, icons, images, software code, design, and layout—is owned by Time Calculator or its licensors and is protected by copyright, trade mark, and other intellectual property laws in Australia and internationally.",
      "You may view content for personal, non-commercial purposes and use the time calculator for your own reference calculations. You may not reproduce, distribute, modify, publicly display, or create derivative works from any part of the Site without prior written permission, except as allowed by fair dealing or fair use provisions where applicable. The Time Calculator name and branding may not be used in a way that suggests endorsement or affiliation without consent.",
      "If you believe content on the Site infringes your rights, contact us through the Contact page with sufficient detail for us to assess your notice.",
    ],
  },
  {
    id: "tool-terms-of-use",
    title: "Time Calculator Tool Terms",
    level: 2,
    paragraphs: [
      "The time calculator is provided free of charge and does not require registration. It supports duration between two times, adding and subtracting hours and minutes, and a mode for intervals that cross midnight. Results are for reference only and are not official payroll documents, timesheets, or legal records.",
      "We do not guarantee uninterrupted or error-free operation. Maintenance, updates, or technical faults may make the tool temporarily unavailable. You must verify results against your employer's policies, applicable awards or agreements, and official records where accuracy matters for pay or compliance.",
      "Features may change over time. We may add, modify, or remove functionality to improve the Site or address security concerns without prior notice, subject to applicable consumer guarantees.",
    ],
  },
  {
    id: "disclaimer-of-warranties",
    title: "Disclaimer of Warranties",
    level: 2,
    paragraphs: [
      "The Site and time calculator are provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, Time Calculator disclaims all express and implied warranties, including warranties of merchantability, fitness for a particular purpose, accuracy, reliability, and non-infringement.",
      "Information on the Site is general in nature and does not replace professional advice on employment law, payroll, taxation, or human resources. Seek qualified advice before making decisions that depend on legal or financial outcomes.",
      "Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy that cannot be excluded under the Australian Consumer Law or other mandatory laws.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    level: 2,
    paragraphs: [
      "To the maximum extent permitted by law, Time Calculator is not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Site, reliance on calculation results, content errors, third-party links, or service interruptions—including loss of profits, data, business, or goodwill.",
      "Where liability cannot be excluded, our total liability for any claim relating to the Site is limited to the greater of re-supply of the relevant service or AUD $100, except where a higher minimum is required by law. Because the Site is free to use, monetary recovery may be limited in practice for many claims.",
      "Some jurisdictions do not allow certain limitations; in those cases, the above limits apply only to the extent permitted in your jurisdiction.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    level: 2,
    paragraphs: [
      "These Terms are governed by the laws of Australia. You submit to the non-exclusive jurisdiction of the courts of Australia for disputes arising from or relating to these Terms or the Site, without prejudice to mandatory consumer protections that may apply where you live.",
      "If you are a consumer under the Australian Consumer Law, you retain rights that cannot be contracted away. Nothing in these Terms reduces those statutory protections.",
      "Before commencing formal proceedings, we encourage you to contact us through the Contact page so we can attempt to resolve concerns informally where appropriate.",
    ],
  },
  {
    id: "severability",
    title: "Severability",
    level: 2,
    paragraphs: [
      "If any provision of these Terms is held invalid, illegal, or unenforceable, that provision is severed and the remaining provisions remain in full force. The invalid provision is replaced by a valid provision that most closely reflects the original intent of the parties to the extent permitted by law.",
      "Failure by Time Calculator to enforce any right or provision does not constitute a waiver of that right or provision. Questions about these Terms may be sent through our Contact page or to info@saathesaplama.com.",
    ],
  },
  {
    id: "access-and-accounts",
    title: "Access and Accounts",
    level: 2,
    paragraphs: [
      "Time Calculator does not require you to create an account. Access is free and does not involve a paid subscription. We may suspend access temporarily for maintenance, updates, or technical reasons. We may block access permanently where these Terms are materially breached.",
      "Automated copying, indexing, or bulk downloading of Site content (scraping) is prohibited except for search engines that comply with our robots.txt file. Automated bulk use of the calculator that harms server performance or other users is not permitted.",
      "You are responsible for the devices and networks you use to access the Site and for keeping your own systems secure.",
    ],
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    level: 2,
    paragraphs: [
      "We may revise these Terms at any time. Revisions take effect when posted on this page, and the \"Last Updated\" date will be updated accordingly. Where changes are material, we will use reasonable efforts to draw attention to them on the Site. Continued use constitutes acceptance of the revised Terms.",
      "These Terms should be read together with our Disclaimer and Privacy Policy. Using the time calculator implies that you have considered all three documents as they apply to your use of the Site.",
    ],
  },
];

export const termsFaq: FAQItem[] = [
  {
    question: "Do I have to pay to use the Site?",
    answer:
      "No. Time Calculator is free to use. You do not need to register or pay a fee. The Site may be supported by advertising revenue.",
  },
  {
    question: "Can I rely on calculation results for payroll?",
    answer:
      "The tool is designed to produce accurate elapsed-time results for the inputs you provide, but outputs are for reference. For official payroll or compliance, verify results with your employer, payroll system, or relevant records.",
  },
  {
    question: "How will I know if the Terms change?",
    answer:
      "Updates are published on this page with a revised last updated date. Continued use of the Site after changes are posted means you accept the updated Terms.",
  },
];
