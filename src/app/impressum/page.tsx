import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum (Legal Notice)",
  description: "Angaben gemäß § 5 TMG für Google Developer Group on Campus Passau.",
};

export default function ImpressumPage() {
  return (
    <div className="py-12 sm:py-18 bg-white dark:bg-[#121316]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5F6368] dark:text-[#9AA0A6] hover:text-[#4285F4] dark:hover:text-blue-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202124] dark:text-[#F1F3F4] tracking-tight font-display">
            Impressum (Legal Notice)
          </h1>
          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1">
            Angaben gemäß § 5 TMG / Telemediengesetz
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-[#5F6368] dark:text-[#9AA0A6]">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Herausgeber / Chapter Information
            </h2>
            <p>
              <strong>{siteConfig.name}</strong>
              <br />
              Eine freiwillige, studentisch geleitete Hochschulgruppe an der Universität Passau.
              <br />
              c/o Universität Passau
              <br />
              Innstraße 41
              <br />
              94032 Passau, Deutschland
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Vertreten durch / Executive Leadership
            </h2>
            <p>
              Serhat Kumaş (GDG on Campus Lead)
              <br />
              Elena Weber (GDG Vice Lead)
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#4285F4] hover:underline">
                {siteConfig.email}
              </a>
              <br />
              Website:{" "}
              <a href={siteConfig.url} className="text-[#4285F4] hover:underline">
                {siteConfig.url}
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Verhältnis zu Google & Google Developer Groups
            </h2>
            <p>
              Google Developer Groups (GDG) on Campus ist eine weltweite Initiative von Google for Developers. 
              GDG on Campus Passau ist eine unabhängige, nicht-kommerzielle studentische Initiative. 
              Inhalte, Veröffentlichungen und Meinungen auf dieser Website stellen nicht zwingend die offiziellen Standpunkte von Google LLC dar.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Haftung für Inhalte und Links
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. 
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autoren bzw. des Chapter Leads.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
