const staticAssets = [
    './',
  './index.html',
  './solfeggio-frequency.html',
  './monaural-base-beats.html',
  './monaural-beats-generator.html',
  './binaural-beats-generator.html',
  './binaural-base-beats.html',
  './google7484c80835cfba45.html',
  './LICENSE',
  './README.md',
  './js/main.js',
  './css/main.css',
  './js/jquery-3.3.1.slim.min.js',
  './js/popper.min.js',
  './js/bootstrap.min.js',
  './js/plugins.js',
  'normalize.min.css'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if (url.origin === location.url) {
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}
