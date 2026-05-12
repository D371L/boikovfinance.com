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

  return (
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

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          dir="rtl"
        >
          {officePhotos.map((photo) => (
            <figure
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-[#f0f4fa]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
