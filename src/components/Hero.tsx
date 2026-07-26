import React from 'react';
import { MessageSquare, ShieldCheck, Zap, UserCheck, ArrowRight, Scale, CheckCircle } from 'lucide-react';
import { HERO_DATA, SEARCH_KEYWORDS_CHIPS } from '../data/landingData';
import { getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';

export const Hero: React.FC = () => {
  const handlePrimaryCtaClick = () => {
    trackWhatsAppClick('Hero', 'CTA Principal WhatsApp Hero');
  };

  return (
    <section className="relative bg-slate-900 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Advocacia Especializada em Direito de Família e Sucessões</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 leading-tight">
              {HERO_DATA.mainHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {HERO_DATA.subheadline}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePrimaryCtaClick}
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-6 py-4 rounded-xl transition-all shadow-lg shadow-emerald-950/50 hover:scale-[1.02] focus:ring-4 focus:ring-emerald-400"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{HERO_DATA.primaryCtaText}</span>
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base px-6 py-4 rounded-xl border border-slate-700 transition-colors"
              >
                <span>{HERO_DATA.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento Rápido via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Orientação Sigilosa e Ética</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Análise Individualizada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Services Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
              <div className="absolute -top-3 left-6 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Principais Áreas de Atuação
              </div>

              <h2 className="text-xl font-serif font-bold text-slate-100 mt-2 mb-4">
                Como podemos orientar seu caso hoje?
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Pensão Alimentícia</h3>
                    <p className="text-xs text-slate-400">Solicitação, cobrança de atrasados e revisão de valores.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Guarda dos Filhos & Visitas</h3>
                    <p className="text-xs text-slate-400">Guarda compartilhada/unilateral e convivência familiar.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Alimentos & Família</h3>
                    <p className="text-xs text-slate-400">Ações alimentares, alimentos gravídicos e dependentes.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-700/50 hover:border-amber-500/40 transition-colors">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-200">Inventário Judicial & Sucessões</h3>
                    <p className="text-xs text-slate-400">Abertura de inventário, partilha de bens e herança.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-700/80 text-center">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handlePrimaryCtaClick}
                  className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Tirar dúvidas sobre meu caso no WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Google Ads Keyword Chips Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Buscas Frequentes:</span>
          {SEARCH_KEYWORDS_CHIPS.map((chip, idx) => (
            <span
              key={idx}
              className="text-xs text-slate-300 bg-slate-800/80 border border-slate-700/70 px-3 py-1 rounded-full"
            >
              {chip}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};
