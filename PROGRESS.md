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
| R3 Контент | 🟡 | 5 статей (cover-only) + столица Тирана (18 фото, Нед.1) + город Саранда (14 фото, Нед.2) + город Берат (12 фото, Нед.3) + город Гирокастра (13 фото, Нед.6) + МАРШРУТ Albania Road Trip (6 остановок, 10 фото, Нед.3) + статья «Is Albania Safe to Visit in 2026?» (planning, 6 фото, Нед.1/P0-доверие) + достопримечательность «Butrint National Park» (attractions, 6 фото) + достопримечательность «Albanian Riviera» (attractions, 8 фото) + достопримечательность «Ksamil» (attractions, 6 фото) + статья «Where to Stay in Albania» (planning, хаб where-to-stay, 8 фото, Нед.2) + **раздел «Еда» `/food/` — 3 ресторана Тираны** (Oda/Mullixhiu/Komiteti, коллекция `restaurants`); контент-план идёт |
| R4 Запуск | 🟡 | домен/GA4/sitemap ✅; GSC ⬜ |
| R5+ Рост | ⬜ | — |

**Технический каркас:** Этап 1 закрыт — `npm run qa` → GO, грузинских хвостов 0, доки синхронны.
Бэклог фиксов — [ROADMAP-FIX.md](ROADMAP-FIX.md), аудит — [AUDIT-2026-06-22.md](AUDIT-2026-06-22.md).

## Аудит-фиксы (2026-06-23, сквозной адверсариальный аудит сети)
- **YMYL-дисклеймеры:** в `albania-visa` (planning/виза) и `digital-nomad-visa` (relocation/налоги/ВНЖ) добавлен видимый blockquote-дисклеймер сразу после лид-абзаца («general information, not legal/tax/immigration advice — verify with the official source»). Покрывает требование видимого YMYL-дисклеймера на странице статьи (раньше он был только на хабах Relocation/Insurance).
- **Достоверность:** дата украинской схемы смягчена («currently reported as until 30 March 2027»); `albanian-riviera` — SH8 «rebuilt in 2009» → «in the late 2000s» (точная дата без источника); `gjirokaster-albania-guide` — publishedAt/updatedAt 2026-07-31 → 2026-06-23 (была будущая дата). Гейты build/check/test/links/lint — зелёные.

## Лог (новые записи сверху)
### 2026-06-28 — PUBLISH: «Where to Stay in Albania» (planning, хаб where-to-stay, Нед.2 Пн 29.06)
- **Статья опубликована** (`src/content/articles/en/where-to-stay-in-albania.md`, `draft:false`): head-term `where to stay in albania`, URL `/planning/where-to-stay-in-albania/`. ~1560 слов живого текста: лид = прямой ответ (Тирана/Ривьера/инленд), затем H2 по районам — Tirana, Saranda, Ksamil, Vlora/Dhermi, Berat (+Gjirokaster), Durres — «где жить и кому подходит» + тип жилья (guesthouse/apartment/hotel). Без FAQ, без выдуманных цен (только диапазоны-ориентиры + «check current rates»; конкретные отели/цены не указаны), бронь через `/go/trip-hotels`.
- **Фото — 8** (CC/PD, Wikimedia, webp ≤200КБ, автор+лицензия+sourceUrl на Commons): cover Vlora Lungomare (Peter Chovanec, CC BY 2.0); инлайн Tirana (BBB2021), Saranda hillside (Wilrooij), Ksamil boardwalk (Qmccart), Vlora sunset/Sazan (Redon Skikuli), Berat thousand windows (Julianruizp), Durres promenade (GentiBehramaj) — CC BY-SA 4.0; gallery Saranda bay (Fati.Allko, CC0). Лицензии сверены по Commons API.
- **Перелинк — 7 внутр. ссылок** (формат `/{category}/{slug}/`, EN-only): → things-to-do-in-tirana, saranda-albania-guide, ksamil-albania-guide, albanian-riviera, berat-albania-guide, gjirokaster-albania-guide, ← is-albania-expensive (×2). 2× AffiliateBox trip-hotels через `/go/`. title 45 / desc 138 символов.
- **Гейты:** `npm run qa` → **GO** (critical 0 · medium 0; минорные — только pre-existing decorative-alt на главной). check 0/0/0 · build (38 стр) · test (enums+parity+photos+interlinks) ✓ · test:links (2136) ✓ · lint ✓. KALENDAR Нед.2 Пн 29.06 отмечен `[x]`.

