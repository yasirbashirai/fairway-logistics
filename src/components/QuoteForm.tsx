"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, AlertCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FormData {
  /* Step 1 — Shipment */
  origin: string;
  destination: string;
  freightType: string;
  equipmentNeeds: string;
  /* Step 2 — Cargo */
  weight: string;
  dimensions: string;
  commodity: string;
  specialRequirements: string;
  hazmat: boolean;
  /* Step 3 — Contact */
  fullName: string;
  company: string;
  email: string;
  phone: string;
  preferredContact: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  origin: "",
  destination: "",
  freightType: "",
  equipmentNeeds: "",
  weight: "",
  dimensions: "",
  commodity: "",
  specialRequirements: "",
  hazmat: false,
  fullName: "",
  company: "",
  email: "",
  phone: "",
  preferredContact: "",
  additionalNotes: "",
};

const freightTypes = [
  "Full Truckload (FTL)",
  "Less Than Truckload (LTL)",
  "Drayage",
  "Flatbed",
  "Refrigerated",
  "Other",
];

const contactMethods = ["Phone", "Email", "Either"];

/* ------------------------------------------------------------------ */
/*  Step Configuration                                                 */
/* ------------------------------------------------------------------ */

const steps = [
  { num: 1, label: "Shipment" },
  { num: 2, label: "Cargo" },
  { num: 3, label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  Shared Styles                                                      */
/* ------------------------------------------------------------------ */

const inputClass =
  "w-full bg-dark-700 border border-neutral-600 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-gold-400 focus:ring-1 focus:ring-gold-400/30 transition";

const labelClass = "text-sm font-semibold text-neutral-300 mb-1.5 block";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  /* Update a text field */
  const update = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  /* Per-step validation */
  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.origin.trim()) errs.origin = "Origin is required";
      if (!formData.destination.trim()) errs.destination = "Destination is required";
      if (!formData.freightType) errs.freightType = "Select a freight type";
    }

    if (step === 2) {
      if (!formData.weight.trim()) errs.weight = "Weight is required";
      if (!formData.commodity.trim()) errs.commodity = "Commodity description is required";
    }

    if (step === 3) {
      if (!formData.fullName.trim()) errs.fullName = "Full name is required";
      if (!formData.email.trim()) {
        errs.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errs.email = "Enter a valid email address";
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

  const resetForm = () => {
    setFormData(initialFormData);
    setStep(1);
    setSubmitted(false);
    setErrors({});
  };

  /* ---------------------------------------------------------------- */
  /*  Success State                                                    */
  /* ---------------------------------------------------------------- */

  if (submitted) {
    return (
      <div className="bg-dark-600 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto border border-neutral-700 text-center">
        {/* Green checkmark circle */}
        <div className="w-20 h-20 bg-fwgreen-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
          Quote Request Submitted!
        </h3>
        <p className="text-neutral-400 mb-2 max-w-lg mx-auto leading-relaxed">
          Thank you, {formData.fullName}. Our logistics team will review your
          shipment details and respond within 2 business hours.
        </p>
        <p className="text-sm text-neutral-500 mb-8">
          Need immediate assistance? Call{" "}
          <a href="tel:+12517251929" className="text-gold-400 hover:underline">
            (251) 725-1929
          </a>
        </p>

        <button
          onClick={resetForm}
          className="bg-gold-gradient text-dark-700 font-bold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-gold-400/20 transition-all"
        >
          Submit Another
        </button>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Form                                                             */
  /* ---------------------------------------------------------------- */

  return (
    <form
      className="quote-form bg-dark-600 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto border border-neutral-700"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* ---- Progress Bar ---- */}
      <div className="flex items-center justify-center mb-10">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step > s.num
                    ? "bg-fwgreen-500 text-white"
                    : step === s.num
                    ? "bg-gold-400 text-dark-700"
                    : "bg-neutral-600 text-neutral-400"
                }`}
              >
                {step > s.num ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  s.num
                )}
              </div>
              <span
                className={`mt-2 text-xs font-semibold transition-colors ${
                  step >= s.num ? "text-white" : "text-neutral-500"
                }`}
              >
                {s.label}
              </span>
            </div>

            {/* Connecting line */}
            {i < steps.length - 1 && (
              <div className="w-16 sm:w-24 h-0.5 mx-3 mb-6 rounded-full overflow-hidden bg-neutral-600">
                <div
                  className={`h-full bg-fwgreen-500 transition-all duration-500 ${
                    step > s.num ? "w-full" : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ---- Step 1: Shipment Details ---- */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          <div className="mb-6">
            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Shipment Details
            </h3>
            <p className="text-sm text-neutral-400">
              Tell us where your freight needs to go.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Origin */}
            <div>
              <label className={labelClass}>
                Origin <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                placeholder="City, State or Zip"
                value={formData.origin}
                onChange={(e) => update("origin", e.target.value)}
                className={inputClass}
              />
              {errors.origin && <FieldError msg={errors.origin} />}
            </div>

            {/* Destination */}
            <div>
              <label className={labelClass}>
                Destination <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                placeholder="City, State or Zip"
                value={formData.destination}
                onChange={(e) => update("destination", e.target.value)}
                className={inputClass}
              />
              {errors.destination && <FieldError msg={errors.destination} />}
            </div>
          </div>

          {/* Freight Type */}
          <div>
            <label className={labelClass}>
              Freight Type <span className="text-gold-400">*</span>
            </label>
            <select
              value={formData.freightType}
              onChange={(e) => update("freightType", e.target.value)}
              className={inputClass + " appearance-none"}
            >
              <option value="" className="bg-dark-700">
                Select freight type
              </option>
              {freightTypes.map((ft) => (
                <option key={ft} value={ft} className="bg-dark-700">
                  {ft}
                </option>
              ))}
            </select>
            {errors.freightType && <FieldError msg={errors.freightType} />}
          </div>

          {/* Equipment Needs */}
          <div>
            <label className={labelClass}>Equipment Needs</label>
            <input
              type="text"
              placeholder="e.g. Liftgate, Pallet Jack, etc."
              value={formData.equipmentNeeds}
              onChange={(e) => update("equipmentNeeds", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      )}

      {/* ---- Step 2: Cargo Details ---- */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-in">
          <div className="mb-6">
            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Cargo Details
            </h3>
            <p className="text-sm text-neutral-400">
              Provide details about your cargo for an accurate quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Weight */}
            <div>
              <label className={labelClass}>
                Weight (lbs) <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 42,000"
                value={formData.weight}
                onChange={(e) => update("weight", e.target.value)}
                className={inputClass}
              />
              {errors.weight && <FieldError msg={errors.weight} />}
            </div>

            {/* Dimensions */}
            <div>
              <label className={labelClass}>Dimensions</label>
              <input
                type="text"
                placeholder="e.g. 48' x 8' x 9'"
                value={formData.dimensions}
                onChange={(e) => update("dimensions", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          {/* Commodity Description */}
          <div>
            <label className={labelClass}>
              Commodity Description <span className="text-gold-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Automotive parts, dry goods, electronics"
              value={formData.commodity}
              onChange={(e) => update("commodity", e.target.value)}
              className={inputClass}
            />
            {errors.commodity && <FieldError msg={errors.commodity} />}
          </div>

          {/* Special Requirements */}
          <div>
            <label className={labelClass}>Special Requirements</label>
            <textarea
              rows={3}
              placeholder="Temperature-controlled, oversize, time-sensitive, etc."
              value={formData.specialRequirements}
              onChange={(e) => update("specialRequirements", e.target.value)}
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Hazmat Checkbox */}
          <div className="flex items-center gap-3 pt-1">
            <input
              id="hazmat"
              type="checkbox"
              checked={formData.hazmat}
              onChange={(e) => update("hazmat", e.target.checked)}
              className="w-5 h-5 rounded border-neutral-600 bg-dark-700 text-gold-400 focus:ring-gold-400/30 focus:ring-offset-0 accent-gold-400"
            />
            <label htmlFor="hazmat" className="text-sm font-semibold text-neutral-300 cursor-pointer">
              This shipment contains hazardous materials (Hazmat)
            </label>
          </div>
        </div>
      )}

      {/* ---- Step 3: Contact Information ---- */}
      {step === 3 && (
        <div className="space-y-5 animate-fade-in">
          <div className="mb-6">
            <h3 className="text-xl font-heading font-bold text-white mb-1">
              Contact Information
            </h3>
            <p className="text-sm text-neutral-400">
              How can we reach you with your quote?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className={labelClass}>
                Full Name <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={inputClass}
              />
              {errors.fullName && <FieldError msg={errors.fullName} />}
            </div>

            {/* Company Name */}
            <div>
              <label className={labelClass}>Company Name</label>
              <input
                type="text"
                placeholder="Your company"
                value={formData.company}
                onChange={(e) => update("company", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div>
              <label className={labelClass}>
                Email <span className="text-gold-400">*</span>
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
              {errors.email && <FieldError msg={errors.email} />}
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass}>
                Phone <span className="text-gold-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="(251) 555-0123"
                value={formData.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputClass}
              />
              {errors.phone && <FieldError msg={errors.phone} />}
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className={labelClass}>Preferred Contact Method</label>
            <select
              value={formData.preferredContact}
              onChange={(e) => update("preferredContact", e.target.value)}
              className={inputClass + " appearance-none"}
            >
              <option value="" className="bg-dark-700">
                Select preference
              </option>
              {contactMethods.map((m) => (
                <option key={m} value={m} className="bg-dark-700">
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className={labelClass}>Additional Notes</label>
            <textarea
              rows={3}
              placeholder="Anything else we should know about your shipment?"
              value={formData.additionalNotes}
              onChange={(e) => update("additionalNotes", e.target.value)}
              className={inputClass + " resize-none"}
            />
          </div>
        </div>
      )}

      {/* ---- Navigation Buttons ---- */}
      <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-700">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors px-4 py-3 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-2 bg-gold-gradient text-dark-700 font-bold px-8 py-3 rounded-lg w-full sm:w-auto justify-center hover:shadow-lg hover:shadow-gold-400/20 transition-all"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-gold-gradient text-dark-700 font-bold px-8 py-3 rounded-lg w-full sm:w-auto justify-center hover:shadow-lg hover:shadow-gold-400/20 transition-all"
          >
            Submit Quote Request
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Field Error (inline validation message)                            */
/* ------------------------------------------------------------------ */

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="flex items-center gap-1 text-red-400 text-xs mt-1.5">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {msg}
    </p>
  );
}
