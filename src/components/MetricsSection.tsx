"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Truck, CheckCircle, Headphones } from "lucide-react";

interface Metric {
  icon: typeof Clock;
  value: number;
  suffix: string;
  label: string;
}

const metrics: Metric[] = [
  { icon: Clock, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Truck, value: 500, suffix: "+", label: "Shipments Monthly" },
  { icon: CheckCircle, value: 98, suffix: "%", label: "On-Time Rate" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Operations" },
];

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <span className="metric-counter text-4xl sm:text-5xl font-bold text-gold-gradient">
      {active ? count : 0}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-navy-gradient py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`text-center ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-gold-400" />
                </div>
              </div>
              <AnimatedCounter
                target={m.value}
                suffix={m.suffix}
                active={inView}
              />
              <p className="text-navy-300 text-sm mt-2 font-medium">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
