import React from 'react';
import { SERVICES_DETAILED } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { HeartHandshake, Users, ShieldAlert, Landmark, Check, MessageSquare, ArrowRight } from 'lucide-react';

const SERVICE_ICON_MAP: Record<string, React.ElementType> = {
  HeartHandshake,
  Users,
  ShieldAlert,
  Landmark
};

export const ServicesSection: React.FC = () => {
  const handleServiceCtaClick = (serviceTitle: string) => {
    trackWhatsAppClick('Servicos', `Botão Serviço - ${serviceTitle}`);
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Áreas Principais de Atuação Jurídica
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-50 mt-3">
            Serviços Especializados em Família e Sucessões
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Orientação técnica e atuação clara para resolver pendências relativas a filhos, alimentos e bens familiares.
          </p>
        </div>

        {/* 4 Service Pillars Grid */}
        <div className="space-y-12">
          {SERVICES_DETAILED.map((service, index) => {
            const IconComponent = SERVICE_ICON_MAP[service.iconName] || Landmark;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300 hover:border-amber-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left Column: Title & Overview */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-amber-400 text-xs font-semibold">
                    <IconComponent className="w-4 h-4" />
                    <span>{service.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-amber-300/90 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={getWhatsAppLink(service.whatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleServiceCtaClick(service.title)}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{service.ctaText}</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Highlights Checklist */}
                <div className="lg:col-span-6 bg-slate-900/80 border border-slate-700/60 rounded-2xl p-5 sm:p-6 space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 border-b border-slate-800 pb-2">
                    Situações Analisadas nesta Área:
                  </h4>

                  <ul className="space-y-3">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Atendimento humano e sigiloso</span>
                    <a
                      href={getWhatsAppLink(service.whatsAppText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Tirar dúvida</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
