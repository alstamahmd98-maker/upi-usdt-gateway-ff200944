import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, CreditCard, Wallet, HeadphonesIcon } from "lucide-react";

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
      {/* Simplified Background - Static gradients only */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cta-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#FF9F00]/5 rounded-full blur-[100px]" />
      </div>
      
      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden">
          {/* Background with optimized gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--darker-blue))]/95 to-[hsl(var(--darker-blue))]" />

          <div className="container mx-auto px-3 md:px-4 relative z-10">
            {/* Exchange Rate Card - Static version */}
            <div className="max-w-[280px] mx-auto mb-5 md:mb-6 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-cta-blue/20 rounded-full blur-2xl" />
                
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    {/* Currency row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#26A17B] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">₮</span>
                        </div>
                        <div>
                          <p className="text-white/50 text-[10px]">From</p>
                          <p className="text-white font-semibold text-sm">USDT</p>
                        </div>
                      </div>
                      
                      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-white/50 text-xs">⟳</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <p className="text-white/50 text-[10px]">To</p>
                          <p className="text-white font-semibold text-sm">INR</p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-[#FF9F00] flex items-center justify-center">
                          <span className="text-white font-bold text-sm">₹</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rate display */}
                    <div className="bg-[hsl(var(--darker-blue))]/80 rounded-xl p-3 text-center">
                      <p className="text-white/40 text-[10px] mb-1">1 USDT =</p>
                      <p className="text-cta-blue font-bold text-2xl">
                        105 - 110 <span className="text-white/60 text-sm font-normal">INR</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center px-2 animate-fade-in">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-3 leading-snug">
                USDT ⇄ INR Hybrid Fund Channel
              </h1>
              
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md mx-auto">
                Safe / Stable / Efficient · IMPS, UPI, Bank Cards · Min 50 USDT
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-6 md:py-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(var(--darker-blue))]">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cta-blue/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cta-blue/20 to-transparent" />
          </div>
          
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--dark-blue))]/80 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-5 hover:border-cta-blue/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg bg-cta-blue/10 flex items-center justify-center mb-2 md:mb-4">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-cta-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-xs md:text-base mb-1 md:mb-2 leading-tight">{feature.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed hidden md:block">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-6 md:py-10 relative overflow-hidden">
          <div className="container mx-auto px-3 md:px-4 relative z-10">
            <div className="text-center mb-5 md:mb-6 animate-fade-in">
              <h2 className="text-lg md:text-2xl font-heading font-bold text-white">
                Team Contacts
              </h2>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-2.5 md:grid md:grid-cols-4 md:gap-3 max-w-6xl mx-auto">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
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
                        className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-[#229ED9]/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#229ED9]/20 flex items-center justify-center">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#229ED9">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                          </svg>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#229ED9] text-sm font-medium">Telegram:</span>
                          <span className="text-white font-medium text-sm">
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
                          className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-[#25D366]/10 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#25D366] text-sm font-medium">WhatsApp:</span>
                            <span className="text-white font-medium text-sm">
                              {contact.whatsapp}
                            </span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Channel CTA */}
            <div className="mt-6 md:mt-10 max-w-sm md:max-w-2xl mx-auto animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cta-blue/40 via-[#26A17B]/40 to-cta-blue/40 rounded-2xl blur-lg opacity-40" />
                
                <div className="relative bg-[hsl(var(--dark-blue))]/95 backdrop-blur-sm border border-cta-blue/30 rounded-2xl p-4 md:p-6">
                  <div className="flex flex-col items-center gap-3 text-center">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-cta-blue to-[#26A17B] flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="white">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    
                    {/* Text content */}
                    <div>
                      <h3 className="text-white font-heading font-bold text-base md:text-lg mb-1">
                        Work Channel
                      </h3>
                      <p className="text-white/60 text-xs md:text-sm">Join our Telegram group</p>
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href="https://t.me/NDpay888"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-cta-blue text-white font-semibold text-sm md:text-base rounded-xl shadow-lg shadow-cta-blue/30 transition-all duration-300 hover:opacity-90 active:scale-95"
                    >
                      <span>@NDpay888</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UsdtExchange;
