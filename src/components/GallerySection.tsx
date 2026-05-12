import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/** Превью — статичная картинка; в карточке без тега video (стабильное отображение). */
const galleryVideos = [
  {
    src: "/assets/video1.mp4",
    poster: "/assets/video1.png",
    title: "סרטון 1",
  },
  {
    src: "/assets/video2.mp4",
    poster: "/assets/video2.png",
    title: "סרטון 2",
  },
  {
    src: "/assets/video3.mp4",
    poster: "/assets/video3.png",
    title: "סרטון 3",
  },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryVideos.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryVideos.length) % galleryVideos.length
      );
    }
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-[#f8faff]">
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
              גלריה
            </h2>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="הקודם"
            >
              <ChevronLeft size={24} className="text-[#0d1b4a]" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryVideos.map((video, index) => (
                <button
                  type="button"
                  key={video.src}
                  onClick={() => openLightbox(index)}
                  className="group flex-shrink-0 w-[220px] h-[350px] sm:w-[260px] sm:h-[420px] relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-[#e8eef8]"
                >
                  <img
                    src={video.poster}
                    alt={video.title}
                    width={400}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4a]/50 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/50">
                      <svg
                        className="w-6 h-6 text-[#0d1b4a] ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollBy("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="הבא"
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
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="סרטון קודם"
          >
            <ChevronLeft size={40} />
          </button>

          <video
            key={lightboxIndex}
            src={`${galleryVideos[lightboxIndex].src}#t=0.001`}
            poster={galleryVideos[lightboxIndex].poster}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="סרטון הבא"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}
