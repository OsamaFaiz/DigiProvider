import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { Footer, Navbar, PageHero } from "./components/Chrome"
import { FloatingContactButtons } from "./components/FloatingContactButtons"
import {
  Blog,
  ContactCta,
  Faq,
  Form,
  Hero,
  Pricing,
  Process,
  Projects,
  ServiceCards,
  ServicesCatalogue,
} from "./components/Sections"
import {
  BUSINESS_CONTACT,
  BUSINESS_WHATSAPP,
  getWhatsAppUrl,
  getCallingUrl,
} from "./contactConfig"

const getRoute = () =>
  window.location.hash.replace(/^#\/?/, "").split("?")[0].split("#")[0]

export default function App() {
  const [route, setRoute] = useState(getRoute())

  useEffect(() => {
    const handleHash = () => setRoute(getRoute())
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  let page
  switch (route) {
    case "services":
      page = (
        <>
          <PageHero
            title="Services Catalogue"
            text="Explore our featured Top 5 core specializations and complete digital offerings engineered to accelerate your business growth."
          />
          <ServicesCatalogue />
          <Process />
          <ContactCta />
        </>
      )
      break
    case "work":
      page = (
        <>
          <PageHero
            title="Our Work"
            text="Selected projects across web, mobile, custom software, e-commerce, and AI solutions."
          />
          <Projects limit={6} />
          <ContactCta />
        </>
      )
      break
    case "pricing":
      page = (
        <>
          <PageHero
            title="Pricing Packages"
            text="Transparent packages with no surprises. Start with a foundational sprint or scale with an enterprise squad."
          />
          <Pricing />
          <Faq limit={3} />
        </>
      )
      break
    case "contact":
      page = (
        <>
          <PageHero
            title="Contact Us"
            text="Questions, ideas or a project in mind? We would love to hear from you."
          />
          <section className="bg-white px-6 pb-24 md:px-8">
            <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div className="space-y-4">
                {[
                  [
                    Mail,
                    "Email",
                    "hello@digiprovider.com",
                    "mailto:hello@digiprovider.com",
                  ],
                  [
                    Phone,
                    "Phone",
                    BUSINESS_CONTACT.displayNumber,
                    BUSINESS_CONTACT.callingUrl,
                  ],
                  [
                    MessageSquare,
                    "WhatsApp",
                    `${BUSINESS_CONTACT.displayNumber} (Chat Now)`,
                    getWhatsAppUrl(
                      undefined,
                      undefined,
                      "Hi DigiProvider, I am interested in your digital services. Please share more details.",
                    ),
                  ],
                  [MapPin, "Office", "24 Market Street, Suite 400", ""],
                ].map(([I, l, v, link]: any) => (
                  <div
                    key={l}
                    className="flex items-center gap-4 rounded-2xl liquid-glass-interactive p-5 shadow-sm"
                  >
                    <span className="grid size-12 place-items-center rounded-xl bg-mist text-violet">
                      <I className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs text-ink/55">{l}</span>
                      {link ? (
                        <a
                          href={link}
                          target={
                            link.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-bold text-ink hover:text-violet transition"
                        >
                          {v}
                        </a>
                      ) : (
                        <span className="font-bold text-ink">{v}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
              <Form />
            </div>
          </section>
        </>
      )
      break
    case "blog":
      page = (
        <>
          <PageHero
            title="Agency Blog"
            text="Practical insights on web, mobile, custom software, automation, and AI from the DigiProvider engineering team."
          />
          <Blog />
        </>
      )
      break
    case "faq":
      page = (
        <>
          <PageHero
            title="Frequently Asked Questions"
            text="Clear answers about timelines, processes, deliverables, pricing, and ongoing support retainers."
          />
          <Faq />
          <ContactCta />
        </>
      )
      break
    case "quote":
      page = (
        <>
          <PageHero
            title="Start a Project"
            text="Select from our service categories or chat directly on WhatsApp for an immediate scoping estimate."
          />
          <section className="bg-white px-6 pb-24 md:px-8">
            <div className="mx-auto max-w-3xl">
              <Form quote />
            </div>
          </section>
        </>
      )
      break
    default:
      page = (
        <>
          <Hero />
          <ServiceCards />
          <Projects />
          <Pricing />
          <Process />
          <Faq />
          <ContactCta />
        </>
      )
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="bg-gradient-to-br from-deep-violet via-violet to-purple">
        <Navbar route={route} />
        <main id="main-content">{page}</main>
      </div>
      <FloatingContactButtons />
      <Footer />
    </div>
  )
}
