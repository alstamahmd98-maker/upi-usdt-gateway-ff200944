import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="text-cta-blue text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to start collecting payments in India? Our team is here to help you 
              get started with the best payment solutions.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Telegram Contact */}
              <a 
                href="https://t.me/DJI149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0088cc] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground group-hover:text-cta-blue transition-colors">
                    Telegram
                  </p>
                  <p className="text-muted-foreground">@DJI149</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-cta-blue transition-colors" />
              </a>

              {/* WhatsApp Contact */}
              <a 
                href="https://wa.me/447454814457"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#25D366] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-heading font-bold text-foreground group-hover:text-[#25D366] transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-muted-foreground">+44 7454814457</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-cta-blue flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Email</p>
                  <p className="text-muted-foreground">support@upiusdt.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-cta-blue flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Location</p>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send us a message
            </h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue/20 focus:border-cta-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue/20 focus:border-cta-blue transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue/20 focus:border-cta-blue transition-colors"
                  />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-blue/20 focus:border-cta-blue transition-colors resize-none"
                  />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cta-blue text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
