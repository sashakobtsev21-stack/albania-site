/**
 * live-data.js — клиентский слой блока «Сейчас в Албании» (§8.4, Фаза 6).
 *
 * Дотягивает свежие погоду/море/курс поверх build-time снапшота. Принципы:
 *  - один fetch на загрузку (НЕ polling, §15/правило 8 — без фоновых таймеров);
 *  - кэш в localStorage на 30 мин → повторный заход не дёргает сеть;
 *  - любой сбой источника → значение не трогаем, остаётся снапшот из HTML;
 *  - источники те же, что в build (src/lib/liveSnapshot.ts) — держать синхронно.
 */
(() => {
  'use strict';
  const root = document.querySelector('[data-live]');
  if (!root) return;

  // Тирана / Дуррес / Саранда — те же координаты, что в src/lib/liveSnapshot.ts.
  const AIR_URL =
    'https://api.open-meteo.com/v1/forecast?latitude=41.3275,41.3231,39.8756&longitude=19.8187,19.4414,20.0050&current=temperature_2m';
  const SEA_URL =
    'https://marine-api.open-meteo.com/v1/marine?latitude=39.87&longitude=20.00&current=sea_surface_temperature';
  // Курс с базой USD: rates[X] = X за 1 USD; лек (ALL) — кросс-курсом.
  const FX_URL = 'https://open.er-api.com/v6/latest/USD';
  const CACHE_KEY = 'al-live-v1'; // префикс al- + версия: старый грузинский кэш игнорируется
  const TTL = 30 * 60 * 1000; // 30 минут

  const set = (key, val) => {
    if (val == null) return; // нет свежего значения → оставляем снапшот
    const el = root.querySelector('[data-live="' + key + '"]');
    if (el) el.textContent = val;
  };
  const fmtT = (n) => (typeof n === 'number' ? Math.round(n) + '°' : null);
  const fmtFx = (n) => (typeof n === 'number' ? n.toFixed(2) + ' L' : null);

  function render(d) {
    if (!d) return;
    set('air-tirana', fmtT(d.air && d.air.tirana));
    set('air-durres', fmtT(d.air && d.air.durres));
    set('air-sarande', fmtT(d.air && d.air.sarande));
    set('sea-sarande', fmtT(d.sea));
    set('fx-usd', fmtFx(d.fx && d.fx.usd));
    set('fx-eur', fmtFx(d.fx && d.fx.eur));
    set('fx-rub', fmtFx(d.fx && d.fx.rub));
    set('fx-uah', fmtFx(d.fx && d.fx.uah));
    const u = root.querySelector('[data-live="updated"]');
    if (u) {
      try {
        u.textContent = new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date());
      } catch {
        /* оставляем build-time отметку */
      }
    }
  }

  async function jget(url) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 6000);
      const res = await fetch(url, { signal: ctl.signal });
      clearTimeout(timer);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  // Свежий кэш → рисуем из него и не трогаем сеть.
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      if (c && c.t && Date.now() - c.t < TTL && c.d) {
        render(c.d);
        return;
      }
    }
  } catch {
    /* localStorage недоступен — просто идём в сеть */
  }

  const runFetch = async () => {
    const [air, sea, fx] = await Promise.all([jget(AIR_URL), jget(SEA_URL), jget(FX_URL)]);
    const temp = (x) =>
      x && x.current && typeof x.current.temperature_2m === 'number'
        ? x.current.temperature_2m
        : null;
    const airArr = Array.isArray(air) ? air : [];
    // open.er-api.com: rates[X] = X за 1 USD; лек за единицу = ALL/X × quantity.
    const rates = fx && fx.rates ? fx.rates : null;
    const lekPer = (code, qty) => {
      const all = rates && typeof rates.ALL === 'number' ? rates.ALL : null;
      const cur = rates && typeof rates[code] === 'number' ? rates[code] : null;
      if (all == null || cur == null || cur === 0) return null;
      return (all / cur) * qty;
    };
    const d = {
      air: { tirana: temp(airArr[0]), durres: temp(airArr[1]), sarande: temp(airArr[2]) },
      sea:
        sea && sea.current && typeof sea.current.sea_surface_temperature === 'number'
          ? sea.current.sea_surface_temperature
          : null,
      fx: {
        usd: lekPer('USD', 1),
        eur: lekPer('EUR', 1),
        rub: lekPer('RUB', 100),
        uah: lekPer('UAH', 10),
      },
    };
    render(d);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d }));
    } catch {
      /* квота/приватный режим — не критично */
    }
  };
  // Сеть — вне критического пути: дёргаем 3 источника в idle, чтобы не конкурировать
  // с отрисовкой/LCP (аудит P2-2). Снапшот из HTML виден сразу; это лишь догрузка.
  if ('requestIdleCallback' in window) requestIdleCallback(() => runFetch(), { timeout: 3000 });
  else setTimeout(runFetch, 1200);
})();
