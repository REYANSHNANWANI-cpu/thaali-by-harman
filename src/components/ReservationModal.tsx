import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageSquare, Send, Calendar, Users, Clock, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4',
    date: '',
    session: 'lunch',
    type: 'dine_in',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Table / Parcel Booking Inquiry - Thaliwala by Harman Sangli*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Guest')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Type:* ${encodeURIComponent(formData.type === 'dine_in' ? 'Dine In Feast' : 'Takeaway Parcel')}%0A` +
      `*Guests/Portions:* ${encodeURIComponent(formData.guests)}%0A` +
      `*Date:* ${encodeURIComponent(formData.date || 'Today')}%0A` +
      `*Session:* ${encodeURIComponent(formData.session === 'lunch' ? 'Lunch (11:00 AM - 3:00 PM)' : 'Dinner (7:00 PM - 10:30 PM)')}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl border-2 border-amber-300 overflow-hidden animate-scaleIn">
        
        {/* Header Bar */}
        <div className="bg-[#7C2D12] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Utensils className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-bold text-lg font-heading text-amber-200">
                Table & Parcel Inquiry
              </h3>
              <p className="text-xs text-stone-200">
                Thaliwala by Harman • Nishant Colony, Sangli
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900 font-heading">
                Inquiry Logged Successfully!
              </h4>
              <p className="text-xs text-stone-600">
                To confirm immediately with Harman or check current table waiting status, tap below to dispatch via WhatsApp or call directly.
              </p>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirm on WhatsApp</span>
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-2.5 rounded-xl bg-amber-100 text-[#7C2D12] text-xs font-bold border border-amber-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'dine_in' })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                    formData.type === 'dine_in'
                      ? 'bg-[#7C2D12] text-white border-[#7C2D12]'
                      : 'bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  Dine-In Table
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'takeaway' })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border text-center transition-all ${
                    formData.type === 'takeaway'
                      ? 'bg-[#7C2D12] text-white border-[#7C2D12]'
                      : 'bg-stone-50 text-stone-700 border-stone-200'
                  }`}
                >
                  Takeaway Parcel
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 91756 46400"
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Guests / Portions
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white"
                  >
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8+">8+ Guests (Family)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Meal Session
                  </label>
                  <select
                    value={formData.session}
                    onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-stone-300 text-xs bg-white"
                  >
                    <option value="lunch">Lunch (11am - 3pm)</option>
                    <option value="dinner">Dinner (7pm - 10:30pm)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Special Notes / Preferred Sweets
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Vegetarian Thali + 2 Aamras bowls"
                  className="w-full px-3 py-1.5 rounded-xl border border-stone-300 text-xs"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#7C2D12] text-white font-bold text-xs shadow hover:bg-[#9A3412]"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
