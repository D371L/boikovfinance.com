import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "יוסי כהן",
    review:
      "ארטיום ליווה אותי לאורך כל הדרך ברכישת הדירה הראשונה שלי. חסך לי עשרות אלפי שקלים בזכות המשא ומתן מול הבנקים. ממליץ בחום!",
    stars: 5,
  },
  {
    name: "מיכל לוי",
    review:
      "מיחזרנו את המשכנתא דרך ארטיום והורדנו את ההחזר החודשי ב-1,200 ₪. שירות מקצועי, אישי וזמין. תודה רבה!",
    stars: 5,
  },
  {
    name: "דוד אברהם",
    review:
      "אחרי שנים של הלוואות מפוזרות, ארטיום עזר לי לאחד הכל להלוואה אחת נוחה. סוף סוף יש לי שקט נפשי.",
    stars: 5,
  },
  {
    name: "רונית שמעון",
    review:
      "זכינו במחיר למשתכן ולא ידענו מאיפה להתחיל. ארטיום הסביר הכל בסבלנות ודאג שנקבל את התנאים הכי טובים.",
    stars: 5,
  },
  {
    name: "אלון ברק",
    review:
      "מקצועיות ברמה הגבוהה ביותר. ארטיום הבין בדיוק מה אני צריך ובנה לי תמהיל מושלם. ממליץ לכל מי שמחפש יועץ משכנתאות.",
    stars: 5,
  },
  {
    name: "שרה גולדשטיין",
    review:
      "השירות היה מעבר לכל ציפייה. ארטיום היה זמין בכל שעה, ענה על כל שאלה והוביל אותנו לעסקה מצוינת.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#D4A843] text-[#D4A843]"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-[#f0f7ff]">
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
            לקוחות מרוצים
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            מה אומרים הלקוחות שלי
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <StarRating count={testimonial.stars} />
              <p className="text-gray-600 mt-4 mb-5 leading-relaxed text-[15px]">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#0d1b4a]">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}