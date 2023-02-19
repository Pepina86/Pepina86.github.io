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
'/.DS_Store',
'/._.DS_Store',
'/._icon.png',
'/._Skulptur.jpg',
'/Allgmein_Mittelalter',
'/icon.png',
'/Skulptur.jpg',
'/aesthetics/Das Erhabene.html',
'/assets/images/favicon.png',
'/assets/javascripts/bundle.5a9542cf.min.js',
'/assets/javascripts/bundle.5a9542cf.min.js.map',
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
'/assets/javascripts/workers/search.092fa1f6.min.js',
'/assets/javascripts/workers/search.092fa1f6.min.js.map',
'/assets/stylesheets/main.50e68009.min.css',
'/assets/stylesheets/main.50e68009.min.css.map',
'/assets/stylesheets/palette.e6a45f82.min.css',
'/assets/stylesheets/palette.e6a45f82.min.css.map',
'/github/.DS_Store',
'/github/._.DS_Store',
'/github/Pepina86.github.io/.DS_Store',
'/github/Pepina86.github.io/._.DS_Store',
'/media/._brentano.png',
'/media/._mittelalter.jpeg',
'/media/brentano.png',
'/media/mittelalter.jpeg',
'/medieval/Albertus.html',
'/medieval/Allgmein_Mittelalter.html',
'/medieval/Anselm.html',
'/medieval/Anselm_Potcast.html',
'/medieval/Descartes.html',
'/medieval/Ockham.html',
'/medieval/Proslogion',
'/medieval/Proslogion.html',
'/medieval/Scotus.html',
'/phenomenology/._Logische Untersuchungen.pdf',
'/phenomenology/._Skulptur.jpg',
'/phenomenology/Brentano.PES.d.pdf',
'/phenomenology/Brentano2.html',
'/phenomenology/Brentano_Empirischer.html',
'/phenomenology/Brentano_Psychologie vom empirischen Standpunkte.html',
'/phenomenology/Brentano_Willen.html',
'/phenomenology/EinführungPhän.html',
'/phenomenology/Gemeinsamer Text.html',
'/phenomenology/Intentionalite.html',
'/phenomenology/Intentionnalité et intension.pdf',
'/phenomenology/Introduction.html',
'/phenomenology/Kant.html',
'/phenomenology/Kant_MetaphysikS.html',
'/phenomenology/Kriegel.html',
'/phenomenology/Kriegel.pdf',
'/phenomenology/Logische Untersuchungen.html',
'/phenomenology/Logische Untersuchungen.pdf',
'/phenomenology/Notizen_Willen.html',
'/phenomenology/Skulptur.jpg',
'/phenomenology/Willens.html',
'/phenomenology/media/image1.png',
'/phenomenology/media/image2.png',
'/phenomenology/media/image3.png',
'/phenomenology/media/image4.png',
'/phenomenology/media/image5.png',
'/search/search_index.json'];

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
