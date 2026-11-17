import { Link } from "react-router";
import Reveal from "../components/Reveal";
import { publicImage } from "../utils/publicImage";

export default function Home() {
  return (
    <main className="w-full min-w-0 overflow-x-clip bg-[#F6F4F0] text-[#111C29]">
      {/* Hero with dark-to-light gradient */}

      <section className="relative h-svh overflow-hidden bg-[#0B1722] text-white">

        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(11, 23, 34, 0.95) 0%, rgba(11, 23, 34, 0.65) 50%, rgba(11, 23, 34, 0.1) 100%),
        url("${import.meta.env.BASE_URL}images/infravantis-hero.png")
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B1722]/30 via-transparent to-[#0B1722]/30" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-stretch px-5 pb-8 pt-36 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:pb-0 lg:pt-24">
          <div className="flex min-h-0 min-w-0 max-w-2xl flex-col lg:justify-center">
            <Reveal>
              <section>
                <h1 className="text-[2.35rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                  Räume erfassen.
                  <span className="mt-2 block text-[#E8CDB5]">
                    Zukunft gestalten.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
                  <span className="mb-3 mt-8 block h-0.5 w-15 bg-[#B18D70]" />
                  Präzise 3D-Vermessung, digitale Modelle und BIM-Lösungen für
                  eine effiziente Planung, nachhaltiges Bauen und klare
                  Entscheidungen.
                </p>
              </section>
            </Reveal>

            {/* Buttons at the bottom */}
            <div className="mt-75 flex flex-col items-start gap-3 pt-8 sm:flex-row sm:flex-wrap lg:mt-8 lg:pt-0">
              <Link
                to="/leistungen"
                className="inline-flex min-h-12 w-full max-w-[260px] items-center justify-center gap-3 rounded-full bg-[#E8CDB5] px-6 py-3 text-center text-sm font-semibold text-[#111C29] transition hover:bg-white sm:w-auto sm:max-w-none"
              >
                Unsere Leistungen <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/projekte"
                className="inline-flex min-h-12 w-full max-w-[260px] items-center justify-center rounded-full border border-white/50 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-[#E8CDB5] hover:text-[#E8CDB5] sm:w-auto sm:max-w-none"
              >
                Projekte entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-[#F8F7F4] text-[#102033]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-18 lg:px-10 lg:py-20 ">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr_auto] lg:items-end lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B18D70] sm:text-sm">
                Unsere Leistungen
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Vom Bestand
                <span className="block text-[#C5A68D]">
                  zur digitalen Lösung.
                </span>
              </h2>
            </div>

            <p className="max-w-xl -mt-4 text-sm leading-7 text-slate-600 sm:-mt-6  sm:text-base sm:leading-8">
              Wir erfassen bestehende Gebäude präzise, erstellen digitale
              Modelle und liefern verlässliche Planunterlagen. Effizient,
              detailliert und auf Ihre Anforderungen abgestimmt.
            </p>

            <Link
              to="/leistungen"
              className="inline-flex items-center gap-3 border-b border-[#C5A68D] pb-2 text-sm font-semibold transition hover:text-[#B18D70]"
            >
              Alle Leistungen ansehen <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {/* 3D-Vermessung */}
            <Link
              to="/leistungen"
              className="group grid grid-cols-1 gap-5 rounded-2xl border border-[#102033]/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr] sm:items-stretch"
            >
              <div className="min-h-48 overflow-hidden rounded-xl bg-[#E8E7E2] sm:min-h-52">
                <img
                  src={publicImage("3Dvermessung.JPG")}
                  alt="Digitale 3D-Vermessung eines Gebäudes"
                  className="h-full min-h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col px-1 py-2 sm:py-3">
                <span className="text-xs font-semibold tracking-widest text-[#B18D70]">
                  01
                </span>
                <h3 className="mt-3 text-lg font-semibold">3D-Vermessung</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Präzise Erfassung von Bestandsgebäuden mit moderner
                  Laserscantechnologie.
                </p>
                <span className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A68D] text-[#102033] transition group-hover:bg-[#E8CDB5]">
                  →
                </span>
              </div>
            </Link>

            {/* BIM-Modellierung */}
            <Link
              to="/leistungen"
              className="group grid grid-cols-1 gap-5 rounded-2xl border border-[#102033]/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr] sm:items-stretch"
            >
              <div className="min-h-48 overflow-hidden rounded-xl bg-[#E8E7E2] sm:min-h-52">
                <img
                  src={publicImage("projekt2bild1.JPG")}
                  alt="Digitales BIM-Gebäudemodell"
                  className="h-full min-h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col px-1 py-2 sm:py-3">
                <span className="text-xs font-semibold tracking-widest text-[#B18D70]">
                  02
                </span>
                <h3 className="mt-3 text-lg font-semibold">BIM-Modellierung</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Aus Daten werden intelligente digitale Modelle für
                  strukturierte und effiziente Planung.
                </p>
                <span className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A68D] text-[#102033] transition group-hover:bg-[#E8CDB5]">
                  →
                </span>
              </div>
            </Link>

            {/* Planableitungen */}
            <Link
              to="/leistungen"
              className="group grid grid-cols-1 gap-5 rounded-2xl border border-[#102033]/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.9fr_1.1fr] sm:items-stretch"
            >
              <div className="min-h-48 overflow-hidden rounded-xl bg-[#E8E7E2] sm:min-h-52">
                <img
                  src={publicImage("plannungunterlagen.JPG")}
                  alt="Technische Gebäudepläne"
                  className="h-full min-h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col px-1 py-2 sm:py-3">
                <span className="text-xs font-semibold tracking-widest text-[#B18D70]">
                  03
                </span>
                <h3 className="mt-3 text-lg font-semibold">Bestandspläne</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Verlässliche Planunterlagen für Ihre weiteren
                  Planungsprozesse.
                </p>
                <span className="mt-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A68D] text-[#102033] transition group-hover:bg-[#E8CDB5]">
                  →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="relative overflow-hidden border-t border-[#102033]/10 bg-[#F1E8DE] text-[#102033]">
        <div className="pointer-events-none absolute -left-20 -top-32 h-96 w-96 rounded-full border border-[#C5A68D]/30" />
        <div className="pointer-events-none absolute -left-10 -top-20 h-80 w-80 rounded-full border border-[#C5A68D]/30" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78365] sm:text-sm">
              Kontakt
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ihr Projekt beginnt
              <span className="block text-[#B18D70]">mit einem Gespräch.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
              Sie planen ein Projekt oder benötigen präzise Bestandsdaten? Wir
              freuen uns darauf, mehr über Ihr Vorhaben zu erfahren.
            </p>

            <Link
              to="/kontakt"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#102033] px-6 py-3 text-sm font-semibold !text-white transition hover:bg-[#263D4F]"
            >
              Kontakt aufnehmen
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
