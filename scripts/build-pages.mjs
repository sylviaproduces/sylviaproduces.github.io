import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { projects, caseStudies, posts } from '../content.js';

const html = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
const base = '../../';

function staticMedia(media) {
  if (media?.type === 'art') return `<div class="artboard artboard--${html(media.theme || 'score')} detail-media" role="img" aria-label="${html(media.label || 'Editorial placeholder artwork')}"><span class="artboard__sun"></span><span class="artboard__bar"></span><span class="artboard__disc"></span><span class="artboard__caption">${html(media.label || 'Replace with image, GIF, or embed')}</span></div>`;
  if (media?.type === 'embed') return `<div class="media-embed detail-media">${media.embedHtml || ''}</div>`;
  return `<figure class="media-image detail-media"><img src="${base}${html(media?.src || 'assets/images/hero-production.svg')}" alt="${html(media?.alt || 'Portfolio media')}"></figure>`;
}

function staticDetail(record, kind) {
  const isPost = kind === 'post';
  const intro = html(record.intro || record.deck || record.summary || '');
  const sections = isPost
    ? `<div class="article-body">${record.body.map((paragraph) => `<p>${html(paragraph)}</p>`).join('')}</div>`
    : `<div class="detail-sections">${record.sections.map((section, index) => `<section class="detail-section"><span class="detail-section__number">0${index + 1}</span><div><h2>${html(section.heading)}</h2><p>${html(section.body)}</p></div></section>`).join('')}</div>`;
  return `<article class="detail"><a class="back-link" href="${base}${isPost ? 'index.html#writing' : 'index.html#work'}">← Back to ${isPost ? 'writing' : 'portfolio'}</a><header class="detail-hero"><p class="eyebrow">${html(record.eyebrow || record.category || 'Writing')}</p><h1>${html(record.title)}</h1><p class="detail-hero__deck">${html(record.deck || record.summary || record.intro || '')}</p><div class="detail-hero__meta"><span>${html(record.role || record.category || 'Sylvia Produces')}</span><span>${html(record.year || record.date || '')}</span><span>${html(record.readTime || (record.tags || []).join(' · '))}</span></div></header>${staticMedia(record.media)}<div class="detail-layout"><aside><dl class="facts"><div><dt>Role</dt><dd>${html(record.role || record.category || 'Sylvia Produces')}</dd></div><div><dt>${isPost ? 'Published' : 'Year'}</dt><dd>${html(record.year || record.date || '')}</dd></div></dl></aside><div><p class="detail-intro">${intro}</p>${sections}</div></div></article>`;
}

function page(record, kind) {
  const description = record.deck || record.summary || record.intro || 'Sylvia Produces portfolio detail.';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${html(description)}"><meta name="theme-color" content="#A69BFF"><title>${html(record.title)} — Sylvia Produces</title><link rel="icon" href="${base}assets/logo.svg" type="image/svg+xml"><link rel="stylesheet" href="${base}styles.css"></head><body id="top" data-base="${base}" data-detail-type="${kind}" data-slug="${html(record.slug)}"><header class="site-header" data-site-header></header><main data-detail-root>${staticDetail(record, kind)}</main><footer class="site-footer" data-site-footer></footer><script type="module" src="${base}main.js"></script></body></html>`;
}

function writeRoute(record, kind) {
  const target = join(process.cwd(), record.path, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, page(record, kind));
}

projects.forEach((record) => writeRoute(record, 'project'));
caseStudies.forEach((record) => writeRoute(record, 'case'));
posts.forEach((record) => writeRoute(record, 'post'));

const routes = [
  { path: '/', title: 'Home' },
  { path: '/about.html', title: 'About' },
  ...projects.map(({ path, title }) => ({ path: `/${path}`, title })),
  ...caseStudies.map(({ path, title }) => ({ path: `/${path}`, title })),
  ...posts.map(({ path, title }) => ({ path: `/${path}`, title }))
];
writeFileSync(join(process.cwd(), 'manus-routes.json'), `${JSON.stringify({ routes }, null, 2)}\n`);
console.log(`Generated ${projects.length + caseStudies.length + posts.length} detail pages and manus-routes.json.`);
