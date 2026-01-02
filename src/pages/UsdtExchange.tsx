import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, CreditCard, MessageCircle, Phone, Wallet, HeadphonesIcon } from "lucide-react";
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
    whatsapp: null, 
    whatsappLink: null,
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
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]/95" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Exchange Rate Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-md mx-auto mb-10"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-cta-blue/30 rounded-2xl blur-xl group-hover:bg-cta-blue/40 transition-all duration-500" />
                <div className="relative bg-[hsl(var(--dark-blue))] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#26A17B] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">₮</span>
                      </div>
                      <span className="text-white font-semibold text-lg">1 USDT</span>
                    </div>
                    <div className="text-white/50 text-2xl">=</div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl md:text-4xl font-bold text-cta-blue">
                        105-110
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#FF9F00] flex items-center justify-center">
                        <span className="text-white font-bold text-xl">₹</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm text-center mt-4">Rate confirmed via real-time coordination</p>
                </div>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                USDT ⇄ INR Hybrid Fund Channel | Third-party Payment | Supports IMPS / UPI / Bank Cards
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
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
        <section className="py-16 bg-[hsl(var(--darker-blue))]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[hsl(var(--dark-blue))] border border-white/10 rounded-xl p-6 hover:border-cta-blue/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-cta-blue/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cta-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-16 bg-dark-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
                Channel Integration & Team Contacts
              </h2>
            </motion.div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-[hsl(var(--dark-blue))] border rounded-xl p-5 transition-all duration-300 ${
                    contact.isPrimary 
                      ? 'border-cta-blue/50 ring-1 ring-cta-blue/20' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3 className="font-heading font-bold text-white mb-4">{contact.role}</h3>
                  
                  {/* Telegram */}
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-[#229ED9] shrink-0" />
                    <span className="text-white/60 text-sm">Telegram:</span>
                    <a 
                      href={contact.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta-blue hover:underline text-sm truncate"
                    >
                      {contact.telegram}
                    </a>
                  </div>
                  
                  {/* WhatsApp */}
                  {contact.whatsapp && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span className="text-white/60 text-sm">WhatsApp:</span>
                      <a 
                        href={contact.whatsappLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cta-blue hover:underline text-sm"
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
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-cta-blue/10 border border-cta-blue/30 rounded-xl">
                <span className="text-white/80">➡ ⚡⚡ ➡ Work channel welcomes everyone:</span>
                <a
                  href="https://t.me/NDpay888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  t.me/NDpay888
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-white/80">👈 ⚡⚡</span>
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
