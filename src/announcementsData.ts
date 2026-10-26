import { getWhatsAppUrl } from "./contactConfig"

export interface AnnouncementItem {
  id: string
  type?: "offer" | "service" | "whatsapp" | "launch" | "update"
  badge?: string
  message: string
  highlightText?: string
  suffixText?: string
  ctaLabel?: string
  ctaRoute?: string // internal hash route e.g. "quote", "services", "contact"
  ctaUrl?: string // optional external URL
  startDate?: string // ISO date string e.g. "2026-01-01"
  endDate?: string // ISO date string e.g. "2026-12-31"
  active: boolean
}

export const ANNOUNCEMENT_ROTATION_INTERVAL_MS = 6500

export const announcements: AnnouncementItem[] = [
  {
    id: "website-offer-2499",
    type: "offer",
    badge: "LIMITED-TIME OFFER",
    message: "Build Your Website Starting at",
    highlightText: "₹2,499",
    suffixText: "— Fast, SEO-ready & mobile optimized",
    ctaLabel: "Claim Offer",
    ctaUrl: getWhatsAppUrl(
      "Website Development ₹2,499 Limited Offer",
      "Special Offer",
      "Hi DigiProvider, I would like to claim the limited-time ₹2,499 website development offer. Please share the details.",
    ),
    active: true,
  },
  {
    id: "whatsapp-ai-special",
    type: "whatsapp",
    badge: "WHATSAPP & AI",
    message: "Automate Customer Inquiries with AI Agents & Chatbots —",
    highlightText: "Zero Setup Fee",
    suffixText: "for qualified businesses",
    ctaLabel: "Explore AI",
    ctaRoute: "services",
    active: true,
  },
  {
    id: "catalogue-expanded-96",
    type: "launch",
    badge: "NEW SERVICES",
    message: "Explore our upgraded services catalogue with",
    highlightText: "16 Categories & 96 Offerings",
    suffixText: "tailored for high-growth brands",
    ctaLabel: "Browse All",
    ctaRoute: "services",
    active: true,
  },
  {
    id: "crm-automation-sprint",
    type: "service",
    badge: "CRM AUTOMATION",
    message: "Connect your sales pipeline to WhatsApp with custom",
    highlightText: "n8n Workflows",
    suffixText: "delivered in 5 days",
    ctaLabel: "Start Project",
    ctaRoute: "quote",
    active: true,
  },
]

export function getActiveAnnouncements(
  items: AnnouncementItem[] = announcements,
  now: Date = new Date(),
): AnnouncementItem[] {
  return items.filter((item) => {
    if (!item.active) return false
    if (item.startDate) {
      const start = new Date(item.startDate)
      if (!isNaN(start.getTime()) && start > now) return false
    }
    if (item.endDate) {
      const end = new Date(item.endDate)
      if (!isNaN(end.getTime()) && end < now) return false
    }
    return true
  })
}
