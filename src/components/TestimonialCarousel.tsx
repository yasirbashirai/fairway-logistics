"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    text: "Fairway has been a game-changer for our supply chain. Their asset-based fleet ensures our raw materials arrive on time, every time. We\u2019ve reduced shipping delays by 40%.",
    name: "Marcus Johnson",
    role: "Supply Chain Director",
    company: "Gulf Coast Manufacturing Co.",
    rating: 5,
  },
  {
    text: "The team at Fairway handles our port drayage with precision. Their Port of Mobile knowledge is unmatched, and their communication gives us complete visibility.",
    name: "Sarah Williams",
    role: "Logistics Manager",
    company: "Southern Import Group",
    rating: 5,
  },
  {
    text: "We needed reliable oversized equipment transport and Fairway delivered. Their specialized hauling capabilities saved us thousands on our latest project.",
    name: "David Chen",
    role: "Operations VP",
    company: "Coastal Builders Inc.",
    rating: 5,
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function TestimonialCarousel() {
  const [[active, direction], setActive] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () =>
      setActive(([prev]) => [(prev + 1) % testimonials.length, 1]),
    []
  );

  const prev = () =>
    setActive(([p]) => [
      (p - 1 + testimonials.length) % testimonials.length,
      -1,
    ]);

  const goTo = (i: number) =>
    setActive(([prev]) => [i, i > prev ? 1 : -1]);

  /* Auto-rotate every 6 seconds, pause on hover */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section className="bg-navy-radial py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              What Our Clients Say
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>
        </ScrollReveal>

        {/* Testimonial card */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="glass-card rounded-3xl p-8 sm:p-12 border-l-4 border-l-gold-400 relative">
                  {/* Decorative quote mark */}
                  <span className="text-8xl text-gold-400/10 absolute top-6 right-8 font-serif leading-none select-none pointer-events-none">
                    &ldquo;
                  </span>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg sm:text-xl text-white italic leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-heading font-bold text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-navy-300">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass-card-light flex items-center justify-center text-navy-300 hover:border-gold-400 hover:text-gold-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-gold-400 w-6"
                      : "bg-navy-600 w-2.5 hover:bg-navy-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass-card-light flex items-center justify-center text-navy-300 hover:border-gold-400 hover:text-gold-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
