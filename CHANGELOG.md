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

- `ContactSection` после FAQ: форма (שם, טלפון, מייל, הודעה) открывает WhatsApp с предзаполненным текстом; `contact-form-schema.ts`, якорь `#contact` в Navbar.

### Changed

### Fixed

### Removed

## [2026-05-16] — SEO, Hero, документация

### Added

- SEO: Open Graph и Twitter на главной, `og-default.jpg` (1200×630), canonical, JSON-LD (WebSite, ProfessionalService, Person, FAQPage).
- `src/lib/seo.ts`, `SeoHead`, `usePageSeo`, `src/data/faqs.ts`; prerender `/` в `prerender/site.js`; абсолютные OG-URL в блоге.
- `.env.example`, SEO env в CI (`deploy-pages.yml`); `pnpm run generate:og` (только локально, без Pillow в CI).
- `HeroBackground` — градиент, SVG-сетка, линия «роста», маска слабее у фото.
- `TopBanner`, сплэш `#app-splash`, офисные фото `office7–9`, кастомный скроллбар.

### Changed

- Title/description на иврите; README (SEO, деплой, структура `prerender/`, блог vs SPA).
- Hero: `about-photo.png` без подложек и круговой обрезки; mobile/desktop размеры.
- About: `herologo.jpeg`; Footer (контакты, соцсети, HellSec снизу); Navbar.

### Fixed

- Prerender блога при сборке; RTL телефона/email в Footer.

## [2025-05] — начальная версия лендинга

- Одностраничник на иврите (RTL): Hero, услуги, о себе, отзывы, галерея, офис, FAQ.
- Блог из `seo/content/*.md` с SSG и sitemap.
- Деплой через GitHub Actions на `boikovfinance.com`.
