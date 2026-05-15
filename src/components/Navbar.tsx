import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[60]">
        <div className="flex items-center justify-between h-24" dir="rtl">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="בויקוב משכנתאות"
              className="h-[5.5rem] w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#hero"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] leading-snug"
            >
              בית
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] leading-snug"
            >
              השירותים שלי
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] leading-snug"
            >
              על עצמי
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] leading-snug"
            >
              לקוחות מרוצים
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] leading-snug"
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
              <Button className="bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-bold text-[1.3125rem] px-9 py-4 min-h-[3.25rem] rounded-xl shadow-md shadow-[#0d1b4a]/10 transition-all hover:shadow-lg hover:shadow-[#0d1b4a]/15">
                לקביעת שיחת ייעוץ
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop + menu (always mounted for enter/exit motion) */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-24 bottom-0 z-40 bg-[#0d1b4a]/20 backdrop-blur-[2px] transition-opacity duration-300 ease-out",
          mobileMenuOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-24 z-50 max-h-[min(85dvh,calc(100dvh-6rem))] overflow-y-auto border-t border-white/30 shadow-2xl shadow-[#0d1b4a]/10",
          "bg-white/95 backdrop-blur-xl",
          "transform-gpu transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[110%] opacity-0"
        )}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={cn(
            "px-4 py-5 space-y-1 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          )}
          style={{ transitionDelay: mobileMenuOpen ? "45ms" : "0ms" }}
          dir="rtl"
        >
          <a
            href="#hero"
            className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] py-2.5 rounded-lg hover:bg-[#f0f7ff]/80 px-1 -mx-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            בית
          </a>
          <a
            href="#services"
            className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] py-2.5 rounded-lg hover:bg-[#f0f7ff]/80 px-1 -mx-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            השירותים שלי
          </a>
          <a
            href="#about"
            className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] py-2.5 rounded-lg hover:bg-[#f0f7ff]/80 px-1 -mx-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            על עצמי
          </a>
          <a
            href="#testimonials"
            className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] py-2.5 rounded-lg hover:bg-[#f0f7ff]/80 px-1 -mx-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            לקוחות מרוצים
          </a>
          <a
            href="#faq"
            className="block text-gray-700 hover:text-[#1a237e] transition-colors font-medium text-[1.3125rem] py-2.5 rounded-lg hover:bg-[#f0f7ff]/80 px-1 -mx-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            שאלות נפוצות
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-bold text-[1.3125rem] px-6 py-4 min-h-[3.25rem] rounded-xl shadow-md shadow-[#0d1b4a]/10 transition-all hover:shadow-lg active:scale-[0.99]">
              לקביעת שיחת ייעוץ
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}