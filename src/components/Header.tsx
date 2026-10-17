import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu as MenuIcon, X, MessageSquare, Utensils, Star, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { getSangliRestaurantStatus, RestaurantStatus } from '../utils/timeHelper';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<RestaurantStatus>(getSangliRestaurantStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Update status every 30 seconds
    const interval = setInterval(() => {
      setStatus(getSangliRestaurantStatus());
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Thali Menu', href: '#menu' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Thali Experience', href: '#thali-experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar for Sangli Visitors */}
      <div className="bg-[#5C1D07] text-[#FEF3C7] text-xs py-2 px-4 border-b border-[#7C2D12]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block ring-2 ring-emerald-500/30"></span>
              100% Pure Vegetarian (शुद्ध शाकाहारी)
            </span>
            <span className="hidden sm:inline text-amber-300/50">•</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Nishant Colony, 100 Feet Road, Sangli 416416
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                }`}
              />
              <span className="font-semibold text-white">{status.statusMessage}</span>
            </span>
            <span className="hidden md:inline text-amber-300/50">•</span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Lunch: 11 AM - 3 PM | Dinner: 7 PM - 10:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md py-2.5 border-b border-amber-200/60'
            : 'bg-[#FFFDF9] py-3.5 border-b border-stone-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#7C2D12] to-[#B45309] p-0.5 shadow-md flex items-center justify-center text-white">
              <div className="w-full h-full rounded-full border border-amber-300/40 flex items-center justify-center bg-[#7C2D12]">
                <Utensils className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow">
                <div className="w-3.5 h-3.5 border border-emerald-600 rounded-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#7C2D12] font-heading">
                  Thaliwala
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  by Harman
                </span>
              </div>
              <p className="text-[11px] font-medium text-stone-500 tracking-wide uppercase">
                Sangli • Pure Veg Maharashtrian
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-700 hover:text-[#7C2D12] hover:bg-amber-50/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#7C2D12] font-semibold text-sm border border-amber-300 transition-colors shadow-sm"
              aria-label="Call Thaliwala by Harman"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span className="hidden xl:inline">{RESTAURANT_INFO.phone}</span>
              <span className="xl:hidden">Call Now</span>
            </a>

            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C2D12] to-[#B45309] hover:from-[#9A3412] hover:to-[#D97706] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Utensils className="w-4 h-4" />
              <span>Table / Parcel Inquiry</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-[#7C2D12] hover:bg-amber-50 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-50 border border-amber-300 text-[#7C2D12] text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-[#7C2D12]" />
                Call +91 91756 46400
              </a>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Thaliwala%20by%20Harman,%20I%20would%20like%20to%20inquire%20about%20your%20thali%20menu%20and%20timings.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                WhatsApp Us
              </a>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-stone-800 hover:text-[#7C2D12] hover:bg-amber-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C2D12] to-[#B45309] text-white font-semibold text-sm shadow text-center"
              >
                Table / Parcel Inquiry
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
