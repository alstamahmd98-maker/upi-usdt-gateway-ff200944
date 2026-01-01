import { useState, useEffect } from "react";
import { Menu, X, Search, MessageCircle } from "lucide-react";

const TopBar = () => (
  <div className="bg-[hsl(var(--darker-blue))] text-white/80 text-sm py-2">
    <div className="container mx-auto px-4 flex items-center justify-between">
      <span>India Cross-Border Payments | Specializing in Category II & III collection services</span>
      <div className="hidden md:flex items-center gap-4">
        <a href="https://t.me/DJI149" className="hover:text-white transition-colors">Telegram</a>
        <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "USDT exchange for INR", href: "#exchange" },
    { label: "Core Business", href: "#services" },
    { label: "Industry News", href: "#news" },
    { label: "About", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              DJI<span className="text-primary">-PAY</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 hover:bg-secondary rounded-full transition-colors">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <a
              href="https://t.me/DJI149"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Support</span>
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-cta-orange text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://t.me/DJI149"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Support
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
