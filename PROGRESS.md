# PROGRESS.md — статус-лог

Хронологический статус работ. Роадмап — [ROADMAP.md](ROADMAP.md), снимок — [HANDOFF.md](HANDOFF.md),
аудит — [AUDIT.md](AUDIT.md). Даты абсолютные.

## Статус по фазам (2026-06-22)
| Фаза | Статус | Комментарий |
|---|---|---|
| R0 Bootstrap | ✅ | форк, чистая история, пуш |
| R0.5 Стратегия | ✅ | STRATEGY.md (EN-first, гео, моат) |
| R1 Перемоделирование | ✅ | модель, EN-слаги разделов, i18n, проза |
| R1.5 Конфиг/идентичность | ✅ (🔑 партнёрки) | GA4, live-курсы, домен, partners-гео |
| R2 Брендинг | ✅ | палитра/hero-ротация/флаг/фавикон/og/EN-слаги ✅; логотип — опц. |
| R3 Контент | 🟡 | 5 статей (cover-only) + столица Тирана (18 фото, Нед.1) + город Саранда (14 фото, Нед.2) + город Берат (12 фото, Нед.3) + МАРШРУТ Albania Road Trip (6 остановок, 10 фото, Нед.3) + статья «Is Albania Safe to Visit in 2026?» (planning, 6 фото, Нед.1/P0-доверие); контент-план идёт |
| R4 Запуск | 🟡 | домен/GA4/sitemap ✅; GSC ⬜ |
| R5+ Рост | ⬜ | — |

**Технический каркас:** Этап 1 закрыт — `npm run qa` → GO, грузинских хвостов 0, доки синхронны.
Бэклог фиксов — [ROADMAP-FIX.md](ROADMAP-FIX.md), аудит — [AUDIT-2026-06-22.md](AUDIT-2026-06-22.md).

## Лог (новые записи сверху)
### 2026-07-08 — Контент: опубликован МАРШРУТ «Albania Road Trip» (KALENDAR Нед.3/Ср 08.07)
- **Опубликован первый МАРШРУТ** (одноязычный en, коллекция `routes`, `routes/albania-road-trip-itinerary`, KALENDAR Нед.3/Ср 08.07 «10 Days in Albania: Ultimate Road Trip Itinerary»): тело EN ~1670 слов, **8-дневное кольцо** Тирана → Берат → Влёра/Ривьера (Llogara) → Саранда → Ксамил → Гирокастра → Тирана, `days:8`, `distanceKm:620`, `budgetFrom:60 EUR`, `bestSeason: may/june/september/october`. Структура: лид → почему ехать на авто → по дням (что смотреть, ночёвки, расстояния/время) → таблица плеч → практика (аренда, сезон, дороги, деньги ALL, страховка). Факты — общие (Wikipedia/UNESCO/albania.al), без выдуманных цен.
- **6 остановок, у КАЖДОЙ `stops[].photo`** (`{src,alt,credit}`) + cover + 3 gallery = **10 уникальных фото**, все CC/CC0 Wikimedia (webp ≤200КБ, отобраны через `commons-candidates`→`build-gallery`). Лицензии: cover/Llogara CC BY-SA 4.0; Тирана CC BY 2.0; Берат CC BY-SA 4.0; Влёра/Llogara CC BY-SA 4.0; Саранда CC BY-SA 3.0; Ксамил CC0; Гирокастра CC BY-SA 4.0; Ксамил-острова CC BY 3.0; Пирамида Тираны CC BY-SA 4.0.
- **Геометрия OSRM:** прогнан `node scripts/build-route-geometry.mjs` → реальная дорожная линия (6 стопов → 52 точки) в `src/data/route-geometry.json`. **Фикс скрипта:** `ROUTES_DIR` исправлен `src/content/routes/ru` → `…/en` (был хвост от удалённых ru/uk — иначе скрипт не видел маршруты одноязычного сайта).
- **Перелинковка:** 6 внутр. ссылок — хаб `/routes/` + Тирана/Берат/Саранда (города-якоря) + аренда авто + best-time + страховка (≥2 ✓). 2 AffiliateBox `/go/` (trip-carhire inline / trip-hotels body-end). `build:covers` прогнан (cover-варианты).
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ 30 стр. · test [enums/parity 11 en/photos/interlinks] ✓ · test:links ✓ · lint ✓; 0 критич./0 средних, минорные — преекзистинг decorative-alt hero/флаг). Закоммичено + запушено в `main`.

