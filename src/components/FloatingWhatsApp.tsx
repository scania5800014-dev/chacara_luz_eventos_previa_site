import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { VENUE_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      aria-label="Atendimento rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {showTooltip && (
        <div className="p-3 bg-[#121214] border border-[#D4AF37]/40 shadow-2xl rounded-2xl max-w-xs text-xs text-gray-200 relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-gray-400 hover:text-white rounded-full"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-[#F3C64F] mb-0.5">
            Dúvidas sobre datas ou valores?
          </div>
          <p className="text-[11px] text-gray-300">
            Fale conosco agora mesmo no WhatsApp e garanta seu evento dos sonhos!
          </p>
        </div>
      )}

      <a
        href={VENUE_INFO.whatsappPrimaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-black/80 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Falar conosco no WhatsApp - Chácara Espaço Luz Eventos"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
        {/* Pulse radar ping */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />
      </a>
    </aside>
  );
};
