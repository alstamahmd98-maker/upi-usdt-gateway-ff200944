import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, CreditCard, MessageCircle, Phone, CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CreditCard,
    title: "Multi-rail Settlement",
    description: "IMPS / UPI / Bank cards in parallel"
  },
  {
    icon: Shield,
    title: "Prepaid Guarantee",
    description: "Transparent flow, min 50 USDT"
  },
  {
    icon: Zap,
    title: "Hybrid Fund Routing",
    description: "Failover for stability"
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Telegram & WhatsApp"
  }
];

const highlights = [
  "Safe & Stable Transactions",
  "D0 Settlement Available", 
  "Competitive Exchange Rates",
  "Real-time Coordination"
];

const contacts = [
  { role: "Boss", telegram: "@LBT_00", telegramLink: "https://t.me/LBT_00", whatsapp: "+44 7454814457", whatsappLink: "https://wa.me/447454814457", isPrimary: true },
  { role: "Service", telegram: "@ND_pay", telegramLink: "https://t.me/ND_pay", whatsapp: null, whatsappLink: null, isPrimary: false },
  { role: "Service", telegram: "@qiansy66", telegramLink: "https://t.me/qiansy66", whatsapp: "+44 7599830171", whatsappLink: "https://wa.me/447599830171", isPrimary: false },
  { role: "Service", telegram: "@fang12345600000000", telegramLink: "https://t.me/fang12345600000000", whatsapp: "+44 7512418870", whatsappLink: "https://wa.me/447512418870", isPrimary: false },
  { role: "Service", telegram: "@maque666666", telegramLink: "https://t.me/maque666666", whatsapp: "+44 7742606892", whatsappLink: "https://wa.me/447742606892", isPrimary: false },
  { role: "Service", telegram: "@xiaobao880604", telegramLink: "https://t.me/xiaobao880604", whatsapp: "+44 7856408736", whatsappLink: "https://wa.me/447856408736", isPrimary: false },
  { role: "Service", telegram: "@jie5555555666", telegramLink: "https://t.me/jie5555555666", whatsapp: "+44 7746820536", whatsappLink: "https://wa.me/447746820536", isPrimary: false },
  { role: "Service", telegram: "@NDpay186", telegramLink: "https://t.me/NDpay186", whatsapp: "+85 294480554", whatsappLink: "https://wa.me/85294480554", isPrimary: false }
];

const UsdtExchange = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <main>
        {/* Hero Section - Clean & Bold */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Main Hero Content */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-sm font-medium">Live Exchange Available</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    USDT <span className="text-blue-400">⇄</span> INR
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-white/60 mb-8 max-w-2xl mx-auto font-light">
                    Hybrid Fund Channel · Third-party Payment
                  </p>
                </motion.div>

                {/* Exchange Rate Card - Centered */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-md mx-auto mb-10"
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                    <div className="relative bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-[#26A17B] flex items-center justify-center">
                            <span className="text-white font-bold text-lg">₮</span>
                          </div>
                          <span className="text-white font-semibold">1 USDT</span>
                        </div>
                        <div className="text-white/40">=</div>
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            105-110
                          </span>
                          <div className="w-11 h-11 rounded-xl bg-[#FF9F00] flex items-center justify-center">
                            <span className="text-white font-bold text-lg">₹</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/40 text-xs text-center mt-4">Rate confirmed via real-time coordination</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="https://t.me/LBT_00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Start Trading
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://t.me/NDpay888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join Channel
                  </a>
                </motion.div>
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-x-8 gap-y-3"
              >
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid - Minimal */}
        <section className="py-16 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white/[0.02] hover:bg-white/[0.05] border-r border-white/5 last:border-r-0 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-white/50 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section - Clean Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Contact Our Team</h2>
              <p className="text-white/50">Reach us via Telegram or WhatsApp</p>
            </motion.div>

            {/* Primary Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto mb-8"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-slate-900 border border-white/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Primary Contact</span>
                    <span className="text-xs text-white/40">Company Lead</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://t.me/LBT_00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/20 rounded-lg text-[#229ED9] font-medium transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      @LBT_00
                    </a>
                    <a
                      href="https://wa.me/447454814457"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-lg text-[#25D366] font-medium transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Contacts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {contacts.filter(c => !c.isPrimary).map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center gap-3 p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 rounded-lg transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#229ED9]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#229ED9]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white text-sm font-medium truncate">{contact.telegram}</p>
                    {contact.whatsapp && (
                      <p className="text-white/40 text-xs truncate">{contact.whatsapp}</p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/40 shrink-0 ml-auto transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Work Channel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <p className="text-white/40 text-sm mb-3">Official Work Channel</p>
              <a
                href="https://t.me/NDpay888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                t.me/NDpay888
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA - Simple */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Start Trading?
              </h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Experience premium USDT to INR exchange with competitive rates and fast settlement.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://t.me/LBT_00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Contact on Telegram
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsdtExchange;
