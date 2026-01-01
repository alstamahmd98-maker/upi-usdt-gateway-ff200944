import { CheckCircle2, Zap, Shield, Clock, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Superior Payment Success Rate",
    description: "Through innovative solutions, we deliver fast and reliable payment processing to ensure higher success rates.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "We provide an easy-to-integrate SDK, full documentation, and expert technical support to help you go live quickly.",
  },
  {
    icon: BarChart3,
    title: "Multiple Payment Methods",
    description: "Supporting H5/APP payments, wallets, debit cards, credit cards, UPI, net banking, and dozens of other methods.",
  },
  {
    icon: Clock,
    title: "D0 Settlement",
    description: "Same-day settlement ensuring your funds are available when you need them, improving cash flow management.",
  },
  {
    icon: Shield,
    title: "Localized Risk Control",
    description: "Advanced risk management system designed specifically for the Indian market to protect your transactions.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Ready",
    description: "Fully compliant with local regulations and international standards for cross-border transactions.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="exchange" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built for
              <br />
              <span className="text-gradient-primary">Cross-Border Success</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We focus on providing platforms, e-commerce companies, and enterprises with 
              multi-channel collection and payment services. Our solutions support D0 settlement 
              and localized risk control, helping you operate steadily in the Indian market.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {["Native PTM & Auto QR Scan", "INR Repatriation Support", "NetBank & E-wallet Integration"].map(
                (point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{point}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border shadow-soft hover:shadow-medium hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
