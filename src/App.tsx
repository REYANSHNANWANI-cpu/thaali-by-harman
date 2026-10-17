import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveStatusBanner } from './components/LiveStatusBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ThaliExplorer } from './components/ThaliExplorer';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-[#7C2D12]">
      {/* Sticky Header with Live Status & Navigation */}
      <Header onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Live Status and Session Timing Strip */}
        <LiveStatusBanner />

        {/* Why Sangli Chooses Us (5 Core Customer Themes) */}
        <WhyChooseUs />

        {/* Interactive Maharashtrian Thali Plate Explorer */}
        <ThaliExplorer />

        {/* Thali Menu & Special Sweets with [Price] Placeholders */}
        <MenuSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* About Thaliwala by Harman & [Owner's Story] */}
        <AboutSection />

        {/* Photo Gallery & "Photos Coming Soon" Grid */}
        <GallerySection />

        {/* Location (Nishant Colony, 100 Feet Road, Sangli), Parking & Hours */}
        <LocationHours />

        {/* Direct Contact, WhatsApp & Inquiry Form */}
        <ContactSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Local SEO & Grounding Footer */}
      <Footer />

      {/* Mobile Quick Action Sticky Bar */}
      <MobileStickyBar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Table & Parcel Inquiry Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
