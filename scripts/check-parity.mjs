/*
 * check-parity.mjs — SEO-инварианты контента одноязычного сайта (SPEC §11/§14).
 * Сайт только на английском (en). Без зависимостей: лёгкий парс frontmatter.
 * Ловит регрессии, которые astro check не видит: контент вне папки /en/
 * (остатки ru/uk), рассинхрон lang↔папка, title > 60 зн.
 *
 * Запуск: node scripts/check-parity.mjs  (exit 1 при нарушениях).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const COLLECTIONS = ['articles', 'routes', 'restaurants', 'services'];
const ROOT = 'src/content';
const TITLE_MAX = 60;

const errors = [];

/** Все .md файлы коллекции с разбивкой по языку и имени файла. */
function walk(dir, acc) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md') || name.endsWith('.mdx')) acc.push(p);
  }
  return acc;
}

/** Минимальный парс верхнего frontmatter-блока в плоскую карту нужных ключей. */
function parseFront(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = m[1];
  const pick = (key) => {
    const r = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (!r) return undefined;
    return r[1].trim().replace(/^['"]|['"]$/g, '');
  };
  return {
    lang: pick('lang'),
    slug: pick('slug'),
    title: pick('title'),
  };
}

let fileCount = 0;
for (const col of COLLECTIONS) {
  const base = join(ROOT, col);
  let files;
  try {
    files = walk(base, []);
  } catch {
    continue; // коллекции может не быть
  }
  for (const file of files) {
    fileCount++;
    const rel = file.replace(/\\/g, '/');
    // Сайт одноязычный — весь контент обязан лежать в /en/. Файл в /ru/, /uk/ или
    // любой другой не-en папке = остаток удалённого языка, это ошибка.
    if (!/\/en\//.test(rel)) {
      errors.push(`${rel}: контент вне папки /en/ — сайт только на английском`);
      continue;
    }
    const data = parseFront(readFileSync(file, 'utf8'));
    if (!data) {
      errors.push(`${rel}: нет frontmatter`);
      continue;
    }
    // lang в frontmatter должен быть 'en'.
    if (data.lang && data.lang !== 'en') {
      errors.push(`${rel}: lang='${data.lang}', а файл в папке /en/ (сайт только на en)`);
    }
    // title ≤ 60 (articles/routes; у restaurants title нет).
    if (data.title && [...data.title].length > TITLE_MAX) {
      errors.push(`${rel}: title ${[...data.title].length} зн. > ${TITLE_MAX} — «${data.title}»`);
    }
  }
}

if (errors.length) {
  console.error(`[check-parity] НАРУШЕНИЯ (${errors.length}):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(`[check-parity] OK — ${fileCount} файлов (только en); весь контент в /en/, lang=en, title ≤${TITLE_MAX}.`);
