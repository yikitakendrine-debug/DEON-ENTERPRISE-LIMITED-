import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesThreeColumns } from './components/ServicesThreeColumns.tsx';
import { TargetMarketSection } from './components/TargetMarketSection.tsx';
import { SystemFlowSection } from './components/SystemFlowSection.tsx';
import { MachinesSection } from './components/MachinesSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { FullServicesGrid } from './components/FullServicesGrid.tsx';
import { QuoteCalculator } from './components/QuoteCalculator.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  const [quoteService, setQuoteService] = useState('LARGE FORMAT PRINTING');
  const [quoteItem, setQuoteItem] = useState('');

  const handleOpenQuote = (serviceName?: string, itemName?: string) => {
    if (serviceName) setQuoteService(serviceName);
    if (itemName) setQuoteItem(itemName);
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* About Us: Vision, Mission, Goals, Strategic Objectives, and The Phrase */}
        <AboutSection />

        {/* 3 Core Divisions (Image 2 exact match) */}
        <ServicesThreeColumns
          onSelectServiceForQuote={(service, item) => handleOpenQuote(service, item)}
        />

        {/* Target Market & Audience Breakdown */}
        <TargetMarketSection
          onSelectAudience={(audience) => handleOpenQuote(audience)}
        />

        {/* MVP System Flow (5-Step Production Pipeline) */}
        <SystemFlowSection onOpenQuote={() => handleOpenQuote()} />

        {/* Machines Fleet (Funsun, Konica Minolta, Full Office Setup) */}
        <MachinesSection onOpenQuote={() => handleOpenQuote()} />

        {/* Portfolio & 3D Signage (SMG PRIME SUPPLY & DEON Reception Wall) */}
        <PortfolioSection onOpenQuote={() => handleOpenQuote()} />

        {/* Complete Catalog of 8 Legitimate Services */}
        <FullServicesGrid onSelectService={(service) => handleOpenQuote(service)} />

        {/* Instant Quote Form / WhatsApp Generator */}
        <QuoteCalculator
          initialService={quoteService}
          initialItem={quoteItem}
        />

        {/* Nasser Road Kampala Location & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating WhatsApp and Call Action */}
      <FloatingWhatsApp />
    </div>
  );
}
