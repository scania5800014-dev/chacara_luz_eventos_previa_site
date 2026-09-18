import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Waves, 
  AlertCircle, 
  Plus, 
  Minus, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { PRICING_PLANS, VENUE_INFO } from '../data/content';

export const PricingPackages: React.FC = () => {
  // Interactive Simulator State
  const [selectedPeriod, setSelectedPeriod] = useState<'weekend' | 'weekday'>('weekend');
  const [selectedShift, setSelectedShift] = useState<'day' | 'night'>('day');
  const [extraHours, setExtraHours] = useState<number>(0);

  // Price Calculation Logic
  const getBasePrice = () => {
    if (selectedPeriod === 'weekend') {
      return selectedShift === 'day' ? 1300 : 1800;
    } else {
      return selectedShift === 'day' ? 650 : 900;
    }
  };

  const basePrice = getBasePrice();
  const extraHoursCost = extraHours * 200;
  const totalPrice = basePrice + extraHoursCost;

  // Custom WhatsApp URL based on simulated quote
  const simulatedWhatsAppUrl = `https://wa.me/${VENUE_INFO.whatsappPrimaryClean}?text=${encodeURIComponent(
    `Olá! Gostaria de reservar na Chácara Espaço Luz Eventos:\n` +
    `• Período: ${selectedPeriod === 'weekend' ? 'Final de Semana / Feriado (Com Piscina)' : 'Meio de Semana (50% OFF, Sem Piscina)'}\n` +
    `• Turno: ${selectedShift === 'day' ? 'Diurno' : 'Noturno'}\n` +
    `• Horas Extras: ${extraHours}h (R$ ${extraHoursCost},00)\n` +
    `• Valor Estimado: R$ ${totalPrice.toLocaleString('pt-BR')},00\n` +
    `Poderia verificar a disponibilidade da data?`
  )}`;

  return (
    <section
      id="precos"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#121214] relative border-y border-white/5"
      aria-labelledby="precos-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#F3C64F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Valores Transparentes & Acessíveis</span>
          </div>
          <h2
            id="precos-heading"
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Nossos Pacotes e Preços Flexíveis
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Escolha a opção ideal para o seu evento.
          </p>
        </div>

        {/* Pricing Category 1: Finais de Semana & Feriados (Com Piscina) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6 border-b border-[#D4AF37]/30 pb-3">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#F3C64F]">
                <Waves className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif-luxury">
                  Finais de Semana e Feriados (Com Piscina)
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Capacidade para até 100 pessoas • Inclui sexta-feira à noite, sábados, domingos e feriados
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/20 text-[#F3C64F] border border-[#D4AF37]/40">
              Piscina Inclusa
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRICING_PLANS.filter(p => p.period === 'weekend').map((plan) => (
              <article
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 bg-[#0B0B0C] border transition-all duration-300 relative flex flex-col justify-between ${
                  plan.popular
                    ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/30'
                    : 'border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-6 px-3.5 py-1 rounded-full text-xs font-bold gold-gradient-bg text-black shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                        {plan.name}
                      </h4>
                      <p className="text-sm text-[#F3C64F] font-medium flex items-center gap-1.5 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{plan.timeRange}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-[#121214] border border-white/5 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {plan.priceFormatted}
                    </span>
                    <span className="text-xs text-gray-400">/ período total</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <div className="p-0.5 rounded-full bg-[#D4AF37]/20 text-[#F3C64F] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappPrimaryClean}?text=${encodeURIComponent(
                    `Olá! Gostaria de reservar o ${plan.name} (${plan.timeRange}) no valor de ${plan.priceFormatted}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'gold-gradient-bg text-black hover:brightness-110 shadow-lg shadow-[#D4AF37]/20'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reservar Este Pacote</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Pricing Category 2: Meio de Semana (50% OFF, Sem Piscina) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-4 mb-6 border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Calendar className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif-luxury">
                  Pacotes Meio de Semana (50% de Abatimento)
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  De terça-feira qualquer horário à sexta-feira à tarde • Sem uso de piscina
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              50% OFF
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRICING_PLANS.filter(p => p.period === 'weekday').map((plan) => (
              <article
                key={plan.id}
                className="rounded-2xl p-6 sm:p-8 bg-[#0B0B0C] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-3">
                    <h4 className="text-xl font-bold text-white font-serif-luxury">
                      {plan.name}
                    </h4>
                    <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-1">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span>{plan.timeRange}</span>
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-[#121214] border border-white/5 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-white">
                      {plan.priceFormatted}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-emerald-400 font-semibold ml-auto">
                      50% de Desconto
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <div className="p-0.5 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappPrimaryClean}?text=${encodeURIComponent(
                    `Olá! Gostaria de reservar o pacote de meio de semana: ${plan.name} no valor com desconto de ${plan.priceFormatted}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center bg-white/10 hover:bg-emerald-600/30 hover:text-emerald-200 text-white border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reservar com 50% OFF</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Adicionais & Inclusos Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Hora Extra Policy */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#0B0B0C] border border-[#D4AF37]/30 flex flex-col justify-between">
            <div>
              <div className="p-3 w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#F3C64F] mb-4 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                Horas Adicionais
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Quer estender a celebração com seus amigos e familiares?
              </p>
              <div className="text-2xl font-bold text-[#F3C64F] mb-2">
                R$ 200,00 <span className="text-xs text-gray-400 font-normal">/ por hora extra</span>
              </div>
              <p className="text-xs text-gray-400">
                Pode ser combinada previamente ou no dia do evento mediante disponibilidade de agenda.
              </p>
            </div>
          </div>

          {/* Checklist de Itens Inclusos */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B0B0C] to-[#18181B] border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-2">
                Itens Inclusos em Todos os Nossos Pacotes
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Você não precisa pagar aluguel separado dos itens essenciais de estrutura:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>15 Mesas</span>
                </div>
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>60 Cadeiras</span>
                </div>
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>1 Freezer horizontal</span>
                </div>
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>1 Tenda de apoio</span>
                </div>
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>Churrasqueira</span>
                </div>
                <div className="p-3 rounded-lg bg-[#121214] border border-white/5 text-xs text-gray-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#F3C64F]" />
                  <span>Cozinha (fogão + geladeira)</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#D4AF37] font-medium mt-4">
              * A piscina completa com cascata e iluminação está inclusa nos pacotes de finais de semana e feriados.
            </p>
          </div>
        </div>

        {/* Interactive Instant Budget Calculator */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#0B0B0C] border border-[#D4AF37]/40 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 text-[#F3C64F]">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                Simulador Rápido de Orçamento
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Personalize seu período e adicione horas extras para ver o valor final instantaneamente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Step 1: Period */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                1. Tipo de Dia
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPeriod('weekend')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedPeriod === 'weekend'
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                      : 'bg-[#121214] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Fim de Semana
                  <span className="block text-[10px] text-[#F3C64F] font-normal">Com piscina</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPeriod('weekday')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedPeriod === 'weekday'
                      ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-md'
                      : 'bg-[#121214] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Meio de Semana
                  <span className="block text-[10px] text-emerald-400 font-normal">50% OFF</span>
                </button>
              </div>
            </div>

            {/* Step 2: Shift */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                2. Turno do Evento
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedShift('day')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedShift === 'day'
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                      : 'bg-[#121214] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Dia (07:30 - 17:30)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedShift('night')}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    selectedShift === 'night'
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                      : 'bg-[#121214] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Noite (18:30 - 02:00)
                </button>
              </div>
            </div>

            {/* Step 3: Extra Hours */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                3. Horas Extras (+R$ 200/h)
              </label>
              <div className="flex items-center justify-between p-2 rounded-xl bg-[#121214] border border-white/10">
                <button
                  type="button"
                  onClick={() => setExtraHours(Math.max(0, extraHours - 1))}
                  className="w-10 h-10 rounded-lg bg-[#18181B] text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Diminuir uma hora extra"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="text-center">
                  <span className="text-lg font-bold text-white">{extraHours}h</span>
                  <span className="block text-[10px] text-gray-400">
                    {extraHours > 0 ? `+ R$ ${extraHoursCost},00` : 'Nenhuma hora extra'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setExtraHours(Math.min(8, extraHours + 1))}
                  className="w-10 h-10 rounded-lg bg-[#18181B] text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="Aumentar uma hora extra"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Output and Direct Booking */}
          <div className="p-6 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Investimento Total Calculado
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-emerald-400">R$ {totalPrice.toLocaleString('pt-BR')},00</span>
                <span className="text-xs text-gray-400 font-normal">
                  ({selectedPeriod === 'weekend' ? 'Com piscina' : 'Sem piscina'} • {selectedShift === 'day' ? 'Dia' : 'Noite'})
                </span>
              </div>
            </div>

            <a
              href={simulatedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-black gold-gradient-bg hover:brightness-110 shadow-lg shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-black fill-current" />
              <span>Reservar no WhatsApp com este Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
