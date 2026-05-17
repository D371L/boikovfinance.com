# Changelog

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.1.0/).  
Версии не тегируются отдельно — сайт деплоится с `main` на GitHub Pages.

## Как вести (не забывать)

1. **Во время работы** — новые пункты только в **`[Unreleased]`** (под `Added` / `Changed` / `Fixed` / `Removed`).
2. **Перед пушем в `main` или после заметного релиза** — перенести всё из `[Unreleased]` в новую секцию с датой, например `## [2026-05-16]`, и **очистить** `[Unreleased]` (заголовки секций оставить пустыми или удалить лишние пункты).
3. **Формат даты** — `## [ГГГГ-ММ-ДД]` + короткий заголовок при желании (`— Hero и Footer`).
4. **Не копить** — если в `[Unreleased]` больше ~10 пунктов или прошёл месяц, сделать перенос.

Шаблон новой секции после переноса:

```markdown
## [2026-05-16]

### Added
- …

### Changed
- …

## [Unreleased]

### Added

### Changed

### Fixed

### Removed
```

## [Unreleased]

### Added

- `HeroBackground` — светлый градиент, SVG-сетка и линия «роста», маска слабее у фото Hero.
- `TopBanner` — декоративный `topbanner.jpeg` между FAQ и Footer.
- Сплэш-экран при первой загрузке (`#app-splash` в `index.html`).
- Офисные фото `office7–9`; кастомный скроллбар (WebKit + Firefox).

### Changed

- CHANGELOG: раздел «Как вести» и напоминание в README о переносе из `[Unreleased]`.
- Hero: PNG `about-photo.png` без белых подложек и круговой обрезки; `object-contain`, высота 480px.
- About: фото `herologo.jpeg` (раньше пути были перепутаны с Hero).
- Footer: телефон `+972 54-331-9843`, адрес, email, соцсети (Facebook, Instagram, YouTube, TikTok), логотип HellSec.
- Navbar: увеличенные размеры, фиксированная шапка, мобильное меню с оверлеем.
- README: актуальная структура, секции, ассеты в `public/`.

### Fixed

- Prerender блога (`vite-prerender-plugin`) при сборке.
- RTL для телефона и email в Footer (`dir="ltr"` на тексте).

## [2025-05] — начальная версия лендинга

- Одностраничник на иврите (RTL): Hero, услуги, о себе, отзывы, галерея, офис, FAQ.
- Блог из `seo/content/*.md` с SSG и sitemap.
- Деплой через GitHub Actions на `boikovfinance.com`.
