import { Facebook, Instagram, Twitter } from "lucide-react";

const WA_LINK =
  "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20The%20Kapital%20Kitchen";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-kapital-bg border-t border-kapital-border">
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍜</span>
              <span className="font-cinzel text-base font-bold tracking-widest text-kapital-amber uppercase">
                The Kapital Kitchen
              </span>
            </div>
            <p className="text-kapital-muted text-sm mb-4 italic">
              Fast. Fresh. Affordable.
            </p>
            <p className="text-kapital-muted text-xs leading-relaxed">
              Vasai West, Maharashtra — serving bold Chinese flavors since day
              one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-kapital-amber uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-kapital-muted text-sm hover:text-kapital-amber transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest text-kapital-amber uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-5">
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-kapital-border flex items-center justify-center text-kapital-muted hover:text-kapital-amber hover:border-kapital-amber transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-kapital-border flex items-center justify-center text-kapital-muted hover:text-kapital-amber hover:border-kapital-amber transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-kapital-border flex items-center justify-center text-kapital-muted hover:text-kapital-amber hover:border-kapital-amber transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </button>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 text-sm hover:text-green-300 transition-colors font-medium"
            >
              💬 Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-kapital-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kapital-muted">
          <p>
            © {year} The Kapital Kitchen. All rights reserved. | Vasai West,
            Maharashtra
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kapital-amber transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
