import Link from "next/link";
import type { Metadata } from "next";
import {
  Shield,
  Heart,
  Lightbulb,
  HardHat,
  Truck,
  Anchor,
  Cpu,
  FileCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import MetricsSection from "@/components/MetricsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Fairway Logistics | Nationwide Asset-Based Freight & Brokerage",
  description:
    "Learn about Fairway Logistics LLC — an asset-based logistics company and national freight broker headquartered in Mobile, AL. Company-owned fleet, heavy haul, bonded warehouse, and 24/7 operations with nationwide coverage.",
  keywords: [
    "about Fairway Logistics",
    "Mobile AL logistics company",
    "asset-based carrier Alabama",
    "Gulf Coast freight company",
    "trucking company Mobile Alabama",
    "Port of Mobile logistics",
  ],
  openGraph: {
    title: "About Fairway Logistics | Gulf Coast Asset-Based Freight Company",
    description:
      "Asset-based logistics company headquartered in Mobile, AL. Company-owned fleet, port expertise, and 24/7 operations.",
    url: "https://fairwaylogisticsllc.com/about",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "About Fairway Logistics LLC",
      },
    ],
  },
};

/* ---------- Values ---------- */
const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "When we commit to a pickup, we show up. Our asset-based model means we control the capacity, the equipment, and the timeline — no excuses, no surprises.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Transparent pricing, honest communication, and fair dealings. We build long-term partnerships by doing what we say and saying what we mean.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From real-time GPS tracking to automated quoting, we invest in technology that gives our clients visibility and control over their supply chain.",
  },
  {
    icon: HardHat,
    title: "Safety",
    description:
      "Safety is non-negotiable. Our drivers are trained to the highest standards, our equipment is rigorously maintained, and our compliance record speaks for itself.",
  },
];

