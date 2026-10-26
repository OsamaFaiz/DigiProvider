import { useState, useMemo, useEffect } from "react"
import {
  ArrowRight,
  Check,
  Plus,
  TrendingUp,
  Users,
  Zap,
  ShieldCheck,
  Headphones,
  Layers,
  BarChart3,
  Search,
  MessageSquare,
  Sparkles,
  Filter,
  CheckCircle2,
  Clock,
  Eye,
  X,
  Star,
} from "lucide-react"
import {
  services,
  projects,
  plans,
  steps,
  faqs,
  posts,
  img,
  serviceCategories,
  topFeaturedCategories,
  allServices,
  getWhatsAppUrl,
  BUSINESS_WHATSAPP,
  TOTAL_CATEGORIES_COUNT,
  TOTAL_SERVICES_COUNT,
  FEATURED_CATEGORIES_COUNT,
  type ServiceCategory,
  type ServiceOffering,
} from "../data"
import { CtaButton, GhostButton, Link, SectionHead } from "./Chrome"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-violet via-violet to-purple px-6 pb-40 pt-36 text-white md:px-8 lg:pb-52">
      <div className="pointer-events-none absolute -right-24 top-20 size-[520px] rounded-full bg-lavender/20" />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full border border-white/40 px-4 py-1.5 text-xs font-semibold tracking-wide">
            Digital Agency for Modern Businesses
          </span>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight md:text-[3.8rem]">
            Transform Your Ideas into Real{" "}
            <span className="text-cta">Digital Experiences</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            We design and build websites, WhatsApp automation, AI agents, CRM
            workflows, and custom software across {TOTAL_CATEGORIES_COUNT}{" "}
            categories and {TOTAL_SERVICES_COUNT} services to scale your
            business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton className="!px-8 !py-3.5 !text-base">
              Start a Project
            </CtaButton>
            <GhostButton to="services">
              Explore Top 5 & All Services
            </GhostButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-white/90">
            {[
              [Zap, "Top 5 Featured Core Services"],
              [MessageSquare, "WhatsApp & AI Automation"],
              [ShieldCheck, "Reliable Development & SLAs"],
            ].map(([I, t]: any) => (
              <li key={t} className="flex items-center gap-2">
                <I className="size-4.5 text-cta" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <Devices />
      </div>
      <svg
        className="absolute inset-x-0 bottom-0 block w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        height="110"
      >
        <path
          d="M0 120V60C240 10 560 0 760 30S1220 100 1440 40V120Z"
          fill="#fff"
        />
      </svg>
    </section>
  )
}

function Devices() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[640px] md:h-[500px]">
      <div className="floaty-slow absolute left-2 top-4 size-14 rotate-12 rounded-2xl bg-lavender/70 shadow-lg md:left-6" />
      <div className="floaty absolute bottom-6 right-0 size-10 rounded-full bg-deep-violet shadow-lg" />
      <div className="absolute left-[4%] right-[6%] top-[8%]">
        <div className="rounded-t-2xl border-[10px] border-b-0 border-[#1d1838] bg-white shadow-2xl">
          <div className="aspect-[16/10] overflow-hidden rounded-sm bg-white">
            <div className="flex items-center justify-between bg-white px-4 py-2 text-[8px] font-bold text-ink">
              <span>
                Digi<span className="text-violet">Provider</span>
              </span>
              <span className="flex gap-3 font-medium text-ink/60">
                <i>Home</i>
                <i>Services</i>
                <i>Work</i>
                <i>Contact</i>
              </span>
            </div>
            <div className="bg-gradient-to-br from-deep-violet to-purple px-4 py-6 text-white md:py-9">
              <p className="max-w-[55%] text-[13px] font-extrabold leading-tight md:text-lg">
                Transform Your Ideas into{" "}
                <span className="text-cta">Digital Experiences</span>
              </p>
              <span className="mt-3 inline-block rounded-full bg-cta px-3 py-1 text-[8px] font-bold text-ink">
                Start a Project
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 px-4 py-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-8 rounded-md bg-mist md:h-11" />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-[-4%] h-3 rounded-b-xl bg-gradient-to-b from-[#cfc9e6] to-[#a9a2c8]" />
      </div>
      <div className="absolute bottom-0 right-[2%] w-[22%] min-w-[110px] rounded-[1.6rem] border-[6px] border-[#1d1838] bg-white shadow-2xl">
        <div className="aspect-[9/18] overflow-hidden rounded-[1.1rem]">
          <div className="bg-gradient-to-b from-deep-violet to-purple px-2.5 pb-4 pt-6 text-white">
            <p className="text-[10px] font-extrabold leading-tight">
              Real <span className="text-cta">Digital</span> Experiences
            </p>
            <span className="mt-2 inline-block rounded-full bg-cta px-2 py-0.5 text-[7px] font-bold text-ink">
              Start
            </span>
          </div>
          <div className="space-y-1.5 p-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-9 rounded-lg bg-mist" />
            ))}
          </div>
        </div>
      </div>
      <div className="floaty absolute -top-2 right-[4%] flex items-center gap-3 rounded-2xl liquid-glass-elevated p-3 pr-5 text-ink shadow-[0_16px_36px_-12px_rgba(23,19,41,0.35)]">
        <span className="grid size-9 place-items-center rounded-xl bg-mist text-violet">
          <TrendingUp className="size-4" />
        </span>
        <span>
          <span className="block text-[10px] text-ink/55">
            Active catalogue
          </span>
          <span className="text-base font-extrabold">
            {TOTAL_SERVICES_COUNT} Offerings
          </span>
        </span>
      </div>
      <div className="floaty-slow absolute bottom-[26%] left-[-2%] flex items-center gap-3 rounded-2xl liquid-glass-elevated p-3 pr-5 text-ink shadow-[0_16px_36px_-12px_rgba(23,19,41,0.35)]">
        <span className="grid size-9 place-items-center rounded-xl bg-cta/40 text-ink">
          <Users className="size-4" />
        </span>
        <span>
          <span className="block text-[10px] text-ink/55">
            Top Core Services
          </span>
          <span className="text-base font-extrabold">Top 5 Featured</span>
        </span>
      </div>
      <div className="floaty absolute bottom-2 left-[16%] hidden w-40 rounded-2xl liquid-glass-elevated p-3 text-ink shadow-[0_16px_36px_-12px_rgba(23,19,41,0.35)] sm:block">
        <p className="text-[10px] text-ink/55">Traffic & Conversions</p>
        <div className="mt-2 flex h-9 items-end gap-1">
          {[40, 60, 45, 75, 55, 90, 70].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-sm bg-violet/80"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Homepage Service Highlights showcasing the Top 5 Featured Categories
export function ServiceCards({ withHead = true }: { withHead?: boolean }) {
  return (
    <section className="bg-white px-6 pb-24 pt-10 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        {withHead && (
          <SectionHead
            eyebrow="Core Specializations"
            title="Top 5 Featured Digital Services"
            text="Explore our primary capabilities across websites, WhatsApp automation, AI agents, CRM workflows, and custom software."
          />
        )}

        {/* Top 5 Featured Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {topFeaturedCategories.map((c, idx) => {
            const Icon = c.icon
            return (
              <div
                key={c.id}
                className="group relative flex flex-col justify-between rounded-3xl liquid-glass-interactive p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-mist text-violet group-hover:bg-violet group-hover:text-white transition-colors shadow-sm">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full bg-violet/10 px-2.5 py-0.5 text-[11px] font-extrabold text-violet">
                      #{idx + 1} Featured
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-md bg-mist px-2 py-0.5 text-[11px] font-bold text-violet">
                      {c.services.length} Offerings
                    </span>
                    <span className="text-[11px] font-extrabold text-ink/80">
                      {c.services[0]?.startingPrice}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-extrabold text-ink group-hover:text-violet transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/65 line-clamp-3">
                    {c.tagline}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2 border-t border-ink/5 pt-4">
                  <Link
                    to="services"
                    onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById(c.id)
                        el?.scrollIntoView({ behavior: "smooth" })
                      }, 100)
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-mist px-3 py-2 text-xs font-bold text-violet transition hover:bg-violet hover:text-white"
                  >
                    Explore Services <ArrowRight className="size-3.5" />
                  </Link>
                  <a
                    href={getWhatsAppUrl(
                      undefined,
                      c.title,
                      `I want to enquire about ${c.title}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                    <MessageSquare className="size-3" />
                    Quick WhatsApp Chat
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Discovery Banner for Full Services Hub */}
        <div className="mt-12 rounded-3xl liquid-glass-lavender p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet text-white shadow-md">
                <Sparkles className="size-6" />
              </span>
              <div>
                <h4 className="text-lg font-extrabold text-ink">
                  Looking for our complete digital services catalogue?
                </h4>
                <p className="text-sm text-ink/65">
                  We offer {TOTAL_CATEGORIES_COUNT} comprehensive categories
                  with {TOTAL_SERVICES_COUNT} dedicated solutions, from the Top
                  5 to mobile apps, e-commerce, cloud DevOps, cybersecurity, and
                  retainers.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                to="services"
                className="inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-deep-violet"
              >
                Browse Full Catalogue ({TOTAL_SERVICES_COUNT} Services){" "}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Complete Services Catalogue for the /services page
export function ServicesCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [detailModalService, setDetailModalService] =
    useState<ServiceOffering & { categoryTitle: string } | null>(null)

  // Handle Escape key to close details modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDetailModalService(null)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Filter categories and services based on search and selected tab
  const filteredCategories = useMemo(() => {
    const q = searchTerm.toLowerCase().trim()

    return serviceCategories
      .map((cat) => {
        // If a specific category tab is selected, only keep that category
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return null
        }

        // Filter individual services within category if query exists
        if (!q) {
          return cat
        }

        const matchesCategory =
          cat.title.toLowerCase().includes(q) ||
          cat.tagline.toLowerCase().includes(q)

        const matchingServices = cat.services.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.desc.toLowerCase().includes(q) ||
            s.features.some((f) => f.toLowerCase().includes(q)),
        )

        if (matchesCategory) {
          return cat
        }

        if (matchingServices.length > 0) {
          return {
            ...cat,
            services: matchingServices,
          }
        }

        return null
      })
      .filter((c): c is ServiceCategory => c !== null)
  }, [selectedCategory, searchTerm])

  const totalVisibleServices = useMemo(() => {
    return filteredCategories.reduce((sum, c) => sum + c.services.length, 0)
  }, [filteredCategories])

  return (
    <section className="bg-white px-6 pb-28 pt-8 md:px-8" id="catalogue-top">
      <div className="mx-auto max-w-[1240px]">
        {/* Header Stats Bar (Liquid Glass) */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl liquid-glass-lavender p-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet">
              Centralized Services Hub
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-ink md:text-3xl">
              Complete Digital Services Catalogue
            </h2>
            <p className="mt-1 text-sm text-ink/65">
              {TOTAL_CATEGORIES_COUNT} specialized categories covering all{" "}
              {TOTAL_SERVICES_COUNT} digital offerings for modern businesses.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-2xl border border-white/80 bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-bold text-ink shadow-sm">
              <span className="text-violet font-extrabold">
                {TOTAL_CATEGORIES_COUNT}
              </span>{" "}
              Categories
            </span>
            <span className="rounded-2xl border border-white/80 bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-bold text-ink shadow-sm">
              <span className="text-violet font-extrabold">
                {TOTAL_SERVICES_COUNT}
              </span>{" "}
              Offerings
            </span>
            <a
              href={getWhatsAppUrl(
                undefined,
                undefined,
                "Hi DigiProvider, I would like to enquire about your services catalogue.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              <MessageSquare className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* 1. TOP 5 FEATURED SERVICES SHOWCASE (Liquid Glass Container) */}
        <div className="mb-14 rounded-3xl liquid-glass p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-violet px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                <Star className="size-3.5 fill-cta text-cta" /> Top 5 Featured
                Categories
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-ink md:text-3xl">
                Primary Core Capabilities
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-ink/70">
                Our five most requested service domains, placed right at the
                front for fast discovery and consultation.
              </p>
            </div>
            <div className="shrink-0 text-xs text-ink/60">
              Total{" "}
              {topFeaturedCategories.reduce(
                (sum, c) => sum + c.services.length,
                0,
              )}{" "}
              Offerings in Top 5
            </div>
          </div>

          {/* Cards for Top 5 in exact required order */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {topFeaturedCategories.map((c, i) => {
              const Icon = c.icon
              return (
                <div
                  key={c.id}
                  className="group flex flex-col justify-between rounded-2xl liquid-glass-interactive p-5 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl bg-mist text-violet group-hover:bg-violet group-hover:text-white transition-colors">
                        <Icon className="size-5.5" />
                      </span>
                      <span className="rounded-full bg-violet/10 px-2 py-0.5 text-[10px] font-extrabold text-violet">
                        #{i + 1}
                      </span>
                    </div>
                    <div className="mt-3">
                      <span className="rounded-md bg-mist px-2 py-0.5 text-[10px] font-bold text-violet">
                        {c.services.length} Services
                      </span>
                    </div>
                    <h4 className="mt-2 text-base font-extrabold text-ink group-hover:text-violet transition-colors">
                      {c.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink/65 line-clamp-3">
                      {c.tagline}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 border-t border-ink/5 pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(c.id)
                        setTimeout(() => {
                          const el = document.getElementById(c.id)
                          el?.scrollIntoView({ behavior: "smooth" })
                        }, 50)
                      }}
                      className="flex w-full items-center justify-center gap-1 rounded-xl bg-violet px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-deep-violet"
                    >
                      Explore Services <ArrowRight className="size-3.5" />
                    </button>
                    <a
                      href={getWhatsAppUrl(
                        undefined,
                        c.title,
                        `I want to discuss ${c.title}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      <MessageSquare className="size-3" />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* In-page Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-violet" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search all services by name, keyword, or tech (e.g. WhatsApp, Chatbot, AI, n8n, CRM, SaaS, Python)..."
              className="w-full rounded-2xl border border-white/80 bg-white/80 backdrop-blur-md py-3.5 pl-12 pr-12 text-sm font-medium text-ink shadow-sm outline-none transition focus:border-violet focus:bg-white focus:ring-4 focus:ring-violet/15"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-ink/40 hover:text-ink"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs Pill Bar (Liquid Glass Pills) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                selectedCategory === "all"
                  ? "bg-violet text-white shadow-sm"
                  : "border border-white/70 bg-white/75 backdrop-blur-sm text-ink/75 hover:border-violet hover:bg-white hover:text-violet shadow-xs"
              }`}
            >
              All Categories ({TOTAL_SERVICES_COUNT})
            </button>
            {serviceCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${
                  selectedCategory === c.id
                    ? "bg-violet text-white shadow-sm"
                    : "border border-white/70 bg-white/75 backdrop-blur-sm text-ink/75 hover:border-violet hover:bg-white hover:text-violet shadow-xs"
                }`}
              >
                {c.featured && <Star className="size-3 fill-cta text-cta" />}
                {c.shortTitle || c.title} ({c.services.length})
              </button>
            ))}
          </div>

          {/* Active Filter State Notice */}
          <div className="flex items-center justify-between text-xs text-ink/60">
            <span>
              Showing{" "}
              <strong className="text-ink">{totalVisibleServices}</strong> of{" "}
              {TOTAL_SERVICES_COUNT} service offerings
              {selectedCategory !== "all" && (
                <span>
                  {" "}
                  in category{" "}
                  <strong className="text-violet">
                    {
                      serviceCategories.find((c) => c.id === selectedCategory)
                        ?.title
                    }
                  </strong>
                </span>
              )}
              {searchTerm && (
                <span>
                  {" "}
                  matching "
                  <strong className="text-violet">{searchTerm}</strong>"
                </span>
              )}
            </span>
            {(selectedCategory !== "all" || searchTerm) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all")
                  setSearchTerm("")
                }}
                className="font-bold text-violet hover:underline"
              >
                Reset filters & Show All
              </button>
            )}
          </div>
        </div>

        {/* Categories and Service Offerings */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-16">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="scroll-mt-28 rounded-3xl liquid-glass p-6 md:p-8"
                >
                  {/* Category Header */}
                  <div className="mb-8 flex flex-col justify-between gap-4 border-b border-ink/8 pb-6 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet text-white shadow-md">
                        <Icon className="size-6" />
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold uppercase tracking-widest text-violet">
                            Category {String(cat.number).padStart(2, "0")} /{" "}
                            {TOTAL_CATEGORIES_COUNT}
                          </span>
                          {cat.featured && (
                            <span className="rounded-full bg-cta/30 px-2 py-0.5 text-[10px] font-extrabold text-ink">
                              Top 5 Featured
                            </span>
                          )}
                          <span className="rounded-full bg-mist px-2.5 py-0.5 text-[11px] font-bold text-violet">
                            {cat.services.length} Services
                          </span>
                        </div>
                        <h3 className="mt-1 text-2xl font-extrabold text-ink">
                          {cat.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink/65">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={getWhatsAppUrl(
                          undefined,
                          cat.title,
                          `I want to discuss ${cat.title} requirements`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100"
                      >
                        <MessageSquare className="size-3.5" />
                        Chat Category on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Services Card Grid (Liquid Glass Interactive Cards) */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.services.map((svc) => (
                      <div
                        key={svc.id}
                        id={`service-${svc.id}`}
                        className="group relative flex flex-col justify-between rounded-2xl liquid-glass-interactive p-6"
                      >
                        <div>
                          {/* Card Top: Number badge and Delivery Estimate */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs font-bold text-violet">
                              #{String(svc.id).padStart(2, "0")}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-violet/8 px-2 py-0.5 text-[11px] font-semibold text-violet">
                              <Clock className="size-3 text-violet" />
                              {svc.deliveryTime || svc.turnaround}
                            </span>
                          </div>
                          <h4 className="mt-3 text-lg font-extrabold text-ink group-hover:text-violet transition-colors">
                            {svc.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-ink/65">
                            {svc.desc}
                          </p>

                          {/* DigiProvider Rate Highlight Banner */}
                          <div className="mt-3.5 flex items-center justify-between rounded-xl bg-violet/5 border border-violet/10 px-3.5 py-2.5">
                            <div>
                              <span className="block text-[10px] font-bold uppercase tracking-wider text-ink/45">
                                DigiProvider Rate
                              </span>
                              <span className="text-sm font-black text-ink">
                                {svc.startingPrice}
                              </span>
                            </div>
                          </div>

                          {/* Feature Highlights */}
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {svc.features.map((f) => (
                              <span
                                key={f}
                                className="inline-flex items-center gap-1 rounded-md bg-mist/80 px-2 py-0.5 text-[11px] font-medium text-ink/75"
                              >
                                <Check className="size-3 text-violet" />
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Actions: View Details, Enquire on WhatsApp, and Get Quote */}
                        <div className="mt-6 flex flex-col gap-2 border-t border-ink/6 pt-4">
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setDetailModalService({
                                  ...svc,
                                  categoryTitle: cat.title,
                                })
                              }
                              className="inline-flex items-center justify-center gap-1 rounded-xl border border-white/80 bg-white/80 backdrop-blur-xs px-3 py-2 text-xs font-bold text-ink/80 transition hover:border-violet hover:bg-white hover:text-violet shadow-xs"
                            >
                              <Eye className="size-3.5 text-violet" />
                              View Details
                            </button>
                            <Link
                              to="quote"
                              className="inline-flex items-center justify-center gap-1 rounded-xl border border-violet/20 bg-mist/50 px-3 py-2 text-xs font-bold text-violet transition hover:bg-violet hover:text-white"
                            >
                              Get Quote
                            </Link>
                          </div>

                          <a
                            href={getWhatsAppUrl(
                              svc.title,
                              cat.title,
                              `I want to enquire about ${svc.title} (${svc.startingPrice}, ${svc.deliveryTime || svc.turnaround})`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:translate-y-0"
                          >
                            <MessageSquare className="size-3.5" />
                            Enquire on WhatsApp
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-ink/8 bg-mist p-12 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-white text-violet shadow-sm">
              <Search className="size-6" />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-ink">
              No matching service offerings found
            </h3>
            <p className="mt-2 text-sm text-ink/60">
              We couldn't find any services matching "{searchTerm}". Try a
              different term or clear the filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all")
                setSearchTerm("")
              }}
              className="mt-6 rounded-full bg-violet px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-deep-violet"
            >
              Reset Search & Show All {TOTAL_SERVICES_COUNT} Services
            </button>
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="mt-16 rounded-[2rem] bg-gradient-to-br from-deep-violet via-violet to-purple p-8 text-center text-white md:p-12">
          <span className="inline-block rounded-full border border-white/40 px-3.5 py-1 text-xs font-semibold">
            Direct Lead Architect Consultation
          </span>
          <h3 className="mx-auto mt-4 max-w-xl text-2xl font-extrabold md:text-4xl">
            Have a custom requirement or need multiple services combined?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
            Tell us about your objectives. We will structure the ideal project
            scope and provide a tailored proposal within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                undefined,
                undefined,
                "Hi, I need a consultation for a custom project.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-7 py-3 text-sm font-bold text-ink shadow-lg transition hover:brightness-95"
            >
              <MessageSquare className="size-4" />
              Discuss on WhatsApp
            </a>
            <GhostButton to="quote">Request Detailed Quote</GhostButton>
          </div>
        </div>
      </div>

      {/* Service Details Interactive Modal */}
      {detailModalService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setDetailModalService(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl liquid-glass-elevated p-6 shadow-2xl animate-in zoom-in-95 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-extrabold text-violet">
                  #{String(detailModalService.id).padStart(2, "0")} ·{" "}
                  {detailModalService.categoryTitle}
                </span>
                <h3 className="mt-3 text-xl font-extrabold text-ink sm:text-2xl">
                  {detailModalService.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setDetailModalService(null)}
                className="rounded-full p-2 text-ink/50 hover:bg-mist hover:text-ink transition"
              >
                <X className="size-5" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {detailModalService.desc}
            </p>

            {/* Transparent Pricing & Delivery Highlights */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-violet/15 bg-violet/5 p-3.5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-violet">
                  Starting Rate (DigiProvider)
                </span>
                <span className="mt-1 block text-lg font-black text-ink">
                  {detailModalService.startingPrice}
                </span>
                <span className="mt-0.5 block text-[11px] text-ink/50">
                  Standard starting rate; scoped upfront
                </span>
              </div>
              <div className="rounded-xl border border-ink/8 bg-mist/60 p-3.5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/50">
                  Estimated Timeline
                </span>
                <span className="mt-1 flex items-center gap-1.5 text-sm font-extrabold text-ink">
                  <Clock className="size-4 text-violet shrink-0" />
                  {detailModalService.deliveryTime ||
                    detailModalService.turnaround}
                </span>
                <span className="mt-0.5 block text-[11px] text-ink/50">
                  Standard scope delivery estimate
                </span>
              </div>
            </div>

            <div className="mt-5">
              <h5 className="text-xs font-extrabold uppercase tracking-wider text-ink/50">
                Key Deliverables & Specifications
              </h5>
              <div className="mt-2 space-y-2">
                {detailModalService.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2.5 text-xs text-ink/80"
                  >
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 border-t border-ink/8 pt-5">
              <a
                href={getWhatsAppUrl(
                  detailModalService.title,
                  detailModalService.categoryTitle,
                  `I want to enquire about ${detailModalService.title} (${detailModalService.startingPrice}, ${detailModalService.deliveryTime || detailModalService.turnaround})`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <MessageSquare className="size-4" />
                Enquire on WhatsApp (Prefilled Inquiry)
              </a>
              <Link
                to="quote"
                onClick={() => setDetailModalService(null)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-5 py-3 text-xs font-bold text-ink transition hover:brightness-95"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function Projects({ limit = 3 }: { limit?: number }) {
  return (
    <section className="bg-mist px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Our Work"
          title="Featured Projects"
          text="A selection of products we have designed, built and launched with our clients."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, limit).map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl liquid-glass-interactive shadow-[0_12px_32px_-14px_rgba(83,47,224,0.2)]"
            >
              <div className="aspect-[10/7] overflow-hidden bg-lavender/40">
                <img
                  src={img(p.img)}
                  alt={`${p.name} project preview`}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-violet">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-extrabold">{p.name}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-ink/5 pt-3">
                  <span className="text-xs text-ink/60">Similar build?</span>
                  <a
                    href={getWhatsAppUrl(
                      `${p.name} (${p.tag})`,
                      "Portfolio Projects",
                      `Hi DigiProvider, I am interested in building a project like ${p.name} (${p.tag}). Please share the pricing and details.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <MessageSquare className="size-3.5" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        {limit < projects.length && (
          <div className="mt-10 text-center">
            <GhostButton to="work" light={false}>
              View All Projects
            </GhostButton>
          </div>
        )}
      </div>
    </section>
  )
}

export function Pricing() {
  return (
    <section className="bg-white px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="Pricing"
          title="Simple Packages for Every Stage"
          text="Transparent starting prices. Every project is scoped to your exact requirements."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all ${
                p.popular
                  ? "bg-gradient-to-br from-deep-violet to-purple text-white shadow-[0_24px_50px_-20px_rgba(83,47,224,0.7)] glass-sheen border border-white/20"
                  : "liquid-glass-interactive"
              }`}
            >
              {p.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-cta px-3 py-1 text-xs font-bold text-ink shadow-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-extrabold">{p.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  p.popular ? "text-white/75" : "text-ink/60"
                }`}
              >
                {p.note}
              </p>
              <p className="mt-6 text-4xl font-extrabold">
                {p.price}
                {p.price !== "Custom" && (
                  <span
                    className={`text-sm font-medium ${
                      p.popular ? "text-white/70" : "text-ink/50"
                    }`}
                  >
                    {" "}
                    starting rate
                  </span>
                )}
              </p>
              <ul className="my-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check
                      className={`size-4.5 shrink-0 ${
                        p.popular ? "text-cta" : "text-violet"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                {p.popular ? (
                  <CtaButton to="quote" className="w-full">
                    Get Started
                  </CtaButton>
                ) : (
                  <GhostButton to="quote" light={false} className="w-full">
                    Get Started
                  </GhostButton>
                )}
                <a
                  href={getWhatsAppUrl(
                    `${p.name} Package`,
                    "Pricing Packages",
                    `Hi DigiProvider, I am interested in your ${p.name} package (${p.price}). Please share the pricing and details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full py-2 text-xs font-bold transition ${
                    p.popular
                      ? "text-white/80 hover:text-white"
                      : "text-emerald-600 hover:text-emerald-700"
                  }`}
                >
                  <MessageSquare className="size-3.5" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 96-Services Full Directory Callout */}
        <div className="mt-12 rounded-3xl liquid-glass-purple p-8 text-center sm:p-10">
          <span className="rounded-full bg-cta px-3 py-1 text-xs font-bold text-ink">
            All 96 Services Included
          </span>
          <h3 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Explore Exact Starting Prices & Delivery Timelines
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
            Looking for a specific capability? From ₹999 domain setups and
            ₹2,499 landing pages to ₹14,999 WhatsApp bots and ₹34,999 custom
            CRMs, view transparent pricing across all 16 categories.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <CtaButton to="services">Browse 96 Services Catalogue</CtaButton>
            <GhostButton to="quote" light={false}>
              Request Custom Project Quote
            </GhostButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="bg-mist px-6 py-24 md:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          eyebrow="How We Work"
          title="A Clear Process from Idea to Launch"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="rounded-3xl liquid-glass-interactive p-7">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-violet">
                  {s.n}
                </span>
                {[Layers, BarChart3, Zap, Headphones][i] &&
                  (() => {
                    const I = [Layers, BarChart3, Zap, Headphones][i]
                    return <I className="size-5 text-lavender" />
                  })()}
              </div>
              <h3 className="mt-5 text-lg font-extrabold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq({ limit = 5 }: { limit?: number }) {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-white px-6 py-24 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.slice(0, limit).map((f, i) => (
            <div
              key={f.q}
              className="rounded-2xl liquid-glass transition hover:border-violet/30 shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold"
                aria-expanded={open === i}
              >
                {f.q}
                <Plus
                  className={`size-5 shrink-0 text-violet transition ${
                    open === i ? "rotate-45" : ""
                  }`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink/65">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCta() {
  return (
    <section className="bg-white px-6 pb-24 md:px-8">
      <div className="mx-auto max-w-[1240px] rounded-[2rem] bg-gradient-to-br from-deep-violet via-violet to-purple px-8 py-16 text-center text-white md:px-16">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
          Ready to build something <span className="text-cta">great</span>{" "}
          together?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Tell us about your project and we will reply within one business day
          with clear next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton>Start a Project</CtaButton>
          <a
            href={getWhatsAppUrl(
              undefined,
              undefined,
              "Hi DigiProvider, I am ready to start a project. Let's discuss requirements.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700"
          >
            <MessageSquare className="size-4" />
            Chat on WhatsApp
          </a>
          <GhostButton to="contact">Contact Us</GhostButton>
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  return (
    <section className="bg-white px-6 py-24 md:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.concat(posts).map((p, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-3xl liquid-glass-interactive shadow-[0_12px_32px_-14px_rgba(83,47,224,0.2)]"
          >
            <div className="aspect-[16/10] overflow-hidden bg-lavender/40">
              <img
                src={img(p.img, 800, 500)}
                alt={p.title}
                className="size-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-mist px-3 py-1 font-bold text-violet">
                  {p.cat}
                </span>
                <span className="text-ink/50">{p.date}</span>
              </div>
              <h3 className="mt-3 text-lg font-extrabold leading-snug">
                {p.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-violet">
                Read Article <ArrowRight className="size-4" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const field =
  "w-full rounded-xl border border-ink/15 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-violet focus:bg-white focus:ring-4 focus:ring-violet/15"

export function Form({ quote = false }: { quote?: boolean }) {
  const [sent, setSent] = useState(false)
  const [selectedCatId, setSelectedCatId] = useState<string>(
    serviceCategories[0].id,
  )
  const [selectedService, setSelectedService] = useState<string>(
    serviceCategories[0].services[0].title,
  )
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [budget, setBudget] = useState("₹10k – ₹50k")
  const [details, setDetails] = useState("")

  // When selected category changes, update default service to first in category
  const activeCategory =
    serviceCategories.find((c) => c.id === selectedCatId) ||
    serviceCategories[0]

  useEffect(() => {
    setSelectedService(activeCategory.services[0]?.title || "")
  }, [selectedCatId])

  // Build WhatsApp URL with form contents
  const formWhatsAppUrl = useMemo(() => {
    const matchedSvc = activeCategory.services.find(
      (s) => s.title === selectedService,
    )
    let msg = `Hello DigiProvider!`
    if (fullName) msg += ` I am ${fullName}`
    if (company) msg += ` from ${company}`
    msg += `.\nI would like a quote for "${selectedService}" (${activeCategory.title})`
    if (matchedSvc) {
      msg += ` [${matchedSvc.startingPrice}, ${matchedSvc.deliveryTime}].`
    } else {
      msg += `.`
    }
    if (budget) msg += `\nBudget: ${budget}`
    if (details) msg += `\nDetails: ${details}`
    if (email) msg += `\nContact Email: ${email}`
    return getWhatsAppUrl(selectedService, activeCategory.title, msg)
  }, [
    fullName,
    email,
    company,
    selectedService,
    activeCategory,
    budget,
    details,
  ])

  if (sent)
    return (
      <div className="rounded-3xl liquid-glass-elevated p-12 text-center shadow-lg">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-violet text-white shadow-md">
          <Check />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-ink">
          Thank you, {fullName || "there"}!
        </h3>
        <p className="mt-2 text-ink/65">
          Your quote request has been prepared. Our team will review your
          requirements and respond within one business day.
        </p>

        {/* WhatsApp Handoff Option */}
        <div className="mx-auto mt-8 max-w-md rounded-2xl border border-emerald-300/60 bg-emerald-50/50 backdrop-blur-sm p-5 text-left shadow-xs">
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
              <MessageSquare className="size-5" />
            </span>
            <div>
              <h4 className="text-sm font-extrabold text-ink">
                Prefer immediate answers?
              </h4>
              <p className="mt-1 text-xs text-ink/65">
                Send your request directly to our business WhatsApp (
                {BUSINESS_WHATSAPP.displayNumber}). WhatsApp will open with your
                pre-filled inquiry.
              </p>
            </div>
          </div>
          <a
            href={formWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <MessageSquare className="size-4" />
            Continue in WhatsApp
          </a>
          <p className="mt-2 text-center text-[11px] text-ink/45">
            Note: You will review and tap Send directly in your WhatsApp app.
          </p>
        </div>
      </div>
    )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="rounded-3xl liquid-glass-elevated p-7 shadow-[0_20px_50px_-24px_rgba(83,47,224,0.25)] md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Full name
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`${field} mt-2 font-normal`}
            placeholder="Jane Cooper"
          />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${field} mt-2 font-normal`}
            placeholder="jane@company.com"
          />
        </label>
        {quote && (
          <label className="text-sm font-semibold">
            Company
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={`${field} mt-2 font-normal`}
              placeholder="Company name"
            />
          </label>
        )}
        {quote && (
          <label className="text-sm font-semibold">
            Budget
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${field} mt-2 font-normal`}
            >
              <option>Under ₹10k</option>
              <option>₹10k – ₹50k</option>
              <option>₹50k – ₹1.5L</option>
              <option>₹1.5L+</option>
            </select>
          </label>
        )}
      </div>

      {quote && (
        <div className="mt-6 rounded-2xl liquid-glass-lavender p-4">
          <p className="mb-2 text-sm font-bold text-ink">
            1. Select Service Category ({TOTAL_CATEGORIES_COUNT} available)
          </p>
          <select
            value={selectedCatId}
            onChange={(e) => setSelectedCatId(e.target.value)}
            className={`${field} font-medium`}
          >
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.id}>
                Category {c.number}: {c.title} ({c.services.length} services)
                {c.featured ? " ★ Top 5" : ""}
              </option>
            ))}
          </select>

          <p className="mb-2 mt-4 text-sm font-bold text-ink">
            2. Select Specific Offering ({activeCategory.services.length} in
            this category)
          </p>
          <div className="grid max-h-52 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
            {activeCategory.services.map((s) => (
              <button
                type="button"
                key={s.id}
                onClick={() => setSelectedService(s.title)}
                className={`flex items-start gap-2 rounded-xl border p-2.5 text-left text-xs transition ${
                  selectedService === s.title
                    ? "border-violet bg-white text-violet font-bold shadow-sm"
                    : "border-white/60 bg-white/70 text-ink/75 hover:border-violet/40 hover:bg-white"
                }`}
              >
                <span className="font-extrabold shrink-0">
                  #{String(s.id).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block truncate font-bold">{s.title}</span>
                  <span className="block text-[10px] text-ink/60">
                    {s.startingPrice} · {s.deliveryTime}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <label className="mt-5 block text-sm font-semibold">
        {quote ? "Project details" : "Message"}
        <textarea
          required
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className={`${field} mt-2 font-normal`}
          placeholder="Tell us about your goals, target audience, timeline, or requirements."
        />
      </label>

      {/* Dual Submission Actions */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-cta px-6 py-3.5 text-sm font-bold text-ink transition hover:brightness-95 active:translate-y-0"
        >
          {quote ? "Submit Quote Request" : "Send Message"}
        </button>

        <a
          href={formWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
        >
          <MessageSquare className="size-4" />
          Send via WhatsApp
        </a>
      </div>

      <p className="mt-3 text-center text-xs text-ink/50">
        WhatsApp opens in a new tab with your pre-filled inquiry. You can review
        and manually send the message.
      </p>
    </form>
  )
}
