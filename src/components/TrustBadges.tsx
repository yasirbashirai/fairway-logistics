import { ShieldCheck, FileCheck, Award, Truck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    label: "FMCSA Registered",
  },
  {
    icon: FileCheck,
    label: "Fully Insured",
  },
  {
    icon: Award,
    label: "Safety Certified",
  },
  {
    icon: Truck,
    label: "Asset-Based Carrier",
  },
];

interface TrustBadgesProps {
  variant?: "light" | "dark";
}

export default function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-10 sm:py-14 ${isDark ? "bg-dark-600" : "bg-neutral-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 group"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  isDark
                    ? "bg-gold-400/10 text-gold-400 group-hover:bg-gold-gradient group-hover:text-dark-700"
                    : "bg-gold-400/10 text-gold-400 group-hover:bg-gold-gradient group-hover:text-dark-700"
                }`}
              >
                <badge.icon className="w-5 h-5" />
              </div>
              <span
                className={`text-sm font-semibold ${
                  isDark ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
