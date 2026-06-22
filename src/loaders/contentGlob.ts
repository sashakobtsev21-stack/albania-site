import { glob } from 'astro/loaders';
import type { Loader, LoaderContext } from 'astro/loaders';

/**
 * Обёртка над astro/loaders `glob`, которая молча принимает пустую коллекцию.
 *
 * Зачем: на R1 коллекции `articles`/`routes`/`cities` пусты по дизайну
 * (контент не создаём, §11), а штатный glob-loader печатает WARN
 * «No files found matching ...». Перф-/CI-правила требуют сборку БЕЗ
 * предупреждений. Здесь мы временно подменяем метод `warn` у логгера на
 * время load(), глуша ровно это одно сообщение; все прочие предупреждения
 * и ошибки проходят как есть. Логгер — класс AstroIntegrationLogger, поэтому
 * патчим экземпляр на месте и восстанавливаем оригинал в finally.
 *
 * Когда появится первая пара статей (R3+), сообщение и так перестанет
 * возникать; обёртка остаётся безвредной.
 */
export function contentGlob(options: Parameters<typeof glob>[0]): Loader {
  // Сайт одноязычный (en). id строим из пути относительно base (entry,
  // включает префикс `en/…`), а не из data.slug — устойчиво и не зависит от
  // совпадений slug. Расширение отбрасываем.
  const base = glob({
    ...options,
    generateId: ({ entry }) => entry.replace(/\.[^/.]+$/, ''),
  });
  return {
    ...base,
    load: async (context: LoaderContext): Promise<void> => {
      const { logger } = context;
      const originalWarn = logger.warn.bind(logger);
      logger.warn = (message: string): void => {
        if (message.startsWith('No files found matching')) return;
        originalWarn(message);
      };
      try {
        await base.load(context);
      } finally {
        logger.warn = originalWarn;
      }
    },
  };
}
