import Link from "next/link";

const pages = [
  { href: "/", label: "Úvod" },
  { href: "/studio", label: "Studio" },
  { href: "/sluzby", label: "Služby & Ceník" },
  { href: "/reference", label: "Reference" },
  { href: "/karaoke", label: "Karaoke" },
  { href: "/kontakt", label: "Kontakt" },
];

const services = [
  { href: "/sluzby", label: "Nahrávání" },
  { href: "/sluzby", label: "Mastering" },
  { href: "/sluzby", label: "Dabing" },
  { href: "/karaoke", label: "Karaoke produkce" },
  { href: "/sluzby", label: "Agentura" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111118] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1200px] w-[90vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-white font-extrabold text-xl"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Accent
            </div>
            <div className="text-[#d4a017] text-[0.7rem] uppercase tracking-[0.18em] mb-3">
              Recording Studio
            </div>
            <p className="text-[#8888a0] text-sm leading-relaxed">
              Profesionální nahrávací studio v Plzni s více než 28 lety
              zkušeností. Váš hudební sen v dobrých rukou.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4
              className="text-white text-xs uppercase tracking-[0.1em] font-bold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Stránky
            </h4>
            {pages.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="block text-[#8888a0] text-sm py-1 hover:text-[#f0c040] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-xs uppercase tracking-[0.1em] font-bold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Služby
            </h4>
            {services.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="block text-[#8888a0] text-sm py-1 hover:text-[#f0c040] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-xs uppercase tracking-[0.1em] font-bold mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Kontakt
            </h4>
            <a
              href="mailto:accent@razdva.cz"
              className="block text-[#8888a0] text-sm py-1 hover:text-[#f0c040] transition-colors duration-300"
            >
              accent@razdva.cz
            </a>
            <a
              href="tel:+420603332100"
              className="block text-[#8888a0] text-sm py-1 hover:text-[#f0c040] transition-colors duration-300"
            >
              +420 603 332 100
            </a>
            <Link
              href="/kontakt"
              className="block text-[#8888a0] text-sm py-1 hover:text-[#f0c040] transition-colors duration-300"
            >
              Božkovská 38, Plzeň
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[#8888a0] text-sm">
            © 2024 Accent Recording Studio. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-3">
            {[
              { href: "https://www.facebook.com", label: "f", title: "Facebook" },
              { href: "https://soundcloud.com", label: "☁", title: "SoundCloud" },
              { href: "https://youtube.com", label: "▶", title: "YouTube" },
            ].map(({ href, label, title }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-sm text-[#8888a0] hover:border-[#d4a017] hover:text-[#f0c040] hover:-translate-y-0.5 transition-all duration-300"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
