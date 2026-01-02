import { ArrowRight, RefreshCw, Shield, Zap } from "lucide-react";

const ExchangeSection = () => {
  return (
    <section id="exchange" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-cta-blue/10 text-cta-blue text-sm font-semibold mb-4">
              USDT ⇄ INR Exchange
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              USDT ⇄ INR
              <br />
              <span className="text-cta-blue">Hybrid Fund Channel</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Hybrid Fund · Third-party Payment · Safe / Stable / Efficient
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Zap, text: "Fast conversion with competitive rates" },
                { icon: Shield, text: "Secure and stable transactions" },
                { icon: RefreshCw, text: "D0 settlement available" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cta-blue/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cta-blue" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://t.me/DJI149"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cta-blue text-white rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Learn more
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Exchange Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cta-blue/5 to-cta-blue/10 rounded-2xl p-8">
              {/* Exchange Card */}
              <div className="bg-white rounded-xl shadow-card-hover p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#26A17B] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">₮</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">USDT</p>
                      <p className="text-sm text-muted-foreground">Tether</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-bold text-2xl text-foreground">1,000</p>
                    <p className="text-sm text-muted-foreground">Amount</p>
                  </div>
                </div>

                {/* Exchange Arrow */}
                <div className="flex justify-center my-4">
                  <div className="w-12 h-12 rounded-full bg-cta-blue/10 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-cta-blue" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF9F00] flex items-center justify-center">
                      <span className="text-white font-bold text-lg">₹</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">INR</p>
                      <p className="text-sm text-muted-foreground">Indian Rupee</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-bold text-2xl text-foreground">84,500</p>
                    <p className="text-sm text-muted-foreground">≈ 84.5 per USDT</p>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 bg-cta-blue text-white rounded-lg font-semibold hover:opacity-90 transition-colors">
                  Start Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeSection;
