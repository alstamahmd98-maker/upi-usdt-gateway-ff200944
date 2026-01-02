import { MessageCircle, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "USDT Exchange", href: "#exchange" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    { label: "Payment Collection", href: "#" },
    { label: "USDT ⇄ INR Exchange", href: "#exchange" },
    { label: "API Integration", href: "#" },
    { label: "Risk Management", href: "#" },
    { label: "D0 Settlement", href: "#" }
  ];

  return (
    <footer className="bg-[hsl(var(--darker-blue))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-cta-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-heading font-bold text-xl">
                DJI<span className="text-cta-orange">-PAY</span>
              </span>
            </a>
            <p className="text-white/70 mb-6 leading-relaxed">
              India's trusted platform for payment collection and USDT exchange. 
              Making cross-border business simpler.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cta-orange transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-cta-orange" />
                <span className="text-white/70">Telegram: @DJI149</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cta-orange" />
                <span className="text-white/70">support@upiusdt.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cta-orange" />
                <span className="text-white/70">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} DJI-PAY. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Hybrid Fund · Third-party Payment · Safe / Stable / Efficient
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
