import { useState, useEffect, useRef, type ReactNode } from "react"
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowRight,
  Globe,
  AtSign,
  Share2,
  Camera,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Sparkles,
  Star,
  ExternalLink,
  Clock,
} from "lucide-react"
import logoImg from "../assets/digiprovider1.1.png"
import { nav, routeOf } from "../data"
import {
  serviceCategories,
  topFeaturedCategories,
  allServices,
  getWhatsAppUrl,
  getCallingUrl,
  BUSINESS_CONTACT,
  BUSINESS_WHATSAPP,
  TOTAL_CATEGORIES_COUNT,
  TOTAL_SERVICES_COUNT,
  FEATURED_CATEGORIES_COUNT,
  type ServiceCategory,
} from "../servicesCatalogue"
import { AnnouncementBar } from "./AnnouncementBar"
export { AnnouncementBar }

export function Link({
  to,
  className,
  children,
  onClick,
  title,
}: {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
  title?: string
}) {
  return (
    <a
      href={`#/${to}`}
      className={className}
      title={title}
      onClick={() => {
        onClick?.()
        if (!to.includes("#")) {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }}
    >
      {children}
    </a>
  )
}

export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean
  className?: string
}) {
  return (
    <Link
      to=""
      className={`inline-flex items-center transition hover:opacity-90 active:scale-[0.98] ${className}`}
      aria-label="DigiProvider Home"
    >
      {dark ? (
        <div className="inline-flex items-center justify-center rounded-2xl bg-white p-2.5 shadow-sm transition hover:shadow-md border border-white/20">
          <img
            src={logoImg}
            alt="DigiProvider Logo"
            width={1024}
            height={1024}
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      ) : (
        <img
          src={logoImg}
          alt="DigiProvider Logo"
          width={1024}
          height={1024}
          className="h-11 w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 object-contain shrink-0"
          loading="eager"
          decoding="async"
        />
      )}
    </Link>
  )
}

export function CtaButton({
  to = "quote",
  children = "Start a Project",
  className = "",
  onClick,
}: {
  to?: string
  children?: ReactNode
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-bold text-ink shadow-[0_6px_16px_-6px_rgba(255,216,61,0.7)] transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0 ${className}`}
    >
      {children}
    </Link>
  )
}

export function GhostButton({
  to,
  children,
  light = true,
  className = "",
  onClick,
}: {
  to: string
  children: ReactNode
  light?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
        light
          ? "border-white/60 text-white hover:bg-white/10"
          : "border-violet/40 text-violet hover:bg-violet/5"
      } ${className}`}
    >
      {children}
    </Link>
  )
}

