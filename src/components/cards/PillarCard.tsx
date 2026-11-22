import React from "react";
import { Users, Scale, Hammer, Briefcase, HeartHandshake, Sparkles } from "lucide-react";

interface PillarCardProps {
  title: string;
  tagline: string;
  description: string;
  accent: string;
  iconName: string;
}

export function PillarCard({
  title,
  tagline,
  description,
  accent,
  iconName,
}: PillarCardProps) {
  const renderIcon = () => {
    const props = { className: "w-6 h-6", style: { color: accent } };
    switch (iconName) {
      case "Users":
        return <Users {...props} />;
      case "Scale":
        return <Scale {...props} />;
      case "Hammer":
        return <Hammer {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "HeartHandshake":
        return <HeartHandshake {...props} />;
      case "Sparkles":
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="group relative rounded-2xl bg-white dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Accent corner glow */}
      <div
        className="absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
        style={{ backgroundColor: accent }}
      />

      {/* Top Accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
        style={{ backgroundColor: accent }}
      />

      <div>
        {/* Icon & Tagline */}
        <div className="flex items-center justify-between gap-4 mb-4 pt-1">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs"
            style={{ backgroundColor: `${accent}15` }}
          >
            {renderIcon()}
          </div>
          <span
            className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
            style={{ backgroundColor: `${accent}15`, color: accent }}
          >
            {tagline}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-[#202124] dark:text-[#F1F3F4] tracking-tight mb-2 font-display">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
