import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Clock, Calendar, Users, Utensils, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '4',
    date: '',
    timeSlot: 'lunch',
    type: 'table_reservation', // table_reservation | parcel_pickup | party_inquiry
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `*New Inquiry for Thaliwala by Harman (Sangli)*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Guest')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'Not provided')}%0A` +
      `*Type:* ${encodeURIComponent(formData.type)}%0A` +
      `*Guests:* ${encodeURIComponent(formData.guests)}%0A` +
      `*Date:* ${encodeURIComponent(formData.date || 'Today')}%0A` +
      `*Session:* ${encodeURIComponent(formData.timeSlot === 'lunch' ? 'Lunch (11am-3pm)' : 'Dinner (7pm-10:30pm)')}%0A` +
      `*Notes:* ${encodeURIComponent(formData.notes || 'None')}`;

    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FFFDF9] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#7C2D12] font-heading">
            Get in Touch & <span className="text-amber-700">Inquire</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            Planning a family lunch, celebratory dinner, or bulk parcel order? Call us directly, chat on WhatsApp, or send an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Quick Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone CTA Card */}
            <div className="bg-gradient-to-br from-[#7C2D12] to-[#9A3412] text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-amber-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-amber-200">
                    Direct Phone Line
                  </p>
                  <h3 className="text-2xl font-bold font-heading">
                    {RESTAURANT_INFO.phone}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Call our restaurant desk for immediate table availability, group seating, or quick parcel orders.
              </p>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-sm shadow transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Tap to Call Restaurant Now</span>
              </a>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="bg-emerald-900 text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 border border-emerald-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center text-emerald-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-emerald-200">
                    WhatsApp Desk
                  </p>
                  <h3 className="text-xl font-bold">
                    {RESTAURANT_INFO.whatsappDisplay}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100">
                Send us a direct WhatsApp message to check today's special sweet, menu rates, or reserve for family gatherings.
              </p>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=Hello%20Thaliwala%20by%20Harman,%20I%20would%20like%20to%20inquire%20about%20your%20thali%20meals.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm shadow transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Timings Quick Summary */}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-700 space-y-1">
              <div className="font-bold text-[#7C2D12] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Operating Timings</span>
              </div>
              <p>Lunch: 11:00 AM to 3:00 PM | Dinner: 7:00 PM to 10:30 PM</p>
              <p className="text-stone-500">Every day of the week (Mon - Sun)</p>
            </div>

          </div>

          {/* Right Column: Interactive Table / Parcel Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-stone-200">
              
              <div className="space-y-1 mb-6">
                <h3 className="text-2xl font-bold text-[#7C2D12] font-heading">
                  Table & Parcel Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-stone-500">
                  Fill in your details below and send directly to our team via WhatsApp or submission.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-900 font-heading">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-sm text-emerald-800 mt-1">
                      Your inquiry has been received. Our team will verify table / parcel arrangements shortly.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleSendWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp for Instant Response</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-white border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                    >
                      New Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Inquiry Type Radios */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Inquiry Type:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'table_reservation', label: 'Dine-In Table' },
                        { id: 'parcel_pickup', label: 'Takeaway Parcel' },
                        { id: 'party_inquiry', label: 'Bulk / Party' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: t.id })}
                          className={`py-2 px-2 text-xs font-bold rounded-xl border text-center transition-all ${
                            formData.type === t.id
                              ? 'bg-[#7C2D12] text-white border-[#7C2D12]'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-amber-50'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Guests and Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Guests / Portions
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                      >
                        <option value="1-2">1 - 2 Guests</option>
                        <option value="3-4">3 - 4 Guests</option>
                        <option value="5-8">5 - 8 Guests</option>
                        <option value="9-15">9 - 15 Guests (Family Gathering)</option>
                        <option value="15+">15+ Guests (Party Feast)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Session Timing
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                      >
                        <option value="lunch">Lunch (11:00 AM - 3:00 PM)</option>
                        <option value="dinner">Dinner (7:00 PM - 10:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Special Preferences (Jain food, high chair, sweets choice, etc.)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Need 4 Aamras thalis and 2 Ukdiche Modak..."
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3 px-5 rounded-xl bg-[#7C2D12] hover:bg-[#9A3412] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
