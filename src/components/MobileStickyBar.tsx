import React from 'react';
import { Phone, MessageSquare, Utensils, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileStickyBarProps {
  onOpenReservation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1.5">
        
        {/* Tap to Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-amber-50 active:bg-amber-100 text-[#7C2D12] border border-amber-200"
          aria-label="Tap to call restaurant"
        >
          <Phone className="w-5 h-5 text-[#7C2D12]" />
          <span className="text-[10px] font-bold mt-0.5">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Thaliwala%20by%20Harman,%20I%20would%20like%20to%20inquire%20about%20your%20thali%20meals.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-50 active:bg-emerald-100 text-emerald-800 border border-emerald-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Menu Jump */}
        <a
          href="#menu"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-stone-50 active:bg-stone-100 text-stone-800 border border-stone-200"
          aria-label="View Thali Menu"
        >
          <Utensils className="w-5 h-5 text-amber-700" />
          <span className="text-[10px] font-bold mt-0.5">Menu</span>
        </a>

        {/* Directions */}
        <a
          href={RESTAURANT_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-[#7C2D12] to-[#B45309] text-white shadow"
          aria-label="Get Google Maps Directions"
        >
          <Navigation className="w-5 h-5 text-amber-300" />
          <span className="text-[10px] font-bold mt-0.5">Directions</span>
        </a>

      </div>
    </div>
  );
};
