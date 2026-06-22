# HANDOFF.md — снимок состояния

Снимок «где остановились» для следующей сессии. Роадмап — [ROADMAP.md](ROADMAP.md), бэклог
фиксов — [ROADMAP-FIX.md](ROADMAP-FIX.md), аудит — [AUDIT-2026-06-22.md](AUDIT-2026-06-22.md),
статус-лог — [PROGRESS.md](PROGRESS.md), правила — [CLAUDE.md](CLAUDE.md).

## Снимок (2026-06-22, контент — раздел «Еда» `/food/`: 3 ресторана Тираны)
- **Наполнена директория «Где поесть»** (`/food/`, коллекция `restaurants` была пуста): 3 карточки (одноязычные en, `restaurants/en/<slug>`), город `Tirana`, разные типы — **Oda** (`oda`, традиционная албанская, `€€`, Luigj Gurakuqi 3, `[41.32878, 19.82252]`), **Mullixhiu** (`mullixhiu`, современная албанская, `€€€`, Grand Park, `[41.3134804, 19.8166599]`, шеф Bledar Kola, `website`), **Komiteti – Kafe Muzeum** (`komiteti-kafe-muzeum`, кафе/раки-бар, `€€`, Fatmir Haxhiu 2 за Пирамидой, `[41.3233016, 19.8225941]`).
- **Только реальные места, факты проверяемые** (правило 4, §15): отбор по консенсусу >4★ из нескольких источников (Tripadvisor/Restaurant Guru/abillion/In Your Pocket/World’s 50 Best Discovery); координаты — OSM/Nominatim; `mapUrl` — Google Maps. `ratingNote`/`review` своими словами (чужие отзывы дословно НЕ копировались). Часы/цены/телефон НЕ выдуманы — не указаны. `verifiedAt: 2026-06-22`, `verifiedNoDate: true`.
- **Cover каждой — CC фото-иллюстрация** (`coverIllustrative: true`, честный «illustrative»-кредит, webp ≤200КБ): Oda → fërgesë (Leeturtle, CC BY-SA 4.0); Mullixhiu → tavë kosi (MirelaAndoni, CC BY-SA 4.0); Komiteti → бутылки раки (Klein Muçi, CC BY 4.0). `build:covers` прогнан.
- **Перелинковка:** из статьи `things-to-do-in-tirana` → ссылка на `/food/`; хаб `/food/` уже линкует на Тирану. schema `/food/` → ItemList 3× Restaurant. Built: `/food/`, `/food/where-to-eat-tirana/` показывают карточки под группой города «Tirana».
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [parity 13 en] ✓ · test:links ✓ · lint ✓ · audit prod чисто; 0 крит/0 сред). Закоммичено + запушено в `main`.
- **Дальше:** per-city `/food/where-to-eat-durres` и `…-sarande` пока без карточек — добрать места по Дурресу/Саранде; опц. статья `food/what-to-try` (хаб сам покажет ссылку «Что попробовать»); `instagram` заведений — спросить у владельца (§13).

