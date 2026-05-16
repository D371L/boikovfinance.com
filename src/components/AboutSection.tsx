import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { WHATSAPP_URL } from "@/lib/contact";

const checklist = [
  "ליווי אישי מהשלב הראשון ועד קבלת המפתח, עד הפרט האחרון",
  "ניהול משא ומתן מול הבנקים",
  "פתרונות פיננסיים בהתאמה אישית",
];

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
        <h2 className="text-4xl sm:text-5xl font-black text-white text-center mb-12 sm:mb-16">
          על עצמי
        </h2>

        <div
          className="flex flex-col lg:flex-row-reverse items-start gap-10 lg:gap-16"
          dir="rtl"
        >
          <div className="w-full lg:w-5/12 shrink-0 mx-auto lg:mx-0 max-w-md lg:max-w-none">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 lg:sticky lg:top-28">
              <img
                src="/images/herologo.jpeg"
                alt="ארטיום בויקוב"
                className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 text-right space-y-8">
            <header className="space-y-3 pb-2 border-b border-white/10">
              <p className="text-[#D4A843] font-bold text-lg sm:text-xl tracking-tight">
                ארטיום בויקוב | Finance
              </p>
              <p className="text-white text-lg sm:text-xl font-semibold leading-snug">
                יועץ משכנתאות מבית ייחוד משכנתאות
              </p>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed pr-3 border-r-2 border-[#D4A843]/40">
                לימודים ותעודה מטעם מכללת פוקוס
              </p>
            </header>

            <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed">
              <p>
                עם ניסיון של מעל שנתיים בתחום והיקף פעילות של כ-40 מיליון ₪
                בחודש – אני יודע בדיוק איך להשיג עבורך את המשכנתא הנכונה
                בתנאים הטובים ביותר.
              </p>
              <p>
                בין אם אתה רוכש דירה, ממחזר משכנתא או רוצה לעשות סדר
                בהלוואות – אני מלווה אותך אישית, חוסך לך כסף ודואג שתקבל
                החלטות חכמות ובטוחות.
              </p>
            </div>

            <ul className="rounded-xl bg-white/[0.06] border border-white/10 p-5 sm:p-6 space-y-4">
              {checklist.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 sm:gap-4 text-white/90 text-base sm:text-lg leading-snug"
                >
                  <span
                    className="text-lg sm:text-xl shrink-0 leading-none mt-0.5"
                    aria-hidden
                  >
                    ✔️
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#D4A843] font-bold text-xl sm:text-2xl leading-snug tracking-tight">
              פחות ריביות, יותר שקט נפשי
            </p>

            <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed">
              <p>
                אני מאמין שמשכנתא היא אחת ההחלטות הכלכליות והחשובות בחיים
                ולכן לקוח אצלי הוא קודם כל חבר ומקבל יחס אישי וליווי אישי
                ושקיפות מלאה והתאמה מדויקת לצרכים שלו.
              </p>
              <p>
                המטרה שלי היא לא רק להשיג ריביות טובות אלא לבנות ביטחון
                כלכלי ושקט נפשי לאורך כל השנים.
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2"
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
