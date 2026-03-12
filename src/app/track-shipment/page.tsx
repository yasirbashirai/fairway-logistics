"use client";

import {
  Search,
  MapPin,
  Clock,
  FileCheck,
  Truck,
  Shield,
  Package,
  ChevronDown,
  ChevronUp,
  Eye,
  CalendarCheck,
  ClipboardCheck,
  Bell,
  BarChart3,
  FileText,
} from "lucide-react";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import TrackingWidget from "@/components/TrackingWidget";
import CTASection from "@/components/CTASection";

/* ──────────────────────────────────────────────────────────────────────────
   How Tracking Works — 3-step data
   ────────────────────────────────────────────────────────────────────────── */

const trackingSteps = [
  {
    step: "01",
    icon: Search,
    title: "Enter Your Tracking Number",
    description:
      "Use the PRO number or BOL number provided in your shipping confirmation email. You can also find it on your rate confirmation or bill of lading.",
  },
  {
    step: "02",
    icon: Eye,
    title: "View Real-Time Status",
    description:
      "Instantly see your shipment's current location, status updates, and estimated time of arrival. Our GPS-enabled fleet provides accurate, up-to-the-minute tracking.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Get Delivery Confirmation",
    description:
      "Receive proof of delivery with timestamp, location, and recipient signature. Download documentation or share status links with your team.",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   Tracking Information Features
   ────────────────────────────────────────────────────────────────────────── */

const trackingFeatures = [
  {
    icon: MapPin,
    title: "Real-Time Location",
    description:
      "GPS-powered location updates from our company-owned fleet, giving you pinpoint accuracy across the Gulf Coast corridor.",
  },
  {
    icon: Clock,
    title: "Estimated Time of Arrival",
    description:
      "Dynamic ETA calculations that factor in traffic, weather, and route conditions for reliable delivery windows.",
  },
  {
    icon: ClipboardCheck,
    title: "Proof of Delivery",
    description:
      "Digital POD with electronic signature capture, delivery photos, and timestamped confirmation sent directly to your inbox.",
  },
  {
    icon: Bell,
    title: "Status Notifications",
    description:
      "Automated alerts at every milestone — pickup, in transit, out for delivery, and delivered — via email or SMS.",
  },
  {
    icon: BarChart3,
    title: "Shipment Analytics",
    description:
      "Access historical shipment data, transit times, and performance metrics to optimize your supply chain operations.",
  },
  {
    icon: FileText,
    title: "Documentation Access",
    description:
      "Download bills of lading, rate confirmations, invoices, and customs documents from a single tracking dashboard.",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   FAQ Data
   ────────────────────────────────────────────────────────────────────────── */

const faqs = [
  {
    question: "Where do I find my tracking number?",
    answer:
      "Your tracking number (PRO number) is included in your shipping confirmation email and on your rate confirmation document. It follows the format FW-YYYY-XXX. If you can't locate it, contact our team at (251) 725-1929 and we'll look it up using your BOL number or pickup date.",
  },
  {
    question: "How often is the tracking information updated?",
    answer:
      "Our GPS-enabled fleet provides real-time location updates every 15 minutes while in transit. Status milestones (pickup, in transit, out for delivery, delivered) are updated immediately as they occur.",
  },
  {
    question: "Can I track multiple shipments at once?",
    answer:
      "Yes. Registered customers can access our full tracking dashboard to monitor all active shipments simultaneously. Contact your account manager to set up dashboard access, or call us at (251) 725-1929.",
  },
  {
    question: "What does each shipment status mean?",
    answer:
      "Order Received means we've confirmed your booking. Picked Up means the freight is loaded on our truck. In Transit means it's en route to the destination. Out for Delivery means it's on the final leg to the delivery address. Delivered means it has been received and signed for at the destination.",
  },
  {
    question: "How do I get proof of delivery (POD)?",
    answer:
      "POD is automatically generated upon delivery and includes a timestamp, GPS-verified location, and electronic signature. It's accessible through your tracking page within minutes of delivery. You can also request a copy via email at dispatch@fairwaylogisticsllc.com.",
  },
  {
    question: "What if my shipment is delayed?",
    answer:
      "If a delay occurs due to weather, traffic, or other factors, you'll receive an automatic notification with an updated ETA. Your dedicated logistics coordinator will proactively communicate any significant changes. For urgent inquiries, our dispatch team is available 24/7 at (251) 725-1929.",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
   FAQ Accordion Item
   ────────────────────────────────────────────────────────────────────────── */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-navy-700/40 rounded-xl overflow-hidden transition-colors hover:border-navy-600/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
      >
        <span className="text-white font-semibold text-sm sm:text-base">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gold-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-navy-400 shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-navy-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   Track Shipment Page
   ══════════════════════════════════════════════════════════════════════════ */

export default function TrackShipmentPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* ── SEO: inject metadata via head (client component approach) ── */}
      <title>Track Shipment | Fairway Logistics LLC</title>
      <meta
        name="description"
        content="Track your freight shipment in real time with Fairway Logistics. Enter your PRO or BOL number to see live location, ETA, proof of delivery, and full shipment details across the Gulf Coast."
      />
      <meta
        name="keywords"
        content="track shipment, freight tracking, shipment status, proof of delivery, Fairway Logistics tracking, Gulf Coast freight tracking, Mobile AL shipment tracking"
      />
      <meta
        property="og:title"
        content="Track Shipment | Fairway Logistics LLC"
      />
      <meta
        property="og:description"
        content="Real-time freight tracking for Gulf Coast shipments. Enter your PRO number for live location, ETA, and proof of delivery."
      />
      <meta
        property="og:url"
        content="https://fairwaylogisticsllc.com/track-shipment"
      />
      <meta property="og:site_name" content="Fairway Logistics LLC" />
      <meta property="og:type" content="website" />

      {/* ── Hero ── */}
      <PageHero
        title="Track Your Shipment"
        subtitle="Real-time visibility into every load. Enter your PRO number or BOL number below to see live status, location updates, and estimated delivery times."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Track Shipment" },
        ]}
      />

      {/* ── Main Tracking Section ── */}
      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            {/* Centered heading */}
            <div className="text-center mb-10 max-w-2xl">
              <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
                <Package className="w-4 h-4" />
                Shipment Tracking
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Enter Your Tracking Number
              </h2>
              <p className="text-navy-300 mt-3">
                Use any of our demo tracking numbers (FW-2026-001 through
                FW-2026-005) to see the full tracking experience, or click
                &quot;Try Demo&quot; for a random shipment.
              </p>
            </div>

            {/* Tracking Widget */}
            <TrackingWidget />
          </div>
        </div>
      </section>

      {/* ── How Tracking Works ── */}
      <section className="bg-navy-900/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <Truck className="w-4 h-4" />
              How It Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Track Any Shipment in 3 Simple Steps
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="text-navy-300 mt-4">
              Our tracking system gives you complete visibility from pickup to
              delivery, powered by our GPS-enabled company-owned fleet.
            </p>
          </div>

          {/* 3-step cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trackingSteps.map((step) => (
              <div
                key={step.step}
                className="glass-card rounded-2xl p-8 relative group hover:border-gold-400/30 transition-all duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-2 text-6xl font-heading font-bold text-gold-400/10 group-hover:text-gold-400/20 transition-colors">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-gold-400" />
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Can See ── */}
      <section className="bg-navy-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <Shield className="w-4 h-4" />
              Full Visibility
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Everything You Need to Know, In Real Time
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="text-navy-300 mt-4">
              Our tracking platform provides comprehensive shipment intelligence
              so you always know exactly where your freight is and when it will
              arrive.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-navy-900/50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Section heading */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <FileCheck className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Tracking Questions & Answers
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() =>
                  setOpenFAQ(openFAQ === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Need Help With a Shipment?"
        description="Our dispatch team is available 24/7 to assist with tracking, delivery updates, and any freight questions. Call us or request a quote to get started."
        primaryButtonText="Request a Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
