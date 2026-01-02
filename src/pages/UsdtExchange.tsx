import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, CreditCard, MessageCircle, Phone } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Multi-rail Clearing & Settlement",
    description: "IMPS / UPI / bank cards in parallel to boost success rate and payout speed."
  },
  {
    icon: Shield,
    title: "Prepaid Guarantee",
    description: "USDT prepayment with transparent flow; flexible quota from 50 USDT for trials and scaling."
  },
  {
    icon: Zap,
    title: "Stability & Risk Control",
    description: "Hybrid fund routing with failover to reduce interruptions and failures."
  },
  {
    icon: MessageCircle,
    title: "Real-time Communication",
    description: "Telegram / WhatsApp coverage; final rate & route based on live coordination."
  }
];

const contacts = [
  {
    role: "Company Lead / Boss",
    telegram: "@LBT_00",
    telegramLink: "https://t.me/LBT_00",
    whatsapp: "+44 7454814457",
    whatsappLink: "https://wa.me/447454814457"
  },
  {
    role: "Customer Service",
    telegram: "@ND_pay",
    telegramLink: "https://t.me/ND_pay",
    whatsapp: null,
    whatsappLink: null
  },
  {
    role: "Customer Service",
    telegram: "@qiansy66",
    telegramLink: "https://t.me/qiansy66",
    whatsapp: "+44 7599830171",
    whatsappLink: "https://wa.me/447599830171"
  },
  {
    role: "Customer Service",
    telegram: "@fang12345600000000",
    telegramLink: "https://t.me/fang12345600000000",
    whatsapp: "+44 7512418870",
    whatsappLink: "https://wa.me/447512418870"
  },
  {
    role: "Customer Service",
    telegram: "@maque666666",
    telegramLink: "https://t.me/maque666666",
    whatsapp: "+44 7742606892",
    whatsappLink: "https://wa.me/447742606892"
  },
  {
    role: "Customer Service",
    telegram: "@xiaobao880604",
    telegramLink: "https://t.me/xiaobao880604",
    whatsapp: "+44 7856408736",
    whatsappLink: "https://wa.me/447856408736"
  },
  {
    role: "Customer Service",
    telegram: "@jie5555555666",
    telegramLink: "https://t.me/jie5555555666",
    whatsapp: "+44 7746820536",
    whatsappLink: "https://wa.me/447746820536"
  },
  {
    role: "Customer Service",
    telegram: "@NDpay186",
    telegramLink: "https://t.me/NDpay186",
    whatsapp: "+85 294480554",
    whatsappLink: "https://wa.me/85294480554"
  }
];

const UsdtExchange = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--darker-blue))]">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="pt-24 pb-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/60">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span>/</span>
              <span className="text-cta-orange">USDT exchange for INR</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                USDT ⇄ INR Hybrid Fund Channel | Third-party Payment | Supports IMPS / UPI / Bank Cards
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
                Safe / Stable / Efficient, supports IMPS, UPI, bank cards; Hybrid Fund third-party payment channel. USDT prepayment, minimum 50 USDT per transaction. Contact via Telegram or WhatsApp for long-term cooperation.
              </p>

              {/* Rate Display Card */}
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-2">Exchange Rate</p>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                    1 USDT ≈ <span className="text-cta-orange">105 - 110</span> INR
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    Rate band for illustration only. Final rate via real-time chat.
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Supports IMPS / UPI / Bank Cards",
                  "Hybrid Fund (Third-party Payment)",
                  "Safe / Stable / Efficient",
                  "Prepayment in USDT required",
                  "Minimum 50 USDT"
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-cta-orange/20 text-cta-orange rounded-full text-sm font-medium border border-cta-orange/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-[hsl(var(--dark-blue))]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-cta-orange/20 flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-cta-orange" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Integration & Team Contacts Section */}
        <section className="py-16 bg-[hsl(var(--darker-blue))]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Channel Integration & Team Contacts
              </h2>
              <p className="text-white/70">
                Contact our team via Telegram or WhatsApp for inquiries and cooperation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-cta-orange font-semibold text-sm mb-4">{contact.role}</p>
                  
                  <div className="space-y-3">
                    <a
                      href={contact.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white hover:text-cta-orange transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">Telegram: {contact.telegram}</span>
                    </a>
                    
                    {contact.whatsapp && (
                      <a
                        href={contact.whatsappLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white hover:text-cta-orange transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="text-sm">WhatsApp: {contact.whatsapp}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Work Channel */}
            <div className="mt-12 text-center">
              <p className="text-white/60 mb-4">Work Channel</p>
              <a
                href="https://t.me/NDpay888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-cta-orange text-white rounded-lg font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                t.me/NDpay888
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cta-orange">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Exchanging?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us via Telegram or WhatsApp to start USDT to INR exchange with competitive rates and reliable settlement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LBT_00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta-orange rounded-lg font-semibold hover:bg-white/90 transition-all transform hover:-translate-y-1"
              >
                Contact on Telegram
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-all"
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