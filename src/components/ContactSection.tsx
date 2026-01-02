import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <span className="text-cta-red text-sm font-semibold uppercase tracking-wider">
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
              <a 
                href="https://t.me/DJI149"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0088cc] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground group-hover:text-cta-red transition-colors">
                    Telegram
                  </p>
                  <p className="text-muted-foreground">@DJI149</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-cta-red transition-colors" />
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-cta-red flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Email</p>
                  <p className="text-muted-foreground">support@upiusdt.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-cta-red flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Location</p>
                  <p className="text-muted-foreground">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">24/7 Support</p>
                  <p className="text-muted-foreground">Always available</p>
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
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-red/20 focus:border-cta-red transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-red/20 focus:border-cta-red transition-colors"
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-red/20 focus:border-cta-red transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-cta-red/20 focus:border-cta-red transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cta-red text-white rounded-lg font-semibold hover:opacity-90 transition-colors"
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
