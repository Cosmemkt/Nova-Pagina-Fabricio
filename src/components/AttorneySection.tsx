import React from 'react';
import { ATTORNEY_INFO } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { Scale, ShieldCheck, HeartHandshake, Instagram, MessageSquare, Award } from 'lucide-react';

export const AttorneySection: React.FC = () => {
  return (
    <section id="advogado" className="py-16 lg:py-24 bg-white text-slate-800 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Profile Header Badge */}
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                  <Scale className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-50 mb-1">
                  {ATTORNEY_INFO.name}
                </h3>

                <p className="text-amber-400 font-medium text-sm mb-4">
                  {ATTORNEY_INFO.title}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 border-t border-slate-800 pt-4">
                  Atuação técnica e humanizada em demandas de Pensão Alimentícia, Guarda de Menores, Execução de Alimentos e Inventário Judicial.
                </p>

                {/* Instagram Reference */}
                <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 flex items-center justify-center text-white">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">Perfil Profissional</span>
                      <span className="text-xs text-slate-400">{ATTORNEY_INFO.instagramHandle}</span>
                    </div>
                  </div>
                  <a
                    href={ATTORNEY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-400 hover:underline"
                  >
                    Ver Perfil
                  </a>
                </div>

                {/* Direct WhatsApp Action */}
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Advogado', 'Card Advogado Perfil')}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Falar com o Dr. Fabrício</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Column: Bio & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-200">
              Autoridade e Compromisso Ético
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900">
              Sobre a Nossa Atuação Jurídica
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {ATTORNEY_INFO.description}
            </p>

            {/* Core Principles */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Nossos Pilares de Atendimento</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ATTORNEY_INFO.principles.map((pilar, pIdx) => (
                  <div key={pIdx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {pilar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-normal">
                      {pilar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* OAB Compliance Note */}
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-600">
              <ShieldCheck className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
              <p>
                Atuação estritamente pautada no Código de Ética e Disciplina da OAB e Provimento 205/2021. As informações contidas nesta página possuem caráter meramente informativo e de utilidade pública, não configurando captação de clientela ou garantia de resultados.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
