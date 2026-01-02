import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    subtitle: "Professional and efficient payment collection and disbursement solutions in India",
    title: "Making cross-border business connections with the Indian market simpler",
    description: "We focus on providing platforms, e-commerce companies, and enterprises with multi-channel collection and payment services through UPI, bank cards, and wallets. Our solutions support D0 settlement and localized risk control, helping you operate steadily in the Indian market.",
    cta: "Get Started Now",
    ctaLink: "https://t.me/DJI149",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
  },
  {
    id: 2,
    subtitle: "Fast Integration, Full Local Channel Support",
    title: "Fast Integration，Full Local Channel Support",
    description: "Support for UPI auto-scan, card payments, net banking, and wallets. Backed by full documentation and expert technical support, integration is faster, smoother, and worry-free.",
    cta: "Contact Us",
    ctaLink: "https://t.me/DJI149",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
  },
  {
    id: 3,
    subtitle: "USDT exchange for INR",
    title: "USDT ⇄ INR Hybrid Fund Channel",
    description: "Hybrid Fund · Third-party Payment · Safe / Stable / Efficient",
    cta: "Learn more",
    ctaLink: "#exchange",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]/85" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                {index === currentSlide && (
                  <>
                    <p 
                      className="text-cta-blue text-sm md:text-base font-medium mb-4 animate-slide-in"
                      style={{ animationDelay: '0.1s' }}
                    >
                      {slide.subtitle}
                    </p>
                    <h1 
                      className="text-white text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-in"
                      style={{ animationDelay: '0.2s' }}
                    >
                      {slide.title}
                    </h1>
                    <p 
                      className="text-white/80 text-base md:text-lg mb-8 max-w-2xl animate-slide-in"
                      style={{ animationDelay: '0.3s' }}
                    >
                      {slide.description}
                    </p>
                    <a
                      href={slide.ctaLink}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-cta-blue text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1 animate-slide-in"
                      style={{ animationDelay: '0.4s' }}
                    >
                      {slide.cta}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-cta-blue w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