### 2026-06-28 — KALENDAR v2: новости 1×/нед (Сб), мерж тонких тем, коммерция в освобождённые слоты
- **Только календарь** (`KALENDAR.md`), src/ не тронут. Якорь 24.06.2026=среда без изменений; темп 5 статей/нед Пн–Пт.
- **Новости → 1 дайджест/нед, только Сб:** удалены все будние (Вт) новостные строки в Нед.2–17 (16 строк), 17 субботних `/news` приведены к единому формату с фильтром «критичные инфра/виза/транспорт 2026 → превью → ок; пусто = skip». Опубликованные новости коллекции (durres-folklore, vlora-airport) не тронуты.
- **2 тонкие темы → MERGE:** `albania-plug-adapter` → хаб Packing (в `albania-packing-list`); `albania-tap-water-safe` → хаб Safety (в `is-albania-safe`). Обе — тонкие инфо-микротемы без реальной 💰.
- **Освобождённые будние слоты → коммерция 💰** (из SEO-отчёта 2026-06-22, не выдумано): Нед.14 Вт 22.09 → `albania-travel-insurance` (💰 страховка, P0-безопасность); Нед.17 Пт 16.10 → `albania-1-year-visa-free-us-citizens` (💰 страховка/жильё long-stay, P0 US-хук).
- **Не тронуто:** опубликованные (✅/ОПУБЛИКОВАНО) строки и реальные даты; депри itinerary-by-bus / esim-remote-work (каннибализация/дубль, не «тонкая без 💰»).
- **Валидатор день↔дата:** 0 ошибок (100 дат-строк пересверены от якоря 24.06.2026=среда; обе новые коммерческие строки — будни). Нед.2–17 по 5 будних статей + 1 субботний дайджест.

### 2026-06-23 — Растровый фавикон 96/48 для Google (как у эталона)
- **Что:** сгенерил `public/icons/favicon-96.png` (96×96) и `public/icons/favicon-48.png` (48×48) из `public/favicon.svg` через sharp (одноразовый node-скрипт). В `src/layouts/BaseLayout.astro` `<head>` рядом с `favicon.svg` добавлены `<link rel="icon" sizes="96x96">` и `sizes="48x48"`; existing (svg + icon-192 + apple-touch) не тронуты. Закрывает «нет 48/96» — теперь набор как у эталона-Македонии (svg + 96 + 48).
- **Гейты:** build (36 стр) · check 0/0/0 · test ✓ · test:links (1868) ✓ · lint ✓ → GO.

### 2026-06-23 — Добор `albania-visa.md` до ≥1200 слов (YMYL, выверенный контент)
- **Что:** статья выросла 1010 → 1791 слов. Добавлены: сводная таблица по национальностям (EU/Schengen/UK/CA/AU/US/UA/RU — entry requirement + typical stay, с пометкой «не полный список» и «verify»); раздел «How the e-Visa works, step by step» (5 шагов: подача из-за рубежа на e-visa.al, документы, окно 90 дней, оплата+рассмотрение «working days → few weeks» БЕЗ конкретных сборов/дней, выдача по email); раздел «Crossing the border: land, sea and air» (Kakavia/Греция, Hani i Hotit/Черногория, Morina/Косово, Qafa e Thanës/С.Македония; паромы Bari/Ancona/Brindisi → Durrës/Vlorë). `sources` += `e-visa.al`, `en.wikipedia.org`.
- **YMYL сохранён:** blockquote-дисклеймер после лида НЕ тронут; конкретные сборы/штрафы/сроки не выдуманы — везде хедж + офиц. источники (punetejashtme.gov.al, travel.state.gov, e-visa.al).
- **Гейты:** build (36 стр, 0/0) · check 0/0/0 · test ✓ · test:links (1796) ✓ · lint ✓ → GO.

### 2026-06-23 — Добор `best-time-to-visit.md` до ≥1200 слов (выверенный контент)
- **Что:** статья выросла 751 → 1654 слов. Добавлены разделы: «Komani ferry logistics and the snow line» (тайминги парома 09:00/13:00 с komaniferry.com + хедж; снеговая линия Qafa e Valbonës — поздний май/нач. июня, варьируется по годам, совет писать в гестхаусы); «Coast versus mountains: two calendars, side by side» (помесячное наложение побережье↔горы — темпы/толпы/что открыто); «Festivals and seasonal events» (Gjirokastër Folklore Festival — многолетний цикл; июль–август события — всё хеджировано, даты «verify»); «Why the shoulder seasons win» (май + сентябрь–октябрь с конкретикой). Структура/фото не тронуты. `sources` += `en.wikipedia.org`, `komaniferry.com`.
- **Факты:** только из источников (komaniferry.com тайминги; Wikipedia Visa policy/Komani; темпы/цены — диапазоны/хедж). Не выдумано.
- **Гейты:** build (36 стр, 0/0) · check 0/0/0 · test ✓ · test:links (1796) ✓ · lint ✓ → GO.

