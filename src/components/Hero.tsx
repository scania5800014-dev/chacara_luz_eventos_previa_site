import React from 'react';
import { Star, MessageSquare, CalendarCheck, MapPin, ShieldCheck, Waves, Armchair } from 'lucide-react';
import { VENUE_INFO } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Apresentação Principal da Chácara Espaço Luz Eventos"
    >
      {/* Background Image with Depth & Dark Luxury Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/foto-maps-1.jpg"
          alt="Piscina e área de lazer da Chácara Espaço Luz Eventos em Timon-MA"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.05]"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Luxury Overlays for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0B0B0C]/40 to-[#0B0B0C]/90" />
        {/* Warm Ambient Gold Glow Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10 space-y-6 sm:space-y-8">
        {/* Social Proof Badge: +100 Avaliações Positivas */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18181B]/80 border border-[#D4AF37]/40 backdrop-blur-md shadow-lg shadow-black/40 animate-fade-in">
          <div className="flex items-center gap-1 text-[#F3C64F]">
            <Star className="w-4 h-4 fill-[#F3C64F]" />
            <Star className="w-4 h-4 fill-[#F3C64F]" />
            <Star className="w-4 h-4 fill-[#F3C64F]" />
            <Star className="w-4 h-4 fill-[#F3C64F]" />
            <Star className="w-4 h-4 fill-[#F3C64F]" />
          </div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
            {VENUE_INFO.reviewsHighlight}
          </span>
          <span className="text-xs text-[#D4AF37] font-medium hidden sm:inline">
            • Nota {VENUE_INFO.ratingScore}/5 no Google
          </span>
        </div>

        {/* H1 Principal MANDATÓRIO */}
        <h1
          id="hero-main-title"
          className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] max-w-4xl mx-auto drop-shadow-md"
        >
          Chácara Espaço Luz Eventos:{' '}
          <span className="gold-gradient-text block sm:inline">
            O Cenário Perfeito para Sua Celebração Memorável
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
          {VENUE_INFO.subtitle}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={VENUE_INFO.whatsappPrimaryUrl}
            id="hero-cta-orcamento"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-black gold-gradient-bg hover:brightness-110 shadow-xl shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Solicitar orçamento pelo WhatsApp com a Chácara Espaço Luz"
          >
            <MessageSquare className="w-5 h-5 text-black fill-current" />
            <span>Solicite um Orçamento</span>
          </a>

          <a
            href="https://wa.me/5586994321834?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20Ch%C3%A1cara%20Espa%C3%A7o%20Luz%20pessoalmente."
            id="hero-cta-visita"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#18181B]/90 hover:bg-[#202024] border border-[#D4AF37]/50 hover:border-[#D4AF37] backdrop-blur-md shadow-lg shadow-black/50 transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Agendar visita presencial à Chácara Espaço Luz"
          >
            <CalendarCheck className="w-5 h-5 text-[#F3C64F]" />
            <span>Agende sua Visita</span>
          </a>
        </div>

        {/* Highlight Feature Badges */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-3 rounded-xl bg-[#121214]/60 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
            <Waves className="w-4 h-4 text-[#F3C64F] shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">Piscina Cristalina</span>
          </div>

          <div className="p-3 rounded-xl bg-[#121214]/60 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
            <Armchair className="w-4 h-4 text-[#F3C64F] shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">15 Mesas & 60 Cadeiras</span>
          </div>

          <div className="p-3 rounded-xl bg-[#121214]/60 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#F3C64F] shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">Até 100 Pessoas</span>
          </div>

          <div className="p-3 rounded-xl bg-[#121214]/60 border border-white/5 backdrop-blur-sm flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#F3C64F] shrink-0" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">Centro, Timon - MA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