/* ---------- Why Choose Us ---------- */
const whyChooseUs = [
  {
    icon: Truck,
    title: "Asset-Based Fleet",
    description:
      "We own and operate our own trucks, trailers, and chassis. This means guaranteed capacity when you need it, competitive pricing without broker markups, and direct accountability for every load.",
    bullets: [
      "No third-party carrier dependency",
      "Dedicated equipment for regular lanes",
      "Fleet maintained to DOT standards",
      "Driver teams available for expedited freight",
    ],
    image: "/images/trucks.jpg",
    imageAlt: "Fairway Logistics fleet trucks on highway",
  },
  {
    icon: Anchor,
    title: "National Reach, Gulf Coast Roots",
    description:
      "Headquartered in Mobile, Alabama, with assets across the Gulf Coast and brokerage capabilities nationwide. We combine local expertise at the Port of Mobile with a 2,000+ carrier network that covers every lane in the country.",
    bullets: [
      "Nationwide freight brokerage coverage",
      "Asset-based fleet across the Gulf Coast & Southeast",
      "Port of Mobile preferred carrier",
      "200,000 sq ft bonded warehouse in Mobile",
    ],
    image: "/images/truck-road.jpg",
    imageAlt: "Nationwide freight logistics coverage",
  },
  {
    icon: Cpu,
    title: "Technology-Driven",
    description:
      "We combine old-school logistics expertise with modern technology. Real-time tracking, instant quoting, electronic BOLs, and automated status updates keep you informed at every step.",
    bullets: [
      "GPS tracking on every shipment",
      "Online quote request portal",
      "Automated status notifications",
      "Digital documentation & PODs",
    ],
    image: "/images/warehouse.jpg",
    imageAlt: "Modern warehouse with logistics technology",
  },
  {
    icon: FileCheck,
    title: "Compliance & Safety",
    description:
      "We maintain the highest standards of regulatory compliance and safety. FMCSA registered, fully insured, and committed to zero-incident operations across every lane we serve.",
    bullets: [
      "FMCSA registered & authorized",
      "Full cargo & liability insurance",
      "Rigorous driver qualification program",
      "Regular safety audits & inspections",
    ],
    image: "/images/truckings.jpg",
    imageAlt: "Fairway Logistics team and safety operations",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* ============================================================= */}
      {/* SECTION 1 — PAGE HERO                                          */}
      {/* ============================================================= */}
      <PageHero
        title="About Fairway Logistics"
        subtitle="Nationwide logistics powered by asset-based reliability, company-owned equipment, and an unwavering commitment to service — headquartered in Mobile, AL."
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="/images/hero.jpg"
      />

      {/* ============================================================= */}
      {/* SECTION 2 — COMPANY STORY                                      */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/trucks.jpg"
                  alt="Port of Mobile operations - Fairway Logistics"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>

            {/* Text */}
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Gulf Coast Roots.{" "}
                <span className="text-gold-gradient">Nationwide Reach.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-navy-300 leading-relaxed text-lg">
                  Fairway Logistics was founded with a simple belief: shippers
                  deserve a logistics partner who actually owns the trucks, knows
                  the ports, and picks up the phone when it matters.
                </p>
              </div>

              <p className="text-navy-300 leading-relaxed mb-6">
                Headquartered at 456 Dauphin Street in Mobile, Alabama, we
                started as a single-truck drayage operation at the Port of
                Mobile. Over the years, we&apos;ve grown into a full-service
                national logistics company — combining asset-based trucking and
                a 200,000 sq ft bonded warehouse with a nationwide freight
                brokerage network.
              </p>

              <p className="text-navy-300 leading-relaxed mb-8">
                Today, our fleet handles everything from container drayage and
                heavy haul to full truckload shipping and warehousing. Our
                brokerage connects shippers to 2,000+ vetted carriers coast to
                coast. But our mission remains the same: provide reliable,
                transparent logistics that help businesses move goods with
                confidence.
              </p>

              {/* Key differentiators */}
              <div className="space-y-3">
                {[
                  "Company-owned fleet + nationwide brokerage network",
                  "Heavy haul & over-dimensional specialists",
                  "200,000 sq ft bonded warehouse in Mobile, AL",
                  "FMCSA registered & fully insured",
                  "24/7 dispatch and operations support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 3 — OUR VALUES                                         */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Our Core Values
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              These are the principles that guide every decision we make,
              every load we haul, and every relationship we build.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`bg-navy-950 rounded-xl border border-navy-800 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 — WHY CHOOSE US                                      */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              The Fairway Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Why Choose Fairway Logistics
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Alternating sections */}
          <div className="space-y-20">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image — swap order on odd items */}
                <div
                  className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-navy-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-sm text-navy-200">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 5 — PORT OF MOBILE GALLERY                             */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Home Base
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              The Port of Mobile, Alabama
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Mobile, Alabama is the heart of our operations. Strategically
              positioned on the Gulf Coast, the Port of Mobile is one of the
              fastest-growing ports in the nation — and it&apos;s where Fairway
              Logistics calls home.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Image 1 — Large feature */}
            <div className="sm:col-span-2 lg:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1559511260-66a68e6a684b?w=1200&h=800&fit=crop&q=80"
                alt="Aerial view of a busy shipping port with cargo containers and cranes — representing Port of Mobile operations"
                className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-heading font-bold text-lg">
                  Port Operations
                </h3>
                <p className="text-navy-200 text-sm">
                  Container handling and crane operations at the port
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop&q=80"
                alt="Cargo ship docked at port with large cranes loading containers"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-heading font-bold text-sm">
                  Container Drayage
                </h3>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&h=400&fit=crop&q=80"
                alt="Industrial waterfront with cranes and cargo vessels at sunset"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-heading font-bold text-sm">
                  Gulf Coast Waterfront
                </h3>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80"
                alt="Stacked shipping containers at a busy port terminal"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-heading font-bold text-sm">
                  Container Yard
                </h3>
              </div>
            </div>

            {/* Image 5 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=400&fit=crop&q=80"
                alt="Large cargo ship being loaded at a port dock with heavy crane equipment"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-heading font-bold text-sm">
                  Ship Loading
                </h3>
              </div>
            </div>

            {/* Image 6 */}
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop&q=80"
                alt="Aerial view of shipping containers organized at a port terminal"
                className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-heading font-bold text-sm">
                  Port Logistics Hub
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 6 — METRICS                                            */}
      {/* ============================================================= */}
      <MetricsSection />

      {/* ============================================================= */}
      {/* SECTION 7 — CTA                                                */}
      {/* ============================================================= */}
      <CTASection
        title="Partner with a Nationwide Logistics Provider"
        description="Experience the difference of working with an asset-based carrier. Guaranteed capacity, competitive rates, and a team that treats your freight like their own. National coverage, Gulf Coast roots."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
