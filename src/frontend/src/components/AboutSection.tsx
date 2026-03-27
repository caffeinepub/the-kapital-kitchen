export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-kapital-card">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal relative rounded-2xl overflow-hidden">
            <img
              src="/assets/generated/hero-noodles.dim_1200x600.jpg"
              alt="The Kapital Kitchen food"
              className="w-full h-72 sm:h-96 object-cover rounded-2xl"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl border border-kapital-amber/20" />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-kapital-bg/90 backdrop-blur-sm border border-kapital-amber/40 rounded-xl px-4 py-3">
              <p className="text-kapital-amber font-cinzel font-bold text-lg">
                Since Day One
              </p>
              <p className="text-kapital-muted text-xs">
                Serving Vasai with love 🍜
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-2">
            <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white tracking-wide mb-6 leading-tight">
              Bringing the Best Chinese Flavors to Vasai
            </h2>
            <p className="text-kapital-muted leading-relaxed mb-8 text-sm sm:text-base">
              The Kapital Kitchen was born from a simple belief — great food
              should be affordable, fast, and available when you need it most.
              Located in the heart of Vasai West, we've been serving bold
              Chinese flavors to students, families, and late-night cravings
              since day one.
            </p>
            <p className="text-kapital-muted leading-relaxed mb-8 text-sm sm:text-base">
              Every dish is crafted with fresh ingredients, wok-tossed to
              perfection with the same love and dedication we had on our very
              first day. From crispy spring rolls to fiery chili chicken — every
              bite tells our story.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "💰", label: "Affordable Pricing" },
                { icon: "⭐", label: "Quality Taste" },
                { icon: "🌙", label: "Late Night Open" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 px-4 py-2 bg-kapital-bg border border-kapital-border rounded-full text-sm font-medium text-kapital-text"
                >
                  <span>{pill.icon}</span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
