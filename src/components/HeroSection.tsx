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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0d1b4a] mb-6 leading-tight">
              ארטיום בויקוב
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-1 leading-relaxed font-normal">
              יועץ משכנתאות ייחודי
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-1 leading-relaxed font-normal">
              שעוזר לך להשיג{" "}
              <span className="font-bold text-[#0d1b4a]">ריבית מעולה</span>
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-1 leading-relaxed font-normal">
              על המשכנתא שלך.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0d1b4a] mb-10 leading-relaxed">
              בהתחייבות.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/972000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#D4A843] hover:bg-[#b8912e] text-white font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-[#D4A843]/30 transition-all hover:shadow-xl hover:shadow-[#D4A843]/40 hover:scale-105 mb-10 mx-auto lg:mx-0 flex items-center gap-3">
                <ArrowLeft className="w-5 h-5" />
                לקביעת שיחת ייעוץ
              </Button>
            </a>

            {/* Satisfied Clients */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {/* Client Avatars */}
              <div className="flex -space-x-3 space-x-reverse">
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/1202167/2026-05-07/odgohgyaagqa/client-avatars-group.png"
                  alt="לקוחות מרוצים"
                  className="h-12 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-12 bg-gray-300"></div>

              {/* Counter */}
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#1a237e]">
                  +2,400
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
                src="https://mgx-backend-cdn.metadl.com/generate/images/1202167/2026-05-07/odgn6tqaagqq/hero-consultant-business-portrait.png"
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