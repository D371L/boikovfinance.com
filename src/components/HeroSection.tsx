import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#f0f7ff] to-white min-h-screen overflow-hidden flex items-center pt-20"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 lg:gap-12"
          dir="rtl"
        >
          {/* Text Content - centered more */}
          <div className="max-w-lg text-center lg:text-right z-10 pb-8 lg:pb-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-4xl font-black text-[#0d1b4a] mb-8 leading-snug tracking-tight">
              ארטיום בויקוב יועץ משכנתאות מטעם חברת ייחוד ייעוץ משכנתאות
              שעוזר לך להשיג את הריבית הנמוכה ביותר על המשכנתא שלך
            </h1>

            {/* CTA Button */}
            <a
              href="https://wa.me/972000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="!h-auto min-h-[3.5rem] !whitespace-normal bg-[#D4A843] hover:bg-[#b8912e] text-white font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-xl shadow-lg shadow-[#D4A843]/30 transition-all hover:shadow-xl hover:shadow-[#D4A843]/40 hover:scale-[1.02] mb-10 mx-auto lg:mx-0 flex items-center gap-2 sm:gap-3 max-w-xl text-center leading-tight">
                <ArrowLeft className="w-5 h-5 shrink-0" />
                לקביעת שיחת יעוץ ללא תשלום או כל התחייבות
              </Button>
            </a>

            {/* Satisfied Clients */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {/* Client Avatars */}
              <div className="flex -space-x-3 space-x-reverse">
                <img
                  src="/images/client-avatars-group.png"
                  alt="לקוחות מרוצים"
                  className="h-12 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-gray-300"></div>

              {/* Counter */}
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1a237e]">
                  500
                </div>
                <div className="text-gray-600 text-sm font-medium">לקוחות מרוצים</div>
              </div>
            </div>
          </div>

          {/* Consultant Image - Left side in RTL */}
          <div className="flex justify-center items-end relative">
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f0f7ff] to-transparent rounded-full blur-3xl opacity-50 scale-110"></div>
              <img
                src="/images/hero-consultant-business-portrait.png"
                alt="ארטיום בויקוב - יועץ משכנתאות"
                className="relative z-10 w-[320px] sm:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}