import SeoHead from "@/components/SeoHead";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

export default function Index() {
  return (
    <div className="min-h-screen" dir="rtl">
      <SeoHead />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <TopBanner />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}