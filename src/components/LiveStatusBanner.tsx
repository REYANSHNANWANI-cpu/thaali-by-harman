import React, { useState, useEffect } from 'react';
import { Clock, Phone, MapPin, Sparkles, Navigation, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { getSangliRestaurantStatus, RestaurantStatus } from '../utils/timeHelper';

export const LiveStatusBanner: React.FC = () => {
  const [status, setStatus] = useState<RestaurantStatus>(getSangliRestaurantStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getSangliRestaurantStatus());
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#7C2D12] via-[#9A3412] to-[#7C2D12] text-white py-4 px-4 shadow-inner border-y border-amber-500/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Timing & Status Pill */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
          <div className="flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-full border border-amber-400/30">
            <span
              className={`w-3 h-3 rounded-full ${
                status.isOpen
                  ? 'bg-emerald-400 animate-ping'
                  : 'bg-amber-400'
              }`}
            />
            <span className="font-bold text-sm tracking-wide text-amber-200">
              {status.statusMessage}
            </span>
          </div>

          <div className="text-xs sm:text-sm text-amber-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>{status.subMessage}</span>
          </div>
        </div>

        {/* Right Side: Quick Action info */}
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          <span className="hidden lg:inline text-amber-200/70">
            Every day: Lunch 11am-3pm • Dinner 7pm-10:30pm
          </span>

          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold transition-colors shadow"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call for Table / Parcel</span>
          </a>
        </div>

      </div>
    </div>
  );
};
