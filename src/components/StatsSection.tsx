import { Users, Briefcase, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "80+",
    label: "Active Agents",
    description: "Trusted partners worldwide",
  },
  {
    icon: Briefcase,
    value: "80K+",
    label: "Clients Served",
    description: "Growing every year",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Countries",
    description: "Global reach",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable service",
  },
];

const StatsSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-4">
            Industry-Leading
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            India Payment Solutions
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            DJI India's team delivers optimized payment solutions with high success rates and powerful risk control.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 text-center group hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 shadow-accent-glow group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="text-center text-primary-foreground/80 mt-12 text-lg font-medium">
          Indian payments, global reach. 🌍
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