### 2026-06-23 — SEO-гигиена: rehype-external-links (rel на все внешние ссылки тела)
- **Что:** подключён `rehype-external-links` в `astro.config.mjs` — блок `markdown.rehypePlugins: [[rehypeExternalLinks, { rel: ['nofollow','noopener','noreferrer'] }]]` (без `target` — внешние открываются в той же вкладке). Все внешние ссылки в теле .md теперь получают `rel="nofollow noopener noreferrer"` на этапе сборки.
- **Зачем:** не передаём вес/референсный сигнал чужим доменам и не утекаем referrer — стандартная SEO-гигиена для outbound-ссылок в контенте.
- **Не задеты:** внутренние относительные ссылки (`/attractions/` и т.п.) и партнёрские `/go/`-ссылки (рендерятся компонентом как относительные с собственным `rel="sponsored nofollow noopener"`) — rehype их не трогает.
- **Проверка в `dist/`:** `planning/albania-visa/index.html` — внешние `punetejashtme.gov.al`/`al.usembassy.gov` получили `rel="nofollow noopener noreferrer"`; внешних `<a>` без rel — 0; внутренние `/attractions/`, `/cities/` — без добавленного rel.
- **Гейты:** build (36 стр, 0/0) · check 0/0/0 · test [enums/parity/photos/interlinks] ✓ · test:links (1796 ссылок) ✓ · lint ✓ — **GO**. `rehype-external-links` добавлен в `dependencies`. Закоммичено + запушено в `main`.

### 2026-06-23 — Аудит-фикс: устранены 4 дубля ключевых фото + нормализация имён авторов
- **Проблема (сквозной фото-аудит):** один и тот же файл (идентичный MD5) использовался как КЛЮЧЕВОЙ кадр (обложка/инлайн-figure) в разных статьях — нарушение «каждое фото уникально на материал». Атрибуция везде была корректной; проблема — только в дублировании байт-идентичных файлов.
- **Заменены 5 файлов на РАЗНЫЕ легальные CC-кадры** (Wikimedia Commons, отбор глазами, webp ≤200КБ, реальный автор+лицензия+ссылка на Commons в credit):
  1. `albania-road-trip-itinerary/cover.webp` (был дубль обложки Ривьеры, Pasztilla) → **Sharon Hahn Darlin / CC BY 2.0** (Palasa & Nazar beaches с спуска Ллогары, 1280×560).
  2. `albania-visa/cover.webp` (был дубль обложки Тираны, Albnext) → **Arianit / CC BY-SA 4.0** (терминал аэропорта Тираны «Нёнё Тереза», 1280×720) — тематичнее для статьи о визах/въезде.
  3. `albanian-riviera/ksamil.webp` (был 1 из 3 дублей DieliAlla) → **czernik.jerzy / CC BY 3.0** (чистая бирюзовая вода Ксамиля, 1280×853).
  4. `albania-road-trip-itinerary/stop-ksamil.webp` (был 2 из 3 дублей DieliAlla) → **Q.marjola / CC BY-SA 3.0** (островки Ксамиля на закате, 1280×960). Обновлён и credit в `stops[].photo`.
  5. `vlora-airport-closed-summer-2026/g1.webp` (был дубль Ллогары, Pasztilla) → **Carole Raddato / CC BY-SA 2.0** (прибрежная дорога Ривьеры у Дхерми, 1280×560).
  Оставлены оригиналами по плану: `saranda-albania-guide/ksamil-beach.webp` (DieliAlla, профильный гайд) и `albania-road-trip-itinerary/llogara-panorama.webp` (Pasztilla, маршрут).
- **Нормализация имён авторов** (сверено по профилям/файлам Commons): `things-to-do-in-tirana.md` «albinfo» → **«Albinfo»** (×2: gallery + figure); `saranda-albania-guide.md` «Christoph Strassler» → **«Christoph Strässler»** (диакритика, как уже было в `berat-albania-guide.md` и как в Commons-Artist). `is-albania-safe.md` «Albinfo» уже корректно.
- **MD5-подтверждение уникальности:** пересчитаны все затронутые ключевые кадры — ни одна пара больше не совпадает; обложки road-trip/visa перегенерированы `build:covers` (-640/-960 + манифест).
- **Известный остаток (вне scope, заведён follow-up):** `is-albania-safe/g3.webp` (gallery, не ключевой кадр) байт-идентичен `saranda/ksamil-beach.webp` (тот же DieliAlla-файл) — отмечен отдельной задачей на замену.
- **Гейты:** build (36 страниц, 0/0) · check 0/0/0 · test [enums/parity/photos/interlinks] ✓ · test:links (1796 ссылок) ✓ · lint ✓ — **GO**. Закоммичено + запушено в `main`.

