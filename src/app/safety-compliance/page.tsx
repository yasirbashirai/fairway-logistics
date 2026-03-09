import type { Metadata } from "next";
import {
  Shield,
  FileCheck,
  Award,
  Truck,
  HardHat,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Users,
  ClipboardCheck,
  Eye,
  Heart,
  BarChart3,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Safety & Compliance | Fairway Logistics",
  description:
    "Fairway Logistics is committed to the highest standards of safety and regulatory compliance. FMCSA registered, DOT compliant, fully insured, with rigorous driver training and equipment maintenance programs.",
  keywords: [
    "trucking safety",
    "FMCSA compliance",
    "DOT compliance",
    "freight safety",
    "logistics safety program",
    "driver safety training",
    "cargo insurance",
  ],
  openGraph: {
    title: "Safety & Compliance | Fairway Logistics",
    description:
      "Our commitment to safety is non-negotiable. FMCSA registered, DOT compliant, fully insured.",
    url: "https://fairwaylogisticsllc.com/safety-compliance",
    siteName: "Fairway Logistics LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Safety & Compliance - Fairway Logistics",
      },
    ],
  },
};

/* ---------- Certifications ---------- */
const certifications = [
  {
    icon: FileCheck,
    title: "FMCSA Registered",
    description:
      "Fully registered with the Federal Motor Carrier Safety Administration with an active operating authority for interstate and intrastate freight transport.",
  },
  {
    icon: Shield,
    title: "DOT Compliant",
    description:
      "Full compliance with all Department of Transportation regulations including hours of service, vehicle inspection, driver qualification, and hazardous materials transport.",
  },
  {
    icon: Award,
    title: "Cargo & Liability Insurance",
    description:
      "Comprehensive cargo insurance coverage up to $100,000 per shipment and $1,000,000 general liability coverage, exceeding minimum FMCSA requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Satisfactory Safety Rating",
    description:
      "Maintaining a satisfactory safety rating through proactive compliance management, regular audits, and continuous improvement of our safety processes.",
  },
];

/* ---------- Safety Program ---------- */
const safetyPrograms = [
  {
    icon: BookOpen,
    title: "Pre-Trip & Post-Trip Inspections",
    description:
      "Every vehicle undergoes thorough pre-trip and post-trip inspections documented via digital checklists. Any deficiency is addressed before the truck returns to service.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "GPS tracking, ELD compliance, and onboard cameras provide real-time visibility into driver behavior, route adherence, and hours of service compliance.",
  },
  {
    icon: AlertTriangle,
    title: "Hazard Communication",
    description:
      "Comprehensive hazard communication program ensuring all drivers and warehouse personnel understand material safety, labeling requirements, and emergency procedures.",
  },
  {
    icon: ClipboardCheck,
    title: "Drug & Alcohol Testing",
    description:
      "Strict adherence to DOT-mandated drug and alcohol testing programs including pre-employment, random, post-accident, and reasonable suspicion testing.",
  },
];

/* ---------- Driver Standards ---------- */
const driverStandards = [
  "Valid CDL with appropriate endorsements",
  "Minimum 2 years verifiable driving experience",
  "Clean MVR with no major violations in 3 years",
  "DOT physical examination compliance",
  "Background check and drug screening clearance",
  "Annual defensive driving refresher courses",
  "Smith System or equivalent safety training",
  "Hours of service and ELD proficiency",
];

/* ---------- Equipment Maintenance ---------- */
const maintenanceItems = [
  {
    icon: Wrench,
    title: "Preventive Maintenance Schedule",
    description:
      "Every truck and trailer follows a strict PM schedule based on mileage and time intervals. We use fleet management software to track every service event and ensure nothing is missed.",
  },
  {
    icon: Truck,
    title: "DOT Annual Inspections",
    description:
      "All equipment undergoes comprehensive DOT annual inspections at certified facilities. Inspection stickers, reports, and corrective actions are documented and filed electronically.",
  },
  {
    icon: HardHat,
    title: "Tire & Brake Programs",
    description:
      "Dedicated tire management and brake inspection programs ensure our equipment meets or exceeds federal safety standards. Worn tires and brake components are replaced proactively.",
  },
];

/* ---------- Safety Stats ---------- */
const safetyStats = [
  { value: "98%", label: "DOT Inspection Pass Rate" },
  { value: "0.5", label: "Recordable Incident Rate" },
  { value: "100%", label: "ELD Compliance" },
  { value: "4.2M+", label: "Safe Miles Driven Annually" },
];