### 2026-07-10 — UI-фикс: бесшовная непрерывная крутилка витрины (ShowcaseRail)
- **Проблема:** витрина на главной останавливалась/дёргалась при малом числе карточек и могла показывать одинаковые карточки рядом (статические клоны рендерились прямо в разметке).
- **JS крутилки (`public/js/showcase-rail.js`)** заменён целиком на эталонную бесшовную непрерывную реализацию: JS сам клонирует уникальный набор карточек до ширины дорожки ≥2.5× вьюпорта и заворачивает петлю ровно на ширину одного набора → крутится по кругу без рывка и не останавливается при малом числе карточек; клоны `aria-hidden`/вне фокус-порядка (a11y). Сохранены пауза при наведении/фокусе, drag/свайп, prefers-reduced-motion, клик-vs-drag, тач-поповер.
- **Компонент (`ShowcaseRail.astro`)** теперь рендерит набор ОДИН раз: `const cells = items.map((it) => ({ ...it, clone: false }));` (раньше дублировал статическими клонами). Клонированием занимается только JS в рантайме. Поле `clone` оставлено (всегда false), разметка/стили не тронуты.
- **Набор витрины (`HomePage.astro`, `showcasePicks`)** расширен с 3 до **8 уникальных карточек** (дедуп по slug): 3 города (Тирана/Саранда/Берат, kicker `city`) + 5 ключевых статей с cover — `albania-visa` (planning), `how-to-rent-a-car` (car-rental), `best-time-to-visit` (planning), `do-you-need-insurance` (insurance), `digital-nomad-visa` (relocation), все kicker `sight`. Категория каждой — из её frontmatter. Хватает на полный вьюпорт без видимых повторов.
- **Верификация `dist/index.html`:** секция витрины есть; в `showcase__track` ровно 8 ячеек, 0 `data-clone` (статических клонов нет), все 8 hrefs уникальны, нет двух одинаковых подряд — клоны добавляет только JS в рантайме.
- **Гейты:** `build` ✓ (30 стр.) · `check` 0/0/0 · `npm test` ✓ (enums/parity 10 en/photos/interlinks) · `test:links` ✓ (1412 ссылок, 0 битых) · `lint` ✓. Закоммичено + запушено в `main`.

### 2026-07-10 — Контент: опубликован город Берат (KALENDAR Нед.3/Пт 10.07)
- **Опубликована статья-ГОРОД Берат** (одноязычная en, `cities/berat-albania-guide`, KALENDAR Нед.3/Пт 10.07 «Berat, Albania: City of a Thousand Windows»): EN ~1620 слов, **12 уникальных фото** CC/CC0 Wikimedia (cover + 8 инлайн-figure + 3 gallery, webp ≤200КБ, отобраны глазами через `commons-candidates`→`build-gallery`), факты из надёжных источников (Wikipedia/UNESCO), цена/часы музея Онуфри оставлены TODO+«уточняйте» (правило 4). Структура города: лид → Мангалем («тысяча окон») → замок Кала (жилая крепость) + Онуфри/церкви → Горица + Османский мост + Свинцовая мечеть → дейтрипы (каньон Осуми, вино/ракия) → где жить → как добраться (Тирана ~2–2.5ч, связь с Сарандой) → где поесть → практика. Без FAQ.
- **Перелинковка:** 5 внутр. ссылок — хаб `/cities/`, Саранда, Тирана, аренда авто, best-time (≥2 ✓). 2 AffiliateBox `/go/` (trip-hotels inline / trip-tours body-end), `hotelWidget`, `accessFrom.tirana`, `geo`. `featuredOrder: 4`.
- **Витрина главной:** Берат добавлен третьим пиком в `showcasePicks` (`HomePage.astro`) — `{kind:'article',category:'cities',slug:'berat-albania-guide',kicker:'city',city:'Berat'}`. На главной — золотая лента с тремя городами (Тирана/Саранда/Берат). Прогнан `build:covers` (Берат — 2 новых варианта обложки).
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ 29 стр. · test [enums/parity 10 en/photos/interlinks] ✓ · test:links ✓ · lint ✓; 0 критич./0 средних, минорные — преекзистинг decorative-alt). Закоммичено + запушено в `main`.

