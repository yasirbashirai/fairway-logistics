import type { Metadata } from "next";
import {
  Clock,
  Eye,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  FileText,
  Truck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import MetricsSection from "@/components/MetricsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Request a Freight Quote | Fairway Logistics",
  description:
    "Get a free, no-obligation freight quote from Fairway Logistics. Competitive rates for container drayage, trucking, warehousing, and freight brokerage across the Gulf Coast.",
  keywords: [
    "freight quote",
    "trucking quote",
    "drayage quote",
    "shipping quote Mobile AL",
    "Gulf Coast freight rates",
    "logistics quote",
    "free freight estimate",
  ],
  openGraph: {
    title: "Request a Freight Quote | Fairway Logistics",
    description:
      "Get a free, no-obligation freight quote. Competitive rates for Gulf Coast logistics services.",
    url: "https://fairwaylogisticsllc.com/request-quote",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Request a Quote - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Why Get a Quote ---------- */
const whyQuote = [
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Our team responds to every quote request within 2 business hours. For urgent shipments, call us directly for an immediate quote.",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise surcharges. Our quotes include all costs upfront so you can budget with confidence.",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description:
      "Every quote is free with no obligation to book. Compare our rates and service — we're confident you'll choose Fairway.",
  },
];

/* ---------- What Happens Next ---------- */
const nextSteps = [
  {
    icon: FileText,
    title: "We Review Your Details",
    description:
      "Our logistics team analyzes your shipment requirements, including origin, destination, cargo type, and any special handling needs.",
  },
  {
    icon: Phone,
    title: "We Contact You",
    description:
      "A Fairway representative reaches out within 2 hours with a detailed, competitive quote tailored to your specific shipment.",
  },
  {
    icon: Truck,
    title: "We Move Your Freight",
    description:
      "Once approved, we schedule pickup, assign equipment, and manage your shipment from origin to destination with full tracking.",
  },
];

export default function RequestQuotePage() {
  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Request a Freight Quote"
        subtitle="Get a competitive, no-obligation quote for your next shipment. Our team responds within 2 hours."
        breadcrumbs={[{ label: "Request a Quote" }]}
        backgroundImage="/images/trucks.jpg"
      />

      {/* ============================================================= */}
      {/* WHY GET A QUOTE                                                */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Request a Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Simple, Fast & Transparent
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              We make getting a freight quote as easy as possible. No
              runaround, no sales pressure — just honest pricing from an
              asset-based carrier.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyQuote.map((item, i) => (
              <div
                key={item.title}
                className={`bg-navy-900 rounded-xl border border-navy-800 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* QUOTE FORM — PROMINENT                                         */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Your Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Tell Us About Your Shipment
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Fill out the form below with your shipment details and our team
              will provide a competitive quote within 2 business hours. For
              urgent requests, call{" "}
              <a href="tel:+12517251929" className="text-gold-400 hover:underline">
                (251) 725-1929
              </a>{" "}
              for an immediate quote.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <QuoteForm />
          </div>

          {/* Additional info below form */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-navy-300 text-sm">
            {[
              "Free, no-obligation quote",
              "Response within 2 hours",
              "All freight types accepted",
              "Competitive asset-based rates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* TRUST BADGES                                                   */}
      {/* ============================================================= */}
      <TrustBadges variant="light" />

      {/* ============================================================= */}
      {/* METRICS                                                        */}
      {/* ============================================================= */}
      <MetricsSection />

      {/* ============================================================= */}
      {/* WHAT HAPPENS NEXT                                              */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              What Happens Next
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Once you submit your quote request, here&apos;s what to expect from
              the Fairway Logistics team.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nextSteps.map((step, i) => (
              <div
                key={step.title}
                className={`relative bg-navy-900 rounded-xl border border-navy-800 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>

                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-gold-400" />
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector arrow */}
                {i < nextSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gold-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Prefer to Talk? Call Us Directly"
        description="Our logistics team is standing by to discuss your freight needs and provide an immediate quote over the phone."
        primaryButtonText="Call (251) 725-1929"
        primaryButtonHref="tel:+12517251929"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/gulf-coast-logistics"
      />
    </>
  );
}
