# DigiProvider — Digital Agency & Technology Solutions

A modern, high-performance web application for **DigiProvider**, an end-to-end digital agency providing cutting-edge design, development, marketing, and technology services.

Built with **React 19**, **Vite 8**, **TypeScript**, and **Tailwind CSS v4**, featuring an ultra-sleek **Liquid Glass UI**, full catalogue of 96 digital services with upfront transparent pricing and realistic delivery timelines, official brand identity integration, and direct WhatsApp / call communication channels.

---

## ✨ Features

- **Official Brand Identity**: High-resolution DigiProvider logo integrated seamlessly into the sticky header navigation bar and the footer.
- **60px Announcement Bar**: Edge-to-edge promotional banner with carousel controls, discount coupons, and quick action links.
- **Liquid Glass Design System**: Frosted glassmorphism surfaces (`bg-white/70`, `backdrop-blur-xl`, `border-white/50`) with violet gradients (`#7250F5`, `#532FE0`) and golden-yellow accents (`#FFD83D`).
- **Comprehensive 96 Services Catalogue**:
  - Organized across 16 core business categories (Web, Mobile, Cloud, AI/ML, Marketing, SEO, UI/UX, Cybersecurity, etc.).
  - Upfront INR (`₹`) starting rates for every service (e.g. `Starting at ₹6,999`, monthly subscriptions `Starting at ₹1,499/month`, and per-article rates).
  - Explicit turnaround estimates (e.g. `Delivery: Up to 5 days`).
  - Real-time instant search, category filtering, and direct enquiry generation.
- **One-Click Communication**:
  - Centralized contact configuration (`src/contactConfig.ts`).
  - Floating WhatsApp and direct telephone calling buttons (`+91 7281045393`).
  - Context-aware WhatsApp enquiry messages pre-filled with the selected service title and category.
- **Interactive Agency Modules**:
  - Project cost calculator & estimation engine.
  - Interactive portfolio case studies and client testimonials.
  - Frequently Asked Questions (FAQ) accordion and lead generation contact forms.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [React DOM 19](https://react.dev/) |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Code Formatting** | [oxfmt](https://oxc.rs/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## 📁 Project Structure

```text
├── public/
│   ├── digiprovider1.1.png        # Official brand logo PNG asset
│   ├── favicon.svg                # Brand browser favicon
│   └── robots.txt                 # Search engine crawler instructions
├── src/
│   ├── assets/
│   │   └── digiprovider1.1.png    # Bundled brand logo reference
│   ├── components/
│   │   ├── AnnouncementBar.tsx    # 60px edge-to-edge carousel announcement bar
│   │   ├── Chrome.tsx             # Navbar, footer, layout wrappers, modals, estimation
│   │   ├── FloatingContactButtons.tsx # Floating WhatsApp & calling actions
│   │   └── Sections.tsx           # Hero, services catalogue, portfolio, FAQ, contact
│   ├── announcementsData.ts       # Promotional offer messages & promo codes
│   ├── App.tsx                    # Root application component and view switching
│   ├── contactConfig.ts           # Central business contact configuration (+91 7281045393)
│   ├── data.ts                    # Portfolio items, testimonials, and static content
│   ├── index.css                  # Global Tailwind v4 directives & font imports
│   ├── main.tsx                   # React 19 application mounting point
│   └── servicesCatalogue.ts       # 96 services database with pricing & delivery timelines
├── .env.example                   # Environment variable documentation
├── .gitattributes                 # Git line ending normalization & binary definitions
├── .gitignore                     # Git ignore rules for node_modules, dist, and local envs
├── package.json                   # Project metadata and dependencies
├── pnpm-lock.yaml                 # Deterministic dependency lockfile
├── tsconfig.json                  # TypeScript compiler configuration
└── vite.config.ts                 # Vite bundler, Tailwind v4, and server configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js**: `v18.0.0` or higher (Node.js 20+ LTS recommended)
- **pnpm**: `v9.0.0` or higher (or `npm` / `yarn`)

### 1. Clone the Repository

```bash
git clone https://github.com/osamafaiz/digiprovider.git
cd digiprovider
```

### 2. Install Dependencies

```bash
pnpm install
```

*(Alternatively, use `npm install`)*

### 3. Environment Setup (Optional)

If custom port or base URL configurations are required:

```bash
cp .env.example .env.local
```

Default variables:
- `PORT`: Development server port (default: `8443`)
- `HOST`: Host interface (default: `0.0.0.0`)

### 4. Run the Development Server

```bash
pnpm run dev
```

Open your browser and navigate to `http://localhost:8443` (or the port specified in your console).

---

## 📜 Available Scripts

- **`pnpm run dev`**: Starts the Vite development server with Hot Module Replacement (HMR).
- **`pnpm run build`**: Compiles and bundles production-ready assets into the `dist/` directory.
- **`pnpm run preview`**: Serves the compiled production build locally for verification.
- **`pnpm run format`**: Formats the source code using `oxfmt`.

---

## 🚢 Production Deployment

The project builds to static files in the `dist/` directory and can be deployed to any modern static hosting platform:

### Deploying to Vercel
1. Import the repository into [Vercel](https://vercel.com/).
2. Framework Preset: **Vite**.
3. Build Command: `pnpm run build`.
4. Output Directory: `dist`.

### Deploying to Netlify
1. Connect the repository in [Netlify](https://www.netlify.com/).
2. Build Command: `pnpm run build`.
3. Publish Directory: `dist`.

### Deploying to Cloudflare Pages
1. Connect GitHub repository in Cloudflare Pages dashboard.
2. Build Command: `pnpm run build`.
3. Output Directory: `dist`.

---

## 📞 Contact & Support

- **WhatsApp & Phone**: [+91 72810 45393](https://wa.me/917281045393)
- **Email**: [hello@digiprovider.com](mailto:hello@digiprovider.com)

---

## 📄 License

Proprietary — All rights reserved © 2026 DigiProvider.
