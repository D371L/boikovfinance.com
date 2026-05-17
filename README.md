# boikovfinance.com

Лендинг-сайт ипотечного советника **Артёма Бойкова** (Израиль).  
Одностраничный сайт на иврите с RTL-лейаутом, базовым SEO (OG, JSON-LD, prerender главной), опциональным блогом из Markdown и автодеплоем на GitHub Pages.

История изменений: [CHANGELOG.md](CHANGELOG.md) — новое пишем в `[Unreleased]`, перед релизом/пушем в `main` переносим в секцию с датой (см. «Как вести» в начале файла).

---

## Стек технологий

| Слой | Технология |
|---|---|
| Фреймворк | React 18 + TypeScript |
| Сборка | Vite 5 + `@vitejs/plugin-react-swc` |
| Стили | Tailwind CSS 3 |
| UI-компоненты | shadcn/ui (Radix UI) |
| Роутинг | react-router-dom v6 |
| Данные | TanStack Query v5 |
| Формы | react-hook-form + zod |
| SSG блога | vite-prerender-plugin |
| Карта сайта | vite-plugin-sitemap |
| Пакетный менеджер | pnpm |
| Хостинг | GitHub Pages |

---

## Локальная разработка

```shell
pnpm install
pnpm run dev          # http://localhost:3000
```

Другие команды:

```shell
pnpm run build        # Сборка в dist/ (prerender / и /blog/)
pnpm run preview      # Превью собранного dist/ локально
pnpm run lint         # ESLint проверка src/
pnpm run generate:og  # Пересобрать public/assets/og-default.jpg (локально, нужен Pillow)
```

---

## Деплой на GitHub Pages

### Настройка (один раз)

1. **Settings → Pages → Build and deployment** — выбрать источник **GitHub Actions** (не «Deploy from a branch»). Без этого шага job `deploy` падает даже при успешном `build`.
2. **Settings → Pages** — указать кастомный домен **boikovfinance.com**.  
   Файл `public/CNAME` содержит домен и автоматически копируется в `dist/` при каждой сборке.

### Автодеплой

Файл [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) при пуше в `main` или `master`:

1. Checkout, Node 22, pnpm 9, `pnpm install --frozen-lockfile`
2. `pnpm run build` с SEO-переменными (`VITE_SITE_URL`, ивритский title/description, `VITE_OG_IMAGE`, …)
3. Публикация `dist/` через `actions/deploy-pages`

OG-картинка **не генерируется в CI** — в репозитории уже лежит `public/assets/og-default.jpg`. После смены логотипа: `pnpm run generate:og` локально и коммит.

Ручной запуск: **Actions → Deploy to GitHub Pages → Run workflow**.

### DNS

