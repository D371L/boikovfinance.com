import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  dir?: "ltr" | "rtl";
};

export default function ScrollCarousel({ children, dir }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = Math.min(340, scrollRef.current.clientWidth * 0.85);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollBy("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
        aria-label="גלול שמאלה"
      >
        <ChevronLeft size={24} className="text-[#0d1b4a]" />
      </button>

      <div
        ref={scrollRef}
        dir={dir}
        className="flex flex-nowrap gap-4 overflow-x-auto px-10 py-2 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      <button
        type="button"
        onClick={() => scrollBy("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
        aria-label="גלול ימינה"
      >
        <ChevronRight size={24} className="text-[#0d1b4a]" />
      </button>
    </div>
  );
}
