import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturesGrid from "@/components/FeaturesGrid";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExchangeSection from "@/components/ExchangeSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <FeaturesGrid />
        <AboutSection />
        <ServicesSection />
        <ExchangeSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
