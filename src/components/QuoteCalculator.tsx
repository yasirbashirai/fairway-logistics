"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Package,
  User,
  Mail,
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Truck,
  Thermometer,
  Weight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Types ───────────────────────────────────────────────────────── */

interface FormData {
  origin: string;
  destination: string;
  equipment: string;
  weight: string;
  freightClass: string;
  commodity: string;
  hazmat: boolean;
  tempControlled: boolean;
  liftgate: boolean;
  oversized: boolean;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  contactMethod: "phone" | "email" | "either";
}

const defaultForm: FormData = {
  origin: "",
  destination: "",
  equipment: "",
  weight: "",
  freightClass: "",
  commodity: "",
  hazmat: false,
  tempControlled: false,
  liftgate: false,
  oversized: false,
  fullName: "",
  company: "",
  email: "",
  phone: "",
  contactMethod: "either",
};

/* ── Popular routes ──────────────────────────────────────────────── */

const popularRoutes = [
  { origin: "Mobile, AL", destination: "Atlanta, GA" },
  { origin: "Mobile, AL", destination: "Houston, TX" },
  { origin: "Mobile, AL", destination: "New Orleans, LA" },
];

/* ── Equipment & freight class options ───────────────────────────── */

const equipmentOptions = [
  "Dry Van",
  "Flatbed",
  "Reefer",
  "Step Deck",
  "Oversized",
];

const freightClasses = [
  "Class 50",
  "Class 55",
  "Class 60",
  "Class 65",
  "Class 70",
  "Class 77.5",
  "Class 85",
  "Class 92.5",
  "Class 100",
  "Class 110",
  "Class 125",
  "Class 150",
  "Class 175",
  "Class 200",
  "Class 250",
  "Class 300",
  "Class 400",
  "Class 500",
];

/* ── Step labels ─────────────────────────────────────────────────── */

const steps = ["Route", "Cargo", "Details"];

/* ── Animation variants ──────────────────────────────────────────── */

const stepVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    transition: { duration: 0.25 },
  }),
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ── Component ───────────────────────────────────────────────────── */

