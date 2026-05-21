import type { ContactFormValues } from "@/lib/contact-form-schema";

/** wa.me ожидает только цифры (код страны без +). */
export const WHATSAPP_URL = "https://wa.me/972543319843";

export const PHONE_DISPLAY = "+972 54-331-9843";

/** tel: в формате E.164 без пробелов */
export const PHONE_TEL = "+972543319843";

export function buildWhatsAppInquiryMessage(fields: ContactFormValues): string {
  return [
    "שלום, פנייה מהאתר boikovfinance.com",
    "",
    `שם: ${fields.name.trim()}`,
    `טלפון: ${fields.phone.trim()}`,
    `מייל: ${fields.email.trim()}`,
    "",
    "הודעה:",
    fields.message.trim(),
  ].join("\n");
}

export function buildWhatsAppInquiryUrl(fields: ContactFormValues): string {
  const text = encodeURIComponent(buildWhatsAppInquiryMessage(fields));
  return `${WHATSAPP_URL}?text=${text}`;
}

export function openWhatsAppInquiry(fields: ContactFormValues): void {
  window.open(buildWhatsAppInquiryUrl(fields), "_blank", "noopener,noreferrer");
}
