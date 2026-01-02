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
            {/* Exchange Rate Card - Glass Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="max-w-[280px] mx-auto mb-6 md:mb-8"
            >
              <div className="relative">
                {/* Background blur circle */}
                <div className="absolute -inset-4 bg-cta-blue/20 rounded-full blur-2xl" />
                
                <div className="relative">
                  {/* Glass card */}
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    {/* Currency row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-8 h-8 rounded-lg bg-[#26A17B] flex items-center justify-center"
                          whileHover={{ rotate: 10 }}
                        >
                          <span className="text-white font-bold text-sm">₮</span>
                        </motion.div>
                        <div>
                          <p className="text-white/50 text-[10px]">From</p>
                          <p className="text-white font-semibold text-sm">USDT</p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: [0, 180, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center"
                      >
                        <span className="text-white/50 text-xs">⟳</span>
                      </motion.div>
                      
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <p className="text-white/50 text-[10px]">To</p>
                          <p className="text-white font-semibold text-sm">INR</p>
                        </div>
                        <motion.div 
                          className="w-8 h-8 rounded-lg bg-[#FF9F00] flex items-center justify-center"
                          whileHover={{ rotate: -10 }}
                        >
                          <span className="text-white font-bold text-sm">₹</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Rate display */}
                    <div className="bg-[hsl(var(--darker-blue))]/80 rounded-xl p-3 text-center">
                      <p className="text-white/40 text-[10px] mb-1">1 USDT =</p>
                      <motion.p 
                        className="text-cta-blue font-bold text-2xl"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        105 - 110 <span className="text-white/60 text-sm font-normal">INR</span>
                      </motion.p>
                    </div>
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

            {/* Contact Cards - New Style */}
            <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-4 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group relative"
                >
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    contact.isPrimary ? 'bg-cta-blue/30' : 'bg-white/10'
                  }`} />
                  
                  <div className={`relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 ${
                    contact.isPrimary 
                      ? 'border-cta-blue/40' 
                      : 'border-white/10 group-hover:border-white/20'
                  }`}>
                    {/* Role badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${contact.isPrimary ? 'bg-cta-blue' : 'bg-white/30'}`} />
                      <span className="text-white/70 text-[11px] font-medium uppercase tracking-wider">{contact.role}</span>
                    </div>
                    
                    {/* Contact links */}
                    <div className="space-y-2">
                      {/* Telegram */}
                      <a 
                        href={contact.telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-[#229ED9]/10 transition-colors group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#229ED9]/20 flex items-center justify-center group-hover/link:bg-[#229ED9]/30 transition-colors">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#229ED9">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                          </svg>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#229ED9] text-sm font-medium">Telegram:</span>
                          <span 
                            className="text-white font-medium text-sm group-hover/link:text-[#229ED9] transition-colors"
                            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                          >
                            {contact.telegram}
                          </span>
                        </div>
                      </a>
                      
                      {/* WhatsApp */}
                      {contact.whatsapp && (
                        <a 
                          href={contact.whatsappLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-[#25D366]/10 transition-colors group/link"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center group-hover/link:bg-[#25D366]/30 transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#25D366] text-sm font-medium">WhatsApp:</span>
                            <span 
                              className="text-white font-medium text-sm group-hover/link:text-[#25D366] transition-colors"
                              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}
                            >
                              {contact.whatsapp}
                            </span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
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
                      <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="white">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
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