### 2026-06-23 — Контент: опубликована статья-город «Gjirokaster, Albania: The Stone City Guide» (cities)
- **Опубликована четвёртая статья категории `cities`** (одноязычная en, `cities/gjirokaster-albania-guide`, URL `/cities/gjirokaster-albania-guide/`): EN ~1700 слов прозы, лид = прямой ответ (Гирокастра — UNESCO «каменный город»: серые сланцевые крыши османских домов под огромным замком; родина Кадарэ и Ходжи). Разделы: что посмотреть (замок-крепость + Музей оружия/армамента + американский самолёт-реликт Холодной войны; долина Дрино; Cold War tunnel-бункер; Старый базар Pazari i Vjetër; дома-башни/Zekate/Skënduli/этнографический; каменные крыши + писательский город Кадарэ/Ходжа) → где жить → где поесть (кухня юга: qifqi, oshaf, ягнёнок) → дейтрипы (Голубой глаз по дороге на Саранду, Антигонея ~14 км осн. ~296 BC Пирром Эпирским) → как добраться (таблица Саранда ~1.5ч/Тирана ~3.5–4ч/Берат) → практика. Без FAQ. Валюта ALL.
- **Факты — только проверяемые** (правило 4): UNESCO с 2005 (османский торговый город), один из крупнейших замков Албании, Музей оружия в замке + американский самолёт-реликт (выдавался режимом за сбитый шпионский), замок служил тюрьмой, родина Кадарэ (*Chronicle in Stone*) и Ходжи, qifqi (рис+яйцо) — местное блюдо Гирокастры, Антигонея осн. ~296 BC Пирром в честь жены Антигоны, ~120 км/~1.5ч до Саранды (заезд на Голубой глаз). Цена/часы билета замка НЕ выдуманы — `<!-- TODO -->` + «check current rate»; Cold War tunnel/туры — «ask locally». Источники: en.wikipedia.org / whc.unesco.org.
- **Фото: 13 уникальных** CC Wikimedia (webp ≤200КБ, каждое один раз, отобраны глазами через Commons API → `build-gallery`, реальные локации): cover (крепость на хребте над городом, Marcin Konsek CC BY-SA 4.0, 1280×720) + 8 инлайн-figure [cobbled lane Sharon Hahn Darlin CC BY 2.0 / терраса замка+часовая башня+флаги Marcin Konsek CC BY-SA 4.0 / галерея-оружейный зал Marcin Konsek CC BY-SA 4.0 / панорама долины Дрино Leeturtle CC BY-SA 4.0 / Старый базар Alessandro Giangiulio Flickr CC BY 2.0 / вид с дома-башни Perigrinator CC BY-SA 4.0 / каменная сланцевая крыша Wolfgang Sauber CC BY-SA 4.0 / ягнёнок Sharon Hahn Darlin CC BY 2.0] + 4 gallery [townscape Marmontel CC BY 2.0 / каменные крыши malenki CC BY-SA 3.0 / бастион David Stanley CC BY 2.0 / сумерки+лит. замок Wolfgang Sauber CC BY-SA 4.0]. Две вертикали ужаты sharp вручную <200КБ; `build:covers` прогнан (20 обложек в манифесте). Норма города ≥10 — выполнено 13.
- **Перелинковка:** ИЗ статьи (в теле) — хаб `/cities/` + Саранда `saranda-albania-guide` + Берат `berat-albania-guide` + маршрут `albania-road-trip-itinerary` + `car-rental/how-to-rent-a-car` + `planning/best-time-to-visit`. 2 AffiliateBox только отели/туры: `/go/trip-hotels?c=gjirokaster-albania-guide` (жильё) + `/go/trip-tours?c=gjirokaster-albania-guide` (туры Голубой глаз/каменный город).
- **Frontmatter:** `featuredOrder:5`, `hotelWidget:true`, `geo.coord [40.0758, 20.1389]`, `accessFrom.saranda` (120 км/~1.5ч) + `accessFrom.tirana` (~230 км/~3.5–4ч). title 42 зн / desc 145 зн. Built-page: canonical + hreflang en+x-default; schema Article + GeoCoordinates + BreadcrumbList.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`, после Берата): `{kind:'article',category:'cities',slug:'gjirokaster-albania-guide',kicker:'city',city:'Gjirokastër'}` → карточка с киккером «City» + пин-чип Gjirokastër.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [enums/parity/photos/interlinks] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто; 0 крит / 0 сред). Закоммичено + запушено в `main`.
- **Прим. по плану:** закрывает строку KALENDAR Нед.6 Пт 31.07 «Gjirokaster Travel Guide» (cities, ≥10 фото). Встречные ссылки на Гирокастру из Саранды/road-trip — добрать при их апдейте (сейчас односторонние из новой статьи).

### 2026-06-23 — Контент: опубликована статья-достопримечательность «Ksamil, Albania: Beaches, Islands & Where to Stay» (attractions)
- **Опубликована третья статья категории `attractions`** (одноязычная en, `attractions/ksamil-albania-guide`, URL `/attractions/ksamil-albania-guide/`): EN ~1700 слов, лид = прямой ответ (Ксамил — «албанские Мальдивы»: бирюзовые пляжи и островки на юге Ривьеры, ~17 км южнее Саранды по дороге на Бутринт, часть нацпарка Бутринт). Разделы: почему «албанские Мальдивы» (+ честная оговорка про застройку/толпы) → островки и как добраться (вплавь/каяк-сап-педалка/водное такси-лодка) → лучшие пляжи и бич-клубы (центральные/бухты/Пулёбардха, модель «лежак+зонт от бара») → когда ехать/толпы (sweet spot июнь/сентябрь, пик август; таблица сезонов; совет «по часам, а не только по календарю») → где остановиться (гестхаусы/апартаменты vs база в Саранде) → как добраться (таблица Саранда/Бутринт/Тирана) → совмещение с Бутринтом (~4 км) и Голубым глазом → стоит ли. Без FAQ. Валюта ALL.
- **Факты — только проверяемые** (правило 4): Ксамил — село южнее Саранды на дороге к Бутринту, часть нацпарка Бутринт, на Ривьере Юж. Албании; ~17 км до Саранды, ~4 км до Бутринта — сверены через Wikipedia (Ksamil). Цены лежаков/лодок/туров НЕ выдуманы — «check the rate on the day»/«agree the fare before you board» + 3× `<!-- TODO -->` на конкретные цены (лежаки, лодки, прокат). На островках нет инфраструктуры — указано.
- **Фото: 6 уникальных** CC/CC0 Wikimedia (webp ≤200КБ, каждое один раз, отобраны глазами через прямой Commons API → `build-gallery`, реальные локации Ксамила): cover (бирюзовые бухты+островки, Artur Malinowski CC BY 2.0, 1280×718) + 3 инлайн-figure [островки Artur Malinowski CC BY 2.0 / лодка на бирюзовой воде METOKARA CC BY-SA 3.0 / бич-клуб с лежаками METOKARA CC BY-SA 3.0] + 2 gallery [набережная-променад Pudelek/Marcin Szala CC BY-SA 3.0 / закат над бухтой AnisKoutsi CC BY-SA 4.0]. `build:covers` прогнан (19 обложек в манифесте).
- **Перелинковка:** ИЗ статьи (4 уник. цели в теле) — хаб `/attractions/` + Саранда `saranda-albania-guide` + Albanian Riviera `albanian-riviera` + Бутринт `butrint-national-park` (+ `car-rental/how-to-rent-a-car`). 2 AffiliateBox только отели/туры на лодке: `/go/trip-hotels?c=ksamil-albania-guide` (жильё) + `/go/trip-tours?c=ksamil-albania-guide` (лодочные туры).
- **Frontmatter:** `attractionType: resorts-springs`, `region: vlore`, `geo.coord [39.7672, 20.0033]`, `accessFrom.sarande` (17 км) + `accessFrom.tirana` (~290 км), `featuredOrder:3`. title 49 зн / desc 150 зн. Built-page: canonical + hreflang en+x-default; schema Article + TouristAttraction + GeoCoordinates + BreadcrumbList.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`, после Ривьеры): `{kind:'article',category:'attractions',slug:'ksamil-albania-guide',kicker:'sight'}` → карточка с киккером «Sight».
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [enums/parity/photos/interlinks] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто; 0 крит / 0 сред). Закоммичено + запушено в `main`.
- **Прим. по плану:** закрывает строку KALENDAR Нед.4 «Ksamil» (выполнено в категории `attractions`, URL `/attractions/ksamil-albania-guide/`). Встречные ссылки на Ksamil из Saranda/Riviera/Himara-сравнения добрать при их апдейте.

