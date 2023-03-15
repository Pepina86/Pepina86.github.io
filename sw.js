// Files to cache
const cacheName = 'js13kPWA-v1';
const appShellFiles = [
'/',
'/index.html',
'/404.html',
'/app.js',
'/js13kpwa.webmanifest',
'/sitemap.xml',
'/sitemap.xml.gz',
'/Albertus/index.html',
'/assets/images/favicon.png',
'/assets/javascripts/bundle.6c7ad80a.min.js',
'/assets/javascripts/bundle.6c7ad80a.min.js.map',
'/assets/javascripts/lunr/tinyseg.js',
'/assets/javascripts/lunr/wordcut.js',
'/assets/javascripts/lunr/min/lunr.ar.min.js',
'/assets/javascripts/lunr/min/lunr.da.min.js',
'/assets/javascripts/lunr/min/lunr.de.min.js',
'/assets/javascripts/lunr/min/lunr.du.min.js',
'/assets/javascripts/lunr/min/lunr.es.min.js',
'/assets/javascripts/lunr/min/lunr.fi.min.js',
'/assets/javascripts/lunr/min/lunr.fr.min.js',
'/assets/javascripts/lunr/min/lunr.hi.min.js',
'/assets/javascripts/lunr/min/lunr.hu.min.js',
'/assets/javascripts/lunr/min/lunr.it.min.js',
'/assets/javascripts/lunr/min/lunr.ja.min.js',
'/assets/javascripts/lunr/min/lunr.jp.min.js',
'/assets/javascripts/lunr/min/lunr.multi.min.js',
'/assets/javascripts/lunr/min/lunr.nl.min.js',
'/assets/javascripts/lunr/min/lunr.no.min.js',
'/assets/javascripts/lunr/min/lunr.pt.min.js',
'/assets/javascripts/lunr/min/lunr.ro.min.js',
'/assets/javascripts/lunr/min/lunr.ru.min.js',
'/assets/javascripts/lunr/min/lunr.stemmer.support.min.js',
'/assets/javascripts/lunr/min/lunr.sv.min.js',
'/assets/javascripts/lunr/min/lunr.th.min.js',
'/assets/javascripts/lunr/min/lunr.tr.min.js',
'/assets/javascripts/lunr/min/lunr.vi.min.js',
'/assets/javascripts/lunr/min/lunr.zh.min.js',
'/assets/javascripts/workers/search.b97dbffb.min.js',
'/assets/javascripts/workers/search.b97dbffb.min.js.map',
'/assets/stylesheets/main.1d29e8d0.min.css',
'/assets/stylesheets/main.1d29e8d0.min.css.map',
'/assets/stylesheets/palette.cbb835fc.min.css',
'/assets/stylesheets/palette.cbb835fc.min.css.map',
'/Brentano_Einführung/index.html',
'/Brentano_Psychologie vom empirischen Standpunkte/index.html',
'/Brentano_Willen/index.html',
'/Das Erhabene/index.html',
'/EinführungPhän/index.html',
'/Ockham/index.html',
'/Scotus/index.html',
'/search/search_index.json',
];

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(appShellFiles);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
