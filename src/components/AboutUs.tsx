import React from 'react';
import { Star, MapPin, Heart, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { VENUE_INFO, TESTIMONIALS } from '../data/content';

export const AboutUs: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative Gold Ambient Radial */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#F3C64F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossa Essência & Tradição</span>
          </div>
          <h2
            id="about-heading"
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Sobre a Chácara Espaço Luz
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Um refúgio exclusivo de sofisticação e afeto no coração de Timon, pensado para eternizar suas maiores conquistas.
          </p>
        </div>

        {/* Two Column Layout: Story & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              <p>
                A <strong className="text-white font-semibold">Chácara Espaço Luz Eventos</strong> nasceu da paixão por reunir pessoas e criar memórias inesquecíveis. Localizada estrategicamente no <span className="text-[#F3C64F] font-medium">Centro de Timon - MA</span>, com fácil acesso tanto para moradores locais quanto para convidados vindos de Teresina, oferecemos uma atmosfera de sítio privativo com a conveniência urbana.
              </p>
              
              <blockquote className="border-l-2 border-[#D4AF37] pl-4 py-1 italic text-white/90 bg-[#121214]/60 rounded-r-lg my-6">
                “Nossa filosofia é simples e verdadeira: um lugar onde cada detalhe é pensado para a sua felicidade.”
              </blockquote>

              <p>
                Com anos de atuação no mercado e o reconhecimento de mais de <strong className="text-white font-semibold">{VENUE_INFO.reviewsHighlight}</strong>, nos consolidamos como a escolha primordial para casamentos intimistas, festas de 15 anos, aniversários, batizados e confraternizações corporativas de alto padrão.
              </p>
            </div>

            {/* Credibility & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F3C64F] shrink-0 mt-0.5">
                  <Star className="w-5 h-5 fill-[#F3C64F]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Mais de 100 Avaliações</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Reputação 5 estrelas construída com pontualidade, limpeza e zelo em cada reserva.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F3C64F] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Localização Central</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Endereço privilegiado no Centro de Timon - MA (65630-110), seguro e prático.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F3C64F] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Atendimento 24 Horas</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Suporte dedicado e canal de plantão para sanar dúvidas e organizar sua locação.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F3C64F] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">100% Exclusividade & Privacidade</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Chácara fechada inteiramente para o seu grupo, garantindo liberdade total, conforto e segurança.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={VENUE_INFO.whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3C64F] hover:text-[#D4AF37] group"
              >
                <span>Converse diretamente com nossos anfitriões no WhatsApp</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Image & Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-black/80 bg-[#121214] group">
              <img
                src="/images/chacara-area-social.jpg"
                alt="Área da piscina e convivência da Chácara Espaço Luz Eventos"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />

              {/* Floating Testimonial Snippet */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121214]/90 backdrop-blur-md border border-[#D4AF37]/20 shadow-lg">
                <div className="flex items-center gap-1 text-[#F3C64F] mb-1">
                  <Star className="w-3.5 h-3.5 fill-[#F3C64F]" />
                  <Star className="w-3.5 h-3.5 fill-[#F3C64F]" />
                  <Star className="w-3.5 h-3.5 fill-[#F3C64F]" />
                  <Star className="w-3.5 h-3.5 fill-[#F3C64F]" />
                  <Star className="w-3.5 h-3.5 fill-[#F3C64F]" />
                  <span className="text-[11px] text-gray-300 ml-1 font-semibold">5.0 de aprovação</span>
                </div>
                <p className="text-xs text-gray-200 italic line-clamp-2">
                  "{TESTIMONIALS[0].comment}"
                </p>
                <span className="text-[10px] text-[#D4AF37] font-semibold mt-1 block">
                  — {TESTIMONIALS[0].name} ({TESTIMONIALS[0].role})
                </span>
              </div>
            </div>

            {/* Subtle decorative gold badge in corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#F3C64F] to-[#A47E1B] p-[1px] hidden sm:block">
              <div className="w-full h-full rounded-full bg-[#0B0B0C] flex flex-col items-center justify-center text-center p-1">
                <span className="text-[10px] uppercase font-bold text-[#F3C64F] tracking-tighter">Timon</span>
                <span className="text-xs font-serif-luxury font-bold text-white">MA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
