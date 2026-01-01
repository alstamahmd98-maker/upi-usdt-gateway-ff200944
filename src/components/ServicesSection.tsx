import { CreditCard, ArrowRightLeft, Code, Headphones } from "lucide-react";

const services = [
  {
    icon: CreditCard,
    title: "Payment Collection",
    description: "Multi-channel payment collection via UPI, bank cards, net banking, and digital wallets with high success rates.",
    features: ["UPI Auto-Scan", "Card Payments", "Net Banking", "E-Wallets"],
  },
  {
    icon: ArrowRightLeft,
    title: "USDT ⇄ INR Exchange",
    description: "Hybrid fund channel for seamless conversion between USDT and INR with competitive rates and instant processing.",
    features: ["Real-time Rates", "Instant Transfer", "Low Fees", "Secure"],
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Comprehensive SDK and API documentation with dedicated technical support for smooth integration.",
    features: ["SDK Support", "API Access", "Full Docs", "Dev Support"],
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support team ensuring your operations run smoothly at all times.",
    features: ["Live Chat", "Telegram", "Email", "Priority"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Payment Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to collect payments and manage cross-border transactions in the Indian market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-glow">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
