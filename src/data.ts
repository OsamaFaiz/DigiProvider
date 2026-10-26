import { serviceCategories } from "./servicesCatalogue"

export * from "./servicesCatalogue"
export * from "./announcementsData"

export const services = serviceCategories.slice(0, 5).map((c) => ({
  icon: c.icon,
  title: c.title,
  desc: c.tagline,
  id: c.id,
  count: c.services.length,
}))

export const projects = [
  {
    name: "Northwind Logistics",
    tag: "Web Platform",
    img: "photo-1460925895917-afdab827c52f",
  },
  {
    name: "Fitly Mobile App",
    tag: "Mobile App",
    img: "photo-1551650975-87deedd944c3",
  },
  {
    name: "Brightside Clinic",
    tag: "Website",
    img: "photo-1551288049-bebda4e38f71",
  },
  {
    name: "Ledgerly Dashboard",
    tag: "Custom Software",
    img: "photo-1531403009284-440f080d1e12",
  },
  {
    name: "Atlas Support Bot",
    tag: "AI Solutions",
    img: "photo-1677442136019-21780ecad995",
  },
  {
    name: "Harbor & Co. Store",
    tag: "E-commerce",
    img: "photo-1556742049-0cfed4f6a45d",
  },
]

export const plans = [
  {
    name: "Starter",
    price: "₹6,999",
    note: "Starting at ₹6,999 for professional corporate website with fast 5-day delivery",
    features: [
      "Custom responsive business website",
      "Fast 5-day delivery timeline",
      "WhatsApp & contact integration",
      "SEO, mobile & speed optimized",
    ],
    popular: false,
  },
  {
    name: "Growth & Automation",
    price: "₹24,999",
    note: "Starting at ₹24,999 for businesses scaling with AI agents and automation",
    features: [
      "AI-powered WhatsApp assistant or chatbot",
      "CRM & lead qualification workflow",
      "Reporting & analytics dashboards",
      "API integrations & handover",
    ],
    popular: true,
  },
  {
    name: "Enterprise & Custom Software",
    price: "Custom",
    note: "For full-scale SaaS, mobile apps, ERPs and fractional CTO advisory",
    features: [
      "Cross-platform Android & iOS apps",
      "Custom web applications & SaaS",
      "Dedicated developer monthly retainers",
      "24/7 SLA & fractional CTO consulting",
    ],
    popular: false,
  },
]

export const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We learn your goals, audience and constraints in a focused workshop.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes and polished UI you can review and refine with us.",
  },
  {
    n: "03",
    title: "Develop",
    desc: "Clean, tested code shipped in short sprints with weekly demos.",
  },
  {
    n: "04",
    title: "Support",
    desc: "Launch, monitor and keep improving with a team that stays.",
  },
]

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Websites usually take 3 to 6 weeks. Mobile apps and custom software range from 8 to 16 weeks depending on scope.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Every package includes a support window, and we offer monthly plans for maintenance, updates and improvements.",
  },
  {
    q: "Can you work with our existing team or codebase?",
    a: "Absolutely. We regularly extend existing products and collaborate with in-house designers and engineers.",
  },
  {
    q: "How does pricing work?",
    a: "Fixed-price packages for well-defined work, or time and materials for evolving products. You always get a clear estimate first.",
  },
  {
    q: "What technologies do you use?",
    a: "React, Next.js, Node, Swift, Kotlin, Flutter, Python and modern cloud platforms, chosen to fit your needs.",
  },
]

export const posts = [
  {
    title: "How AI automation saves small teams 10 hours a week",
    cat: "AI",
    date: "Oct 12, 2026",
    img: "photo-1485827404703-89b55fcc595e",
  },
  {
    title: "Web vs. mobile app: which should you build first?",
    cat: "Strategy",
    date: "Sep 28, 2026",
    img: "photo-1512941937669-90a1b58e7e9c",
  },
  {
    title: "A practical checklist for a website redesign",
    cat: "Web",
    date: "Sep 14, 2026",
    img: "photo-1522542550221-31fd19575a2d",
  },
]

export const nav = [
  "Home",
  "Services",
  "Our Work",
  "Pricing",
  "Contact",
  "Blog",
  "FAQ",
] as const
export const routeOf: Record<string, string> = {
  Home: "",
  Services: "services",
  "Our Work": "work",
  Pricing: "pricing",
  Contact: "contact",
  Blog: "blog",
  FAQ: "faq",
}
export const img = (id: string, w = 800, h = 560) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`
