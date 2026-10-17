import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/restaurantData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF5EB] relative border-b border-amber-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7C2D12] font-heading">
            Frequently Asked <span className="text-amber-700">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Everything you need to know about dining at Thaliwala by Harman in Sangli.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-amber-200/90 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-[#7C2D12] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#7C2D12]">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100 bg-amber-50/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