export default function SafetyCompliancePage() {
  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Safety & Compliance"
        subtitle="Safety is not a priority — it's a core value. Every policy, every inspection, and every training hour exists to protect our drivers, our clients' freight, and the public."
        breadcrumbs={[{ label: "Safety & Compliance" }]}
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* COMMITMENT OVERVIEW                                            */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Our Commitment
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Safety Is{" "}
                <span className="text-gold-gradient">Non-Negotiable</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  At Fairway Logistics, safety isn&apos;t a department — it&apos;s a
                  culture. From the front office to the driver&apos;s seat, every
                  team member is empowered and expected to uphold our safety
                  standards without exception.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Our safety program is built on three pillars: prevention through
                rigorous training and maintenance, compliance through systematic
                processes and documentation, and continuous improvement through
                data analysis and feedback loops.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                We invest significantly in driver training, equipment maintenance,
                and safety technology because we believe the best safety record is
                one built on proactive measures — not reactive fixes.
              </p>

              <div className="space-y-3">
                {[
                  "Zero-tolerance policy for safety violations",
                  "Dedicated Safety Director overseeing all operations",
                  "Monthly safety meetings and quarterly audits",
                  "Industry-leading driver training programs",
                  "Modern fleet with advanced safety features",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
                  alt="Safety-focused logistics operations at Fairway Logistics"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* COMPLIANCE CERTIFICATIONS                                      */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Regulatory Compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Certifications & Compliance
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              We maintain full compliance with all federal and state
              transportation regulations, exceeding minimum requirements in every
              category.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className={`bg-white rounded-xl border border-neutral-200 p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-dark mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SAFETY PROGRAM DETAILS                                         */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Safety Programs
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Proactive Safety Management
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Our comprehensive safety program covers every aspect of operations
              from driver behavior monitoring to hazardous materials handling.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {safetyPrograms.map((program, i) => (
              <div
                key={program.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-100 p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                  <program.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-3">
                  {program.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* DRIVER TRAINING & STANDARDS                                    */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
                  alt="Professional truck drivers at Fairway Logistics"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:order-1">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Driver Excellence
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                Driver Training & Standards
              </h2>

              <p className="text-neutral-600 leading-relaxed mb-6">
                Our drivers are the backbone of our safety program. We recruit
                experienced professionals, provide comprehensive training, and
                maintain rigorous qualification standards that exceed federal
                minimums.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                Every Fairway driver completes our orientation program covering
                defensive driving, cargo securement, hazmat awareness, customer
                service, and company-specific procedures before their first
                dispatch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {driverStandards.map((standard) => (
                  <div key={standard} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* EQUIPMENT MAINTENANCE                                          */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Fleet Maintenance
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Equipment Maintenance Program
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Well-maintained equipment is safe equipment. Our preventive
              maintenance program keeps every truck and trailer in peak
              operating condition.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {maintenanceItems.map((item, i) => (
              <div
                key={item.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-100 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* INCIDENT REPORTING                                             */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                Transparency
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-4">
                Incident Reporting & Response
              </h2>
              <div className="section-divider mx-auto mt-6" />
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10">
              <p className="text-neutral-600 leading-relaxed mb-6">
                In the event of any incident — no matter how minor — Fairway
                Logistics follows a structured reporting and response protocol
                designed to protect all parties, preserve evidence, and prevent
                recurrence.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Immediate Response",
                    description:
                      "Driver secures the scene, ensures personal safety, and contacts dispatch and emergency services as needed.",
                  },
                  {
                    step: "2",
                    title: "Documentation & Reporting",
                    description:
                      "Detailed incident reports filed within 24 hours. Photos, witness statements, and police reports collected and logged.",
                  },
                  {
                    step: "3",
                    title: "Investigation & Root Cause Analysis",
                    description:
                      "Safety Director conducts thorough investigation to determine root cause and contributing factors.",
                  },
                  {
                    step: "4",
                    title: "Corrective Action & Prevention",
                    description:
                      "Corrective measures implemented and shared company-wide. Policies and training updated as needed to prevent recurrence.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                      <span className="text-dark font-bold text-sm">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SAFETY METRICS                                                 */}
      {/* ============================================================= */}
      <section className="bg-dark-gradient py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              By The Numbers
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Our Safety Record
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <span className="text-4xl sm:text-5xl font-bold text-gold-gradient">
                  {stat.value}
                </span>
                <p className="text-neutral-400 text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Ship with a Carrier You Can Trust"
        description="Our commitment to safety means your freight is in the best hands. Experience the reliability of an asset-based carrier with an impeccable safety record."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
