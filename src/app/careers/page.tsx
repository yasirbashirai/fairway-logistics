"use client";

import { useState } from "react";
import {
  DollarSign,
  Heart,
  PiggyBank,
  Calendar,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  Truck,
  Headphones,
  Warehouse as WarehouseIcon,
  Handshake,
  CheckCircle,
  ChevronRight,
  Upload,
  Send,
  AlertCircle,
  Briefcase,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import TrustBadges from "@/components/TrustBadges";

/* ---------- Data ---------- */

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Industry-leading compensation packages with performance bonuses and regular pay reviews. We believe in rewarding hard work and dedication.",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description:
      "Comprehensive medical, dental, and vision coverage for you and your family. Multiple plan options to fit your needs and budget.",
  },
  {
    icon: PiggyBank,
    title: "401(k) Retirement",
    description:
      "Company-matched 401(k) retirement plan to help you build long-term financial security. Start saving for your future from day one.",
  },
  {
    icon: Calendar,
    title: "Paid Time Off",
    description:
      "Generous PTO policy including vacation days, sick leave, and paid holidays. We know rest and recovery makes better employees.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Clear advancement pathways, professional development support, and internal promotion priority. Grow your career as we grow our company.",
  },
  {
    icon: Users,
    title: "Family Culture",
    description:
      "We are a tight-knit team that treats every employee like family. Open-door management, team events, and a workplace built on mutual respect.",
  },
];

const openings = [
  {
    title: "CDL Class A Driver",
    location: "Mobile, AL",
    type: "Full-Time",
    description:
      "Join our company-owned fleet as a CDL Class A driver. Regional and OTR routes available with consistent miles, well-maintained equipment, and home time. Clean driving record and valid CDL-A with minimum 2 years experience required.",
  },
  {
    title: "Logistics Coordinator",
    location: "Mobile, AL",
    type: "Full-Time",
    description:
      "Coordinate shipments, manage dispatch operations, and ensure on-time delivery for our clients. Strong communication skills, attention to detail, and experience with TMS software preferred. Fast-paced environment with room to grow.",
  },
  {
    title: "Warehouse Associate",
    location: "Mobile, AL",
    type: "Full-Time",
    description:
      "Support our warehousing and cross-dock operations near the Port of Mobile. Responsibilities include loading, unloading, inventory management, and order staging. Forklift certification preferred but training available.",
  },
  {
    title: "Freight Broker Agent",
    location: "Mobile, AL / Remote",
    type: "Full-Time",
    description:
      "Build and manage customer relationships, negotiate rates, and coordinate freight movements through our brokerage division. Existing book of business preferred. Competitive commission structure with base salary.",
  },
];

const positions = [
  "CDL Class A Driver",
  "Logistics Coordinator",
  "Warehouse Associate",
  "Freight Broker Agent",
  "Other",
];

