import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" dir="rtl">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="בויקוב משכנתאות"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-sm"
            >
              בית
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-sm"
            >
              השירותים שלי
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-sm"
            >
              על עצמי
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-sm"
            >
              לקוחות מרוצים
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-sm"
            >
              שאלות נפוצות
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-bold px-6 py-3 rounded-lg shadow-md shadow-[#0d1b4a]/10 transition-all hover:shadow-lg hover:shadow-[#0d1b4a]/15">
                לקביעת שיחת ייעוץ
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-lg">
          <div className="px-4 py-4 space-y-3" dir="rtl">
            <a
              href="#hero"
              className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              בית
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              השירותים שלי
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              על עצמי
            </a>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              לקוחות מרוצים
            </a>
            <a
              href="#faq"
              className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              שאלות נפוצות
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-bold px-6 py-3 rounded-lg mt-4">
                לקביעת שיחת ייעוץ
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}