### 2026-06-22 — UI: убран пункт «Language» из меню + наполнена витрина главной городами
- **Правка 1 (одноязычность в UI):** из `Header.astro` удалён блок переключателя языка в мобильной выпадашке (`.nav__lang`/`.nav__lang-label` + подпись `dict.lang.label` + `<LangSwitcher/>`), убран неиспользуемый импорт `LangSwitcher`, удалён мёртвый CSS `.nav__lang*`, поправлены комментарии. Из `Footer.astro` удалён `<LangSwitcher/>` и его импорт. Пропс `availableLangs` оставлен в обоих интерфейсах для совместимости с `BaseLayout` (не деструктурируется). `dict.lang.label` больше нигде в шапке/подвале не рендерится. В `dist/` — 0 вхождений `nav__lang` и `>Language<`.
- **Правка 2 (витрина):** в `HomePage.astro` массив `showcasePicks` (был пуст `[]`) заполнен двумя опубликованными городами-гайдами: `things-to-do-in-tirana` и `saranda-albania-guide` (оба `category: 'cities'`, kicker `'city'` → «City», city-чип Tirana/Saranda, у обоих есть cover). Машинерия резолвинга не тронута; условие «пусто → лента скрыта» сохранено. На главной появилась золотая лента витрины (`block--showcase` + `showcase-rail` с двумя карточками городов).
- **Гейты:** `npm run build` ✓ (28 стр., без предупреждений; `/cities/things-to-do-in-tirana/`+`/cities/saranda-albania-guide/` на месте) · `npm run check` 0/0/0 · `npm test` (enums/parity[9 en]/photos/interlinks) ✓ · `test:links` ✓ (1293 ссылки, 0 битых) · `lint` ✓. Закоммичено + запушено в `main`.

### 2026-06-22 — Структурно: сайт переведён на ОДИН язык — английский (en)
- **Решение владельца:** убрать ru и uk полностью, оставить только en на корне `/`. Сайт стал одноязычным.
- **Конфиг:** `LANGS = ['en']` (`src/i18n/types.ts`, `src/content.config.ts`), `DEFAULT_LANG = 'en'`. `i18n/index.ts`: убраны импорты/словари ru/uk, `langPrefix`/`mirrorPath` упрощены (префикса нет, зеркал нет), `LOCALE`/`OG_LOCALE` → только en.
- **Удалено:** дерево `src/pages/ru/` и `src/pages/uk/` целиком; словари `src/i18n/ru.ts`, `src/i18n/uk.ts`; контент `src/content/*/ru` и `.../uk` (реально были только `articles/ru`+`articles/uk` по 9 файлов + пустые `.gitkeep` коллекций); ru/uk-ветки локалей в layout/компонентах.
- **hreflang:** BaseLayout теперь эмитит self `hreflang="en"` + `x-default` на тот же URL (других alternate нет). Cyrillic-preload шрифтов убран (нужна только латиница).
- **LangSwitcher:** превращён в no-op заглушку (один язык — переключать нечего); пропсы приняты для совместимости Header/Footer.
- **sitemap (astro.config):** убран i18n-режим (locales/hreflang-alternates), фильтр `/relocation/services/` без ru/uk-префикса.
- **Гейт паритета (`scripts/check-parity.mjs`):** переписан под один язык — требует, чтобы весь контент лежал в `/en/` (любой файл вне `/en/` = ошибка), title ≤60.
- **`public/_redirects`:** добавлены `/ru/* /:splat 301` и `/uk/* /:splat 301` (старые языковые URL → en на корне); `/en/* → :splat` сохранён.
- **`scripts/new-content.mjs`:** генерит только en-версию.
- **Доки:** `CLAUDE.md`, `CONTENT_GUIDE.md`, `SPEC.md`, `package.json` — указано «сайт только на английском (en)».
- **Сборка:** 28 страниц, все на корне (нет `/ru/`, `/uk/`). В sitemap и HTML нет ru/uk-hreflang и ссылок на удалённые языки.
- **Гейты:** `npm run check` 0/0/0 · `npm run build` ✓ (28 стр., без предупреждений) · `npm test` (enums/parity[9 en]/photos/interlinks) ✓ · `test:links` ✓ (1289 ссылок, 0 битых) · `lint` ✓. Закоммичено + запушено в `main`.

