# HANDOFF.md — снимок состояния

Снимок «где остановились» для следующей сессии. Полный роадмап — [ROADMAP.md](ROADMAP.md),
статус-лог — [PROGRESS.md](PROGRESS.md), продукт — [SPEC.md](SPEC.md), правила — [CLAUDE.md](CLAUDE.md).

## Снимок (2026-06-22)
- **Коммит:** `82d30ca` (ветка `main`, задеплоено на Cloudflare).
- **Сайт:** live — `https://albaniaguidebook.com` (открывается).
- **Сборка:** `astro check` 0 ошибок / 0 warnings / 0 hints · `build` зелёный, **70 страниц** ·
  контент-гейты (enums/parity/photos/interlinks) зелёные.
- **Lighthouse (mobile):** SEO 100 / Best-practices 100 на всех проверенных; a11y 92–96;
  perf 90–91 на статьях/хабах, **79 на главной** (тяжёлый hero-кадр — единственный <90).
- **Адаптив:** нет горизонтального переполнения (8 шаблонов × 5 ширин).
- **Контент:** 5 статей ×3 языка (`planning/albania-visa`, `planning/best-time-to-visit`,
  `car-rental/how-to-rent-a-car`, `insurance/do-you-need-insurance`,
  `relocation/digital-nomad-visa`) — у всех только обложки, без инлайн-фото. Коллекции
  `routes/restaurants/services/cities` — пусты.

## Что закрыто за эту сессию
- Подключены: GA4 (`G-9FTVJ00X41`), live-курсы/погода (Тирана/Дуррес/Саранда + лек),
  Cloudflare/домен.
- Брендинг: палитра, hero-фото, **флаг + фавикон (официальный орёл)**, og-default.
- **Вычищены все грузинские хвосты** (`src`/`scripts`): robots.txt (домен sitemap!),
  QA-скрипты (PAGES + TITLE_SUFFIX), хардкод городов в Eda/Entertainment/HomePage,
  скаффолдер GEL/₾, комментарии.
- **EN-first слаги:** подкатегории (attractions/entertainment/services) + месяцы — RU-транслит → english.
- Доки приведены в порядок (этот файл, ROADMAP, PROGRESS, AUDIT).

## Где остановились / следующий шаг
- **Контент — на паузе по решению владельца.** Когда снимем: дописать гайды по городам
  (Тирана/Дуррес/Саранда), «что попробовать», «как выбрать страховку» → `check-links` GO;
  обогатить 5 статей инлайн-фото.
- **Без контента можно:** hero-ротация, логотип, оптимизация hero для perf главной (79→90+),
  полировка пустых хабов.
- **За владельцем (🔑):** Google Search Console (домен + sitemap), маппинг партнёрок, моат-решение.

## Грабли (для следующей сессии)
- Перед `git push` делать `git fetch && git rebase origin/main` — ежедневный авто-джоб
  новостей пушит в `main` первым.
- `npm run qa` даёт NO-GO **только** из-за `check-links` на ненаписанные статьи (NO-CONTENT),
  это не дефект каркаса.
- В `src/data` партнёрские ID — публичные (в URL), не секреты.
