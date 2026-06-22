#!/usr/bin/env node
/**
 * test:links (SPEC §21, CLAUDE) — проверка внутренних ссылок и /go/-редиректов.
 *
 * R1: рабочий мини-чекер (не заглушка). После `npm run build`:
 *  1. Собирает все internal href из dist/**\/*.html.
 *  2. Проверяет, что каждый внутренний путь резолвится в существующий
 *     dist/<path>/index.html (или файл). trailingSlash:'always' учитывается.
 *  3. Для ссылок /go/{partner} проверяет, что партнёр есть в
 *     src/data/partners.json (иначе клик уйдёт в фолбэк — это предупреждение).
 *
 * Внешние (http/https), mailto:, tel:, #-якоря — пропускаются.
 * Если dist/ нет — подсказывает запустить build и выходит с кодом 1.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const PARTNERS_PATH = join(ROOT, 'src', 'data', 'partners.json');

/** Рекурсивно собрать все .html файлы. */
async function collectHtml(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectHtml(full)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

/** Достать href из href="..." и href='...'. */
function extractHrefs(html) {
  const hrefs = [];
  const re = /href\s*=\s*("([^"]*)"|'([^']*)')/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    hrefs.push(m[2] ?? m[3] ?? '');
  }
  return hrefs;
}

function isExternalOrSpecial(href) {
  return (
    href === '' ||
    href.startsWith('#') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('data:')
  );
}

/** Проверить, что внутренний путь существует в dist. */
async function pathExistsInDist(pathname) {
  // Убираем query и hash.
  const clean = pathname.split('#')[0].split('?')[0];
  const rel = clean.replace(/^\/+/, '');

  // /go/ обрабатывается Pages Function — в dist файла нет, это норма.
  if (rel === 'go' || rel.startsWith('go/')) return true;

  const candidates = [];
  if (rel === '' || clean.endsWith('/')) {
    candidates.push(join(DIST, rel, 'index.html'));
  } else {
    candidates.push(join(DIST, rel));
    candidates.push(join(DIST, `${rel}.html`));
    candidates.push(join(DIST, rel, 'index.html'));
  }
  for (const c of candidates) {
    if (existsSync(c)) {
      try {
        const s = await stat(c);
        if (s.isFile()) return true;
      } catch {
        /* ignore */
      }
    }
  }
  return false;
}

async function loadPartners() {
  try {
    const raw = await readFile(PARTNERS_PATH, 'utf8');
    const data = JSON.parse(raw);
    return data.partners ?? {};
  } catch {
    return {};
  }
}

async function main() {
  if (!existsSync(DIST)) {
    console.error('[test:links] dist/ не найден. Сначала: npm run build');
    process.exit(1);
  }

  const htmlFiles = await collectHtml(DIST);
  const partners = await loadPartners();

  const brokenInternal = [];
  const unknownPartners = new Set();
  const goViolations = [];
  let checked = 0;

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    // Унификация (CLAUDE правило 2 / §16): каждая /go/-ссылка в выводе обязана нести
    // rel="sponsored nofollow noopener" + непустой ?c= (атрибуция). Ловит сырые инлайн-
    // /go/-ссылки в .md (dofollow-утечка + нулевая атрибуция), которые extractHrefs не видит.
    for (const m of html.matchAll(/<a\b[^>]*href="(\/go\/[^"]*)"[^>]*>/gi)) {
      const tag = m[0];
      const goHref = m[1];
      const relMatch = tag.match(/\srel="([^"]*)"/i);
      const rel = relMatch ? relMatch[1].toLowerCase() : '';
      const hasRel = ['sponsored', 'nofollow', 'noopener'].every((tk) => rel.includes(tk));
      const hasSub = /[?&]c=[^&"#]+/.test(goHref);
      if (!hasRel || !hasSub) {
        const missing = [!hasRel && 'rel(sponsored/nofollow/noopener)', !hasSub && '?c=']
          .filter(Boolean)
          .join(', ');
        goViolations.push({ file: file.replace(DIST, 'dist'), href: goHref, missing });
      }
    }
    const hrefs = extractHrefs(html);
    for (const href of hrefs) {
      if (isExternalOrSpecial(href)) continue;
      checked += 1;

      // /go/{partner} — сверяем партнёра с картой.
      const goMatch = href.match(/^\/go\/([^/?#]+)/);
      if (goMatch) {
        const partner = decodeURIComponent(goMatch[1]);
        if (!Object.prototype.hasOwnProperty.call(partners, partner)) {
          unknownPartners.add(partner);
        }
        continue;
      }

      const ok = await pathExistsInDist(href);
      if (!ok) {
        brokenInternal.push({ file: file.replace(DIST, 'dist'), href });
      }
    }
  }

  console.log(
    `[test:links] HTML-страниц: ${htmlFiles.length}; внутренних ссылок проверено: ${checked}`,
  );

  if (unknownPartners.size > 0) {
    console.warn(
      `[test:links] предупреждение — партнёры не из partners.json (уйдут в фолбэк): ${[...unknownPartners].join(', ')}`,
    );
  }

  if (goViolations.length > 0) {
    console.error(
      `[test:links] /go/-ссылки без rel/?c= (${goViolations.length}) — нарушение CLAUDE правило 2 / §16:`,
    );
    for (const v of goViolations) {
      console.error(`  ${v.file}  →  ${v.href}  [нет: ${v.missing}]`);
    }
    process.exit(1);
  }

  if (brokenInternal.length > 0) {
    console.error(`[test:links] битые внутренние ссылки (${brokenInternal.length}):`);
    for (const b of brokenInternal) {
      console.error(`  ${b.file}  →  ${b.href}`);
    }
    process.exit(1);
  }

  console.log('[test:links] OK — битых внутренних ссылок нет, /go/-ссылки с rel+?c=.');
  process.exit(0);
}

main().catch((err) => {
  console.error('[test:links] ошибка:', err);
  process.exit(1);
});
