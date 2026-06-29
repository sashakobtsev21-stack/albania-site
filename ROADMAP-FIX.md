# ROADMAP-FIX — приоритизированный список исправлений

Технический бэклог по итогам `AUDIT-2026-06-22.md`. Порядок = приоритет (сверху — важнее).
Контент-наполнение и SEO-стратегия — НЕ здесь (поздние этапы, см. `ROADMAP.md`).

## ✅ Закрыто на Этапе 1 / по `/full-audit` (2026-06-22): 15 пунктов
Свёрнуто (детали — в `AUDIT.md`): qa=GO (битые forward-ссылки → условный рендер); `addressCountry GE→AL`; удалён stackdump + gitignore; снято 15 мёртвых TODO-фото; `/go/` rel+?c= (гейт check-links) + убран инлайн safetywing; `offline.html` Georgia→Albania + noindex; тонкие/пустые хабы `noindex={!hasContent}`; «Фото:»→«Photo:»; зачищены грузинские хвосты (CSS `.eda→.food`, комментарии); twitter:image:alt / ga defer / Cache-Control / security-заголовки /go/; `/news` SKILL локализован; стандарты+дисциплина в CLAUDE/CONTENT_GUIDE; SPEC §7/§11/§25 + 11 EN-категорий; доки синхронизированы.

## 🟠 High — техническое (можно без владельца)
- [ ] **Адаптивные обложки (srcset) мертвы в проде:** `cover-variants.json={}`, `build:covers` не в `npm run build` → мобайл качает полноразмерные cover/hero (код-причина perf главной <90). Включить генерацию в пайплайн (закоммитить непустой манифест + прогон pre-commit, т.к. Cloudflare-сборка без sharp упадёт) ИЛИ добавить hero в генератор + `srcset/sizes`. Добавить в `qa.mjs` проверку «у каждого cover.src есть запись в манифесте».
- [ ] **Латентная коллизия маршрутов `food`/`cities`:** `[category]/[slug].astro` строит пути для категорий `food`/`cities` без whitelist → пересечётся с `food/[city].astro` и хабом `/cities/` при наполнении. Развести namespace ДО публикации food/cities-контента (URL не менять, правило 3): исключить эти категории из `[category]/[slug]` + завести явные маршруты (`cities/[slug]` через CityGuidePage). Покрыть тестом (check-ia).
- [x] **CI/деплой мимо гейтов:** `ci.yml` теперь прогоняет единый `npm run qa` (внутри check·build·test·links·lint + аудит dist/, GO/NO-GO, exit≠0 на критических); `daily-news-rebuild.yml` прогоняет `npm run check` + `npm test` ПЕРЕД пушем пустого коммита (не запускать прод-сборку Cloudflare на сломанном main). [алерт «>36ч без коммита» — отдельная задача, не сделано]

## 🟡 Medium — технические (можно без владельца)
- [ ] **Оптимизировать hero для perf главной (75–77 → 90+).** LCP — 3 кросс-фейд-кадра (+ связано с мёртвым srcset выше). Варианты: AVIF-варианты hero, `preload`/`srcset` первого кадра, или 2 кадра.
- [x] **Добор инлайн-фото до ≥5 на статью** (5 статей cover-only) — сделано 2026-06-30: albania-visa, best-time-to-visit, digital-nomad-visa, do-you-need-insurance, how-to-rent-a-car — каждой добавлено 4 инлайн-`<figure>` (cover+4=5) реальными CC/PD с Wikimedia (webp ≤200КБ, подписи + author/license/sourceUrl в `photoSources`). qa=GO, test:links=GO.
- [ ] **Объём 5 EN-статей < 1200 слов (751–975)** — дописать до нормы реальной фактурой, синхронно подтянуть ru/uk. Контентный этап.
- [ ] `[category]/[slug]` whitelist (если не делать полный namespace выше) — минимум исключить food/cities, чтобы не было дублей при наполнении.
- [ ] noindex+canonical: hreflang уже снят на noindex; рассмотреть исключение noindex-хабов из sitemap (как `/services/`).
- [ ] `yearInTitle:true` для visa/car-rental вместо хардкода года в title (протухает 1 января).
- [ ] AttractionsCatalog `.empty-block` → единый `EmptyHint` (унификация пустых состояний); SearchBox — `role=status`/`aria-live`.
- [x] **Добор инлайн-фото до ≥5 на статью** — закрыто 2026-06-30 (дубль строки выше): те же 5 статей доведены до cover+4 инлайн уникальными CC/PD-кадрами по теме с атрибуцией.

## 🔵 Low — косметика / гигиена
- [ ] Пометить декоративные `alt=""` (флаг в шапке, hero-кадры) как `role`/aria, чтобы убрать 79 ложных срабатываний QA-аудита (или скорректировать эвристику `qa.mjs`).
- [ ] `npm audit`: обновить dev-tooling (esbuild/др.) при удобном случае — 2 low (prod, dev-сервер) + 22 moderate (dev, не в прод-бандле). Не блокер.
- [ ] `MONTHS` уже EN-first (january…) — отметка: завершено.

## 📝 Контентные правки существующих статей (поздний/контентный этап)
- [ ] visa: факт «США — 365 дней, no residence permit at all» подан категорично — сверить на travel.state.gov / al.usembassy.gov, при необходимости смягчить (load-bearing differentiator; синхронно en/ru/uk).
- [ ] digital-nomad: анкор «e-Albania» ведёт на внутренний `/relocation/` — развести (внешний госпортал e-albania.al + отдельный внутренний анкор).
- [ ] car-rental: 2 одинаковых AffiliateBox (trip-carhire/localrent) — дифференцировать смыслом или оставить один.
- [ ] Усилить сорсинг money-смежных гайдов (how-to-rent 1 источник; best-time 2 блога) — ≥2 независимых на практический факт (§15).
- [ ] Транзакционный слой: на visa 0 AffiliateBox; добавить контекстный бокс по интенту (SafetyWing/eSIM) — каждая справочная = ≥1 бокс по интенту.

## 🔑 За владельцем (решения/аккаунты)
- [ ] **Маппинг партнёрок под Албанию** (`partners.json` гео уже Albania): какие программы реально работают, методы вывода средств из Албании, вернуть `ekta` на трекинг-ссылку с `sub_id`.
- [ ] **SafetyWing** (самый частый партнёр в контенте): подтвердить программу — Ambassador (личный реферал, без recurring/атрибуции) или Affiliate/RevShare. От этого — переписывать ли ссылку (subid+allowSubId) или зафиксировать downgrade ожиданий релокационного дохода в SPEC §16.
- [ ] **EKTA**: вступать в Travelpayouts (трекинг-ссылка) или пометить `disabled` — сейчас прямой URL, любой клик $0.
- [ ] **Контраст `--color-wine`** (CLAUDE правило 6 на sitewide-элементах): утвердить токен `--wine-text` (~4.7:1) + затемнение фона RatesBar/services-band. Затрагивает фирменный акцент → решение за дизайном.
- [ ] **Коллекция `cities`** в content.config: удалить (модель «город=статья cities») или оставить с явным комментарием «НЕ для городов-путеводителей» под будущие карточки-на-карте.
- [ ] **Google Search Console**: подтвердить домен `albaniaguidebook.com`, сдать `sitemap-index.xml`.

## ⛔ Границы (НЕ в этом бэклоге)
Массовая генерация статей/новостей, SEO-стратегия/ключи, контент-план по дням, редизайн —
поздние этапы (см. `ROADMAP.md` R3+ и отдельные чаты).
