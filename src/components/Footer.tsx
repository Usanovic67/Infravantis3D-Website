import { Link } from "react-router";
import { publicImage } from "../utils/publicImage";

export default function Footer() {
  return (
    <footer className="bg-[#0B1722] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-16">
        {/* Company */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src={publicImage("infravantis-logo.png")}
              alt="Infravantis 3D"
              className="h-16 w-auto max-w-full object-contain"
            />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Präzise 3D-Vermessung, digitale Modelle und BIM-Lösungen für moderne
            Bauprojekte.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#E8CDB5]">
            Navigation
          </h2>

          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-300">
            <Link to="/" className="transition hover:text-[#E8CDB5]">
              Home
            </Link>
            <Link to="/leistungen" className="transition hover:text-[#E8CDB5]">
              Leistungen
            </Link>
            <Link to="/projekte" className="transition hover:text-[#E8CDB5]">
              Projekte
            </Link>
            <Link to="/kontakt" className="transition hover:text-[#E8CDB5]">
              Kontakt
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#E8CDB5]">
            Kontakt
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Sie haben Fragen zu unseren Leistungen oder planen ein Projekt?
          </p>

          <Link
            to="/kontakt"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#E8CDB5]"
          >
            Kontakt aufnehmen <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Infravantis 3D GmbH. Alle Rechte
            vorbehalten.
          </p>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/impressum" className="transition hover:text-[#E8CDB5]">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition hover:text-[#E8CDB5]">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