/* ---------- Component ---------- */

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    if (!formData.position) errs.position = "Select a position";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <PageHero
        title="Build Your Career at Fairway Logistics"
        subtitle="Join a growing, asset-based logistics company on the Gulf Coast. We are looking for driven professionals who want to build a career — not just fill a position."
        breadcrumbs={[{ label: "Careers" }]}
        backgroundImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80"
      />

      {/* WHY WORK HERE - BENEFITS GRID */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Why Fairway
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Why Work at Fairway Logistics?
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              We offer more than a paycheck. At Fairway, you get the benefits,
              culture, and growth opportunities that make a career worth
              building.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Open Positions
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
              Current Openings
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              We are growing and looking for talented people to join our team.
              Explore our current openings below.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openings.map((job, i) => (
              <div
                key={job.title}
                className={`bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-xl hover:border-gold/30 transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {job.title}
                  </h3>
                  <span className="text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full whitespace-nowrap">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {job.description}
                </p>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm hover:underline"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY CULTURE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
                  alt="Fairway Logistics team and fleet"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-2xl bg-gold/10" />
            </div>

            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Our Culture
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-6">
                More Than a Workplace —{" "}
                <span className="text-gold-gradient">A Team.</span>
              </h2>

              <div className="gold-border-left pl-6 mb-6">
                <p className="text-neutral-600 leading-relaxed text-lg">
                  At Fairway Logistics, we believe the best logistics companies
                  are built by people who are respected, supported, and given
                  the opportunity to grow.
                </p>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-6">
                We are not a faceless corporation. Fairway is a Gulf Coast
                company built by people who live and work in this community.
                Our team members are not employee numbers — they are the
                backbone of everything we do. From our drivers who represent
                us on the road every day, to our coordinators who keep
                operations running smoothly, to our warehouse team who handles
                freight with care — every person at Fairway matters.
              </p>

              <p className="text-neutral-600 leading-relaxed mb-8">
                We invest in our people because that is what builds a great
                company. Professional development, safety training, modern
                equipment, competitive compensation, and genuine respect for
                work-life balance are not perks at Fairway — they are how we
                operate. If you are looking for a place where your work is
                valued and your career can grow, we want to hear from you.
              </p>

              <div className="space-y-3">
                {[
                  "Small company culture, big company resources",
                  "Safety-first mentality in everything we do",
                  "Open communication with leadership",
                  "Investment in training and development",
                  "Community involvement and local roots",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-16 sm:py-24 bg-dark-gradient">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
              Apply Now
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Submit Your Application
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Interested in joining the Fairway team? Fill out the form below
              and our hiring team will be in touch.
            </p>
          </div>

          {submitted ? (
            <div className="bg-dark-light rounded-2xl border border-white/10 p-8 sm:p-12 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">
                Application Submitted!
              </h3>
              <p className="text-neutral-400 mb-6 max-w-md mx-auto">
                Thank you, {formData.name}. We have received your application
                and our hiring team will review it shortly. We will contact you
                if your qualifications match our current needs.
              </p>
              <p className="text-sm text-neutral-500">
                Questions? Call{" "}
                <a href="tel:+12517251929" className="text-gold hover:underline">
                  (251) 725-1929
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-dark-light rounded-2xl border border-white/10 p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:border-gold/50 focus:outline-none transition-colors"
                />
                {errors.name && <FieldError msg={errors.name} />}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:border-gold/50 focus:outline-none transition-colors"
                />
                {errors.email && <FieldError msg={errors.email} />}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(251) 555-0123"
                  value={formData.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 focus:border-gold/50 focus:outline-none transition-colors"
                />
                {errors.phone && <FieldError msg={errors.phone} />}
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Position of Interest <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => update("position", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm appearance-none focus:border-gold/50 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-dark">
                    Select a position
                  </option>
                  {positions.map((pos) => (
                    <option key={pos} value={pos} className="bg-dark">
                      {pos}
                    </option>
                  ))}
                </select>
                {errors.position && <FieldError msg={errors.position} />}
              </div>

              {/* Resume Upload Placeholder */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Resume / CV
                </label>
                <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-lg px-4 py-6 text-center cursor-pointer hover:border-gold/40 transition-colors">
                  <Upload className="w-6 h-6 text-neutral-500 mx-auto mb-2" />
                  <p className="text-sm text-neutral-400">
                    Click to upload your resume
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-neutral-300 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you would be a great fit for Fairway Logistics..."
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 resize-none focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold-gradient text-dark font-bold text-sm px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Join the Fairway Team?"
        description="Whether you are an experienced driver, a logistics professional, or looking to start a new career in freight, we want to hear from you."
        primaryButtonText="View Open Positions"
        primaryButtonHref="#apply"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}

/* Small inline error */
function FieldError({ msg }: { msg: string }) {
  return (
    <p className="flex items-center gap-1 text-red-400 text-xs mt-1">
      <AlertCircle className="w-3 h-3" />
      {msg}
    </p>
  );
}
