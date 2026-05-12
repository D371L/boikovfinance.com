import { Home, RefreshCw, Layers, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Home,
    title: "ליווי למשכנתא לרכישת דירה",
    description:
      "קונים דירה? זה הצעד הכלכלי הכי גדול בחיים – ואני כאן כדי שתעשו אותו נכון. אני בונה עבורך תמהיל משכנתא חכם, מנהל עבורך את המשא ומתן מול הבנקים ודואג שתקבל את התנאים הטובים ביותר – עם חיסכון משמעותי לאורך השנים.",
    accent: "from-[#1a237e] to-[#3949ab]",
    bgAccent: "bg-[#1a237e]/5",
  },
  {
    icon: RefreshCw,
    title: "מחזור משכנתא",
    description:
      "ייתכן שהמשכנתא שלך כבר לא מתאימה לך – וזה עולה לך כסף. אני בודק עבורך את התנאים הקיימים ומאתר הזדמנויות לחיסכון, הורדת החזר חודשי או קיצור תקופה – לפעמים מדובר בעשרות ואף מאות אלפי שקלים.",
    accent: "from-[#42a5f5] to-[#1e88e5]",
    bgAccent: "bg-[#42a5f5]/5",
  },
  {
    icon: Layers,
    title: "איחוד הלוואות",
    description:
      "יותר מדי הלוואות? תשלומים שמכבידים עליך? אני מאחד עבורך את כל ההתחייבויות להלוואה אחת מסודרת עם החזר חודשי נוח יותר, כדי שתוכל לחזור לשליטה כלכלית ולנשום לרווחה.",
    accent: "from-[#D4A843] to-[#b8912e]",
    bgAccent: "bg-[#D4A843]/5",
  },
  {
    icon: Award,
    title: "ליווי לזוכי מחיר למשתכן",
    description:
      "זכית בדירה? מצוין – עכשיו צריך לעשות את זה נכון. אני מלווה אותך לאורך כל התהליך – מתכנון המשכנתא ועד קבלת האישורים – כדי שתיכנס לדירה בתנאים הכי טובים ובביטחון מלא.",
    accent: "from-[#2e7d32] to-[#43a047]",
    bgAccent: "bg-[#2e7d32]/5",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="pt-6 pb-16 bg-gradient-to-b from-white to-[#f8faff]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a] mb-4">
            השירותים שלי
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            פתרונות מותאמים אישית לכל צורך פיננסי
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-7 sm:p-9 border border-gray-100/80 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 hover:border-transparent overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 ${service.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Top decorative line */}
                <div
                  className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-l ${service.accent} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + Number */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${service.accent} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-gray-200/80 transition-colors duration-300 select-none">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0d1b4a] mb-3 leading-snug group-hover:text-[#0d1b4a]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 group-hover:text-gray-600 leading-relaxed text-[15px] sm:text-base transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}