import {
  Globe,
  MessageSquare,
  Sparkles,
  Workflow,
  Code2,
  Smartphone,
  ShoppingCart,
  Palette,
  BarChart3,
  Megaphone,
  Award,
  Cloud,
  ShieldCheck,
  PenTool,
  CheckCircle2,
  Headphones,
  type LucideIcon,
} from "lucide-react"

export interface ServiceOffering {
  id: number
  title: string
  desc: string
  features: string[]
  badge?: string
  turnaround?: string
  startingPrice: string
  deliveryTime: string
}

export interface ServiceCategory {
  id: string
  number: number
  title: string
  shortTitle?: string
  tagline: string
  icon: LucideIcon
  group: "Development" | "AI & Automation" | "Growth & Marketing" | "Design & Brand" | "Infrastructure & Support"
  featured?: boolean
  services: ServiceOffering[]
}

// Central business contact configuration (WhatsApp & Calling: 7281045393)
export {
  BUSINESS_CONTACT,
  BUSINESS_WHATSAPP,
  getWhatsAppUrl,
  getCallingUrl,
} from "./contactConfig"

export const serviceCategories: ServiceCategory[] = [
  // 1. TOP FEATURED: Website Development
  {
    id: "website-development",
    number: 1,
    title: "Website Development",
    shortTitle: "Websites",
    featured: true,
    tagline:
      "Business websites, landing pages, e-commerce websites, portfolio websites and website redesign.",
    icon: Globe,
    group: "Development",
    services: [
      {
        id: 1,
        title: "Business Website",
        desc: "Professional corporate websites built to establish credibility and convert visitors into clients.",
        features: ["Custom UI/UX", "SEO & Mobile Ready", "CMS Integration"],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 2,
        title: "Landing Page Development",
        desc: "High-converting, fast-loading campaign landing pages optimized for maximum ROI.",
        features: [
          "Sub-second load times",
          "A/B Test Ready",
          "Conversion Architecture",
        ],
        startingPrice: "Starting at ₹2,499",
        deliveryTime: "Delivery: Up to 2 days",
        turnaround: "Delivery: Up to 2 days",
      },
      {
        id: 3,
        title: "Portfolio and Personal Websites",
        desc: "Modern, distinctive personal websites for creators, executives, and professionals.",
        features: [
          "Interactive Showcases",
          "Custom Domain Setup",
          "Responsive Design",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 4,
        title: "E-commerce Websites",
        desc: "Scalable online stores with secure checkout, inventory management, and seamless UX.",
        features: [
          "Stripe/Razorpay Checkout",
          "Product Catalogs",
          "Order Tracking",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 15 days",
        turnaround: "Delivery: Up to 15 days",
      },
      {
        id: 5,
        title: "WordPress Websites",
        desc: "Custom, lightweight WordPress themes and headless setups easy for your team to manage.",
        features: [
          "Custom ACF Fields",
          "No Bloated Builders",
          "Instant Admin Editing",
        ],
        startingPrice: "Starting at ₹5,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 6,
        title: "Website Redesign and Speed Optimisation",
        desc: "Modernizing legacy websites with sub-second load times and 95+ Core Web Vitals.",
        features: [
          "Core Web Vitals 95+",
          "Asset Compression",
          "Fresh Modern UI",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 7,
        title: "Website Maintenance and Bug Fixing",
        desc: "Ongoing updates, security monitoring, daily backups, and prompt bug fixes.",
        features: [
          "Emergency Bug Fixes",
          "Security Patches",
          "Daily Cloud Backups",
        ],
        startingPrice: "Starting at ₹1,499/month",
        deliveryTime: "Ongoing monthly support",
        turnaround: "Ongoing monthly support",
      },
    ],
  },

  // 2. TOP FEATURED: WhatsApp Automation & Chatbots
  {
    id: "whatsapp-automation-chatbots",
    number: 2,
    title: "WhatsApp Automation & Chatbots",
    shortTitle: "WhatsApp Bots",
    featured: true,
    tagline:
      "Automated replies, interactive menu bots, lead qualification, FAQs, appointment booking, order updates and customer support workflows.",
    icon: MessageSquare,
    group: "AI & Automation",
    services: [
      {
        id: 8,
        title: "WhatsApp Business automation",
        desc: "Official WhatsApp Business platform integration, verified profile setup, message templates, and automated trigger rules.",
        features: [
          "Official Business Setup",
          "Automated Triggers",
          "Template Management",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 9,
        title: "Rule-based WhatsApp chatbots",
        desc: "Structured keyword and decision-tree chatbots that reliably answer questions and direct visitors 24/7.",
        features: [
          "Keyword Routing",
          "Zero-Delay Responses",
          "Deterministic Logic",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 10,
        title: "Interactive menu and FAQ bots",
        desc: "Button and list menu navigation enabling users to explore services, read FAQs, and browse pricing with one tap.",
        features: [
          "List & Quick-Reply Buttons",
          "Instant FAQ Retrieval",
          "Guided Self-Service",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 11,
        title: "Lead capture and qualification bots",
        desc: "Interactive conversational forms that collect name, budget, requirements, and qualify leads in real time.",
        features: [
          "Multi-Step Form Flow",
          "Lead Scoring Filters",
          "Instant CRM Forwarding",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 12,
        title: "Appointment and booking automation",
        desc: "Automated calendar scheduling on WhatsApp with calendar sync, slot reservation, and reminders.",
        features: [
          "Calendar Sync (Google/Outlook)",
          "Time-Slot Selection",
          "Automated Reminders",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 13,
        title: "Order notifications and customer updates",
        desc: "Automated transactional WhatsApp alerts for order confirmations, shipping tracking, and delivery status.",
        features: [
          "Real-Time Order Alerts",
          "Live Tracking Links",
          "Post-Purchase Support",
        ],
        startingPrice: "Starting at ₹12,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 14,
        title: "WhatsApp CRM integration",
        desc: "Direct two-way synchronization between WhatsApp chats and your CRM to maintain contact histories and deal stages.",
        features: ["Two-Way Sync", "Chat History Archival", "Rep Assignment"],
        startingPrice: "Starting at ₹19,999",
        deliveryTime: "Delivery: Up to 9 days",
        turnaround: "Delivery: Up to 9 days",
      },
      {
        id: 15,
        title: "n8n workflow automation",
        desc: "Flexible open-source orchestration connecting WhatsApp events to Google Sheets, Notion, databases, and APIs.",
        features: [
          "Custom Webhooks",
          "Multi-Step Logic",
          "Zero Vendor Lock-in",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 16,
        title: "Automated follow-up workflows",
        desc: "Timed drip messages and re-engagement campaigns sent to prospective leads who haven't responded.",
        features: [
          "Drip Sequences",
          "Smart Time Delays",
          "Re-Engagement Triggers",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 17,
        title: "Human counselor or support-agent handoff",
        desc: "Seamless transition from chatbot conversation to live human agents when complex assistance is needed.",
        features: [
          "Live Agent Dashboard",
          "Context Transfer",
          "Multi-Agent Routing",
        ],
        startingPrice: "Starting at ₹12,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
    ],
  },

  // 3. TOP FEATURED: WhatsApp AI & AI Agents
  {
    id: "whatsapp-ai-agents",
    number: 3,
    title: "WhatsApp AI & AI Agents",
    shortTitle: "WhatsApp AI",
    featured: true,
    tagline:
      "AI-powered WhatsApp assistants, natural-language conversations, business knowledge-base integration, intelligent lead qualification and human handoff.",
    icon: Sparkles,
    group: "AI & Automation",
    services: [
      {
        id: 18,
        title: "AI-powered WhatsApp chatbot",
        desc: "Next-generation conversational bot powered by LLMs to understand natural language, intent, and context.",
        features: [
          "LLM Intent Recognition",
          "Context Awareness",
          "Human-Like Tone",
        ],
        startingPrice: "Starting at ₹29,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 19,
        title: "AI sales assistant",
        desc: "Proactive AI representative that pitches your offerings, handles objections, provides pricing, and closes deals.",
        features: [
          "Objection Handling",
          "Value-Driven Pitching",
          "Checkout Link Delivery",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 20,
        title: "AI customer support agent",
        desc: "24/7 intelligent tier-1 support agent that diagnoses customer issues and resolves inquiries instantly.",
        features: [
          "24/7 Instant Resolution",
          "Ticket Auto-Categorization",
          "Empathetic Responses",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 21,
        title: "AI lead qualification",
        desc: "Smart conversational evaluator that assesses prospect budget, timeline, authority, and urgency before routing.",
        features: [
          "BANT Framework Scoring",
          "Prospect Enrichment",
          "Priority Tagging",
        ],
        startingPrice: "Starting at ₹24,999",
        deliveryTime: "Delivery: Up to 9 days",
        turnaround: "Delivery: Up to 9 days",
      },
      {
        id: 22,
        title: "Business-specific knowledge-base chatbot",
        desc: "RAG-based AI trained directly on your company PDFs, manuals, pricing tables, and documentation.",
        features: [
          "Custom RAG Knowledge Base",
          "Source Grounding",
          "Zero Hallucinations",
        ],
        startingPrice: "Starting at ₹49,999",
        deliveryTime: "Delivery: Up to 15 days",
        turnaround: "Delivery: Up to 15 days",
      },
      {
        id: 23,
        title: "AI appointment assistant",
        desc: "Intelligent conversational booking agent that negotiates meeting times naturally within chat.",
        features: [
          "Natural-Language Booking",
          "Timezone Detection",
          "Calendar Conflict Checks",
        ],
        startingPrice: "Starting at ₹24,999",
        deliveryTime: "Delivery: Up to 9 days",
        turnaround: "Delivery: Up to 9 days",
      },
      {
        id: 24,
        title: "AI-powered FAQ responses",
        desc: "Semantic search assistant that comprehends vague user questions and retrieves accurate answers effortlessly.",
        features: [
          "Semantic Understanding",
          "Dynamic Answers",
          "Multimedia Explanations",
        ],
        startingPrice: "Starting at ₹19,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 25,
        title: "AI + CRM integrations",
        desc: "Bi-directional AI sync that automatically updates contact profiles, summarizes chat notes, and creates tasks in your CRM.",
        features: [
          "Chat Summary Generation",
          "Deal Stage Updates",
          "Automated Task Creation",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 26,
        title: "Multilingual AI conversations",
        desc: "Seamless real-time translation and native communication in English, Hindi, Arabic, Spanish, and 50+ languages.",
        features: [
          "50+ Language Detection",
          "Localized Nuances",
          "Cross-Border Support",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 27,
        title: "AI agent with human handoff",
        desc: "Intelligent escalation engine that detects user frustration or complex questions and summons a human agent with summary.",
        features: [
          "Sentiment Analysis Trigger",
          "Executive Summary Dossier",
          "Live Agent Alert",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
    ],
  },

  // 4. TOP FEATURED: CRM & Business Automation
  {
    id: "crm-business-automation",
    number: 4,
    title: "CRM & Business Automation",
    shortTitle: "CRM & Automation",
    featured: true,
    tagline:
      "Custom CRM systems, sales pipelines, lead management, customer follow-ups, workflow automation and reporting dashboards.",
    icon: Workflow,
    group: "AI & Automation",
    services: [
      {
        id: 28,
        title: "Custom CRM development",
        desc: "Tailor-made relationship management platforms custom-built around your exact sales and operational workflows.",
        features: [
          "Custom Data Models",
          "Role Permissions",
          "Self-Hosted or Cloud",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 20 days",
        turnaround: "Delivery: Up to 20 days",
      },
      {
        id: 29,
        title: "Pharmacy CRM",
        desc: "Specialized pharmaceutical and medical practice CRM tracking prescriptions, patient records, refills, and doctor visits.",
        features: [
          "Prescription Tracking",
          "Refill Alerts",
          "HIPAA/Regulatory Mindset",
        ],
        startingPrice: "Starting at ₹49,999",
        deliveryTime: "Delivery: Up to 25 days",
        turnaround: "Delivery: Up to 25 days",
      },
      {
        id: 30,
        title: "Sales and inventory management software",
        desc: "Integrated stock tracking, sales order processing, purchase orders, and supplier relationship tools.",
        features: [
          "Real-Time Inventory",
          "Re-order Level Alerts",
          "Multi-Warehouse Support",
        ],
        startingPrice: "Starting at ₹29,999",
        deliveryTime: "Delivery: Up to 15 days",
        turnaround: "Delivery: Up to 15 days",
      },
      {
        id: 31,
        title: "Lead management systems",
        desc: "Centralized pipeline capturing leads from web, WhatsApp, and ads with automated attribution and assignment.",
        features: [
          "Omnichannel Ingestion",
          "Round-Robin Assignment",
          "Lead Status Tracking",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 32,
        title: "Business workflow automation",
        desc: "End-to-end automation of recurring tasks, approval hierarchies, invoice generation, and status updates.",
        features: [
          "Approval Workflows",
          "PDF Document Generation",
          "Cross-App Sync",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 9 days",
        turnaround: "Delivery: Up to 9 days",
      },
      {
        id: 33,
        title: "Reporting and analytics dashboards",
        desc: "Interactive executive dashboards visualizing revenue trends, team conversion rates, and sales KPIs.",
        features: [
          "Visual KPI Metrics",
          "Conversion Funnels",
          "Automated Export to Excel/PDF",
        ],
        startingPrice: "Starting at ₹19,999",
        deliveryTime: "Delivery: Up to 10 days",
        turnaround: "Delivery: Up to 10 days",
      },
      {
        id: 34,
        title: "Third-party API integrations",
        desc: "Robust connections with payment gateways, ERPs, accounting platforms (QuickBooks/Tally), and marketing tools.",
        features: [
          "Stripe/Razorpay",
          "ERP & Accounting Sync",
          "Secure Webhooks",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
    ],
  },

  // 5. TOP FEATURED: Web Apps & Custom Software
  {
    id: "web-apps-custom-software",
    number: 5,
    title: "Web Apps & Custom Software",
    shortTitle: "Custom Software",
    featured: true,
    tagline:
      "Business web applications, SaaS platforms, custom dashboards, internal tools and API integrations.",
    icon: Code2,
    group: "Development",
    services: [
      {
        id: 35,
        title: "Custom Web Applications",
        desc: "Tailored web applications with bespoke business logic, robust APIs, and rich interfaces.",
        features: [
          "Modern React/Node Stack",
          "REST & GraphQL APIs",
          "Role Permissions",
        ],
        startingPrice: "Starting at ₹29,999",
        deliveryTime: "Delivery: Up to 20 days",
        turnaround: "Delivery: Up to 20 days",
      },
      {
        id: 36,
        title: "SaaS Product Development",
        desc: "Full-lifecycle software-as-a-service platforms with multi-tenancy, billing, and auth.",
        features: [
          "Multi-Tenant Database",
          "Stripe Billing & Subscriptions",
          "Usage Metering",
        ],
        startingPrice: "Starting at ₹99,999",
        deliveryTime: "Delivery: Up to 60 days",
        turnaround: "Delivery: Up to 60 days",
      },
      {
        id: 37,
        title: "Business Dashboards",
        desc: "Real-time analytics and data visualization dashboards that turn raw numbers into action.",
        features: [
          "Live Metric Charts",
          "Custom Filtering",
          "Export to PDF/Excel",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 38,
        title: "Customer and Employee Portals",
        desc: "Secure self-service portals for customer account management and team collaboration.",
        features: [
          "Document Sharing",
          "Self-Service Requests",
          "Enterprise SSO",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 20 days",
        turnaround: "Delivery: Up to 20 days",
      },
      {
        id: 39,
        title: "Booking and Appointment Systems",
        desc: "Automated scheduling calendars, reminder notifications, and booking flows.",
        features: [
          "Google Calendar Sync",
          "Automated SMS/Email",
          "Deposit Collection",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 10 days",
        turnaround: "Delivery: Up to 10 days",
      },
      {
        id: 40,
        title: "Inventory and Billing Software",
        desc: "Centralized stock tracking, automated invoicing, GST/tax calculation, and reports.",
        features: [
          "Barcode Integration",
          "Low-Stock Alerts",
          "Automated Invoicing",
        ],
        startingPrice: "Starting at ₹29,999",
        deliveryTime: "Delivery: Up to 16 days",
        turnaround: "Delivery: Up to 16 days",
      },
      {
        id: 41,
        title: "ERP and Business Management Systems",
        desc: "Integrated systems uniting finance, HR, inventory, and operations in one hub.",
        features: [
          "Modular Workflows",
          "Audit Trail",
          "Departmental Dashboards",
        ],
        startingPrice: "Starting at ₹99,999",
        deliveryTime: "Delivery: Up to 60 days",
        turnaround: "Delivery: Up to 60 days",
      },
    ],
  },

  // 6. Mobile App Development
  {
    id: "mobile-app-development",
    number: 6,
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline:
      "Native and cross-platform mobile apps crafted for effortless adoption and top store ratings.",
    icon: Smartphone,
    group: "Development",
    services: [
      {
        id: 42,
        title: "Android Applications",
        desc: "High-performance native Android apps designed for Google Play Store success.",
        features: [
          "Kotlin & Jetpack",
          "Material 3 Design",
          "Google Play Ready",
        ],
        startingPrice: "Starting at ₹34,999",
        deliveryTime: "Delivery: Up to 30 days",
        turnaround: "Delivery: Up to 30 days",
      },
      {
        id: 43,
        title: "iOS Applications",
        desc: "Sleek, polished Swift/iOS applications adhering to Apple Human Interface Guidelines.",
        features: [
          "Swift & SwiftUI",
          "iOS Guidelines Compliant",
          "App Store Publishing",
        ],
        startingPrice: "Starting at ₹49,999",
        deliveryTime: "Delivery: Up to 40 days",
        turnaround: "Delivery: Up to 40 days",
      },
      {
        id: 44,
        title: "Cross-Platform Apps",
        desc: "Unified iOS and Android apps using React Native or Flutter, cutting costs in half.",
        features: [
          "Single Shared Codebase",
          "React Native & Flutter",
          "Fast Iteration",
        ],
        startingPrice: "Starting at ₹49,999",
        deliveryTime: "Delivery: Up to 30 days",
        turnaround: "Delivery: Up to 30 days",
      },
      {
        id: 45,
        title: "Business and Customer Apps",
        desc: "Internal staff apps and customer-facing apps tailored to daily operational workflows.",
        features: [
          "Role-Based Access",
          "Offline Mode Support",
          "Push Notifications",
        ],
        startingPrice: "Starting at ₹49,999",
        deliveryTime: "Delivery: Up to 30 days",
        turnaround: "Delivery: Up to 30 days",
      },
      {
        id: 46,
        title: "App Maintenance and Publishing Support",
        desc: "App store submission, review guidance, version upgrades, and OS updates.",
        features: [
          "Store Review Approval",
          "Crashlytics Monitoring",
          "OS Version Upgrades",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
    ],
  },

  // 7. E-commerce
  {
    id: "ecommerce",
    number: 7,
    title: "E-commerce",
    shortTitle: "E-commerce",
    tagline:
      "End-to-end commerce solutions engineered for high average order value and friction-free checkouts.",
    icon: ShoppingCart,
    group: "Development",
    services: [
      {
        id: 47,
        title: "Online Store Setup",
        desc: "Turnkey Shopify, WooCommerce, or custom storefronts ready to sell from day one.",
        features: [
          "Shopify & WooCommerce",
          "Product Variants",
          "Mobile-First Checkout",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 10 days",
        turnaround: "Delivery: Up to 10 days",
      },
      {
        id: 48,
        title: "Product Catalogue Websites",
        desc: "Digital showcases for B2B manufacturers and distributors with enquiry quoting.",
        features: [
          "Filter & Spec Sheets",
          "Request a Quote Flow",
          "B2B Catalog View",
        ],
        startingPrice: "Starting at ₹5,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 49,
        title: "Payment Gateway Integration",
        desc: "Seamless integration of Stripe, PayPal, Razorpay, or Apple Pay with instant webhooks.",
        features: [
          "Multi-Currency Support",
          "Instant Webhooks",
          "PCI-DSS Compliance",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 2 days",
        turnaround: "Delivery: Up to 2 days",
      },
      {
        id: 50,
        title: "Order and Delivery Workflow Integration",
        desc: "Automatic shipping label generation, courier tracking, and dispatch notifications.",
        features: [
          "Carrier API Integration",
          "Real-Time Tracking",
          "Automated Returns",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 51,
        title: "E-commerce Maintenance and Optimisation",
        desc: "Conversion rate tuning, cart abandonment recovery, and catalog management.",
        features: ["Abandoned Cart Recovery", "Speed Tuning", "Inventory Sync"],
        startingPrice: "Starting at ₹3,999/month",
        deliveryTime: "Ongoing monthly support",
        turnaround: "Ongoing monthly support",
      },
    ],
  },

  // 8. UI/UX and Product Design
  {
    id: "ui-ux-product-design",
    number: 8,
    title: "UI/UX and Product Design",
    shortTitle: "UI/UX Design",
    tagline:
      "Human-centered, pixel-perfect user experiences that solve friction and elevate your product prestige.",
    icon: Palette,
    group: "Design & Brand",
    services: [
      {
        id: 52,
        title: "Website UI/UX Design",
        desc: "Aesthetic, intuitive, and conversion-focused interface designs grounded in user research.",
        features: [
          "User Journey Mapping",
          "Wireframes to Final UI",
          "Responsive Grids",
        ],
        startingPrice: "Starting at ₹5,999",
        deliveryTime: "Delivery: Up to 7 days",
        turnaround: "Delivery: Up to 7 days",
      },
      {
        id: 53,
        title: "Mobile App Design",
        desc: "Pixel-perfect mobile wireframes, screens, and micro-interactions for iOS and Android.",
        features: [
          "iOS & Android Patterns",
          "Micro-Interactions",
          "Touch-First UX",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 10 days",
        turnaround: "Delivery: Up to 10 days",
      },
      {
        id: 54,
        title: "Figma Prototypes",
        desc: "Clickable, high-fidelity interactive prototypes to test workflows before writing a line of code.",
        features: [
          "Clickable Flows",
          "Interactive States",
          "Developer Handoff Ready",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 55,
        title: "Design Systems and Component Libraries",
        desc: "Reusable UI token libraries in Figma and code ensuring brand consistency.",
        features: [
          "Design Tokens",
          "Reusable Component Variants",
          "Comprehensive Docs",
        ],
        startingPrice: "Starting at ₹14,999",
        deliveryTime: "Delivery: Up to 12 days",
        turnaround: "Delivery: Up to 12 days",
      },
      {
        id: 56,
        title: "Existing Interface Redesign",
        desc: "UX audits and modern visual redesigns to transform clunky, dated digital products.",
        features: [
          "Heuristic Evaluation",
          "Visual Modernization",
          "Accessibility Audit",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
    ],
  },

  // 9. SEO and Analytics
  {
    id: "seo-analytics",
    number: 9,
    title: "SEO and Analytics",
    shortTitle: "SEO & Analytics",
    tagline:
      "Data-driven search visibility and analytics setups to track ROI and capture high-intent traffic.",
    icon: BarChart3,
    group: "Growth & Marketing",
    services: [
      {
        id: 57,
        title: "Technical SEO",
        desc: "Crawl budget optimization, schema markup, indexation audits, and sitemap configuration.",
        features: [
          "Schema.org JSON-LD",
          "XML Sitemap & Robots",
          "Crawl Error Fixes",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 58,
        title: "On-Page SEO",
        desc: "Meta tags, header structure, internal linking, and semantic keyword placement for key pages.",
        features: [
          "Keyword Optimization",
          "Header Hierarchy",
          "Open Graph Setup",
        ],
        startingPrice: "Starting at ₹2,499",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 59,
        title: "Keyword and Content Research",
        desc: "Deep competitive research identifying high-intent keywords your customers search for.",
        features: [
          "Competitor Gap Analysis",
          "Search Intent Mapping",
          "Target Keyword Matrix",
        ],
        startingPrice: "Starting at ₹2,499",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 60,
        title: "Google Search Console Setup",
        desc: "Property verification, sitemap submission, coverage error resolution, and monitor setup.",
        features: [
          "DNS Verification",
          "Index Coverage Fixes",
          "Query Performance Tracking",
        ],
        startingPrice: "Starting at ₹999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 61,
        title: "Google Analytics 4 Setup",
        desc: "GA4 property creation, custom event tracking, funnels, and user journey measurement.",
        features: [
          "Custom Event Triggers",
          "E-commerce Tracking",
          "Cross-Domain Measurement",
        ],
        startingPrice: "Starting at ₹1,999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 62,
        title: "Conversion Tracking and Reporting",
        desc: "Executive dashboards tracking inquiries, purchases, ROAS, and lead sources.",
        features: [
          "Looker Studio Dashboards",
          "Lead Attribution",
          "Monthly ROI Reports",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
    ],
  },

  // 10. Digital Marketing
  {
    id: "digital-marketing",
    number: 10,
    title: "Digital Marketing",
    shortTitle: "Marketing",
    tagline:
      "Targeted ad campaigns, content roadmaps, and conversion funnels to drive revenue predictability.",
    icon: Megaphone,
    group: "Growth & Marketing",
    services: [
      {
        id: 63,
        title: "Social Media Account Setup",
        desc: "Professional branding, bio optimization, and link setup across all primary social networks.",
        features: [
          "Branded Cover Graphics",
          "Bio SEO Optimization",
          "Profile Verification Prep",
        ],
        startingPrice: "Starting at ₹1,499",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 64,
        title: "Social Media Content Planning",
        desc: "Strategic monthly content calendars, post templates, and publication schedules.",
        features: [
          "30-Day Content Matrix",
          "Canva/Figma Templates",
          "Hashtag Roadmaps",
        ],
        startingPrice: "Starting at ₹3,999/month",
        deliveryTime: "Ongoing monthly retainer",
        turnaround: "Ongoing monthly retainer",
      },
      {
        id: 65,
        title: "Meta Ads Campaign Setup",
        desc: "High-ROI Facebook & Instagram ad campaigns with targeted lookalikes and custom audiences.",
        features: [
          "Pixel & CAPI Setup",
          "Audience Retargeting",
          "High-Converting Ad Creatives",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 2 days",
        turnaround: "Delivery: Up to 2 days",
      },
      {
        id: 66,
        title: "Google Ads Campaign Setup",
        desc: "Search, Display, and Performance Max campaigns targeting high-intent buyer searches.",
        features: [
          "Negative Keyword Lists",
          "Quality Score Tuning",
          "PMax Asset Groups",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 2 days",
        turnaround: "Delivery: Up to 2 days",
      },
      {
        id: 67,
        title: "Lead Generation Campaigns",
        desc: "Multi-channel funnels with dedicated lead magnets and automated nurturing sequences.",
        features: [
          "Lead Magnet Architecture",
          "Multi-Step Opt-in",
          "Instant CRM Forwarding",
        ],
        startingPrice: "Starting at ₹7,999/month",
        deliveryTime: "Ongoing monthly campaign",
        turnaround: "Ongoing monthly campaign",
      },
      {
        id: 68,
        title: "Landing Page and Conversion Optimisation",
        desc: "A/B split testing, heatmap analysis, and copy refinement to maximize conversion rate.",
        features: [
          "Heatmap Hotjar Review",
          "A/B Variant Testing",
          "Friction Point Removal",
        ],
        startingPrice: "Starting at ₹5,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
    ],
  },

  // 11. Digital Presence and Branding
  {
    id: "digital-presence-branding",
    number: 11,
    title: "Digital Presence and Branding",
    shortTitle: "Presence & Branding",
    tagline:
      "Distinctive brand identities, domains, and professional setups that command premium market positioning.",
    icon: Award,
    group: "Design & Brand",
    services: [
      {
        id: 69,
        title: "Logo and Brand Identity Design",
        desc: "Memorable logo marks, color systems, typography pairings, and brand guidelines.",
        features: [
          "Vector Mark & Wordmark",
          "Color Palette & Typography",
          "Brand Guidelines PDF",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 70,
        title: "Business Email Setup",
        desc: "Google Workspace or Microsoft 365 configuration with custom domains, DKIM, and SPF records.",
        features: [
          "Google Workspace / 365",
          "DKIM & SPF Records",
          "Spam Score Optimization",
        ],
        startingPrice: "Starting at ₹999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 71,
        title: "Domain and Hosting Setup",
        desc: "DNS management, high-performance CDN setup, and reliable zero-downtime hosting.",
        features: [
          "DNS Record Routing",
          "Cloudflare CDN Setup",
          "Zero-Downtime Migration",
        ],
        startingPrice: "Starting at ₹999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 72,
        title: "Google Business Profile Setup",
        desc: "Verified local business listing optimization to rank in Google Maps and local 3-pack.",
        features: [
          "Verification Guidance",
          "Local SEO Citations",
          "Review Funnel Setup",
        ],
        startingPrice: "Starting at ₹999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 73,
        title: "Digital Business Cards and Link Pages",
        desc: "Custom branded link-in-bio pages and NFC digital business cards for networking.",
        features: [
          "Branded Link-in-Bio",
          "vCard QR Codes",
          "Tap-to-Save Contact",
        ],
        startingPrice: "Starting at ₹1,499",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
    ],
  },

  // 12. Cloud and DevOps Infrastructure
  {
    id: "cloud-devops",
    number: 12,
    title: "Cloud and DevOps Infrastructure",
    shortTitle: "Cloud & DevOps",
    tagline:
      "Reliable cloud environments, automated deployment pipelines, and high-availability server setups.",
    icon: Cloud,
    group: "Infrastructure & Support",
    services: [
      {
        id: 74,
        title: "Cloud Hosting & Server Setup",
        desc: "Scalable cloud deployment on AWS, Google Cloud, DigitalOcean, or Vercel.",
        features: [
          "Multi-Region Setup",
          "Auto-Scaling Rules",
          "Cost Optimization",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 75,
        title: "CI/CD Deployment & Automation",
        desc: "Automated build, test, and release pipelines using GitHub Actions or GitLab CI.",
        features: [
          "GitHub Actions Workflows",
          "Zero-Downtime Deploys",
          "Automated Rollbacks",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 4 days",
        turnaround: "Delivery: Up to 4 days",
      },
      {
        id: 76,
        title: "Server Maintenance & 24/7 Monitoring",
        desc: "Proactive server patching, resource monitoring, and automated uptime alerts.",
        features: [
          "CPU/RAM Health Monitors",
          "OS Security Patches",
          "Instant Slack/SMS Alerts",
        ],
        startingPrice: "Starting at ₹3,999/month",
        deliveryTime: "Setup: Up to 3 days, 24/7 monitoring",
        turnaround: "Setup: Up to 3 days, 24/7 monitoring",
      },
      {
        id: 77,
        title: "Docker Containerization & Microservices",
        desc: "Containerizing applications for portable, consistent environments and painless scaling.",
        features: [
          "Docker & Docker Compose",
          "Kubernetes / ECS Setup",
          "Reproducible Builds",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 78,
        title: "Database Migration & Backup Recovery",
        desc: "Zero-data-loss database migrations, automated daily snapshots, and rapid failover plans.",
        features: [
          "Automated Daily Snapshots",
          "Point-in-Time Recovery",
          "Encrypted Off-Site Storage",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
    ],
  },

  // 13. Cybersecurity and Compliance
  {
    id: "cybersecurity-compliance",
    number: 13,
    title: "Cybersecurity and Compliance",
    shortTitle: "Cybersecurity",
    tagline:
      "Hardened web applications, proactive vulnerability management, and regulatory compliance.",
    icon: ShieldCheck,
    group: "Infrastructure & Support",
    services: [
      {
        id: 79,
        title: "Web & App Security Audits",
        desc: "Comprehensive vulnerability scans identifying OWASP Top 10 risks and code leaks.",
        features: [
          "OWASP Top 10 Scan",
          "Penetration Testing",
          "Actionable Fix Report",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 80,
        title: "SSL, HTTPS & Encryption Setup",
        desc: "TLS certificate deployment, HSTS enforcement, and end-to-end data encryption.",
        features: [
          "Automated TLS Renewal",
          "HSTS Security Headers",
          "Data-at-Rest Encryption",
        ],
        startingPrice: "Starting at ₹999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
      {
        id: 81,
        title: "Vulnerability Testing & Malware Protection",
        desc: "Proactive pen-testing, malware remediation, and web application firewall (WAF) setup.",
        features: [
          "Cloudflare WAF Rules",
          "Malware Cleanup",
          "DDoS Protection Layer",
        ],
        startingPrice: "Starting at ₹6,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
      {
        id: 82,
        title: "Privacy Policy & GDPR Compliance Setup",
        desc: "Cookie consent banners, privacy policy integration, and data handling compliance.",
        features: [
          "Cookie Consent Banner",
          "GDPR/CCPA Compliance",
          "Data Subject Request Flows",
        ],
        startingPrice: "Starting at ₹1,999",
        deliveryTime: "Delivery: Up to 1 day",
        turnaround: "Delivery: Up to 1 day",
      },
    ],
  },

  // 14. Content Strategy and Copywriting
  {
    id: "content-copywriting",
    number: 14,
    title: "Content Strategy and Copywriting",
    shortTitle: "Content & Copy",
    tagline:
      "Compelling messaging and conversion-focused copy that articulates your value proposition clearly.",
    icon: PenTool,
    group: "Growth & Marketing",
    services: [
      {
        id: 83,
        title: "Conversion-Focused Website Copywriting",
        desc: "Clear, compelling value propositions and page copy that turn visitors into paying clients.",
        features: [
          "Value Proposition Clarity",
          "Headline & Hook Testing",
          "Call-to-Action Focus",
        ],
        startingPrice: "Starting at ₹2,499",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 84,
        title: "SEO Blog Writing & Content Marketing",
        desc: "High-ranking authoritative articles that drive steady organic search traffic.",
        features: [
          "Deep Keyword Grounding",
          "1,500+ Word In-Depth Posts",
          "Internal Linking Built-in",
        ],
        startingPrice: "Starting at ₹799/article",
        deliveryTime: "Estimate: 4–10 hrs/article",
        turnaround: "Estimate: 4–10 hrs/article",
      },
      {
        id: 85,
        title: "Technical Documentation & API Guides",
        desc: "Developer documentation, API references, and user walkthroughs that reduce support tickets.",
        features: [
          "Developer Quickstarts",
          "Interactive Code Examples",
          "Clear API Schema Docs",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 5 days",
        turnaround: "Delivery: Up to 5 days",
      },
      {
        id: 86,
        title: "Email Newsletter & Lifecycle Sequences",
        desc: "Welcome series, nurture drips, and promotional emails that build loyalty and repeat revenue.",
        features: [
          "5-Part Welcome Sequences",
          "High Open-Rate Subject Lines",
          "Automated Lifecycle Rules",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 87,
        title: "Case Studies & Success Stories",
        desc: "Data-driven proof stories demonstrating your results and overcoming client objections.",
        features: [
          "Problem-Solution-Result Flow",
          "Executive Quotes",
          "Downloadable PDF & Web Format",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
    ],
  },

  // 15. Quality Assurance and Testing
  {
    id: "quality-assurance-testing",
    number: 15,
    title: "Quality Assurance and Testing",
    shortTitle: "QA & Testing",
    tagline:
      "Rigorous automated and manual testing to eliminate bugs before code ever reaches production.",
    icon: CheckCircle2,
    group: "Infrastructure & Support",
    services: [
      {
        id: 88,
        title: "Automated End-to-End Testing Suites",
        desc: "Playwright and Cypress end-to-end test suites ensuring releases never break critical flows.",
        features: [
          "Playwright / Cypress",
          "Checkout Flow Regression",
          "Nightly Test Runs",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 10 days",
        turnaround: "Delivery: Up to 10 days",
      },
      {
        id: 89,
        title: "Manual Functional & Usability QA",
        desc: "Rigorous human testing across edge cases, user workflows, and input validation.",
        features: [
          "Step-by-Step Test Matrices",
          "Edge-Case Boundary Checks",
          "Detailed Bug Screencasts",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 3 days",
        turnaround: "Delivery: Up to 3 days",
      },
      {
        id: 90,
        title: "Cross-Browser & Mobile Device Testing",
        desc: "Testing across Chrome, Safari, Firefox, iOS, Android, tablets, and legacy screen sizes.",
        features: [
          "Safari iOS Validation",
          "Mobile Android Devices",
          "Responsive Breakpoint Audit",
        ],
        startingPrice: "Starting at ₹3,999",
        deliveryTime: "Delivery: Up to 2 days",
        turnaround: "Delivery: Up to 2 days",
      },
      {
        id: 91,
        title: "Performance, Load & Stress Testing",
        desc: "Benchmarking server limits, database query speeds, and high-concurrency traffic spikes.",
        features: [
          "k6 Load Testing",
          "Database Concurrency Test",
          "Bottleneck Identification",
        ],
        startingPrice: "Starting at ₹9,999",
        deliveryTime: "Delivery: Up to 8 days",
        turnaround: "Delivery: Up to 8 days",
      },
    ],
  },

  // 16. Support and Maintenance Retainers
  {
    id: "support-maintenance-retainers",
    number: 16,
    title: "Support and Maintenance Retainers",
    shortTitle: "Support Retainers",
    tagline:
      "Dedicated engineering hours, SLA-backed response times, and proactive continuous improvements.",
    icon: Headphones,
    group: "Infrastructure & Support",
    services: [
      {
        id: 92,
        title: "Monthly Dedicated Developer Support",
        desc: "Reserved engineering hours every month for rapid feature iterations and enhancements.",
        features: [
          "Dedicated Engineer Hours",
          "Sprint Planning Support",
          "Priority Slack Channel",
        ],
        startingPrice: "Starting at ₹9,999/month",
        deliveryTime: "Ongoing monthly support",
        turnaround: "Ongoing monthly support",
      },
      {
        id: 93,
        title: "Continuous Conversion Rate Optimisation (CRO)",
        desc: "Ongoing split-testing, user feedback collection, and checkout funnel optimization.",
        features: [
          "Monthly Split-Tests",
          "Funnel Drop-Off Analysis",
          "Iterative UI Tweaks",
        ],
        startingPrice: "Starting at ₹7,999/month",
        deliveryTime: "Ongoing monthly retainer",
        turnaround: "Ongoing monthly retainer",
      },
      {
        id: 94,
        title: "Core Platform & Security Patch Updates",
        desc: "Routine framework, dependency, CMS, and security patch upgrades without downtime.",
        features: [
          "Monthly Dependency Audits",
          "Staging Regression Test",
          "Zero Downtime Deployments",
        ],
        startingPrice: "Starting at ₹2,499/month",
        deliveryTime: "Ongoing monthly updates",
        turnaround: "Ongoing monthly updates",
      },
      {
        id: 95,
        title: "Uptime SLA & Emergency Response",
        desc: "99.9% uptime monitoring with priority 1-hour emergency response for outages.",
        features: [
          "99.9% Uptime Guarantee",
          "1-Hour Priority Incident SLA",
          "Post-Mortem Reports",
        ],
        startingPrice: "Starting at ₹7,999/month",
        deliveryTime: "Setup: Up to 3 days, 24/7 emergency SLA",
        turnaround: "Setup: Up to 3 days, 24/7 emergency SLA",
      },
      {
        id: 96,
        title: "Technical Advisory & Fractional CTO Consulting",
        desc: "High-level architecture guidance, tech stack selection, and digital roadmap planning.",
        features: [
          "Architecture Review",
          "Tech Stack Evaluation",
          "Bi-Weekly Strategy Calls",
        ],
        startingPrice: "Starting at ₹999/hour",
        deliveryTime: "On-demand (1–3 hrs/session)",
        turnaround: "On-demand (1–3 hrs/session)",
      },
    ],
  },
]

// The Top 5 Featured Categories in exact mandatory order
export const topFeaturedCategories = serviceCategories.filter((c) => c.featured)

// Flattened list of all individual service offerings with category reference
export const allServices: ServiceOffering & {
  categoryId: string
  categoryTitle: string
  categoryNumber: number
  categoryIcon: LucideIcon
}[] = serviceCategories.flatMap((cat) =>
  cat.services.map((svc) => ({
    ...svc,
    categoryId: cat.id,
    categoryTitle: cat.title,
    categoryNumber: cat.number,
    categoryIcon: cat.icon,
  })),
)

export const TOTAL_CATEGORIES_COUNT = serviceCategories.length
export const TOTAL_SERVICES_COUNT = allServices.length
export const FEATURED_CATEGORIES_COUNT = topFeaturedCategories.length
