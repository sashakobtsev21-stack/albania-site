# HANDOFF — Albania Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-30 · **Фаза:** R4 наполнение · **Статей:** ~25 (цель ~80) · **Сайт:** live (`albaniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `content(albania): de-orphan evergreen articles (inbound links) + document cross-site interlinking`

## Где остановились
- **CONTENT (де-сиротинг вечнозелёных, 2026-06-30):** два орфана (0 входящих, проверено grep) закрыты по 2 входящие контекстные ссылки каждый. `albania-travel-insurance` ← `do-you-need-insurance` («What a good policy should cover») + `how-to-rent-a-car` («Plan around the car», точечно про travel policy vs rental excess/CDW). `where-to-stay-in-albania` ← `saranda-albania-guide` + `things-to-do-in-tirana` (оба — раздел «Where to stay»). В `CLAUDE.md` добавлена заметка про кросс-сайтовую перелинковку (ссылка на хаб `docs/STANDARDS.md` §«Перелинковка»; `rehypeExternalLinks` авто-`rel=nofollow`). `test:links`=OK, `qa`=GO.
- **FIX (B1, адаптивные таблицы / mobile overflow, 2026-06-30):** `qa:responsive` был NO-GO (6 переполнений на visa/car-rental @320/360/414). Playwright-зонд показал ДВЕ причины: широкие md-`<table>` И длинные неразрывные URL-кредиты фото (`figure__credit`/`figcaption` с Wikimedia `File:…`, ~543px — главный виновник document-overflow). В `src/styles/global.css` (движок общий): `.prose table{display:block;overflow-x:auto;…}` + `.prose figcaption,.prose .figure__credit,.cover__credit{overflow-wrap:anywhere;word-break:break-word}`. Итог: `qa:responsive`=**GO** (0 переполнений, 8 шаблонов × 5 ширин), `qa`=GO, `test:links`=OK. Закрыто в ROADMAP-FIX (B1).
- **FIX (a11y-серия портирована с движка gruzia `284cb30`, 11 пунктов, 2026-06-30):** движок общий с эталоном Грузии — те же баги. Портировано: разные `aria-label` у двух `<nav>` (`header.menuNav` «All sections»); уникальные `id` заголовков (gallery/visit/related/toc → `-${random36}`); контраст стрелок витрины `.scard__nav` (WCAG 1.4.11); имя диалога-лайтбокса = «Photo viewer» а не «Close» (WCAG 4.1.2); Esc-закрытие popover ShowcaseRail + возврат фокуса; `aria-label` на `.gallery__item`; фокус-кольцо-пилюля `.cmap__btn`/`.hero__credit`; видимый skip-link (бренд-токены этого репо, лазурь); тач-таргет `.chip` ≥44px @≤600px; noindex `nofollow→follow`; резерв витрины 198→188px. **Пропущено:** тач-таргет переключателя языка (EN-only, LangSwitcher не рендерит). i18n — только EN, цвета — токены этого репо. `qa`=GO, `test:links`=OK; `qa:responsive` table-overflow visa/car-rental — отдельно закрыт в B1 (см. запись выше). Файлы: Header/PhotoGallery/RelatedPosts/VisitInfo/TOC/RestaurantCard/ShowcaseRail/CatalogMap.astro, BaseLayout/EdaDirectory/HomePage.astro, lightbox.js, showcase-rail.js, global.css, en.ts, types.ts.
- **FIX (ROADMAP-FIX, 2 пункта закрыты):** (A) **CI-гейты** — `ci.yml` теперь прогоняет единый `npm run qa` (check·build·test·links·lint + аудит dist/, GO/NO-GO, exit≠0 на критических); `daily-news-rebuild.yml` прогоняет `check`+`test` перед пушем пустого коммита. (B) **Добор фото до ≥5** — 5 cover-only статей (`albania-visa`, `best-time-to-visit`, `digital-nomad-visa`, `do-you-need-insurance`, `how-to-rent-a-car`) доведены до cover+4 инлайн-`<figure>` реальными CC/PD-кадрами с Wikimedia (webp ≤200КБ, `photoSources` с author/license/sourceUrl). `npm run qa`=GO, `test:links`=OK. Детали — `PROGRESS.md` (запись 30.06 FIX).
- Доки: **тримминг** — в `ROADMAP-FIX.md` 15 закрытых пунктов (Этап 1 + `/full-audit`) свёрнуты в одну строку-сводку (активные `[ ]` живы); в superseded `docs/CONTENT_PLAN.md` убрана ложь (статус «опубликовано 0/сайт пустой», §2 «Очередь»-дубль KALENDAR, остаточные ru/uk) — сохранена справка EN-интентов/слагов + чек-лист «Сверять перед публикацией». src/ не тронут.
- План: **темп доведён до ровно 3 статьи/будний день на весь июль** (01–31.07) — 4 дня с опубликованной статьёй (01.07/08.07/10.07/31.07) добраны новыми коммерческими decision-stage темами (Tirana→Vlora, Ksamil vs Saranda, Where to Stay in Ksamil, Where to Stay in Berat). Каждый будень июля = ровно 3 неопубликованных слота; выходные и 30.06 не тронуты. Статьи НЕ писались — только KALENDAR.md.
- Контент: последние опубликованные — **3 транспорт-статьи на слот 30.06** (transport-routes, коммерция-first): «Saranda to Corfu Ferry» (`/transport/saranda-corfu-ferry/`, [head]), «How to Get to Albania» (`/transport/how-to-get-to-albania/`, [head]), «Tirana to Berat» (`/transport/tirana-to-berat/`, [mid]) — факты диапазонами из источников 2026 (Ferryhopper/GjirafaTravel/Wizz Air/EU EES/tirana-airport) + «checked June 2026» + «reconfirm», 16 фото CC/PD, qa=GO каждая, забанкованы по одной (commit+push). Категория плана `articles` не существует в enum → реально `transport`. Перед ними — слот 29.06 (how-to-get-around, airport transfers, Tirana–Saranda). Полный лог — `PROGRESS.md`.
- Календарь вычищен: будущие даты = только `○` к написанию (выполненного на будущих датах нет); план до 03.08; темп 3/будний день; маршруты по Вс.
- Сеть: доки выровнены (ядро 12/12, STRATEGY перенесён в docs/); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Темы из `KALENDAR.md` на ближайшие дни (транспорт A→B, где остановиться, релокация, города). SEO-актуализация по GSC ~06.07.

