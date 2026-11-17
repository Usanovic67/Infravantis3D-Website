import { useState } from "react";
import Reveal from "../components/Reveal";
import { publicImage } from "../utils/publicImage";

const featuredProject = {
  title: "3D-Vermessung",
  description:
    "Präzise Vermessung und digitale Erfassung als Grundlage für erfolgreiche Projekte.",
  images: [
    "projekt-haupt-1.png",
    "projekt-haupt-2.jpeg",
    "projekt-haupt-4.png",
  ],
};

const projects = [
  {
    title: "SCAN-TO-BIM",
    description: "INFRAVANTIS 3D erfasst Gebäude und technische Anlagen mittels 3D-Laserscanning und erstellt daraus BIM-Bestandsmodelle. Diese bilden eine verlässliche Grundlage für Umbau, Sanierung und Erweiterung – ergänzt durch 2D-Pläne und eine Übergabe im nativen Format sowie als IFC.",
    images: [
      "projekt2bild1.JPG",
      "projekt2bild2.jpg",
      "projekt2bild3.jpg",
    ],
  },
  {
    title: "Stahlbau",
    description: "Scan-to-BIM für den Umbau und die Modernisierung einer Produktionshalle. Eine millimetergenaue Punktwolke bildet die Grundlage.",
    images: ["projekt3bild1.png"],
  },
  {
    title: "TGA Projekt",
    description: "Sichtbare und zugängliche technische Installationen, beispielsweise Rohrleitungen, Lüftungskanäle und Kabeltrassen. Die digitale Dokumentation unterstützt Fachplaner bei Umbauten und bei der räumlichen Abstimmung verschiedener Gewerke.",
    images: ["projekt4bild3.jpg"],
  },
  {
    title: "Anlagenbau",
    description: "Vorhandene Anlagenstrukturen, Rohrleitungsverläufe und relevante Einbausituationen im vereinbarten Umfang. Punktwolken und 3D-Modelle helfen dabei, Erweiterungen und neue Komponenten unter Berücksichtigung des Bestands zu planen.",
    images: ["projekt4bild1.jpg", "projekt4bild2.jpg"],
  },
  {
    title: "Architektur",
    description: "Digitale Bestandsgrundlagen für Sanierungen, Umbauten und Erweiterungen. Grundrisse, Schnitte, Ansichten und BIM-Modelle unterstützen Architekten dabei, ihre Entwürfe auf den erfassten Gebäudebestand abzustimmen.",
    images: ["projekt6bild1.JPG", "projekt6bild2.JPG"],
  },
  {
    title: "Industrie",
    description: "Produktionshallen und bestehende Anlagenbereiche als Grundlage für Modernisierungen, Umnutzungen und Erweiterungen. Die erfassten Daten unterstützen die räumliche Planung neuer Einrichtungen innerhalb des vorhandenen Bestands.",
    images: ["industrie.png"],
  },
];

function ProjectImage({
  src,
  alt,
  className = "h-full w-full object-cover",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={publicImage(src)} alt={alt} className={className} />;
}

function SliderControls({
  index,
  total,
  onSelect,
}: {
  index: number;
  total: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2" aria-label={`Bild ${index + 1} von ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Bild ${i + 1} von ${total} anzeigen`}
          aria-current={i === index ? "true" : undefined}
          className={`h-2 rounded-full transition-all ${
            i === index ? "w-6 bg-[#B18D70]" : "w-2 bg-[#D9DDE2]"
          }`}
        />
      ))}
    </div>
  );
}

export default function Projekte() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [projectIndexes, setProjectIndexes] = useState(
    projects.map(() => 0),
  );

  function changeProjectImage(projectIndex: number, direction: number) {
    setProjectIndexes((current) =>
      current.map((value, i) =>
        i === projectIndex
          ? (value + direction + projects[i].images.length) %
            projects[i].images.length
          : value,
      ),
    );
  }

  return (
    <main className="bg-[#F8F7F4] text-[#102033]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24 ">
        <div className="mb-10 mt-30 max-w-6xl md:mb-10">
          <p className=" flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B18D70]">
            <span className="h-px w-10 bg-[#B18D70]" />
            Unsere Arbeit
          </p>
        </div>
        <section aria-label="Ausgewähltes Projekt">
          <div className="mb-6 grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#B18D70]">
                Im Fokus
              </p>
              <h2 className="text-2xl font-semibold md:text-3xl">
                {featuredProject.title}
              </h2>
            </div>

            <p className="text-sm leading-6 text-[#526071]">
              {featuredProject.description}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl md:h-[480px]">
            <Reveal>
              <ProjectImage
                src={featuredProject.images[featuredIndex]}
                alt={`${featuredProject.title} – Bild ${featuredIndex + 1}`}
                className="h-auto w-full object-cover md:h-full"
              />

              <button
                type="button"
                onClick={() =>
                  setFeaturedIndex(
                    (featuredIndex - 1 + featuredProject.images.length) %
                      featuredProject.images.length,
                  )
                }
                aria-label="Vorheriges Bild"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow-sm transition hover:bg-white md:left-6"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() =>
                  setFeaturedIndex(
                    (featuredIndex + 1) % featuredProject.images.length,
                  )
                }
                aria-label="Nächstes Bild"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow-sm transition hover:bg-white md:right-6"
              >
                →
              </button>
            </Reveal>
          </div>

          <div className="mt-5">
            <SliderControls
              index={featuredIndex}
              total={featuredProject.images.length}
              onSelect={setFeaturedIndex}
            />
          </div>
        </section>

        <section className="mt-20 md:mt-28" aria-label="Weitere Projekte">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#B18D70]">
              Weitere Einblicke
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Projekte
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
            {projects.map((project, projectIndex) => {
              const imageIndex = projectIndexes[projectIndex];
              const isFirstCardOfLastRow = projects.length % 3 === 2 && projectIndex === projects.length - 2;

              return (
                <article
                  key={project.title}
                  className={`min-w-0 md:col-span-1 lg:col-span-2 ${isFirstCardOfLastRow ? "lg:col-start-2" : ""}`}
                >
                  <Reveal>
                    <div className="group relative mb-5 aspect-[4/3] overflow-hidden rounded-xl">
                      <ProjectImage
                        src={project.images[imageIndex]}
                        alt={`${project.title} – Bild ${imageIndex + 1}`}
                      />
                      {project.images.length > 1 && <button
                        type="button"
                        onClick={() => changeProjectImage(projectIndex, -1)}
                        aria-label="Vorheriges Bild"
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-[#102033] shadow-md opacity-30 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        ←
                      </button>}

                      {project.images.length > 1 && <button
                        type="button"
                        onClick={() => changeProjectImage(projectIndex, 1)}
                        aria-label="Nächstes Bild"
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl text-[#102033] shadow-md opacity-30 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        →
                      </button>}
                    </div>
                  </Reveal>

                  <div className="mb-4">
                    <h3 className="mb-2 text-xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#526071]">
                      {project.description}
                    </p>
                  </div>

                  {project.images.length > 1 && <SliderControls
                    index={imageIndex}
                    total={project.images.length}
                    onSelect={(imageIndex) =>
                      setProjectIndexes((current) =>
                        current.map((value, i) =>
                          i === projectIndex ? imageIndex : value,
                        ),
                      )
                    }
                  />}
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
