interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
}

export default function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="pt-[calc(72px+4rem)] pb-16 bg-gradient-to-b from-[#111118] to-[#0a0a0f] border-b border-white/10 text-center">
      <div className="max-w-[1200px] w-[90vw] mx-auto">
        {badge && (
          <span className="inline-block px-3 py-1 mb-4 bg-[rgba(212,160,23,0.15)] border border-[rgba(212,160,23,0.35)] rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#f0c040]">
            {badge}
          </span>
        )}
        <h1
          className="text-white mb-3"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="text-[#8888a0] max-w-[55ch] mx-auto"
            style={{ fontSize: "1.05rem" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
