import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Clock, 
  Send, 
  Sparkles, 
  CheckCircle,
  ExternalLink,
  Mail,
  User
} from 'lucide-react';
import { VENUE_INFO } from '../data/content';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Casamento',
    date: '',
    guestsCount: 'Até 60 pessoas',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor, preencha seu nome, telefone e mensagem para prosseguir.');
      return;
    }

    // Direct WhatsApp message formatting for instant response
    const msg = `Olá! Meu nome é ${formData.name}.\n` +
      `Gostaria de agendar uma visita / solicitar orçamento para um(a) ${formData.eventType}.\n` +
      `• Telefone: ${formData.phone}\n` +
      (formData.email ? `• E-mail: ${formData.email}\n` : '') +
      (formData.date ? `• Data pretendida: ${formData.date}\n` : '') +
      `• Convidados: ${formData.guestsCount}\n` +
      `• Mensagem: ${formData.message}`;

    const waUrl = `https://wa.me/${VENUE_INFO.whatsappPrimaryClean}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#F3C64F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento Personalizado</span>
          </div>
          <h2
            id="contato-heading"
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Fale Conosco e Agende Sua Visita
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Estamos prontos para tirar todas as suas dúvidas e reservar o dia perfeito para a sua celebração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Highlight Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Principal Card */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-[#D4AF37]/40 shadow-xl relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-[#D4AF37]/15 text-[#F3C64F] shrink-0">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    WhatsApp Principal
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {VENUE_INFO.whatsappPrimary}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Orçamentos rápidos, fotos em tempo real e verificação imediata de datas.
                  </p>
                  <a
                    href={VENUE_INFO.whatsappPrimaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#F3C64F] hover:underline"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Telefone 24h Card */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/10 shadow-lg group">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 text-gray-300 shrink-0 group-hover:text-[#F3C64F] transition-colors">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Telefone / Zap de Apoio
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4AF37]/20 text-[#F3C64F]">
                      Atendimento 24 horas
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {VENUE_INFO.phoneSupport24h}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Plantão para emergências e informações adicionais de locação a qualquer hora.
                  </p>
                  <a
                    href={VENUE_INFO.phoneSupport24hUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white"
                  >
                    <span>Chamar no Zap 24h</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Endereço & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Endereço */}
              <div className="p-5 rounded-2xl bg-[#121214] border border-white/5">
                <div className="flex items-center gap-2 text-[#F3C64F] mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold text-white">Endereço</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {VENUE_INFO.address}
                </p>
                <span className="text-[11px] text-gray-500 block mt-2">
                  Fácil acesso ao lado de Teresina - PI
                </span>
              </div>

              {/* Instagram */}
              <div className="p-5 rounded-2xl bg-[#121214] border border-white/5">
                <div className="flex items-center gap-2 text-[#E1306C] mb-2">
                  <Instagram className="w-5 h-5" />
                  <span className="text-xs uppercase font-bold text-white">Instagram</span>
                </div>
                <a
                  href={VENUE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#F3C64F] hover:underline block font-semibold"
                >
                  {VENUE_INFO.instagramHandle}
                </a>
                <span className="text-[11px] text-gray-500 block mt-2">
                  Fotos de eventos reais e novidades
                </span>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#121214]">
              <div className="p-3 bg-[#18181B] border-b border-white/5 flex items-center justify-between text-xs text-gray-300">
                <span className="font-semibold flex items-center gap-1.5 text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Localização da Chácara em Timon - MA
                </span>
                <a
                  href="https://maps.google.com/?q=Centro+Timon+MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline text-[11px] flex items-center gap-1"
                >
                  <span>Abrir no Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative w-full h-56">
                <iframe
                  src={VENUE_INFO.googleMapsEmbedUrl}
                  title="Mapa da Localização da Chácara Espaço Luz Eventos no Centro de Timon - MA"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#121214] border border-white/10 shadow-2xl relative">
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                Envie Sua Mensagem ou Pré-Agendamento
              </h3>
              <p className="text-sm text-gray-400 mb-8">
                Preencha os campos abaixo para receber atendimento detalhado em instantes.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Mensagem Enviada com Sucesso!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Seus dados foram formatados e abertos no WhatsApp oficial da Chácara Espaço Luz Eventos. Nossa equipe responderá em breve!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ex: Ana Clara Souza"
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                        <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        WhatsApp / Telefone *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(86) 99999-9999"
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* E-mail */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        E-mail
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seuemail@exemplo.com"
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Tipo de Evento */}
                    <div className="space-y-1.5">
                      <label htmlFor="eventType" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Tipo de Celebração
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Casamento">Casamento / Noivado</option>
                        <option value="Aniversário / 15 Anos">Aniversário / 15 Anos</option>
                        <option value="Confraternização">Confraternização Corporativa</option>
                        <option value="Festa em Família">Festa em Família / Churrasco</option>
                        <option value="Batizado / Infantil">Batizado / Infantil</option>
                        <option value="Outro Evento">Outro Formato</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Data pretendida */}
                    <div className="space-y-1.5">
                      <label htmlFor="date" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Data Desejada (Aproximada)
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      />
                    </div>

                    {/* Quantidade de convidados */}
                    <div className="space-y-1.5">
                      <label htmlFor="guestsCount" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                        Estimativa de Convidados
                      </label>
                      <select
                        id="guestsCount"
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                      >
                        <option value="Até 40 convidados">Até 40 convidados</option>
                        <option value="40 a 60 convidados">40 a 60 convidados</option>
                        <option value="60 a 80 convidados">60 a 80 convidados</option>
                        <option value="80 a 100 convidados">80 a 100 convidados (Capacidade máxima)</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">
                      Detalhes ou Dúvidas Adicionais *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre como sonha o seu evento (horário pretendido, necessidade de horas extras, etc)..."
                      className="w-full px-4 py-3 rounded-xl bg-[#18181B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full py-4 px-6 rounded-full font-bold text-black gold-gradient-bg hover:brightness-110 shadow-xl shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                    <span>Enviar e Abrir no WhatsApp Oficial</span>
                  </button>

                  <p className="text-center text-[11px] text-gray-500">
                    Ao enviar, você será direcionado ao WhatsApp da Chácara com sua mensagem pronta para agilizar seu atendimento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
