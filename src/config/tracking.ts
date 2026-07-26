/**
 * CONFIGURAÇÃO DE TRACKING DE CONVERSÕES (GOOGLE ADS / GA4 / GTM / META PIXEL)
 * 
 * Para ativar o rastreamento em produção:
 * 1. Preencha os IDs abaixo com suas credenciais do Google Ads, GA4 e Meta Pixel.
 * 2. As funções utilitárias irão disparar os eventos automaticamente para a dataLayer do GTM ou gtag.js.
 */

export const TRACKING_CONFIG = {
  // Substitua com seu ID do Google Tag Manager (ex: 'GTM-XXXXXX')
  GTM_ID: "",

  // Substitua com seu ID de Medição do Google Analytics 4 (ex: 'G-XXXXXXXXXX')
  GA4_MEASUREMENT_ID: "",

  // Substitua com seu ID de Conversão do Google Ads (ex: 'AW-123456789')
  GOOGLE_ADS_CONVERSION_ID: "",

  // Substitua com o Rótulo/Label de Conversão do Google Ads (ex: 'AbCdEfGhIjKlMnOpQrS')
  GOOGLE_ADS_CONVERSION_LABEL: "",

  // Substitua com seu Pixel ID do Meta/Facebook (ex: '123456789012345')
  META_PIXEL_ID: "",
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara evento de clique no botão do WhatsApp
 * Essencial para otimizar Campanhas do Google Ads com foco em Conversões/Leads
 */
export function trackWhatsAppClick(sourceCategory: string = "general", buttonLabel: string = "WhatsApp CTA") {
  console.log(`[Tracking] WhatsApp Click: ${sourceCategory} - ${buttonLabel}`);

  // Disparo para DataLayer (GTM)
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "whatsapp_conversion",
      conversion_category: "Lead WhatsApp",
      source_location: sourceCategory,
      button_text: buttonLabel,
    });
  }

  // Disparo direto para Google Ads / GA4 via gtag se disponível
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_whatsapp", {
      event_category: "Conversion",
      event_label: `${sourceCategory} - ${buttonLabel}`,
    });

    if (TRACKING_CONFIG.GOOGLE_ADS_CONVERSION_ID && TRACKING_CONFIG.GOOGLE_ADS_CONVERSION_LABEL) {
      window.gtag("event", "conversion", {
        send_to: `${TRACKING_CONFIG.GOOGLE_ADS_CONVERSION_ID}/${TRACKING_CONFIG.GOOGLE_ADS_CONVERSION_LABEL}`,
      });
    }
  }

  // Disparo para Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Contact", {
      content_name: `WhatsApp - ${sourceCategory}`,
    });
  }
}

/**
 * Dispara evento de envio de Formulário de Lead
 */
export function trackFormSubmit(subject: string) {
  console.log(`[Tracking] Lead Form Submitted: ${subject}`);

  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "form_lead_conversion",
      lead_type: subject,
    });
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "Form",
      event_label: subject,
    });
  }

  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_category: subject,
    });
  }
}

/**
 * Dispara evento de clique em telefone/ligação
 */
export function trackPhoneClick() {
  console.log("[Tracking] Direct Phone Call Clicked");

  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "phone_click_conversion",
    });
  }
}
