import React from 'react';
import { MapPin, Clock, Phone, Navigation, Bike, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#FAF5EB] relative border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            <span>Visit Us in Sangli</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Location & <span className="text-amber-700">Operating Hours</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Conveniently situated on 100 Feet Road, Nishant Colony, Sangli. Welcoming families every day for lunch and dinner.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours & Highlights Card */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-amber-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#7C2D12] font-heading">
                    Restaurant Address
                  </h3>
                  <p className="text-sm font-semibold text-stone-800 mt-1">
                    Below The Ashta People's Co-operative Bank
                  </p>
                  <p className="text-sm text-stone-600">
                    100 Feet Road, Nishant Colony
                  </p>
                  <p className="text-sm font-bold text-amber-900">
                    Sangli, Maharashtra — 416416
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-600">
                <span className="font-semibold text-stone-800">Landmark:</span>
                <span>Below The Ashta People's Co-operative Bank on 100 Feet Road</span>
              </div>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white text-sm font-bold shadow transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>

            {/* Hours Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-md border border-amber-200 space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#7C2D12] font-heading">
                    Daily Service Timings
                  </h3>
                  <p className="text-xs text-stone-500">
                    Open 7 days a week (Monday through Sunday)
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="text-xs font-bold text-stone-800">Lunch Session</span>
                  </div>
                  <span className="text-xs font-bold text-[#7C2D12]">
                    11:00 AM – 3:00 PM
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7C2D12]"></span>
                    <span className="text-xs font-bold text-stone-800">Dinner Session</span>
                  </div>
                  <span className="text-xs font-bold text-[#7C2D12]">
                    7:00 PM – 10:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Parking & Waiting Amenities Box */}
            <div className="bg-amber-100/70 rounded-2xl p-5 border border-amber-300 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-200/80 flex items-center justify-center text-amber-900 flex-shrink-0">
                <Bike className="w-5 h-5" />
              </div>
              <div className="text-xs text-stone-800">
                <strong className="text-[#7C2D12] font-bold block">
                  Two-Wheeler Parking Available:
                </strong>
                Convenient parking space for bikes and scooters right outside the restaurant. Dedicated waiting chairs inside during peak hours.
              </div>
            </div>

          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-amber-300 h-full flex flex-col">
              
              {/* Map Header Bar */}
              <div className="bg-[#7C2D12] text-white p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-amber-200 font-heading">
                    Thaliwala by Harman • 100 Feet Road
                  </h4>
                  <p className="text-xs text-stone-200">
                    Nishant Colony, Sangli, Maharashtra 416416
                  </p>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-stone-900 text-xs font-bold shadow hover:bg-amber-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk</span>
                </a>
              </div>

              {/* Responsive Embedded Map */}
              <div className="flex-1 min-h-[380px] w-full relative">
                <iframe
                  title="Thaliwala by Harman Sangli Location Map"
                  src="https://maps.google.com/maps?q=Nishant+Colony+100+Feet+Road+Sangli+Maharashtra+416416&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Map Footer Bar */}
              <div className="p-3 bg-amber-50 border-t border-amber-200 flex flex-wrap items-center justify-between text-xs text-stone-700 gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Located Below The Ashta People's Co-operative Bank
                </span>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#7C2D12] hover:underline flex items-center gap-1"
                >
                  Start Turn-by-Turn GPS <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