export default function QuoteCalculator() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState<FormData>({ ...defaultForm });
  const [submitted, setSubmitted] = useState(false);

  /* Helpers */
  const update = (field: keyof FormData, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const goNext = () => {
    setDirection(1);
    if (step < 2) setStep(step + 1);
  };

  const goBack = () => {
    setDirection(-1);
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ ...defaultForm });
    setStep(0);
    setDirection(1);
    setSubmitted(false);
  };

  const applyRoute = (origin: string, destination: string) => {
    setForm((prev) => ({ ...prev, origin, destination }));
  };

  /* ── Shared input classes ──────────────────────────────────────── */
  const inputClass =
    "quote-input w-full bg-navy-800/60 border border-navy-600/50 rounded-xl px-4 py-3 pl-11 text-white placeholder-navy-400 focus:outline-none focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/30 transition-colors text-sm";
  const selectClass =
    "quote-input w-full bg-navy-800/60 border border-navy-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-400/60 focus:ring-1 focus:ring-gold-400/30 transition-colors text-sm appearance-none";
  const labelClass = "block text-navy-300 text-sm font-medium mb-1.5";
  const checkboxWrap =
    "flex items-center gap-3 px-4 py-3 rounded-xl border border-navy-700/50 bg-navy-800/30 hover:bg-navy-800/50 transition-colors cursor-pointer";

  return (
    <section id="quote" className="bg-navy-950 relative py-24 lg:py-32 overflow-hidden">
      {/* Line pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #C8A951 0px, #C8A951 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #C8A951 0px, #C8A951 1px, transparent 1px, transparent 60px)",
      }} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-gold-400 uppercase tracking-widest text-sm font-accent font-semibold">
            INSTANT QUOTE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
            Get Your Freight Quote in Minutes
          </h2>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto text-sm leading-relaxed">
            Fill out a few details below and our team will get back to you with a
            competitive quote — typically within 2 hours.
          </p>
        </ScrollReveal>

        {/* Glass card */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-gold-400/10 shadow-[0_0_60px_-15px_rgba(200,169,81,0.15)]">
            {submitted ? (
              /* ── Success state ────────────────────────────────────── */
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="text-center py-12"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-fwgreen-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-fwgreen-400" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  Quote Request Submitted!
                </h3>
                <p className="mt-3 text-navy-300 text-sm">
                  Our team will respond within 2 hours during business hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-navy-600 text-navy-300 hover:text-white hover:border-gold-400/40 transition-colors text-sm font-semibold"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <>
                {/* ── Step progress bar ─────────────────────────────── */}
                <div className="flex items-center justify-center mb-10">
                  {steps.map((label, i) => (
                    <div key={label} className="flex items-center">
                      {/* Circle */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            i < step
                              ? "bg-fwgreen-500 text-white"
                              : i === step
                              ? "bg-gold-400 text-navy-900"
                              : "bg-navy-700 text-navy-400"
                          }`}
                        >
                          {i < step ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span
                          className={`mt-1.5 text-xs font-medium ${
                            i <= step ? "text-gold-400" : "text-navy-500"
                          }`}
                        >
                          {label}
                        </span>
                      </div>

                      {/* Connector line */}
                      {i < steps.length - 1 && (
                        <div
                          className={`w-16 sm:w-24 h-0.5 mx-2 mb-5 rounded-full ${
                            i < step ? "bg-fwgreen-500" : "bg-navy-700"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* ── Step content ──────────────────────────────────── */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    {/* Step 1 — Route */}
                    {step === 0 && (
                      <div className="space-y-5">
                        {/* Origin */}
                        <div>
                          <label className={labelClass}>Origin</label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="text"
                              placeholder="City, State or ZIP"
                              value={form.origin}
                              onChange={(e) => update("origin", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Destination */}
                        <div>
                          <label className={labelClass}>Destination</label>
                          <div className="relative">
                            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="text"
                              placeholder="City, State or ZIP"
                              value={form.destination}
                              onChange={(e) =>
                                update("destination", e.target.value)
                              }
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Popular routes */}
                        <div>
                          <span className="text-navy-400 text-xs font-medium mb-2 block">
                            Popular routes
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {popularRoutes.map((r) => (
                              <button
                                key={r.destination}
                                onClick={() =>
                                  applyRoute(r.origin, r.destination)
                                }
                                className="px-3 py-1.5 rounded-full border border-navy-600/50 text-navy-300 text-xs hover:border-gold-400/40 hover:text-gold-400 transition-colors"
                              >
                                {r.origin} → {r.destination}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Equipment type */}
                        <div>
                          <label className={labelClass}>Equipment Type</label>
                          <select
                            value={form.equipment}
                            onChange={(e) =>
                              update("equipment", e.target.value)
                            }
                            className={selectClass}
                          >
                            <option value="">Select equipment type</option>
                            {equipmentOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Step 2 — Cargo */}
                    {step === 1 && (
                      <div className="space-y-5">
                        {/* Weight */}
                        <div>
                          <label className={labelClass}>Weight (lbs)</label>
                          <div className="relative">
                            <Weight className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="number"
                              placeholder="Approximate weight in pounds"
                              value={form.weight}
                              onChange={(e) => update("weight", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Freight class */}
                        <div>
                          <label className={labelClass}>Freight Class</label>
                          <select
                            value={form.freightClass}
                            onChange={(e) =>
                              update("freightClass", e.target.value)
                            }
                            className={selectClass}
                          >
                            <option value="">Select freight class</option>
                            {freightClasses.map((fc) => (
                              <option key={fc} value={fc}>
                                {fc}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Commodity */}
                        <div>
                          <label className={labelClass}>
                            Commodity Description
                          </label>
                          <div className="relative">
                            <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="text"
                              placeholder="Describe the commodity"
                              value={form.commodity}
                              onChange={(e) =>
                                update("commodity", e.target.value)
                              }
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Special requirements */}
                        <div>
                          <span className={labelClass}>
                            Special Requirements
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                            <label className={checkboxWrap}>
                              <input
                                type="checkbox"
                                checked={form.hazmat}
                                onChange={(e) =>
                                  update("hazmat", e.target.checked)
                                }
                                className="accent-gold-400"
                              />
                              <AlertCircle className="w-4 h-4 text-amber-400" />
                              <span className="text-navy-200 text-sm">
                                Hazmat
                              </span>
                            </label>

                            <label className={checkboxWrap}>
                              <input
                                type="checkbox"
                                checked={form.tempControlled}
                                onChange={(e) =>
                                  update("tempControlled", e.target.checked)
                                }
                                className="accent-gold-400"
                              />
                              <Thermometer className="w-4 h-4 text-sky-400" />
                              <span className="text-navy-200 text-sm">
                                Temperature Controlled
                              </span>
                            </label>

                            <label className={checkboxWrap}>
                              <input
                                type="checkbox"
                                checked={form.liftgate}
                                onChange={(e) =>
                                  update("liftgate", e.target.checked)
                                }
                                className="accent-gold-400"
                              />
                              <Truck className="w-4 h-4 text-navy-300" />
                              <span className="text-navy-200 text-sm">
                                Liftgate Required
                              </span>
                            </label>

                            <label className={checkboxWrap}>
                              <input
                                type="checkbox"
                                checked={form.oversized}
                                onChange={(e) =>
                                  update("oversized", e.target.checked)
                                }
                                className="accent-gold-400"
                              />
                              <Package className="w-4 h-4 text-navy-300" />
                              <span className="text-navy-200 text-sm">
                                Oversized
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3 — Contact Details */}
                    {step === 2 && (
                      <div className="space-y-5">
                        {/* Full name */}
                        <div>
                          <label className={labelClass}>Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="text"
                              placeholder="Your full name"
                              value={form.fullName}
                              onChange={(e) =>
                                update("fullName", e.target.value)
                              }
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Company */}
                        <div>
                          <label className={labelClass}>Company</label>
                          <div className="relative">
                            <Package className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="text"
                              placeholder="Company name"
                              value={form.company}
                              onChange={(e) =>
                                update("company", e.target.value)
                              }
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className={labelClass}>Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="email"
                              placeholder="you@company.com"
                              value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className={labelClass}>Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
                            <input
                              type="tel"
                              placeholder="(555) 123-4567"
                              value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Preferred contact method */}
                        <div>
                          <span className={labelClass}>
                            Preferred Contact Method
                          </span>
                          <div className="flex gap-4 mt-1">
                            {(
                              [
                                { val: "phone", label: "Phone" },
                                { val: "email", label: "Email" },
                                { val: "either", label: "Either" },
                              ] as const
                            ).map(({ val, label }) => (
                              <label
                                key={val}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="radio"
                                  name="contactMethod"
                                  value={val}
                                  checked={form.contactMethod === val}
                                  onChange={() =>
                                    update("contactMethod", val)
                                  }
                                  className="accent-gold-400"
                                />
                                <span className="text-navy-200 text-sm">
                                  {label}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* ── Navigation buttons ────────────────────────────── */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-navy-700/40">
                  {step > 0 ? (
                    <button
                      onClick={goBack}
                      className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 2 ? (
                    <button onClick={goNext} className="btn-primary">
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="btn-primary">
                      Get My Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
