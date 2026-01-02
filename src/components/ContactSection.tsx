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
                <MessageCircle className="w-4 h-4 text-[#229ED9]" />
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
                  <Phone className="w-4 h-4 text-[#25D366]" />
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
