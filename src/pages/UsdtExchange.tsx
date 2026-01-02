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

// Text animation variants
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut" as const
    }
  })
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const UsdtExchange = () => {
  const title = "USDT ⇄ INR Exchange";
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]/90" />
          </div>

          {/* Animated gradient orbs */}
          <motion.div 
            className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(var(--cta-blue)) 0%, transparent 70%)" }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, hsl(var(--cta-blue)) 0%, transparent 70%)" }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          <div className="container mx-auto px-4 relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cta-blue/20 border border-cta-blue/30 rounded-full mb-8"
              >
                <motion.div 
                  className="w-2 h-2 bg-cta-blue rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-cta-blue text-sm font-semibold">Live Exchange Available</span>
              </motion.div>

              {/* Animated Title */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    custom={index}
                    className={char === "⇄" ? "text-cta-blue mx-2" : ""}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/70 mb-10 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Hybrid Fund Channel · Third-party Payment
              </motion.p>

              {/* Exchange Rate Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="max-w-md mx-auto mb-10"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-cta-blue/30 rounded-2xl blur-xl group-hover:bg-cta-blue/40 transition-all duration-500" />
                  <div className="relative bg-[hsl(var(--dark-blue))] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-[#26A17B] flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-white font-bold text-xl">₮</span>
                        </motion.div>
                        <span className="text-white font-semibold text-lg">1 USDT</span>
                      </div>
                      <motion.div 
                        className="text-white/50 text-2xl"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        =
                      </motion.div>
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-3xl md:text-4xl font-bold text-cta-blue"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          105-110
                        </motion.span>
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-[#FF9F00] flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-white font-bold text-xl">₹</span>
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm text-center mt-4">Rate confirmed via real-time coordination</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                <motion.a
                  href="https://t.me/LBT_00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-cta-blue hover:bg-cta-blue text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--cta-blue))]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Trading
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://t.me/NDpay888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Join Channel
                </motion.a>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex flex-wrap justify-center gap-x-8 gap-y-3"
              >
                {highlights.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-cta-blue" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-dark-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-cta-blue text-sm font-semibold uppercase tracking-wider">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3">Why Choose Us</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-cta-blue/30 transition-all duration-300"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-cta-blue/10 flex items-center justify-center mb-5 group-hover:bg-cta-blue/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.icon className="w-7 h-7 text-cta-blue" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-20 bg-[hsl(var(--darker-blue))]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-cta-blue text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-3 mb-3">Contact Our Team</h2>
              <p className="text-white/60">Reach us via Telegram or WhatsApp</p>
            </motion.div>

            {/* Primary Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto mb-10"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-cta-blue/20 rounded-2xl blur-lg group-hover:bg-cta-blue/30 transition-all duration-500" />
                <div className="relative bg-[hsl(var(--dark-blue))] border border-cta-blue/30 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold text-cta-blue bg-cta-blue/10 px-3 py-1.5 rounded-full">Primary Contact</span>
                    <span className="text-xs text-white/50">Company Lead</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      href="https://t.me/LBT_00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3.5 bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/30 rounded-xl text-[#229ED9] font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      @LBT_00
                    </motion.a>
                    <motion.a
                      href="https://wa.me/447454814457"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-xl text-[#25D366] font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Contacts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {contacts.filter(c => !c.isPrimary).map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cta-blue/30 rounded-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#229ED9]/15 flex items-center justify-center shrink-0 group-hover:bg-[#229ED9]/25 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#229ED9]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium truncate">{contact.telegram}</p>
                    {contact.whatsapp && (
                      <p className="text-white/50 text-sm truncate">{contact.whatsapp}</p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-cta-blue shrink-0 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Work Channel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-white/50 text-sm mb-4">Official Work Channel</p>
              <motion.a
                href="https://t.me/NDpay888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-cta-blue hover:bg-cta-blue text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--cta-blue))]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                t.me/NDpay888
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-cta-blue/90" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-white mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Start Trading?
              </motion.h2>
              <motion.p 
                className="text-white/90 mb-8 max-w-lg mx-auto text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Experience premium USDT to INR exchange with competitive rates and fast settlement.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="https://t.me/LBT_00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[hsl(var(--cta-blue))] rounded-xl font-bold hover:bg-white/90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact on Telegram
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Home
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsdtExchange;
