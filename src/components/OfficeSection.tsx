import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const officePhotos: { src: string; alt: string }[] = [
  {
    src: "/assets/office1.PNG",
    alt: "משרד ייחוד ייעוץ משכנתאות",
  },
  {
    src: "/assets/office2.jpeg",
    alt: "חלל עבודה במשרד",
  },
  {
    src: "/assets/office3.jpg",
    alt: "אזור קבלה במשרד",
  },
  {
    src: "/assets/office4.jpeg",
    alt: "חדר ישיבות",
  },
  {
    src: "/assets/office5.jpeg",
    alt: "משרד מודרני",
  },
];

export default function OfficeSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = Math.min(340, scrollRef.current.clientWidth * 0.85);
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % officePhotos.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + officePhotos.length) % officePhotos.length
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + officePhotos.length) % officePhotos.length
        );
      if (e.key === "ArrowRight")
        setLightboxIndex((i) =>
          i === null ? null : (i + 1) % officePhotos.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  return (
    <>
      <section id="office" className="py-20 bg-white">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a]">
              משרד
            </h2>
          </div>

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
              className="flex flex-nowrap gap-4 overflow-x-auto scrollbar-hide px-10 py-2 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              dir="rtl"
            >
              {officePhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="group relative shrink-0 w-[min(85vw,320px)] sm:w-[min(78vw,360px)] lg:w-[340px] h-[min(52vw,240px)] sm:h-[280px] lg:h-[300px] overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-[#f0f4fa] cursor-pointer text-left"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[#0d1b4a]/0 group-hover:bg-[#0d1b4a]/15 transition-colors duration-300" />
                </button>
              ))}
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
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
            aria-label="סגור"
          >
            <X size={32} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
            aria-label="תמונה קודמת"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            key={lightboxIndex}
            src={officePhotos[lightboxIndex].src}
            alt={officePhotos[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
            aria-label="תמונה הבאה"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
