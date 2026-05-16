import type { ReactNode } from "react";

const GRID_STEP = 48;

function GridPattern() {
  const lines: ReactNode[] = [];
  for (let x = 0; x <= 1200; x += GRID_STEP) {
    lines.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={800}
        stroke="#1a237e"
        strokeOpacity={0.04}
        strokeWidth={1}
      />,
    );
  }
  for (let y = 0; y <= 800; y += GRID_STEP) {
    lines.push(
      <line
        key={`h-${y}`}
        x1={0}
        y1={y}
        x2={1200}
        y2={y}
        stroke="#1a237e"
        strokeOpacity={0.04}
        strokeWidth={1}
      />,
    );
  }
  return <g>{lines}</g>;
}

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f2eb] via-[#f0f7ff] to-white" />

      <div
        className="absolute inset-0 opacity-[0.25] lg:opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_85%,transparent_0%,black_55%)] [-webkit-mask-image:radial-gradient(ellipse_70%_80%_at_25%_85%,transparent_0%,black_55%)]"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <GridPattern />
          <path
            d="M 60 620 C 220 520, 380 480, 520 420 S 820 280, 1120 140"
            fill="none"
            stroke="#D4A843"
            strokeOpacity={0.06}
            strokeWidth={1.5}
            strokeLinecap="round"
            className="hidden lg:block"
          />
        </svg>
      </div>

      <div className="absolute top-1/4 -end-32 h-72 w-72 rounded-full bg-[#D4A843]/20 blur-3xl lg:-end-16" />
    </div>
  );
}
