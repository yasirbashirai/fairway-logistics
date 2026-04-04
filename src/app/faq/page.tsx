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
          "We provide asset-based trucking (FTL, LTL, flatbed), heavy haul and over-dimensional transport, Gulf Coast container drayage, nationwide freight brokerage, bonded warehousing and distribution, and import/export logistics. We own our fleet and also operate a full brokerage — so you get asset-based reliability with nationwide reach.",
      },
      {
        question: "Where does Fairway Logistics operate?",
        answer:
          "We provide nationwide freight brokerage through our network of 2,000+ vetted carriers. Our company-owned assets (trucks, trailers, chassis, and warehouse) are based in Mobile, AL and primarily cover the Gulf Coast and Southeast. We're a national brokerage headquartered on the Gulf Coast.",
      },
      {
        question: "What are your business hours?",
        answer:
          "Our office is open Monday through Friday from 7:00 AM to 6:00 PM and Saturday from 8:00 AM to 12:00 PM (Central Time). Our dispatch team operates 24/7 to support active shipments. For after-hours emergencies, call (251) 725-1929.",
      },
      {
        question: "What does 'asset-based' mean and why does it matter?",
        answer:
          "Asset-based means we own and operate our own trucks, trailers, chassis, and warehouse — rather than relying solely on third-party carriers. This gives you guaranteed capacity, direct control over your shipments, better pricing (no broker markup on our fleet), and a single point of accountability. For loads outside our fleet coverage, we broker through our vetted carrier network.",
      },
      {
        question: "Where is your headquarters and warehouse?",
        answer:
          "Our headquarters and 200,000 sq ft U.S. Customs bonded warehouse are in Mobile, AL — minutes from the Port of Mobile with direct access to I-65 and I-10 corridors.",
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
          "Request a quote through our website, call us at (251) 725-1929, or email info@fwllogistics.com. We respond within 2 business hours with a detailed, no-obligation estimate. We handle spot quotes, contract rates, and project-based pricing for heavy haul and specialized freight.",
      },
      {
        question: "What types of freight do you handle?",
        answer:
          "Dry goods, flatbed loads, containers (20' and 40'), heavy haul and over-dimensional (oversized/overweight equipment, machinery, steel), refrigerated cargo, and hazmat with proper endorsements. We also specialize in construction equipment, industrial machinery, and energy sector freight.",
      },
      {
        question: "Can I track my shipment?",
        answer:
          "Yes. Shipments on our fleet include real-time GPS tracking. For brokered loads, we provide regular status updates and tracking through our dispatch team. You can also use our tracking portal or call our 24/7 dispatch at (251) 725-1929.",
      },
      {
        question: "Do you handle heavy haul and over-dimensional loads?",
        answer:
          "Yes — this is one of our specialties. We transport oversized equipment, construction machinery, wind energy components, structural steel, and more. We handle all permit coordination, route surveys, pilot cars, and escort services. Equipment includes RGN, lowboy, step-deck, multi-axle, and extendable trailers.",
      },
      {
        question: "Do you offer insurance on shipments?",
        answer:
          "All shipments are covered by our standard cargo insurance up to $100,000 per shipment. For higher-value cargo, we arrange additional coverage. We carry $1,000,000 in general liability insurance and meet all FMCSA insurance requirements.",
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
          "Drayage is the short-distance transport of shipping containers from a port or rail terminal to a nearby warehouse, distribution center, or customer facility. Fairway Logistics provides container drayage at the Port of Mobile and other Gulf Coast ports using our own fleet of trucks and chassis.",
      },
      {
        question: "Which ports do you serve for drayage?",
        answer:
          "Our primary drayage operations are at the Port of Mobile, where we hold preferred carrier status with priority gate access. We also serve the Port of Gulfport and coordinate container transport from the Port of New Orleans and other Gulf Coast terminals.",
      },
      {
        question: "How quickly can you pick up a container from the port?",
        answer:
          "With our preferred carrier status at the Port of Mobile, we typically arrange same-day pickup once the container clears. Containers can go directly to our bonded warehouse for transloading or to your facility.",
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
          "Pricing is based on distance, freight type, weight, dimensions, equipment required, and market conditions. Loads on our fleet skip the broker markup. Brokered loads are competitively sourced across our carrier network. We provide all-inclusive quotes with no hidden fees.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "Standard terms are Net 30 from invoice date. We accept ACH, wire transfer, check, and major credit cards. Volume customers may qualify for customized payment arrangements.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. Your quote includes all standard costs. Any potential additional charges — detention, layover, or accessorials — are communicated upfront before you approve the shipment.",
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
          "Apply through our Carrier Partners page with your company information, MC number, equipment types, and preferred lanes. Our team reviews applications within 24 hours and most carriers are approved and hauling within 48 hours. We need carriers nationwide — not just Gulf Coast.",
      },
      {
        question: "What are the requirements?",
        answer:
          "Active FMCSA operating authority (MC number), minimum 1 year of operating history, satisfactory or unrated safety rating, minimum $1,000,000 auto liability and $100,000 cargo insurance, ELD compliance, and a clean safety record.",
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
    <div className="border border-navy-800 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-navy-900 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-white pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
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
          <p className="text-navy-300 leading-relaxed text-sm">
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
        backgroundImage="/images/hero.jpg"
      />

      {/* ============================================================= */}
      {/* FAQ SECTIONS                                                   */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Quick nav */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {faqCategories.map((category) => (
              <a
                key={category.title}
                href={`#faq-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy-800 text-sm font-medium text-navy-300 hover:border-gold-400 hover:text-gold-400 transition-all"
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
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-white">
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
          <div className="mt-16 bg-navy-900 rounded-2xl border border-navy-800 p-8 sm:p-10 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-navy-300 mb-6 max-w-lg mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              happy to help. Contact us directly and we&apos;ll get back to you
              within 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-gold-gradient text-white font-bold px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all duration-200 text-sm"
              >
                Contact Us
              </Link>
              <a
                href="tel:+12517251929"
                className="border border-navy-700 text-white font-semibold px-8 py-3.5 rounded-lg hover:border-gold-400 hover:text-gold-400 transition-all duration-200 text-sm"
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
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Ship? Request a Quote
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Get a competitive, no-obligation freight quote from our logistics
              team.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Partner with a Trusted Nationwide Logistics Provider"
        description="From heavy haul to drayage to distribution, Fairway Logistics delivers reliable freight solutions backed by a company-owned fleet and national brokerage network."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
