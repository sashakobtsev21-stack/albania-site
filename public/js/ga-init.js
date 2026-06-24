/*
 * Инициализация Google Analytics 4 (§17, правило 8 — ЕДИНСТВЕННАЯ аналитика).
 * Consent Mode v2: по умолчанию analytics_storage='denied', баннер поднимает
 * consent до 'granted'. Внешний файл со 'self' (script-src 'self', §18).
 */
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
});
try {
  if (localStorage.getItem('ag-consent') === 'granted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {
  /* localStorage unavailable — stay denied */
}
gtag('js', new Date());
gtag('config', 'G-9FTVJ00X41');
