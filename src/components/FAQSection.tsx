import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "מה התפקיד של יועץ משכנתאות?",
    answer:
      "יועץ משכנתאות מלווה אותך בכל תהליך לקיחת המשכנתא – מבניית תמהיל מותאם אישית, דרך ניהול משא ומתן מול הבנקים ועד חתימת ההסכם. המטרה היא לחסוך לך כסף ולוודא שאתה מקבל את התנאים הטובים ביותר.",
  },
  {
    question: "כמה עולה שירות ייעוץ משכנתאות?",
    answer:
      "עלות השירות משתנה בהתאם למורכבות העסקה. בפגישת הייעוץ הראשונית אני מציג את כל העלויות בשקיפות מלאה, ללא הפתעות. החיסכון שאני משיג עבורך בדרך כלל גבוה משמעותית מעלות השירות.",
  },
  {
    question: "מתי כדאי לפנות ליועץ משכנתאות?",
    answer:
      "מומלץ לפנות ליועץ כבר בשלב הראשוני – לפני שמתחילים לחפש דירה. כך ניתן לדעת מראש מה התקציב שלך, מה ההחזר החודשי הצפוי, ולהיערך בהתאם. גם אם כבר יש לך משכנתא – תמיד שווה לבדוק אם אפשר לשפר את התנאים.",
  },
  {
    question: "מה ההבדל בין יועץ משכנתאות לבנקאי?",
    answer:
      "הבנקאי עובד עבור הבנק ומייצג את האינטרסים שלו. יועץ משכנתאות עובד עבורך – הוא משווה הצעות מכל הבנקים, מנהל משא ומתן בשמך ודואג שתקבל את העסקה הטובה ביותר עבורך.",
  },
  {
    question: "האם אפשר למחזר משכנתא קיימת?",
    answer:
      "בהחלט! מחזור משכנתא הוא תהליך שבו לוקחים משכנתא חדשה בתנאים טובים יותר כדי להחליף את הקיימת. זה יכול לחסוך לך עשרות ואף מאות אלפי שקלים לאורך חיי ההלוואה.",
  },
  {
    question: "כמה זמן לוקח תהליך קבלת משכנתא?",
    answer:
      "התהליך נמשך בדרך כלל בין 2-4 שבועות מרגע הגשת הבקשה ועד קבלת האישור הסופי. אני דואג לזרז את התהליך ולוודא שהכל מתנהל בצורה חלקה ויעילה.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a] mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            תשובות לשאלות שהכי שואלים אותי
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f8faff] border border-gray-100 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-right text-[#0d1b4a] font-bold text-base sm:text-lg hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-[15px] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}