import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  Eye, 
  MapPin,
  CalendarCheck,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { GALLERY_MEDIA, VENUE_INFO } from '../data/content';
import { GalleryMediaItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'piscina' | 'estrutura' | 'eventos'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryMediaItem | null>(null);

  const filteredItems = activeTab === 'all' 
    ? GALLERY_MEDIA 
    : GALLERY_MEDIA.filter(item => item.category === activeTab);

  return (
    <section
      id="galeria"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0C] relative"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest text-[#F3C64F]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fotos Reais da Chácara</span>
          </div>
          <h2
            id="galeria-heading"
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Conheça Nossa Estrutura em Detalhes
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Fotos reais do espaço: piscina com cascata, salão coberto com 15 mesas e 60 cadeiras, e área gourmet com churrasqueira.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Todas as Fotos' },
            { id: 'piscina', label: 'Piscina & Cascata' },
            { id: 'estrutura', label: 'Salão & Mobiliário' },
            { id: 'eventos', label: 'Área para Eventos' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'gold-gradient-bg text-black shadow-md shadow-[#D4AF37]/25 font-bold'
                  : 'bg-[#18181B] text-gray-300 hover:text-white hover:bg-[#202024] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-white/10 hover:border-[#D4AF37]/50 shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Media Thumbnail Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={item.previewUrl || item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                      target.src = item.fallbackUrl;
                    } else if (!target.src.includes('/images/foto-maps-1.jpg')) {
                      target.src = '/images/foto-maps-1.jpg';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-medium text-gray-300 capitalize">
                  {item.category === 'piscina' ? 'Piscina & Lazer' : item.category === 'estrutura' ? 'Estrutura' : 'Eventos'}
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="p-3 rounded-full bg-[#0B0B0C]/85 text-[#F3C64F] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40 shadow-xl transition-all inline-flex items-center gap-2 text-xs font-semibold px-4">
                    <Maximize2 className="w-4 h-4" />
                    <span>Ampliar</span>
                  </span>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-1 bg-[#121214]">
                <h3 className="font-semibold text-sm text-white group-hover:text-[#F3C64F] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                {item.caption && (
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {item.caption}
                  </p>
                )}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#D4AF37] group-hover:underline inline-flex items-center gap-1">
                    <span>Ver em alta resolução</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Maps & Visit Callout */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[#121214] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#F3C64F] shrink-0 shadow-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Chácara Espaço Luz no Google Maps</h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Mais de 100 avaliações com nota 4.8★. Localizada no Centro de Timon-MA, com fácil acesso para você e seus convidados.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={VENUE_INFO.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#18181B] hover:bg-[#222226] border border-white/10 hover:border-[#D4AF37]/50 shadow-md transition-all inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F3C64F]" />
              <span>Ver no Google Maps</span>
            </a>
            <a
              href={VENUE_INFO.whatsappPrimaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-black gold-gradient-bg hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all inline-flex items-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Visita ao Espaço</span>
            </a>
          </div>
        </div>
      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {selectedItem && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121214] rounded-2xl border border-[#D4AF37]/30 overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/90 transition-all"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4">
              {/* Photo Display */}
              <div className="relative max-h-[70vh] flex items-center justify-center bg-black/80 rounded-xl overflow-hidden">
                <img
                  src={selectedItem.url || selectedItem.previewUrl}
                  alt={selectedItem.alt}
                  className="max-h-[68vh] w-auto object-contain rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (selectedItem.fallbackUrl && target.src !== selectedItem.fallbackUrl) {
                      target.src = selectedItem.fallbackUrl;
                    } else if (!target.src.includes('/images/foto-maps-1.jpg')) {
                      target.src = '/images/foto-maps-1.jpg';
                    }
                  }}
                />
              </div>

              {/* Modal Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
                <div>
                  <h3 className="font-serif-luxury text-xl font-bold text-white">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.caption && (
                    <p className="text-sm text-gray-300 mt-1">
                      {selectedItem.caption}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={VENUE_INFO.whatsappPrimaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-black gold-gradient-bg hover:brightness-110 shadow-md shadow-[#D4AF37]/25 transition-all inline-flex items-center gap-2"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Consultar Disponibilidade</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
