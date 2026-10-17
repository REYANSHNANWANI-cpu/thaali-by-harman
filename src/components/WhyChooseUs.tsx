import React from 'react';
import { UtensilsCrossed, Sparkles, HeartHandshake, Clock, Users, Check, Star } from 'lucide-react';
import { WHY_CHOOSE_US_THEMES } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-7 h-7 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-amber-600" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-amber-600" />;
      case 'Users':
        return <Users className="w-7 h-7 text-amber-600" />;
      default:
        return <Star className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FFFDF9] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
            <span>Sangli's Favorite Thali Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Why Sangli Loves <span className="text-amber-700">Thaliwala by Harman</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Rooted in authentic Maharashtrian hospitality, every meal at our 100 Feet Road restaurant is crafted to bring warmth, generosity, and genuine satisfaction to your family.
          </p>
        </div>

        {/* 5 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {WHY_CHOOSE_US_THEMES.map((theme, index) => (
            <div
              key={theme.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative bg-gradient-to-b from-[#FAF5EB] to-white ${
                index === 0
                  ? 'border-amber-300 md:col-span-2 lg:col-span-1 shadow-md'
                  : 'border-stone-200/90 shadow-sm'
              }`}
            >
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-100/90 border border-amber-300 flex items-center justify-center shadow-inner">
                  {getIcon(theme.iconName)}
                </div>
                <span className="text-3xl font-extrabold text-amber-200/80 font-heading">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Marathi Tagline */}
              <div className="space-y-1 mb-3">
                <h3 className="text-xl font-bold text-[#7C2D12] font-heading">
                  {theme.title}
                </h3>
                <p className="text-xs font-semibold text-amber-800 font-devanagari">
                  {theme.marathiTitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                {theme.description}
              </p>

              {/* Highlight Tag */}
              <div className="pt-3 border-t border-amber-200/60 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-semibold text-stone-800">
                  {theme.highlight}
                </span>
              </div>
            </div>
          ))}

          {/* Bonus Highlight Card: Google Review Summary */}
          <div className="rounded-2xl p-6 sm:p-7 border-2 border-dashed border-amber-300 bg-amber-50/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#7C2D12] font-heading">
                Rated 4.6 Stars on Google
              </h3>
              <p className="text-sm text-stone-600">
                Over <strong>1,231 verified diners</strong> have shared their appreciation for our authentic Maharashtrian dishes, polite staff, quick service, and clean family seating in Nishant Colony, Sangli.
              </p>
            </div>

            <div className="pt-4 border-t border-amber-200 flex items-center justify-between">
              <span className="text-xs font-bold text-stone-700">100 Feet Road, Sangli</span>
              <span className="text-xs bg-[#7C2D12] text-white px-2.5 py-1 rounded font-medium">
                Pure Veg
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
