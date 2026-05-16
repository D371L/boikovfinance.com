export default function TopBanner() {
  return (
    <a
      href="#hero"
      className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2"
      aria-label="לתחילת העמוד"
    >
      <img
        src="/assets/topbanner.jpeg"
        alt=""
        width={1920}
        height={640}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="block w-full h-auto max-h-[min(42vw,220px)] sm:max-h-none object-cover object-center"
      />
    </a>
  );
}
