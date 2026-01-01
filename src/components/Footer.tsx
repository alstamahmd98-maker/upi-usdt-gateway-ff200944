import { Wallet, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Payment Collection", href: "#services" },
      { label: "USDT Exchange", href: "#exchange" },
      { label: "API Integration", href: "#" },
      { label: "Risk Management", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Compliance", href: "#" },
      { label: "Security", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-primary-foreground">
                UPI<span className="text-gradient-accent">USDT</span>
              </span>
            </a>
            <p className="text-primary-foreground/60 mb-6 max-w-sm leading-relaxed">
              India's trusted platform for payment collection and USDT exchange. 
              Making cross-border business simpler since 2020.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>Telegram: @DJI149</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@upiusdt.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-primary-foreground mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} UPIUSDT. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/50">
              Hybrid Fund · Third-party Payment · Safe / Stable / Efficient
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
