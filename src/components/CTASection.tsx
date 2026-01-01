import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-hero rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Ready to Get Started?
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Start Collecting Payments
              <br />
              <span className="text-gradient-accent">Today</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of businesses already using our platform for seamless 
              payment collection and USDT exchange services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="hero" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                Contact on Telegram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span>@DJI149</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span>•</span>
                <span>Quick Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
