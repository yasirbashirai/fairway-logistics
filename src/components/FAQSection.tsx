"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Where does Fairway Logistics operate?",
    answer:
      "We provide nationwide freight brokerage with access to 2,000+ vetted carriers covering every lane in the country. Our asset-based fleet (company-owned trucks) operates primarily across the Gulf Coast and Southeast. Our 200,000 sq ft bonded warehouse and headquarters are in Mobile, AL.",
  },
  {
    question: "What types of freight do you handle?",
    answer:
      "We handle full truckload (FTL), less-than-truckload (LTL), flatbed, step-deck, heavy haul and over-dimensional loads, container drayage, import/export, and hazmat with proper certifications. If it needs to move, we can handle it.",
  },
  {
    question: "Do you own your own trucks or are you just a broker?",
    answer:
      "Both. We are an asset-based carrier — we own and operate our own fleet of trucks, trailers, and chassis out of the Gulf Coast. But we also run a full freight brokerage operation with nationwide coverage. This means you get guaranteed capacity on our assets where available, plus access to our carrier network for any lane in the country.",
  },
  {
    question: "What are your heavy haul and over-dimensional capabilities?",
    answer:
      "We specialize in oversized and overweight freight including construction equipment, industrial machinery, wind energy components, and structural steel. We handle all permit coordination, route surveys, pilot cars, and escort services. Equipment includes RGN, lowboy, step-deck, multi-axle, and extendable trailers.",
  },
  {
    question: "Tell me about your warehouse — is it bonded?",
    answer:
      "Yes. Our 200,000 sq ft facility in Mobile, AL is a U.S. Customs bonded warehouse. This means imported goods can be stored before duties are paid, giving importers financial flexibility. We offer cross-docking, inventory management, pick & pack, container transloading, and climate-monitored storage — all integrated with our own drayage and trucking fleet.",
  },
  {
    question: "How quickly can I get a freight quote?",
    answer:
      "You can request a quote through our website and our team responds within 2 business hours. For immediate assistance, call our brokerage line or main office at (251) 725-1929. We handle spot quotes, contract rates, and project-based pricing.",
  },
  {
    question: "Is Fairway Logistics FMCSA registered and insured?",
    answer:
      "Yes. We are fully FMCSA registered, DOT compliant, and carry comprehensive cargo and liability insurance. Safety and compliance are foundational to everything we do — from our own fleet operations to the carriers in our brokerage network.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Use our shipment tracking portal on this website by entering your PRO number or BOL. For loads on our own fleet, you get real-time GPS tracking. You can also contact our 24/7 dispatch team at (251) 725-1929 for live updates on any shipment.",
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
