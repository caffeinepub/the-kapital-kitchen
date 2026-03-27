const features = [
  {
    icon: "⚡",
    title: "Fast Service",
    desc: "Ready in minutes, hot at your door",
  },
  {
    icon: "💰",
    title: "Budget-Friendly",
    desc: "Great food without burning a hole in your pocket",
  },
  {
    icon: "🌙",
    title: "Open Late Night",
    desc: "We're open when others aren't — until 2 AM",
  },
  {
    icon: "🍜",
    title: "Best Taste in Vasai",
    desc: "Authentic Chinese flavors, cooked fresh every time",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#1A1D1F" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Our Promise
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            Why Choose The Kapital Kitchen?
          </h2>
          <div className="w-16 h-0.5 bg-kapital-amber mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal reveal-delay-${i + 1} bg-kapital-bg rounded-xl p-6 border-t-2 border-kapital-amber border-x border-b border-x-kapital-border border-b-kapital-border text-center group hover:bg-kapital-bg/80 transition-colors`}
              data-ocid={`why.item.${i + 1}`}
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="font-cinzel font-bold text-white text-sm sm:text-base mb-2 tracking-wide">
                {feat.title}
              </h3>
              <p className="text-kapital-muted text-xs sm:text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
