# DigiProvider — Route & Navigation Inventory

> **Audit Date:** October 2026  
> **Environment:** Client-Side Single Page Application (React 19 + Vite 8)  
> **Total Confirmed Top-Level Page Views:** 8  
> **Total Categories:** 16  
> **Total Unique Service Offerings:** 96  

---

## 1. Top-Level Page Route Inventory

| Route Path / Hash | Page / Section Name | Source Component | Source File | Navigation Entry Points | Route Type | Implementation Status |
|---|---|---|---|---|---|---|
| `#/` (or `""`) | **Home** | `Hero`, `ServiceCards`, `Projects`, `Pricing`, `Process`, `Faq`, `ContactCta` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar Logo, Navbar "Home", Mobile Menu "Home", Footer "Home" | Static SPA View | **Active & Fully Functional** |
| `#/services` | **Services Catalogue** | `PageHero`, `ServicesCatalogue`, `Process`, `ContactCta` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar Mega Menu "View Full Catalogue", Hero CTA "Explore Top 5 & All Services", Footer "Services Catalogue (96)", Announcement Bar Slide 2 & 3 | Static SPA View + Filterable Catalogue | **Active & Fully Functional** |
| `#/work` | **Our Work / Portfolio** | `PageHero`, `Projects`, `ContactCta` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "Our Work", Mobile Menu "Our Work", Home Projects Section "View All Projects", Footer "Our Work" | Static SPA View | **Active & Fully Functional** (Shows 6 projects) |
| `#/pricing` | **Pricing Packages** | `PageHero`, `Pricing`, `Faq` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "Pricing", Mobile Menu "Pricing", Footer "Pricing" | Static SPA View | **Active & Fully Functional** (3 packages + 3 FAQs) |
| `#/contact` | **Contact Us** | `PageHero`, Contact Grid, `Form` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "Contact", Mobile Menu "Contact", Footer "Contact", ContactCta "Contact Us" | Static SPA View + Lead Form | **Active & Fully Functional** |
| `#/blog` | **Agency Blog** | `PageHero`, `Blog` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "Blog", Mobile Menu "Blog", Footer "Blog" | Static SPA View | **Active & Functional** (Listing view only; articles not clickable) |
| `#/faq` | **FAQ** | `PageHero`, `Faq`, `ContactCta` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "FAQ", Mobile Menu "FAQ", Footer "FAQ" | Static SPA View | **Active & Fully Functional** (5 accordion items) |
| `#/quote` | **Start a Project / Request Quote** | `PageHero`, `Form quote={true}` | [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) | Navbar "Start a Project" (Desktop CTA), Navbar Mobile "Start a Project", Footer "Start a Project", Service Cards "Get Quote", Pricing Packages "Get Started", Announcement Bar Slide 4 | Static SPA View + Interactive Quoting Engine | **Active & Fully Functional** |

---

## 2. Interactive Modals, Panels & Overlays

