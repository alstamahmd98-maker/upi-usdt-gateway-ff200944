import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, CreditCard, MessageCircle, Phone, Wallet, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CreditCard,
    title: "Multi-rail Clearing & Settlement",
    description: "IMPS / UPI / bank cards in parallel to boost success rate and payout speed."
  },
  {
    icon: Wallet,
    title: "Prepaid Guarantee",
    description: "USDT prepayment with transparent flow; flexible quota from 50 USDT for trials and scaling."
  },
  {
    icon: Shield,
    title: "Stability & Risk Control",
    description: "Hybrid fund routing with failover to reduce interruptions and failures."
  },
  {
    icon: HeadphonesIcon,
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
    whatsappLink: "https://wa.me/447454814457",
    isPrimary: true
  },
  { 
    role: "Customer Service", 
    telegram: "@ND_pay", 
    telegramLink: "https://t.me/ND_pay", 
    whatsapp: "+44 7599830171", 
    whatsappLink: "https://wa.me/447599830171",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@qiansy66", 
    telegramLink: "https://t.me/qiansy66", 
    whatsapp: "+44 7599830171", 
    whatsappLink: "https://wa.me/447599830171",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@fang12345600000000", 
    telegramLink: "https://t.me/fang12345600000000", 
    whatsapp: "+44 7512418870", 
    whatsappLink: "https://wa.me/447512418870",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@maque666666", 
    telegramLink: "https://t.me/maque666666", 
    whatsapp: "+44 7742606892", 
    whatsappLink: "https://wa.me/447742606892",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@xiaobao880604", 
    telegramLink: "https://t.me/xiaobao880604", 
    whatsapp: "+44 7856408736", 
    whatsappLink: "https://wa.me/447856408736",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@jie5555555666", 
    telegramLink: "https://t.me/jie5555555666", 
    whatsapp: "+44 7746820536", 
    whatsappLink: "https://wa.me/447746820536",
    isPrimary: false
  },
  { 
    role: "Customer Service", 
    telegram: "@NDpay186", 
    telegramLink: "https://t.me/NDpay186", 
    whatsapp: "+85 294480554", 
    whatsappLink: "https://wa.me/85294480554",
    isPrimary: false
  }
];

const UsdtExchange = () => {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--darker-blue))]/80 via-[hsl(var(--darker-blue))]/85 to-[hsl(var(--darker-blue))]" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cta-blue/20 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Exchange Rate Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto mb-8"
            >
              <div className="relative group">
                <motion.div 
                  className="absolute -inset-1 bg-cta-blue/30 rounded-2xl blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative bg-[hsl(var(--dark-blue))] border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-[#26A17B] flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-2xl">₮</span>
                      </motion.div>
                      <span className="text-white font-semibold text-xl">1 USDT</span>
                    </div>
                    <motion.div 
                      className="text-white/50 text-3xl font-light"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      =
                    </motion.div>
                    <div className="flex items-center gap-4">
                      <motion.span 
                        className="text-4xl font-bold text-cta-blue"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        105-110
                      </motion.span>
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-[#FF9F00] flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-2xl">₹</span>
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm text-center mt-5">Rate confirmed via real-time coordination</p>
                </div>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                USDT ⇄ INR Hybrid Fund Channel | Third-party Payment | Supports IMPS / UPI / Bank Cards
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Safe / Stable / Efficient, supports IMPS, UPI, bank cards; Hybrid Fund third-party payment channel. 
                USDT prepayment, minimum 50 USDT per transaction. Contact via Telegram or WhatsApp for long-term cooperation.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 bg-[hsl(var(--darker-blue))]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-[hsl(var(--dark-blue))] border border-white/10 rounded-xl p-5 hover:border-cta-blue/30 hover:shadow-lg hover:shadow-cta-blue/5 transition-all duration-300"
                >
                  <motion.div 
                    className="w-11 h-11 rounded-lg bg-cta-blue/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-5 h-5 text-cta-blue" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-12 bg-dark-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white">
                Channel Integration & Team Contacts
              </h2>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className={`bg-[hsl(var(--dark-blue))] border rounded-xl p-4 transition-all duration-300 ${
                    contact.isPrimary 
                      ? 'border-cta-blue/50 ring-1 ring-cta-blue/20 shadow-lg shadow-cta-blue/10' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3 className="font-heading font-semibold text-white text-sm mb-3">{contact.role}</h3>
                  
                  {/* Telegram */}
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-[#229ED9] shrink-0" />
                    <span className="text-white/50 text-xs">Telegram:</span>
                    <a 
                      href={contact.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta-blue hover:underline text-xs truncate"
                    >
                      {contact.telegram}
                    </a>
                  </div>
                  
                  {/* WhatsApp */}
                  {contact.whatsapp && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span className="text-white/50 text-xs">WhatsApp:</span>
                      <a 
                        href={contact.whatsappLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cta-blue hover:underline text-xs"
                      >
                        {contact.whatsapp}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Work Channel CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <motion.div 
                className="inline-flex items-center gap-3 px-5 py-3 bg-cta-blue/10 border border-cta-blue/30 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white/70 text-sm">➡ ⚡⚡ Work channel welcomes everyone:</span>
                <a
                  href="https://t.me/NDpay888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta-blue font-semibold hover:underline inline-flex items-center gap-1 text-sm"
                >
                  t.me/NDpay888
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/70 text-sm">⚡⚡</span>
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
