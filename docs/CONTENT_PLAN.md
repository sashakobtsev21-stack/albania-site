> ⚠️ **СУПЕРСЕДЕД 2026-06-22.** Актуальный по-дневной контент-план — в `/KALENDAR.md` (3 месяца от 24.06.2026, построен по SEO-аудиту). Этот файл оставлен как тематический бэклог тем P1/P2 и справка по кластерам — НЕ редактировать как активный план (во избежание конфликта планов).

# CONTENT_PLAN.md — контент-план и трекер статей (Albania)

Рабочий план и трекер: какие кластеры/темы ведём, что в очереди, что опубликовано.
Правила написания — `CONTENT_GUIDE.md`; продукт/ниша — `SPEC.md` → `CLAUDE.md`; стратегия/приоритеты —
`STRATEGY.md`. Этот файл — **что писать, в каком порядке и под какой запрос**.

- **Статусы:** ✅ готово (опубликовано, QA=GO) · 🟡 в работе · ⬜ план (ещё нет).
- **EN-first (STRATEGY §2):** каждая тема = группа **en + ru + uk** с одинаковым slug; **en — ведущая**
  (ключи от EN-интента, а НЕ калька с русского), ru/uk — зеркала. URL: en на корне `/<category>/<slug>/`,
  ru → `/ru/…`, uk → `/uk/…`.
- **Состояние:** опубликовано **0** (сайт пустой, R3 не начат). Этот документ — стартовый план.
- Факты в темах сверены ресёрчем (июнь 2026, источники внизу). Конкретику (цены, точные сроки виз,
  налоговые ставки) НЕ зашивать в evergreen — см. «Сверять перед публикацией».

---

## 0. Стратегическое направление

- **Гео/язык:** первично **Tier-1/Запад через EN** (премиум-RPM), вторично СНГ через ru/uk (STRATEGY §2).
  Ключи и темы — от **EN-интента** (как ищет западный турист/номад), ru/uk адаптируются под Албанию.
- **Приоритет кластеров (STRATEGY §4 — релокация ПОДНЯТА):**
  **Планирование (виза/когда ехать) → MONEY (аренда/страховка/eSIM) → Релокация/Номады → Маршруты →
  Достопримечательности → Города → Еда → Развлечения.**
- **Моат (открытое решение STRATEGY §4):** «первое лицо/проверено на месте» — там, где опыт реально есть
  (сезонная база / стрингер), и НЕ выдумывать там, где его нет. До решения — упор на свежесть + структуру.
- **Анти-AIO:** усилие в транзакционное / сравнения / `visit`-данные (цена-часы) / опыт. Тонкие справочные
  достопримечательности не плодить — обогащать (цена/часы/как добраться/личная заметка).
- **Дифференциатор виз-кластера:** **US — до 1 года без визы** (подтверждено первоисточником travel.state.gov)
  — сильный EN-хук, которого нет у конкурентов.

> ⚠️ **Сверять перед публикацией (YMUL/часто меняется — CLAUDE правило 4):**
> 1. **Сезонные визовые схемы** (страны/даты — меняются ежегодно) → `punetejashtme.gov.al`.
> 2. **Налоговые ставки/пороги** (офиц. и третьи источники расходятся) → `tatime.gov.al` — давать ссылку, не цифру.
> 3. **Пороги номад-визы** (доход/страховка) → e-Albania / Погран-миграционная полиция.
> 4. **Аэропорт Влёра + ж/д Тирана–Дуррес–Ринас** — многократно переносились; не обещать, проверять к дате.
> 5. **90/180 для UK/CA/AU** — консенсус-источники, не первоисточник; быстро подтвердить на гос-advisory страны.

---

## 1. Кластеры и темы

### ⭐ 1.0 Планирование — TRAFFIC, верх воронки (приоритет №1) 🆕
Ищут ПЕРЕД поездкой; ведут трафик вниз (маршруты/города/аренда/страховка). Правило: каждая статья
ссылается вниз минимум на `/routes/`, `/cities/`, `/car-rental/`, `/insurance/`.

| Тема | EN-интент (ведущий запрос) | Тип | Факт-якорь (сверять!) | Status |
|---|---|---|---|---|
| Виза и въезд | `albania visa requirements` / `do i need a visa for albania` | TRAFFIC | US до 1 года; UK/EU/CA/AU 90/180; UA до 30.03.2027; RU — e-Visa (НЕ безвиз). Сезонные схемы менять ежегодно | ⬜ `albania-visa` |
| Когда ехать | `best time to visit albania` | TRAFFIC | Хук **May/June/September**; пляж Jun–Sep (Sep — лучший), Альпы mid-Jun–Sep | ⬜ `best-time-to-visit` |
| Бюджет поездки | `albania trip cost` / `is albania cheap` | TRAFFIC | дёшево; цены в € | ⬜ `trip-budget` |
| Деньги: валюта/карты | `albania currency` / `do they use euro in albania` | TRAFFIC | лек (ALL); € часто на побережье | ⬜ `money-currency` |
| Безопасность | `is albania safe` | TRAFFIC | 112 — европейский номер | ⬜ `is-albania-safe` |
| Как перемещаться | `getting around albania` | TRAFFIC | фургоны+автобусы; ж/д фактически нет; авто — практичный дефолт | ⬜ `getting-around` |

