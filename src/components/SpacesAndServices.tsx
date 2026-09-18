import React from 'react';
import { 
  ShieldCheck, 
  Waves, 
  Armchair, 
  Flame, 
  UtensilsCrossed, 
  Snowflake, 
  Tent, 
  Check, 
  HeartHandshake, 
  Sparkles,
  CalendarCheck,
  Eye
} from 'lucide-react';
import { VENUE_INFO, IMAGES, FALLBACK_URLS } from '../data/content';

export const SpacesAndServices: React.FC = () => {
  return (
    <section
      id="espacos"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#121214] relative border-y border-white/5"
      aria-labelledby="espacos-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#F3C64F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Infraestrutura Completa</span>
          </div>
          <h2
            id="espacos-heading"
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Locação Completa para o Seu Evento
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Ambiente 100% privativo com lazer, mobília inclusa e estrutura pronta para receber até 100 convidados.
          </p>
        </div>

        {/* Highlight Event Rental Card (Diferencial da Chácara) */}
        <article
          id="locacao-exclusiva-spotlight"
          className="mb-14 rounded-2xl overflow-hidden bg-gradient-to-r from-[#18181B] via-[#1C1A14] to-[#18181B] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 lg:p-10 relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs font-bold text-[#F3C64F]">
                <ShieldCheck className="w-4 h-4" />
                <span>Locação Exclusiva & 100% Privativa</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                Tudo Pronto Para a Sua Comemoração
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Na <strong className="text-white">Chácara Espaço Luz Eventos</strong>, você aluga o espaço completo com exclusividade total para o seu grupo. Sem complicação: você já conta com <span className="text-[#F3C64F] font-semibold">15 mesas e 60 cadeiras inclusas</span>, piscina ampla com cascata e iluminação, salão coberto, área gourmet com churrasqueira, cozinha com fogão e geladeira, e 1 freezer horizontal potente para gelar suas bebidas com máxima eficiência.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-gray-200 pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>100% Privativo: portão fechado só para você</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>15 mesas e 60 cadeiras já inclusas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>Piscina cristalina com cascata & solário</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>Churrasqueira com área gourmet ventilada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>1 Freezer horizontal + geladeira e fogão</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F] shrink-0" />
                  <span>Localização central em Timon-MA</span>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={VENUE_INFO.whatsappPrimaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-black gold-gradient-bg hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Consultar Disponibilidade de Data</span>
                </a>
                <a
                  href="#galeria"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white bg-[#18181B] border border-white/10 hover:border-[#D4AF37]/40 transition-all"
                >
                  <Eye className="w-4 h-4 text-[#F3C64F]" />
                  <span>Ver Todas as Fotos Reais</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-lg">
                <img
                  src={IMAGES.socialArea}
                  alt="Área social e salão coberto da Chácara Espaço Luz Eventos"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_URLS.maps2) {
                      target.src = FALLBACK_URLS.maps2;
                    }
                  }}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-[#F3C64F] bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-[#D4AF37]/30">
                    Espaço 100% Exclusivo para o seu Grupo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* General Venue Amenities Grid (MANDATORY ITEMS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 15 Mesas e 60 Cadeiras */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <Armchair className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              15 Mesas & 60 Cadeiras
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mobiliário resistente e confortável incluso em todas as locações. Espaço livre para você acomodar seus convidados sem custo extra de aluguel básico.
            </p>
          </article>

          {/* Piscina */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <Waves className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              Piscina Ampla com Iluminação
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Água cristalina, cascata relaxante e iluminação noturna para fotos deslumbrantes. Inclusa nos pacotes de finais de semana e feriados.
            </p>
          </article>

          {/* Churrasqueira */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              Churrasqueira Completa
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Área gourmet integrada e ventilada para o preparo de carnes nobres e confraternizações autênticas entre amigos e família.
            </p>
          </article>

          {/* Cozinha com fogão e geladeira */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              Cozinha com Fogão & Geladeira
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Estrutura de apoio higiênica e equipada para seu serviço de buffet, doces, salgados e alimentos servidos na temperatura perfeita.
            </p>
          </article>

          {/* 1 Freezer Horizontal */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              1 Freezer Horizontal
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Capacidade volumétrica ideal para gelar rapidamente cervejas, refrigerantes, águas e manter gelo durante todo o seu evento.
            </p>
          </article>

          {/* 1 Tenda Estruturada */}
          <article className="p-6 rounded-2xl bg-[#0B0B0C] border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-300 shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#F3C64F] mb-4 group-hover:scale-110 transition-transform">
              <Tent className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
              1 Tenda Estruturada de Apoio
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tenda robusta para sombra complementar, ideal para posicionamento de ilha gastronômica, músicos ou recepção dos convidados.
            </p>
          </article>
        </div>

        {/* Visual Gallery Preview Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0B0C] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[#D4AF37]/10 text-[#F3C64F]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Precisa de mesas extras ou serviços sob medida?</h4>
              <p className="text-xs text-gray-400">Flexibilidade para atender eventos de até 100 convidados no Centro de Timon.</p>
            </div>
          </div>
          <a
            href={VENUE_INFO.whatsappPrimaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-black gold-gradient-bg hover:brightness-110 transition-all"
          >
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
};
