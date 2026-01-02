import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, CreditCard, MessageCircle, Phone, Sparkles, TrendingUp, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

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

const stats = [
  { icon: TrendingUp, value: "99.9%", label: "Success Rate" },
  { icon: Clock, value: "< 5min", label: "Settlement Time" },
  { icon: Globe, value: "24/7", label: "Support Available" },
  { icon: Sparkles, value: "50+", label: "Partner Networks" }
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const UsdtExchange = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--darker-blue))] overflow-hidden">
      <Header />
      <main>
        {/* Hero Section with Premium Design */}
        <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cta-blue/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta-blue/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cta-blue/5 to-transparent rounded-full" />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-white/50 mb-12"
            >
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-white/30">/</span>
              <span className="text-cta-blue">USDT exchange for INR</span>
            </motion.nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta-blue/10 border border-cta-blue/30 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-cta-blue" />
                  <span className="text-cta-blue text-sm font-medium">Premium Exchange Service</span>
                </div>
                
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                  USDT ⇄ INR
                  <br />
                  <span className="bg-gradient-to-r from-cta-blue via-blue-400 to-cta-blue bg-clip-text text-transparent">
                    Hybrid Fund Channel
                  </span>
                </h1>
                
                <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Third-party Payment Solutions with IMPS, UPI & Bank Cards support. 
                  Experience <span className="text-white font-medium">safe, stable & efficient</span> transactions.
                </p>

                {/* Key Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {[
                    "IMPS / UPI / Bank Cards",
                    "Hybrid Fund",
                    "Prepayment USDT",
                    "Min 50 USDT"
                  ].map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 text-white/80 rounded-lg text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://t.me/LBT_00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cta-blue to-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-cta-blue/25 hover:shadow-cta-blue/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    Start Trading
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://t.me/NDpay888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Join Channel
                  </a>
                </div>
              </motion.div>

              {/* Right - Premium Rate Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cta-blue via-blue-400 to-cta-blue rounded-3xl blur opacity-30" />
                
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#26A17B] to-[#1a7a5c] flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl">₮</span>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">USDT</p>
                        <p className="text-white/50 text-sm">Tether USD</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <span className="text-green-400 text-xs font-medium">Live Rate</span>
                    </div>
                  </div>

                  {/* Exchange Rate Display */}
                  <div className="text-center py-8 border-y border-white/10">
                    <p className="text-white/50 text-sm mb-2">Current Exchange Rate</p>
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-white text-2xl">1 USDT</span>
                      <span className="text-cta-blue text-2xl">=</span>
                      <span className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-cta-blue to-blue-400 bg-clip-text text-transparent">
                        105-110
                      </span>
                      <span className="text-white text-2xl">INR</span>
                    </div>
                    <p className="text-white/40 text-sm mt-3">
                      *Final rate confirmed via real-time coordination
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF9F00] to-[#e08b00] flex items-center justify-center">
                        <span className="text-white font-bold">₹</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">INR</p>
                        <p className="text-white/50 text-xs">Indian Rupee</p>
                      </div>
                    </div>
                    <a
                      href="https://t.me/LBT_00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-cta-blue text-white rounded-xl font-medium hover:bg-cta-blue/90 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-[hsl(var(--darker-blue))] to-[hsl(var(--dark-blue))]">
          <div className="container mx-auto px-4">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-cta-blue/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-cta-blue" />
                  </div>
                  <p className="font-heading text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-[hsl(var(--dark-blue))] relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-cta-blue/10 border border-cta-blue/30 rounded-full text-cta-blue text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Premium Features
              </h2>
              <p className="text-white/60 text-lg">
                Industry-leading solutions for seamless USDT to INR exchange
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cta-blue/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cta-blue/30 transition-all duration-300 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cta-blue/30 to-cta-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-cta-blue" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Contacts Section */}
        <section className="py-20 bg-[hsl(var(--darker-blue))] relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cta-blue/10 rounded-full blur-[150px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-cta-blue/10 border border-cta-blue/30 rounded-full text-cta-blue text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-white/60 text-lg">
                Connect with our dedicated support team via Telegram or WhatsApp
              </p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative group ${contact.isPrimary ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                >
                  {contact.isPrimary && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cta-blue to-blue-400 rounded-2xl blur opacity-30" />
                  )}
                  <div className={`relative h-full bg-gradient-to-br ${contact.isPrimary ? 'from-cta-blue/20 to-white/5' : 'from-white/10 to-white/5'} backdrop-blur-sm border ${contact.isPrimary ? 'border-cta-blue/30' : 'border-white/10'} rounded-2xl p-6 hover:border-cta-blue/50 transition-all duration-300`}>
                    {contact.isPrimary && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-cta-blue/20 rounded-full">
                        <span className="text-cta-blue text-xs font-medium">Primary Contact</span>
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl ${contact.isPrimary ? 'bg-cta-blue' : 'bg-white/10'} flex items-center justify-center mb-4`}>
                      <MessageCircle className={`w-6 h-6 ${contact.isPrimary ? 'text-white' : 'text-cta-blue'}`} />
                    </div>
                    
                    <p className="text-cta-blue font-semibold text-sm mb-4">{contact.role}</p>
                    
                    <div className="space-y-3">
                      <a
                        href={contact.telegramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group/link"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#229ED9]/20 flex items-center justify-center group-hover/link:bg-[#229ED9]/30 transition-colors">
                          <MessageCircle className="w-4 h-4 text-[#229ED9]" />
                        </div>
                        <span className="text-sm">{contact.telegram}</span>
                      </a>
                      
                      {contact.whatsapp && (
                        <a
                          href={contact.whatsappLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group/link"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center group-hover/link:bg-[#25D366]/30 transition-colors">
                            <Phone className="w-4 h-4 text-[#25D366]" />
                          </div>
                          <span className="text-sm">{contact.whatsapp}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Work Channel CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-white/50 mb-4">Official Work Channel</p>
              <a
                href="https://t.me/NDpay888"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cta-blue to-blue-500 text-white rounded-2xl font-semibold shadow-2xl shadow-cta-blue/30 hover:shadow-cta-blue/50 transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg">t.me/NDpay888</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cta-blue via-blue-600 to-blue-700" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/50 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to Start Trading?
              </h2>
              <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied traders. Experience premium USDT to INR exchange with competitive rates and lightning-fast settlement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://t.me/LBT_00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-cta-blue rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact on Telegram
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
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
