const staticAssets = [
    './',
    './js/serviceLoader.js',
    './js/main.js',
    './js/bootstrap.min.js',
    './js/jquery-3.3.1.slim.min.js',
    './js/noiser.js',
    './js/plugins.js',
    './js/popper.min.js',
    './css/main.css',
    './css/normalize.min.css',
    './css/bootstrap.min.css',
    './noise.html',
    './binaural-base-beats.html',
    './binaural-beats-generator.html',
    './monaural-base-beats.html',
    './monaural-beats-generator.html',
    './solfeggio-frequency.html',
    './noiser.js-license',
    './robots.txt',
    './BingSiteAuth.xml',
    './google7484c80835cfba45.html ',
    './LICENSE',
    './css-range-slider-license.txt',
    './sitemap.xml',
    './serviceWorker.js'
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
