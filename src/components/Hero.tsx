import React from 'react';
import { Phone, Navigation, Star, Clock, CheckCircle2, Utensils, MessageSquare, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF5EB] pt-6 pb-16 lg:py-20 border-b border-amber-200/50">
      {/* Decorative Traditional Motifs Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-amber-200/30 to-orange-200/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-red-200/20 to-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines and Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-xs font-bold tracking-wide">
                <span className="w-3 h-3 border border-emerald-700 rounded-sm flex items-center justify-center bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                </span>
                100% Pure Vegetarian (शुद्ध शाकाहारी)
              </span>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-950 border border-amber-300 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span><strong>4.6</strong> ({RESTAURANT_INFO.googleRating.totalReviews.toLocaleString()}+ Google Reviews)</span>
              </div>
            </div>

            {/* Main Heading for Local SEO */}
            <div className="space-y-2">
              <p className="text-amber-800 font-bold tracking-widest text-xs uppercase font-devanagari">
                अस्सल महाराष्ट्रीयन थाळी भोजन • सांगली
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#7C2D12] tracking-tight leading-[1.15] font-heading">
                Thaliwala <span className="text-amber-700">by Harman</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-stone-700 max-w-2xl mx-auto lg:mx-0">
                Experience authentic, generous Maharashtrian thali meals in Sangli. Freshly prepared with traditional recipes, Sajuk Toop, authentic sweets, and heartfelt family hospitality.
              </p>
            </div>

            {/* Address snippet for local clarity */}
            <p className="text-xs sm:text-sm text-stone-600 flex items-center justify-center lg:justify-start gap-1.5">
              <span className="font-semibold text-stone-800">Location:</span> 
              <span>Below The Ashta People's Co-operative Bank, 100 Feet Road, Nishant Colony, Sangli, Maharashtra 416416</span>
            </p>

            {/* Primary Action Buttons (Call Now, Get Directions, Thali Menu, WhatsApp) */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C2D12] to-[#9A3412] hover:from-[#9A3412] hover:to-[#B45309] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                aria-label="Call restaurant now at +91 91756 46400"
              >
                <Phone className="w-5 h-5 text-amber-300 animate-bounce" />
                <span>Call Now: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-[#7C2D12] font-bold text-base border-2 border-[#7C2D12]/30 shadow-md hover:shadow-lg transition-all"
                aria-label="Get directions to Nishant Colony Sangli 416416"
              >
                <Navigation className="w-5 h-5 text-amber-600" />
                <span>Get Directions (Sangli)</span>
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 font-semibold text-sm border border-amber-300 transition-colors"
              >
                <Utensils className="w-4 h-4 text-amber-800" />
                <span>View Thali Menu</span>
              </a>
            </div>

            {/* Quick Feature Pillars */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-amber-200/60 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-700">Fresh & Flavorful Thalis</span>
              </div>
              <div className="flex items-center gap-2 text-left">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-700">Authentic Sweets & Aamras</span>
              </div>
              <div className="flex items-center gap-2 text-left col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-stone-700">2-Wheeler Parking</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-orange-400/20 to-red-500/20 blur-sm transform rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-amber-50">
                <img
                  src="/images/special-veg-thali.jpg"
                  alt="Authentic Maharashtrian Pure Vegetarian Thali at Thaliwala by Harman Sangli"
                  className="w-full h-[360px] sm:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Badge: Seasonal Aamras & Modak Special */}
                <div className="absolute top-3 left-3 bg-[#7C2D12]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold border border-amber-400/40 flex items-center gap-1.5 shadow-lg">
                  <span className="text-amber-300">✨</span>
                  <span>Special Vegetarian & Aamras Thalis</span>
                </div>

                {/* Bottom Highlight Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading text-lg font-bold text-amber-200">
                        Maharashtrian Special Feast
                      </p>
                      <p className="text-xs text-stone-200">
                        Varan Bhaat • Bhakri • Bhaaji • Koshimbir • Sweet
                      </p>
                    </div>
                    <span className="text-xs bg-amber-500 text-stone-900 font-bold px-2.5 py-1 rounded-md shadow">
                      Daily Fresh
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Floating Rating Card */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white rounded-xl p-3 shadow-xl border border-amber-200 flex items-center gap-3 animate-pulse-subtle">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                  ★
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-stone-900 text-sm">4.6 Google Rating</span>
                  </div>
                  <p className="text-[11px] text-stone-500">Over 1,231 happy diners in Sangli</p>
                </div>
              </div>

              {/* Floating Pure Veg Card */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm rounded-xl py-2 px-3 shadow-lg border border-emerald-200 flex items-center gap-2">
                <span className="w-4 h-4 border border-emerald-600 rounded-sm flex items-center justify-center bg-emerald-50">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold text-emerald-800">100% Shakahari</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
