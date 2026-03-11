"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Handshake,
  DollarSign,
  Truck,
  Shield,
  Fuel,
  Smartphone,
  MapPin,
  CheckCircle,
  ArrowRight,
  ClipboardList,
  UserCheck,
  FileCheck,
  Send,
  Clock,
  AlertCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

/* ---------- Benefits ---------- */
const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay & Quick Settlement",
    description:
      "Industry-leading rates with quick pay options available. Standard payment within 30 days, or opt for quick pay within 7 days.",
  },
  {
    icon: Truck,
    title: "Consistent Freight",
    description:
      "Steady lane opportunities across the Gulf Coast with dedicated freight options for reliable partners. No empty miles searching for loads.",
  },
  {
    icon: Fuel,
    title: "Fuel Discount Program",
    description:
      "Access our fuel discount network and save on every gallon at major truck stops and fuel stations throughout the Southeast.",
  },
  {
    icon: Smartphone,
    title: "Modern Technology",
    description:
      "User-friendly carrier portal for load booking, document upload, payment tracking, and real-time communication with dispatch.",
  },
  {
    icon: Shield,
    title: "Reliable Partnership",
    description:
      "We treat our carrier partners as an extension of our team. Dedicated support, fair treatment, and mutual respect on every load.",
  },
  {
    icon: MapPin,
    title: "Gulf Coast Lane Expertise",
    description:
      "We know the region better than anyone. Get loads that match your preferred lanes with efficient routing and minimal deadhead.",
  },
];

/* ---------- Requirements ---------- */
const requirements = [
  "Active FMCSA operating authority (MC number)",
  "Minimum 1 year of operating history",
  "Satisfactory safety rating or unrated (no conditional or unsatisfactory)",
  "Valid, current DOT number",
  "Minimum $1,000,000 auto liability insurance",
  "Minimum $100,000 cargo insurance",
  "Workers compensation coverage (where applicable)",
  "No more than 3 moving violations in past 3 years",
  "Clean drug and alcohol testing history",
  "ELD compliant with FMCSA mandate",
];

/* ---------- Onboarding Steps ---------- */
const onboardingSteps = [
  {
    icon: ClipboardList,
    title: "Submit Application",
    description:
      "Fill out our carrier application form with your company details, MC number, equipment information, and preferred lanes.",
  },
  {
    icon: FileCheck,
    title: "Verification & Vetting",
    description:
      "Our team verifies your operating authority, insurance, safety record, and references. This typically takes 24-48 hours.",
  },
  {
    icon: UserCheck,
    title: "Carrier Agreement",
    description:
      "Once approved, we'll send a carrier agreement outlining rates, payment terms, and operational expectations for review and signature.",
  },
  {
    icon: Send,
    title: "Start Hauling",
    description:
      "You're set up in our system and ready to receive load offers. Your dedicated dispatcher will match you with available freight.",
  },
];

/* ---------- Form Types ---------- */
interface CarrierFormData {
  companyName: string;
  mcNumber: string;
  dotNumber: string;
  equipmentTypes: string;
  lanesCovered: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  fleetSize: string;
  message: string;
}

const initialFormData: CarrierFormData = {
  companyName: "",
  mcNumber: "",
  dotNumber: "",
  equipmentTypes: "",
  lanesCovered: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  fleetSize: "",
  message: "",
};

