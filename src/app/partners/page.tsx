import { Metadata } from "next";
import { getPartners, getCollaborationModels } from "@/services";
import { PartnerCard } from "@/components/cards/PartnerCard";
import { PartnerInquiryForm } from "@/components/partners/PartnerInquiryForm";
import { Building2, Handshake, Sparkles, Presentation, Trophy, Compass, UserCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Partners & Companies",
  description:
    "Collaborate with Google Developer Group on Campus Passau. Access high-performing talent in Computer Science, AI Engineering, and Technical Law at the University of Passau.",
};

export const revalidate = 60;

export default async function PartnersPage() {
  const [partners, models] = await Promise.all([
    getPartners(),
    getCollaborationModels(),
  ]);

  const companyPartners = partners.filter((p) => p.type === "company");
  const studentAndUniPartners = partners.filter((p) => p.type !== "company");

  const getModelIcon = (iconName: string) => {
    switch (iconName) {
      case "Presentation":
        return <Presentation className="w-5 h-5 text-[#4285F4]" />;
      case "Trophy":
        return <Trophy className="w-5 h-5 text-[#EA4335]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#FBBC04]" />;
      case "UsersCheck":
        return <UserCheck className="w-5 h-5 text-[#34A853]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#4285F4]" />;
    }
  };

  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. Hero & Collaboration Pitch */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#4285F4] dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Handshake className="w-3.5 h-3.5" />
            <span>Campus Partnerships</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Bridge with University of Passau Talent
          </h1>
          <p className="text-sm sm:text-base text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
            The University of Passau is renowned across Europe for its premier Computer Science and Law faculties. 
            Through GDG Passau, your organization connects directly with motivated Bachelor&apos;s and Master&apos;s builders in AI, Cloud, and Technical Law.
          </p>
        </div>

        {/* 2. Ways to Collaborate Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              Ways to Collaborate
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              Concrete partnership formats that deliver genuine value to both your team and our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.id}
                className="rounded-2xl bg-[#F8F9FA] dark:bg-[#1E1F23] border border-[#E8EAED] dark:border-[#2D2F34] p-6 space-y-3 hover:shadow-md transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                  style={{ backgroundColor: `${model.accent}15` }}
                >
                  {getModelIcon(model.icon)}
                </div>
                <h3 className="font-semibold text-base text-[#202124] dark:text-[#F1F3F4] font-display">
                  {model.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Section: Partner Companies & Industry Sponsors */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#E8EAED] dark:border-[#2D2F34] pb-4">
            <Building2 className="w-5 h-5 text-[#4285F4]" />
            <h2 className="text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              Industry Sponsors & Tech Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>

        {/* 4. Section: Partner Student Groups & University Initiatives */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#E8EAED] dark:border-[#2D2F34] pb-4">
            <Sparkles className="w-5 h-5 text-[#34A853]" />
            <h2 className="text-2xl font-bold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
              University Faculties & Campus Initiatives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentAndUniPartners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>

        {/* 5. "Partner With Us" Inquiry Form */}
        <section id="inquire" className="pt-6">
          <PartnerInquiryForm />
        </section>
      </div>
    </div>
  );
}
