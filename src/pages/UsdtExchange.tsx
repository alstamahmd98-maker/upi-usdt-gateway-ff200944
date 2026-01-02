import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, RefreshCw, Shield, Zap, Clock, CheckCircle, Wallet, Building, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Conversion",
    description: "Lightning-fast USDT to INR conversion with competitive rates updated in real-time."
  },
  {
    icon: Shield,
    title: "Secure & Stable",
    description: "Enterprise-grade security with multi-layer protection for all transactions."
  },
  {
    icon: Clock,
    title: "D0 Settlement",
    description: "Same-day settlement available. Get your funds quickly and efficiently."
  },
  {
    icon: CheckCircle,
    title: "Verified Channels",
    description: "All channels are verified and compliant with regulatory requirements."
  }
];

const steps = [
  {
    number: "01",
    title: "Register Account",
    description: "Create your account and complete KYC verification process."
  },
  {
    number: "02",
    title: "Submit Order",
    description: "Enter the amount of USDT you want to exchange and confirm the rate."
  },
  {
    number: "03",
    title: "Transfer USDT",
    description: "Send USDT to our secure wallet address provided in the order."
  },
  {
    number: "04",
    title: "Receive INR",
    description: "INR will be credited to your bank account within the settlement time."
  }
];

const stats = [
  { value: "84.50", label: "Current Rate", suffix: "₹" },
  { value: "10M+", label: "Monthly Volume", suffix: "" },
  { value: "99.9%", label: "Success Rate", suffix: "" },
  { value: "24/7", label: "Support", suffix: "" }
];

const UsdtExchange = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]/90" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-cta-red/20 text-cta-red text-sm font-semibold mb-6">
                  Hybrid Fund Channel
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  USDT ⇄ INR
                  <br />
                  <span className="text-cta-red">Exchange</span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                  Hybrid Fund · Third-party Payment · Safe / Stable / Efficient
                </p>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Professional USDT to INR exchange service with competitive rates, 
                  fast settlement, and enterprise-grade security. Trusted by businesses 
                  for cross-border payments in India.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://t.me/DJI149"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cta-red text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1"
                  >
                    Start Exchange
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right - Exchange Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6 text-center">
                  Quick Exchange
                </h3>
                
                {/* From */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">You Send</label>
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#26A17B] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">₮</span>
                    </div>
                    <div className="flex-1">
                      <input 
                        type="number" 
                        defaultValue="1000"
                        className="w-full bg-transparent text-2xl font-bold text-foreground outline-none"
                      />
                    </div>
                    <span className="text-muted-foreground font-medium">USDT</span>
                  </div>
                </div>

                {/* Exchange Icon */}
                <div className="flex justify-center my-4">
                  <div className="w-12 h-12 rounded-full bg-cta-red/10 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-cta-red" />
                  </div>
                </div>

                {/* To */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">You Receive</label>
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-[#FF9F00] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">₹</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-foreground">84,500</p>
                    </div>
                    <span className="text-muted-foreground font-medium">INR</span>
                  </div>
                </div>

                {/* Rate Info */}
                <div className="p-4 bg-green-50 rounded-xl mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Exchange Rate</span>
                    <span className="font-semibold text-green-600">1 USDT = ₹84.50</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-cta-red text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-colors">
                  Exchange Now
                </button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Minimum: 100 USDT · Settlement: D0/T+1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-cta-red">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                    {stat.suffix}{stat.value}
                  </p>
                  <p className="text-white/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cta-red text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Secure and Efficient Exchange
              </h2>
              <p className="text-muted-foreground">
                Experience the best USDT to INR exchange service with competitive rates and reliable settlement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
                >
                  <div className="w-14 h-14 rounded-lg bg-cta-red/10 flex items-center justify-center mb-5 group-hover:bg-cta-red transition-colors">
                    <feature.icon className="w-6 h-6 text-cta-red group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-cta-red text-sm font-semibold uppercase tracking-wider">
                Simple Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Exchange USDT to INR in just 4 simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-card h-full">
                    <div className="w-12 h-12 rounded-full bg-cta-red text-white flex items-center justify-center font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-cta-red" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Channels Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cta-red text-sm font-semibold uppercase tracking-wider">
                  Multiple Channels
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                  Supported Payment Channels
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We support multiple payment channels for INR disbursement, ensuring 
                  fast and reliable fund transfers to your preferred destination.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Building, title: "Bank Transfer", desc: "Direct transfer to any Indian bank account" },
                    { icon: Wallet, title: "UPI", desc: "Instant transfer via UPI ID" },
                    { icon: Users, title: "Business Account", desc: "Settlement to corporate accounts" },
                    { icon: TrendingUp, title: "Bulk Settlement", desc: "High-volume batch processing" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-cta-red/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-cta-red" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
                  alt="Payment Channels"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">100% Verified</p>
                      <p className="text-sm text-muted-foreground">All channels compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[hsl(var(--darker-blue))]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Exchanging?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using our USDT to INR exchange service. 
              Get started today with competitive rates and reliable settlement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/DJI149"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta-red text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1"
              >
                Contact Us on Telegram
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsdtExchange;
