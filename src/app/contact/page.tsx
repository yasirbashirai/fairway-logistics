"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Building2,
  Truck,
  Headphones,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

/* ---------- Contact Info ---------- */
const contactDetails = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["456 Dauphin Street", "Mobile, AL 36602"],
    href: "https://maps.google.com/?q=456+Dauphin+Street+Mobile+AL+36602",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(251) 725-1929"],
    href: "tel:+12517251929",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@fairwaylogisticsllc.com"],
    href: "mailto:info@fairwaylogisticsllc.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Fri: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 12:00 PM", "Sunday: Closed"],
    href: undefined,
  },
];

/* ---------- Office Features ---------- */
const officeFeatures = [
  {
    icon: Building2,
    title: "Headquarters",
    description:
      "Our main office at 456 Dauphin Street serves as our operational headquarters, dispatch center, and customer service hub.",
  },
  {
    icon: Truck,
    title: "Fleet Operations",
    description:
      "Fleet management, driver dispatch, and equipment coordination are all handled from our Mobile, AL facility.",
  },
  {
    icon: Headphones,
    title: "24/7 Dispatch",
    description:
      "While our office hours are listed above, our dispatch team is available 24/7 for active shipment support and emergencies.",
  },
];

/* ---------- Form ---------- */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const subjects = [
  "General Inquiry",
  "Request a Quote",
  "Drayage Services",
  "Trucking Services",
  "Warehousing",
  "Carrier Partnership",
  "Billing / Invoicing",
  "Careers",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
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
        title="Contact Us"
        subtitle="Have questions about our logistics services? Need a freight quote? Our team is ready to help. Reach out today."
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* ============================================================= */}
      {/* CONTACT FORM + INFO (TWO COLUMN)                               */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT — Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Send Us a Message
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700 mb-6">
                Get in Touch
              </h2>

              {submitted ? (
                <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 sm:p-12 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-dark-700 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                    Thank you, {formData.name}. We&apos;ve received your message and
                    will get back to you within 1 business day.
                  </p>
                  <p className="text-sm text-neutral-500">
                    Need immediate help? Call{" "}
                    <a
                      href="tel:+12517251929"
                      className="text-gold-400 hover:underline font-semibold"
                    >
                      (251) 725-1929
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-dark-700 text-sm placeholder-neutral-400 focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-dark-700 text-sm placeholder-neutral-400 focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(251) 555-0123"
                        value={formData.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-dark-700 text-sm placeholder-neutral-400 focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-dark-700 text-sm appearance-none focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 text-dark-700 text-sm placeholder-neutral-400 focus:border-gold-400 focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gold-gradient text-dark-700 font-bold text-sm px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all duration-200"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT — Contact Info (2 cols) */}
            <div className="lg:col-span-2">
              <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Contact Information
              </p>
              <h2 className="text-2xl font-heading font-bold text-dark-700 mb-6">
                Reach Us Directly
              </h2>

              <div className="space-y-6 mb-8">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark-700 mb-1">
                        {detail.title}
                      </h3>
                      {detail.lines.map((line) =>
                        detail.href ? (
                          <a
                            key={line}
                            href={detail.href}
                            className="block text-sm text-neutral-600 hover:text-gold-400 transition-colors"
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-sm text-neutral-600">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="font-heading font-bold text-dark-700 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Request a Freight Quote", href: "/request-quote" },
                    { label: "Become a Carrier Partner", href: "/carrier-partners" },
                    { label: "View Our Services", href: "/gulf-coast-logistics" },
                    { label: "Career Opportunities", href: "/careers" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-gold-400 transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* GOOGLE MAPS                                                    */}
      {/* ============================================================= */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-10">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Location
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Find Us in Mobile, Alabama
            </h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
              Conveniently located on Dauphin Street in downtown Mobile, with
              easy access to the Port of Mobile, I-65, and I-10.
            </p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.5!2d-88.0435!3d30.6879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889a4d3a6de5e3f7%3A0x0!2s456+Dauphin+St%2C+Mobile%2C+AL+36602!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fairway Logistics LLC - 456 Dauphin Street, Mobile, AL 36602"
            />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* OFFICE DETAILS                                                 */}
      {/* ============================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Office
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
              Mobile, Alabama Headquarters
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {officeFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`bg-neutral-50 rounded-xl border border-neutral-100 p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up stagger-${i + 1}`}
              >
                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
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
        title="Let's Move Your Freight"
        description="Whether you need a quote, have questions, or want to discuss a logistics partnership, our team is ready to help."
        primaryButtonText="Request a Free Quote"
        primaryButtonHref="/request-quote"
        secondaryButtonText="Call (251) 725-1929"
        secondaryButtonHref="tel:+12517251929"
      />
    </>
  );
}
