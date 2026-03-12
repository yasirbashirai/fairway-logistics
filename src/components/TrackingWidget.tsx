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
  ArrowRight,
  AlertTriangle,
  Info,
  Calendar,
  Weight,
  Boxes,
  Route,
  Building2,
  Play,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────────────────────── */

type StepState = "completed" | "active" | "upcoming";

interface TrackingStep {
  status: string;
  date: string;
  location: string;
  state: StepState;
}

interface Shipment {
  trackingNumber: string;
  shipper: string;
  consignee: string;
  originCity: string;
  destinationCity: string;
  shipmentType: string;
  weight: string;
  pieceCount: number;
  dimensions: string;
  currentStatus: string;
  estimatedDelivery: string;
  serviceType: string;
  timeline: TrackingStep[];
}

/* ──────────────────────────────────────────────────────────────────────────
   Demo shipment database
   ────────────────────────────────────────────────────────────────────────── */

const demoShipments: Record<string, Shipment> = {
  "FW-2026-001": {
    trackingNumber: "FW-2026-001",
    shipper: "Gulf Coast Steel & Supply",
    consignee: "Montgomery Fabrication Co.",
    originCity: "Mobile, AL",
    destinationCity: "Montgomery, AL",
    shipmentType: "FTL",
    weight: "18,500 lbs",
    pieceCount: 24,
    dimensions: '48" x 40" x 48" (palletized)',
    currentStatus: "In Transit",
    estimatedDelivery: "Mar 13, 2026",
    serviceType: "Full Truckload - Dry Van",
    timeline: [
      { status: "Order Received", date: "Mar 10, 2026 - 9:00 AM", location: "Mobile, AL", state: "completed" },
      { status: "Picked Up", date: "Mar 10, 2026 - 2:30 PM", location: "Mobile, AL", state: "completed" },
      { status: "In Transit", date: "Mar 11, 2026 - 8:15 AM", location: "Greenville, AL", state: "active" },
      { status: "Out for Delivery", date: "Est. Mar 13, 2026", location: "", state: "upcoming" },
      { status: "Delivered", date: "Est. Mar 13, 2026", location: "", state: "upcoming" },
    ],
  },
  "FW-2026-002": {
    trackingNumber: "FW-2026-002",
    shipper: "Port of New Orleans Terminal",
    consignee: "Pensacola Distribution Center",
    originCity: "New Orleans, LA",
    destinationCity: "Pensacola, FL",
    shipmentType: "Drayage",
    weight: "42,000 lbs",
    pieceCount: 1,
    dimensions: "40' HC Container (MSCU-4827165)",
    currentStatus: "Delivered",
    estimatedDelivery: "Mar 9, 2026",
    serviceType: "Port Drayage - Container",
    timeline: [
      { status: "Order Received", date: "Mar 7, 2026 - 10:00 AM", location: "New Orleans, LA", state: "completed" },
      { status: "Container Released", date: "Mar 7, 2026 - 3:45 PM", location: "Port of New Orleans", state: "completed" },
      { status: "Picked Up", date: "Mar 8, 2026 - 7:30 AM", location: "New Orleans, LA", state: "completed" },
      { status: "In Transit", date: "Mar 8, 2026 - 12:00 PM", location: "Biloxi, MS", state: "completed" },
      { status: "Delivered", date: "Mar 9, 2026 - 9:15 AM", location: "Pensacola, FL", state: "completed" },
    ],
  },
  "FW-2026-003": {
    trackingNumber: "FW-2026-003",
    shipper: "Gulfport Marine Supply",
    consignee: "Mobile Bay Contractors",
    originCity: "Gulfport, MS",
    destinationCity: "Mobile, AL",
    shipmentType: "LTL",
    weight: "3,200 lbs",
    pieceCount: 8,
    dimensions: '36" x 40" x 42" (per pallet)',
    currentStatus: "Picked Up",
    estimatedDelivery: "Mar 14, 2026",
    serviceType: "Less Than Truckload",
    timeline: [
      { status: "Order Received", date: "Mar 11, 2026 - 8:00 AM", location: "Gulfport, MS", state: "completed" },
      { status: "Picked Up", date: "Mar 12, 2026 - 10:30 AM", location: "Gulfport, MS", state: "active" },
      { status: "In Transit", date: "Est. Mar 13, 2026", location: "", state: "upcoming" },
      { status: "Out for Delivery", date: "Est. Mar 14, 2026", location: "", state: "upcoming" },
      { status: "Delivered", date: "Est. Mar 14, 2026", location: "", state: "upcoming" },
    ],
  },
  "FW-2026-004": {
    trackingNumber: "FW-2026-004",
    shipper: "Alabama Industrial Parts",
    consignee: "Biloxi Manufacturing Inc.",
    originCity: "Mobile, AL",
    destinationCity: "Biloxi, MS",
    shipmentType: "FTL",
    weight: "22,000 lbs",
    pieceCount: 30,
    dimensions: '48" x 40" x 52" (palletized)',
    currentStatus: "Out for Delivery",
    estimatedDelivery: "Mar 12, 2026",
    serviceType: "Full Truckload - Dry Van",
    timeline: [
      { status: "Order Received", date: "Mar 10, 2026 - 7:30 AM", location: "Mobile, AL", state: "completed" },
      { status: "Picked Up", date: "Mar 10, 2026 - 1:00 PM", location: "Mobile, AL", state: "completed" },
      { status: "In Transit", date: "Mar 11, 2026 - 6:45 AM", location: "Pascagoula, MS", state: "completed" },
      { status: "Out for Delivery", date: "Mar 12, 2026 - 7:00 AM", location: "Biloxi, MS", state: "active" },
      { status: "Delivered", date: "Est. Mar 12, 2026", location: "", state: "upcoming" },
    ],
  },
  "FW-2026-005": {
    trackingNumber: "FW-2026-005",
    shipper: "Baldwin County Lumber Co.",
    consignee: "NOLA Builders Warehouse",
    originCity: "Baldwin County, AL",
    destinationCity: "New Orleans, LA",
    shipmentType: "Flatbed",
    weight: "35,000 lbs",
    pieceCount: 12,
    dimensions: "Mixed lumber bundles - oversized",
    currentStatus: "Order Received",
    estimatedDelivery: "Mar 16, 2026",
    serviceType: "Flatbed - Open Deck",
    timeline: [
      { status: "Order Received", date: "Mar 12, 2026 - 8:00 AM", location: "Baldwin County, AL", state: "active" },
      { status: "Picked Up", date: "Est. Mar 13, 2026", location: "", state: "upcoming" },
      { status: "In Transit", date: "Est. Mar 14, 2026", location: "", state: "upcoming" },
      { status: "Out for Delivery", date: "Est. Mar 16, 2026", location: "", state: "upcoming" },
      { status: "Delivered", date: "Est. Mar 16, 2026", location: "", state: "upcoming" },
    ],
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   Shimmer placeholder row
   ────────────────────────────────────────────────────────────────────────── */

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

/* ──────────────────────────────────────────────────────────────────────────
   Status badge helper
   ────────────────────────────────────────────────────────────────────────── */

function statusColor(status: string) {
  switch (status) {
    case "Delivered":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "In Transit":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    case "Out for Delivery":
      return "bg-gold-400/20 text-gold-400 border border-gold-400/30";
    case "Picked Up":
      return "bg-purple-500/20 text-purple-400 border border-purple-500/30";
    case "Order Received":
      return "bg-navy-700/40 text-navy-300 border border-navy-600/40";
    default:
      return "bg-navy-700/40 text-navy-300 border border-navy-600/40";
  }
}

/* ──────────────────────────────────────────────────────────────────────────
   Main component
   ────────────────────────────────────────────────────────────────────────── */

export default function TrackingWidget() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<"found" | "not-found" | null>(null);
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [activeTab, setActiveTab] = useState<"timeline" | "details">("timeline");

  /* Look up the entered tracking number against the demo database */
  const handleTrack = () => {
    const input = trackingNumber.trim().toUpperCase();
    if (!input) return;

    setIsLoading(true);
    setResult(null);
    setShipment(null);
    setActiveTab("timeline");

    /* Simulate network loading, then resolve */
    setTimeout(() => {
      const found = demoShipments[input] ?? null;
      setShipment(found);
      setResult(found ? "found" : "not-found");
      setIsLoading(false);
    }, 1500);
  };

  /* Auto-fill a demo tracking number */
  const handleTryDemo = () => {
    const demoKeys = Object.keys(demoShipments);
    const random = demoKeys[Math.floor(Math.random() * demoKeys.length)];
    setTrackingNumber(random);
    /* Reset previous results so user can press Track */
    setResult(null);
    setShipment(null);
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
      <div className="flex flex-col sm:flex-row gap-3">
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
        <div className="flex gap-2">
          <button
            onClick={handleTrack}
            disabled={!trackingNumber.trim() || isLoading}
            className="btn-primary px-5 py-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none flex-1 sm:flex-none"
          >
            Track
          </button>
          <button
            onClick={handleTryDemo}
            disabled={isLoading}
            className="btn-secondary px-4 py-2.5 text-sm flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed flex-1 sm:flex-none"
          >
            <Play className="w-3.5 h-3.5" />
            Try Demo
          </button>
        </div>
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

      {/* ── Not Found State ── */}
      <AnimatePresence>
        {result === "not-found" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-white text-sm">
                      Shipment Not Found
                    </p>
                    <p className="text-sm text-navy-300 mt-1">
                      We couldn&apos;t locate a shipment with tracking number{" "}
                      <span className="text-white font-mono font-medium">
                        {trackingNumber.trim().toUpperCase()}
                      </span>
                      . Please check the format and try again.
                    </p>
                  </div>

                  <div className="rounded-lg bg-navy-800/50 p-3">
                    <p className="text-xs text-navy-400 mb-2 flex items-center gap-1.5">
                      <Info className="w-3 h-3" />
                      Try one of these demo tracking numbers:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["FW-2026-001", "FW-2026-003", "FW-2026-004"].map(
                        (num) => (
                          <button
                            key={num}
                            onClick={() => {
                              setTrackingNumber(num);
                              setResult(null);
                              setShipment(null);
                            }}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-navy-700/60 text-gold-400 hover:bg-navy-700 transition-colors cursor-pointer"
                          >
                            {num}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <a
                    href="tel:+12517251929"
                    className="flex items-center gap-2 text-sm text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    Need help? Call (251) 725-1929
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Found: Shipment Results ── */}
      <AnimatePresence>
        {result === "found" && shipment && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            {/* ── Shipment Summary Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-navy-700/40 bg-navy-800/30 p-4 mb-5"
            >
              {/* Route heading */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{shipment.originCity}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-navy-400 hidden sm:block shrink-0" />
                <div className="flex items-center gap-2 text-white font-semibold text-sm sm:pl-0 pl-6">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 sm:block hidden" />
                  <span className="sm:hidden text-navy-400 mr-1">to</span>
                  <span>{shipment.destinationCity}</span>
                </div>
              </div>

              {/* Key info row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-navy-300">
                <span className="font-mono text-navy-400">
                  PRO# {shipment.trackingNumber}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-navy-700/60 text-navy-200 font-medium">
                  {shipment.shipmentType}
                </span>
                <span className="flex items-center gap-1">
                  <Weight className="w-3 h-3 text-gold-400" />
                  {shipment.weight}
                </span>
                <span className="flex items-center gap-1">
                  <Boxes className="w-3 h-3 text-gold-400" />
                  {shipment.pieceCount} pcs
                </span>
              </div>

              {/* Status badge and ETA */}
              <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-navy-700/30">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor(shipment.currentStatus)}`}
                >
                  {shipment.currentStatus}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-navy-300">
                  <Calendar className="w-3 h-3 text-gold-400" />
                  Est. Delivery: {shipment.estimatedDelivery}
                </span>
              </div>
            </motion.div>

            {/* ── Tab Switcher ── */}
            <div className="flex gap-1 mb-5 p-1 rounded-lg bg-navy-800/40">
              {(["timeline", "details"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab
                      ? "bg-gold-400/15 text-gold-400"
                      : "text-navy-400 hover:text-navy-200"
                  }`}
                >
                  {tab === "timeline" ? "Timeline" : "Details"}
                </button>
              ))}
            </div>

            {/* ── Timeline Tab ── */}
            <AnimatePresence mode="wait">
              {activeTab === "timeline" && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative pl-8">
                    {shipment.timeline.map((step, index) => {
                      const isLast = index === shipment.timeline.length - 1;

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
                          transition={{
                            delay: index * 0.15,
                            duration: 0.4,
                            ease: "easeOut" as const,
                          }}
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
                              step.state === "active" ? "glass-card-gold" : ""
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

                  {/* Estimated delivery callout */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-5 rounded-lg border border-gold-400/20 bg-gold-400/5 px-4 py-3 flex items-center gap-3"
                  >
                    <Calendar className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Estimated Delivery
                      </p>
                      <p className="text-xs text-navy-300">
                        {shipment.estimatedDelivery}
                        {shipment.currentStatus === "Delivered"
                          ? " — Delivered"
                          : ` — ${shipment.destinationCity}`}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* ── Details Tab ── */}
              {activeTab === "details" && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {/* Shipper / Consignee */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-navy-800/30 border border-navy-700/30 p-4">
                      <p className="text-[10px] uppercase tracking-wider text-navy-400 mb-1">
                        Shipper
                      </p>
                      <p className="text-sm text-white font-medium">
                        {shipment.shipper}
                      </p>
                      <p className="text-xs text-navy-300 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-gold-400" />
                        {shipment.originCity}
                      </p>
                    </div>
                    <div className="rounded-xl bg-navy-800/30 border border-navy-700/30 p-4">
                      <p className="text-[10px] uppercase tracking-wider text-navy-400 mb-1">
                        Consignee
                      </p>
                      <p className="text-sm text-white font-medium">
                        {shipment.consignee}
                      </p>
                      <p className="text-xs text-navy-300 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {shipment.destinationCity}
                      </p>
                    </div>
                  </div>

                  {/* Shipment info grid */}
                  <div className="rounded-xl bg-navy-800/30 border border-navy-700/30 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-navy-400 mb-3">
                      Shipment Details
                    </p>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      <DetailRow
                        icon={<Route className="w-3.5 h-3.5 text-gold-400" />}
                        label="Service Type"
                        value={shipment.serviceType}
                      />
                      <DetailRow
                        icon={<Truck className="w-3.5 h-3.5 text-gold-400" />}
                        label="Mode"
                        value={shipment.shipmentType}
                      />
                      <DetailRow
                        icon={<Weight className="w-3.5 h-3.5 text-gold-400" />}
                        label="Weight"
                        value={shipment.weight}
                      />
                      <DetailRow
                        icon={<Boxes className="w-3.5 h-3.5 text-gold-400" />}
                        label="Pieces"
                        value={String(shipment.pieceCount)}
                      />
                      <div className="col-span-2">
                        <DetailRow
                          icon={<Building2 className="w-3.5 h-3.5 text-gold-400" />}
                          label="Dimensions"
                          value={shipment.dimensions}
                        />
                      </div>
                    </div>
                  </div>

                  {/* PRO number */}
                  <div className="rounded-xl bg-navy-800/30 border border-navy-700/30 p-4">
                    <p className="text-[10px] uppercase tracking-wider text-navy-400 mb-1">
                      PRO Number
                    </p>
                    <p className="text-sm text-white font-mono font-medium">
                      {shipment.trackingNumber}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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

/* ──────────────────────────────────────────────────────────────────────────
   Detail row sub-component
   ────────────────────────────────────────────────────────────────────────── */

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-navy-400 flex items-center gap-1 mb-0.5">
        {icon}
        {label}
      </p>
      <p className="text-sm text-white">{value}</p>
    </div>
  );
}
