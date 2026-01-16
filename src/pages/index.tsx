import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductSection from "@/components/sections/ProductSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesSection />
        <ProductSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
