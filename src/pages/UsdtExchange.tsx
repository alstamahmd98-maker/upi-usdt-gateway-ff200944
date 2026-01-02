import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, CreditCard, MessageCircle, Phone, Wallet, HeadphonesIcon, Send } from "lucide-react";
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
    <div className="min-h-screen bg-dark-gradient relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cta-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#26A17B]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#FF9F00]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cta-blue/5 rounded-full blur-[120px]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cta-blue/30 rounded-full"
            style={{
              left: `${5 + (i * 8) % 90}%`,
              top: `${10 + (i * 13) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.015]">
          {[...Array(8)].map((_, i) => (
            <div
              key={`line-${i}`}
              className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${i * 15}%`,
                left: '-50%',
                transform: 'rotate(-15deg)',
              }}
            />
          ))}
        </div>
      </div>
      
      <Header />
      <main className="relative z-10">
        {/* Hero Section - Mobile First */}
        <section className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=1920&q=80)` 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--darker-blue))]/90 via-[hsl(var(--darker-blue))]/85 to-[hsl(var(--darker-blue))]" />
          </div>

          {/* Floating particles - fewer on mobile */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
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
          
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            {/* Exchange Rate Card - Redesigned for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-sm mx-auto mb-6 md:mb-8"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#26A17B] via-cta-blue to-[#FF9F00] rounded-2xl blur-lg opacity-50"
                  animate={{ 
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative bg-[hsl(var(--dark-blue))]/95 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-6">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <span className="text-xs text-white/50 uppercase tracking-widest">Live Exchange Rate</span>
                  </div>
                  
                  {/* Currency Display - Vertical for Mobile */}
                  <div className="flex flex-col items-center gap-3">
                    {/* USDT */}
                    <div className="flex items-center gap-3 w-full justify-center">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#26A17B] to-[#1a7a5a] flex items-center justify-center shadow-lg shadow-[#26A17B]/30"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="text-white font-bold text-xl">₮</span>
                      </motion.div>
                      <div className="text-left">
                        <span className="text-white font-bold text-2xl">1</span>
                        <span className="text-white/60 text-sm ml-2">USDT</span>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <motion.div 
                      className="text-cta-blue"
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                    
                    {/* INR */}
                    <div className="flex items-center gap-3 w-full justify-center">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9F00] to-[#cc7f00] flex items-center justify-center shadow-lg shadow-[#FF9F00]/30"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        <span className="text-white font-bold text-xl">₹</span>
                      </motion.div>
                      <div className="text-left">
                        <motion.span 
                          className="text-cta-blue font-bold text-2xl"
                          animate={{ opacity: [1, 0.8, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          105-110
                        </motion.span>
                        <span className="text-white/60 text-sm ml-2">INR</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="mt-4 pt-3 border-t border-white/10 text-center">
                    <p className="text-white/40 text-xs">Rate confirmed via real-time coordination</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="max-w-4xl mx-auto text-center px-2">
              <motion.h1 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-4 leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                USDT ⇄ INR Hybrid Fund Channel
              </motion.h1>
              
              <motion.p 
                className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Safe / Stable / Efficient · IMPS, UPI, Bank Cards · Min 50 USDT
              </motion.p>
            </div>
          </div>
        </section>

        {/* Features Grid - Mobile Optimized */}
        <section className="py-8 md:py-12 relative overflow-hidden">
          {/* Section background */}
          <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cta-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cta-blue/20 to-transparent" />
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 bg-cta-blue/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#26A17B]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
          
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[hsl(var(--dark-blue))]/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-5 hover:border-cta-blue/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-cta-blue/10 flex items-center justify-center mb-2 md:mb-4">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-cta-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xs md:text-base mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed hidden md:block">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section - Mobile Optimized */}
        <section className="py-8 md:py-12 relative overflow-hidden">
          {/* Section background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#229ED9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-lg md:text-2xl font-heading font-bold text-white">
                Team Contacts
              </h2>
            </motion.div>

            {/* Contact Cards Grid - 2 columns on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`bg-[hsl(var(--dark-blue))] border rounded-xl p-2.5 md:p-4 transition-all duration-300 ${
                    contact.isPrimary 
                      ? 'border-cta-blue/50 ring-1 ring-cta-blue/20' 
                      : 'border-white/10'
                  }`}
                >
                  <h3 className="font-heading font-semibold text-white text-[10px] md:text-sm mb-2 truncate">{contact.role}</h3>
                  
                  {/* Telegram */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MessageCircle className="w-3 h-3 md:w-4 md:h-4 text-[#229ED9] shrink-0" />
                    <a 
                      href={contact.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cta-blue hover:text-white font-medium text-[11px] md:text-sm truncate transition-colors"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                    >
                      {contact.telegram}
                    </a>
                  </div>
                  
                  {contact.whatsapp && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 md:w-4 md:h-4 text-[#25D366] shrink-0" />
                      <a 
                        href={contact.whatsappLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cta-blue hover:text-white font-medium text-[10px] md:text-sm truncate transition-colors"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                      >
                        {contact.whatsapp}
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Work Channel CTA - Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-12 max-w-sm md:max-w-2xl mx-auto"
            >
              <div className="relative">
                {/* Animated glow background */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-cta-blue/40 via-[#26A17B]/40 to-cta-blue/40 rounded-2xl blur-lg opacity-50"
                  animate={{ 
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main card */}
                <div className="relative bg-[hsl(var(--dark-blue))]/95 backdrop-blur-sm border border-cta-blue/30 rounded-2xl p-4 md:p-6">
                  <div className="flex flex-col items-center gap-3 text-center">
                    {/* Icon */}
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cta-blue to-[#26A17B] flex items-center justify-center shadow-lg"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Send className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    
                    {/* Text content */}
                    <div>
                      <h3 className="text-white font-heading font-bold text-base md:text-lg mb-1">
                        Work Channel
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm">Join our Telegram group</p>
                    </div>
                    
                    {/* CTA Button */}
                    <motion.a
                      href="https://t.me/NDpay888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-cta-blue text-white font-semibold text-sm md:text-base rounded-xl shadow-lg shadow-cta-blue/30 transition-all duration-300 active:scale-95"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>@NDpay888</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </motion.a>
                  </div>
                </div>
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
