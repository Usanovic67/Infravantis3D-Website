import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Leistungen", path: "/leistungen" },
  { label: "Projekte", path: "/projekte" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showBackground = ["/leistungen", "/projekte", "/kontakt"].includes(
    pathname,
  );

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 px-5 pt-5 text-white sm:px-8 lg:px-10 ${
        showBackground ? "bg-[#102033] pb-3" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-6 px-5">
        <NavLink
          to="/"
          aria-label="Infravantis 3D – Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/images/infravantis-logo1.png"
            alt="Infravantis 3D"

            className="h-16 w-auto max-w-[260px] object-contain sm:h-25 sm:max-w-[320px] lg:h-35 lg:max-w-[380px]"
          />
        </NavLink>
        <nav className="flex min-h-[76px] min-w-0 flex-1 items-center justify-between gap-6 px-8 md:rounded-3xl md:border md:border-white/10 md:bg-[#0B1722] md:shadow-lg">
          <NavLink
            to="/"
            aria-label="Infravantis 3D – Home"
            onClick={() => setMobileMenuOpen(false)}
            className="shrink-0"
          ></NavLink>

          {/* Desktop navigation */}
          <div className="hidden flex-1 items-center justify-center gap-7 md:flex lg:gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-white hover:!text-[#E8CDB5] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-[#E8CDB5]"
                      : "text-slate-300 hover:!text-[#E8CDB5]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop contact button */}
          <NavLink
            to="/kontakt"
            className="hidden shrink-0 items-center gap-3 rounded-full border border-[#E8CDB5]/70 px-5 py-3 text-sm font-medium text-[#F6F4F0] transition hover:bg-[#E8CDB5] hover:text-[#111C29] min-[1010px]:inline-flex"
          >
            Kontakt aufnehmen
            <span aria-hidden="true">→</span>
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="group relative shrink-0 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-[#E8CDB5]/70 shadow-[0_8px_32px_rgba(31,38,135,0.18)] backdrop-blur-2xl transition-all duration-300 hover:scale-105 md:hidden"
          >
            <div className="relative flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-[2px] w-6 rounded-full bg-current transition-all duration-300 ${mobileMenuOpen ? "translate-y-[9px] rotate-45" : ""}`}
              ></span>

              <span
                className={`h-[2px] w-6 rounded-full transition-all bg-current duration-300 
                   ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>

              <span
                className={`h-[2px] w-6 rounded-full transition-all bg-current duration-300 ${mobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
              ></span>
            </div>
          </button>
        </nav>
      </div>
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B1722] px-5 pb-6 pt-2 md:hidden sm:px-8"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 text-base transition-colors hover:text-[#E8CDB5] ${
                    isActive ? "font-semibold text-[#E8CDB5]" : "text-slate-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 hidden min-[1500px]:inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E8CDB5] px-5 py-3 text-sm font-semibold text-[#111C29] transition hover:bg-white"
            >
              Kontakt aufnehmen
              <span aria-hidden="true">→</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
