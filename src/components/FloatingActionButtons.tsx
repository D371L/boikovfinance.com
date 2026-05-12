import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function usePastHero() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const update = () => {
      setPastHero(hero.getBoundingClientRect().bottom <= 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return pastHero;
}

export default function FloatingActionButtons() {
  const pastHero = usePastHero();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <div
        className={`transition-all duration-300 ease-out ${
          pastHero
            ? "max-h-16 opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 scale-95 translate-y-2 pointer-events-none overflow-hidden"
        }`}
      >
        <button
          type="button"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="w-14 h-14 rounded-full bg-[#D4A843] text-[#0d1b4a] hover:bg-[#c49a38] shadow-lg shadow-black/25 ring-2 ring-white/90 flex items-center justify-center transition-all hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d1b4a] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="חזרה לראש העמוד"
        >
          <ChevronUp className="w-7 h-7" strokeWidth={2.75} />
        </button>
      </div>

      <a
        href="https://wa.me/972000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
          aria-hidden
        >
          <path d="M16.004 0C7.165 0 0 7.163 0 16.001c0 2.82.736 5.573 2.134 7.998L.071 32l8.209-2.033A15.93 15.93 0 0 0 16.004 32C24.838 32 32 24.837 32 16.001 32 7.163 24.838 0 16.004 0zm0 29.39a13.36 13.36 0 0 1-6.81-1.865l-.488-.29-5.065 1.254 1.313-4.804-.318-.505A13.31 13.31 0 0 1 2.61 16.001c0-7.39 6.005-13.393 13.394-13.393 7.39 0 13.395 6.003 13.395 13.393 0 7.392-6.005 13.39-13.395 13.39zm7.346-10.03c-.403-.201-2.383-1.176-2.753-1.31-.37-.134-.639-.201-.908.201-.269.403-1.042 1.31-1.277 1.579-.235.268-.47.302-.873.1-.403-.2-1.702-.627-3.241-2-.198-.176-1.893-1.746-2.1-2.15-.208-.402-.022-.62.156-.82.16-.18.358-.47.537-.704.179-.235.238-.403.358-.671.119-.268.06-.503-.03-.704-.09-.201-.908-2.188-1.244-2.995-.328-.787-.66-.68-.908-.693-.235-.011-.504-.014-.773-.014s-.705.1-1.074.503c-.37.402-1.41 1.377-1.41 3.36 0 1.983 1.444 3.898 1.645 4.166.201.268 2.84 4.335 6.882 6.078.962.415 1.713.663 2.299.849.966.307 1.845.264 2.54.16.775-.116 2.383-.974 2.72-1.914.336-.94.336-1.746.235-1.914-.1-.168-.37-.268-.773-.47z" />
        </svg>
      </a>
    </div>
  );
}
