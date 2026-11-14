import type { ReactNode } from "react";

function DatenschutzSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#E9E5DF] bg-white p-6 sm:p-8 md:p-10">
      <div className="mb-5 flex items-start gap-4">
        <span className="pt-1 text-sm font-medium tracking-widest text-[#B18D70]">
          {number}
        </span>
        <h2 className="text-xl font-semibold leading-snug text-[#102033] sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-3 text-m leading-6 text-[#525B65]">
        {children}
      </div>
    </section>
  );
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#102033]">
      {/* Page header */}
      <section className="border-b border-[#E9E5DF] px-5 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl mt-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#B18D70]">
            INFRAVANTIS 3D
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Datenschutzerklärung
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#66707A] sm:text-lg sm:leading-8">
            Informationen zum Schutz Ihrer personenbezogenen Daten und zur
            Verarbeitung Ihrer Daten beim Besuch unserer Website.
          </p>

          <div className="mt-8 h-px w-20 bg-[#B18D70]" />
        </div>
      </section>

      {/* Privacy policy */}
      <div className="px-5 py-10 sm:px-8 sm:py-14 md:py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          <DatenschutzSection number="01" title="Datenschutz auf einen Blick">
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen Überblick darüber, was mit
              Ihren personenbezogenen Daten geschieht, wenn Sie diese Website
              besuchen.
            </p>
            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>

            <h3>Verantwortliche Stelle</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>

            <div className="rounded-xl bg-[#F8F7F4] p-5 sm:p-6">
              <p className="font-semibold text-[#102033]">INFRAVANTIS 3D</p>
              <p>Edina Usanovic</p>
              <p>Pauline-Bünhove-Straße 47</p>
              <p>48268 Greven</p>
              <p>Deutschland</p>
              <p className="mt-4">
                Telefon: <a href="tel:+4915154447639">0151 54447639</a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:usanovic@infravantis3d.de">
                  usanovic@infravantis3d.de
                </a>
              </p>
            </div>

            <p>
              Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung
              personenbezogener Daten.
            </p>
          </DatenschutzSection>

          <DatenschutzSection number="02" title="Hosting der Website">
            <p>Diese Website wird bei einem externen Dienstleister gehostet:</p>
            <p className="font-semibold text-[#102033]">GoDaddy</p>
            <p>
              Beim Besuch dieser Website können durch den Hostinganbieter
              insbesondere folgende Daten verarbeitet werden:
            </p>
            <ul>
              <li>IP-Adresse des verwendeten Endgeräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite oder Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>technische Fehler- und Sicherheitsinformationen</li>
            </ul>
            <p>
              Diese Daten werden verarbeitet, um die Website technisch
              bereitzustellen, die Stabilität und Sicherheit zu gewährleisten
              sowie Angriffe und Missbrauch erkennen zu können.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
              DSGVO. Unser berechtigtes Interesse liegt im sicheren und
              zuverlässigen Betrieb unserer Website.
            </p>
            <p>
              Soweit personenbezogene Daten im Auftrag verarbeitet werden,
              erfolgt dies auf Grundlage eines Vertrages über die
              Auftragsverarbeitung gemäß Art. 28 DSGVO.
            </p>
            <p>
              Bei einer Übermittlung personenbezogener Daten in Staaten
              außerhalb der Europäischen Union oder des Europäischen
              Wirtschaftsraums erfolgt die Übermittlung nur unter Beachtung der
              gesetzlichen Voraussetzungen, insbesondere auf Grundlage eines
              Angemessenheitsbeschlusses oder geeigneter Garantien.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung durch GoDaddy finden
              Sie in den Datenschutzinformationen des Anbieters.
            </p>
          </DatenschutzSection>

          <DatenschutzSection
            number="03"
            title="SSL- beziehungsweise TLS-Verschlüsselung"
          >
            <p>
              Diese Website verwendet aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- beziehungsweise
              TLS-Verschlüsselung.
            </p>
            <p>
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers mit „https://“ beginnt und ein
              Schlosssymbol angezeigt wird.
            </p>
            <p>
              Bei aktivierter Verschlüsselung können Daten, die Sie an uns
              übermitteln, grundsätzlich nicht ohne Weiteres von Dritten
              mitgelesen werden.
            </p>
          </DatenschutzSection>

          <DatenschutzSection number="04" title="Kontaktaufnahme">
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten
              wir die von Ihnen eingegebenen Angaben. Dazu können insbesondere
              folgende Daten gehören:
            </p>
            <ul>
              <li>Name</li>
              <li>Unternehmen</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Betreff</li>
              <li>Inhalt Ihrer Nachricht</li>
              <li>Datum und Uhrzeit der Übermittlung</li>
              <li>technische Verbindungsdaten</li>
            </ul>
            <p>
              Die Daten werden zur Bearbeitung Ihrer Anfrage und für mögliche
              Anschlussfragen verwendet.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO, wenn Ihre Anfrage mit der Anbahnung oder Durchführung eines
              Vertrages zusammenhängt.
            </p>
            <p>
              In allen anderen Fällen erfolgt die Verarbeitung auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in
              der sachgerechten Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Soweit Sie ausdrücklich in eine Verarbeitung eingewilligt haben,
              erfolgt die Verarbeitung zusätzlich auf Grundlage von Art. 6 Abs.
              1 lit. a DSGVO. Eine erteilte Einwilligung kann jederzeit mit
              Wirkung für die Zukunft widerrufen werden.
            </p>
            <p>
              Die über das Kontaktformular übermittelten Daten werden gelöscht,
              sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen
              Aufbewahrungspflichten oder sonstigen Rechtsgründe einer Löschung
              entgegenstehen.
            </p>

            <h3>Kontaktaufnahme per E-Mail oder Telefon</h3>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
              Ihre Angaben einschließlich der von Ihnen mitgeteilten
              Kontaktdaten zur Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die
              Kontaktaufnahme der Vertragsanbahnung oder Vertragsdurchführung
              dient. In allen anderen Fällen erfolgt die Verarbeitung auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Ihre Daten werden gelöscht, sobald sie für die Bearbeitung der
              Anfrage nicht mehr erforderlich sind und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </DatenschutzSection>

          <DatenschutzSection
            number="05"
            title="Cookies und ähnliche Technologien"
          >
            <p>
              Diese Website kann technisch notwendige Cookies oder vergleichbare
              Technologien verwenden.
            </p>
            <p>
              Technisch notwendige Cookies dienen beispielsweise dazu,
              grundlegende Funktionen, Sicherheitseinstellungen oder die
              fehlerfreie Darstellung der Website zu ermöglichen.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von § 25 Abs. 2 TDDDG
              sowie, soweit personenbezogene Daten verarbeitet werden, auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Cookies oder Technologien, die für den Betrieb der Website nicht
              unbedingt erforderlich sind, werden nur nach Ihrer vorherigen
              Einwilligung eingesetzt. Die Verarbeitung erfolgt dann auf
              Grundlage von § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Eine erteilte Einwilligung kann jederzeit über die
              Cookie-Einstellungen der Website mit Wirkung für die Zukunft
              widerrufen werden.
            </p>
          </DatenschutzSection>

          <DatenschutzSection number="06" title="Google-Dienste">
            <p>
              Auf dieser Website können Dienste des Unternehmens Google
              eingesetzt werden.
            </p>
            <p>
              Anbieter für Nutzer innerhalb des Europäischen Wirtschaftsraums
              und der Schweiz ist grundsätzlich:
            </p>

            <div className="rounded-xl bg-[#F8F7F4] p-5 sm:p-6">
              <p className="font-semibold text-[#102033]">
                Google Ireland Limited
              </p>
              <p>Gordon House</p>
              <p>Barrow Street</p>
              <p>Dublin 4</p>
              <p>Irland</p>
            </div>

            <p>
              Je nach eingesetztem Dienst können Daten auch an die Google LLC
              und weitere Unternehmen in den USA oder anderen Staaten übertragen
              werden.
            </p>
            <p>
              Beim Aufruf eines eingebundenen Google-Dienstes können
              insbesondere folgende Informationen verarbeitet werden:
            </p>
            <ul>
              <li>IP-Adresse</li>
              <li>Browser- und Geräteinformationen</li>
              <li>aufgerufene Seite</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Standortinformationen</li>
              <li>Cookie- und Nutzungsdaten</li>
            </ul>
            <p>
              Google-Dienste, die für den Betrieb der Website nicht unbedingt
              erforderlich sind, werden erst nach Ihrer vorherigen Einwilligung
              geladen.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a
              DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung kann jederzeit über
              die Cookie-Einstellungen widerrufen werden.
            </p>
            <p>
              Weitere Informationen zur Verarbeitung personenbezogener Daten
              stellt Google in seiner Datenschutzerklärung bereit.
            </p>

            <div className="rounded-xl border border-[#E9E5DF] p-5 sm:p-6">
              <p className="font-semibold text-[#102033]">Hinweis</p>
              <p>
                Dieser allgemeine Abschnitt muss durch konkrete Abschnitte zu
                den tatsächlich verwendeten Diensten ergänzt werden,
                beispielsweise Google Maps, Google Analytics, Google Fonts oder
                Google reCAPTCHA.
              </p>
            </div>
          </DatenschutzSection>

          <DatenschutzSection number="07" title="Speicherdauer">
            <p>
              Soweit in dieser Datenschutzerklärung keine besondere
              Speicherdauer angegeben ist, speichern wir personenbezogene Daten
              nur so lange, wie dies für den jeweiligen Verarbeitungszweck
              notwendig ist.
            </p>
            <p>
              Wenn Sie eine Einwilligung widerrufen oder der Verarbeitung
              widersprechen, werden die betroffenen Daten gelöscht, sofern keine
              anderen gesetzlichen Gründe für eine weitere Speicherung bestehen.
            </p>
            <p>
              Gesetzliche Aufbewahrungsfristen, insbesondere aus dem Steuer- und
              Handelsrecht, bleiben unberührt.
            </p>
          </DatenschutzSection>

          <DatenschutzSection
            number="08"
            title="Empfänger personenbezogener Daten"
          >
            <p>
              Personenbezogene Daten werden nur weitergegeben, wenn dies zur
              Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung
              besteht, ein berechtigtes Interesse an der Weitergabe vorliegt
              oder Sie in die Weitergabe eingewilligt haben.
            </p>
            <p>
              Beim Einsatz externer Dienstleister werden, soweit erforderlich,
              Verträge über die Auftragsverarbeitung abgeschlossen.
            </p>
          </DatenschutzSection>

          <DatenschutzSection number="09" title="Ihre Rechte">
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              insbesondere folgende Rechte:
            </p>
            <ul>
              <li>
                Recht auf Auskunft über Ihre gespeicherten personenbezogenen
                Daten
              </li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung</li>
              <li>
                Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde
              </li>
            </ul>
            <p>
              Der Widerruf einer Einwilligung berührt nicht die Rechtmäßigkeit
              der Verarbeitung, die bis zum Widerruf erfolgt ist.
            </p>
          </DatenschutzSection>

          <DatenschutzSection number="10" title="Widerspruchsrecht">
            <p>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
              oder lit. f DSGVO erfolgt, haben Sie aus Gründen, die sich aus
              Ihrer besonderen Situation ergeben, jederzeit das Recht, gegen die
              Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
            </p>
            <p>
              Werden personenbezogene Daten verarbeitet, um Direktwerbung zu
              betreiben, haben Sie jederzeit das Recht, der Verarbeitung Ihrer
              personenbezogenen Daten zum Zwecke derartiger Werbung zu
              widersprechen.
            </p>
          </DatenschutzSection>

          <DatenschutzSection
            number="11"
            title="Beschwerderecht bei der Aufsichtsbehörde"
          >
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren.
            </p>
            <p>
              Für Unternehmen mit Sitz in Nordrhein-Westfalen ist grundsätzlich
              folgende Behörde zuständig:
            </p>

            <div className="rounded-xl bg-[#F8F7F4] p-5 sm:p-6">
              <p className="font-semibold text-[#102033]">
                Landesbeauftragte für Datenschutz und Informationsfreiheit
                Nordrhein-Westfalen
              </p>
              <p>Kavalleriestraße 2–4</p>
              <p>40213 Düsseldorf</p>
            </div>
          </DatenschutzSection>

          <DatenschutzSection
            number="12"
            title="Aktualisierung dieser Datenschutzerklärung"
          >
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn
              sich die Website, die verwendeten Dienste oder die gesetzlichen
              Anforderungen ändern.
            </p>
          </DatenschutzSection>

          {/* Last updated */}
          <div className="flex flex-col gap-3 border-t border-[#E1DCD5] px-1 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#66707A]">
              INFRAVANTIS 3D · Greven, Deutschland
            </p>
            <p className="text-sm text-[#66707A]">Stand: Juli 2026</p>
          </div>
        </div>
      </div>
    </main>
  );
}
