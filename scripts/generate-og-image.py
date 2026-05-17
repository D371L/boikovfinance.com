#!/usr/bin/env python3
"""Generate public/assets/og-default.jpg (1200x630) for Open Graph / messengers."""

from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public/assets/og-default.jpg"
LOGO = ROOT / "public/assets/logo.png"
W, H = 1200, 630


def main() -> None:
    img = Image.new("RGB", (W, H), (240, 247, 255))
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        r = int(245 * (1 - t) + 255 * t)
        g = int(242 * (1 - t) + 255 * t)
        b = int(235 * (1 - t) + 255 * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    if LOGO.exists():
        logo = Image.open(LOGO).convert("RGBA")
        logo.thumbnail((320, 320), Image.Resampling.LANCZOS)
        x = (W - logo.width) // 2
        y_pos = (H - logo.height) // 2 - 15
        img.paste(logo, (x, y_pos), logo)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "JPEG", quality=88, optimize=True)
    print(f"Wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
