import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const WA_LINK =
  "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20The%20Kapital%20Kitchen";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", phone: "", message: "" });
      toast.success("Message sent! We'll call you back soon 😊");
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-kapital-card">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="text-kapital-amber text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-wide uppercase">
            Contact Us
          </h2>
          <div className="w-16 h-0.5 bg-kapital-amber mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Map + details */}
          <div className="reveal space-y-6">
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-kapital-border">
              <iframe
                src="https://maps.google.com/maps?q=Vasai+West,+Maharashtra&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Kapital Kitchen Location"
              />
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Vasai West, Maharashtra - 401202" },
                { icon: Phone, text: "+91 99999 99999" },
                { icon: Clock, text: "Mon–Sun: 12:00 PM – 2:00 AM" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-kapital-muted text-sm"
                >
                  <Icon
                    size={16}
                    className="text-kapital-amber flex-shrink-0"
                  />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors"
              data-ocid="contact.primary_button"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.modal"
            >
              <div>
                <Label
                  htmlFor="contact-name"
                  className="text-kapital-muted text-sm mb-1.5 block uppercase tracking-wider"
                >
                  Your Name
                </Label>
                <Input
                  id="contact-name"
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="bg-kapital-bg border-kapital-border text-kapital-text placeholder:text-kapital-muted/60 focus:border-kapital-amber focus:ring-kapital-amber"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-phone"
                  className="text-kapital-muted text-sm mb-1.5 block uppercase tracking-wider"
                >
                  Phone Number
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  required
                  className="bg-kapital-bg border-kapital-border text-kapital-text placeholder:text-kapital-muted/60 focus:border-kapital-amber focus:ring-kapital-amber"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact-message"
                  className="text-kapital-muted text-sm mb-1.5 block uppercase tracking-wider"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="I'd like to order / enquire about..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  className="bg-kapital-bg border-kapital-border text-kapital-text placeholder:text-kapital-muted/60 focus:border-kapital-amber focus:ring-kapital-amber resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full py-3 bg-kapital-amber hover:bg-kapital-amber-hover text-kapital-bg font-bold uppercase tracking-wider rounded-full transition-all"
                data-ocid="contact.submit_button"
              >
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
