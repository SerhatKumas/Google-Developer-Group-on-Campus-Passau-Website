import { siteConfig } from "@/config/site";

export function StatsStrip() {
  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "blue":
        return "#4285F4";
      case "red":
        return "#EA4335";
      case "yellow":
        return "#FBBC04";
      case "green":
      default:
        return "#34A853";
    }
  };

  return (
    <section className="border-b border-[#E8EAED] dark:border-[#2D2F34] bg-[#F8F9FA] dark:bg-[#1E1F23] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {siteConfig.stats.map((stat, idx) => {
            const accent = getAccentColor(stat.accent);
            return (
              <div
                key={idx}
                className="relative bg-white dark:bg-[#121316] rounded-2xl p-6 border border-[#E8EAED] dark:border-[#2D2F34] shadow-xs text-center flex flex-col items-center justify-center group hover:shadow-md transition-shadow"
              >
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-b-full transition-opacity opacity-75 group-hover:opacity-100"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display mb-1"
                  style={{ color: accent }}
                >
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#5F6368] dark:text-[#9AA0A6]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
