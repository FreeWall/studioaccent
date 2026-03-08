import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Studio – Accent Recording Studio",
  description: "Prohlédněte si prostory a vybavení nahrávacího studia Accent v Plzni.",
};

const btnPrimary =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300";
const btnOutline =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300";

function SpecTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full border-collapse mt-6">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label} className="border-b border-white/10">
            <td className="py-3 pr-4 text-[#8888a0] text-sm w-2/5">{label}</td>
            <td className="py-3 text-white text-sm font-medium">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const badge = (text: string) => (
  <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
    {text}
  </span>
);

const accentLine = (
  <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
);

const galleryImages = [
  { src: "/images/studio_hero.png", alt: "Řídicí místnost – pohled shora" },
  { src: "/images/studio_booth.png", alt: "Nahrávací kabina" },
  { src: "/images/studio_hero.png", alt: "Mixpult detail" },
  { src: "/images/studio_booth.png", alt: "Hardware rack" },
  { src: "/images/studio_hero.png", alt: "Referenční monitory" },
  { src: "/images/studio_booth.png", alt: "Nahrávání v kabině" },
];

export default function StudioPage() {
  return (
    <>
      <PageHero
        badge="Nahrávací prostory"
        title={<>Naše <span className="text-[#f0c040]">Studio</span></>}
        description="Profesionálně vybavené prostory v srdci Plzně — pro nahrávání, mixáž i masterování."
      />

      {/* Řídicí místnost */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Image
                src="/images/studio_hero.png"
                alt="Řídicí místnost studia Accent"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                priority
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge("Řídicí místnost")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Řídicí místnost
              </h2>
              {accentLine}
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Srdce studia — akusticky vyladěná řídicí místnost s referenčními monitory KRK Rokit,
                analogovým mixpultem a rozsáhlou rackovou technikou. Poskytuje přesné referenční prostředí
                pro spolehlivý mix a mastering.
              </p>
              <p className="text-[#8888a0] mt-3 leading-relaxed">
                Propojení analogového a digitálního světa zaručuje teplý, přirozený zvuk s moderní přesností zpracování.
              </p>
              <SpecTable
                rows={[
                  ["Referenční monitory", "KRK Rokit (žluté kužely)"],
                  ["Konverze", "High-end AD/DA konvertory"],
                  ["Hardware rack", "Kompresory, EQ, preamps"],
                  ["DAW", "Pro Tools / Logic Pro"],
                  ["Kapacita", "2–4 osoby + zvukař"],
                ]}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Nahrávací kabina */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              {badge("Nahrávací kabina")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Nahrávací kabina
              </h2>
              {accentLine}
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Zvukotěsná kabina s proměnnou akustikou — ideální pro zpěv, mluvené slovo, akustické nástroje
                i elektrické kytary. Přes skleněné okno zachovává vizuální kontakt s řídicí místností.
              </p>
              <p className="text-[#8888a0] mt-3 leading-relaxed">
                Vybavena kondenzátorovými i dynamickými mikrofony přední kvality, rampou na nástrojové stojany
                a pohodlným prostorem pro klid při nahrávání.
              </p>
              <SpecTable
                rows={[
                  ["Mikrofony", "Neumann, AKG, Shure"],
                  ["Preamp", "API, neve-style preamp"],
                  ["Monitorování", "Uzavřená sluchátka AKG K271"],
                  ["Akustika", "Proměnlivé akustické panely"],
                  ["Kapacita", "1–3 interpreti"],
                ]}
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              <Image
                src="/images/studio_booth.png"
                alt="Nahrávací kabina studia Accent"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                loading="lazy"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Fotogalerie
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Studio v obrazech
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
            <p className="text-[#8888a0] mt-4">
              Nahlédněte do prostor, kde vznikají profesionální nahrávky.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {galleryImages.map(({ src, alt }, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative group cursor-pointer">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[650px] w-[90vw] mx-auto text-center">
          <FadeUp>
            <h2
              className="text-white mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Chcete nahrávat u nás?
            </h2>
            <p className="text-[#8888a0] mb-8">
              Kontaktujte nás a domluvte si prohlídku nebo rovnou zarezervujte nahrávací čas.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/kontakt" className={btnPrimary}>📞 Kontaktovat studio</Link>
              <Link href="/sluzby" className={btnOutline}>💰 Zobrazit ceník</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