### 2026-06-23 — Контент: опубликована статья-достопримечательность «Albanian Riviera: Best Beaches & Towns» (attractions)
- **Опубликована вторая статья категории `attractions`** (одноязычная en, `attractions/albanian-riviera`, URL `/attractions/albanian-riviera/`): EN ~1800 слов, лид = прямой ответ (Албанская Ривьера — Ионическое побережье от Влёры до Саранды: бирюзовые пляжи, перевал Ллогара). Разделы: что это/география (Ионическое море, Керавнийские горы, дорога SH8) → лучшие пляжи и городки (Дхермы/Дримадес, Химара, Борш ~7 км, Ксамил, Гьипе, Порто-Палермо с замком) → перевал Ллогара (1027 м, нацпарк, смотровая) → как добраться/передвигаться (авто/перевал + таблица расстояний, фургоны, лодки) → когда ехать/сезон (конец мая–нач. октября, пик июль-август, sweet spot июнь/сентябрь) → где остановиться по зонам → практика. Без FAQ. Валюта ALL. Источники: Wikipedia / akzm.gov.al.
- **Факты — только проверяемые** (правило 4): высота Ллогары 1027 м и Керавнийские горы, дорога SH8 (рекон. 2009), Борш = самый длинный пляж Ионики (~7 км), Гьипе только пешком/на лодке, Порто-Палермо с замком Али-паши — сверены через Wikipedia (Llogara Pass / Albanian Riviera). Тоннель под Ллогарой дан осторожно «planned/under construction», без выдуманной даты открытия. Цены/часы не выдуманы (кэш/«arrive early»/«book ahead» — качественно).
- **Фото: 8 уникальных** CC/CC0 Wikimedia (webp ≤200КБ, отобраны глазами через `commons-candidates`→`build-gallery`, реальные локации Ривьеры): cover (панорама с Ллогары, Pasztilla/Attila Terbócs CC BY-SA 4.0, 16:9) + 6 инлайн-figure [Дхермы-пляж Sietske2 CC BY-SA 3.0 / Химара Albinfo CC BY-SA 4.0 / Борш Sharon Hahn Darlin CC BY 2.0 / Ксамил DieliAlla CC0 / Гьипе Pudelek CC BY-SA 3.0 / смотровая Ллогары Albinfo CC BY-SA 4.0] + 1 gallery [Порто-Палермо с замком Mario Gjashta CC BY-SA 2.0]. `build:covers` прогнан (18 обложек в манифесте).
- **Перелинковка:** 4 внутр. цели в теле — хаб `/attractions/` + Саранда `saranda-albania-guide` + маршрут `albania-road-trip-itinerary` + достопримечательность `butrint-national-park` (+ `car-rental/how-to-rent-a-car`). 2 AffiliateBox через `/go/` (только отели/аренда): `trip-hotels?c=albanian-riviera` (жильё) + `localrent?c=albanian-riviera` (аренда авто для прибрежной дороги).
- **Frontmatter:** `attractionType: mountains-nature`, `region: vlore`, `geo.coord [40.1497, 19.6022]`, `accessFrom.tirana`, `featuredOrder:1`. Built-page: canonical + hreflang en+x-default; schema Article + TouristAttraction + GeoCoordinates + BreadcrumbList.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`, после Бутринта): `{kind:'article',category:'attractions',slug:'albanian-riviera',kicker:'sight'}` → карточка с киккером «Sight».
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [enums/parity/photos/interlinks] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто; 0 крит / 0 сред). Закоммичено + запушено в `main`.
- **Прим. по плану:** статья выполнена по запросу владельца как **достопримечательность** (категория `attractions`, slug `albanian-riviera`, раздел `/attractions/`) — отличается от наброска KALENDAR Нед.4 (`albanian-riviera-guide`, routes/attractions). Это закрывает Ривьера-хаб; встречные ссылки на Ривьеру из Ksamil/Himara-сравнения добрать, когда выйдут (Нед.4/5).

### 2026-06-23 — Контент: опубликована статья-развлечение «Tirana Nightlife: Bars, Clubs & the Blloku Scene» (entertainment)
- **Опубликована первая статья категории `entertainment`** (одноязычная en, `entertainment/tirana-nightlife`, URL `/entertainment/tirana-nightlife/`): EN ~1360 слов, лид = прямой ответ (центр ночной жизни — район **Блоку**; бары/коктейли/клубы). `razvlType: nightlife`. Разделы: районы (Блоку / центр у Скандербега / набережная Lana + Пирамида) → типы заведений (коктейль-бары, раки- и винные бары, клубы, рооф-топ-лаунж) → сезонность (Чт–Сб пик; лето-террасы; весна/осень — sweet spot) → безопасность и такси ночью → ориентир цен (БЕЗ выдуманных чисел — «check current prices at the venue», валюта ALL) → советы. Без FAQ.
- **Факты — только проверяемые** (правило 4): конкретика — реальные/проверяемые ориентиры (Блоку как бывший закрытый квартал элиты; улицы Pjetër Bogdani / Ismail Qemali; албанские сорта вина Kallmet, Shesh i Bardhë/i Zi; раки как местный тост). Выдуманные заведения/цены/часы НЕ вносились; цены даны качественно («cheap → mid → priciest tier»).
- **Фото: 5 уникальных** CC/CC0 Wikimedia (webp ≤200КБ, отобраны глазами через `commons-candidates`→`build-gallery`): cover (скайлайн на закате, Sani Dobroshi CC BY-SA 4.0, 16:9) + 3 инлайн-figure [подсвеченное здание у бульвара — Nushi eda CC BY-SA 4.0; Часовая башня + мечеть Этхем-бея ночью — Liridon CC0; пл. Скандербега в сумерках, пано — FloriSejdiKola CC BY-SA 4.0] + 1 gallery [мокрая отражающая пл. Скандербега ночью — Yastay CC BY 4.0]. `build:covers` прогнан (cover-640/960).
- **Перелинковка (двунаправленный кластер):** 4+ внутр. цели — `things-to-do-in-tirana` + хаб `/food/` + хаб `/entertainment/` + `best-time-to-visit` (+ `is-albania-safe` в теле). ВСТРЕЧНЫЕ ссылки на nightlife добавлены ИЗ `things-to-do-in-tirana` (буллет Блоку + read-also). 2 AffiliateBox через `/go/`: `trip-hotels?c=tirana-nightlife` (жильё в Блоку) + `trip-tours?c=tirana-nightlife`.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`, 2-м после Тираны): `{kind:'article',category:'entertainment',slug:'tirana-nightlife',kicker:'nightlife',city:'Tirana'}` → карточка с киккером «Nightlife» + пин-чип Tirana.
- **Прим. по хабу `/entertainment/`:** группировка карточек по городу идёт по суффиксу slug (`-tirana`/`-durres`/`-sarande`); slug `tirana-nightlife` (стабилен, не менять — правило 3) попадает в группу «Elsewhere» — косметика хаба, на URL/SEO/витрину не влияет.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [enums/parity/photos/interlinks] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто; 0 крит / 0 сред). Закоммичено + запушено в `main`.
- **Дальше:** при появлении новых статей `entertainment` (events/active/casino/places) хаб сам наполнится фильтром; nightlife по Дурресу/Саранде — отдельными slug с городским суффиксом, чтобы лечь в свою городскую группу.

