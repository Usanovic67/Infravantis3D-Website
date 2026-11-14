import { useState } from "react";
import Reveal from "../components/Reveal";

export default function Kontakt() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Nachricht wird gesendet...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "daf96597-666b-4c8b-bcdc-2b68182929a6");
    formData.append("subject", "Neue Kontaktanfrage – INFRAVANTIS 3D");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.");
        form.reset();
      } else {
        setStatus(
          "Leider konnte die Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut.",
        );
      }
    } catch {
      setStatus(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      );
    }
  }

  return (
    <main className="bg-[#F8F7F4] text-[#102033]">
      <Reveal>
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="mt-24 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <div className="md:pl-8">
              <p className=" flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#B18D70]">
                <span className="h-px w-10 bg-[#B18D70]" />
                Kontakt
              </p>

              <h1 className="mb-6 text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
                Lassen Sie uns
                <br />
                gemeinsam etwas
                <span className="block text-[#B18D70]">bewegen.</span>
              </h1>

              <p className="max-w-md text-base leading-7 text-[#526071]">
                Sie planen ein Projekt oder haben Fragen zu unseren Leistungen?
                Wir freuen uns darauf, von Ihnen zu hören.
              </p>

              <div className="mt-10 space-y-7">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B18D70]">
                    Schreiben Sie uns
                  </p>
                  <a
                    href="mailto:usanovic@infravantis3d.de"
                    className="text-base font-medium transition hover:text-[#B18D70]"
                  >
                    usanovic@infravantis3d.de
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B18D70]">
                    Rufen Sie uns an
                  </p>
                  <a
                    href="tel:+4915154447639"
                    className="text-base font-medium transition hover:text-[#B18D70]"
                  >
                    +49 151 54447639
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B18D70]">
                    Besuchen Sie uns
                  </p>
                  <div className="text-base leading-7 text-[#526071]">
                    <p className="font-medium text-[#102033]">
                      INFRAVANTIS 3D GmbH
                    </p>
                    Pauline-Bünhove-Straße 47
                    <br />
                    48268 Greven
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-9">
              <h2 className="mb-2 text-2xl font-semibold">Schreiben Sie uns</h2>
              <p className="mb-8 text-sm leading-6 text-[#526071]">
                Füllen Sie das Formular aus. Wir melden uns bei Ihnen.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="w-full rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 outline-none transition focus:border-[#B18D70]"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Unternehmen
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="w-full rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 outline-none transition focus:border-[#B18D70]"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full min-w-0 rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 outline-none transition focus:border-[#B18D70]"
                      placeholder="name@beispiel.de"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full min-w-0 rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 outline-none transition focus:border-[#B18D70]"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-lg border border-[#D9DDE2] bg-white px-4 py-3 outline-none transition focus:border-[#B18D70]"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#102033] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#203750]"
                >
                  Nachricht senden
                </button>

                {status && (
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-sm leading-6 text-[#526071]"
                  >
                    {status}
                  </p>
                )}

                <p className="text-xs leading-5 text-[#6B7280]">
                  Mit dem Absenden werden Ihre Angaben zur Bearbeitung Ihrer
                  Anfrage übermittelt. Weitere Informationen finden Sie in
                  unserer Datenschutzerklärung.
                </p>
              </form>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
