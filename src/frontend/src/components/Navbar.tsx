import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20The%20Kapital%20Kitchen";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-kapital-bg/95 backdrop-blur-md shadow-lg border-b border-kapital-border"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <span className="text-2xl">🍜</span>
          <span className="font-cinzel text-sm sm:text-base font-bold tracking-widest text-kapital-amber uppercase leading-tight">
            The Kapital Kitchen
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium tracking-wider text-kapital-muted hover:text-kapital-amber transition-colors uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-kapital-amber text-kapital-bg font-semibold text-sm rounded-full hover:bg-kapital-amber-hover transition-colors uppercase tracking-wider"
            data-ocid="nav.primary_button"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-kapital-text p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-kapital-card border-b border-kapital-border px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-base font-medium text-kapital-muted hover:text-kapital-amber transition-colors uppercase tracking-wider w-full text-left"
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2 bg-kapital-amber text-kapital-bg font-semibold rounded-full hover:bg-kapital-amber-hover transition-colors uppercase tracking-wider"
                data-ocid="nav.primary_button"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
