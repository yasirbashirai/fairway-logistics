import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "40%", label: "Reduction in Delays" },
  { value: "$250K", label: "Annual Savings" },
  { value: "99.2%", label: "On-Time Delivery" },
];

export default function CaseStudy() {
  return (
    <section className="bg-navy-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left column — Text ── */}
          <div>
            {/* Eyebrow */}
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">
              CASE STUDY
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Gulf Coast Manufacturing Co.
            </h2>

            {/* Challenge */}
            <div className="gold-border-left pl-5 mb-6">
              <p className="text-navy-300 leading-relaxed">
                <span className="font-semibold text-white">Challenge:</span>{" "}
                Needed to reduce supply chain delays and shipping costs for raw
                materials from Port of Mobile.
              </p>
            </div>

            {/* Solution */}
            <div className="gold-border-left pl-5 mb-8">
              <p className="text-navy-300 leading-relaxed">
                <span className="font-semibold text-white">Solution:</span>{" "}
                Implemented dedicated drayage fleet with real-time tracking and
                optimized routing.
              </p>
            </div>

            {/* Result metric cards */}
            <div className="flex flex-wrap gap-4 mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-card-light rounded-xl px-5 py-4 text-center min-w-[120px] flex-1"
                >
                  <p className="text-2xl font-heading font-bold text-gold-gradient mb-1">
                    {m.value}
                  </p>
                  <p className="text-xs text-navy-300">{m.label}</p>
                </div>
              ))}
            </div>

            {/* CTA link */}
            <Link
              href="#"
              className="text-gold-400 font-semibold inline-flex items-center gap-1 hover:underline"
            >
              Read Full Case Study &rarr;
            </Link>
          </div>

          {/* ── Right column — Image ── */}
          <div className="relative">
            {/* Gold accent border behind the image */}
            <div className="absolute -inset-1 rounded-2xl border border-gold-400/20 translate-x-1 translate-y-1 pointer-events-none" />

            <Image
              src="/images/trucks.jpg"
              alt="Fairway Logistics fleet trucks"
              width={720}
              height={480}
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
