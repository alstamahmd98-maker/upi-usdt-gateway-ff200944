import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 80, suffix: "+", label: "Agent" },
  { value: 80, suffix: "k+", label: "Served yearly" }
];

const CounterNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="counter-box pl-4">
      <div className="text-4xl md:text-5xl font-heading font-bold text-white">
        {count}{suffix}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-14 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)` 
        }}
      >
        <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="text-cta-blue text-sm font-semibold uppercase tracking-wider">
              Industry-Leading
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              India Payment Solutions
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              DJI India's New Delhi team delivers optimized payment solutions, including native PTM, 
              auto QR scan, D0 settlements, and INR repatriation. With support for NetBank, e-wallets, 
              VISA, EMI, and more, we ensure efficient payments with high success rates. A powerful 
              risk control system safeguards your transactions, guaranteeing secure and stable operations.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <CounterNumber target={stat.value} suffix={stat.suffix} />
                  <p className="text-white/60 mt-2 pl-4">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-white/70 mt-8 italic">
              Indian payments, global reach. 🌍
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
                alt="Payment Solutions"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cta-blue flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground">99.9% Uptime</p>
                    <p className="text-sm text-muted-foreground">Reliable & Stable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