| Overlay Name | Trigger Mechanism | File & Component | Key Actions & Destinations |
|---|---|---|---|
| **Services Mega Menu** | Navbar "Services" dropdown button (desktop) | [`src/components/Chrome.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Chrome.tsx) (`Navbar`) | 16-Category tab switcher, 96 services list with "View details →" (scrolls to anchor), WhatsApp enquiry, and "Get Custom Quote" (`#/quote`). |
| **Global Catalogue Search Modal** | Search icon in header or search button in mobile menu | [`src/components/Chrome.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Chrome.tsx) (`Navbar`) | Real-time text search across 96 services, popular search pills, direct WhatsApp enquiry, jump to `#service-{id}` on `#/services`. |
| **Mobile Drawer Menu** | Hamburger button (`lg:hidden`) | [`src/components/Chrome.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Chrome.tsx) (`Navbar`) | Links to all 8 page views, collapsible Services accordion, quick search trigger, direct WhatsApp and calling links. |
| **Service Details Interactive Modal** | "View Details" button on any service card | [`src/components/Sections.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Sections.tsx) (`ServicesCatalogue`) | Shows starting rate, turnaround timeline, deliverables checklist, prefilled WhatsApp enquiry button, and "Get Custom Quote" (`#/quote`). |

---

## 3. In-Page Category Anchor Targets (`#/services`)

All 16 categories are addressable on `#/services` using their DOM element IDs:

| # | Anchor ID | Category Title | Total Services | Service ID Range | Group | Featured |
|---|---|---|---|---|---|---|
| 01 | `#website-development` | Website Development | 7 | #01 – #07 | Development | **Yes (Top 5)** |
| 02 | `#whatsapp-automation-chatbots` | WhatsApp Automation & Chatbots | 10 | #08 – #17 | AI & Automation | **Yes (Top 5)** |
| 03 | `#whatsapp-ai-agents` | WhatsApp AI & AI Agents | 10 | #18 – #27 | AI & Automation | **Yes (Top 5)** |
| 04 | `#crm-business-automation` | CRM & Business Automation | 7 | #28 – #34 | AI & Automation | **Yes (Top 5)** |
| 05 | `#web-apps-custom-software` | Web Apps & Custom Software | 7 | #35 – #41 | Development | **Yes (Top 5)** |
| 06 | `#mobile-app-development` | Mobile App Development | 5 | #42 – #46 | Development | No |
| 07 | `#ecommerce` | E-commerce | 5 | #47 – #51 | Development | No |
| 08 | `#ui-ux-product-design` | UI/UX and Product Design | 5 | #52 – #56 | Design & Brand | No |
| 09 | `#seo-analytics` | SEO and Analytics | 6 | #57 – #62 | Growth & Marketing | No |
| 10 | `#digital-marketing` | Digital Marketing | 6 | #63 – #68 | Growth & Marketing | No |
| 11 | `#digital-presence-branding` | Digital Presence and Branding | 5 | #69 – #73 | Design & Brand | No |
| 12 | `#cloud-devops` | Cloud and DevOps Infrastructure | 5 | #74 – #78 | Infrastructure & Support | No |
| 13 | `#cybersecurity-compliance` | Cybersecurity and Compliance | 4 | #79 – #82 | Infrastructure & Support | No |
| 14 | `#content-copywriting` | Content Strategy and Copywriting | 5 | #83 – #87 | Growth & Marketing | No |
| 15 | `#quality-assurance-testing` | Quality Assurance and Testing | 4 | #88 – #91 | Infrastructure & Support | No |
| 16 | `#support-maintenance-retainers` | Support and Maintenance Retainers | 5 | #92 – #96 | Infrastructure & Support | No |

---

## 4. Complete 96 Services Navigation & Action Map

Every service in the project has:
1. **DOM Anchor Location:** Accessible via `#/services#service-{id}`.
2. **Interactive Detail Modal:** Triggered via "View Details" button.
3. **Dedicated Quote Path:** Links directly to `#/quote` (or pre-selects service in quote form).
4. **WhatsApp Enquiry Endpoint:** Generates a pre-filled click-to-chat URL with service name, price, and delivery estimate.

| # | Service Name | Category | Starting Rate | Delivery Timeline | Anchor Target | Interactive Actions |
|---|---|---|---|---|---|---|
| 01 | **Business Website** | Website Development | `Starting at ₹6,999` | Delivery: Up to 5 days | `#service-1` | [Modal / WhatsApp / Quote] |
| 02 | **Landing Page Development** | Website Development | `Starting at ₹2,499` | Delivery: Up to 2 days | `#service-2` | [Modal / WhatsApp / Quote] |
| 03 | **Portfolio and Personal Websites** | Website Development | `Starting at ₹3,999` | Delivery: Up to 4 days | `#service-3` | [Modal / WhatsApp / Quote] |
| 04 | **E-commerce Websites** | Website Development | `Starting at ₹14,999` | Delivery: Up to 15 days | `#service-4` | [Modal / WhatsApp / Quote] |
| 05 | **WordPress Websites** | Website Development | `Starting at ₹5,999` | Delivery: Up to 7 days | `#service-5` | [Modal / WhatsApp / Quote] |
| 06 | **Website Redesign and Speed Optimisation** | Website Development | `Starting at ₹3,999` | Delivery: Up to 5 days | `#service-6` | [Modal / WhatsApp / Quote] |
| 07 | **Website Maintenance and Bug Fixing** | Website Development | `Starting at ₹1,499/month` | Ongoing monthly support | `#service-7` | [Modal / WhatsApp / Quote] |
| 08 | **WhatsApp Business automation** | WhatsApp Automation & Chatbots | `Starting at ₹9,999` | Delivery: Up to 5 days | `#service-8` | [Modal / WhatsApp / Quote] |
| 09 | **Rule-based WhatsApp chatbots** | WhatsApp Automation & Chatbots | `Starting at ₹14,999` | Delivery: Up to 7 days | `#service-9` | [Modal / WhatsApp / Quote] |
| 10 | **Interactive menu and FAQ bots** | WhatsApp Automation & Chatbots | `Starting at ₹9,999` | Delivery: Up to 4 days | `#service-10` | [Modal / WhatsApp / Quote] |
| 11 | **Lead capture and qualification bots** | WhatsApp Automation & Chatbots | `Starting at ₹14,999` | Delivery: Up to 7 days | `#service-11` | [Modal / WhatsApp / Quote] |
| 12 | **Appointment and booking automation** | WhatsApp Automation & Chatbots | `Starting at ₹14,999` | Delivery: Up to 8 days | `#service-12` | [Modal / WhatsApp / Quote] |
| 13 | **Order notifications and customer updates** | WhatsApp Automation & Chatbots | `Starting at ₹12,999` | Delivery: Up to 5 days | `#service-13` | [Modal / WhatsApp / Quote] |
| 14 | **WhatsApp CRM integration** | WhatsApp Automation & Chatbots | `Starting at ₹19,999` | Delivery: Up to 9 days | `#service-14` | [Modal / WhatsApp / Quote] |
| 15 | **n8n workflow automation** | WhatsApp Automation & Chatbots | `Starting at ₹6,999` | Delivery: Up to 5 days | `#service-15` | [Modal / WhatsApp / Quote] |
| 16 | **Automated follow-up workflows** | WhatsApp Automation & Chatbots | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-16` | [Modal / WhatsApp / Quote] |
| 17 | **Human counselor or support-agent handoff** | WhatsApp Automation & Chatbots | `Starting at ₹12,999` | Delivery: Up to 5 days | `#service-17` | [Modal / WhatsApp / Quote] |
| 18 | **AI-powered WhatsApp chatbot** | WhatsApp AI & AI Agents | `Starting at ₹29,999` | Delivery: Up to 12 days | `#service-18` | [Modal / WhatsApp / Quote] |
| 19 | **AI sales assistant** | WhatsApp AI & AI Agents | `Starting at ₹34,999` | Delivery: Up to 12 days | `#service-19` | [Modal / WhatsApp / Quote] |
| 20 | **AI customer support agent** | WhatsApp AI & AI Agents | `Starting at ₹34,999` | Delivery: Up to 12 days | `#service-20` | [Modal / WhatsApp / Quote] |
| 21 | **AI lead qualification** | WhatsApp AI & AI Agents | `Starting at ₹24,999` | Delivery: Up to 9 days | `#service-21` | [Modal / WhatsApp / Quote] |
| 22 | **Business-specific knowledge-base chatbot** | WhatsApp AI & AI Agents | `Starting at ₹49,999` | Delivery: Up to 15 days | `#service-22` | [Modal / WhatsApp / Quote] |
| 23 | **AI appointment assistant** | WhatsApp AI & AI Agents | `Starting at ₹24,999` | Delivery: Up to 9 days | `#service-23` | [Modal / WhatsApp / Quote] |
| 24 | **Multilingual AI chatbot** | WhatsApp AI & AI Agents | `Starting at ₹39,999` | Delivery: Up to 12 days | `#service-24` | [Modal / WhatsApp / Quote] |
| 25 | **Voice-note processing and response bot** | WhatsApp AI & AI Agents | `Starting at ₹44,999` | Delivery: Up to 15 days | `#service-25` | [Modal / WhatsApp / Quote] |
| 26 | **Catalog search and product recommendation bot** | WhatsApp AI & AI Agents | `Starting at ₹34,999` | Delivery: Up to 12 days | `#service-26` | [Modal / WhatsApp / Quote] |
| 27 | **Custom AI workflow agent** | WhatsApp AI & AI Agents | `Starting at ₹49,999` | Delivery: Up to 18 days | `#service-27` | [Modal / WhatsApp / Quote] |
| 28 | **Custom CRM development** | CRM & Business Automation | `Starting at ₹34,999` | Delivery: Up to 15 days | `#service-28` | [Modal / WhatsApp / Quote] |
| 29 | **Lead management systems** | CRM & Business Automation | `Starting at ₹19,999` | Delivery: Up to 9 days | `#service-29` | [Modal / WhatsApp / Quote] |
| 30 | **Sales pipeline tracking tools** | CRM & Business Automation | `Starting at ₹19,999` | Delivery: Up to 9 days | `#service-30` | [Modal / WhatsApp / Quote] |
| 31 | **Pharmacy CRM** | CRM & Business Automation | `Starting at ₹34,999` | Delivery: Up to 15 days | `#service-31` | [Modal / WhatsApp / Quote] |
| 32 | **Clinic or Hospital Management System** | CRM & Business Automation | `Starting at ₹49,999` | Delivery: Up to 25 days | `#service-32` | [Modal / WhatsApp / Quote] |
| 33 | **Automated invoice and receipt generation** | CRM & Business Automation | `Starting at ₹9,999` | Delivery: Up to 6 days | `#service-33` | [Modal / WhatsApp / Quote] |
| 34 | **Business reporting dashboards** | CRM & Business Automation | `Starting at ₹14,999` | Delivery: Up to 8 days | `#service-34` | [Modal / WhatsApp / Quote] |
| 35 | **Custom Web Applications** | Web Apps & Custom Software | `Starting at ₹29,999` | Delivery: Up to 20 days | `#service-35` | [Modal / WhatsApp / Quote] |
| 36 | **Internal Business Portals** | Web Apps & Custom Software | `Starting at ₹34,999` | Delivery: Up to 20 days | `#service-36` | [Modal / WhatsApp / Quote] |
| 37 | **Client and Vendor Portals** | Web Apps & Custom Software | `Starting at ₹39,999` | Delivery: Up to 25 days | `#service-37` | [Modal / WhatsApp / Quote] |
| 38 | **SaaS MVP Development** | Web Apps & Custom Software | `Starting at ₹49,999` | Delivery: Up to 30 days | `#service-38` | [Modal / WhatsApp / Quote] |
| 39 | **Database Design and Integration** | Web Apps & Custom Software | `Starting at ₹14,999` | Delivery: Up to 7 days | `#service-39` | [Modal / WhatsApp / Quote] |
| 40 | **RESTful and GraphQL API Development** | Web Apps & Custom Software | `Starting at ₹19,999` | Delivery: Up to 10 days | `#service-40` | [Modal / WhatsApp / Quote] |
| 41 | **Third-Party API Integrations** | Web Apps & Custom Software | `Starting at ₹9,999` | Delivery: Up to 5 days | `#service-41` | [Modal / WhatsApp / Quote] |
| 42 | **Cross-Platform Mobile Apps (Flutter / React Native)** | Mobile App Development | `Starting at ₹44,999` | Delivery: Up to 25 days | `#service-42` | [Modal / WhatsApp / Quote] |
| 43 | **Native Android App Development** | Mobile App Development | `Starting at ₹39,999` | Delivery: Up to 25 days | `#service-43` | [Modal / WhatsApp / Quote] |
| 44 | **Native iOS App Development** | Mobile App Development | `Starting at ₹44,999` | Delivery: Up to 25 days | `#service-44` | [Modal / WhatsApp / Quote] |
| 45 | **App Store and Google Play Publishing** | Mobile App Development | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-45` | [Modal / WhatsApp / Quote] |
| 46 | **Mobile App Maintenance and Version Updates** | Mobile App Development | `Starting at ₹3,999/month` | Ongoing monthly support | `#service-46` | [Modal / WhatsApp / Quote] |
| 47 | **Custom Shopify Store Setup** | E-commerce | `Starting at ₹9,999` | Delivery: Up to 7 days | `#service-47` | [Modal / WhatsApp / Quote] |
| 48 | **WooCommerce Online Store Development** | E-commerce | `Starting at ₹12,999` | Delivery: Up to 10 days | `#service-48` | [Modal / WhatsApp / Quote] |
| 49 | **Payment Gateway Integration** | E-commerce | `Starting at ₹4,999` | Delivery: Up to 3 days | `#service-49` | [Modal / WhatsApp / Quote] |
| 50 | **Product Catalog and Inventory Sync Setup** | E-commerce | `Starting at ₹7,999` | Delivery: Up to 5 days | `#service-50` | [Modal / WhatsApp / Quote] |
| 51 | **Cart Abandonment Recovery Workflows** | E-commerce | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-51` | [Modal / WhatsApp / Quote] |
| 52 | **Website UI/UX Design** | UI/UX and Product Design | `Starting at ₹7,999` | Delivery: Up to 6 days | `#service-52` | [Modal / WhatsApp / Quote] |
| 53 | **Mobile App UI/UX Design** | UI/UX and Product Design | `Starting at ₹9,999` | Delivery: Up to 8 days | `#service-53` | [Modal / WhatsApp / Quote] |
| 54 | **Wireframing and Interactive Prototyping** | UI/UX and Product Design | `Starting at ₹4,999` | Delivery: Up to 4 days | `#service-54` | [Modal / WhatsApp / Quote] |
| 55 | **Design System Creation and Component Libraries** | UI/UX and Product Design | `Starting at ₹14,999` | Delivery: Up to 10 days | `#service-55` | [Modal / WhatsApp / Quote] |
| 56 | **User Journey and Usability Audit** | UI/UX and Product Design | `Starting at ₹4,999` | Delivery: Up to 4 days | `#service-56` | [Modal / WhatsApp / Quote] |
| 57 | **On-Page SEO Optimisation** | SEO and Analytics | `Starting at ₹4,999` | Delivery: Up to 5 days | `#service-57` | [Modal / WhatsApp / Quote] |
| 58 | **Technical SEO and Core Web Vitals Audit** | SEO and Analytics | `Starting at ₹6,999` | Delivery: Up to 5 days | `#service-58` | [Modal / WhatsApp / Quote] |
| 59 | **Google Analytics 4 and Tag Manager Setup** | SEO and Analytics | `Starting at ₹3,999` | Delivery: Up to 3 days | `#service-59` | [Modal / WhatsApp / Quote] |
| 60 | **Local SEO and Google Business Profile Optimisation** | SEO and Analytics | `Starting at ₹3,499` | Delivery: Up to 4 days | `#service-60` | [Modal / WhatsApp / Quote] |
| 61 | **Keyword Research and Content Strategy** | SEO and Analytics | `Starting at ₹4,999` | Delivery: Up to 5 days | `#service-61` | [Modal / WhatsApp / Quote] |
| 62 | **Monthly SEO Retainer and Rank Tracking** | SEO and Analytics | `Starting at ₹6,999/month` | Ongoing monthly retainer | `#service-62` | [Modal / WhatsApp / Quote] |
| 63 | **Google Ads Campaign Setup and Management** | Digital Marketing | `Starting at ₹7,999/month` | Setup in 4 days + monthly management | `#service-63` | [Modal / WhatsApp / Quote] |
| 64 | **Meta Ads (Facebook and Instagram) Setup** | Digital Marketing | `Starting at ₹7,999/month` | Setup in 4 days + monthly management | `#service-64` | [Modal / WhatsApp / Quote] |
| 65 | **Social Media Content Creation and Scheduling** | Digital Marketing | `Starting at ₹6,999/month` | 12 posts/month schedule | `#service-65` | [Modal / WhatsApp / Quote] |
| 66 | **Lead-Generation Funnel Strategy and Setup** | Digital Marketing | `Starting at ₹14,999` | Delivery: Up to 8 days | `#service-66` | [Modal / WhatsApp / Quote] |
| 67 | **Email Marketing Automation and Newsletter Design** | Digital Marketing | `Starting at ₹6,999` | Delivery: Up to 5 days | `#service-67` | [Modal / WhatsApp / Quote] |
| 68 | **Conversion Rate Optimisation (CRO) Audit** | Digital Marketing | `Starting at ₹7,999` | Delivery: Up to 6 days | `#service-68` | [Modal / WhatsApp / Quote] |
| 69 | **Complete Brand Identity Package** | Digital Presence and Branding | `Starting at ₹9,999` | Delivery: Up to 7 days | `#service-69` | [Modal / WhatsApp / Quote] |
| 70 | **Logo Design with Brand Guidelines** | Digital Presence and Branding | `Starting at ₹4,999` | Delivery: Up to 4 days | `#service-70` | [Modal / WhatsApp / Quote] |
| 71 | **Social Media Branding Kits** | Digital Presence and Branding | `Starting at ₹3,999` | Delivery: Up to 3 days | `#service-71` | [Modal / WhatsApp / Quote] |
| 72 | **Business Card, Letterhead, and Stationery Design** | Digital Presence and Branding | `Starting at ₹2,999` | Delivery: Up to 3 days | `#service-72` | [Modal / WhatsApp / Quote] |
| 73 | **Company Pitch Deck and Presentation Design** | Digital Presence and Branding | `Starting at ₹6,999` | Delivery: Up to 5 days | `#service-73` | [Modal / WhatsApp / Quote] |
| 74 | **Cloud Hosting Setup (AWS, GCP, DigitalOcean)** | Cloud and DevOps Infrastructure | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-74` | [Modal / WhatsApp / Quote] |
| 75 | **CI/CD Pipeline Setup (GitHub Actions, GitLab CI)** | Cloud and DevOps Infrastructure | `Starting at ₹7,999` | Delivery: Up to 4 days | `#service-75` | [Modal / WhatsApp / Quote] |
| 76 | **Server Migration and Zero-Downtime Deployment** | Cloud and DevOps Infrastructure | `Starting at ₹9,999` | Delivery: Up to 5 days | `#service-76` | [Modal / WhatsApp / Quote] |
| 77 | **SSL Certificate Setup, DNS Configuration, and Domain Setup** | Cloud and DevOps Infrastructure | `Starting at ₹999` | Delivery: Up to 1 day | `#service-77` | [Modal / WhatsApp / Quote] |
| 78 | **Docker Containerisation and Environment Standardisation** | Cloud and DevOps Infrastructure | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-78` | [Modal / WhatsApp / Quote] |
| 79 | **Website Vulnerability Assessment and Hardening** | Cybersecurity and Compliance | `Starting at ₹9,999` | Delivery: Up to 5 days | `#service-79` | [Modal / WhatsApp / Quote] |
| 80 | **Web Application Firewall (WAF) and Cloudflare Setup** | Cybersecurity and Compliance | `Starting at ₹3,999` | Delivery: Up to 2 days | `#service-80` | [Modal / WhatsApp / Quote] |
| 81 | **Automated Data Backup and Disaster Recovery Setup** | Cybersecurity and Compliance | `Starting at ₹4,999` | Delivery: Up to 3 days | `#service-81` | [Modal / WhatsApp / Quote] |
| 82 | **GDPR and Privacy Policy Compliance Implementation** | Cybersecurity and Compliance | `Starting at ₹4,999` | Delivery: Up to 3 days | `#service-82` | [Modal / WhatsApp / Quote] |
| 83 | **Website Copywriting (Landing Pages and Core Pages)** | Content Strategy and Copywriting | `Starting at ₹3,999` | Delivery: Up to 4 days | `#service-83` | [Modal / WhatsApp / Quote] |
| 84 | **SEO Blog Articles (1,000–1,500 words)** | Content Strategy and Copywriting | `Starting at ₹799/article` | Delivery: Up to 2 days/article | `#service-84` | [Modal / WhatsApp / Quote] |
| 85 | **Product Descriptions Writing (e-commerce catalog)** | Content Strategy and Copywriting | `Starting at ₹1,999` | Delivery: Up to 3 days | `#service-85` | [Modal / WhatsApp / Quote] |
| 86 | **Email Sequence Copywriting (Welcome, Onboarding, Sales)** | Content Strategy and Copywriting | `Starting at ₹3,999` | Delivery: Up to 4 days | `#service-86` | [Modal / WhatsApp / Quote] |
| 87 | **Case Study and Client Success Story Writing** | Content Strategy and Copywriting | `Starting at ₹2,499/story` | Delivery: Up to 3 days | `#service-87` | [Modal / WhatsApp / Quote] |
| 88 | **Manual Functional and Regression Testing** | Quality Assurance and Testing | `Starting at ₹6,999` | Delivery: Up to 4 days | `#service-88` | [Modal / WhatsApp / Quote] |
| 89 | **Cross-Browser and Multi-Device Compatibility Testing** | Quality Assurance and Testing | `Starting at ₹4,999` | Delivery: Up to 3 days | `#service-89` | [Modal / WhatsApp / Quote] |
| 90 | **Automated E2E Testing Setup (Playwright / Cypress)** | Quality Assurance and Testing | `Starting at ₹14,999` | Delivery: Up to 7 days | `#service-90` | [Modal / WhatsApp / Quote] |
| 91 | **API Performance and Load Testing** | Quality Assurance and Testing | `Starting at ₹9,999` | Delivery: Up to 5 days | `#service-91` | [Modal / WhatsApp / Quote] |
| 92 | **Monthly Website Maintenance Retainer (Security, Backups, Updates)** | Support and Maintenance Retainers | `Starting at ₹1,999/month` | Ongoing monthly retainer | `#service-92` | [Modal / WhatsApp / Quote] |
| 93 | **Dedicated Developer Hours Retainer (20 hrs/month)** | Support and Maintenance Retainers | `Starting at ₹14,999/month` | Ongoing monthly retainer | `#service-93` | [Modal / WhatsApp / Quote] |
| 94 | **Dedicated Developer Hours Retainer (40 hrs/month)** | Support and Maintenance Retainers | `Starting at ₹27,999/month` | Ongoing monthly retainer | `#service-94` | [Modal / WhatsApp / Quote] |
| 95 | **Emergency Bug-Fix and Server Outage Support SLA** | Support and Maintenance Retainers | `Starting at ₹4,999/month` | Setup in 3 days, 24/7 SLA | `#service-95` | [Modal / WhatsApp / Quote] |
| 96 | **Technical Advisory & Fractional CTO Consulting** | Support and Maintenance Retainers | `Starting at ₹999/hour` | On-demand (1–3 hrs/session) | `#service-96` | [Modal / WhatsApp / Quote] |
