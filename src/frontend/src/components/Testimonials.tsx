const reviews = [
  {
    name: "Rahul S.",
    stars: 5,
    text: "Best Chinese in Vasai no cap! The Hakka Noodles are fire 🔥 I order at least twice a week.",
  },
  {
    name: "Priya M.",
    stars: 5,
    text: "Super affordable and so tasty. The Chili Chicken is my absolute fav. Late night delivery is a lifesaver!",
  },
  {
    name: "Rohan K.",
    stars: 5,
    text: "Ordered after 11pm and got fresh hot food. These guys are legends. Will definitely come again!",
  },
  {
    name: "Sneha T.",
    stars: 4.5,
    text: "Veg Momos + Spring Rolls combo is unbeatable. Great taste at student-friendly prices 😍",
  },
  {
    name: "Aarav P.",
    stars: 5,
    text: "Tried the Dragon Chicken for the first time — absolutely insane! The Kapital Kitchen never disappoints.",
  },
];

function StarRating({
  stars,
  reviewName,
}: { stars: number; reviewName: string }) {
  const full = Math.floor(stars);
  const half = stars % 1 >= 0.5;
  const starKeys = Array.from(
    { length: full },
    (_, i) => `${reviewName}-star-${i + 1}`,
  );
  return (
    <div className="flex gap-0.5">
      {starKeys.map((key) => (
        <span key={key} className="text-kapital-amber text-lg">
          ★
        </span>
      ))}
      {half && <span className="text-kapital-amber text-lg">⯨</span>}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-kapital-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Reviews
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            What Our Customers Say
          </h2>
          <div className="w-16 h-0.5 bg-kapital-amber mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${(i % 3) + 1} bg-kapital-card border border-kapital-border rounded-xl p-6 hover:border-kapital-amber/40 transition-colors`}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <StarRating stars={review.stars} reviewName={review.name} />
              <p className="text-kapital-text text-sm leading-relaxed my-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-kapital-amber/20 border border-kapital-amber/40 flex items-center justify-center">
                  <span className="text-kapital-amber font-bold text-sm">
                    {review.name[0]}
                  </span>
                </div>
                <span className="font-semibold text-kapital-amber text-sm">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
