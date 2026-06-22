# HANDOFF.md — снимок состояния

Снимок «где остановились» для следующей сессии. Роадмап — [ROADMAP.md](ROADMAP.md), бэклог
фиксов — [ROADMAP-FIX.md](ROADMAP-FIX.md), аудит — [AUDIT-2026-06-22.md](AUDIT-2026-06-22.md),
статус-лог — [PROGRESS.md](PROGRESS.md), правила — [CLAUDE.md](CLAUDE.md).

## Снимок (2026-07-01, контент-план Нед.2)
- **Опубликована статья-ГОРОД Саранда** (тройка en/ru/uk, `cities/saranda-albania-guide`, KALENDAR Нед.2/Ср 01.07): EN-ведущая ~1500 слов, **14 уникальных фото** CC/CC0/PD Wikimedia (cover+8 инлайн+5 gallery, ≤200КБ, отобраны глазами), факты из надёжных источников (Wikipedia/UNESCO), цена/часы Бутринта оставлены TODO+«уточняйте» (правило 4). ≥2 внутр. ссылки + хаб `/cities/` + перелинк на Тирану, аренду авто, best-time. 2 AffiliateBox `/go/` (trip-hotels/trip-tours), `hotelWidget`, `accessFrom.tirana`. `featuredOrder: 3`. `npm run qa` → **GO**.
- Дальше по KALENDAR Нед.2: Пт 03.07 «Tirana Airport Transfers» (info/transactional), Вс 05.07 «Renting a Car in Albania» (базовый `how-to-rent-a-car` уже есть — сверить с темой). Перелинк Саранда↔Ksamil/Albanian Riviera добавить, когда выйдут (Нед.4).

## Снимок (2026-06-24, контент-план Нед.1)
- **Опубликована статья-СТОЛИЦА Тирана** (тройка en/ru/uk, `cities/things-to-do-in-tirana`, KALENDAR Нед.1/Ср 24.06): EN-ведущая ~1593 слова, **18 уникальных фото** CC/CC0 Wikimedia (cover+10 инлайн+7 gallery, ≤200КБ), факты из надёжных источников, ≥4 внутр. ссылки + 2 AffiliateBox `/go/`. Первая статья в категории `cities` → хаб `/cities/` не пуст. `npm run qa` → GO.
- Дальше по KALENDAR Нед.1: Пт 26.06 «Is Albania Safe» (attractions/info), Вс 28.06 «Is Albania Expensive» (info).

## Снимок (2026-06-22, после Этапа 1)
- **Ветка `main`**, задеплоено на Cloudflare. **Сайт live** — `https://albaniaguidebook.com`.
- **Сборка:** `astro check` 0 ошибок / 0 warnings / 0 hints · `build` зелёный (~70 страниц) ·
  **`npm run qa` → GO** (все гейты зелёные: check/build/test/links/lint).
- **Lighthouse (mobile):** SEO 100 / Best-practices 100 везде; a11y 92–96; perf 89–91 на
  статьях/хабах, **77 на главной** (3 hero-кадра — единственный <90, см. ROADMAP-FIX).
- **Адаптив:** нет горизонтального переполнения (8 шаблонов × 5 ширин).
- **Контент:** 5 статей ×3 языка (`planning/albania-visa`, `planning/best-time-to-visit`,
  `car-rental/how-to-rent-a-car`, `insurance/do-you-need-insurance`,
  `relocation/digital-nomad-visa`) — только обложки, без инлайн-фото (норма ≥5 → ROADMAP-FIX).
  Коллекции `routes/restaurants/services/cities` пусты.
- **Новости:** 2 опубликованы ×3 языка (`news/durres-folklore-festival-june-2026`,
  `news/vlora-airport-closed-summer-2026`) — cover ≤200КБ + инлайн-figure + gallery, CC/CC0 Wikimedia,
  EN-first, факты из EAFF / Albanian Daily News, даты 2026. `npm run qa` → GO.

## Повторный прогон + `/full-audit` (2026-06-22)
Запущен `/full-audit` (11 агентов, адверсариальная проверка) — нашёл и закрыто: 🔴 инлайн `/go/`
без rel/?c= (+ check-links теперь гейтит); 🟠 `offline.html` Georgia, тонкие хабы → noindex,
«Фото:»→«Photo:» на EN; 🟡 мёртвый CSS `.eda→.food`, грузинские комментарии, SPEC/CONTENT_GUIDE
категории→11 EN; 🔵 twitter:alt/ga-init defer/js-кэш/go-security/guard жилья. Отложено (ROADMAP-FIX):
адаптивные обложки, коллизия маршрутов food/cities, CI-гейты, объём статей, контраст. См. AUDIT-2026-06-22 §H.

## Что закрыто в Этапе 1 (2026-06-22)
- **qa = GO:** 24 битых forward-ссылки из хабов → условный рендер (рендерятся при наличии цели).
- **schema.org** `addressCountry GE→AL`; удалён `bash.exe.stackdump` (+ в .gitignore); убраны
  15 мёртвых `<!-- TODO: фото -->`.
- **`/news` SKILL.md** локализован под Албанию (источники/аэропорты/лек/города/виза).
- **Стандарты публикации** (объём/фото) + **правило дисциплины** (commit/push) в CLAUDE/CONTENT_GUIDE.
- **Доки** синхронизированы: README, PROGRESS, AUDIT, MEMORY + новые AUDIT-2026-06-22 / ROADMAP-FIX.
- Проверено: `uk.ts` цел (паритет), `news` — категория (не коллекция, фантома нет).

## Закрыто ранее этой сессии
GA4 (`G-9FTVJ00X41`), live-курсы/погода (Тирана/Дуррес/Саранда + лек), Cloudflare/домен,
брендинг (палитра/hero-ротация/флаг/фавикон с офиц. орлом/og), вычистка грузинских хвостов,
EN-first слаги (подкатегории + месяцы).

## Следующий шаг
- **Контент (R3, на паузе по решению владельца):** гайды по городам, «что попробовать», «как
  выбрать страховку»; добор инлайн-фото до ≥5 на статью.
- **Без владельца:** оптимизация hero (perf 77→90+); пометка декоративных alt.
- **За владельцем (🔑):** Google Search Console (домен + sitemap), маппинг партнёрок.

## Грабли
- Перед `git push` — `git fetch && git rebase origin/main` (авто-джоб новостей пушит первым).
- 79 QA-минорных «пустой alt» — ложные (декоративные флаг/hero, alt="" корректно).
- В `src/data` партнёрские ID публичны (в URL), не секреты. `docs/_georgia-reference/` — шаблон, не трогать.
