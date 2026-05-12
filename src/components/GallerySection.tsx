import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryVideos = [
  {
    src: "/assets/gallery-video-1.mp4",
    poster: "/assets/gallery-1.png",
    title: "סרטון 1",
  },
  {
    src: "/assets/gallery-video-2.mp4",
    poster: "/assets/gallery-2.png",
    title: "סרטון 2",
  },
  {
    src: "/assets/gallery-video-3.mp4",
    poster: "/assets/gallery-3.png",
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
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-[#0d1b4a] mb-4">
              גלריה
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              רגעים מהעבודה שלי
            </p>
          </div>

          {/* Gallery Row with Arrows */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollBy("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="הקודם"
            >
              <ChevronLeft size={24} className="text-[#0d1b4a]" />
            </button>

            {/* Scrollable Row */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-10 py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {galleryVideos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group flex-shrink-0 w-[220px] h-[350px] sm:w-[260px] sm:h-[420px] relative overflow-hidden rounded-2xl cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <video
                    src={video.src}
                    poster={video.poster}
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-[#0d1b4a]/5"
                    onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLVideoElement;
                      el.pause();
                      el.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 bg-[#0d1b4a]/0 group-hover:bg-[#0d1b4a]/10 transition-colors duration-300" />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-[#0d1b4a] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollBy("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="הבא"
            >
              <ChevronRight size={24} className="text-[#0d1b4a]" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <video
            key={lightboxIndex}
            src={galleryVideos[lightboxIndex].src}
            controls
            autoPlay
            playsInline
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </>
  );
}