Для apex-домена используются **A-записи GitHub Pages**, для `www` — CNAME на `<user>.github.io`.  
Подробности: [docs.github.com/pages/custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

## Переменные окружения

Задаются в **Settings → Secrets and variables → Actions** или в `.env` локально.

| Переменная | По умолчанию | Назначение |
|---|---|---|
| `VITE_SITE_URL` | `https://boikovfinance.com` | Canonical, `og:url`, абсолютные картинки в OG |
| `VITE_APP_SITE_NAME` | `ארטיום בויקוב` | `og:site_name`, author |
| `VITE_APP_TITLE` | `ארטיום בויקוב \| יועץ משכנתאות בישראל` | `<title>`, OG/Twitter title |
| `VITE_APP_DESCRIPTION` | ивритское описание Hero | `<meta name="description">`, OG/Twitter |
| `VITE_OG_IMAGE` | `https://boikovfinance.com/assets/og-default.jpg` | Превью в WhatsApp, Telegram, Facebook |
| `VITE_OG_IMAGE_ALT` | текст на иврите | `og:image:alt`, доступность |
| `VITE_TWITTER_SITE` | `@boikovfinance` | Twitter/X card |
| `VITE_TWITTER_CREATOR` | = `VITE_TWITTER_SITE` | Twitter/X card |
| `VITE_APP_LOGO_URL` | `/favicon.png` | favicon и apple-touch-icon |
| `VITE_API_BASE_URL` | `` (пусто) | Базовый URL для API (если появится бэкенд) |
| `VITE_PORT` | `3000` | Порт dev-сервера |

Пример для локальной сборки: [`.env.example`](.env.example). В CI значения заданы в [`deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Дефолты задаются в `vite.config.ts` (иврит). Картинка `public/assets/og-default.jpg` уже в репозитории; после смены логотипа локально: `pnpm run generate:og` (нужен Python + `pip install Pillow`) и закоммитить файл.

---

## SEO и превью в мессенджерах

| Что | Где |
|---|---|
| Meta + Open Graph + Twitter | [`index.html`](index.html) (подстановка `%VITE_*%` при сборке) |
| JSON-LD (WebSite, ProfessionalService, Person, FAQPage) | `index.html` + [`SeoHead`](src/components/SeoHead.tsx) на главной |
| Prerender главной `/` | [`prerender/site.js`](prerender/site.js) — в HTML есть `<h1>` для краулеров |
| Prerender блога | [`prerender/site.js`](prerender/site.js) + `seo/content/*.md` |
| `sitemap.xml`, `robots.txt` | `vite-plugin-sitemap` → `dist/` |
| OG-картинка | `public/assets/og-default.jpg` — **абсолютный HTTPS URL** обязателен для мессенджеров |

### Чеклист после деплоя

1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — URL `https://boikovfinance.com/`, «Scrape Again».
2. Отправить ссылку себе в **WhatsApp** / **Telegram** — проверить картинку и ивритский текст.
3. [Google Search Console](https://search.google.com/search-console) — добавить домен, отправить `sitemap.xml`.
4. [Rich Results Test](https://search.google.com/test/rich-results) — FAQ / ProfessionalService.
5. После крупных правок — перенос из `[Unreleased]` в [CHANGELOG.md](CHANGELOG.md) (см. «Как вести»).

---

## Структура проекта

```
boikovfinance.com/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # CI/CD: сборка + деплой на GitHub Pages
│
├── scripts/
│   └── generate-og-image.py    # Локально: OG 1200×630 (pip install Pillow)
│
├── prerender/                  # SSG при сборке (vite-prerender-plugin)
│   ├── site.js                 # Prerender `/` и `/blog/*`, head meta для блога
│   ├── routes.js               # Список маршрутов: / + blog
│   ├── blog-routes.js          # Маршруты из seo/content/
│   ├── blog-sitemap.js         # lastmod для sitemap.xml
│   ├── home-html.js            # Скрытый HTML с h1 для краулеров (главная)
│   ├── home-json-ld.js         # JSON-LD для подстановки в index.html
│   ├── seo-shared.js           # Константы URL/OG для prerender (Node)
│   ├── faqs.js                 # Тексты FAQ (синхрон с src/data/faqs.ts)
│   ├── utils.js                # Обход seo/content/*.md
│   └── blog.js                 # Устаревший; используйте site.js
│
├── public/                     # Статика для dev и build (копируется в dist/ as-is)
│   ├── assets/
│   │   ├── logo.png            # Логотип (Navbar + Footer + сплэш)
│   │   ├── about-photo.png     # PNG с прозрачностью (Hero)
│   │   ├── og-default.jpg      # Open Graph 1200×630 (WhatsApp, Telegram, Facebook)
│   │   ├── topbanner.jpeg      # Декоративный баннер перед Footer
│   │   ├── hellsec-logo.png    # Логотип разработчика (Footer)
│   │   ├── office1–5.*, office7–9.*  # 8 фото офиса (office6 нет)
│   │   ├── video1–3.mp4        # Видео (секция "Галерея")
│   │   └── video1–3.png        # Постеры для видео
│   ├── images/
│   │   ├── herologo.jpeg       # Фото советника (секция "О себе")
│   │   └── client-avatars-group.png  # Аватары клиентов (Hero)
│   ├── favicon.png
│   └── CNAME                   # boikovfinance.com — кастомный домен GitHub Pages
│   └── robots.txt              # Базовый Allow; при build дополняется sitemap в dist/
│
├── seo/
│   └── content/                # Markdown-статьи блога (создать при необходимости)
│       └── **/*.md             # Вложенные папки поддерживаются
│
├── src/
│   ├── main.tsx                # Точка входа: загрузка конфига → рендер App
│   ├── App.tsx                 # Корень приложения: провайдеры + роутер
│   ├── blog-routes.tsx         # Маршруты /blog/: BlogIndexPage + BlogPostPage
│   ├── index.css               # Tailwind base + глобальные стили + сплэш-анимация
│   │
│   ├── pages/
│   │   ├── Index.tsx           # Главная страница — собирает все секции
│   │   └── blog/
│   │       ├── BlogIndexPage.tsx   # Список статей /blog/
│   │       └── BlogPostPage.tsx    # Страница статьи /blog/:slug/ + SEO-мета динамически
│   │
│   ├── components/
│   │   ├── SeoHead.tsx             # JSON-LD на главной (клиент; дубль в index.html)
│   │   ├── JsonLd.tsx              # Вставка application/ld+json
│   │   ├── Navbar.tsx              # Фиксированная шапка + мобильное меню
│   │   ├── HeroSection.tsx         # Главный экран: текст + CTA + фото
│   │   ├── HeroBackground.tsx      # Фон Hero: градиент + SVG-паттерн
│   │   ├── ServicesSection.tsx     # 4 карточки услуг
│   │   ├── AboutSection.tsx        # Биография советника + чеклист
│   │   ├── TestimonialsSection.tsx # 6 отзывов клиентов
│   │   ├── GallerySection.tsx      # Карусель видео + лайтбокс
│   │   ├── OfficeSection.tsx       # Карусель фото офиса + лайтбокс
│   │   ├── FAQSection.tsx          # Аккордеон с 6 вопросами
│   │   ├── TopBanner.tsx           # Широкий JPEG-баннер (не кликабельный)
│   │   ├── Footer.tsx              # Контакты + соцсети + копирайт
│   │   ├── FloatingActionButtons.tsx  # Плавающие кнопки: WhatsApp + "наверх"
│   │   ├── ScrollCarousel.tsx      # Общий компонент горизонтальной карусели
│   │   ├── Lightbox.tsx            # Общий компонент модального лайтбокса
│   │   ├── blog/
│   │   │   ├── BlogArticleLayout.tsx  # Обёртка страницы статьи
│   │   │   └── MarkdownArticle.tsx    # Рендер Markdown через markdown-to-jsx
│   │   └── ui/                     # shadcn/ui компоненты (Radix UI)
│   │
│   ├── data/
│   │   └── faqs.ts                 # Вопросы FAQ (общие с JSON-LD и FAQSection)
│   │
│   ├── hooks/
│   │   ├── useScrollAnimation.ts   # IntersectionObserver: анимация при скролле
│   │   ├── usePageSeo.ts           # Обновление meta/canonical в клиенте
│   │   └── use-mobile.tsx          # Определение мобильного viewport
│   │
│   └── lib/
│       ├── seo.ts              # Константы SEO, buildHomeSeoMeta, JSON-LD
│       ├── contact.ts          # Централизованные контактные данные
│       ├── config.ts           # Конфигурация API_BASE_URL (runtime + env)
│       ├── blog.ts             # Парсинг MD-файлов, фронтматтер, SEO-мета
│       └── utils.ts            # cn() утилита для объединения классов Tailwind
│
├── index.html                  # Heebo, OG/Twitter, canonical, JSON-LD, сплэш
├── .env.example                # Пример env для локальной сборки
├── vite.config.ts              # Vite: env-дефолты, sitemap, prerender, vendor-чанки
├── CHANGELOG.md                # История изменений; см. «Как вести»
├── tailwind.config.ts          # Tailwind: шрифты, цвета, плагины
├── tsconfig.json               # TypeScript конфиг
├── components.json             # shadcn/ui конфиг
└── pnpm-lock.yaml
```

---

## Страница (секции по порядку)

Главная страница `src/pages/Index.tsx` — одностраничник с `dir="rtl"`, иврит.

| # | Компонент | Секция (`id`) | Описание |
|---|---|---|---|
| 1 | `Navbar` | — | Фиксированная шапка (`fixed`, blur). Якорные ссылки. Мобильное меню: оверлей + панель под шапкой. |
| 2 | `HeroSection` + `HeroBackground` | `#hero` | Фон: градиент + SVG-сетка. Фото `about-photo.png` (`object-contain`; mobile ~240px, desktop 480px). CTA WhatsApp, 500+ клиентов. |
| 3 | `ServicesSection` | `#services` | 4 карточки: ипотека на покупку жилья, рефинансирование, консолидация займов, «Мехир ле-Миштакен». |
| 4 | `AboutSection` | `#about` | Биография, фото `herologo.jpeg`, чеклист, CTA. Тёмный фон `#0d1b4a`. |
| 5 | `TestimonialsSection` | `#testimonials` | 6 отзывов клиентов в сетке 3×2. |
| 6 | `GallerySection` | `#gallery` | Карусель из 3 видео. Клик — лайтбокс с плеером и клавиатурной навигацией. |
| 7 | `OfficeSection` | `#office` | Карусель из 8 фото (`office1–5`, `office7–9`). Лайтбокс. Ссылка на yhf.co.il. |
| 8 | `FAQSection` | `#faq` | Аккордеон с 6 частыми вопросами (Radix UI Accordion). |
| 9 | `TopBanner` | — | Полноширинный `topbanner.jpeg` между FAQ и Footer (декор, без ссылки). |
| 10 | `Footer` | — | Контакты, соцсети (Facebook, Instagram, YouTube, TikTok), логотип; в подвале «Developed by HellSec» + логотип снизу. |
| — | `FloatingActionButtons` | — | WhatsApp (всегда) + «наверх» (после скролла ниже Hero). |

> **Статика:** файлы для сайта кладутся в `public/`. Папка `dist/` — только результат `pnpm run build`; правки в `dist/assets/` не попадают в dev и не коммитятся.

---

## Ключевые модули

### `src/lib/seo.ts` и `src/components/SeoHead.tsx`

- Константы: `SITE_URL`, `HOME_TITLE`, `HOME_DESCRIPTION`, `OG_IMAGE_PATH`
- `buildHomeSeoMeta()` / `buildHomeJsonLd()` — главная страница
- `usePageSeo` в `SeoHead` синхронизирует meta при работе SPA (дублирует `index.html` после сборки)

### `src/lib/contact.ts` — контактные данные

Единственное место, где хранятся номер телефона и WhatsApp. При смене номера менять только здесь.

```ts
export const WHATSAPP_URL = "https://wa.me/972543319843";
export const PHONE_DISPLAY = "+972 54-331-9843";
export const PHONE_TEL = "+972543319843";
```

### `src/lib/config.ts` — конфигурация API

Загружает `API_BASE_URL` в такой последовательности:
1. `GET /api/config` (JSON-ответ с сервера, если есть)
2. `VITE_API_BASE_URL` (переменная окружения)
3. Пустая строка (same-origin, для статического хостинга)

`main.tsx` вызывает `loadRuntimeConfig()` до первого рендера React.

### `src/hooks/useScrollAnimation.ts` — анимация при скролле

```ts
const { ref, isVisible } = useScrollAnimation(threshold?);
```

Подключается к контейнеру через `ref`. Как только элемент входит в область видимости — `isVisible` становится `true` (один раз). Если пользователь включил `prefers-reduced-motion` в системе — анимация пропускается, элемент сразу видим.

Используется во всех секциях кроме Hero и Navbar.

### `src/components/HeroBackground.tsx` — фон Hero

Декоративный слой (`pointer-events-none`, `aria-hidden`), подключается из `HeroSection`:

1. Диагональный градиент: крем `#f5f2eb` → `#f0f7ff` → белый.
2. Inline SVG: сетка 48px (navy, ~4% opacity) + золотая кривая «роста» (только `lg+`).
3. Radial mask — паттерн слабее в зоне фото (слева), сильнее у текста.
4. Мягкое золотое пятно `blur` справа (за текстом), не под портретом.

На мобиле паттерн чуть тише (`opacity-25` vs `0.35` на desktop). Под фото нет белых плашек и `object-cover` — PNG с прозрачностью.

### `src/components/ScrollCarousel.tsx` — горизонтальная карусель

```tsx
<ScrollCarousel dir="rtl">
  {items.map(item => <button>...</button>)}
</ScrollCarousel>
```

Горизонтальный скролл-контейнер с кнопками ◀ ▶. Prop `dir` передаётся напрямую в scroll-контейнер (нужен `"rtl"` для офисных фото). Используется в `GallerySection` и `OfficeSection`.

### `src/components/Lightbox.tsx` — модальный лайтбокс

```tsx
<Lightbox
  isOpen={lightboxIndex !== null}
  onClose={closeLightbox}
  onPrev={goPrev}
  onNext={goNext}
  prevLabel="תמונה קודמת"
  nextLabel="תמונה הבאה"
>
  {/* медиа-контент */}
</Lightbox>
```

Оверлей с кнопками навигации и клавиатурой: `Escape` — закрыть, `←` — назад, `→` — вперёд. Используется в `GallerySection` (видео) и `OfficeSection` (фото).

---

## Сплэш-экран

При загрузке страницы `index.html` сразу отображает `#app-splash` — оверлей с логотипом и анимированным прогресс-баром. Стили в `src/index.css` (`.app-splash__*`).

`main.tsx` скрывает сплэш (`hideAppSplash`) через два `requestAnimationFrame` после монтирования React — это гарантирует, что первый кадр приложения уже отрисован. Переход — плавный fade-out 0.45s.

При `prefers-reduced-motion` логотип не прыгает, прогресс-бар мигает вместо бега.

---

## Блог-система и SEO

### Как добавить статью

1. Создать файл `seo/content/название-статьи.md` (или вложенную папку).
2. Добавить YAML-фронтматтер:

```markdown
---
title: Заголовок статьи
description: Краткое описание до 160 символов
date: 2025-01-15
tags: [ипотека, советник]
og_image: /assets/og-image.jpg
---

Текст статьи в Markdown...
```

3. Запустить `pnpm run build` — статья автоматически появится на `/blog/название-статьи/`.

### Как это работает

```
seo/content/*.md
       │
       ▼ (Vite glob import, eager)
src/lib/blog.ts — парсит фронтматтер (YAML), сортирует по дате
       │
       ├──▶ BlogIndexPage  → /blog/
       └──▶ BlogPostPage   → /blog/:slug/
                │
                ▼ (при сборке: pnpm run build)
        prerender/site.js       — `/` (fallback h1) и `/blog/*` (renderToString)
        prerender/routes.js     — маршруты: / + blog
        prerender/blog-sitemap.js — lastmod для sitemap.xml
```

**Главная (`/`):** в `dist/index.html` уже есть meta, JSON-LD и скрытый `<h1>` для краулеров; React монтируется как обычно.

**Блог (`/blog/*`):** статический HTML; `<meta name="prerender-static-page" content="blog">` — `main.tsx` **не** монтирует React (только HTML для SEO).

**Блог в SPA:** маршруты `/blog` в `App.tsx` пока не подключены — на проде работают prerender-страницы из `dist/blog/`. Статьи добавляются в `seo/content/*.md` (папка может быть пустой).

**При сборке в `dist/`:**
- `robots.txt` (включая `Sitemap: …`)
- `sitemap.xml` — `/`, `/blog`, статьи; `lastmod` по mtime `.md`

### Поддерживаемые поля фронтматтера

| Поле | Назначение |
|---|---|
| `title` | Заголовок (иначе — из имени файла) |
| `description` | Описание (иначе — первые 160 символов текста) |
| `date` | Дата публикации (ISO 8601, используется для сортировки) |
| `tags` | Массив тегов |
| `keywords` | Ключевые слова через запятую (SEO) |
| `og_title`, `og_description`, `og_image`, `og_image_alt` | Open Graph переопределения |
| `og_url`, `og_type`, `og_site_name` | OG-мета |
| `twitter_card`, `twitter_title`, `twitter_description` | Twitter/X мета |
| `twitter_image`, `twitter_image_alt`, `twitter_site`, `twitter_creator` | Twitter/X мета |
| `lang` | Язык статьи (подставляется в `<html lang>`) |

---

## Дизайн-система

### Цвета (hardcoded в компонентах)

| Цвет | HEX | Применение |
|---|---|---|
| Тёмно-синий | `#0d1b4a` | Основной текст, фон секции «О себе» |
| Синий | `#1a237e` | Акценты, hover, линии сетки Hero |
| Золотой | `#D4A843` | CTA-кнопки, декор, кривая на фоне Hero |
| Золотой (hover) | `#b8912e` | Hover CTA |
| Крем | `#f5f2eb` | Hero-градиент, трек скроллбара |
| Светло-голубой | `#f0f7ff` | Hero, отзывы, hover Navbar |

### Шрифт

**Heebo** (Google Fonts) — весь сайт. Загружается в `index.html` с `display=swap`.  
Поддерживает иврит и RTL.

### RTL

- `<html dir="rtl" lang="he">` в `index.html`
- `dir="rtl"` на контейнерах в `Index.tsx`, `Navbar.tsx`, `AboutSection.tsx` и др.
- Tailwind использует логические свойства: `ms-*`, `me-*`, `ps-*`, `pe-*` где нужно

### Скроллбар

Кастомный скроллбар документа в `src/index.css` (вне `@layer`):
- **WebKit:** кремовый трек `#f5f2eb`, thumb — золотой градиент; при hover на полосу — белый трек, thumb — сиренево-голубой градиент
- **Firefox:** `scrollbar-width: thin`, `scrollbar-color` (золотой thumb, кремовый track; при hover — отдельные правила в CSS)

---

## Зависимости (ключевые)

| Пакет | Назначение |
|---|---|
| `react-router-dom` | Клиентский роутинг (SPA + блог) |
| `@tanstack/react-query` | Кэширование запросов (подготовлено для будущего API) |
| `embla-carousel-react` | Не используется напрямую (через shadcn/ui carousel) |
| `markdown-to-jsx` | Рендер Markdown в React-компоненты |
| `yaml` | Парсинг YAML-фронтматтера в `.md` файлах |
| `lucide-react` | Иконки |
| `sonner` | Toast-уведомления |
| `class-variance-authority` + `clsx` + `tailwind-merge` | Утилиты Tailwind-классов (shadcn/ui) |
| `date-fns` | Работа с датами |
| `zod` + `react-hook-form` | Валидация форм (подготовлено) |
| `vite-prerender-plugin` | SSG: статический HTML для SEO |
| `vite-plugin-sitemap` | Автогенерация `sitemap.xml` и `robots.txt` |
| `@tailwindcss/typography` | Prose-стили для блога |
