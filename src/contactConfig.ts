/**
 * DigiProvider — Central Business Contact Configuration
 * Single source of truth for business contact details across the website.
 *
 * Business WhatsApp and Calling Number: 7281045393
 * Country Code: +91 (India)
 */

export const BUSINESS_CONTACT = {
  // Primary 10-digit number
  rawNumber: "7281045393",

  // Display number variants
  displayNumber: "7281045393",
  formattedDisplay: "+91 72810 45393",

  // International WhatsApp format (country code 91 + 10 digits without symbols/spaces)
  whatsappNumber: "917281045393",

  // Base URLs
  whatsappBaseUrl: "https://wa.me/917281045393",
  callingUrl: "tel:+917281045393",

  // Default prefilled message
  defaultMessage:
    "Hi DigiProvider, I am interested in your digital services. Please share more details.",

  // General company details
  email: "hello@digiprovider.com",
  officeAddress: "24 Market Street, Suite 400",
} as const

/**
 * Generate a direct WhatsApp click-to-chat URL with proper URL encoding.
 * When a visitor enquires about a specific service, prefills:
 * "Hi DigiProvider, I am interested in your [Service Name]. Please share the pricing and details."
 */
export function getWhatsAppUrl(
  serviceTitle?: string,
  categoryTitle?: string,
  customNote?: string,
): string {
  let message: string

  if (serviceTitle) {
    message = `Hi DigiProvider, I am interested in your ${serviceTitle}. Please share the pricing and details.`
    if (
      categoryTitle &&
      !serviceTitle.toLowerCase().includes(categoryTitle.toLowerCase())
    ) {
      message = `Hi DigiProvider, I am interested in your ${serviceTitle} (${categoryTitle}). Please share the pricing and details.`
    }
    if (customNote) {
      message += ` Details: ${customNote}`
    }
  } else if (customNote) {
    message = customNote
  } else {
    message = BUSINESS_CONTACT.defaultMessage
  }

  return `${BUSINESS_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`
}

/**
 * Generate telephone calling URL for tel: protocol.
 */
export function getCallingUrl(): string {
  return BUSINESS_CONTACT.callingUrl
}

// Backwards-compatibility alias for existing codebase
export const BUSINESS_WHATSAPP = {
  phoneNumber: BUSINESS_CONTACT.whatsappNumber,
  displayNumber: BUSINESS_CONTACT.displayNumber,
  formattedDisplay: BUSINESS_CONTACT.formattedDisplay,
  callingUrl: BUSINESS_CONTACT.callingUrl,
  label: "DigiProvider Official WhatsApp & Calling",
}