### 2026-06-22 — Контент: наполнен раздел «Еда» `/food/` — 3 реальных ресторана Тираны (коллекция `restaurants`)
- **Первое наполнение директории «Где поесть»** (`/food/`, ранее коллекция `restaurants` была пуста). Созданы 3 карточки (одноязычные en, `restaurants/en/<slug>`), все город `Tirana`, разные по типу:
  - `oda` — **Oda**, традиционная албанская кухня (`cuisineKey: albanian`, `€€`), Rruga Luigj Gurakuqi 3, coord `[41.32878, 19.82252]`. Консенсус >4★: Tripadvisor 4.1 / Restaurant Guru 4.8 / abillion 4.64.
  - `mullixhiu` — **Mullixhiu**, современная албанская (`albanian`, `€€€`), Grand Park / Lasgush Poradeci Blvd, coord `[41.3134804, 19.8166599]`, шеф Bledar Kola. Источники: mullixhiu.al / World’s 50 Best Discovery / In Your Pocket / Restaurant Guru (Google 4.1, RG 4.8). `website` указан.
  - `komiteti-kafe-muzeum` — **Komiteti – Kafe Muzeum**, кафе/раки-бар (`bar`, `€€`), Rruga Fatmir Haxhiu 2 (за Пирамидой), coord `[41.3233016, 19.8225941]`. Tripadvisor 4.3 + гиды.
