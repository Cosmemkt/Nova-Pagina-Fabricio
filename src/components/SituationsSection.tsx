import React from 'react';
import { SITUATION_CARDS } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { ClockAlert, TrendingUp, Users, CalendarDays, FileText, Scale, MessageSquare, ArrowUpRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ClockAlert,
  TrendingUp,
  Users,
  CalendarDays,
  FileText,
  Scale
};

export const SituationsSection: React.FC = () => {
  const handleCardCtaClick = (cardTitle: string) => {
    trackWhatsAppClick('Situacoes', `Card - ${cardTitle}`);
  };

  return (
    <section id="situacoes" className="py-16 lg:py-24 bg-slate-100 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
            Identificação de Problemas Jurídicos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-3">
            Você está passando por uma dessas situações?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Selecione a situação que mais se aproxima do seu momento atual para entender como podemos orientar você e os próximos passos.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SITUATION_CARDS.map((card) => {
            const IconComponent = ICON_MAP[card.iconName] || Scale;
            const waLink = getWhatsAppLink(card.whatsAppText);

            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Orientação Direta
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCardCtaClick(card.title)}
                    className="w-full inline-flex items-center justify-between bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-lg transition-colors group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-400 group-hover/btn:text-white" />
                      <span>Falar sobre este caso no WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Não encontrou exatamente o seu caso nas opções acima?
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            Cada família possui particularidades únicas. Entre em contato diretamente pelo WhatsApp para explicar sua situação e receber a orientação adequada.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Situacoes', 'Banner Inferior')}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Explicar minha situação no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
