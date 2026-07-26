import React from 'react';
import { Scale, Phone, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { ATTORNEY_INFO } from '../data/landingData';
import { DISPLAY_PHONE, getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-slate-100 block">
                  {ATTORNEY_INFO.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Advocacia Especializada em Família e Sucessões
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Atendimento focado na solução técnica, ética e humanizada de conflitos familiares, incluindo pensão alimentícia, guarda de filhos e inventário judicial.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Footer', 'Botão WhatsApp Rodapé')}
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-xs"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{DISPLAY_PHONE}</span>
              </a>

              <a
                href={ATTORNEY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors text-xs"
              >
                <Instagram className="w-4 h-4" />
                <span>{ATTORNEY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-slate-200 text-sm">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#situacoes" className="hover:text-amber-400 transition-colors">Situações Frequentes</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Pensão Alimentícia</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Guarda dos Filhos</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Inventário Judicial</a></li>
              <li><a href="#processo" className="hover:text-amber-400 transition-colors">Como Funciona</a></li>
              <li><a href="#contato" className="hover:text-amber-400 transition-colors">Formulário de Atendimento</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* OAB Legal Disclaimer Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-slate-200 text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Aviso de Conformidade OAB</span>
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Este site possui caráter estritamente informativo e educativo, conforme o Provimento 205/2021 do Conselho Federal da OAB e o Código de Ética e Disciplina da Advocacia. Não prometemos ou garantimos resultados de causas judiciais. Todas as consultas e análises são realizadas individualmente para cada cliente.
            </p>
          </div>

        </div>

        {/* Copyright & Technical Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <p>© {new Date().getFullYear()} {ATTORNEY_INFO.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para alta conversão em Google Ads</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