## Блокеры владельца
- GSC: подтвердить домен + sitemap + Request Indexing. Партнёрки (Travelpayouts: DiscoverCars/GetYourGuide/Booking + EKTA). Моат-решение (владелец не в стране). Дисплей-реклама (рек.: старт без).

## Не ломать (уже работает)
- Механика новостей: раздел хранит 10 дней, блок на главной — 2 дня; `/news` не слепой автопостинг (сбор → фильтр → превью → «ок» → публикация).
- Партнёрские ссылки только через `/go/{partner}?c={slug}` (`rel="sponsored nofollow noopener"`); ID в `src/data` публичны, не секреты.
- `partners.json` + enum-схемы коллекций (`content.config.ts`) менять только осознанно; внутр. ссылки = `/{category}/{slug}/` со слешем.
- hero-ротация + og/фавикон (офиц. двуглавый орёл); крутилка витрины (`showcasePicks` в `HomePage.astro`).

## Команды
- `npm run qa` — все гейты (check/build/test/test:links/lint); должны быть зелёными перед коммитом.
- `npm run new -- <тип> <slug> --title "…"` — скелет контента (одна en-версия, en-only).
- Скиллы: `/work` (утренний дирижёр), `/news` (дайджест), `/add-content` (конвейер статьи), `/full-audit` (многоагентный аудит).
- Перед push: `git pull --rebase origin main` (авто-джоб новостей пушит первым).
