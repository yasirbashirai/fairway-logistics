"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Fairway Logistics has been a game-changer for our manufacturing supply chain. Their asset-based fleet ensures our raw materials arrive on time, every time. We have reduced our shipping delays by 40% since partnering with them.",
    name: "Marcus Johnson",
    role: "Supply Chain Director",
    company: "Gulf Coast Manufacturing Co.",
    rating: 5,
  },
  {
    text: "The team at Fairway handles our port drayage with precision and professionalism. Their knowledge of the Port of Mobile operations is unmatched, and their communication throughout the process gives us complete visibility.",
    name: "Sarah Williams",
    role: "Logistics Manager",
    company: "Southern Import Group",
    rating: 5,
  },
  {
    text: "We needed a reliable partner for oversized construction equipment transport and Fairway delivered — literally. Their specialized hauling capabilities and permit expertise saved us thousands on our latest project.",
    name: "David Chen",
    role: "Operations VP",
    company: "Coastal Builders Inc.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % testimonials.length),
    []
  );

  const prev = () =>
    setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  /* Auto-rotate */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark-700">
            What Our Clients Say
          </h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Testimonial card */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 relative">
            {/* Quote icon */}
            <Quote className="w-10 h-10 text-gold-400/20 absolute top-6 right-6" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-gold-400 text-gold-400"
                />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-dark-700 text-lg leading-relaxed mb-6 animate-fade-in" key={active}>
              &ldquo;{t.text}&rdquo;
            </p>

            {/* Author */}
            <div>
              <p className="font-heading font-bold text-dark-700">{t.name}</p>
              <p className="text-sm text-neutral-500">
                {t.role}, {t.company}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:border-gold-400 hover:text-gold-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-gold-400 w-6"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-500 hover:border-gold-400 hover:text-gold-400 transition-colors"
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
