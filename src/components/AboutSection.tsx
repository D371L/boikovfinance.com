import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-[#0d1b4a]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12">
          על עצמי
        </h2>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16" dir="rtl">
          {/* Image */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/about-photo.png"
                alt="ארטיום בויקוב"
                className="w-full h-[400px] lg:h-[520px] object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-7/12 text-right">
            <p className="text-[#D4A843] font-bold text-lg mb-2">
              ארטיום בויקוב | Finance
            </p>
            <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
              יועץ משכנתאות מבית ייחוד משכנתאות
            </p>
            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed">
              עם ניסיון של מעל 10 שנים בתחום והיקף פעילות של כ-40 מיליון ₪ בחודש – אני יודע בדיוק איך להשיג עבורך את המשכנתא הנכונה בתנאים הטובים ביותר.
            </p>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              בין אם אתה רוכש דירה, ממחזר משכנתא או רוצה לעשות סדר בהלוואות – אני מלווה אותך אישית, חוסך לך כסף ודואג שתקבל החלטות חכמות ובטוחות.
            </p>

            {/* Checkmarks */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔️</span>
                <span className="text-white/90 text-base sm:text-lg">
                  ליווי אישי מהשלב הראשון ועד קבלת המפתח
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔️</span>
                <span className="text-white/90 text-base sm:text-lg">
                  ניהול משא ומתן מול הבנקים
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">✔️</span>
                <span className="text-white/90 text-base sm:text-lg">
                  פתרונות פיננסיים בהתאמה אישית
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[#D4A843] font-bold text-xl mb-8">
              פחות ריביות, יותר שקט נפשי
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/972000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#D4A843] hover:bg-[#b8912e] text-white font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-[#D4A843]/30 transition-all hover:shadow-xl hover:shadow-[#D4A843]/40">
                עוד עליי
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}