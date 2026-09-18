import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Clock, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import { NAV_ITEMS, VENUE_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#070708] border-t border-[#D4AF37]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-gray-400 text-sm"
      aria-label="Rodapé da Chácara Espaço Luz Eventos"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F3C64F] to-[#8C6B10] p-[1.5px] shadow-md shadow-[#D4AF37]/20">
                <div className="w-full h-full rounded-full bg-[#0B0B0C] flex items-center justify-center">
                  <span className="font-serif-luxury text-sm font-bold text-[#F3C64F]">
                    CLE
                  </span>
                </div>
              </div>
              <div>
                <span className="font-serif-luxury text-lg font-bold text-white block">
                  Chácara Espaço Luz
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] block font-semibold">
                  Eventos & Celebrações
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-light">
              O local ideal para festas, aniversários, confraternizações e celebrações em Timon-MA. Ambiente 100% privativo, piscina cristalina com cascata, salão coberto, 15 mesas e 60 cadeiras já inclusas e mais de 100 avaliações de excelência.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={VENUE_INFO.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181B] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-[#F3C64F] hover:scale-105 transition-all"
                aria-label="WhatsApp Chácara Espaço Luz"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={VENUE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181B] border border-white/10 hover:border-[#E1306C] flex items-center justify-center text-gray-300 hover:text-[#E1306C] hover:scale-105 transition-all"
                aria-label="Instagram @chacaraespacoluz"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={VENUE_INFO.phoneSupport24hUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#18181B] border border-white/10 hover:border-[#D4AF37] flex items-center justify-center text-gray-300 hover:text-[#F3C64F] hover:scale-105 transition-all"
                aria-label="Telefone 24 horas"
              >
                <Clock className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2" aria-label="Links do Rodapé">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs text-gray-400 hover:text-[#F3C64F] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contatos Oficiais
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#F3C64F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block">WhatsApp Principal:</span>
                  <a
                    href={VENUE_INFO.whatsappPrimaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3C64F] font-medium"
                  >
                    {VENUE_INFO.whatsappPrimary}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#F3C64F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block">Plantão 24 Horas:</span>
                  <a
                    href={VENUE_INFO.phoneSupport24hUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3C64F] font-medium"
                  >
                    {VENUE_INFO.phoneSupport24h}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <Instagram className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block">Instagram:</span>
                  <a
                    href={VENUE_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#F3C64F] font-medium"
                  >
                    {VENUE_INFO.instagramHandle}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F3C64F] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-400 block">Endereço:</span>
                  <span className="text-white">{VENUE_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Mini Google Maps Col (MANDATÓRIO) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center justify-between">
              <span>Localização</span>
              <a
                href="https://maps.google.com/?q=Centro+Timon+MA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#D4AF37] lowercase hover:underline flex items-center gap-1 font-normal"
              >
                <span>ampliar</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </h4>
            <div className="relative w-full h-32 rounded-xl overflow-hidden border border-white/10 shadow-inner">
              <iframe
                src={VENUE_INFO.googleMapsEmbedUrl}
                title="Mini mapa de localização da Chácara Espaço Luz em Timon"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <span className="text-[10px] text-gray-500 block">
              Centro de Timon - MA • Próximo às pontes para Teresina
            </span>
          </div>
        </div>

        {/* Bottom Copyright Strip (MANDATÓRIO) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p id="copyright-text" className="text-center sm:text-left">
            © 2026 Chácara Espaço Luz Eventos. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-1 text-[11px] text-gray-400">
            <span>Onde cada detalhe é pensado para a sua felicidade</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]/50" />
          </div>
        </div>
      </div>
    </footer>
  );
};
