import { Search, TrendingUp, Handshake, Target, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Search,
    title: "איתור נכסים מתחת למחיר השוק",
    description: "מציאת עסקאות עם פוטנציאל לרווח כבר בקנייה.",
    accent: "from-[#1a237e] to-[#3949ab]",
    bgAccent: "bg-[#1a237e]/5",
  },
  {
    icon: TrendingUp,
    title: "בדיקת כדאיות העסקה",
    description: "ניתוח מחירי שוק, עלויות, תשואה ופוטנציאל השבחה.",
    accent: "from-[#42a5f5] to-[#1e88e5]",
    bgAccent: "bg-[#42a5f5]/5",
  },
  {
    icon: Handshake,
    title: "ליווי מלא ברכישת הנכס",
    description: "משלב החיפוש והמשא ומתן ועד לסגירת העסקה.",
    accent: "from-[#D4A843] to-[#b8912e]",
    bgAccent: "bg-[#D4A843]/5",
  },
  {
    icon: Target,
    title: "בניית אסטרטגיית השקעה",
    description: "התאמת העסקה להון העצמי ולמטרות של המשקיע.",
    accent: "from-[#2e7d32] to-[#43a047]",
    bgAccent: "bg-[#2e7d32]/5",
  },
  {
    icon: Building2,
    title: "ליווי מימון ומשכנתא",
    description: "בניית פתרון מימון שמתאים לעסקה ולמשקיע.",
    accent: "from-[#7b1fa2] to-[#9c27b0]",
    bgAccent: "bg-[#7b1fa2]/5",
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
            const isLast = index === services.length - 1;
            const isOddTotal = services.length % 2 !== 0;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-7 sm:p-9 border border-gray-100/80 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 hover:border-transparent overflow-hidden${isLast && isOddTotal ? " md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto" : ""}`}
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