import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { withBase } from "@/utils/paths";

const badge = (text: string) => (
  <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
    {text}
  </span>
);

const accentLine = (
  <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3" />
);

const btnPrimary =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#a07810] to-[#d4a017] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_0_0] hover:shadow-[0_0_40px_rgba(212,160,23,0.25)]";
const btnOutline =
  "inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url('${withBase("/images/studio/control_room.jpg")}')`,
            filter: "brightness(0.35) saturate(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,15,0.65)] via-[rgba(10,10,15,0.3)] to-[rgba(10,10,15,0.8)]" />
        <div className="relative z-10 max-w-[1200px] w-[90vw] mx-auto pt-[72px]">
          <p className="text-[#d4a017] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Plzeň · od roku 1991
          </p>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Zvuk, který<br />
            <span className="text-[#f0c040]">přesahuje čas</span>
          </h1>
          <p className="text-[rgba(232,232,240,0.8)] text-lg max-w-[55ch] mb-8">
            Profesionální nahrávací studio s více než 28 lety zkušeností.
            Nahrávání, mastering, audio/video produkce, dabing a karaoke — vše pod jednou střechou.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/kontakt" className={btnPrimary}>
              <span>📞</span> Zarezervovat termín
            </Link>
            <Link href="/studio" className={btnOutline}>
              <span>🎙</span> Prohlédnout studio
            </Link>
          </div>
          <div className="mt-16 flex gap-10 flex-wrap">
            {[
              { num: "28+", label: "Let zkušeností" },
              { num: "500+", label: "Projektů" },
              { num: "100%", label: "Spokojenost" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="text-[#f0c040] text-4xl font-extrabold leading-none"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {num}
                </span>
                <span className="text-[#8888a0] text-xs uppercase tracking-widest mt-1">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAG BAND */}
      <section className="py-12 bg-gradient-to-br from-[#18181f] to-[#111118] border-y border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {["🎵 Nahrávání","🎚 Mastering","✂️ Editace","🎬 Dabing","🎤 Karaoke","🎼 Aranžmá","📀 Publikace","🎸 Agentura"].map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[#8888a0] text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* O STUDIU */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              {badge("O nás")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Víc než jen nahrávací studio
              </h2>
              {accentLine}
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Studio Accent vzniklo v roce 1991 v Plzni a od té doby se stalo domovem stovek umělců, kapel a projektů.
                Naši zkušení zvukáři jsou vašimi partnery — od prvního akkordu po finální master.
              </p>
              <p className="text-[#8888a0] mt-3 leading-relaxed">
                Disponujeme profesionálním vybavením, akusticky ošetřenými prostory a letitými know-how v oblasti
                záznamu, mixáže, dabingu i specializované karaoke produkce.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/studio" className={btnPrimary}>Prohlédnout studio</Link>
                <Link href="/sluzby" className={btnOutline}>Naše služby</Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Image
                src={withBase("/images/studio/main_studio.jpg")}
                alt="Řídicí místnost studia Accent"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                loading="lazy"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <FadeUp className="text-center mb-10">
            {badge("Služby")}
            <h2
              className="text-white mb-2"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Co pro vás uděláme
            </h2>
            <span className="block w-16 h-[3px] bg-gradient-to-r from-[#d4a017] to-[#f0c040] rounded mt-3 mx-auto" />
            <p className="text-[#8888a0] mt-4 max-w-[56ch] mx-auto">
              Komplexní portfolio audio a video služeb pro umělce, firmy i komerční projekty.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🎙", title: "Nahrávání & Produkce", desc: "Profesionální nahrávání zpěvu, nástrojů, mluveného slova. Kompletní audio produkce od základů po hotový produkt." },
              { icon: "🎚", title: "Mix & Mastering", desc: "Pečlivý mix se zachováním charakteru nahrávky. Mastering připravený pro streamovací platformy, CD i vinyl." },
              { icon: "🎬", title: "Dabing & Hlas", desc: "Profesionální dabing filmů, reklam a firemních videí. Spolupracujeme s ostřílenými hlasovými herci." },
              { icon: "🎤", title: "Karaoke Produkce", desc: "Specializovaná výroba karaoke stop v profesionální kvalitě. Provozujeme také online shop karaokesong.eu." },
              { icon: "🎸", title: "Umělecká Agentura", desc: "Zastupujeme kapely ABBA Star, Sifon Original, Queenways a Electric Therapy. Zajišťujeme ozvučení akcí." },
              { icon: "🎼", title: "Kompozice & Aranžmá", desc: "Komponujeme hudbu na míru, aranžujeme pro různé obsazení, píšeme partitury a MIDI produkce." },
            ].map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 0.05}>
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-[rgba(212,160,23,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[rgba(212,160,23,0.12)] border border-[rgba(212,160,23,0.2)] rounded-xl flex items-center justify-center text-2xl mb-5">
                    {icon}
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#8888a0] text-sm leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/sluzby" className={btnPrimary}>Zobrazit ceník</Link>
          </div>
        </div>
      </section>

      {/* PRO UMĚLCE */}
      <section className="py-24">
        <div className="max-w-[1200px] w-[90vw] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <Image
                src={withBase("/images/studio/vocal_booth.jpg")}
                alt="Nahrávání v studiovém kabině"
                width={600}
                height={480}
                className="rounded-2xl border border-white/10 object-cover w-full max-h-[480px]"
                loading="lazy"
              />
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge("Pro umělce")}
              <h2
                className="text-white mb-2"
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, lineHeight: 1.15 }}
              >
                Váš zvuk, vaše vize
              </h2>
              {accentLine}
              <p className="text-[#8888a0] mt-5 leading-relaxed">
                Ať jste začínající zpěvák nebo etablovaná kapela, přistupujeme ke každému projektu
                individuálně. Naším cílem je zachytit váš originální zvuk a přivést ho k dokonalosti.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  { title: "Zvukotěsná nahrávací kabina", sub: "Ideální pro zpěv, akustické nástroje a mluvené slovo" },
                  { title: "Akusticky ošetřená řídicí místnost", sub: "Přesné referenční poslechy pro spolehlivý mix" },
                  { title: "Profesionální konzole & hardware", sub: "Analogový teplo i digitální přesnost v jednom" },
                ].map(({ title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 p-4 bg-white/[0.04] border border-white/10 rounded-xl hover:border-[rgba(212,160,23,0.3)] hover:translate-x-1 transition-all duration-300"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d4a017] flex-shrink-0" />
                    <div>
                      <strong className="text-white text-sm">{title}</strong>
                      <span className="block text-[#8888a0] text-xs mt-0.5">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-[#111118] border-t border-white/10">
        <div className="max-w-[700px] w-[90vw] mx-auto text-center">
          {badge("Začněte dnes")}
          <FadeUp>
            <h2
              className="text-white mb-3"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700 }}
            >
              Připraveni nahrávat?
            </h2>
            <p className="text-[#8888a0] text-base mb-8">
              Kontaktujte nás a domluvíme termín, který vám vyhovuje. Konzultace zdarma.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/kontakt" className={btnPrimary}>📞 Kontaktovat studio</Link>
              <Link href="/reference" className={btnOutline}>🎵 Ukázky nahrávek</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
