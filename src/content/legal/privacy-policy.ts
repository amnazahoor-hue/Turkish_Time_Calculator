import type { LegalSection } from "@/components/LegalPageLayout";
import type { FAQItem } from "@/types";

export const privacySections: LegalSection[] = [
  {
    id: "introduction-and-consent",
    title: "Introduction and Consent",
    level: 2,
    paragraphs: [
      "Time Calculator (\"we\", \"us\", or the \"Site\") respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains what information may be collected when you visit our website and use our time calculation tool, how that information is used, how long it is kept, and what choices and rights you may have.",
      "By using the Site, you acknowledge that you have read this Privacy Policy. If you do not agree with it, please discontinue use of the Site. You may limit certain cookies and analytics through your browser settings; doing so may affect how some Site features function.",
      "We aim to comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) where they apply to our operations. If you access the Site from outside Australia, local privacy laws in your region may also apply to you or to us in addition to this policy.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    level: 2,
    paragraphs: [
      "Our time calculator processes the times and durations you enter locally in your browser. Those calculation inputs are not sent to our servers for storage as part of normal tool operation. When you browse the Site, however, certain information may be collected automatically or when you choose to provide it to us directly.",
      "The categories below describe the main types of information involved. We collect only what is reasonably necessary for operating, securing, analysing, and improving the Site, and for responding to enquiries you send us.",
    ],
  },
  {
    id: "automatically-collected",
    title: "Automatically Collected Information",
    level: 3,
    paragraphs: [
      "Technical data such as IP address (which may be truncated or anonymised), browser type and version, operating system, device type, pages visited, time spent on pages, referring URL, and general interaction patterns may be collected through server logs and analytics services. We use this information to monitor performance, maintain security, understand aggregate usage, and improve user experience.",
      "Google Analytics 4 (GA4) and Microsoft Clarity help us analyse visitor behaviour in aggregated or pseudonymised form. These services may use cookies and similar technologies. Analytics is designed to understand trends rather than to identify every individual visitor, though IP addresses may be processed briefly before truncation or anonymisation according to provider settings.",
      "Log data may be retained for a limited period for troubleshooting and abuse prevention. We do not use automatically collected data to determine your precise real-world location for employment or payroll purposes.",
    ],
  },
  {
    id: "information-you-provide",
    title: "Information You Provide",
    level: 3,
    paragraphs: [
      "When you use our contact form, we collect the details you submit, such as your name, email address, subject line, and message content. We use that information to respond to your enquiry, provide support, and improve our services. We do not sell contact-form submissions to third parties for their own marketing.",
      "If you email us directly, we process the information in your message and your email address for the same purposes. Please do not include sensitive personal information in free-text fields unless it is necessary for your enquiry.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    level: 2,
    paragraphs: [
      "We use collected information to operate and improve the Site; maintain reliability of the time calculator; answer user questions; analyse traffic and usage patterns; deliver advertising through services such as Google AdSense; detect fraud and misuse; and meet legal obligations. We do not sell or rent your personal information to third parties for their independent marketing without your consent where consent is required.",
      "Information is processed only for purposes that are reasonably related to operating a free online calculator website, unless a different purpose is disclosed at the time of collection or permitted by law. Where we rely on third-party processors, we require them to handle data in line with their published policies and applicable contractual safeguards.",
      "Aggregated or de-identified statistics may be used for internal reporting. De-identified data is not treated as personal information under this policy while it cannot reasonably identify you.",
    ],
  },
  {
    id: "cookies-policy",
    title: "Cookies Policy",
    level: 2,
    paragraphs: [
      "Cookies are small text files stored on your device when you visit a website. Strictly necessary cookies help core Site functions operate. Analytics cookies (for example, Google Analytics and Microsoft Clarity) help us understand how visitors use pages and features. Advertising cookies (for example, those associated with Google AdSense) may be used to deliver and measure ads, including interest-based advertising where permitted.",
      "You can refuse or delete cookies through your browser settings. Modern browsers including Chrome, Firefox, Safari, and Edge provide cookie controls. Disabling cookies may cause some parts of the Site to behave differently or not at all. To manage Google ad personalisation, you may visit Google's Ads Settings page and follow the instructions provided there.",
      "Where required by law, we will present or honour cookie choices through appropriate consent mechanisms. Your browser may also send \"Do Not Track\" or similar signals; our response to those signals depends on technical feasibility and legal requirements in your region.",
    ],
  },
  {
    id: "analytics-and-clarity",
    title: "Google Analytics and Microsoft Clarity",
    level: 2,
    paragraphs: [
      "Google Analytics 4 is a web analytics service provided by Google LLC. GA4 may collect statistics such as page views, session duration, general geographic region, and device characteristics. Google's data practices are described in Google's Privacy Policy: https://policies.google.com/privacy",
      "Microsoft Clarity is a behavioural analytics service provided by Microsoft Corporation. Clarity may provide heatmaps, session replays with sensitive fields masked where configured, and click analytics to help us improve usability. Microsoft's privacy practices are described in the Microsoft Privacy Statement. We configure these tools to support privacy-conscious analysis and review provider settings periodically.",
      "Data processed by analytics providers may be stored on servers located outside Australia. Where cross-border disclosure occurs, we take reasonable steps consistent with APP 8 and provider contractual terms to ensure appropriate handling.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    level: 2,
    paragraphs: [
      "Analytics data retention follows the settings and policies of our providers (such as Google and Microsoft), often ranging from several months up to limited longer periods before aggregation or deletion. Messages submitted through the contact form are generally retained for up to twenty-four months after your enquiry is resolved, unless a longer period is required for legal or dispute-resolution reasons.",
      "Where we are required to retain information by court order, regulator request, or applicable law, we keep it only for as long as necessary to satisfy that obligation. When retention periods end, we delete or de-identify information using reasonable technical measures.",
      "Backup systems may retain copies for a short additional period before they are overwritten in the ordinary course of operations.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    level: 2,
    paragraphs: [
      "Under the Privacy Act and APPs, you may have rights to access personal information we hold about you, request correction of inaccurate information, and complain about handling that you believe breaches the APPs. You may also have rights under other laws depending on your location, such as GDPR rights if you are in the European Economic Area.",
      "To exercise your rights, contact us through our Contact page or email info@saathesaplama.com. We will respond within a reasonable period and generally within thirty days where practicable. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.",
      "We may need to verify your identity before fulfilling certain requests. We will not charge a fee for access unless permitted by law and the request is manifestly unfounded or excessive.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    level: 2,
    paragraphs: [
      "We implement reasonable technical and organisational safeguards, including HTTPS encryption, secure hosting practices, access controls, and routine security updates, to protect personal information. No method of transmission over the internet or electronic storage is completely secure; we cannot guarantee absolute security.",
      "If we become aware of a data breach likely to cause serious harm, we will take steps required under applicable law, which may include notifying affected individuals and regulators. Please report suspected security issues promptly through our Contact page.",
      "You also play a role in security by using updated browsers, protecting your devices, and avoiding sharing passwords or sensitive employment data in public messages to us.",
    ],
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    level: 2,
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we make material changes, we will revise the \"Last Updated\" date on this page. Changes in law, new analytics or advertising tools, or expansion of Site features may require policy updates. Continued use of the Site after updates are posted constitutes acceptance of the revised policy, to the extent permitted by law.",
      "Because calculation inputs remain in your browser during normal use, our core privacy-by-design approach for the calculator itself is not diminished by routine policy edits. We will describe any change that materially alters how personal information is collected or used.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    level: 2,
    paragraphs: [
      "Time Calculator does not knowingly collect personal information from children under 18 through the contact form or other direct channels without appropriate consent. If we learn that a child has submitted personal information without required consent, we will take reasonable steps to delete it. Parents or guardians who believe a child has provided information to us may contact us to request deletion.",
      "The calculator itself may be used by students of various ages under supervision; that use does not require account registration and does not by default transmit calculation inputs to our servers as described elsewhere in this policy.",
    ],
  },
];

export const privacyFaq: FAQItem[] = [
  {
    question: "Are my time calculator inputs stored on your servers?",
    answer:
      "No. Times and durations you enter in the calculator are processed in your browser and are not sent to our servers for storage during normal calculation. General visit statistics may still be collected through analytics tools as described in this policy.",
  },
  {
    question: "How can I disable cookies?",
    answer:
      "Use your browser's privacy or cookie settings to block or delete cookies. For Google advertising cookies, you may also use Google's Ads Settings. Disabling cookies may affect Site functionality.",
  },
  {
    question: "How do I exercise my privacy rights?",
    answer:
      "Send access, correction, or deletion requests through our Contact page or to info@saathesaplama.com. We aim to respond within thirty days. You may also contact the OAIC if you remain unsatisfied after our response.",
  },
];
