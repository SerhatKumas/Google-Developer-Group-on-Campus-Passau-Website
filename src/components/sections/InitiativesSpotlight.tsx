import Link from "next/link";
import { initiativesData } from "@/data/initiatives";
import { LayoutDashboard, BookOpen, ShieldCheck, GitBranch, ArrowUpRight } from "lucide-react";

export function InitiativesSpotlight() {
  const getIcon = (icon: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (icon) {
      case "LayoutDashboard":
        return <LayoutDashboard {...props} />;
      case "BookOpen":
        return <BookOpen {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "GitBranch":
      default:
        return <GitBranch {...props} />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-[#121316] border-b border-[#E8EAED] dark:border-[#2D2F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-[#FBBC04] dark:text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Current Chapter Initiatives
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            We don&apos;t just host presentations; our student squads build functional tools and publications that enrich the University of Passau ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {initiativesData.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.badgeColor}15` }}
                  >
                    {getIcon(item.icon, item.badgeColor)}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                    style={{
                      borderColor: `${item.badgeColor}40`,
                      color: item.badgeColor,
                    }}
                  >
                    {item.status}
                  </span>
                </div>

                <span className="text-xs font-semibold text-[#5F6368] dark:text-[#9AA0A6]">
                  {item.tagline}
                </span>
                <h3 className="font-semibold text-xl text-[#202124] dark:text-[#F1F3F4] tracking-tight mt-1 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#E8EAED] dark:border-[#2D2F34]">
                <Link
                  href={item.githubUrl || "/contact"}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] dark:text-blue-400 hover:text-[#1A73E8]"
                >
                  <span>{item.linkText || "Learn More"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
