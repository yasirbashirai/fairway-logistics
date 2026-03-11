"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What areas does Fairway Logistics serve?",
    answer:
      "We serve the entire Gulf Coast region including Mobile AL, Baldwin County AL, Pensacola FL, Biloxi MS, Gulfport MS, and New Orleans LA. We also provide nationwide freight solutions through our carrier network.",
  },
  {
    question: "What types of freight do you handle?",
    answer:
      "We handle full truckload (FTL), less-than-truckload (LTL), container drayage, flatbed loads, refrigerated freight, oversized/overweight loads, and hazardous materials with proper certifications.",
  },
  {
    question: "Do you own your own trucks?",
    answer:
      "Yes! Unlike many freight brokers, Fairway Logistics is an asset-based carrier. We own and maintain our fleet of trucks and equipment, giving you guaranteed capacity and direct control over your shipments.",
  },
  {
    question: "How quickly can I get a freight quote?",
    answer:
      "You can get an instant estimate using our online quote calculator. For detailed quotes, our team responds within 2 business hours. Call us at (251) 725-1929 for immediate assistance.",
  },
  {
    question: "Is Fairway Logistics FMCSA registered?",
    answer:
      "Absolutely. We are fully FMCSA registered, DOT compliant, and carry comprehensive insurance coverage. Safety and compliance are foundational to our operations.",
  },
  {
    question: "Do you offer warehousing services?",
    answer:
      "Yes, we operate strategically located warehouse facilities in Mobile, AL offering cross-docking, inventory management, pick & pack fulfillment, and climate-controlled storage.",
  },
  {
    question: "Can you handle international shipments?",
    answer:
      "We provide comprehensive import/export logistics including customs coordination, documentation support, and port-to-door delivery service through the Port of Mobile and other Gulf Coast ports.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Use our shipment tracking portal on this website by entering your PRO number or BOL. You can also contact our 24/7 operations team at (251) 725-1929 for real-time updates.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-navy-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`glass-card-light rounded-xl mb-3 transition-all duration-300 ${
                  isOpen
                    ? "border-gold-400/30 border-l-[3px] border-l-gold-400"
                    : ""
                }`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" as const },
                        opacity: { duration: 0.25, ease: "easeInOut" as const },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-navy-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
