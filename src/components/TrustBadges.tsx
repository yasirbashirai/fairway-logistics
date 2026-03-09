import { Shield, ShieldCheck, Award, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    label: "FMCSA Registered",
  },
  {
    icon: ShieldCheck,
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
  variant: "light" | "dark";
}

export default function TrustBadges({ variant }: TrustBadgesProps) {
  const isDark = variant === "dark";

  return (
    <section className={`py-6 ${isDark ? "bg-dark-700" : "bg-neutral-50"}`}>
      {/* Top border line */}
      <div className="h-px bg-gold-400/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-gold-400" />
              </div>
              <span
                className={`text-sm font-semibold ${
                  isDark ? "text-white" : "text-dark-700"
                }`}
              >
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border line */}
      <div className="h-px bg-gold-400/30" />
    </section>
  );
}
