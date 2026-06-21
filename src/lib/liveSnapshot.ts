/**
 * Снапшот «живых» данных для главной (§8.4, Фаза 6): погода (Тирана/Дуррес/
 * Саранда), температура Ионического моря у Саранды и курс лека (USD/EUR/RUB/UAH).
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах (ru/uk).
 *
 * Источники (без ключей, CORS ok): open-meteo (погода/море), open.er-api.com
 * (ExchangeRate-API, курс лека). Цифры не выдумываем (CLAUDE правило 4): нет
 * данных — поле пустое.
 */

export interface LiveSnapshot {
  air: { tirana: number | null; durres: number | null; sarande: number | null };
  sea: number | null;
  /** Курс: лек за `quantity` единиц валюты (USD/EUR — за 1, RUB — за 100, UAH — за 10). */
  fx: { usd: number | null; eur: number | null; rub: number | null; uah: number | null };
}

// Координаты: Тирана 41.3275,19.8187 · Дуррес 41.3231,19.4414 · Саранда 39.8756,20.0050.
const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=41.3275,41.3231,39.8756&longitude=19.8187,19.4414,20.0050&current=temperature_2m';
// Море — Саранда (Ионическое, бирюза «Ривьеры»).
const SEA_URL =
  'https://marine-api.open-meteo.com/v1/marine?latitude=39.87&longitude=20.00&current=sea_surface_temperature';
// Курс с базой USD: rates[X] = X за 1 USD; лек (ALL) пересчитываем кросс-курсом.
const FX_URL = 'https://open.er-api.com/v6/latest/USD';

async function jget(url: string, ms = 6000): Promise<unknown> {
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), ms);
    const res = await fetch(url, { signal: ctl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const temp = (loc: unknown): number | null => {
  const c = (loc as { current?: { temperature_2m?: unknown } } | null)?.current?.temperature_2m;
  return typeof c === 'number' ? c : null;
};

let cached: Promise<LiveSnapshot> | null = null;

export function getLiveSnapshot(): Promise<LiveSnapshot> {
  if (!cached) cached = build();
  return cached;
}

async function build(): Promise<LiveSnapshot> {
  const [air, sea, fx] = await Promise.all([jget(AIR_URL), jget(SEA_URL), jget(FX_URL)]);

  const airArr = Array.isArray(air) ? air : [];
  const seaVal = (sea as { current?: { sea_surface_temperature?: unknown } } | null)?.current
    ?.sea_surface_temperature;

  // open.er-api.com: { rates: { ALL, EUR, RUB, UAH, USD=1, ... } } — все за 1 USD.
  // Лек за единицу валюты = (ALL за 1 USD) / (валюта за 1 USD) × quantity.
  const rates = (fx as { rates?: Record<string, number> } | null)?.rates ?? null;
  const lekPer = (code: string, qty: number): number | null => {
    const all = rates && typeof rates.ALL === 'number' ? rates.ALL : null;
    const cur = rates && typeof rates[code] === 'number' ? rates[code] : null;
    if (all == null || cur == null || cur === 0) return null;
    return (all / cur) * qty;
  };

  return {
    air: { tirana: temp(airArr[0]), durres: temp(airArr[1]), sarande: temp(airArr[2]) },
    sea: typeof seaVal === 'number' ? seaVal : null,
    fx: {
      usd: lekPer('USD', 1),
      eur: lekPer('EUR', 1),
      rub: lekPer('RUB', 100),
      uah: lekPer('UAH', 10),
    },
  };
}
