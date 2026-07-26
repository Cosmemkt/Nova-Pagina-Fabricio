import React from 'react';
import { PROCESS_STEPS } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { MessageSquareText, FileSearch, Compass, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

const STEP_ICONS: Record<string, React.ElementType> = {
  MessageSquareText,
  FileSearch,
  Compass,
  CheckCircle2
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-16 lg:py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Passo a Passo Simples
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-3">
            Como Funciona o Nosso Atendimento
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Um fluxo transparente e direto para você obter orientação jurídica clara sobre sua situação sem complicação.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const IconComponent = STEP_ICONS[stepItem.icon] || Compass;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-serif font-bold text-amber-600/80">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {stepItem.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Process Disclaimer & WhatsApp CTA */}
        <div className="mt-12 bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border border-slate-800 shadow-xl text-center space-y-4">
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            <strong className="text-amber-400 font-semibold">Compromisso Ético e Transparência:</strong> Cada caso possui particularidades próprias. Não fazemos promessas de resultados garantidos ou soluções mágicas, mas fornecemos uma análise técnica, responsável e sincera sobre as possibilidades da sua causa.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Processo', 'Botão Passo a Passo')}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-md"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Iniciar atendimento pelo WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
