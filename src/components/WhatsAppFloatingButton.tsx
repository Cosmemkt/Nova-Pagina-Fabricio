import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppLink, DISPLAY_PHONE } from '../config/whatsapp';
import { trackWhatsAppClick } from '../config/tracking';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 10 seconds if user hasn't interacted
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick('FloatingButton', 'Botão Flutuante WhatsApp');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end group">
      
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 bg-white text-slate-900 border border-slate-200 shadow-2xl rounded-2xl p-4 max-w-xs animate-bounce-short relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-1"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div className="pr-4">
              <p className="text-xs font-bold text-slate-900">Precisa de ajuda jurídica?</p>
              <p className="text-[11px] text-slate-600 leading-snug">
                Fale sobre pensão, guarda ou inventário no WhatsApp ({DISPLAY_PHONE}).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="relative bg-emerald-600 hover:bg-emerald-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 group"
        aria-label="Falar pelo WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none" />

        {/* Badge "1" */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          1
        </span>

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>

    </div>
  );
};
