import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-100 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-200/60 px-3.5 py-1.5 rounded-full border border-amber-300">
            Respostas para Dúvidas Comuns
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-3">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Esclarecimentos iniciais sobre pensão alimentícia, guarda de filhos e inventário judicial.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-slate-900 hover:text-amber-800 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 sm:px-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p className="mb-4">{item.answer}</p>
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                      <span>Ainda tem dúvidas sobre este ponto?</span>
                      <a
                        href={getWhatsAppLink(`Olá, tenho dúvidas sobre a seguinte questão de ${item.category}: ${item.question}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('FAQ', `Dúvida - ${item.question}`)}
                        className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>Perguntar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Banner */}
        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-serif font-bold mb-2">
            Sua dúvida não foi respondida acima?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-4">
            Envie sua pergunta diretamente ao advogado via WhatsApp para receber orientação específica sobre o seu caso.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('FAQ', 'Botão Final FAQ')}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enviar minha dúvida pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