- **Факты — только проверяемые** (правило 4, §15): координаты из OpenStreetMap/Nominatim (Oda — сверка reverse-geocode на Luigj Gurakuqi), `mapUrl` — Google Maps search-ссылки. `ratingNote`/`review` (loved/watch) написаны СВОИМИ словами, чужие отзывы дословно НЕ копировались. Часы/цены/телефоны НЕ выдуманы — не указаны, в теле «confirm on arrival». `verifiedAt: 2026-06-22`, `verifiedNoDate: true` (метка «Проверено» без даты, §13).
- **Cover каждой — ЛЕГАЛЬНОЕ CC фото-иллюстрация** (webp ≤200КБ, `coverIllustrative: true` + честный кредит «illustrative»): Oda → fërgesë (Leeturtle / Wikimedia, CC BY-SA 4.0, 94КБ); Mullixhiu → tavë kosi (MirelaAndoni / Wikimedia, CC BY-SA 4.0, 45КБ); Komiteti → бутылки албанского раки (Klein Muçi / Wikimedia, CC BY 4.0, 69КБ). Отобраны глазами через `commons-candidates`→`build-gallery`; `build:covers` прогнан.
- **Перелинковка:** хаб `/food/` уже линкует на путеводитель Тираны (city-pages); из статьи `things-to-do-in-tirana` добавлена ссылка на `/food/` («where to eat in Albania» в разделе «Where to eat»). schema.org `/food/` → ItemList из 3× Restaurant + GeoCoordinates.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test [enums/parity 13 en/photos/interlinks] ✓ · test:links ✓ · lint ✓ · npm audit prod чисто; 0 крит / 0 сред). Закоммичено + запушено в `main`.
- **Дальше:** добрать места по Дурресу/Саранде (per-city страницы `/food/where-to-eat-durres`, `…-sarande` пока без карточек); при появлении статьи `food/what-to-try` хаб сам покажет ссылку «Что попробовать».

