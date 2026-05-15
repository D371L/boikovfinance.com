import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
  children: React.ReactNode;
};

export default function Lightbox({
  isOpen,
  onClose,
  onPrev,
  onNext,
  prevLabel = "הקודם",
  nextLabel = "הבא",
  children,
}: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="presentation"
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
        aria-label="סגור"
      >
        <X size={32} />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
        aria-label={prevLabel}
      >
        <ChevronLeft size={40} />
      </button>

      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 rounded-full p-2 hover:bg-white/10"
        aria-label={nextLabel}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
