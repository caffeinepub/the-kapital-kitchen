const WA_LINK =
  "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20The%20Kapital%20Kitchen";

export function HeroSection() {
  const scrollToMenu = () => {
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-noodles.dim_1200x600.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 pt-36">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-kapital-amber/50 bg-kapital-amber/10 text-kapital-amber text-sm font-medium mb-6 backdrop-blur-sm">
          <span>🌙</span>
          <span className="uppercase tracking-widest text-xs font-semibold">
            Open Till Late Night
          </span>
        </div>

        {/* Eyebrow */}
        <p className="text-kapital-amber text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold mb-4">
          Vasai West, Maharashtra
        </p>

        {/* Headline */}
        <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide max-w-3xl mb-6">
          Best Chinese Food
          <br />
          <span className="text-kapital-amber">in Vasai</span> –
          <br />
          Fast, Fresh &amp; Affordable
        </h1>

        {/* Subheading */}
        <p className="text-kapital-muted text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Late-night delivery &amp; takeaway — because hunger doesn’t wait
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kapital-amber text-kapital-bg font-bold text-base rounded-full hover:bg-kapital-amber-hover transition-all hover:scale-105 active:scale-95 shadow-lg"
            data-ocid="hero.primary_button"
          >
            🛵 Order on WhatsApp
          </a>
          <button
            type="button"
            onClick={scrollToMenu}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-kapital-amber text-kapital-amber font-bold text-base rounded-full hover:bg-kapital-amber/10 transition-all hover:scale-105 active:scale-95"
            data-ocid="hero.secondary_button"
          >
            📋 View Menu
          </button>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "4.8★", label: "Average Rating" },
            { value: "2 AM", label: "We Stay Open" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-cinzel text-2xl font-bold text-kapital-amber">
                {stat.value}
              </div>
              <div className="text-kapital-muted text-sm mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
