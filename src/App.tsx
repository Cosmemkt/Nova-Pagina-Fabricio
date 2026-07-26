import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SituationsSection } from './components/SituationsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AttorneySection } from './components/AttorneySection';
import { FormSection } from './components/FormSection';
import { FaqSection } from './components/FaqSection';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Header / Navbar */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero / Primeira Dobra */}
        <Hero />

        {/* 2. Identificação de Situações do Cliente */}
        <SituationsSection />

        {/* 3. Blocos Principais de Serviços (Pensão, Guarda, Alimentos, Inventário) */}
        <ServicesSection />

        {/* 4. Como Funciona o Atendimento */}
        <ProcessSection />

        {/* 5. Autoridade e Sobre o Advogado */}
        <AttorneySection />

        {/* 6. Seção de Conversão e Formulário */}
        <FormSection />

        {/* 7. Dúvidas Frequentes (FAQ) */}
        <FaqSection />
      </main>

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
