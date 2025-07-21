import EnvelopeIcon from "../assets/icons/envelope.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";

const socialIcons = [
  { name: "Email", icon: EnvelopeIcon, url: "mailto:contact@docutech.com" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://linkedin.com/company/docutech" },
];

const sections = [
  { name: "Features", link: "#features" },
  { name: "Why Choose Us", link: "#why-choose-us" },
  { name: "Pricing", link: "#pricing" },
  { name: "FAQ", link: "#faq" },
];




const faq = [
  {
    q: "Are DocuTech signatures legally binding?",
    a: "Yes, DocuTech signatures are legally binding and comply with ESIGN Act, UETA, and eIDAS regulations. Our electronic signatures have the same legal validity as handwritten signatures and are accepted by courts worldwide.",
  },
  {
    q: "What file formats does DocuTech support?",
    a: "DocuTech currently supports PDF documents for signing. We're working on expanding support for additional document formats in future updates.",
  },
  {
    q: "How secure are my documents?",
    a: "We take security seriously. All documents are encrypted with AES-256 encryption during transmission and storage. We maintain detailed audit trails and comply with SOC-2, GDPR, and HIPAA standards.",
  },
  {
    q: "Can multiple people sign the same document?",
    a: "Yes, DocuTech supports multiple signers on the same document. You can set signing order, send reminders, and track the progress of each signer in real-time.",
  },
  {
    q: "Is there a free plan available?",
    a: "Yes, we offer a free plan that includes up to 5 documents per month with basic features. For unlimited documents and advanced features, check out our Premium and Teams plans.",
  },
];

const whyDocutech = {
  trusted: {
    title: "Professional Solution",
    content:
      "DocuTech provides reliable electronic signature capabilities for businesses of all sizes. Streamline your document signing workflow with our secure platform.",
  },
  soc2: {
    title: "SOC-2 Certified",
    content:
      "DocuTech meets SOC-2 standards, ensuring the highest level of security for your documents. Your data remains confidential and protected at all times.",
  },
  gdpr: {
    title: "GDPR & HIPAA Compliant",
    content:
      "We adhere to GDPR & HIPAA regulations, keeping sensitive information safe and compliant with global standards.",
  },
  encryption: {
    title: "End-to-End Encryption",
    content:
      "All documents are encrypted with AES-256 encryption, ensuring secure transmission and storage. Your privacy is our priority.",
  },
};

const plans = {
  currency: "USD",
  monthly: [
    {
      name: "Free",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
    },
    {
      name: "Premium",
      price: "10",
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    {
      name: "Teams",
      price: "8 per user",
      minTotal: "24",
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
    },
  ],
  annual: [
    {
      name: "Free",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
    },
    {
      name: "Premium",
      price: "100",
      features: [
        "Unlimited documents",
        "Unlimited signees",
        "Activity timeline",
        "Certificate of completion",
      ],
    },
    {
      name: "Teams",
      price: "80 per user",
      minTotal: "240",
      features: [
        "Everything from Premium",
        "Team management",
        "Transferable contracts",
      ],
    },
  ],
};

export default {
  sections,
  faq,
  socialIcons,
  whyDocutech,
  plans,
};
