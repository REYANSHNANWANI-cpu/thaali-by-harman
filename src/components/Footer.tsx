import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Utensils, Star, Heart, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5C1D07] text-stone-200 pt-16 pb-24 lg:pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Devanagari Greeting */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 font-bold shadow">
                <Utensils className="w-5 h-5 text-[#5C1D07]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Thaliwala <span className="text-amber-400">by Harman</span>
                </h3>
                <p className="text-[11px] text-amber-300 font-devanagari">
                  अस्सल महाराष्ट्रीयन शाकाहारी भोजन
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Sangli's beloved pure vegetarian destination for authentic Maharashtrian thalis, Aamras, Ukdiche Modak, and warm family hospitality.
            </p>

            {/* Pure Veg Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/30 border border-emerald-500/40 text-xs text-emerald-300 font-bold">
              <span className="w-3.5 h-3.5 border border-emerald-400 rounded-sm flex items-center justify-center bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              </span>
              100% Pure Vegetarian (शुद्ध शाकाहारी)
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home & Highlights</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">Our Story & Tradition</a></li>
              <li><a href="#menu" className="hover:text-amber-300 transition-colors">Thali Menu & Sweets</a></li>
              <li><a href="#why-us" className="hover:text-amber-300 transition-colors">Why Sangli Chooses Us</a></li>
              <li><a href="#thali-experience" className="hover:text-amber-300 transition-colors">Thali Component Guide</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Photo Gallery</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition-colors">Sangli Location & Timings</a></li>
            </ul>
          </div>

          {/* Col 3: Timings & Two-Wheeler Parking */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-heading">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div className="p-2.5 rounded-lg bg-black/25 border border-amber-500/20 space-y-1">
                <p className="font-bold text-amber-200">Daily Lunch Session</p>
                <p>11:00 AM – 3:00 PM</p>
              </div>
              <div className="p-2.5 rounded-lg bg-black/25 border border-amber-500/20 space-y-1">
                <p className="font-bold text-amber-200">Daily Dinner Session</p>
                <p>7:00 PM – 10:30 PM</p>
              </div>
              <p className="text-[11px] text-amber-300/80">
                • Two-wheeler parking available
              </p>
            </div>
          </div>

          {/* Col 4: Sangli Address & SEO Grounding */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 font-heading">
              Sangli Address
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <p className="font-bold text-white">
                Thaliwala by Harman Sangli
              </p>
              <p>
                Below The Ashta People's Co-operative Bank,<br />
                100 Feet Road, Nishant Colony,<br />
                Sangli, Maharashtra — 416416
              </p>
              
              <div className="pt-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="flex items-center gap-1.5 text-amber-300 font-bold hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-amber-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
          <p>
            © {new Date().getFullYear()} Thaliwala by Harman. All rights reserved. Nishant Colony, Sangli 416416.
          </p>
          <p className="flex items-center gap-1 text-stone-300">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for authentic Maharashtrian food lovers
          </p>
        </div>

      </div>
    </footer>
  );
};