### 1.1 Аренда авто — MONEY 🔥 (приоритет 1 среди денег)
Опорная + город-спицы + тематические. Монетизация: `trip-carhire`/`localrent` через `/go/`.
Тезис: для Альп (Тет/Валбона) и разбросанных деревень Ривьеры **авто — практичный способ**.

| Тема | EN-интент | Slug (`/car-rental/…`) | Status |
|---|---|---|---|
| Опорная: как арендовать | `car rental in albania` | `how-to-rent-a-car` | ⬜ |
| Тирана (аэропорт TIA) | `car rental tirana airport` | `tirana-airport` | ⬜ |
| Саранда / Ривьера | `car rental saranda` | `sarande` | ⬜ |
| Дуррес | `car rental durres` | `durres` | ⬜ |
| Без депозита | `car rental albania no deposit` | `no-deposit` | ⬜ |
| Права / IDP | `do i need an international driving permit in albania` | `driving-permit` | ⬜ |
| Вождение в Албании | `driving in albania tips` | `driving-tips` | ⬜ |

### 1.2 Страховки — MONEY (recurring)
Тезис: страховка **рекомендуется, не обязательна** для безвизового въезда (но нужна для ВНЖ/долгого пребывания).
Монетизация: SafetyWing (номады, recurring), travel-страховки через `/go/`.

| Тема | EN-интент | Slug (`/insurance/…`) | Status |
|---|---|---|---|
| Нужна ли страховка | `do i need travel insurance for albania` | `do-you-need-insurance` | ⬜ |
| Как выбрать | `best travel insurance for albania` | `how-to-choose-insurance` | ⬜ |
| Для номадов/долго | `health insurance for nomads albania` | `nomad-health-insurance` | ⬜ |

### 1.3 eSIM / связь — MONEY
Монетизация: Airalo через `/go/`. eSIM работают; локальные Vodafone Albania / One Albania.

| Тема | EN-интент | Slug | Status |
|---|---|---|---|
| eSIM/SIM в Албании | `albania esim` / `sim card albania tourist` | `/planning/esim-sim` или `/relocation/sim` | ⬜ |

### 1.4 Релокация / Номады — RAISED-приоритет (`/relocation/`)
Спина: **Unique Permit (Leje Unike) → подача через e-Albania → биометрия в Погран-миграц. полиции**;
самозанятость через **QKB/e-Albania** — реально простая история. **Налоговые цифры НЕ зашивать** —
ссылка на `tatime.gov.al`. YMUL — только офиц. источники + видимая дата + «сверьте».

| Тема | EN-интент | Slug (`/relocation/…`) | Факт-якорь | Status |
|---|---|---|---|---|
| Стоимость жизни (Тирана) | `cost of living in tirana` | `cost-of-living-tirana` | дёшево; цены € | ⬜ |
| Digital nomad / Unique Permit | `albania digital nomad visa` | `digital-nomad-visa` | Leje Unike, Law 79/2021, e-Albania (пороги сверять) | ⬜ |
| ВНЖ / residence | `albania residence permit` | `residence-permit` | e-Albania → биометрия | ⬜ |
| Регистрация бизнеса / ИП | `register a business in albania` / `sole trader albania` | `register-business` | QKB, «Person Fizik» онлайн, NIPT (без ставок) | ⬜ |
| Налоги (обзор + ссылки) | `albania taxes for foreigners` | `taxes-overview` | **только ссылка tatime.gov.al**, ставки не зашивать | ⬜ |
| Банк / счёт | `open a bank account in albania` | `bank-account` | ⬜ |
| Долгосрочная аренда | `renting long term in albania` | `long-term-rental` | ⬜ |
| Медицина | `healthcare in albania for expats` | `healthcare` | ⬜ |
| /relocation/services/ | директория услуг (риелторы/клининг/юристы) | `services` (коллекция `services`) | ⬜ |

### 1.5 Маршруты — TRAFFIC (`/routes/`)
«Сшивают» города/достопримечательности → ведут на аренду авто (MONEY).

