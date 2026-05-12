# Boikov Finance — сайт

Статичный лендинг на **Vite**, **React**, **TypeScript**, **Tailwind** и **shadcn/ui**.

## Локально

```shell
pnpm install
pnpm run dev
```

Сборка: `pnpm run build`, результат в `dist/`.

## GitHub Pages

1. В репозитории: **Settings → Pages → Build and deployment**: источник **GitHub Actions** (не «Deploy from a branch»).
2. После пуша в `main` или `master` workflow **Deploy to GitHub Pages** соберёт проект и опубликует `dist`.
3. В **Settings → Pages** для пользовательского домена укажите **boikovfinance.com**; в корне репозитория лежит `public/CNAME` — он копируется в `dist` при сборке.

DNS у регистратора: для apex-домена часто используют **A-записи GitHub** ([документация](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)); для `www` — **CNAME** на `<user>.github.io` или на Pages URL вашего репо.

## Переменные окружения при сборке

При необходимости задайте в **Settings → Secrets and variables → Actions** (или в env CI):

- `VITE_APP_TITLE`, `VITE_APP_DESCRIPTION`, `VITE_APP_LOGO_URL` — заголовок, описание и иконка (подставляются в `index.html` на этапе сборки).
- `VITE_API_BASE_URL` — если позже появится свой API.

По умолчанию в `vite.config.ts` заданы заголовок и описание для **boikovfinance.com**.

## Структура

- `src/pages/Index.tsx` — главная страница.
- `src/App.tsx` — маршруты и провайдеры.
- `src/components/ui/` — компоненты shadcn/ui.
- `vite.config.ts` — sitemap для `https://boikovfinance.com`, опциональный пререндер блога при наличии контента.

Псевдоним `@/` указывает на `src/`.
