"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Award,
  CheckCircle,
  ChevronDown,
  Shield,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.5 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with continuous smooth zoom animation */}
      <div className="absolute inset-0 hero-zoom">
        <Image
          src="/images/hero.jpg"
          alt="Fairway truck at port at sunset"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative gold glow circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />

      {/* Dot pattern overlay */}
      <div className="dot-pattern absolute inset-0" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side — copy & CTAs */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-gold-400/5 text-gold-400 font-accent uppercase tracking-widest text-xs">
                <Shield className="w-3.5 h-3.5" />
                Asset-Based Logistics — Nationwide Coverage
              </span>
            </motion.div>

            {/* Main heading — compact single-line fit */}
            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1]"
            >
              Nationwide Freight.{" "}
              <span className="text-gold-gradient">Delivered with Precision.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-navy-200 max-w-xl leading-relaxed"
            >
              Fairway Logistics is an asset-based carrier and national freight
              broker. Trucking, heavy haul, drayage, and bonded warehousing —
              headquartered in Mobile, AL with nationwide coverage.
            </motion.p>

            {/* CTA buttons — removed Track Shipment */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link href="/request-quote" className="btn-primary">
                Get Instant Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="tel:+12517251929"
                className="btn-secondary"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side — floating stats card */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="glass-card p-8 rounded-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" as const,
              }}
            >
              {/* Card heading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Performance Metrics
                </h3>
              </div>

              {/* Stat rows */}
              <div className="space-y-0">
                <div className="flex items-center justify-between py-4 border-b border-navy-700/50">
                  <span className="text-navy-300 text-sm font-medium">
                    Years Experience
                  </span>
                  <span className="text-gold-gradient font-accent text-4xl font-bold">
                    15+
                  </span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-navy-700/50">
                  <span className="text-navy-300 text-sm font-medium">
                    Monthly Shipments
                  </span>
                  <span className="text-gold-gradient font-accent text-4xl font-bold">
                    500+
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <span className="text-navy-300 text-sm font-medium">
                    On-Time Delivery
                  </span>
                  <span className="text-gold-gradient font-accent text-4xl font-bold">
                    98%
                  </span>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="mt-6 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-300 text-sm font-medium">
                  FMCSA Registered &bull; Fully Insured
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-navy-400 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>
      </div>

      {/* Gold gradient line at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </section>
  );
}
