export default function TopBanner() {
  return (
    <div className="block w-full" aria-hidden>
      <img
        src="/assets/topbanner.jpeg"
        alt=""
        width={1920}
        height={640}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto max-h-[min(42vw,220px)] sm:max-h-none object-cover object-center"
      />
    </div>
  );
}
