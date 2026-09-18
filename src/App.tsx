import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { SpacesAndServices } from './components/SpacesAndServices';
import { Gallery } from './components/Gallery';
import { PricingPackages } from './components/PricingPackages';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F3F4F6] font-sans-clean selection:bg-[#D4AF37] selection:text-black flex flex-col">
      {/* Header com Navegação Principal e CTA */}
      <Header />

      {/* Conteúdo Principal Semântico */}
      <main id="main-content" className="flex-grow">
        {/* Seção Hero: H1 Único da Página */}
        <Hero />

        {/* Seção Sobre Nós: História, Filosofia e Prova Social */}
        <AboutUs />

        {/* Seção Nossos Espaços e Serviços: Infraestrutura Completa e Diferenciais da Locação */}
        <SpacesAndServices />

        {/* Seção Galeria de Eventos: Fotos Oficiais, Instagram Posts e Reels */}
        <Gallery />

        {/* Seção Preços e Pacotes: Finais de Semana, Meio de Semana com 50% OFF e Simulador */}
        <PricingPackages />

        {/* Seção Contato: Formulário, Dados em Destaque e Google Maps */}
        <ContactSection />
      </main>

      {/* Rodapé Semântico com Copyright 2026, Menus e Mini Mapa */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