| Тема | EN-интент | Slug (`/routes/…`) | Факт-якорь | Status |
|---|---|---|---|---|
| Албанская Ривьера (роуд-трип) | `albanian riviera road trip` | `albanian-riviera` | Llogara→Dhërmi→Himarë→Gjipe→Ksamil | ⬜ |
| Албанские Альпы (Тет–Валбона) | `theth to valbona hike` | `theth-valbona` | трек mid-Jun–Sep; Komani ferry ~Apr–Nov | ⬜ |
| Большой тур по Албании | `albania itinerary 7 days` | `grand-tour-7-days` | Тирана→Берат→Гирокастра→Саранда | ⬜ |
| Тирана → Саранда | `tirana to saranda` | `tirana-to-sarande` | ⬜ |
| Юг: ЮНЕСКО (Берат+Гирокастра+Бутринт) | `berat gjirokaster butrint trip` | `unesco-south` | ⬜ |
| Озеро Коман + север | `lake koman ferry valbona` | `koman-valbona` | паром сезонный | ⬜ |

### 1.6 Достопримечательности — TRAFFIC (`/attractions/`)
ЮНЕСКО Албании (4 объекта): **Бутринт; ист. центры Берат и Гирокастра; район Охрид (Линь/Погра дец);
буковые леса**. Каждая — `geo`+`attractionType`+`region` (qark), `visit` (цена/часы — сверять).

| Тема | EN-интент | Slug (`/attractions/…`) | Status |
|---|---|---|---|
| Бутринт (ЮНЕСКО) | `butrint albania` | `butrint` | ⬜ |
| Berat (ЮНЕСКО, старый город) | `berat what to see` | *(см. Города `cities/berat`)* | ⬜ |
| Gjirokastër (ЮНЕСКО) | `gjirokaster castle` | *(см. Города)* | ⬜ |
| Blue Eye (Саранда) | `blue eye albania` | `blue-eye-sarande` *(дизамбиг. с Theth Blue Eye!)* | ⬜ |
| Blue Eye (Тет) | `theth blue eye` | `theth-blue-eye` | ⬜ |
| Llogara Pass | `llogara pass` | `llogara-pass` | ⬜ |
| Bunk'Art 1 & 2 (Тирана) | `bunkart tirana` | `bunkart` | ⬜ |
| Dajti (канатка) | `dajti cable car` | `dajti-ekspres` | ⬜ |
| Rozafa Castle (Шкодер) | `rozafa castle` | `rozafa` | ⬜ |
| Krujë (замок Скандербега) | `kruja castle bazaar` | `kruja` | ⬜ |
| Osumi Canyon | `osumi canyon` | `osumi-canyon` | ⬜ |
| Apollonia | `apollonia albania` | `apollonia` | ⬜ |
| Përmet + Bënjë (термы) | `benje thermal baths` | `benje-thermal` | ⬜ |
| Karavasta (пеликаны) | `karavasta lagoon pelicans` | `karavasta` | ⬜ |
| Амфитеатр Дурреса | `durres amphitheatre` | *(см. Города)* | ⬜ |

### 1.7 Города — TRAFFIC (`/cities/`)
В каждом: что посмотреть, где поесть, как добраться, где жить. Связь с `attractions`/`food`/`routes`.