export default function CarrierPartnersPage() {
  const [formData, setFormData] = useState<CarrierFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof CarrierFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof CarrierFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof CarrierFormData, string>> = {};
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    if (!formData.mcNumber.trim()) errs.mcNumber = "MC number is required";
    if (!formData.contactName.trim()) errs.contactName = "Contact name is required";
    if (!formData.contactEmail.trim()) {
      errs.contactEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      errs.contactEmail = "Enter a valid email";
    }
    if (!formData.contactPhone.trim()) errs.contactPhone = "Phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <PageHero
        title="Carrier Partners Program"
        subtitle="Join our network of trusted carriers and access consistent Gulf Coast freight, competitive pay, and a partnership built on respect."
        breadcrumbs={[{ label: "Carrier Partners" }]}
        backgroundImage="/images/truck-road.jpg"
      />

      {/* ============================================================= */}
      {/* PARTNER BENEFITS                                               */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Why Partner With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Carrier Partner Benefits
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              We value our carrier partners and invest in relationships that
              benefit both sides. Here&apos;s what you get when you haul with
              Fairway Logistics.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-navy-900 rounded-xl border border-navy-800 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* REQUIREMENTS                                                   */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Qualifications
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Requirements to Join
              </h2>

              <p className="text-navy-300 leading-relaxed mb-8">
                We maintain high standards for our carrier network to ensure
                safety, reliability, and service quality for our clients. To join
                the Fairway Logistics carrier network, you must meet the
                following requirements:
              </p>

              <div className="space-y-3">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-200">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/trucks.jpg"
                  alt="Carrier partner trucks in Fairway Logistics fleet"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* ONBOARDING PROCESS                                             */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Getting Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Onboarding Process
            </h2>
            <p className="text-navy-400 mt-4 max-w-2xl mx-auto">
              Getting set up as a Fairway Logistics carrier partner is
              straightforward. Most carriers are approved and hauling within 48
              hours.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((step, i) => (
              <div
                key={step.title}
                className={`relative bg-navy-900 rounded-xl border border-navy-800 p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                {/* Step number badge */}
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-navy-300 leading-relaxed">
                  {step.description}
                </p>
                {/* Connector line */}
                {i < onboardingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6">
                    <ArrowRight className="w-6 h-6 text-gold-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* TECHNOLOGY & TOOLS                                             */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/warehouse.jpg"
                  alt="Logistics technology and carrier tools"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:order-1">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Carrier Tools
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
                Technology & Tools Provided
              </h2>

              <p className="text-navy-300 leading-relaxed mb-8">
                We provide our carrier partners with modern tools to make hauling
                with Fairway as efficient and hassle-free as possible.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Carrier Portal",
                    description:
                      "Online dashboard for load booking, document upload, payment tracking, and communication.",
                  },
                  {
                    title: "Mobile App Access",
                    description:
                      "Accept loads, upload BOLs, and update status from your phone while on the road.",
                  },
                  {
                    title: "Electronic Document Exchange",
                    description:
                      "Digital BOLs, rate confirmations, and PODs — eliminating paper delays and lost documents.",
                  },
                  {
                    title: "Real-Time Load Board",
                    description:
                      "Dedicated load board with available freight matching your equipment and preferred lanes.",
                  },
                ].map((tool) => (
                  <div
                    key={tool.title}
                    className="bg-navy-950 rounded-lg border border-navy-800 p-4"
                  >
                    <h4 className="font-heading font-bold text-white mb-1">
                      {tool.title}
                    </h4>
                    <p className="text-sm text-navy-300">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* PAYMENT TERMS                                                  */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Get Paid
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Payment Terms
            </h2>
            <div className="section-divider mx-auto mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-navy-900 rounded-xl border border-navy-800 p-6">
                <Clock className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Standard Pay
                </h3>
                <p className="text-3xl font-bold text-gold-gradient mb-2">
                  30 Days
                </p>
                <p className="text-sm text-navy-300">
                  Net 30 payment from invoice receipt with no factoring fees.
                </p>
              </div>

              <div className="bg-navy-950 rounded-xl border border-gold/30 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
                <DollarSign className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Quick Pay
                </h3>
                <p className="text-3xl font-bold text-gold-gradient mb-2">
                  7 Days
                </p>
                <p className="text-sm text-navy-300">
                  Expedited payment within 7 days for a small processing fee.
                </p>
              </div>

              <div className="bg-navy-900 rounded-xl border border-navy-800 p-6">
                <Send className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  Direct Deposit
                </h3>
                <p className="text-3xl font-bold text-gold-gradient mb-2">
                  ACH
                </p>
                <p className="text-sm text-navy-300">
                  Payments sent directly to your bank account via ACH transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* APPLICATION FORM                                               */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-navy-950" id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Apply Now
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Carrier Partner Application
            </h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              Ready to haul with Fairway Logistics? Fill out the application
              below and our carrier relations team will be in touch within 24
              hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-navy-900 rounded-2xl border border-white/10 p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-fwgreen-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Application Submitted!
              </h3>
              <p className="text-navy-300 mb-6 max-w-md mx-auto">
                Thank you, {formData.companyName}. Our carrier relations team will
                review your application and contact you within 24 hours.
              </p>
              <p className="text-sm text-navy-400">
                Questions? Call{" "}
                <a href="tel:+12517251929" className="text-gold-400 hover:underline">
                  (251) 725-1929
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-navy-900 rounded-2xl border border-white/10 p-6 sm:p-8 max-w-3xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company Name */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your trucking company"
                    value={formData.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                  {errors.companyName && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.companyName}
                    </p>
                  )}
                </div>

                {/* MC Number */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    MC Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="MC-XXXXXXX"
                    value={formData.mcNumber}
                    onChange={(e) => update("mcNumber", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                  {errors.mcNumber && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.mcNumber}
                    </p>
                  )}
                </div>

                {/* DOT Number */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    DOT Number
                  </label>
                  <input
                    type="text"
                    placeholder="DOT-XXXXXXX"
                    value={formData.dotNumber}
                    onChange={(e) => update("dotNumber", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                </div>

                {/* Fleet Size */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Fleet Size
                  </label>
                  <select
                    value={formData.fleetSize}
                    onChange={(e) => update("fleetSize", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm appearance-none"
                  >
                    <option value="" className="bg-navy-950">Select fleet size</option>
                    <option value="1-5" className="bg-navy-950">1-5 trucks</option>
                    <option value="6-20" className="bg-navy-950">6-20 trucks</option>
                    <option value="21-50" className="bg-navy-950">21-50 trucks</option>
                    <option value="50+" className="bg-navy-950">50+ trucks</option>
                  </select>
                </div>

                {/* Equipment Types */}
                <div className="sm:col-span-2">
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Equipment Types
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Dry Van, Flatbed, Reefer, Chassis"
                    value={formData.equipmentTypes}
                    onChange={(e) => update("equipmentTypes", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                </div>

                {/* Lanes Covered */}
                <div className="sm:col-span-2">
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Preferred Lanes / Coverage Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Mobile to Atlanta, Gulf Coast regional"
                    value={formData.lanesCovered}
                    onChange={(e) => update("lanesCovered", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Contact Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                  {errors.contactName && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.contactName}
                    </p>
                  )}
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.contactPhone}
                    onChange={(e) => update("contactPhone", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                  {errors.contactPhone && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.contactPhone}
                    </p>
                  )}
                </div>

                {/* Contact Email */}
                <div className="sm:col-span-2">
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="dispatch@yourcompany.com"
                    value={formData.contactEmail}
                    onChange={(e) => update("contactEmail", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500"
                  />
                  {errors.contactEmail && (
                    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.contactEmail}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-sm text-navy-200 mb-1.5">
                    Additional Information
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us anything else about your operation..."
                    value={formData.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-navy-500 resize-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-gold-gradient text-white font-bold text-sm px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all duration-200"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTASection
        title="Ready to Partner with Fairway Logistics?"
        description="Join our growing network of trusted carriers. Consistent freight, competitive pay, and a team that treats you like a partner."
        primaryButtonText="Apply Now"
        primaryButtonHref="#apply"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
