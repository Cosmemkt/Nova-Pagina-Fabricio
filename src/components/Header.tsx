import React, { useState } from 'react';
import { Scale, Phone, Menu, X, Instagram } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppLink } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';
import { ATTORNEY_INFO } from '../data/landingData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppHeaderClick = () => {
    trackWhatsAppClick('Header', 'Botão WhatsApp Topo');
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Attorney Branding */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors">
                {ATTORNEY_INFO.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Advocacia de Família & Sucessões
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#situacoes" className="hover:text-amber-400 transition-colors">Situações</a>
            <a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços</a>
            <a href="#processo" className="hover:text-amber-400 transition-colors">Como Funciona</a>
            <a href="#advogado" className="hover:text-amber-400 transition-colors">O Advogado</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">Dúvidas</a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={ATTORNEY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-slate-800"
              title="Instagram do Dr. Fabrício Bittencourt"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-emerald-900/30 focus:ring-2 focus:ring-emerald-400"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{DISPLAY_PHONE}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-md flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#situacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium border-b border-slate-800/50"
          >
            Situações Frequentes
          </a>
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium border-b border-slate-800/50"
          >
            Serviços Prestados
          </a>
          <a
            href="#processo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium border-b border-slate-800/50"
          >
            Como Funciona
          </a>
          <a
            href="#advogado"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium border-b border-slate-800/50"
          >
            Sobre o Advogado
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium border-b border-slate-800/50"
          >
            Formulário de Contato
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-amber-400 text-base font-medium"
          >
            Dúvidas Frequentes
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppHeaderClick}
              className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Falar pelo WhatsApp agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