| Город | EN-интент | Slug (`/cities/…`) | Status |
|---|---|---|---|
| Тирана | `what to do in tirana` | `tirana` *(Blloku, Skanderbeg Sq, Bunk'Art, Dajti)* | ⬜ |
| Саранда | `things to do in saranda` | `sarande` | ⬜ |
| Берат (ЮНЕСКО) | `berat travel guide` | `berat` | ⬜ |
| Гирокастра (ЮНЕСКО) | `gjirokaster travel guide` | `gjirokaster` | ⬜ |
| Шкодер | `shkoder albania` | `shkoder` *(Rozafa, ворота в Альпы)* | ⬜ |
| Дуррес | `durres albania` | `durres` | ⬜ |
| Влёра | `vlore albania` | `vlore` | ⬜ |
| Корча | `korce albania` | `korce` | ⬜ |
| Погра дец (озеро Охрид) | `pogradec lake ohrid` | `pogradec` | ⬜ |
| Химара / Дерми (Ривьера) | `himare albania` | `himare`, `dhermi` | ⬜ |
| Ксамиль | `ksamil beaches` | `ksamil` | ⬜ |

### 1.8 Еда — TRAFFIC + реклама (`/food/` = `restaurants/` + статьи)
Кухня: бюрек, таве коси, фергесе, морепродукты на побережье, кофе-культура, вино/раки.
Города-директории: **Тирана / Дуррес / Саранда** (`EDA_CITY_PAGES`). Метка «Проверено» обязательна (CONTENT_GUIDE §13).

| Тема | EN-интент | Где | Status |
|---|---|---|---|
| Что попробовать (кухня) | `albanian food what to try` | `/food/what-to-try` | ⬜ |
| Где поесть (Тирана/Дуррес/Саранда) | `where to eat in tirana` | `/food/where-to-eat-{city}` | ⬜ |
| Вино/раки Албании | `albanian wine` | отд. статья *(или внутри «что попробовать»)* | ⬜ |
| Карточки заведений | — | `restaurants/` | ⬜ |

### 1.9 Развлечения — TRAFFIC (`/entertainment/`)
| Тема | EN-интент | Slug | Status |
|---|---|---|---|
| Пляжи Ривьеры (Ксамиль/Гипе) | `best beaches in albania` | `riviera-beaches`, `gjipe-beach` | ⬜ |
| Ночная жизнь Тираны (Blloku) | `tirana nightlife` | `tirana-nightlife` | ⬜ |
| Термы (Бенье/Льиксха) | `thermal baths albania` | `thermal-baths` | ⬜ |
| Дайти (канатка/парк) | — | *(см. attractions)* | ⬜ |
| Казино | `casino albania` | `casino/*` | ⬜ |

---

## 2. Очередь (что писать первым — EN-first пилот)
EN-first пилот 4–6 статей под Tier-1-интент, верх воронки + денежная связка:
1. ⬜ **Виза/въезд** (`albania-visa`) — хук «US до 1 года», callout «сверь сезонные схемы / RU e-Visa».
2. ⬜ **Когда ехать** (`best-time-to-visit`) — хук «May/June/September».
3. ⬜ **Албанская Ривьера роуд-трип** (`/routes/albanian-riviera`) — связка на аренду авто.
4. ⬜ **Тирана** (`/cities/tirana`) — флагман-город, связка вниз.
5. ⬜ **Аренда авто опорная** (`/car-rental/how-to-rent-a-car`) — MONEY.
6. ⬜ **Стоимость жизни в Тиране** (`/relocation/cost-of-living-tirana`) — RAISED-кластер, Tier-1 номады.

После 2–4 недель в GSC — пересортировать очередь по реальному EN-спросу.

---

## 3. Правила ведения
1. **Приоритет кластеров** — как в §0 (Планирование → MONEY → Релокация → Маршруты → Достопримечательности → Города → Еда → Развлечения).
2. **EN-first:** ведущая en (от EN-интента), ru/uk — зеркала с тем же slug; пишем по `CONTENT_GUIDE.md`. Перед публикацией — `npm run qa` = **GO**, группа одним коммитом.
3. **Трафик → деньги:** каждая TRAFFIC-статья ссылается на MONEY (аренда/страховка), и наоборот. Партнёрские — только через `/go/` (CLAUDE правило 2), 1–3 AffiliateBox.
4. **Взаимные ссылки** после новой статьи (опорная и соседи ссылаются на неё).
5. **Без каннибализации:** один запрос-ядро = одна статья.
6. **Факты не выдумывать** (CLAUDE правило 4): цены/часы/сроки/налоги — из источника + дата + «сверьте»; YMUL — только офиц. источники (см. «Сверять перед публикацией» §0). Нет данных → TODO.
7. **Моат-опыт** — добавлять «первое лицо» только где реально есть (см. §0); до решения владельца — без выдуманного «я там был».

---

## 4. Подбор тем (EN-first)
- **EN (ведущий):** Google autocomplete + «People also ask» + Keyword Planner; запрос носителя, не калька с русского. Интент: транзакционный (rent/insurance/book) → MONEY; справочный (what to see/how to get) → TRAFFIC.
- **ru/uk (вторично):** [Wordstat](https://wordstat.yandex.ru) для частотности; адаптировать под Албанию (не переносить грузинские реалии).
- Длинный хвост (`car rental tirana airport`, `theth to valbona hike`) — ниже частота, выше интент, проще в топ.
- Тема идёт в работу только если есть, что написать своими словами с проверяемыми фактами (иначе «генерёнка», SPEC §15).

---

## Источники (ресёрч, июнь 2026)
Визы/въезд: `punetejashtme.gov.al`, travel.state.gov, al.usembassy.gov, Visa policy of Albania (Law 79/2021, DCM 858/2021), en.ata.gov.al (UA). · Релокация: e-albania.al, qkb.gov.al, tatime.gov.al, fragomen/citizenremote/deel. · Сезонность/транспорт: lonelyplanet, wander-lush, ferryhopper, tirana-airport.com, Vlora Airport (Wikipedia). · Достопримечательности: whc.unesco.org, List of WHS in Albania.
**Перед публикацией любой YMUL-темы — перепроверить первоисточник (см. §0).**
