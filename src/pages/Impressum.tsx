export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#102033]">
      {/* Page heading */}
      <section className="border-b border-[#102033]/10">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:py-20 lg:px-10 lg:py-15 lg:mt-25">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B18D70] sm:text-sm">
            INFRAVANTIS 3D · Rechtliche Informationen
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Impressum
          </h1>

          <div className="mt-6 h-1 w-16 rounded-full bg-[#C5A68D]" />

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[#465569]">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-18">
        {/* Company and contact */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
              01 — Unternehmen
            </p>

            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
              INFRAVANTIS 3D
            </h2>

            <p className="mt-5 text-sm font-medium leading-7 text-[#465569]">
              Inhaberin und verantwortlich für den Inhalt:
            </p>

            <p className="mt-1 text-base font-bold leading-7">Edina Usanovic</p>

            <address className="mt-3 not-italic text-sm font-medium leading-7 text-[#465569]">
              Pauline-Bünhove-Straße 47
              <br />
              48268 Greven
              <br />
              Deutschland
            </address>
          </section>

          <section className="rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
              02 — Kontakt
            </p>

            <div className="mt-5 space-y-5 text-sm">
              <div>
                <p className="font-semibold text-[#667386]">Telefon</p>
                <a
                  href="tel:+4915154447639"
                  className="mt-1 inline-block font-semibold transition hover:text-[#B18D70]"
                >
                  +49 151 54447639
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#667386]">E-Mail</p>
                <a
                  href="mailto:usanovic@infravantis3d.de"
                  className="mt-1 inline-block break-all font-semibold transition hover:text-[#B18D70]"
                >
                  usanovic@infravantis3d.de
                </a>
              </div>

              <div>
                <p className="font-semibold text-[#667386]">Internet</p>
                <a
                  href="http://www.infravantis3d.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block font-semibold transition hover:text-[#B18D70]"
                >
                  www.infravantis3d.de ↗
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* VAT number */}
        <section className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
              03 — Steuerliche Angaben
            </p>

            <h2 className="mt-3 text-xl font-bold">
              Umsatzsteuer-Identifikationsnummer
            </h2>

            <p className="mt-2 text-sm font-medium leading-7 text-[#465569]">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz
            </p>
          </div>

          <p className="shrink-0 rounded-xl border border-[#B18D70]/40 bg-white px-5 py-4 text-base font-bold tracking-wide">
            DE421878866
          </p>
        </section>

        {/* Responsible for content */}
        <section className="mt-6 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
            04 — Verantwortlichkeit
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Verantwortlich für den Inhalt
          </h2>

          <p className="mt-4 text-sm font-medium leading-7 text-[#465569]">
            Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18
            Abs. 2 Medienstaatsvertrag
          </p>

          <p className="mt-3 text-sm font-bold leading-7">
            Edina Usanovic
            <br />
            Pauline-Bünhove-Straße 47
            <br />
            48268 Greven
          </p>
        </section>

        {/* Consumer dispute resolution */}
        <section className="mt-6 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
            05 — Verbraucherrechte
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Verbraucherstreitbeilegung
          </h2>

          <p className="mt-4 text-sm font-medium leading-7 text-[#39485A]">
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        {/* Liability for content */}
        <section className="mt-6 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
            06 — Haftung
          </p>

          <h2 className="mt-3 text-2xl font-semibold">Haftung für Inhalte</h2>

          <div className="mt-4 space-y-4 text-sm font-medium leading-7 text-[#39485A]">
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
              nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu suchen, die auf
              eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine entsprechende Haftung ist jedoch erst ab dem
              Zeitpunkt möglich, zu dem uns eine konkrete Rechtsverletzung
              bekannt wird. Bei Bekanntwerden entsprechender Rechtsverletzungen
              werden wir diese Inhalte unverzüglich entfernen.
            </p>
          </div>
        </section>

        {/* External links */}
        <section className="mt-6 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
            07 — Externe Verweise
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            Haftung für externe Links
          </h2>

          <div className="mt-4 space-y-4 text-sm font-medium leading-7 text-[#39485A]">
            <p>
              Unsere Website kann Links zu externen Websites Dritter enthalten,
              auf deren Inhalte wir keinen Einfluss haben. Für diese fremden
              Inhalte können wir daher keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber verantwortlich.
            </p>

            <p>
              Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte
              erkennbar. Eine dauerhafte Kontrolle der verlinkten Seiten ist
              ohne konkrete Anhaltspunkte für eine Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links unverzüglich entfernen.
            </p>
          </div>
        </section>

        {/* Copyright */}
        <section className="mt-6 rounded-2xl border border-[#102033]/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B18D70]">
            08 — Rechte
          </p>

          <h2 className="mt-3 text-2xl font-semibold">Urheberrecht</h2>

          <div className="mt-4 space-y-4 text-sm font-medium leading-7 text-[#39485A]">
            <p>
              Die durch die Betreiberin dieser Website erstellten Inhalte und
              Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen
              Zustimmung der jeweiligen Urheberin beziehungsweise des jeweiligen
              Urhebers.
            </p>

            <p>
              Soweit Inhalte auf dieser Website nicht von der Betreiberin
              erstellt wurden, werden die Urheberrechte Dritter beachtet.
              Inhalte Dritter werden als solche gekennzeichnet. Sollten Sie
              dennoch auf eine mögliche Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei
              Bekanntwerden von Rechtsverletzungen werden wir diese Inhalte
              unverzüglich entfernen.
            </p>
          </div>
        </section>

        <div className="mt-12 border-t border-[#102033]/10 pt-6">
          <p className="text-sm font-semibold text-[#667386]">
            INFRAVANTIS 3D · Greven, Deutschland
          </p>
        </div>
      </section>
    </main>
  );
}
