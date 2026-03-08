import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Kontakt – Accent Recording Studio",
  description:
    "Kontaktujte nahrávací studio Accent v Plzni. Adresa, telefon, e-mail, mapa.",
};

const contactItems = [
  {
    icon: "📍",
    label: "Adresa",
    value: (
      <>
        Božkovská 38<br />326 00 Plzeň
      </>
    ),
  },
  {
    icon: "📞",
    label: "Telefon",
    value: (
      <a href="tel:+420603332100" className="text-[#f0c040] hover:opacity-80 transition-opacity">
        +420 603 332 100
      </a>
    ),
  },
  {
    icon: "✉️",
    label: "E-mail",
    value: (
      <a href="mailto:accent@razdva.cz" className="text-[#f0c040] hover:opacity-80 transition-opacity">
        accent@razdva.cz
      </a>
    ),
  },
  {
    icon: "🕐",
    label: "Otevírací doba",
    value: "Dle domluvy",
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHero
        badge="Napište nám"
        title={<><span className="text-[#f0c040]">Kontaktujte</span> nás</>}
        description="Rádi si s vámi popovídáme o vašem projektu. Ozvěte se telefonicky nebo e-mailem."
      />

      {/* Kontaktní info */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Info sloupec */}
            <FadeUp>
              <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
                Kde nás najdete
              </span>
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Kontaktní informace
              </h2>
              <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mb-8" />

              <div>
                {contactItems.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex gap-4 items-start py-5 border-b border-white/10 last:border-b-0"
                  >
                    <div className="w-11 h-11 flex-shrink-0 bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.2)] rounded-xl flex items-center justify-center text-lg">
                      {icon}
                    </div>
                    <div>
                      <div className="text-[#8888a0] text-xs uppercase tracking-widest mb-1">{label}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sociální sítě */}
              <div className="mt-8">
                <div className="text-[#8888a0] text-xs uppercase tracking-widest mb-4">Sledujte nás</div>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { href: "https://www.facebook.com", label: "f Facebook" },
                    { href: "https://soundcloud.com", label: "☁ SoundCloud" },
                    { href: "https://youtube.com", label: "▶ YouTube" },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Kontaktní CTA karta */}
            <FadeUp delay={0.1}>
              <div className="bg-gradient-to-br from-[rgba(212,160,23,0.12)] to-[rgba(212,160,23,0.04)] border border-[rgba(212,160,23,0.25)] rounded-2xl p-10 text-center">
                <span className="text-4xl block mb-4">🎙</span>
                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.4rem" }}
                >
                  Rezervujte nahrávací termín
                </h3>
                <p className="text-[#8888a0] leading-relaxed mb-8">
                  Zavolejte nebo napište e-mail — rádi vám poradíme s výběrem služby a domluvíme termín. Konzultace je zdarma.
                </p>
                <a
                  href="tel:+420603332100"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 w-full justify-center mb-3"
                >
                  📞 +420 603 332 100
                </a>
                <a
                  href="mailto:accent@razdva.cz"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300 w-full justify-center"
                >
                  ✉️ accent@razdva.cz
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-12 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-8">
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Kde nás najdete
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
          </FadeUp>
          <FadeUp>
            <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6437!2d13.3800!3d49.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470af153e4b74847%3A0x0!2sBo%C5%BEkovsk%C3%A1+38%2C+326+00+Plze%C5%88!5e0!3m2!1scs!2scz!4v1700000000000"
                className="w-full h-full border-none"
                style={{ filter: "grayscale(0.6) invert(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Accent Recording Studio, Božkovská 38, Plzeň"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
