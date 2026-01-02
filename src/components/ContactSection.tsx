import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const contacts = [
  { 
    role: "Company Lead / Boss", 
    telegram: "@LBT_00", 
    telegramLink: "https://t.me/LBT_00", 
    whatsapp: "+44 7454814457", 
    whatsappLink: "https://wa.me/447454814457"
  },
  { 
    role: "Service", 
    telegram: "@ND_pay", 
    telegramLink: "https://t.me/ND_pay", 
    whatsapp: null, 
    whatsappLink: null
  },
  { 
    role: "Service", 
    telegram: "@qiansy66", 
    telegramLink: "https://t.me/qiansy66", 
    whatsapp: "+44 7599830171", 
    whatsappLink: "https://wa.me/447599830171"
  },
  { 
    role: "Service", 
    telegram: "@fang12345600000000", 
    telegramLink: "https://t.me/fang12345600000000", 
    whatsapp: "+44 7512418870", 
    whatsappLink: "https://wa.me/447512418870"
  },
  { 
    role: "Service", 
    telegram: "@maque666666", 
    telegramLink: "https://t.me/maque666666", 
    whatsapp: "+44 7742606892", 
    whatsappLink: "https://wa.me/447742606892"
  },
  { 
    role: "Service", 
    telegram: "@xiaobao880604", 
    telegramLink: "https://t.me/xiaobao880604", 
    whatsapp: "+44 7856408736", 
    whatsappLink: "https://wa.me/447856408736"
  },
  { 
    role: "Service", 
    telegram: "@jie5555555666", 
    telegramLink: "https://t.me/jie5555555666", 
    whatsapp: "+44 7746820536", 
    whatsappLink: "https://wa.me/447746820536"
  },
  { 
    role: "Service", 
    telegram: "@NDpay186", 
    telegramLink: "https://t.me/NDpay186", 
    whatsapp: "+85 294480554", 
    whatsappLink: "https://wa.me/85294480554"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dark-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-cta-blue text-sm font-semibold uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Get in Touch
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to start? Our team is here to help you get started with the best payment solutions.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="bg-[hsl(var(--dark-blue))] border border-white/10 rounded-xl p-5 hover:border-cta-blue/30 transition-all duration-300"
            >
              <h3 className="font-heading font-bold text-white mb-4">{contact.role}</h3>
              
              {/* Telegram */}
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#229ED9">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="text-white/70 text-sm">Telegram:</span>
                <a 
                  href={contact.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta-blue hover:underline text-sm"
                >
                  {contact.telegram}
                </a>
              </div>
              
              {/* WhatsApp */}
              {contact.whatsapp && (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-white/70 text-sm">WhatsApp:</span>
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
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
            <Mail className="w-5 h-5 text-cta-blue" />
            <span className="text-white/80">support@upiusdt.com</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
            <MapPin className="w-5 h-5 text-cta-blue" />
            <span className="text-white/80">New Delhi, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
