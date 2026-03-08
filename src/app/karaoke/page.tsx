import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Karaoke Produkce – Accent Recording Studio",
  description:
    "Profesionální karaoke produkce ve studiu Accent Plzeň. CDG, MP4 formáty, česky a slovensky. Online shop karaokesong.eu.",
};

const btnPrimary =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300";
const btnOutline =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300";

const badge = (text: string) => (
  <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
    {text}
  </span>
);

const formats = [
  { icon: "💿", name: "CDG", desc: "Klasický formát pro karaoke přehrávače" },
  { icon: "🎬", name: "MP4 Video", desc: "HD video pro TV a projektory" },
  { icon: "🎵", name: "MP3+G", desc: "Komprimovaný CDG formát" },
  { icon: "📱", name: "Mobilní", desc: "Kompatibilní s karaoke aplikacemi" },
];

const features = [
  { icon: "🎤", title: "Přesná re-produkce", desc: "Věrná kopie originální nahrávky bez vokálů — zachovává charakter písně." },
  { icon: "📝", title: "Synchronizovaný text", desc: "Precizní timing textu slova po slovu pro plynulý zážitek ze zpívání." },
  { icon: "🎵", title: "Profesionální master", desc: "Výstup optimalizovaný pro karaoke zařízení, TV systémy i profesionální sety." },
];

export default function KaraokePage() {
  return (
    <>
      <PageHero
        badge="Specializace"
        title={<>Karaoke <span className="text-[#f0c040]">Produkce</span></>}
        description="Výroba profesionálních karaoke stop v češtině a slovenštině. CDG, MP4 a další formáty pro domácí i profesionální použití."
      />

      {/* Info + foto */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Image
                src="/images/karaoke_stage.png"
                alt="Karaoke show na pódiu"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                priority
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge("Co nabízíme")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Profesionální karaoke na míru
              </h2>
              <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Studio Accent je jedním z průkopníků profesionální karaoke produkce v České republice.
                Za léta provozu jsme vybudovali rozsáhlý katalog stovek titulů — výhradně v češtině a slovenštině.
              </p>
              <p className="text-[#8888a0] mt-3 leading-relaxed">
                Každá karaoke stopa je pečlivě zpracována — od přesné re-produkce hudebního doprovodu
                přes synchronizaci textu až po finální mastering pro příslušný distribuční formát.
              </p>
              <div className="mt-6 border-t border-white/10">
                {features.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 items-start py-5 border-b border-white/10"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-[rgba(212,160,23,0.1)] border border-[rgba(212,160,23,0.2)] rounded-xl flex items-center justify-center text-2xl">
                      {icon}
                    </div>
                    <div>
                      <h4
                        className="text-white mb-1"
                        style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem" }}
                      >
                        {title}
                      </h4>
                      <p className="text-[#8888a0] text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Formáty */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-10">
            {badge("Formáty")}
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Dostupné formáty
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
            <p className="text-[#8888a0] mt-4 max-w-[56ch] mx-auto">
              Karaoke stopy dodáváme ve formátech kompatibilních s většinou dostupných přehrávačů a systémů.
            </p>
          </FadeUp>
          <div className="flex gap-4 justify-center flex-wrap mt-10">
            {formats.map(({ icon, name, desc }, i) => (
              <FadeUp key={name} delay={i * 0.07}>
                <div className="flex flex-col items-center bg-white/[0.04] border border-white/10 rounded-2xl p-8 min-w-[160px] hover:border-[rgba(212,160,23,0.35)] hover:-translate-y-1 transition-all duration-300">
                  <span className="text-4xl mb-3">{icon}</span>
                  <span
                    className="text-white font-bold mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {name}
                  </span>
                  <span className="text-[#8888a0] text-xs text-center">{desc}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Online shop */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp>
            <div className="bg-gradient-to-br from-[rgba(212,160,23,0.15)] to-[rgba(212,160,23,0.05)] border border-[rgba(212,160,23,0.3)] rounded-[2rem] p-14 text-center">
              {badge("Online shop")}
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Nakupujte karaoke online
              </h2>
              <a
                href="https://karaokesong.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f0c040] font-bold text-2xl block my-4 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                🛒 karaokesong.eu
              </a>
              <p className="text-[#8888a0] max-w-[55ch] mx-auto mb-8 leading-relaxed">
                Na naší specializované platformě najdete stovky českých a slovenských karaoke titulů ke stažení.
                Okamžitý download, žádné předplatné, platba kartou.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://karaokesong.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  🎤 Přejít do shopu
                </a>
                <Link href="/kontakt" className={btnOutline}>📧 Zakázková výroba</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Karaoke show */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              {badge("Živá show")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
              >
                Karaoke show na akce
              </h2>
              <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Hledáte program pro firemní večírek, oslavu nebo kulturní akci?
                Naše agentura zajistí profesionální karaoke show kompletně na klíč —
                od ozvučení přes katalog písní až po moderování.
              </p>
              <p className="text-[#8888a0] mt-3 leading-relaxed">
                Disponujeme velkým katalogem česky a slovensky zpívaných titulů pro nejrůznější generace a vkus.
              </p>
              <div className="mt-8">
                <Link href="/kontakt" className={btnPrimary}>📞 Nezávazná poptávka</Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Image
                src="/images/karaoke_stage.png"
                alt="Karaoke live show"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                loading="lazy"
              />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
