import React from 'react';
import { Heart, Sparkles, Utensils, ShieldCheck, MapPin, Users, Award } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FAF5EB] relative border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story / Interior & Tradition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-amber-50">
                <img
                  src="/images/restaurant-interior.jpg"
                  alt="Family dining atmosphere at Thaliwala by Harman Sangli"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-amber-50">
                  <img
                    src="/images/ukdiche-modak.jpg"
                    alt="Authentic Ukdiche Modak with Sajuk Toop"
                    className="w-full h-36 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-amber-50">
                  <img
                    src="/images/aamras-bowl.jpg"
                    alt="Pure Mango Aamras Bowl"
                    className="w-full h-36 object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-4 -right-3 sm:-right-6 bg-[#7C2D12] text-amber-100 p-3.5 rounded-xl shadow-xl border border-amber-400 text-center">
                <p className="text-xl font-extrabold font-heading text-amber-300">100%</p>
                <p className="text-[11px] font-semibold tracking-wide uppercase">Pure Veg</p>
                <p className="text-[9px] text-amber-200/80">शुद्ध शाकाहारी</p>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
                <Heart className="w-3.5 h-3.5 text-amber-700" />
                <span>Our Roots & Tradition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
                The Heritage of Sangli's <span className="text-amber-700">Maharashtrian Bhojan</span>
              </h2>
              <p className="text-sm font-semibold text-amber-800 font-devanagari">
                "अतिथी देवो भव — आपुलकीने वाढलेले, तृप्ती देणारे अस्सल महाराष्ट्रीयन भोजन"
              </p>
            </div>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Located on 100 Feet Road in Nishant Colony, Sangli, <strong>Thaliwala by Harman</strong> was created to honor the timeless art of the traditional Maharashtrian thali. We believe that true dining satisfaction comes from the balance of flavors: the aromatic sweetness of slow-cooked jaggery, the rustic earthy crunch of flame-roasted Jowar Bhakris, the pure comfort of Indrayani Varan Bhaat with Sajuk Toop, and the fiery zest of freshly hand-pounded Kolhapuri Thecha.
            </p>

            {/* Owner Story Placeholder Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 border-2 border-amber-300/80 space-y-3 relative">
              <div className="flex items-center gap-2 text-[#7C2D12] font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Founder's Journey & Vision:</span>
              </div>
              
              <div className="text-xs sm:text-sm text-stone-700 italic leading-relaxed border-l-2 border-amber-600 pl-3">
                <p>
                  <strong>[Owner's story: Owner to confirm background, culinary inspiration, and Harman's journey in creating Sangli's favorite pure vegetarian thali destination.]</strong>
                </p>
              </div>

              <p className="text-xs text-stone-600">
                Our kitchen remains committed to using freshly sourced vegetables, unadulterated spices, and time-honored cooking methods that bring families together over wholesome, nourishing meals.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-1" />
                <h4 className="font-bold text-xs text-stone-900">Purity & Hygiene</h4>
                <p className="text-[11px] text-stone-500">100% vegetarian kitchen with strict quality care.</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <Utensils className="w-5 h-5 text-amber-600 mb-1" />
                <h4 className="font-bold text-xs text-stone-900">Agrahane Vadhadne</h4>
                <p className="text-[11px] text-stone-500">Attentive staff who replenish your favorites with warmth.</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
                <Users className="w-5 h-5 text-[#7C2D12] mb-1" />
                <h4 className="font-bold text-xs text-stone-900">Family Comfort</h4>
                <p className="text-[11px] text-stone-500">Spacious hall & waiting chairs for busy weekend hours.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
