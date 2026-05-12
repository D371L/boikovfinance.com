import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Index() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}