### 2026-07-01 — Контент: статья-ГОРОД Саранда (KALENDAR Нед.2, Ср 01.07)
- Опубликована тройка en/ru/uk `cities/saranda-albania-guide` (целевой запрос `saranda albania`), EN-first, паритет (тот же slug, взаимные hreflang en↔ru↔uk + x-default→en).
- **Объём:** EN-ведущая ~1500 слов (норма 1200–2000); ru/uk — полноценные зеркала под русский/украинский запрос (живая мова), факты идентичны.
- **Структура города:** лид-ответ → что посмотреть (набережная/пляжи, замок Лекурси + закат) → дейтрипы (Бутринт UNESCO, Голубой глаз/Syri i Kaltër, Ксамил/Албанская Ривьера) → где жить (набережная/верхний город/Ксамил) → как добраться (Тирана→Саранда ~4–5 ч, паром с Корфу ~30–90 мин) → где поесть → практика. Без FAQ.
- **Фото:** 14 уникальных CC/CC0/PD Wikimedia (cover+8 инлайн-figure+5 gallery), webp ≤200КБ, отобраны глазами (проверено, что на кадре — Саранда/Бутринт/Голубой глаз/Ксамил, не чужая страна); кредиты «автор+лицензия». ≥10 — норма города выполнена.
- **Факты:** из надёжных источников (Wikipedia/UNESCO/butrint.al). Цена/часы Бутринта НЕ выдуманы — TODO+«уточняйте» (правило 4). `accessFrom.tirana` (~280 км, ~4–5 ч), `hotelWidget`.
- **Перелинк:** ≥2 внутр. ссылки + хаб `/cities/` + Тирана + аренда авто + best-time. 2 AffiliateBox `/go/` (trip-hotels inline, trip-tours body-end). `featuredOrder: 3`.
- **Гейты:** `npm run check` 0/0/0 · `npm test` (enums/parity/photos/interlinks) ✓ · `test:links` ✓ · `lint` ✓ · **`npm run qa` → GO**. Закоммичено + запушено в `main`.

### 2026-06-24 — Контент: статья-СТОЛИЦА Тирана (KALENDAR Нед.1, Ср 24.06)
- Опубликована тройка en/ru/uk `cities/things-to-do-in-tirana` (целевой запрос `things to do in tirana`), EN-first, паритет (тот же slug, взаимные hreflang en↔ru↔uk + x-default→en).
- **Объём:** EN-ведущая ~1593 слова (в норме 1200–2000); ru/uk — полноценные зеркала под русский/украинский запрос (живая мова), факты идентичны.
- **Структура города:** лид-ответ → что посмотреть (площадь Скандербега, мечеть Этхем-бея + Часовая башня, Пирамида/TUMO, канатка Дайти, Бунк’Арт/Дом листьев, Пазари-и-Ри, Большой парк) → районы (Центр/Блоку/Базар) → аэропорт TIA→центр (Rinas Express/такси/авто) → где поесть → практика. Без FAQ.
- **Фото: 18 уникальных** (cover + 10 инлайн-figure + 7 gallery), все легальные CC/CC0 с Wikimedia Commons, webp ≤200КБ, атрибуция автор+лицензия в coverCredit/figcaption. Цель столицы ≥15 — перевыполнена. `build:covers` прогнан.
- **Факты** из надёжных источников (Wikipedia, dajtiekspres.com, tirana-airport.com); цены/часы канатки и автобуса — «уточняйте» + дата проверки (июнь 2026), без выдумки. ≥4 внутр. ссылки (cities-хаб, car-rental, planning/best-time, relocation/nomad, insurance) + 2 AffiliateBox через `/go/` (trip-hotels, trip-tours). `npm run qa` → GO.
- Первая статья в категории `cities` (хаб `/cities/` теперь не пуст), `featuredOrder: 1`, `hotelWidget: true`.

### 2026-06-22 — Новости: первые 2 публикации (`/news`)
- Опубликованы 2 одобренные новости (тройки en/ru/uk, EN-first, паритет slug/чисел/дат, взаимные hreflang):
  - `news/durres-folklore-festival-june-2026` — Междунар. фольклорный фестиваль «Festival Days in Albania», Дуррес, 25–29.06.2026 (источник EAFF).
  - `news/vlora-airport-closed-summer-2026` — аэропорт Влёры (VIA) не откроется к лету 2026, чартеры отменены, TIA — единственный (источник Albanian Daily News, 11.04.2026).
- Фото — CC/CC0 с Wikimedia (cover ≤200КБ webp + по 1 инлайн-figure + 1 gallery на новость), атрибуция в coverCredit/figcaption; адаптивные варианты обложек прогнаны (`build:covers`).
- Факты строго из источников, даты 2026, рерайт своими словами; ≥6 внутр. ссылок на реальные страницы; партнёрки только через `/go/` (trip-hotels / aviasales). `npm run qa` → GO.

