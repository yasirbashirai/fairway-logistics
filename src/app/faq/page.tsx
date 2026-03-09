"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Truck,
  Ship,
  DollarSign,
  Handshake,
  Package,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import CTASection from "@/components/CTASection";

/* ---------- FAQ Data ---------- */
interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  icon: typeof HelpCircle;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General",
    icon: HelpCircle,
    faqs: [
      {
        question: "What services does Fairway Logistics offer?",
        answer:
          "Fairway Logistics provides a full suite of logistics services including container drayage, full truckload (FTL) and less than truckload (LTL) shipping, freight brokerage, warehousing and distribution, import/export logistics, and specialized freight handling. As an asset-based carrier, we own and operate our own fleet, giving us direct control over capacity and service quality.",
      },
      {
        question: "What areas does Fairway Logistics serve?",
        answer:
          "Our primary service area covers the entire Gulf Coast corridor including Mobile, AL (headquarters), Baldwin County, AL, New Orleans, LA, Gulfport, MS, Biloxi, MS, and Pensacola, FL. Through our freight brokerage division and carrier partner network, we also provide nationwide coverage for long-haul shipments.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Our office is open Monday through Friday from 7:00 AM to 6:00 PM and Saturday from 8:00 AM to 12:00 PM (Central Time). However, our dispatch team operates 24/7 to support active shipments. For after-hours emergencies related to an active shipment, call our main line at (251) 725-1929.",
      },
      {
        question: "What does 'asset-based' mean?",
        answer:
          "Asset-based means we own and operate our own trucks, trailers, and chassis rather than relying solely on third-party carriers. This gives us direct control over capacity, scheduling, equipment quality, and driver standards — resulting in more reliable service and competitive pricing for our customers.",
      },
      {
        question: "Where is Fairway Logistics located?",
        answer:
          "Our headquarters is located at 456 Dauphin Street, Mobile, AL 36602. We're conveniently situated near the Port of Mobile with easy access to I-65 and I-10 corridors.",
      },
    ],
  },
  {
    title: "Shipping & Freight",
    icon: Package,
    faqs: [
      {
        question: "How do I get a freight quote?",
        answer:
          "You can request a quote through our online form at fairwaylogisticsllc.com/request-quote, call us directly at (251) 725-1929, or email info@fairwaylogisticsllc.com. We respond to all quote requests within 2 business hours with a detailed, no-obligation estimate.",
      },
      {
        question: "What are typical transit times?",
        answer:
          "Transit times depend on the origin, destination, and service type. Regional Gulf Coast shipments typically deliver within 1-2 business days. Longer haul shipments vary based on distance. Container drayage from the Port of Mobile to local destinations is often same-day or next-day. We provide estimated delivery dates with every quote.",
      },
      {
        question: "Can I track my shipment?",
        answer:
          "Yes. Every Fairway Logistics shipment includes real-time GPS tracking. You'll receive a tracking link upon dispatch and can monitor your freight's location, estimated arrival time, and status updates throughout the journey. Our dispatch team also provides proactive notifications for key milestones.",
      },
      {
        question: "Do you offer insurance on shipments?",
        answer:
          "Yes. All Fairway Logistics shipments are covered by our standard cargo insurance up to $100,000 per shipment. For higher-value cargo, we can arrange additional insurance coverage. We also carry $1,000,000 in general liability insurance and meet all FMCSA insurance requirements.",
      },
      {
        question: "What types of freight do you handle?",
        answer:
          "We handle a wide range of freight including dry goods, refrigerated/temperature-controlled cargo, flatbed loads, containers (20' and 40'), oversized and overweight shipments, and hazmat materials (with proper endorsements). If you have specialized freight needs, contact us to discuss your requirements.",
      },
    ],
  },
  {
    title: "Drayage",
    icon: Ship,
    faqs: [
      {
        question: "What is drayage?",
        answer:
          "Drayage is the short-distance transport of shipping containers, typically from a port or rail terminal to a nearby warehouse, distribution center, or customer facility. It's a critical first or last mile in the intermodal supply chain. Fairway Logistics specializes in container drayage at the Port of Mobile and other Gulf Coast ports.",
      },
      {
        question: "Which ports do you serve?",
        answer:
          "Our primary port operations are at the Port of Mobile, Alabama, where we hold preferred carrier status with priority gate access. We also provide drayage services at the Port of Gulfport and can coordinate container transport from the Port of New Orleans and other Gulf Coast terminals.",
      },
      {
        question: "What container types can you handle?",
        answer:
          "We handle all standard container types including 20-foot standard containers, 40-foot standard containers, 40-foot high cube containers, and refrigerated (reefer) containers. We maintain our own chassis fleet to ensure efficient container pickup and delivery without chassis shortages.",
      },
      {
        question: "How quickly can you pick up a container from the port?",
        answer:
          "With our preferred carrier status at the Port of Mobile, we can typically arrange same-day container pickup once the container is available for release. For pre-planned shipments, we coordinate with the terminal in advance to minimize wait times and ensure priority gate access.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: DollarSign,
    faqs: [
      {
        question: "How does pricing work?",
        answer:
          "Our pricing is based on factors including distance, freight type, weight, dimensions, equipment required, and current market conditions. As an asset-based carrier, we eliminate broker markups on loads moved by our own fleet, resulting in competitive rates. We provide all-inclusive quotes with no hidden fees.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Standard payment terms are Net 30 from invoice date. We accept payment via ACH, wire transfer, check, and major credit cards. For new customers, we may require prepayment or credit approval for the first few shipments. Volume customers may qualify for customized payment arrangements.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. Fairway Logistics is committed to transparent pricing. Your quote includes all standard costs for the requested service. Any potential additional charges — such as detention, layover, or accessorial fees — are clearly communicated upfront before you approve the shipment.",
      },
      {
        question: "Do you offer volume discounts?",
        answer:
          "Yes. We offer competitive pricing for customers with consistent shipping volumes. Whether you need dedicated fleet capacity, regular lane commitments, or high-volume drayage services, our team will work with you to develop pricing that reflects the value of your business.",
      },
    ],
  },
  {
    title: "Carrier Partners",
    icon: Handshake,
    faqs: [
      {
        question: "How do I become a carrier partner?",
        answer:
          "You can apply through our Carrier Partners page at fairwaylogisticsllc.com/carrier-partners. Fill out the application form with your company information, MC number, equipment types, and preferred lanes. Our carrier relations team reviews applications within 24 hours and most carriers are approved and hauling within 48 hours.",
      },
      {
        question: "What are the requirements to become a carrier partner?",
        answer:
          "Key requirements include an active FMCSA operating authority (MC number), minimum 1 year of operating history, satisfactory or unrated safety rating, minimum $1,000,000 auto liability and $100,000 cargo insurance, ELD compliance, and a clean safety record. Full requirements are listed on our Carrier Partners page.",
      },
    ],
  },
];

/* ---------- Accordion Item ---------- */
function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-neutral-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-dark pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-neutral-600 leading-relaxed text-sm">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our logistics services, pricing, drayage operations, and carrier partnership program."
        breadcrumbs={[{ label: "FAQ" }]}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* FAQ SECTIONS                                                   */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {faqCategories.map((category) => (
              <a
                key={category.title}
                href={`#faq-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 hover:border-gold hover:text-gold transition-all"
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </a>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div
                key={category.title}
                id={`faq-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-dark">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq, i) => {
                    const key = `${category.title}-${i}`;
                    return (
                      <AccordionItem
                        key={key}
                        faq={faq}
                        isOpen={!!openItems[key]}
                        onToggle={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-neutral-50 rounded-2xl border border-neutral-200 p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold text-dark mb-3">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              happy to help. Contact us directly and we&apos;ll get back to you
              within 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold-gradient text-dark font-bold px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-gold/20 hover:scale-105 transition-all duration-200 text-sm"
              >
                Contact Us
              </Link>
              <a
                href="tel:+12517251929"
                className="border border-neutral-300 text-dark font-semibold px-8 py-3.5 rounded-lg hover:border-gold hover:text-gold transition-all duration-200 text-sm"
              >
                Call (251) 725-1929
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* QUOTE FORM                                                     */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Ship? Request a Quote
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Get a competitive, no-obligation freight quote from our Gulf Coast
              logistics team.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Partner with Gulf Coast's Trusted Logistics Provider"
        description="From drayage to distribution, Fairway Logistics delivers reliable freight solutions backed by a company-owned fleet."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
