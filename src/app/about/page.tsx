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
  title: "About Fairway Logistics | Gulf Coast Asset-Based Freight Company",
  description:
    "Learn about Fairway Logistics LLC — an asset-based logistics company headquartered in Mobile, AL. Company-owned fleet, Port of Mobile expertise, FMCSA registered, and 24/7 operations serving the Gulf Coast.",
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
        url: "/logo.jpg",
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
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80",
    imageAlt: "Fairway Logistics fleet trucks on highway",
  },
  {
    icon: Anchor,
    title: "Gulf Coast Expertise",
    description:
      "With deep roots in Mobile, Alabama, we know the Gulf Coast logistics landscape better than anyone. Our relationships at the Port of Mobile, local terminals, and regional warehouses give our clients an edge.",
    bullets: [
      "Port of Mobile preferred carrier",
      "Priority gate access & fast chassis turns",
      "Knowledge of Gulf Coast routes & regulations",
      "Established relationships with port authorities",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80",
    imageAlt: "Port of Mobile container operations",
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
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80",
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
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80",
    imageAlt: "Fairway Logistics team and safety operations",
  },
];

/* ---------- Team ---------- */
const team = [
  {
    name: "James Carter",
    title: "Founder & CEO",
    bio: "20+ years in Gulf Coast freight and port operations. Founded Fairway Logistics to bring asset-based reliability to the regional market.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Michelle Torres",
    title: "VP of Operations",
    bio: "Former port operations manager with deep expertise in drayage, intermodal logistics, and carrier management across the Gulf Coast.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Robert Williams",
    title: "Director of Safety & Compliance",
    bio: "15 years ensuring FMCSA compliance, driver safety programs, and DOT audit readiness. Maintains Fairway's impeccable safety record.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Angela Davis",
    title: "Director of Business Development",
    bio: "Specializes in building long-term logistics partnerships across manufacturing, construction, and energy industries on the Gulf Coast.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
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
        subtitle="Asset-based logistics solutions built on Gulf Coast expertise, company-owned equipment, and an unwavering commitment to reliability."
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* SECTION 2 — COMPANY STORY                                      */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1920&q=80"
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
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
                Built on the Gulf Coast.{" "}
                <span className="text-gold-gradient">Built to Deliver.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Fairway Logistics was founded with a simple belief: shippers
                  deserve a logistics partner who actually owns the trucks, knows
                  the ports, and picks up the phone when it matters.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Headquartered at 456 Dauphin Street in Mobile, Alabama, we
                started as a single-truck drayage operation at the Port of
                Mobile. Over the years, we&apos;ve grown into a full-service,
                asset-based logistics company serving the entire Gulf Coast
                region and beyond.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Today, our fleet handles everything from container drayage and
                full truckload shipping to warehousing and specialized freight.
                But our mission remains the same: provide reliable, transparent,
                and competitively priced logistics services that help businesses
                move goods with confidence.
              </p>

              {/* Key differentiators */}
              <div className="space-y-3">
                {[
                  "Company-owned fleet — not a brokerage-only model",
                  "Deep Port of Mobile operational expertise",
                  "FMCSA registered & fully insured",
                  "24/7 dispatch and operations support",
                  "Competitive rates with no hidden fees",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-dark-700">
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
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Our Core Values
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
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
                className={`bg-white rounded-xl border border-neutral-200 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
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
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              The Fairway Advantage
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
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
                    <h3 className="text-2xl font-heading font-bold text-dark-700">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <span className="text-sm text-neutral-700">
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
      {/* SECTION 5 — LEADERSHIP / TEAM                                  */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Leadership That Delivers
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in
              freight, port operations, and supply chain management.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                {/* Photo */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Gold accent line */}
                <div className="h-1 bg-gold-gradient" />
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-dark-700 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gold-400 text-sm font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
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
        title="Partner with Gulf Coast's Leading Logistics Provider"
        description="Experience the difference of working with an asset-based carrier. Guaranteed capacity, competitive rates, and a team that treats your freight like their own."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
