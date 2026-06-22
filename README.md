# Albania Guidebook

Контентный сайт-справочник по Албании на трёх языках (**EN — на корне `/`**, RU — `/ru/`, UK — `/uk/`): достопримечательности, города, еда, маршруты, транспорт, аренда авто, страховки, развлечения, релокация, новости. Монетизация — диверсифицированные партнёрские ссылки только через `/go/{partner}`.

> **Статус (2026-06-22): движок перемоделирован под Албанию, сайт live.** Перемоделирование
> завершено (12 qarks в enums, EN-first слаги, i18n en/ru/uk, брендинг — палитра/флаг/фавикон/og,
> hero-ротация), грузинские хвосты вычищены. **Контент: 5 статей × 3 языка** (виза, когда ехать,
> аренда авто, страховка, номад-виза); коллекции `routes/cities/restaurants/services` пусты,
> новостей 0. `astro check` 0 ошибок, `npm run qa` → **GO**, ~70 страниц. Дальше — контент (R3)
> и решения владельца (партнёрки, GSC). Снимок — `HANDOFF.md`, бэклог — `ROADMAP-FIX.md`.
> Грузинские рабочие доки — **намеренный шаблон-референс** в `docs/_georgia-reference/` (не мусор).

**Прод (live):** <https://albaniaguidebook.com> · **деплой** = push в `main` (Cloudflare Workers Builds → `npm run build`). Репозиторий: github.com/sashakobtsev21-stack/albania-site.

## Внешний тулинг (плагины Claude Code)

Агенты и дизайн-скиллы **не вшиваются в репозиторий** — подключаются как плагины
Claude Code. Точные команды подключения (`my_agents` / `ui-ux-pro-max`) — в
**[`SETUP-GUIDE.md`](SETUP-GUIDE.md)**. Если они стоят глобально в `~/.claude/`,
к этому репозиторию применяются автоматически.

## Стек

- **Astro 6** (полная статика SSG, без React) + **Content Collections**
- **Tailwind CSS 4**; дизайн-токены — только из `src/styles/tokens.css`
- Хостинг **Cloudflare Workers (Static Assets)** + Worker-роут `/go/` (`worker/index.ts`)
- Изображения webp/avif ≤ 200 КБ через предгенерацию вариантов (`npm run build:covers`)
- PWA (установка + оффлайн); одна аналитика (GA4)

## Команды

| Команда | Что делает |
|---|---|
| `npm run dev` | dev-сервер |
| `npm run build` | прод-сборка (обязана быть без ошибок/предупреждений) |
| `npm run check` | `astro check` — типы и схемы контента |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm test` | контент-гейты: enums · parity (ru/uk/en) · photos · interlinks (≥2) |
| `npm run new -- <тип> <slug> --title "…"` | скаффолд материала (ru/uk/en + DoD-чеклист) |
| **`npm run qa`** | **финальный GO/NO-GO**: чистая сборка + все гейты + статический аудит `dist/` |

**Перед коммитом:** `npm run qa` → должно быть **GO** (на пустом сайте контент-гейты ожидаемо N/A).

## Структура

```
src/
  components/ layouts/      Astro-компоненты и шаблоны
  content/                  коллекции articles/ routes/ restaurants/ services/ (пусты на bootstrap)
  content.config.ts         zod-схемы коллекций
  i18n/                     словари UI ru/uk/en + types.ts
  styles/tokens.css         дизайн-токены (единственный источник цветов/отступов)
  pages/                    маршрутизация (корень=en, /ru/, /uk/)
  lib/ data/ loaders/       утилиты, манифесты, безопасная загрузка коллекций
worker/                     Worker-роут /go/ поверх Static Assets
scripts/                    скаффолдер, фото-конвейер, гейты, QA
public/                     статика, _redirects, _headers, изображения
.claude/agents/ skills/     проектные сабагенты и скиллы
docs/memory/                проектная память (сброшена под Албанию)
docs/_georgia-reference/    архив грузинских рабочих доков (шаблоны)
```

## Документация (порядок приоритета при конфликте)

1. **`SPEC.md`** — продукт, ниша, шаблоны, контент-модель (источник правды по продукту; перемоделируется под Албанию на следующем шаге).
2. **`CLAUDE.md`** — железные правила работы в репозитории.
3. **`CONTENT_GUIDE.md`** — стандарты контента.
4. **`SETUP-GUIDE.md`** — подключение внешних агентов/плагинов (`my_agents`, `ui-ux-pro-max`).
5. **`docs/memory/`** — проектная память. **`docs/_georgia-reference/`** — грузинские доки как шаблоны.
