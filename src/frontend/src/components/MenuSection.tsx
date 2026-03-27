import { useState } from "react";

type Category = "All" | "Starters" | "Noodles" | "Rice" | "Chinese Specials";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  veg: boolean;
  category: Category;
}

const menuItems: MenuItem[] = [
  {
    name: "Crispy Spring Rolls",
    desc: "Fried golden rolls with spicy sauce",
    price: "₹120",
    veg: true,
    category: "Starters",
  },
  {
    name: "Manchurian Dry",
    desc: "Crispy veg balls in tangy sauce",
    price: "₹140",
    veg: true,
    category: "Starters",
  },
  {
    name: "Chili Paneer",
    desc: "Soft paneer cubes in chili sauce",
    price: "₹160",
    veg: true,
    category: "Starters",
  },
  {
    name: "Veg Momos (6 pcs)",
    desc: "Steamed dumplings with chili oil",
    price: "₹110",
    veg: true,
    category: "Starters",
  },
  {
    name: "Hakka Noodles (Veg)",
    desc: "Classic tossed noodles",
    price: "₹150",
    veg: true,
    category: "Noodles",
  },
  {
    name: "Hakka Noodles (Chicken)",
    desc: "Noodles with juicy chicken",
    price: "₹190",
    veg: false,
    category: "Noodles",
  },
  {
    name: "Schezwan Noodles",
    desc: "Spicy Schezwan-style noodles",
    price: "₹160",
    veg: true,
    category: "Noodles",
  },
  {
    name: "Singapore Noodles",
    desc: "Thin rice noodles with spices",
    price: "₹170",
    veg: true,
    category: "Noodles",
  },
  {
    name: "Veg Fried Rice",
    desc: "Wok-tossed with veggies",
    price: "₹140",
    veg: true,
    category: "Rice",
  },
  {
    name: "Egg Fried Rice",
    desc: "Classic egg fried rice",
    price: "₹160",
    veg: false,
    category: "Rice",
  },
  {
    name: "Chicken Fried Rice",
    desc: "Juicy chicken fried rice",
    price: "₹190",
    veg: false,
    category: "Rice",
  },
  {
    name: "Schezwan Fried Rice",
    desc: "Spicy Schezwan rice",
    price: "₹160",
    veg: true,
    category: "Rice",
  },
  {
    name: "Chili Chicken (Dry)",
    desc: "Crispy chicken in chili sauce",
    price: "₹220",
    veg: false,
    category: "Chinese Specials",
  },
  {
    name: "Dragon Chicken",
    desc: "Fiery spicy chicken",
    price: "₹240",
    veg: false,
    category: "Chinese Specials",
  },
  {
    name: "Honey Chili Potato",
    desc: "Sweet-spicy potato fingers",
    price: "₹150",
    veg: true,
    category: "Chinese Specials",
  },
  {
    name: "Triple Schezwan Combo",
    desc: "Schezwan Rice + Noodles Combo",
    price: "₹280",
    veg: true,
    category: "Chinese Specials",
  },
];

const categories: Category[] = [
  "All",
  "Starters",
  "Noodles",
  "Rice",
  "Chinese Specials",
];

export function MenuSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-kapital-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            What We Serve
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            Explore Our Menu
          </h2>
          <div className="w-16 h-0.5 bg-kapital-amber mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all uppercase tracking-wider border ${
                active === cat
                  ? "bg-kapital-amber text-kapital-bg border-kapital-amber"
                  : "bg-kapital-card text-kapital-muted border-kapital-border hover:border-kapital-amber hover:text-kapital-amber"
              }`}
              data-ocid="menu.tab"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="bg-kapital-card border border-kapital-border rounded-xl p-4 flex items-start gap-3 hover:border-kapital-amber/50 transition-colors"
              data-ocid={`menu.item.${i + 1}`}
            >
              <div className="mt-1 flex-shrink-0">
                <div
                  className={`w-3 h-3 rounded-sm border-2 ${
                    item.veg ? "border-green-500" : "border-red-500"
                  } flex items-center justify-center`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`}
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-kapital-text text-sm leading-tight mb-0.5">
                  {item.name}
                </h3>
                <p className="text-kapital-muted text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="font-bold text-kapital-amber text-sm font-cinzel">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
