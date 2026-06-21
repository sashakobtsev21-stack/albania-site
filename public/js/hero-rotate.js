/*
 * Ротация hero-фото на главной (§8.4) — внешний vanilla-модуль со 'self' (§18).
 * Кросс-фейд нескольких кадров Албании по очереди + смена кредита под активным фото.
 * Принципы: уважает prefers-reduced-motion (не крутит), пауза при скрытой вкладке
 * (без фоновых таймеров вхолостую). Деградирует без JS — первый кадр уже .is-active
 * (виден из HTML), ротации просто нет. Анимация — только opacity (CSS), 0 CLS.
 * Первый кадр eager (LCP §15), остальные lazy → вес догрузки вне критического пути.
 */
const root = document.querySelector('[data-hero-rotate]');
if (root) {
  const slides = [...root.querySelectorAll('.hero__bg')];
  const credit = root.querySelector('[data-hero-credit]');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (slides.length > 1 && !reduce) {
    const INTERVAL = 7000;
    let i = 0;
    let timer = null;

    const show = (n) => {
      slides[i].classList.remove('is-active');
      i = n;
      slides[i].classList.add('is-active');
      if (credit) {
        const text = slides[i].getAttribute('data-credit');
        const href = slides[i].getAttribute('data-credit-href');
        if (text) credit.textContent = text;
        if (href) credit.setAttribute('href', href);
      }
    };
    const tick = () => show((i + 1) % slides.length);
    const start = () => {
      if (!timer) timer = setInterval(tick, INTERVAL);
    };
    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    start();
  }
}
