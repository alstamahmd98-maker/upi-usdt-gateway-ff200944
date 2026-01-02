import { TrendingUp, Layers, CreditCard, Headphones } from "lucide-react";

const features = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Superior Payment Success Rate",
    description: "Through innovative solutions, we deliver fast and reliable payment processing to ensure higher success rates."
  },
  {
    number: "02",
    icon: Layers,
    title: "Seamless Integration",
    description: "We provide an easy-to-integrate SDK, full documentation, and expert technical support to help you go live quickly and smoothly."
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Multiple Payment Methods",
    description: "Supporting H5/APP payments, wallets, debit cards, credit cards, UPI, net banking, and dozens of other payment methods."
  },
  {
    number: "04",
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions or issues."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 left-6 px-3 py-1 bg-cta-red text-white text-xs font-bold rounded">
                / {feature.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-cta-red/10 flex items-center justify-center mb-5 group-hover:bg-cta-red group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-cta-red group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cta-red rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
