import { Toaster } from "@/components/ui/sonner";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { FeaturedDishes } from "./components/FeaturedDishes";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { Navbar } from "./components/Navbar";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-kapital-bg text-kapital-text">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedDishes />
        <AboutSection />
        <MenuSection />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1A1D1F",
            color: "#F2F2F2",
            border: "1px solid #2A2E33",
          },
        }}
      />
    </div>
  );
}
