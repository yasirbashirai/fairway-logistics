"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Search,
  CheckCircle,
  Clock,
  Truck,
  MapPin,
  Phone,
  CircleDot,
} from "lucide-react";

/* Demo tracking timeline data */
const trackingSteps = [
  {
    status: "Order Received",
    date: "Mar 10, 2026 - 9:00 AM",
    location: "",
    state: "completed" as const,
    icon: CheckCircle,
  },
  {
    status: "Picked Up",
    date: "Mar 10, 2026 - 2:30 PM",
    location: "Mobile, AL",
    state: "completed" as const,
    icon: Package,
  },
  {
    status: "In Transit",
    date: "Mar 11, 2026 - 8:15 AM",
    location: "Montgomery, AL",
    state: "active" as const,
    icon: Truck,
  },
  {
    status: "Out for Delivery",
    date: "Est. Mar 12, 2026",
    location: "",
    state: "upcoming" as const,
    icon: CircleDot,
  },
  {
    status: "Delivered",
    date: "Est. Mar 12, 2026",
    location: "",
    state: "upcoming" as const,
    icon: MapPin,
  },
];

/* Shimmer placeholder row */
function ShimmerRow() {
  return (
    <div className="flex items-start gap-4 py-4">
      <div className="w-8 h-8 rounded-full bg-navy-700/60 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div
          className="h-4 w-32 rounded bg-navy-700/60"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
        <div
          className="h-3 w-48 rounded bg-navy-700/40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite 0.2s",
          }}
        />
      </div>
    </div>
  );
}

export default function TrackingWidget() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);

  const handleTrack = () => {
    if (!trackingNumber.trim()) return;
    setIsLoading(true);
    setShowTimeline(false);

    /* Simulate loading, then show demo timeline */
    setTimeout(() => {
      setIsLoading(false);
      setShowTimeline(true);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleTrack();
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 max-w-xl w-full">
      {/* ── Header ── */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center">
          <Package className="w-5 h-5 text-gold-400" />
        </div>
        <h3 className="text-lg font-heading font-bold text-white">
          Track Your Shipment
        </h3>
      </div>

      {/* ── Input Row ── */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none" />
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter PRO# or BOL#"
            className="quote-input pl-10 focus:ring-2 focus:ring-gold-400/30"
          />
        </div>
        <button
          onClick={handleTrack}
          disabled={!trackingNumber.trim()}
          className="btn-primary px-5 py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
        >
          Track
        </button>
      </div>

      {/* ── Loading Shimmer ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 space-y-1 overflow-hidden"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <ShimmerRow key={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Demo Tracking Timeline ── */}
      <AnimatePresence>
        {showTimeline && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <div className="relative pl-8">
              {trackingSteps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === trackingSteps.length - 1;

                /* Line & dot colours based on state */
                const dotClasses =
                  step.state === "completed"
                    ? "bg-emerald-500 text-white"
                    : step.state === "active"
                      ? "bg-gold-400 text-navy-900 animate-pulse"
                      : "bg-navy-600 text-navy-400";

                const lineClasses =
                  step.state === "completed"
                    ? "bg-emerald-500/60"
                    : step.state === "active"
                      ? "bg-gold-400/40"
                      : "border-l-2 border-dashed border-navy-600 bg-transparent";

                return (
                  <motion.div
                    key={step.status}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.4, ease: "easeOut" as const }}
                    className="relative pb-6 last:pb-0"
                  >
                    {/* Connecting line */}
                    {!isLast && (
                      <span
                        className={`absolute left-[-20px] top-8 w-0.5 h-[calc(100%-16px)] ${
                          step.state === "upcoming"
                            ? "border-l-2 border-dashed border-navy-600"
                            : lineClasses
                        }`}
                      />
                    )}

                    {/* Dot / icon */}
                    <span
                      className={`absolute left-[-28px] top-1 w-7 h-7 rounded-full flex items-center justify-center ${dotClasses}`}
                    >
                      {step.state === "completed" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : step.state === "active" ? (
                        <CircleDot className="w-4 h-4" />
                      ) : (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                    </span>

                    {/* Content card */}
                    <div
                      className={`rounded-xl px-4 py-3 ${
                        step.state === "active"
                          ? "glass-card-gold"
                          : ""
                      }`}
                    >
                      <p className="font-semibold text-white text-sm">
                        {step.status}
                      </p>
                      <p className="text-sm text-navy-300 mt-0.5">
                        {step.date}
                      </p>
                      {step.location && (
                        <p className="flex items-center gap-1 text-xs text-navy-400 mt-1">
                          <MapPin className="w-3 h-3 text-gold-400" />
                          {step.location}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Bottom Info ── */}
            <div className="mt-6 pt-4 border-t border-navy-700/40 space-y-2">
              <a
                href="tel:+12517251929"
                className="flex items-center gap-2 text-sm text-navy-300 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                Need help? Call (251) 725-1929
              </a>
              <p className="text-xs text-navy-400">
                This is a demo. Log in for real-time tracking.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