## Снимок (2026-06-22, контент — достопримечательность «Butrint National Park»)
- **Опубликована первая статья категории `attractions`** (одноязычная en, `attractions/butrint-national-park`, URL `/attractions/butrint-national-park/`): EN ~1700 слов, лид = прямой ответ (Бутринт — UNESCO-город у Саранды/Ксамила). Структура: что это (UNESCO 1992 + Рамсар) → история греки→римляне→византийцы→венецианцы/османы → что посмотреть (театр, баптистерий с мозаиками, Львиные/Скейские ворота, акрополь+музей, Венецианская башня/канал Vivari) → как добраться (таблица Саранда/Ксамил/Тирана) → билеты/часы (только «уточняйте»+источник, TODO на точную цену — не выдумано) → совмещение с Голубым глазом/Ксамилом → практика. Без FAQ. Валюта ALL. Источники: UNESCO WHC / Wikipedia / butrint.al.
- **Фото: 6 уникальных** CC Wikimedia (webp ≤200КБ, каждое один раз): cover (театр+крепость, Marcin Konsek) + 4 инлайн (театр Radosław Botev / баптистерий-мозаики Albinfo / Львиные ворота Piotrus / Венецианская башня Cosal) + 1 gallery (канал Vivari/Корфу Calistemon). Отобраны глазами через `commons-candidates`→`build-gallery`; `build:covers` прогнан.
- **Frontmatter:** `attractionType: museums-landmarks`, `region: vlore`, `geo.coord [39.7456, 20.0203]`, `accessFrom.tirana`, `featuredOrder:2`. Built-page: canonical + hreflang en+x-default; schema Article + **TouristAttraction** + GeoCoordinates + BreadcrumbList.
- **Перелинковка (двунаправленный кластер):** ИЗ статьи — хаб `/attractions/` + Саранда + маршрут + аренда авто (4 цели). ВСТРЕЧНЫЕ ссылки добавлены в `saranda-albania-guide` и `albania-road-trip-itinerary` → на Бутринт. 2 AffiliateBox `/go/trip-tours?c=…` + `/go/trip-transfers?c=…`.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`, после Берата): `{kind:'article',category:'attractions',slug:'butrint-national-park',kicker:'sight'}`.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ 32 стр. · test ✓ · test:links ✓ · lint ✓ · audit prod чисто). Закоммичено + запушено в `main`.
- **Дальше:** при появлении статей Ksamil / Blue Eye / Riviera (KALENDAR Нед.4) добрать встречные ссылки на Бутринт; точную цену/часы билета (`visit`) внести, когда даст владелец/официальный источник (сейчас TODO).

## Снимок (2026-06-22, UI-фикс v2 — крутилка витрины на чистом CSS)
- **Витрина едет на CSS, а не на JS.** Движение перенесено в `@keyframes showcase-marquee` (translateX 0 → −50%) на `.showcase__track` в `ShowcaseRail.astro`; компонент рендерит **2 копии** набора (`cells = [...clone:false, ...clone:true]`, вторая `aria-hidden`) → одна копия = 50% дорожки, петля бесшовна. `.showcase__viewport` → `overflow: hidden`. Пауза при hover/focus — `animation-play-state: paused` (CSS, без JS). `prefers-reduced-motion` → `animation:none; transform:none` + viewport `overflow-x:auto`.
- **Почему так:** прежняя JS-крутилка (`scrollLeft`+rAF) могла «не ехать» из-за кэша `/js/showcase-rail.js`. Теперь анимация в scoped-CSS компонента (бандл `_astro/*.css`, грузится со страницей) — кэш JS ни на что не влияет. `public/js/showcase-rail.js` усечён до минимума: задаёт `--showcase-dur` ∝ ширине набора (~40 px/с) + тач-тап поповера.
- **Верификация:** `dist/_astro/index.*.css` — `.showcase__track{…animation:showcase-marquee…}`, `@keyframes showcase-marquee{0%{translate(0)}to{translate(-50%)}}`, `.showcase__viewport{overflow:hidden}`, пауза на hover/focus-within. `dist/index.html` — 18 `showcase__cell` = 9 уникальных + 9 клонов `aria-hidden="true"`.
- **Гейты:** `build` ✓ (31 стр.) · `check` 0/0/0 · `npm test` ✓ · `test:links` ✓ (1478 ссылок) · `lint` ✓. Закоммичено + запушено в `main`.
- **Дальше:** при добавлении карточек в `showcasePicks` ничего не нужно — скорость подстраивается под ширину набора через `--showcase-dur`; CSS-петля масштабируется автоматически.

## Снимок (2026-06-22, контент-план Нед.1 — P0-доверие «Is Albania Safe»)
- **Опубликована статья «Is Albania Safe to Visit in 2026?»** (одноязычная en, `planning/is-albania-safe`, KALENDAR Нед.1/Пт 26.06, P0-кластер «безопасность/доверие»): EN ~1500 слов, лид = прямой ответ (да, в целом безопасно — низкая преступность, дружелюбные люди, нюансы). Разделы: общая безопасность/преступность → соло-женщины → дороги/вождение (главный риск) → пляжи/море → деньги/мошенничество → ЧС/телефон 112/здоровье → страховка. Факты только из травел-адвайзери (US State Dept / UK FCDO / AU Smartraveller) + «уточняйте/сверяйтесь с актуальной официальной страницей»; без выдуманных цифр; без FAQ. Валюта — ALL.
- **Фото: 6 уникальных** CC/CC0 Wikimedia (cover Skanderbeg Square + 3 инлайн-figure [Tirana street / mountain road in rain / Tirana crossing] + 2 gallery [Ksamil beach / mountain road], webp ≤200КБ, отобраны глазами через `commons-candidates`→`build-gallery`). `build:covers` прогнан.
- **Перелинковка:** 6 внутр. ссылок — хаб `/planning/` + Тирана/Саранда/Берат (города) + маршрут `albania-road-trip-itinerary` + страховка `do-you-need-insurance`. 1 AffiliateBox `/go/safetywing?c=is-albania-safe` (страховка — естественная связка, `position: body-end`).
- **Витрина:** добавлена 9-м пиком в `showcasePicks` (`HomePage.astro`): `{kind:'article',category:'planning',slug:'is-albania-safe',kicker:'sight'}`.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [parity 12 en] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто). Закоммичено + запушено в `main`.
- **Дальше по KALENDAR Нед.1:** Вс 28.06 «Is Albania Expensive? Real 2026 Daily Costs» (planning/info-хаб). Перелинк → driving in albania safety (Нед.5) / → travel insurance (Нед.4) добрать встречными ссылками, когда выйдут.

## Снимок (2026-07-08, контент-план Нед.3 — МАРШРУТ Albania Road Trip)
- **Опубликован первый МАРШРУТ** (одноязычный en, коллекция `routes`, `routes/albania-road-trip-itinerary`, KALENDAR Нед.3/Ср 08.07 «10 Days in Albania: Ultimate Road Trip Itinerary»): EN ~1670 слов, 8-дневное кольцо **Тирана → Берат → Влёра/Ривьера (Llogara) → Саранда → Ксамил → Гирокастра → Тирана**, `days:8`, `distanceKm:620`, `budgetFrom:60 EUR`, `bestSeason` may/june/sep/oct. По дням: что смотреть, ночёвки, расстояния/время; таблица плеч; практика (аренда/сезон/дороги/деньги ALL/страховка). Без выдуманных цен.
- **Фото каждой остановки:** все 6 `stops[].photo` заполнены + cover + 3 gallery = **10 уникальных CC/CC0 Wikimedia** (webp ≤200КБ). RouteTimeline показывает миниатюру у каждого стопа; инлайн-figure у каждого дня.
- **Геометрия:** `build-route-geometry.mjs` прогнан → 52 точки в `src/data/route-geometry.json`. **Важно:** в скрипте исправлен `ROUTES_DIR` `…/routes/ru` → `…/routes/en` (хвост от удалённых ru/uk); без фикса OSRM-геометрия для маршрутов одноязычного сайта не пеклась бы — это нужно следующим маршрутам.
- **Перелинковка:** хаб `/routes/` + города-якоря Тирана/Берат/Саранда + аренда авто/best-time/страховка. 2 AffiliateBox `/go/` (trip-carhire/trip-hotels). TouristTrip-schema в `dist` присутствует.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ 30 стр. · test [parity 11 en] ✓ · test:links ✓ · lint ✓). Закоммичено + запушено в `main`.
- **Дальше по KALENDAR Нед.3:** Пт 10.07 Берат — уже опубликован; Вс 12.07 «Albania 1-Year Visa-Free for US Citizens» (info). Перелинк Берат/города ← road trip itinerary можно добрать встречными ссылками. Маршрут связывает все города-якоря — при выходе Ksamil/Riviera/Gjirokaster-городов добавить встречные ссылки на маршрут.

## Снимок (2026-07-10, UI-фикс — бесшовная крутилка витрины)
- **Витрина крутится непрерывно по кругу.** `public/js/showcase-rail.js` заменён на эталонную бесшовную реализацию: JS клонирует уникальный набор до ширины дорожки ≥2.5× вьюпорта и заворачивает петлю на ширину одного набора → не останавливается при малом числе карточек, без рывка; клоны `aria-hidden`/вне фокус-порядка. Пауза при hover/focus, drag/свайп, reduced-motion, клик-vs-drag, тач-поповер — сохранены.
- **Без статических клонов в разметке.** `ShowcaseRail.astro`: `const cells = items.map((it) => ({ ...it, clone: false }));` (раньше рендерил набор дважды). Клонированием теперь занимается только JS; поле `clone` всегда false, стили/разметка не тронуты.
- **Набор витрины — 8 уникальных карточек.** `showcasePicks` (`HomePage.astro`): 3 города (Тирана/Саранда/Берат, kicker `city`) + 5 статей с cover — `albania-visa`/`best-time-to-visit` (planning), `how-to-rent-a-car` (car-rental), `do-you-need-insurance` (insurance), `digital-nomad-visa` (relocation), все kicker `sight`. Дедуп по slug, категория из frontmatter. Хватает на полный вьюпорт без повторов.
- **Верификация `dist/index.html`:** в `showcase__track` 8 ячеек, 0 `data-clone`, 8 уникальных hrefs, нет двух одинаковых подряд (клоны добавляет JS в рантайме).
- **Гейты:** `build` ✓ (30 стр.) · `check` 0/0/0 · `npm test` ✓ · `test:links` ✓ (1412 ссылок) · `lint` ✓. Закоммичено + запушено в `main`.
- **Дальше:** при добавлении новых городов/статей — добавлять слаги в `showcasePicks` (валидные kicker-ключи: `city`/`route`/`sight`/`food`/`nightlife`); JS-крутилка масштабируется автоматически.

## Снимок (2026-07-10, контент-план Нед.3 — город Берат)
- **Опубликована статья-ГОРОД Берат** (одноязычная en, `cities/berat-albania-guide`, KALENDAR Нед.3/Пт 10.07): EN ~1620 слов, **12 уникальных фото** CC/CC0 Wikimedia (cover + 8 инлайн + 3 gallery, webp ≤200КБ, отобраны глазами). Структура города (Мангалем «тысяча окон» / замок Кала + Онуфри / Горица + Османский мост + Свинцовая мечеть / каньон Осуми + вино-ракия / жильё / как добраться / еда / практика), без FAQ. Факты из Wikipedia/UNESCO; цена/часы Онуфри — TODO+«уточняйте» (правило 4). 5 внутр. ссылок (хаб `/cities/` + Саранда/Тирана/аренда авто/best-time), 2 AffiliateBox `/go/`, `hotelWidget`, `accessFrom.tirana`, `geo`, `featuredOrder:4`.
- **Витрина:** Берат — третий пик в `showcasePicks` (`HomePage.astro`): `{kind:'article',category:'cities',slug:'berat-albania-guide',kicker:'city',city:'Berat'}`. Лента на главной — три города. `build:covers` прогнан.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ 29 стр. · test [parity 10 en] ✓ · test:links ✓ · lint ✓). Закоммичено + запушено в `main`.
- **Дальше по KALENDAR Нед.3:** Вс 12.07 «Albania 1-Year Visa-Free for US Citizens» (info). Перелинк Берат ← road trip itinerary / → day trips from Tirana добавить, когда выйдут (Нед.3 Ср / Нед.8). ROADMAP-FIX: добор фото при желании — текущих 12 достаточно (норма города ≥10 выполнена).

## Снимок (2026-06-22, UI: убран «Language» + витрина наполнена)
- **Меню без переключателя языка.** `Header.astro` — удалён блок `.nav__lang` (подпись `dict.lang.label` + `<LangSwitcher/>`) из мобильной выпадашки, мёртвый CSS и неиспользуемый импорт; `Footer.astro` — удалён `<LangSwitcher/>` и его импорт. `availableLangs` оставлен в обоих интерфейсах (совместимость с `BaseLayout`, не используется). В `dist/` нет `nav__lang`/`>Language<`/`lang-switch`.
- **Витрина главной наполнена.** `HomePage.astro` → `showcasePicks` теперь содержит 2 пика: `things-to-do-in-tirana` и `saranda-albania-guide` (`category:'cities'`, kicker `'city'`, city-чипы Tirana/Saranda; у обоих cover). На `dist/index.html` — секция `block--showcase` с `showcase-rail` и двумя карточками городов. Условие «пусто → скрыто» сохранено: при опустошении массива лента снова исчезнет.
- **Гейты:** `build` ✓ (28 стр.) · `check` 0/0/0 · `npm test` ✓ · `test:links` ✓ (1293 ссылки) · `lint` ✓. Закоммичено + запушено в `main`.
- **Дальше:** по мере публикации новых городов/маршрутов/мест — добавлять их слаги в `showcasePicks` (формат пика — в комментарии над массивом); при добавлении place-карточек (поповер адрес/часы/карта) использовать `place:true`.

## Снимок (2026-06-22, структурно: сайт стал одноязычным — только EN)
- **Сайт переведён на ОДИН язык — английский (en).** ru и uk удалены полностью: дерево `src/pages/ru/` + `src/pages/uk/`, словари `i18n/ru.ts`+`uk.ts`, контент `src/content/*/{ru,uk}` (реально были только 9+9 файлов в `articles/ru` и `articles/uk`), ru/uk-ветки в layout/компонентах. `LANGS=['en']`, `DEFAULT_LANG='en'`.
- **hreflang:** self `hreflang="en"` + `x-default` на тот же URL (других alternate нет). sitemap без i18n-locales. `LangSwitcher` — no-op заглушка.
- **`public/_redirects`:** `/ru/*` и `/uk/*` → 301 на корень (плюс прежний `/en/*`). Старые проиндексированные языковые URL переезжают на en.
- **`check-parity`** переписан под один язык (весь контент обязан быть в `/en/`). **`new-content.mjs`** генерит только en.
- **Сборка:** 28 страниц, все на корне (нет `/ru/`, `/uk/`); в sitemap/HTML нет ru/uk-hreflang и ссылок на удалённые языки.
- **Гейты:** `check` 0/0/0 · `build` ✓ (28 стр., без предупреждений) · `npm test` ✓ · `test:links` ✓ (1289 ссылок, 0 битых) · `lint` ✓. Закоммичено + запушено в `main`.
- **Дальше:** весь новый контент (статьи/новости/`/content`/`/news`) — только на английском. Доки `CLAUDE.md`/`CONTENT_GUIDE.md`/`SPEC.md` могут содержать устаревшие упоминания ru/uk ниже шапок — приоритет у шапок-баннеров «только en».

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
