/*
 * Инициализация Google Analytics 4 (§17, правило 8 — ЕДИНСТВЕННАЯ аналитика).
 * Внешний файл со 'self' (script-src 'self', §18), как и все скрипты проекта:
 * без инлайна → не нужен sha256-хэш в CSP (и не надо пересчитывать его при смене
 * ID). Сам gtag.js грузится async-тегом из googletagmanager.com (script-src),
 * см. BaseLayout. Property: G-9FTVJ00X41 (Albania Guidebook).
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-9FTVJ00X41');
