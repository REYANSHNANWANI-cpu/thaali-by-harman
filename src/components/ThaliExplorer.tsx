import React, { useState } from 'react';
import { Sparkles, Utensils, Info, Check, ArrowRight } from 'lucide-react';
import { THALI_COMPONENTS } from '../data/restaurantData';

export const ThaliExplorer: React.FC = () => {
  const [activeComponentId, setActiveComponentId] = useState<string>(THALI_COMPONENTS[0].id);

  const activeItem = THALI_COMPONENTS.find((item) => item.id === activeComponentId) || THALI_COMPONENTS[0];

  return (
    <section id="thali-experience" className="py-16 sm:py-20 bg-[#FAF5EB] relative border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>The Anatomy of a Maharashtrian Feast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Inside the Grand <span className="text-amber-700">Thali Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            A traditional Maharashtrian thali is not merely a meal — it is an artful harmony of six tastes (Shadrasa). Tap any component below to explore how we curate each vati.
          </p>
        </div>

        {/* Interactive Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Component Selector Buttons */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              Select a Thali Component:
            </p>

            <div className="space-y-2">
              {THALI_COMPONENTS.map((item) => {
                const isActive = item.id === activeComponentId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveComponentId(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#7C2D12] text-white border-[#7C2D12] shadow-md transform translate-x-1.5'
                        : 'bg-white hover:bg-amber-50 text-stone-800 border-amber-200/80 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-sm ${isActive ? 'text-amber-200' : 'text-stone-900'}`}>
                            {item.name}
                          </span>
                        </div>
                        <span className={`text-xs ${isActive ? 'text-amber-100/80 font-devanagari' : 'text-stone-500 font-devanagari'}`}>
                          {item.marathiName} • {item.category}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-stone-300'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Component Details Display Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-amber-300 relative overflow-hidden">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-100">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-3xl shadow-inner">
                    {activeItem.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                      {activeItem.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#7C2D12] font-heading mt-1">
                      {activeItem.name}
                    </h3>
                    <p className="text-sm font-semibold text-amber-800 font-devanagari">
                      {activeItem.marathiName}
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 text-xs font-bold text-stone-700">
                  Pure Veg Signature
                </div>
              </div>

              {/* Description Body */}
              <div className="py-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    Authentic Preparation & Significance:
                  </h4>
                  <p className="text-base text-stone-700 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                <div className="bg-[#FAF5EB] p-4 rounded-xl border border-amber-200/80 space-y-1">
                  <h4 className="text-xs font-bold text-[#7C2D12] uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-amber-700" />
                    Flavor Profile & Taste Experience:
                  </h4>
                  <p className="text-sm font-medium text-stone-800">
                    {activeItem.flavorNotes}
                  </p>
                </div>
              </div>

              {/* Traditional Serving Etiquette Note */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between text-xs text-stone-500 gap-2">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Cooked fresh daily with authentic Sangli-region spices
                </span>
                <span className="font-semibold text-amber-800">
                  Served with love & unlimited warm refills
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