export function Navbar({ route }: { route: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(
    serviceCategories[0],
  )
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Detect scroll to adjust glass treatment smoothly without layout shift
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menus on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setServicesMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  // Handle escape key to close open overlays
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesMenuOpen(false)
        setSearchModalOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Close open state on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesMenuOpen(false)
    setSearchModalOpen(false)
  }, [route])

  // Focus search input when search modal opens
  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50)
    } else {
      setSearchQuery("")
    }
  }, [searchModalOpen])

  // Search filter matching
  const searchResults = searchQuery.trim()
    ? allServices.filter((s) => {
        const q = searchQuery.toLowerCase()
        return (
          s.title.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) ||
          s.categoryTitle.toLowerCase().includes(q) ||
          s.features.some((f) => f.toLowerCase().includes(q))
        )
      })
    : []

  return (
    <>
      {/* Row 1 — Announcement Bar (Top Row: absolute top of viewport, 100vw, desktop height: 60px) */}
      <AnnouncementBar />

      {/* Row 2 — Main Rounded Pill Navbar (Sticky at top when scrolled, perfectly matches Reference Image 1) */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full bg-transparent px-4 py-2.5 pointer-events-none transition-all duration-200 md:px-8"
      >
        <div
          className={`pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between rounded-full border px-4 py-2 shadow-sm transition-all md:px-6 md:py-2.5 ${
            scrolled
              ? "border-white/70 bg-white/92 shadow-[0_14px_40px_-12px_rgba(23,19,41,0.22),0_0_1px_1px_rgba(255,255,255,0.8)_inset] backdrop-blur-[18px]"
              : "border-white/65 bg-white/84 shadow-[0_10px_32px_-12px_rgba(23,19,41,0.20),0_0_1px_1px_rgba(255,255,255,0.85)_inset] backdrop-blur-[16px]"
          }`}
        >
          {/* 1. DigiProvider Logo */}
          <Logo />

          {/* Desktop Navigation in exact mandatory order */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main Navigation"
          >
            {/* 2. Home */}
            <Link
              to=""
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "" ? "text-violet" : "text-ink/80 hover:text-violet"
              }`}
            >
              Home
            </Link>

            {/* 3. Services with Downward Chevron */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={servicesMenuOpen}
                aria-haspopup="true"
                aria-label="Toggle Services Mega Menu"
                onClick={() => setServicesMenuOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
                  route === "services" || servicesMenuOpen
                    ? "text-violet"
                    : "text-ink/80 hover:text-violet"
                }`}
              >
                Services
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    servicesMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown (Liquid Glass System) */}
              {servicesMenuOpen && (
                <div
                  role="menu"
                  className="pointer-events-auto absolute left-1/2 top-full mt-3.5 w-[92vw] max-w-[1080px] -translate-x-[36%] rounded-3xl liquid-glass-elevated p-6 animate-in fade-in zoom-in-95"
                >
                  {/* Top Bar of Mega Menu */}
                  <div className="mb-4 flex items-center justify-between border-b border-ink/8 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-8 place-items-center rounded-lg bg-mist text-violet">
                        <Sparkles className="size-4.5" />
                      </span>
                      <div>
                        <h3 className="text-sm font-extrabold text-ink">
                          Services Catalogue
                        </h3>
                        <p className="text-xs text-ink/60">
                          {TOTAL_CATEGORIES_COUNT} Categories ·{" "}
                          {TOTAL_SERVICES_COUNT} Specialized Offerings
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={getWhatsAppUrl(
                          undefined,
                          undefined,
                          "I would like to explore your services",
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 sm:inline-flex"
                      >
                        <MessageSquare className="size-3.5" />
                        Chat on WhatsApp
                      </a>
                      <Link
                        to="services"
                        onClick={() => setServicesMenuOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-violet hover:underline"
                      >
                        View Full Catalogue <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Two-Panel Layout: Categories list on left, Individual services on right */}
                  <div className="grid grid-cols-[310px_1fr] gap-6">
                    {/* Left Column: Category Switcher with subtle glass tint */}
                    <div className="max-h-[380px] space-y-1 overflow-y-auto pr-2 rounded-2xl liquid-glass-soft p-2">
                      <p className="px-3 pb-1 pt-1 text-[11px] font-bold uppercase tracking-wider text-ink/40">
                        Select a Category ({TOTAL_CATEGORIES_COUNT})
                      </p>
                      {serviceCategories.map((cat) => {
                        const Icon = cat.icon
                        const isActive = activeCategory.id === cat.id
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onMouseEnter={() => setActiveCategory(cat)}
                            onClick={() => setActiveCategory(cat)}
                            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                              isActive
                                ? "bg-white/95 font-bold text-violet shadow-sm border border-violet/20"
                                : "text-ink/75 hover:bg-white/60 hover:text-ink"
                            }`}
                          >
                            <span className="flex items-center gap-2.5">
                              <span
                                className={`grid size-7 place-items-center rounded-lg ${
                                  isActive
                                    ? "bg-violet text-white"
                                    : "bg-ink/5 text-ink/70"
                                }`}
                              >
                                <Icon className="size-4" />
                              </span>
                              <span className="truncate">{cat.title}</span>
                              {cat.featured && (
                                <span className="rounded-full bg-cta/30 px-1.5 py-0.2 text-[9px] font-extrabold text-ink shrink-0">
                                  Top 5
                                </span>
                              )}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                                isActive
                                  ? "bg-violet/15 text-violet"
                                  : "bg-ink/5 text-ink/50"
                              }`}
                            >
                              {cat.services.length}
                            </span>
                          </button>
                        )
                      })}
                    </div>

                    {/* Right Column: Services in active category */}
                    <div className="flex flex-col justify-between border-l border-ink/8 pl-6">
                      <div>
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            {(() => {
                              const ActiveIcon = activeCategory.icon
                              return (
                                <span className="grid size-9 place-items-center rounded-xl bg-violet text-white shadow-sm">
                                  <ActiveIcon className="size-5" />
                                </span>
                              )
                            })()}
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-base font-extrabold text-ink">
                                  {activeCategory.title}
                                </h4>
                                {activeCategory.featured && (
                                  <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[10px] font-bold text-violet">
                                    Featured Top 5
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-ink/65 line-clamp-1">
                                {activeCategory.tagline}
                              </p>
                            </div>
                          </div>
                          <Link
                            to={`services`}
                            onClick={() => {
                              setServicesMenuOpen(false)
                              setTimeout(() => {
                                const el = document.getElementById(
                                  activeCategory.id,
                                )
                                el?.scrollIntoView({ behavior: "smooth" })
                              }, 100)
                            }}
                            className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1 text-xs font-bold text-violet hover:bg-violet/15"
                          >
                            Jump to Section <ArrowRight className="size-3" />
                          </Link>
                        </div>

                        {/* Services Grid (2 Columns) */}
                        <div className="grid max-h-[300px] grid-cols-2 gap-2.5 overflow-y-auto pr-1">
                          {activeCategory.services.map((svc) => (
                            <div
                              key={svc.id}
                              className="group flex flex-col justify-between rounded-xl liquid-glass-interactive p-3 shadow-sm"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-extrabold text-ink group-hover:text-violet truncate">
                                    {svc.title}
                                  </span>
                                  <span className="text-[10px] font-semibold text-ink/40 shrink-0">
                                    #{String(svc.id).padStart(2, "0")}
                                  </span>
                                </div>
                                <div className="mt-1 flex items-center justify-between gap-1 text-[10px]">
                                  <span className="font-bold text-violet">
                                    {svc.startingPrice}
                                  </span>
                                  <span className="inline-flex items-center gap-0.5 text-ink/50 truncate">
                                    <Clock className="size-2.5 text-violet shrink-0" />
                                    {svc.deliveryTime}
                                  </span>
                                </div>
                                <p className="mt-1 text-[11px] leading-relaxed text-ink/65 line-clamp-1">
                                  {svc.desc}
                                </p>
                              </div>
                              <div className="mt-2.5 flex items-center justify-between border-t border-ink/5 pt-2">
                                <Link
                                  to="services"
                                  onClick={() => {
                                    setServicesMenuOpen(false)
                                    setTimeout(() => {
                                      const el = document.getElementById(
                                        `service-${svc.id}`,
                                      )
                                      el?.scrollIntoView({
                                        behavior: "smooth",
                                      })
                                    }, 100)
                                  }}
                                  className="text-[11px] font-semibold text-violet hover:underline"
                                >
                                  View details →
                                </Link>
                                <a
                                  href={getWhatsAppUrl(
                                    svc.title,
                                    activeCategory.title,
                                    `I want to enquire about ${svc.title} (${svc.startingPrice}, ${svc.deliveryTime})`,
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Enquire on WhatsApp"
                                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                  <MessageSquare className="size-3" />
                                  Enquire
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Quick Action: Lavender Glass Strip */}
                      <div className="mt-4 flex items-center justify-between rounded-xl liquid-glass-lavender p-3">
                        <span className="text-xs font-medium text-ink/80">
                          Need a tailor-made package across multiple services?
                        </span>
                        <CtaButton
                          to="quote"
                          onClick={() => setServicesMenuOpen(false)}
                          className="!px-4 !py-1.5 !text-xs"
                        >
                          Get Custom Quote
                        </CtaButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Our Work */}
            <Link
              to="work"
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "work"
                  ? "text-violet"
                  : "text-ink/80 hover:text-violet"
              }`}
            >
              Our Work
            </Link>

            {/* 5. Pricing */}
            <Link
              to="pricing"
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "pricing"
                  ? "text-violet"
                  : "text-ink/80 hover:text-violet"
              }`}
            >
              Pricing
            </Link>

            {/* 6. Contact */}
            <Link
              to="contact"
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "contact"
                  ? "text-violet"
                  : "text-ink/80 hover:text-violet"
              }`}
            >
              Contact
            </Link>

            {/* 7. Blog */}
            <Link
              to="blog"
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "blog"
                  ? "text-violet"
                  : "text-ink/80 hover:text-violet"
              }`}
            >
              Blog
            </Link>

            {/* 8. FAQ */}
            <Link
              to="faq"
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                route === "faq"
                  ? "text-violet"
                  : "text-ink/80 hover:text-violet"
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Right Action Cluster in exact order: 9. Search icon, 10. Yellow CTA, Mobile Menu toggle */}
          <div className="flex items-center gap-2">
            {/* 9. Search Icon */}
            <button
              type="button"
              aria-label="Search services and site content"
              onClick={() => setSearchModalOpen(true)}
              className="grid size-9 place-items-center rounded-full text-ink/75 transition hover:bg-violet/10 hover:text-violet focus:outline-none focus:ring-2 focus:ring-violet"
            >
              <Search className="size-4.5" />
            </button>

            {/* 10. Yellow Start a Project CTA */}
            <CtaButton
              to="quote"
              className="hidden !px-5 !py-2.5 !text-xs md:!text-sm sm:inline-flex"
            >
              Start a Project
            </CtaButton>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-violet/10 lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Liquid Glass) */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto mx-auto mt-2 max-h-[80vh] max-w-[1240px] overflow-y-auto rounded-3xl liquid-glass-elevated p-5 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-2">
            <div className="space-y-1">
              {/* Home */}
              <Link
                to=""
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === ""
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist/70"
                }`}
              >
                Home
              </Link>

              {/* Services Accordion */}
              <div className="rounded-xl border border-white/60 bg-white/60 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setMobileServicesExpanded((e) => !e)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold text-ink"
                >
                  <span className="flex items-center gap-2">
                    Services
                    <span className="rounded-full bg-violet/15 px-2 py-0.5 text-[11px] font-bold text-violet">
                      {TOTAL_SERVICES_COUNT}
                    </span>
                  </span>
                  <ChevronDown
                    className={`size-4 text-ink/60 transition-transform ${
                      mobileServicesExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesExpanded && (
                  <div className="border-t border-ink/8 liquid-glass-lavender p-3">
                    <Link
                      to="services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="mb-3 block rounded-xl bg-violet px-3 py-2 text-center text-xs font-bold text-white shadow-sm"
                    >
                      View All {TOTAL_CATEGORIES_COUNT} Categories &{" "}
                      {TOTAL_SERVICES_COUNT} Services →
                    </Link>
                    <div className="max-h-60 space-y-1 overflow-y-auto pr-1">
                      {serviceCategories.map((cat) => {
                        const Icon = cat.icon
                        return (
                          <Link
                            key={cat.id}
                            to={`services`}
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setTimeout(() => {
                                const el = document.getElementById(cat.id)
                                el?.scrollIntoView({ behavior: "smooth" })
                              }, 150)
                            }}
                            className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-ink hover:bg-white"
                          >
                            <span className="flex items-center gap-2">
                              <Icon className="size-3.5 text-violet" />
                              <span>{cat.title}</span>
                              {cat.featured && (
                                <span className="rounded-full bg-cta/40 px-1.5 py-0.2 text-[9px] font-extrabold text-ink">
                                  Top 5
                                </span>
                              )}
                            </span>
                            <span className="text-[10px] text-ink/50">
                              {cat.services.length}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Other pages in mandatory order */}
              <Link
                to="work"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === "work"
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist"
                }`}
              >
                Our Work
              </Link>
              <Link
                to="pricing"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === "pricing"
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist"
                }`}
              >
                Pricing
              </Link>
              <Link
                to="contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === "contact"
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist"
                }`}
              >
                Contact
              </Link>
              <Link
                to="blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === "blog"
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist"
                }`}
              >
                Blog
              </Link>
              <Link
                to="faq"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-bold ${
                  route === "faq"
                    ? "bg-mist text-violet"
                    : "text-ink hover:bg-mist"
                }`}
              >
                FAQ
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-2.5 border-t border-ink/8 pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setSearchModalOpen(true)
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/10 bg-mist/60 py-2.5 text-xs font-bold text-ink"
              >
                <Search className="size-4 text-violet" />
                Search Catalogue ({TOTAL_SERVICES_COUNT} Services)
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <MessageSquare className="size-4" />
                Chat on WhatsApp ({BUSINESS_CONTACT.displayNumber})
              </a>

              <a
                href={getCallingUrl()}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet/30 bg-violet/10 py-2.5 text-xs font-bold text-violet transition hover:bg-violet hover:text-white"
              >
                <Phone className="size-4" />
                Call Directly ({BUSINESS_CONTACT.displayNumber})
              </a>

              <CtaButton
                to="quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full !py-3"
              >
                Start a Project
              </CtaButton>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/60 p-4 pt-16 backdrop-blur-sm md:pt-24 animate-in fade-in"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl liquid-glass-elevated p-6 shadow-2xl animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 size-5 text-violet" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search across all ${TOTAL_SERVICES_COUNT} services & ${TOTAL_CATEGORIES_COUNT} categories...`}
                className="w-full rounded-2xl border border-white/70 bg-white/75 py-3.5 pl-12 pr-12 text-sm font-semibold text-ink outline-none backdrop-blur-md transition focus:border-violet focus:bg-white focus:ring-4 focus:ring-violet/15"
              />
              {searchQuery ? (
                <button
                  type="button"
                  aria-label="Clear search query"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-bold text-ink/40 hover:text-ink"
                >
                  Clear
                </button>
              ) : (
                <span className="absolute right-4 text-[11px] font-semibold text-ink/40">
                  ESC to close
                </span>
              )}
            </div>

            {/* Results or Quick Recommendations */}
            <div className="mt-4 max-h-[400px] overflow-y-auto pr-1">
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-ink/50">
                      Found {searchResults.length} service offerings
                    </p>
                    {searchResults.map((svc) => (
                      <div
                        key={svc.id}
                        className="flex items-center justify-between rounded-2xl liquid-glass-interactive p-3.5 shadow-sm"
                      >
                        <div className="flex-1 pr-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-violet">
                              #{String(svc.id).padStart(2, "0")}
                            </span>
                            <span className="rounded-md bg-mist px-2 py-0.5 text-[10px] font-bold text-violet">
                              {svc.categoryTitle}
                            </span>
                            <h4 className="text-sm font-bold text-ink">
                              {svc.title}
                            </h4>
                          </div>
                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-extrabold text-violet">
                              {svc.startingPrice}
                            </span>
                            <span className="text-ink/30">·</span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-ink/60">
                              <Clock className="size-3 text-violet" />
                              {svc.deliveryTime}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-ink/65 line-clamp-1">
                            {svc.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={getWhatsAppUrl(
                              svc.title,
                              svc.categoryTitle,
                              `I want to enquire about ${svc.title} (${svc.startingPrice}, ${svc.deliveryTime})`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
                          >
                            <MessageSquare className="size-3.5" />
                            WhatsApp
                          </a>
                          <Link
                            to="services"
                            onClick={() => {
                              setSearchModalOpen(false)
                              setTimeout(() => {
                                const el = document.getElementById(
                                  `service-${svc.id}`,
                                )
                                el?.scrollIntoView({ behavior: "smooth" })
                              }, 150)
                            }}
                            className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1.5 text-xs font-bold text-violet hover:bg-violet/20"
                          >
                            View →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-10 text-center">
                    <p className="text-sm font-bold text-ink">
                      No services found for "{searchQuery}"
                    </p>
                    <p className="mt-1 text-xs text-ink/50">
                      Try searching for "WhatsApp", "AI agent", "CRM", "Landing
                      Page", or "Custom Web".
                    </p>
                  </div>
                )
              ) : (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/40">
                    Popular & Top 5 Services
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {[
                      "WhatsApp Business automation",
                      "AI-powered WhatsApp chatbot",
                      "Custom CRM development",
                      "Pharmacy CRM",
                      "Business Website",
                      "AI sales assistant",
                      "n8n workflow automation",
                      "Custom Web Applications",
                    ].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearchQuery(term)}
                        className="rounded-full border border-white/60 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-ink/80 transition hover:border-violet hover:bg-white hover:text-violet shadow-sm"
                      >
                        {term}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl liquid-glass-lavender p-4">
                    <h5 className="text-xs font-bold text-ink">
                      Complete {TOTAL_CATEGORIES_COUNT}-Category Digital
                      Architecture
                    </h5>
                    <p className="mt-1 text-xs text-ink/65">
                      Explore our full catalogue of {TOTAL_SERVICES_COUNT}{" "}
                      services or get in touch for custom architecture.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        to="services"
                        onClick={() => setSearchModalOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-violet hover:underline"
                      >
                        Explore all {TOTAL_SERVICES_COUNT} services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export function SectionHead({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow?: string
  title: string
  text?: string
  center?: boolean
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-violet">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-ink/65">{text}</p>}
    </div>
  )
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-violet via-deep-purple to-purple px-6 pb-28 pt-40 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-white/80">{text}</p>
      </div>
      <svg
        className="absolute inset-x-0 bottom-0 block w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        height="50"
      >
        <path d="M0 60V20C240 0 480 0 720 12S1200 40 1440 20V60Z" fill="#fff" />
      </svg>
    </section>
  )
}

export function Footer() {
  const col = (title: string, items: [string, string][]) => (
    <div>
      <h4 className="mb-4 text-sm font-bold text-white">{title}</h4>
      <ul className="space-y-3 text-sm text-white/65">
        {items.map(([l, t]) => (
          <li key={l}>
            <Link to={t} className="hover:text-cta transition-colors">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            DigiProvider is a digital agency building websites, WhatsApp
            automation, AI agents, custom CRM pipelines, and scalable software
            for modern businesses.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-cta">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            {TOTAL_CATEGORIES_COUNT} Categories · {TOTAL_SERVICES_COUNT}{" "}
            Offerings Available
          </div>
          <div className="mt-6 flex gap-3">
            {[Globe, AtSign, Share2, Camera].map((I, i) => (
              <a
                key={i}
                href="#/"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full bg-white/10 hover:bg-violet transition"
              >
                <I className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {col("Quick Links", [
          ["Home", ""],
          [`Services Catalogue (${TOTAL_SERVICES_COUNT})`, "services"],
          ["Our Work", "work"],
          ["Pricing", "pricing"],
          ["Blog", "blog"],
          ["FAQ", "faq"],
          ["Contact", "contact"],
        ])}

        {col(
          "Top Core Services",
          topFeaturedCategories.map(
            (c) => [c.title, "services"] as [string, string],
          ),
        )}

        <div>
          <h4 className="mb-4 text-sm font-bold">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 translate-y-0.5 text-lavender" />
              hello@digiprovider.com
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 translate-y-0.5 text-lavender" />
              <a
                href={BUSINESS_CONTACT.callingUrl}
                className="text-white hover:text-cta transition"
              >
                {BUSINESS_CONTACT.displayNumber}
              </a>
            </li>
            <li className="flex gap-2">
              <MessageSquare className="size-4 shrink-0 translate-y-0.5 text-emerald-400" />
              <a
                href={BUSINESS_CONTACT.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cta transition"
              >
                Chat on WhatsApp ({BUSINESS_CONTACT.displayNumber})
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="size-4 shrink-0 translate-y-0.5 text-lavender" />
              24 Market Street, Suite 400
            </li>
          </ul>
          <CtaButton className="mt-6">
            Start a Project <ArrowRight className="size-4" />
          </CtaButton>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-3 px-6 py-6 text-xs text-white/50 md:px-8">
          <span>© 2026 DigiProvider. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#/" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#/" className="hover:text-white">
              Terms
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
