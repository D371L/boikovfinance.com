import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import HeroBackground from "@/components/HeroBackground";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-0 lg:min-h-screen overflow-hidden flex items-start lg:items-center pt-[6.75rem] lg:pt-24 pb-8 lg:pb-0"
    >
      <HeroBackground />
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div
          className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-1 sm:gap-4 lg:gap-12 w-full"
          dir="rtl"
        >
          {/* Text Content - centered more */}
          <div className="max-w-xl lg:max-w-lg lg:flex-1 text-center lg:text-right z-10 pb-4 sm:pb-8 lg:pb-0">
            <div className="mb-6 sm:mb-10 lg:mb-12 space-y-3 sm:space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-[#0d1b4a] leading-[1.08] tracking-tight">
                ארטיום בויקוב
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0d1b4a]/95 leading-snug">
                <span className="block">יועץ משכנתאות מטעם חברת</span>
                <span className="block">ייחוד ייעוץ משכנתאות</span>
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed max-w-md mx-auto lg:ms-auto border-t border-[#D4A843]/35 pt-5 sm:pt-6">
                שעוזר לך להשיג{" "}
                <span className="font-semibold text-[#0d1b4a]">
                  את הריבית הנמוכה ביותר
                </span>{" "}
                על המשכנתא שלך
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="!h-auto min-h-[3.5rem] !whitespace-normal bg-[#D4A843] hover:bg-[#b8912e] text-[#0d1b4a] font-semibold sm:font-bold text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-xl shadow-lg shadow-[#0d1b4a]/10 transition-all hover:shadow-xl hover:shadow-[#0d1b4a]/15 hover:scale-[1.02] mb-10 mx-auto lg:mx-0 flex items-center gap-2 sm:gap-3 max-w-xl text-center leading-snug">
                <ArrowLeft className="w-5 h-5 shrink-0" />
                לקביעת שיחת יעוץ ללא תשלום או כל התחייבות
              </Button>
            </a>

            {/* Satisfied Clients */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-1">
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
                <div className="text-3xl sm:text-4xl font-bold text-[#1a237e] tabular-nums tracking-tight">
                  500+
                </div>
                <div className="text-gray-600 text-sm font-normal">לקוחות מרוצים</div>
              </div>
            </div>
          </div>

          {/* Consultant Image - Left side in RTL */}
          <div className="flex justify-center items-end shrink-0 w-full max-lg:mt-3 sm:max-lg:mt-4 lg:w-auto lg:shrink-0">
            <img
              src="/assets/about-photo.png?v=5"
              alt="ארטיום בויקוב - יועץ משכנתאות"
              className="h-[min(52vw,240px)] sm:h-[320px] lg:h-[480px] w-auto max-w-[min(280px,78vw)] sm:max-w-[min(400px,85vw)] lg:max-w-[min(534px,92vw)] object-contain object-bottom"
              width={534}
              height={480}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}