"use client";

import { useState } from "react";
import {
  Package,
  Truck,
  User,
  Check,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  /* Step 1 — Shipment */
  origin: string;
  destination: string;
  freightType: string;
  /* Step 2 — Cargo */
  weight: string;
  dimensions: string;
  specialRequirements: string;
  /* Step 3 — Contact */
  name: string;
  email: string;
  phone: string;
  company: string;
}

const initialFormData: FormData = {
  origin: "",
  destination: "",
  freightType: "",
  weight: "",
  dimensions: "",
  specialRequirements: "",
  name: "",
  email: "",
  phone: "",
  company: "",
};

const freightTypes = [
  "Full Truckload (FTL)",
  "Less Than Truckload (LTL)",
  "Container Drayage",
  "Flatbed / Specialized",
  "Refrigerated",
  "Oversize / Overweight",
  "Hazmat",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  /* Validation per step */
  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.origin.trim()) errs.origin = "Origin is required";
      if (!formData.destination.trim()) errs.destination = "Destination is required";
      if (!formData.freightType) errs.freightType = "Select a freight type";
    }

    if (step === 2) {
      if (!formData.weight.trim()) errs.weight = "Weight is required";
    }

    if (step === 3) {
      if (!formData.name.trim()) errs.name = "Name is required";
      if (!formData.email.trim()) {
        errs.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Enter a valid email";
      }
      if (!formData.phone.trim()) errs.phone = "Phone number is required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validate()) setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  /* Step config */
  const steps = [
    { num: 1, label: "Shipment", icon: Truck },
    { num: 2, label: "Cargo", icon: Package },
    { num: 3, label: "Contact", icon: User },
  ];

  /* ---- Success state ---- */
  if (submitted) {
    return (
      <div className="bg-dark-light rounded-2xl border border-white/10 p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          Quote Request Submitted!
        </h3>
        <p className="text-neutral-400 mb-6 max-w-md mx-auto">
          Thank you, {formData.name}. Our logistics team will review your
          shipment details and get back to you within 2 business hours.
        </p>
        <p className="text-sm text-neutral-500">
          Need immediate assistance? Call{" "}
          <a href="tel:+12517251929" className="text-gold hover:underline">
            (251) 725-1929
          </a>
        </p>
      </div>
    );
  }

  /* ---- Form ---- */
  return (
    <div className="quote-form bg-dark-light rounded-2xl border border-white/10 overflow-hidden max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="px-6 sm:px-8 pt-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center flex-1">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step >= s.num
                      ? "bg-gold-gradient text-dark"
                      : "bg-white/10 text-neutral-500"
                  }`}
                >
                  {step > s.num ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <s.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`hidden sm:block text-sm font-medium transition-colors ${
                    step >= s.num ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 mx-3">
                  <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gold-gradient transition-all duration-500 ${
                        step > s.num ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form body */}
      <div className="px-6 sm:px-8 pb-8">
        {/* Step 1 — Shipment Details */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              Shipment Details
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Tell us where your freight needs to go.
            </p>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Origin <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="City, State or Zip"
                value={formData.origin}
                onChange={(e) => update("origin", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.origin && <FieldError msg={errors.origin} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Destination <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="City, State or Zip"
                value={formData.destination}
                onChange={(e) => update("destination", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.destination && <FieldError msg={errors.destination} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Freight Type <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.freightType}
                onChange={(e) => update("freightType", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm appearance-none"
              >
                <option value="" className="bg-dark">
                  Select freight type
                </option>
                {freightTypes.map((ft) => (
                  <option key={ft} value={ft} className="bg-dark">
                    {ft}
                  </option>
                ))}
              </select>
              {errors.freightType && <FieldError msg={errors.freightType} />}
            </div>
          </div>
        )}

        {/* Step 2 — Cargo Details */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              Cargo Details
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              Provide details about your cargo so we can give you the best quote.
            </p>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Estimated Weight (lbs) <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 42,000"
                value={formData.weight}
                onChange={(e) => update("weight", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.weight && <FieldError msg={errors.weight} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Dimensions (L x W x H)
              </label>
              <input
                type="text"
                placeholder="e.g. 48' x 8' x 9'"
                value={formData.dimensions}
                onChange={(e) => update("dimensions", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Special Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Hazmat, temperature-controlled, oversize, etc."
                value={formData.specialRequirements}
                onChange={(e) => update("specialRequirements", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500 resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 3 — Contact Info */}
        {step === 3 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="text-lg font-heading font-bold text-white mb-1">
              Contact Information
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              How can we reach you with your quote?
            </p>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.name && <FieldError msg={errors.name} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.email && <FieldError msg={errors.email} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="(251) 555-0123"
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
              {errors.phone && <FieldError msg={errors.phone} />}
            </div>

            <div>
              <label className="block text-sm text-neutral-300 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={(e) => update("company", e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-neutral-500"
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-8">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors px-4 py-2.5 rounded-lg hover:bg-white/5"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-gold-gradient text-dark font-bold text-sm px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-gold-gradient text-dark font-bold text-sm px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/20 transition-all"
            >
              Submit Quote Request
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
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
