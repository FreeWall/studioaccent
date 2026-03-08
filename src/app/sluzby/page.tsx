import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Služby & Ceník – Accent Recording Studio",
  description:
    "Přehled služeb a ceník nahrávacího studia Accent Plzeň. Nahrávání, mastering, dabing, karaoke.",
};

const btnPrimary =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 w-full justify-center";
const btnOutline =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300 w-full justify-center";

const serviceCards = [
  {
    icon: "🎙",
    title: "Nahrávání",
    desc: "Profesionální záznamy zpěvu, nástrojů i mluveného slova v akusticky ošetřeném prostoru.",
    items: ["Zpěv & vokály", "Akustické nástroje", "Elektrické nástroje (DI / amp)", "Mluvené slovo, dabing", "Live nahrávání skupin"],
  },
  {
    icon: "🎚",
    title: "Mix & Mastering",
    desc: "Vybalancování stop do koherentního mixu a finální mastering pro distribuci.",
    items: ["Stereo & stem mastering", "Příprava pro streaming (Spotify, Apple Music)", "Příprava pro CD / vinyl", "Mix pro TV a reklamu", "Loudness normalizace"],
  },
  {
    icon: "🎬",
    title: "Dabing & Post-produkce",
    desc: "Profesionální dabing filmů, seriálů, dokumentů a komerčních spotů.",
    items: ["Dabované překlady", "Voice-over pro reklamy", "Audio post-produkce videa", "Sound design", "Foley efekty"],
  },
  {
    icon: "🎼",
    title: "Kompozice & Aranžmá",
    desc: "Tvorba originální hudby a aranžování pro nejrůznější obsazení.",
    items: ["Hudba na zakázku pro reklamy", "Aranžmá pro kapelu / orchestr", "MIDI produkce & beat making", "Průvodní texty a melodie", "Partitury a noty"],
  },
  {
    icon: "🎤",
    title: "Karaoke Produkce",
    desc: "Specializovaná výroba karaoke stop v profesionální kvalitě.",
    items: ["CDG karaoke formát", "MP4 karaoke video", "Přesný přepis textu & timing", "Česky & slovensky", "Online prodej na karaokesong.eu"],
  },
  {
    icon: "🎸",
    title: "Umělecká Agentura",
    desc: "Zastupujeme kapely a zajišťujeme komplexní servis pro akce.",
    items: ["ABBA Star (pop tribute show)", "Sifon Original (legendární rocková kapela)", "Queenways (Queen tribute)", "Electric Therapy", "Ozvučení & osvětlení akcí"],
  },
];

const pricingCards = [
  {
    badge: "Základní",
    title: "Nahrávání / hodina",
    price: "na dotaz",
    unit: "Cena dle rozsahu projektu",
    features: ["Přístup do nahrávací kabiny", "Obsluha zvukaře", "Základní editace stop", "Soubory ve WAV / MP3"],
    featured: false,
    cta: { label: "Nezávazná poptávka", className: btnOutline, href: "/kontakt" },
  },
  {
    badge: "Populární",
    title: "Demo Balíček",
    price: "na dotaz",
    unit: "Pro začínající umělce",
    features: ["2–4 hodiny nahrávání", "Základní mix", "2 revize mixu", "Mastering 1 skladby", "Soubory WAV + MP3 320kbps"],
    featured: true,
    cta: { label: "Rezervovat", className: btnPrimary, href: "/kontakt" },
  },
  {
    badge: "Premium",
    title: "Album / EP",
    price: "na dotaz",
    unit: "Kompletní produkce",
    features: ["Neomezené nahrávání", "Profesionální mix všech skladeb", "Mastering celého alba", "Příprava pro CD & streaming", "Konzultace produkce", "Archivace surových stop"],
    featured: false,
    cta: { label: "Nezávazná poptávka", className: btnOutline, href: "/kontakt" },
  },
];

export default function SluzbyPage() {
  return (
    <>
      <PageHero
        badge="Co nabízíme"
        title={<>Služby & <span className="text-[#f0c040]">Ceník</span></>}
        description="Kompletní přehled našeho portfolia — od nahrávání přes mastering až po karaoke produkci."
      />

      {/* Detailní přehled služeb */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Nabídka
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Co pro vás uděláme
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {serviceCards.map(({ icon, title, desc, items }, i) => (
              <FadeUp key={title} delay={i * 0.06}>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 hover:border-[rgba(212,160,23,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.2)] rounded-xl flex items-center justify-center text-2xl mb-4">
                    {icon}
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#8888a0] text-sm leading-relaxed mb-4">{desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#8888a0]">
                        <span className="text-[#d4a017] flex-shrink-0 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Ceník */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
              Ceník
            </span>
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Transparentní ceny
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
            <p className="text-[#8888a0] mt-4 max-w-[56ch] mx-auto">
              Vyberte si variantu, která nejlépe odpovídá vašemu projektu. Všechny ceny jsou bez DPH.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {pricingCards.map(({ badge, title, price, unit, features, featured, cta }, i) => (
              <FadeUp key={title} delay={i * 0.08}>
                <div
                  className={`relative rounded-2xl p-10 h-full flex flex-col transition-all duration-300 ${
                    featured
                      ? "border border-[#d4a017] shadow-[0_0_40px_rgba(212,160,23,0.15),0_8px_32px_rgba(0,0,0,0.5)]"
                      : "bg-white/[0.04] border border-white/10"
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a07810] to-[#d4a017] text-black text-[0.7rem] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg">
                      Nejoblíbenější
                    </div>
                  )}
                  <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
                    {badge}
                  </span>
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {title}
                  </h3>
                  <div
                    className="text-[#f0c040] font-extrabold my-4 leading-none"
                    style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.5rem" }}
                  >
                    {price}
                  </div>
                  <div className="text-[#8888a0] text-sm mb-6">{unit}</div>
                  <ul className="flex flex-col flex-1 mb-8">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 py-2 border-b border-white/10 text-sm text-[#8888a0] last:border-b-0"
                      >
                        <span className="text-[#d4a017] font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={cta.href} className={cta.className}>
                    {cta.label}
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="mt-10 bg-[rgba(212,160,23,0.07)] border border-[rgba(212,160,23,0.2)] rounded-xl p-6 text-[#8888a0] text-sm leading-relaxed">
              <strong className="text-[#f0c040]">⚠ Poznámka:</strong> Přesné ceny závisí na rozsahu, složitosti a době trvání projektu.
              Kontaktujte nás pro nezávaznou cenovou nabídku přesně na míru vašim potřebám.
              Při dlouhodobé spolupráci nebo větším objemu prací nabízíme množstevní slevy.
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[650px] w-[90vw] mx-auto text-center">
          <FadeUp>
            <h2
              className="text-white mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Máte zájem? Ozvěte se!
            </h2>
            <p className="text-[#8888a0] mb-8">
              Rádi vám připravíme cenovou nabídku přesně dle vašich potřeb a rozpočtu.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                📧 Napsat nám
              </Link>
              <a
                href="tel:+420603332100"
                className="inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300"
              >
                📞 +420 603 332 100
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
