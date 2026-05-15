import { useState, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollCarousel from "@/components/ScrollCarousel";
import Lightbox from "@/components/Lightbox";

const officePhotos: { src: string; alt: string }[] = [
  { src: "/assets/office1.PNG", alt: "משרד ייחוד ייעוץ משכנתאות" },
  { src: "/assets/office2.jpeg", alt: "חלל עבודה במשרד" },
  { src: "/assets/office3.jpg", alt: "אזור קבלה במשרד" },
  { src: "/assets/office4.jpeg", alt: "חדר ישיבות" },
  { src: "/assets/office5.jpeg", alt: "משרד מודרני" },
  { src: "/assets/office7.jpeg", alt: "משרד" },
  { src: "/assets/office8.jpeg", alt: "משרד" },
  { src: "/assets/office9.jpeg", alt: "משרד" },
];

export default function OfficeSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % officePhotos.length)),
    []
  );
  const goPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + officePhotos.length) % officePhotos.length)),
    []
  );

  return (
    <>
      <section id="office" className="py-20 bg-white">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a]">משרד</h2>
            <a
              href="https://yhf.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-base sm:text-lg font-semibold text-[#0d1b4a] underline underline-offset-4 decoration-[#D4A843]/70 hover:text-[#b8912e] transition-colors"
            >
              לאתר המשרד
            </a>
          </div>

          <ScrollCarousel dir="rtl">
            {officePhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
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
          </ScrollCarousel>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
        prevLabel="תמונה קודמת"
        nextLabel="תמונה הבאה"
      >
        {lightboxIndex !== null && (
          <img
            key={lightboxIndex}
            src={officePhotos[lightboxIndex].src}
            alt={officePhotos[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
          />
        )}
      </Lightbox>
    </>
  );
}
