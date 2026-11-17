import { publicImage } from "../utils/publicImage";

const services = [
  {
    number: "01",
    title: "3D-Vermessung",
    image: "projekt2bild2.jpg",
    description:
      "Mit 3D-Laserscanning erfassen wir die Geometrie von Gebäuden, Industrieanlagen und technischen Konstruktionen. Dabei entsteht eine räumliche Punktwolke, die den aufgenommenen Bestand detailliert abbildet. Sie dient als Grundlage für die Ermittlung von Maßen, die Erstellung von Bestandsplänen und die weitere 3D-Modellierung. Messgenauigkeit und Aufnahmeumfang stimmen wir auf die Anforderungen Ihres Projekts ab. Ihr Ergebnis: Eine digitale Punktwolke der vereinbarten Bereiche.",
    tags: ["Bestandserfassung", "3D-Laserscanning"],
  },
  {
    number: "02",
    title: "BIM-Modellierung",
    image: "projekt2bild1.JPG",
    description:
      "Auf Grundlage der aufgenommenen Punktwolken erstellen wir BIM-fähige Modelle. Je nach Auftrag bilden diese beispielsweise Bauteile, Stahlkonstruktionen oder technische Anlagen ab. Modellumfang, Detaillierungsgrad und benötigte Bauteilinformationen vereinbaren wir vor Beginn der Bearbeitung. Die Übergabe erfolgt in den abgestimmten Dateiformaten, beispielsweise als natives Modell oder im offenen IFC-Format. Ihr Ergebnis: Ein strukturiertes 3D-Bestandsmodell für Ihre weitere Planung und Zusammenarbeit.",
    tags: ["Digitale Modelle", "BIM"],
  },
  {
    number: "03",
    title: "Bestandspläne",
    image: "Bestandspläne.png",
    description:
      "Aus den erfassten Daten erstellen wir Grundrisse, Schnitte und Ansichten. Damit erhalten Sie nachvollziehbare Planunterlagen zum dokumentierten Bestand. Welche Pläne, Maßstäbe und Details benötigt werden, klären wir anhand Ihrer Aufgabenstellung. Ihr Ergebnis: 2D-Bestandspläne in den vereinbarten CAD- und PDF-Formaten.",
    tags: ["Bestandspläne", "Technische Zeichnungen"],
  },
];

export default function Leistungen() {
  return (
    <main className="bg-[#F8F7F4] text-[#102033]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mb-20 mt-30 max-w-6xl md:mb-24">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B18D70]">
            <span className="h-px w-10 bg-[#B18D70]" />
            Unsere Leistungen
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Vermessung und digitale Planung
          </h1>

          <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-[#9A9A95] mt-5 pl-2">
            Präzision · Vertrauen · Qualität
          </p>
        </div>

        <div className="border-t border-[#DCD5CC]">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-6 border-b border-[#DCD5CC] py-9 md:grid-cols-[50px_0.9fr_0.65fr_1.35fr] md:items-center md:gap-5 md:py-12"
            >
              <p className="text-sm font-medium tracking-widest text-[#B18D70]">
                {service.number}
              </p>

              <div className="overflow-hidden rounded-xl bg-[#E8E7E2]">
                <img
                  src={publicImage(service.image)}
                  alt={service.title}
                  className="aspect-[4/3] h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
                  {service.title}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#DED5CC] px-3 py-1.5 text-xs text-[#526071]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#526071] md:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 rounded-2xl bg-[#102033] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#D0AD90]">
              Ihr Projekt
            </p>

            <h2 className="max-w-xl text-2xl font-semibold leading-tight md:text-3xl">
              Sie haben Fragen zu unseren Leistungen?
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Wir freuen uns darauf, mehr über Ihr Vorhaben zu erfahren.
            </p>
          </div>

          <a
            href="/kontakt"
            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#E8CDB5] px-6 py-4 text-sm font-semibold text-[#102033] transition hover:bg-white md:self-center"
          >
            Kontakt aufnehmen <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
