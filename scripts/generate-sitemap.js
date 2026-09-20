/**
 * Brain Beats - Automated Local Sitemap Generator
 * Generates sitemap.xml with full canonical domain integrity (https://brain-beats.in)
 * Follows build convention: no articles published ahead of current date.
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://brain-beats.in';
const ROOT_DIR = path.resolve(__dirname, '..');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const IGNORED_HTML = new Set([
  '404.html',
  'google3d7a8d462fc1d033.html',
  'yandex_9c4c5a933fffeaa8.html'
]);

function getRootHtmlFiles() {
  const files = fs.readdirSync(ROOT_DIR);
  const urls = [];

  for (const f of files) {
    if (f.endsWith('.html') && !IGNORED_HTML.has(f)) {
      const fullPath = path.join(ROOT_DIR, f);
      const stat = fs.statSync(fullPath);
      const lastmod = stat.mtime.toISOString().split('T')[0];
      const route = f === 'index.html' ? '/' : `/${f}`;
      urls.push({
        loc: `${DOMAIN}${route}`,
        lastmod: lastmod,
        priority: f === 'index.html' ? '1.0' : '0.8',
        changefreq: 'monthly'
      });
    }
  }
  return urls;
}

function getBlogPostFiles() {
  const postsDir = path.join(ROOT_DIR, '_posts');
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir);
  const urls = [];
  const today = new Date().toISOString().split('T')[0];

  for (const f of files) {
    if (f.endsWith('.md')) {
      // Filename format: YYYY-MM-DD-title.md
      const match = f.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
      if (match) {
        const [_, year, month, day, slug] = match;
        const postDate = `${year}-${month}-${day}`;
        // Enforce build convention: do not publish articles ahead of current date
        if (postDate > today) continue;

        urls.push({
          loc: `${DOMAIN}/blog/${year}/${month}/${day}/${slug}.html`,
          lastmod: postDate,
          priority: '0.6',
          changefreq: 'yearly'
        });
      }
    }
  }
  return urls;
}

function buildSitemapXml() {
  const rootUrls = getRootHtmlFiles();
  const postUrls = getBlogPostFiles();
  const allUrls = [...rootUrls, ...postUrls];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const u of allUrls) {
    xml += `  <url>\n`;
    xml += `    <loc>${u.loc}</loc>\n`;
    xml += `    <lastmod>${u.lastmod}</lastmod>\n`;
    if (u.changefreq) xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
    if (u.priority) xml += `    <priority>${u.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`[Sitemap] Generated ${SITEMAP_PATH} with ${allUrls.length} URLs (Domain: ${DOMAIN}).`);
}

buildSitemapXml();
