# HANDOFF — Albania Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-29 · **Фаза:** R4 наполнение · **Статей:** ~22 (цель ~80) · **Сайт:** live (`albaniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `publish(albania): 3 transport articles (how-to-get-around, airport transfers, Tirana–Saranda) — 29.06 slot`

## Где остановились
- Контент: последние опубликованные — **3 транспорт-статьи на слот 29.06** (transport-routes [head], коммерция-first): «How to Get Around Albania» (`/transport/how-to-get-around-albania/`), «Tirana Airport to City Centre» (`/transport/tirana-airport-transfers/`), «Tirana to Saranda» (`/transport/tirana-to-saranda/`) — все факты диапазонами из источников 2026 (GjirafaTravel/офиц. airport/Koman ferry/Ferryhopper) + «check current», 16 фото CC/PD, fact-checker+content-editor пройдены, qa=GO. Перед ними — «Albania Travel Insurance Guide» и «Where to Stay in Albania». Полный лог — `PROGRESS.md`.
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
