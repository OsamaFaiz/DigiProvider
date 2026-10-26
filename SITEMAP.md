# DigiProvider — Complete Project Sitemap

> **Audit Date:** October 2026  
> **Architecture:** Single-Page Application (SPA) built with React 19 + Vite 8  
> **Routing Method:** Native HTML5 Hash-based Client Router (`window.location.hash`)  
> **Status:** Audited from source code

---

## 1. Routing Architecture Overview

DigiProvider implements client-side hash routing in [`src/App.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/App.tsx) listening to the browser `hashchange` event:

```ts
const getRoute = () => window.location.hash.replace(/^#\/?/, "").split("?")[0].split("#")[0]
```

- When the hash is empty (`""` or `#/`), the application mounts the **Home** page.
- When the hash matches a registered identifier (`services`, `work`, `pricing`, `contact`, `blog`, `faq`, `quote`), the application mounts that respective page view.
- Any unregistered or unknown hash falls back to the `default:` branch, rendering the **Home** page (no dedicated 404 route).
- Smooth intra-page anchor scrolling is implemented using HTML element IDs (e.g., `#website-development`, `#service-1`).

---

## 2. Hierarchical Project Sitemap

```text
DigiProvider Website
│
├── 🌐 Home Page (`#/` or `""`)
│   ├── Sticky Header Navigation (Navbar & Announcement Bar)
│   ├── Hero Section (`#main-content`)
│   │   ├── CTA: "Start a Project" → `#/quote`
│   │   └── CTA: "Explore Top 5 & All Services" → `#/services`
│   ├── Top 5 Featured Services Section (`ServiceCards`)
│   │   ├── #1 Website Development Card → `#/services#website-development`
│   │   ├── #2 WhatsApp Automation & Chatbots Card → `#/services#whatsapp-automation-chatbots`
│   │   ├── #3 WhatsApp AI & AI Agents Card → `#/services#whatsapp-ai-agents`
│   │   ├── #4 CRM & Business Automation Card → `#/services#crm-business-automation`
│   │   └── #5 Web Apps & Custom Software Card → `#/services#web-apps-custom-software`
│   ├── Featured Projects Section (`Projects` - 3 preview cards)
│   │   └── CTA: "View All Projects" → `#/work`
│   ├── Pricing Packages Preview Section (`Pricing` - 3 tier cards)
│   │   ├── Starter (₹6,999) CTA → `#/quote`
│   │   ├── Growth & Automation (₹24,999) CTA → `#/quote`
│   │   ├── Enterprise & Custom Software CTA → `#/quote`
│   │   └── CTA: "Browse 96 Services Catalogue" → `#/services`
│   ├── How We Work Process Section (`Process` - 4 steps)
│   ├── Frequently Asked Questions Preview Section (`Faq` - 5 items)
│   └── Contact Consultation Banner (`ContactCta`)
│       ├── CTA: "Start a Project" → `#/quote`
│       ├── CTA: "Chat on WhatsApp" → `https://wa.me/917281045393`
│       └── CTA: "Contact Us" → `#/contact`
│
├── 🛠️ Services Catalogue Page (`#/services`)
│   ├── PageHero ("Services Catalogue")
│   ├── Real-Time Catalogue Search & Category Filter Pills
│   ├── 16 Comprehensive Service Categories (96 Offerings):
│   │   ├── 01. Website Development (`#website-development`) [Services #01–#07]
│   │   ├── 02. WhatsApp Automation & Chatbots (`#whatsapp-automation-chatbots`) [Services #08–#17]
│   │   ├── 03. WhatsApp AI & AI Agents (`#whatsapp-ai-agents`) [Services #18–#27]
│   │   ├── 04. CRM & Business Automation (`#crm-business-automation`) [Services #28–#34]
│   │   ├── 05. Web Apps & Custom Software (`#web-apps-custom-software`) [Services #35–#41]
│   │   ├── 06. Mobile App Development (`#mobile-app-development`) [Services #42–#46]
│   │   ├── 07. E-commerce (`#ecommerce`) [Services #47–#51]
│   │   ├── 08. UI/UX and Product Design (`#ui-ux-product-design`) [Services #52–#56]
│   │   ├── 09. SEO and Analytics (`#seo-analytics`) [Services #57–#62]
│   │   ├── 10. Digital Marketing (`#digital-marketing`) [Services #63–#68]
│   │   ├── 11. Digital Presence and Branding (`#digital-presence-branding`) [Services #69–#73]
│   │   ├── 12. Cloud and DevOps Infrastructure (`#cloud-devops`) [Services #74–#78]
│   │   ├── 13. Cybersecurity and Compliance (`#cybersecurity-compliance`) [Services #79–#82]
│   │   ├── 14. Content Strategy and Copywriting (`#content-copywriting`) [Services #83–#87]
│   │   ├── 15. Quality Assurance and Testing (`#quality-assurance-testing`) [Services #88–#91]
│   │   └── 16. Support and Maintenance Retainers (`#support-maintenance-retainers`) [Services #92–#96]
│   ├── Interactive Service Detail Modal (Per-Service Dialog: Pricing, Timelines & Features)
│   ├── Direct Lead Architect Consultation Banner
│   │   ├── CTA: "Discuss on WhatsApp" → `https://wa.me/917281045393`
│   │   └── CTA: "Request Detailed Quote" → `#/quote`
│   ├── How We Work Process Section (`Process`)
│   └── Contact Consultation Banner (`ContactCta`)
│
├── 💼 Our Work Portfolio Page (`#/work`)
│   ├── PageHero ("Our Work")
│   ├── Projects Grid (`Projects` - 6 case study cards):
│   │   ├── Northwind Logistics (Web Platform)
│   │   ├── Fitly Mobile App (Mobile App)
│   │   ├── Brightside Clinic (Website)
│   │   ├── Ledgerly Dashboard (Custom Software)
│   │   ├── Atlas Support Bot (AI Solutions)
│   │   └── Harbor & Co. Store (E-commerce)
│   └── Contact Consultation Banner (`ContactCta`)
│
├── 💳 Pricing Packages Page (`#/pricing`)
│   ├── PageHero ("Pricing Packages")
│   ├── 3 Fixed Tier Packages (`Pricing`):
│   │   ├── Starter Sprint (₹6,999)
│   │   ├── Growth & Automation (₹24,999)
│   │   └── Enterprise & Custom Software (Custom)
│   ├── 96-Services Full Directory Callout
│   │   ├── CTA: "Browse 96 Services Catalogue" → `#/services`
│   │   └── CTA: "Request Custom Project Quote" → `#/quote`
│   └── Frequently Asked Questions Section (`Faq` - 3 items)
│
├── 📞 Contact Us Page (`#/contact`)
│   ├── PageHero ("Contact Us")
│   ├── Direct Communication Channels:
│   │   ├── Email: `hello@digiprovider.com` (`mailto:hello@digiprovider.com`)
│   │   ├── Phone: `7281045393` (`tel:+917281045393`)
│   │   ├── WhatsApp: `7281045393 (Chat Now)` (`https://wa.me/917281045393?text=...`)
│   │   └── Office: `24 Market Street, Suite 400`
│   └── Lead Intake Form (`Form` component without quote fields)
│
├── 📰 Agency Blog Page (`#/blog`)
│   ├── PageHero ("Agency Blog")
│   └── Articles Grid (`Blog` - 6 cards):
│       ├── "How AI automation saves small teams 10 hours a week" (AI)
│       ├── "Web vs. mobile app: which should you build first?" (Strategy)
│       └── "A practical checklist for a website redesign" (Web)
│
├── ❓ Frequently Asked Questions Page (`#/faq`)
│   ├── PageHero ("Frequently Asked Questions")
│   ├── Full FAQ Accordion (5 expandable items)
│   └── Contact Consultation Banner (`ContactCta`)
│
└── 📝 Start a Project / Request Quote Page (`#/quote`)
    ├── PageHero ("Start a Project")
    └── Full Quote Request Engine (`Form quote={true}`):
        ├── Client Name, Email, Company, Budget Brackets
        ├── Category Selector (16 categories dropdown)
        ├── Specific Service Offering Selector (96 services interactive list)
        ├── Requirements & Timeline Details Textarea
        ├── Action: "Submit Quote Request" (In-browser acknowledgment)
        └── Action: "Send via WhatsApp" (Generates pre-filled scoping enquiry)
```

---

## 3. Global Overlays, Menus & Modals

These interactive layers are available globally or conditionally across routes:

### 1. 60px Desktop Announcement Bar ([`AnnouncementBar.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/AnnouncementBar.tsx))
- **Position:** Fixed top of the viewport (edge-to-edge).
- **Slides:**
  - Slide 1: Website Offer ₹2,499 → External WhatsApp link with prefilled message.
  - Slide 2: WhatsApp & AI Zero Setup Fee → `#/services`.
  - Slide 3: 16 Categories & 96 Offerings Catalogue → `#/services`.
  - Slide 4: Connect Sales Pipeline (n8n Workflows) → `#/quote`.

### 2. Services Mega Menu Dropdown ([`Chrome.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Chrome.tsx))
- **Trigger:** Hover/click on "Services" in desktop navbar.
- **Components:**
  - Left Panel: Category switcher (16 categories).
  - Right Panel: Active category offerings grid with starting prices, delivery times, "View details →" (scrolls to anchor), and direct WhatsApp enquiry.
  - Footer Bar: "Get Custom Quote" → `#/quote`.

### 3. Global Catalogue Search Modal ([`Chrome.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Chrome.tsx))
- **Trigger:** Search icon in navbar or search button in mobile drawer.
- **Search Scope:** Instant filter across all 96 services by title, description, category, and features.
- **Results Action:** Jumps to `#/services#service-{id}` or opens WhatsApp enquiry.

### 4. Service Detail Interactive Modal ([`Sections.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/Sections.tsx))
- **Trigger:** "View Details" button on any service card on `#/services`.
- **Content:** Exact service starting rate, delivery timeline, key deliverables/features, "Enquire on WhatsApp" button, and "Get Custom Quote" (`#/quote`) button.

### 5. Floating Contact Actions ([`FloatingContactButtons.tsx`](file:///c:/Users/mdosa/Downloads/DigiProvider%20Agency%20Website/src/components/FloatingContactButtons.tsx))
- **Position:** Fixed bottom-right on all pages.
- **Phone Button:** Violet circle → `tel:+917281045393`.
- **WhatsApp Button:** Official green circle → `https://wa.me/917281045393?text=...`.

---

## 4. External Destinations Summary

| Destination | Target URL / Protocol | Used In |
|---|---|---|
| **WhatsApp Direct Chat** | `https://wa.me/917281045393` | Floating WhatsApp button, Navbar, Footer, Service cards, Estimate actions |
| **Phone Call** | `tel:+917281045393` | Floating phone button, Navbar mobile menu, Contact page, Footer |
| **Email** | `mailto:hello@digiprovider.com` | Contact page channels list |
| **Unsplash Image Assets** | `https://images.unsplash.com/...` | Portfolio project previews, Blog card thumbnails |
