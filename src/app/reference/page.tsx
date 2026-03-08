import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Reference – Accent Recording Studio",
  description:
    "Ukázky práce nahrávacího studia Accent – kapely, umělci a projekty, které jsme natočili.",
};

const btnPrimary =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300";
const btnOutline =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300";

const projects = [
  {
    year: "2023 · Rock",
    title: "Sifon – 100 Hříchů",
    desc: "Reedice legendárního alba skupiny Sifon, původně vydaného v roce 1991/1992 na gramofonových deskách a kazetách. Vydáno ve spolupráci s AC MUSIC.",
    tags: ["Nahrávání", "Mastering", "CD"],
  },
  {
    year: "2022 · Sborová hudba",
    title: "Vozilo se na jaře – Domažlický sbor",
    desc: "Nahrávka tradiční lidové hudby Domažlického pěveckého sboru. Zachycení autentičnosti a čistoty sborového zpěvu v akusticky přirozeném prostoru.",
    tags: ["Nahrávání", "Mix"],
  },
  {
    year: "2021 · Rock / Metal",
    title: "AKTA X – Rock Band Sifon",
    desc: "Energická rocková nahrávka s plným živým zvukem. Kompletní produkce od nahrávání přes mix až po mastering a přípravu pro distribuci.",
    tags: ["Kompletní produkce", "Streaming"],
  },
  {
    year: "2020 · Pop / Rock",
    title: "Kolem mě – Rock Band",
    desc: "Melodická pop-rocková nahrávka s bohatou instrumentací. Vícevrstvé vokální harmonie a dynamická produkce pro rozhlasový i streamovací formát.",
    tags: ["Nahrávání", "Mix", "Radio master"],
  },
  {
    year: "2019 · Dabing",
    title: "Komerční spoty – různí klienti",
    desc: "Natočení a post-produkce reklamních spotů pro televizní i online distribuci. Voice-over, zvukový design a finální mix pro broadcast.",
    tags: ["Dabing", "Post-produkce", "TV"],
  },
  {
    year: "Průběžně · Karaoke",
    title: "Karaoke katalog – 500+ titulů",
    desc: "Rozsáhlý katalog českých a slovenských karaoke stop dostupný na karaokesong.eu. Profesionální re-backing a synchronizace textu.",
    tags: ["Karaoke", "CDG / MP4"],
  },
];

const bands = [
  { name: "Sifon", sub: "Legendární rock, Plzeň" },
  { name: "ABBA Star", sub: "Pop tribute show" },
  { name: "Queenways", sub: "Queen tribute band" },
  { name: "Electric Therapy", sub: "Rock / metal" },
  { name: "Domažlický pěvecký sbor", sub: "Tradiční sborová hudba" },
  { name: "Palice", sub: "Rock band" },
  { name: "Artur", sub: "Rock / pop" },
  { name: "Stovky dalších umělců", sub: "od roku 1991" },
];

export default function ReferencePage() {
  return (
    <>
      <PageHero
        badge="Naše práce"
        title={<>Reference & <span className="text-[#f0c040]">Ukázky</span></>}
        description="Přehled umělců, kapel a projektů, které studio Accent za dobu své existence natočilo."
      />

      {/* Projekty */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Highlights
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Vybrané projekty
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map(({ year, title, desc, tags }, i) => (
              <FadeUp key={title} delay={i * 0.06}>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-[rgba(212,160,23,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="text-[#d4a017] text-xs font-bold tracking-wider mb-1">{year}</div>
                    <h3
                      className="text-white mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
                    >
                      {title}
                    </h3>
                    <p className="text-[#8888a0] text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#8888a0] text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Kapely */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Umělci & kapely
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Kdo u nás nahrával
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
            <p className="text-[#8888a0] mt-4 max-w-[56ch]">
              Výběr z více než 28 let spolupráce s českými a slovenskými interprety.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
            {bands.map(({ name, sub }, i) => (
              <FadeUp key={name} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-4 bg-white/[0.04] border border-white/10 rounded-xl hover:border-[rgba(212,160,23,0.3)] hover:translate-x-1 transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4a017] flex-shrink-0" />
                  <div>
                    <strong className="text-white text-sm">{name}</strong>
                    <span className="block text-[#8888a0] text-xs mt-0.5">{sub}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SoundCloud */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Audio
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Poslechněte si naší práci
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
          </FadeUp>
          <FadeUp>
            <div className="max-w-[700px] mx-auto bg-white/[0.04] border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-[#8888a0] mb-6 leading-relaxed">
                Kompletní sbírku nahrávek, demo spotů a ukázek z produkce studia Accent najdete na našem SoundCloud profilu.
              </p>
              <a
                href="https://soundcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#f0c040] font-semibold text-lg hover:opacity-80 transition-opacity"
              >
                <span className="text-2xl">☁</span>
                Přejít na SoundCloud →
              </a>
            </div>
          </FadeUp>
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
              Chcete být součástí naší výzvy?
            </h2>
            <p className="text-[#8888a0] mb-8">
              Přidejte se ke stovkám umělců, kteří nám svěřili svůj zvuk.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/kontakt" className={btnPrimary}>📞 Domluvit termín</Link>
              <Link href="/sluzby" className={btnOutline}>💰 Zobrazit ceny</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
