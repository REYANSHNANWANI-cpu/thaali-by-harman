import React, { useState } from 'react';
import { Utensils, Sparkles, AlertCircle, Phone, MessageSquare, Check, Star } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'thalis' | 'sweets' | 'sides' | 'beverages'>('all');

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FFFDF9] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Maharashtrian Pure Veg Delights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Our Signature <span className="text-amber-700">Thali Menu</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Featuring our iconic Vegetarian Thali, seasonal Amrus Thali, Thali Fusion, pure Aamras, and handcrafted Ukdiche Modak.
          </p>
        </div>

        {/* Owner Pricing Confirmation Banner */}
        <div className="mb-8 max-w-4xl mx-auto bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            <strong className="text-[#7C2D12] block sm:inline font-bold">
              Menu & Pricing Note:
            </strong>{' '}
            Prices and special seasonal variations are displayed as placeholders below for preview. The restaurant owner will confirm exact names, daily accompaniments, and current pricing at the counter. For today's specials and rates, please call{' '}
            <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="font-bold text-[#7C2D12] underline hover:text-amber-700">
              {RESTAURANT_INFO.phone}
            </a>.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Specialties' },
            { id: 'thalis', label: 'Grand Thalis' },
            { id: 'sweets', label: 'Aamras & Sweets' },
            { id: 'sides', label: 'Breads & Sides' },
            { id: 'beverages', label: 'Drinks & Sol Kadhi' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#7C2D12] text-white shadow-md'
                  : 'bg-stone-100 hover:bg-amber-100 text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-amber-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dietary Pure Veg Icon */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm p-1 rounded-md shadow flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 border border-emerald-600 rounded-sm flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 pr-1">Pure Veg</span>
                </div>

                {/* Badge (Popular / Chef Special / Seasonal) */}
                {item.isPopular && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-stone-900 text-xs px-2.5 py-1 rounded-md font-bold shadow">
                    ★ Customer Favorite
                  </div>
                )}
                {item.isChefSpecial && (
                  <div className="absolute top-3 right-3 bg-[#7C2D12] text-white text-xs px-2.5 py-1 rounded-md font-bold shadow border border-amber-400">
                    Chef's Special
                  </div>
                )}
                {item.isSeasonal && !item.isPopular && (
                  <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs px-2.5 py-1 rounded-md font-bold shadow">
                    Seasonal Treat
                  </div>
                )}

                {/* Price Placeholder Badge */}
                <div className="absolute bottom-3 right-3 bg-[#7C2D12]/95 backdrop-blur-md text-amber-200 px-3 py-1 rounded-lg text-xs font-bold border border-amber-300/40 shadow-lg">
                  {item.pricePlaceholder}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div>
                  <div className="space-y-1 mb-2">
                    <h3 className="text-xl font-bold text-[#7C2D12] font-heading group-hover:text-amber-800 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 font-devanagari">
                      {item.marathiName}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Included Items Checklist */}
                  {item.itemsIncluded && item.itemsIncluded.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-stone-100">
                      <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                        Included in Feast:
                      </p>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-stone-700">
                        {item.itemsIncluded.map((inc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <a
                    href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Thaliwala%20by%20Harman,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#7C2D12] text-xs font-bold border border-amber-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire / Parcel</span>
                  </a>

                  <button
                    onClick={onOpenReservation}
                    className="py-2 px-3.5 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white text-xs font-bold transition-colors shadow"
                  >
                    Dine In
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center bg-amber-50 rounded-2xl p-6 border border-amber-200 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#7C2D12]">
            Craving something special for a family function or bulk parcel?
          </p>
          <p className="text-xs text-stone-600 mt-1 mb-3">
            Contact Harman and our kitchen team for advance party orders and customized Maharashtrian catering.
          </p>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7C2D12] text-white text-xs font-bold shadow hover:bg-[#9A3412] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Kitchen at {RESTAURANT_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
