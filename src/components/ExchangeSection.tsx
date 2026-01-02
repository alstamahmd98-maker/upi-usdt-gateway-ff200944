import { ArrowRight, RefreshCw, Shield, Zap } from "lucide-react";
const ExchangeSection = () => {
  return <section id="exchange" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
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
              {[{
              icon: Zap,
              text: "Fast conversion with competitive rates"
            }, {
              icon: Shield,
              text: "Secure and stable transactions"
            }, {
              icon: RefreshCw,
              text: "D0 settlement available"
            }].map((item, index) => <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cta-blue/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cta-blue" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>)}
            </div>

            <a href="https://t.me/DJI149" className="inline-flex items-center gap-2 px-6 py-3 bg-cta-blue text-white rounded-lg font-semibold hover:opacity-90 transition-all">
              Learn more
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Exchange Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cta-blue/5 to-cta-blue/10 rounded-2xl p-8">
              {/* Exchange Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#26A17B] to-[#1a7a5c] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">₮</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg text-foreground">USDT</p>
                      <p className="text-sm text-muted-foreground">Tether</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-bold text-3xl text-cta-blue">1</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Amount</p>
                  </div>
                </div>

                {/* Exchange Arrow */}
                <div className="flex justify-center my-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cta-blue/20 to-cta-blue/5 flex items-center justify-center border-2 border-cta-blue/20">
                    <RefreshCw className="w-7 h-7 text-cta-blue" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9F00] to-[#e68900] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">₹</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg text-foreground">INR</p>
                      <p className="text-sm text-muted-foreground">Indian Rupee</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-heading font-bold text-2xl text-foreground">105-110</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Rate</p>
                  </div>
                </div>

                <button className="w-full mt-8 py-4 bg-gradient-to-r from-cta-blue to-cta-blue/90 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                  Start Exchange
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ExchangeSection;