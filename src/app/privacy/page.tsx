import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung (Privacy Policy)",
  description: "Datenschutzerklärung und GDPR-Konformität von GDG on Campus Passau.",
};

export default function PrivacyPage() {
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
            Datenschutzerklärung (Privacy Policy)
          </h1>
          <p className="text-xs sm:text-sm text-[#5F6368] dark:text-[#9AA0A6] mt-1">
            Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO (EU GDPR)
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-6 text-[#5F6368] dark:text-[#9AA0A6]">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Als Initiative an einer renommierten Universität mit Schwerpunkt auf Informationstechnologie und Rechtsinformatik nehmen wir den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften der EU-Datenschutz-Grundverordnung (DSGVO).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <strong>{siteConfig.name}</strong>
              <br />
              c/o Universität Passau, Innstraße 41, 94032 Passau
              <br />
              E-Mail:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#4285F4] hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              <strong>Kontakt- und Partnerschaftsformulare:</strong> Wenn Sie uns per Kontaktformular oder Partnerschaftsanfrage Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung an Dritte weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p>
              <strong>Server-Log-Dateien:</strong> Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (z.B. Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage, IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              4. Externe Plattformen & Google Bevy
            </h2>
            <p>
              Für Event-Registrierungen und offizielle Mitgliedschaftsausweise verlinken wir teilweise auf Google Bevy (die offizielle GDG-Community-Plattform) oder Google Forms. Bei der Nutzung dieser externen Dienste gelten die Datenschutzbestimmungen von Google LLC bzw. Bevy Labs Inc.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15–20 DSGVO). Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
