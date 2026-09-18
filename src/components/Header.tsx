import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Calendar, Sparkles } from 'lucide-react';
import { NAV_ITEMS, VENUE_INFO } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0B0B0C]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#inicio"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg p-1"
            aria-label="Chácara Espaço Luz Eventos - Página Inicial"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#F3C64F] via-[#D4AF37] to-[#8C6B10] p-[1.5px] shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#0B0B0C] flex items-center justify-center">
                <span className="font-serif-luxury text-sm sm:text-base font-bold text-[#F3C64F]">
                  CLE
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-lg lg:text-xl font-bold tracking-wide text-white group-hover:text-[#F3C64F] transition-colors">
                Chácara Espaço Luz
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Eventos & Celebrações
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#121214]/70 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-md"
            aria-label="Navegação Principal"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                id={`nav-link-${item.href.replace('#', '')}`}
                className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-[#F3C64F] hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${VENUE_INFO.phoneSupport24hClean}`}
              id="header-phone-quick"
              className="text-xs text-gray-300 hover:text-[#F3C64F] flex items-center gap-1.5 px-2 py-1 rounded-md transition-colors"
              title="Atendimento 24 horas"
              aria-label="Ligar para Atendimento 24 horas"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xl:inline">24h:</span> {VENUE_INFO.phoneSupport24h}
            </a>

            <a
              href={VENUE_INFO.whatsappPrimaryUrl}
              id="header-cta-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-black gold-gradient-bg hover:brightness-110 shadow-md shadow-[#D4AF37]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Agende seu Evento pelo WhatsApp"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Agende seu Evento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={VENUE_INFO.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black bg-[#D4AF37] rounded-full hover:brightness-110 active:scale-95 transition-all"
              aria-label="WhatsApp Chácara Espaço Luz"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F3C64F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#0B0B0C]/98 border-b border-[#D4AF37]/20 px-6 pt-4 pb-8 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col space-y-1" aria-label="Navegação Mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-medium text-gray-200 hover:text-[#F3C64F] hover:bg-[#18181B] rounded-xl transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#D4AF37]/40 text-xs font-serif-luxury">CLE</span>
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <div className="text-xs text-gray-400 px-4 flex items-center justify-between">
              <span>Atendimento 24 horas:</span>
              <a
                href={VENUE_INFO.phoneSupport24hUrl}
                className="text-[#F3C64F] font-semibold"
              >
                {VENUE_INFO.phoneSupport24h}
              </a>
            </div>
            <a
              href={VENUE_INFO.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-black gold-gradient-bg shadow-lg shadow-[#D4AF37]/25"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale Conosco no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
