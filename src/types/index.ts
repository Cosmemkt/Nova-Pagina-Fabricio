export interface SituationCardData {
  id: string;
  title: string;
  description: string;
  iconName: string;
  serviceCategory: 'pensao' | 'guarda' | 'alimentos' | 'inventario' | 'geral';
  whatsAppText: string;
  keywords: string[];
}

export interface ServiceDetail {
  id: 'pensao' | 'guarda' | 'alimentos' | 'inventario';
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  situationsCovered: string[];
  whatsAppText: string;
  ctaText: string;
  iconName: string;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  name: string;
  whatsapp: string;
  email: string;
  subject: string;
  message?: string;
}
