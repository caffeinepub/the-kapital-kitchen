const WA_LINK =
  "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20The%20Kapital%20Kitchen";

const dishes = [
  {
    name: "Crispy Spring Rolls",
    image: "/assets/generated/dish-springrolls.dim_400x300.jpg",
    desc: "Golden crispy rolls with spicy dipping sauce",
    price: "₹120",
  },
  {
    name: "Hakka Noodles",
    image: "/assets/generated/dish-hakkanoodles.dim_400x300.jpg",
    desc: "Tossed with fresh veggies & soy sauce",
    price: "₹150",
  },
  {
    name: "Chili Chicken",
    image: "/assets/generated/dish-chilichicken.dim_400x300.jpg",
    desc: "Crispy chicken in fiery chili sauce",
    price: "₹220",
  },
  {
    name: "Veg Fried Rice",
    image: "/assets/generated/dish-friedrice.dim_400x300.jpg",
    desc: "Wok-tossed rice with crunchy vegetables",
    price: "₹140",
  },
];

export function FeaturedDishes() {
  return (
    <section id="featured" className="py-20 sm:py-28 bg-kapital-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Our Specialties
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            Our Signature Dishes
          </h2>
          <div className="w-16 h-0.5 bg-kapital-amber mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`dish-card reveal reveal-delay-${i + 1} bg-kapital-card rounded-xl overflow-hidden border border-kapital-border group`}
              data-ocid={`featured.item.${i + 1}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="font-semibold text-kapital-text text-sm sm:text-base mb-1 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-kapital-muted text-xs mb-3 leading-relaxed">
                  {dish.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-kapital-amber text-base font-cinzel">
                    {dish.price}
                  </span>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kapital-amber text-xs font-semibold hover:text-kapital-amber-dark transition-colors uppercase tracking-wider"
                    data-ocid={`featured.primary_button.${i + 1}`}
                  >
                    Order →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