### 2026-06-22 — Контент: опубликована статья-достопримечательность «Butrint National Park» (attractions, P0-кластер юга)
- **Опубликована первая статья категории `attractions`** (одноязычная en, `attractions/butrint-national-park`): EN ~1700 слов, лид = прямой ответ (Бутринт — UNESCO-город у Саранды/Ксамила). Разделы: что это/UNESCO+Рамсар → история (греки→римляне→византийцы→венецианцы/османы) → что посмотреть (театр, баптистерий с мозаиками, Львиные ворота+Скейские, акрополь+музей, Венецианская башня/канал) → как добраться (таблица: Саранда ~18 км/бус/такси, Ксамил ~4 км, Тирана ~300 км) → билеты/часы (только «уточняйте» + источник, TODO на точную цену) → совмещение с Голубым глазом/Ксамилом → практика. Без FAQ. Факты — UNESCO WHC / Wikipedia / butrint.al; цены/часы не выдуманы.
- **Фото: 6 уникальных** CC Wikimedia (webp ≤200КБ, отобраны глазами через `commons-candidates`→`build-gallery`): cover (театр+крепость, Marcin Konsek CC BY-SA 4.0) + 4 инлайн-figure [театр — Radosław Botev CC BY 3.0; баптистерий-мозаики — Albinfo CC BY-SA 4.0; Львиные ворота — Piotrus CC BY-SA 3.0; Венецианская башня — Cosal CC BY-SA 4.0] + 1 gallery [вид с крепости на канал Vivari/Корфу — Calistemon CC BY-SA 4.0]. `build:covers` прогнан.
- **Frontmatter:** `attractionType: museums-landmarks`, `region: vlore`, `geo.coord`, `accessFrom.tirana`, `featuredOrder:2`. schema.org → Article + **TouristAttraction** + GeoCoordinates + BreadcrumbList.
- **Перелинковка (двунаправленный кластер):** 4 внутр. цели — хаб `/attractions/` + Саранда (`saranda-albania-guide`) + маршрут (`albania-road-trip-itinerary`) + аренда авто (`how-to-rent-a-car`). Встречные ссылки добавлены ИЗ Saranda guide и road-trip itinerary → на Бутринт. 2 AffiliateBox через `/go/`: `trip-tours` + `trip-transfers`.
- **Витрина:** добавлен пик в `showcasePicks` (`HomePage.astro`): `{kind:'article',category:'attractions',slug:'butrint-national-park',kicker:'sight'}`.
- **Гейты:** `npm run qa` → **GO ✅** (check 0/0/0 · build ✓ · test ✓ · test:links ✓ · lint ✓ · npm audit prod чисто). Закоммичено + запушено в `main`.

### 2026-06-22 — UI-фикс v2: крутилка витрины переведена на чистый CSS (ShowcaseRail)
- **Проблема:** прежняя JS-крутилка (`scrollLeft` + rAF, рантайм-клонирование) могла «не ехать» из-за кэша `/js/showcase-rail.js` или `prefers-reduced-motion`. Движение перенесено на CSS-анимацию в самом компоненте → деплоится со страницей, кэш JS больше ни на что не влияет.
- **Компонент (`ShowcaseRail.astro`)** теперь рендерит **2 копии** набора (`cells = [...clone:false, ...clone:true]`) — вторая копия `aria-hidden` (уже обрабатывается полем `clone` в разметке). В `<style>`: `.showcase__viewport` → `overflow: hidden` (было `overflow-x: auto`); `.showcase__track` → `animation: showcase-marquee var(--showcase-dur, 60s) linear infinite`; добавлены `@keyframes showcase-marquee { translateX(0) → translateX(-50%) }` (одна копия = 50% дорожки → бесшовно); пауза `.showcase:hover .showcase__track, .showcase__track:focus-within { animation-play-state: paused }`; в блок `prefers-reduced-motion` добавлено `.showcase__track { animation:none; transform:none }` + `.showcase__viewport { overflow-x:auto }`.
- **JS (`public/js/showcase-rail.js`)** заменён ПОЛНОСТЬЮ на минимальную версию: только выставляет `--showcase-dur` ∝ ширине набора (~40 px/с, мин. 20с) + тач-тап раскрывает поповер заведения. Всё движение/пауза — CSS. Даже закэшированный старый JS на `overflow:hidden` ничего не двигает.
- **Верификация `dist/_astro/index.*.css` (scoped-стили компонента, грузятся со страницей через `<link>`):** `.showcase__track` имеет `animation: showcase-marquee …`; `@keyframes showcase-marquee {0%→to translate(-50%)}` присутствует; `.showcase__viewport { overflow:hidden }`; пауза `animation-play-state:paused` на hover/focus-within. В `dist/index.html`: 18 ячеек `showcase__cell` = 9 уникальных + 9 клонов `aria-hidden="true"` (2 копии набора). Прим.: Astro выносит scoped-CSS в бандл `_astro/*.css`, а не инлайнит в `<style>` каждой страницы — штатное поведение; цель «движение не зависит от кэша JS» выполнена.
- **Гейты:** `build` ✓ (31 стр.) · `check` 0/0/0 · `npm test` ✓ (enums/parity 12 en/photos/interlinks) · `test:links` ✓ (1478 ссылок, 0 битых) · `lint` ✓. Закоммичено + запушено в `main`.

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

### 2026-06-25 — Hero/OG/HTTPS
- Проверены hero главной и ротация: албанская кросс-фейд ротация уже меняет кадры в открытой вкладке каждые ~7 секунд; дополнительных изменений в механике не потребовалось.
- Обновлены брендированный `og-default.jpg`, `og:image:secure_url` и HTTP→HTTPS 301 в Worker.
- Проверки: `npm run check`, `npm run build`, `npm test`, `npm run lint` — зелёные.