### 2026-06-22 — Этап 1: повторный прогон + `/full-audit` (11 агентов)
- Запущен заказанный `/full-audit` (адверсариальная проверка в исходниках + dist) — нашёл реальные дефекты мимо гейтов. Закрыто:
  - 🔴 инлайн `/go/safetywing` без rel/?c= (×3) → убран + **check-links гейтит** rel+?c= на всех `/go/`.
  - 🟠 `offline.html` «Georgia Guidebook» (уезжал в dist через SW) → Albania; тонкие хабы → `noindex={!hasContent}` (6 шаблонов) + hreflang снят на noindex; «Фото:»→«Photo:» на 5 EN-обложках.
  - 🟡 мёртвый CSS `.eda→.food`; грузинские комментарии (matsne→punetejashtme, Тбилиси→Тирана, Батуми→Саранда, палитра→азур); SPEC/CONTENT_GUIDE: категории → 11 EN, §25 п.6 закрыт.
  - 🔵 twitter:image:alt; ga-init defer; /js Cache-Control; /go security-заголовки; guard жилья на пустой city-food.
- Отложено в `ROADMAP-FIX.md`: адаптивные обложки (мёртвый srcset-пайплайн), коллизия маршрутов food/cities, CI/daily-news мимо гейтов, объём статей <1200 слов, контраст --color-wine, контентные правки. Детали — `AUDIT-2026-06-22.md` блок H.
- Сверено: Этап 1 цел (ничего не регрессировало). `astro check` 0/0/0, `npm run qa` → GO.

### 2026-06-22 — Этап 1 (техбаза, чистка, доки)
- **qa = GO:** 24 битых forward-ссылки из хабов (food/city/insurance) → условный рендер
  (рендерятся только при наличии целевой статьи). `check-links` 0 битых (71 стр, 3511 ссылок).
- **Чистка:** `addressCountry GE→AL` (schema.org); удалён `bash.exe.stackdump` (+ .gitignore);
  убраны 15 `<!-- TODO: фото -->`; дочищены грузинские комментарии (страна + URL движка).
- **`/news` SKILL.md** локализован под Албанию (Tirana Times/Euronews Albania/Exit.al/…, RSS,
  МИД/Банк Албании, аэропорт TIA, лек, города, виза). Пайплайн сохранён.
- **Стандарты публикации** (объём 1200–2000 слов / новость 1500–2000 знаков; фото статья ≥5/
  город ≥10/столица ≥15) + **правило дисциплины** (commit/push без напоминаний) — в CLAUDE/CONTENT_GUIDE.
- **Доки:** README/PROGRESS/HANDOFF/AUDIT/MEMORY синхронизированы; созданы AUDIT-2026-06-22, ROADMAP-FIX.
- Проверено фактически: `uk.ts` цел (паритет 38), `news` — категория (не коллекция).

### 2026-06-22
- **EN-first месяцы**: `MONTHS`/`MONTH_SLUGS` RU-транслит → english. Чистка 2 hints
  (`ArticleCard` Props, `qa-lighthouse` await) → `astro check` 0/0/0.
- **Lighthouse (реальный, после фикса QA-скриптов)**: SEO/BP 100 везде, a11y 92–96,
  perf 90–91 (главная 79). Адаптив GO (8×5). `qa:browser` = GO.
- **EN-first слаги подкатегорий**: attractions/entertainment/services + скаффолдер-категории
  RU-транслит → english (check-enums зелёный).
- **Блокеры запуска вычищены**: robots.txt (бренд + домен sitemap), QA-скрипты (PAGES +
  TITLE_SUFFIX), латентный хардкод городов (Eda/Entertainment/HomePage), скаффолдер GEL/₾,
  комментарии. **og-default.jpg** перерисован (Ривьера + бренд).
- **Брендинг**: флаг Албании в шапку + фавикон с **официальным** двуглавым орлом (Wikimedia PD) + PNG-иконки.
- **Полный аудит** (`/full-audit`, 11 измерений, read-only): главный вывод — пустота ожидаема,
  чинить надо грузинские хвосты (сделано) → см. [AUDIT.md](AUDIT.md).

### Ранее (этой же сессии)
- Подключены **GA4** `G-9FTVJ00X41` (внешний ga-init.js), **live-курсы/погода** под Албанию
  (Тирана/Дуррес/Саранда + лек), переключатель языка убран из шапки в выпадашку,
  sitemap-фильтр исправлен (noindex `/relocation/services/` не в карте).
- Редизайн «Адриатика», hero-фото Ривьеры, **5 статей** ×3 языка с обложками.

## Известные «красные», которые не дефекты
- `npm run qa` NO-GO — **только** `check-links` на ссылки в ненаписанные статьи (NO-CONTENT).
- perf главной 79 — hero-кадр (LCP); оптимизировать при работе над hero-ротацией.
