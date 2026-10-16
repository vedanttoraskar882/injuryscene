import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MarketPricingSection } from './components/MarketPricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalNote, setModalNote] = useState<string | undefined>(undefined);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleOpenPilotModal = (
    e?: React.MouseEvent<HTMLButtonElement>,
    note?: string
  ) => {
    if (e) {
      triggerRef.current = e.currentTarget;
    }
    setModalNote(note);
    setIsModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsModalOpen(false);
    setModalNote(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      {/* Sticky Header with Brand and Links */}
      <Navbar onRequestPilot={(e) => handleOpenPilotModal(e, 'Header Navigation CTA')} />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        {/* 1. Home Section */}
        <HeroSection onRequestPilot={(e) => handleOpenPilotModal(e, 'Hero Primary CTA')} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Platform Section */}
        <PlatformSection />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Market & Pricing Section */}
        <MarketPricingSection
          onRequestPilotWithNote={(e, note) => handleOpenPilotModal(e, note)}
        />

        {/* 6. FAQ Section */}
        <FaqSection />
      </main>

      {/* 7. Footer Section */}
      <Footer onRequestPilot={(e) => handleOpenPilotModal(e, 'Footer CTA')} />

      {/* Accessible Request a Pilot Modal */}
      <PilotModal
        isOpen={isModalOpen}
        onClose={handleClosePilotModal}
        triggerElementRef={triggerRef}
        initialNote={modalNote}
      />
    </div>
  );
}
