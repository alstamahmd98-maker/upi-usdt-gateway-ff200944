import { BarChart3, Target, Code, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Payment Analysis",
    description: "Tailored payment solutions for your business and region.",
    link: "#"
  },
  {
    icon: Target,
    title: "Payment Strategy",
    description: "Smarter payment mix, better success rates.",
    link: "#"
  },
  {
    icon: Code,
    title: "Integration & Testing",
    description: "SDK & API integration with end-to-end support for fast go-live.",
    link: "#"
  },
  {
    icon: Shield,
    title: "Risk & Settlement",
    description: "D0 settlement, 24/7 auto-pay, secure funds.",
    link: "#"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Secure and seamless cross-border payments.
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-cta-blue font-medium hover:underline">
            See All Service
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-l-4 border-transparent hover:border-cta-blue"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-cta-blue/10 flex items-center justify-center mb-5 group-hover:bg-cta-blue transition-colors">
                <service.icon className="w-6 h-6 text-cta-blue group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center gap-1 text-sm font-medium text-cta-blue hover:underline"
              >
                See Details
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
