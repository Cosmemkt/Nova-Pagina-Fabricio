/**
 * CONFIGURAÇÃO CENTRALIZADA DO WHATSAPP
 * Número do WhatsApp e construtor de mensagens pré-preenchidas
 * Telefone fornecido: 48 99177-4043 -> Formato internacional 5548991774043
 */

export const WHATSAPP_NUMBER = "5548991774043";
export const DISPLAY_PHONE = "(48) 99177-4043";

export interface WhatsAppMessageContext {
  pensao: string;
  guarda: string;
  alimentos: string;
  inventario: string;
  geral: string;
}

export const PRESET_MESSAGES: WhatsAppMessageContext = {
  pensao: "Olá, gostaria de obter orientação jurídica sobre pensão alimentícia.",
  guarda: "Olá, gostaria de obter orientação jurídica sobre guarda de filhos e regulamentação de visitas.",
  alimentos: "Olá, gostaria de obter orientação jurídica sobre alimentos e direitos da família.",
  inventario: "Olá, gostaria de obter orientação jurídica sobre inventário judicial e partilha de bens.",
  geral: "Olá, gostaria de obter orientação jurídica sobre meu caso de Direito de Família ou Sucessões.",
};

/**
 * Gera a URL do WhatsApp com o texto pré-preenchido sanitizado.
 * @param message Texto a ser pré-preenchido
 * @returns Link completo no formato https://wa.me/5548991774043?text=...
 */
export function getWhatsAppLink(message?: string): string {
  const textToUse = message || PRESET_MESSAGES.geral;
  const encodedText = encodeURIComponent(textToUse);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

/**
 * Gera link para o WhatsApp baseado no nome do serviço ou tópico
 */
export function getWhatsAppServiceLink(service: 'pensao' | 'guarda' | 'alimentos' | 'inventario' | 'geral' | string): string {
  switch (service.toLowerCase()) {
    case 'pensao':
    case 'pensão alimentícia':
      return getWhatsAppLink(PRESET_MESSAGES.pensao);
    case 'guarda':
    case 'guarda dos filhos':
      return getWhatsAppLink(PRESET_MESSAGES.guarda);
    case 'alimentos':
      return getWhatsAppLink(PRESET_MESSAGES.alimentos);
    case 'inventario':
    case 'inventário judicial':
      return getWhatsAppLink(PRESET_MESSAGES.inventario);
    default:
      return getWhatsAppLink(PRESET_MESSAGES.geral);
  }
}
