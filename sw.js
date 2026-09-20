// /var/www/html/sw.js (Source Service Worker)
importScripts('/js/workbox/workbox-v7.3.0/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/js/workbox/workbox-v7.3.0/',
});

if (workbox) {
    console.log("Yay! Workbox is loaded !");

    // --- INSTALL Phase ---
    // Precache preset pages, generator pages, audio engines, styles, and databases.
    // Blog posts and blog directory are strictly ignored via workbox-config.js globIgnores.
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    // Force waiting service worker to activate immediately upon install
    self.addEventListener('install', event => {
        console.log('Service Worker: Installing and caching preset & generator pages...');
        self.skipWaiting();
    });

    // Helper to dispatch offline ready notification if permission is granted
    const showOfflineReadyNotification = () => {
        if (self.Notification && self.Notification.permission === 'granted') {
            return self.registration.showNotification('Brain Beats Ready Offline!', {
                body: 'All preset and generator pages are cached and ready for offline use.',
                icon: '/img/128x128-mandala-1757304_1280.png',
                badge: '/img/favicon-32x32.png',
                tag: 'brain-beats-offline-ready',
                renotify: false
            }).then(() => {
                console.log('Service Worker: Offline ready notification shown.');
            }).catch(err => {
                console.error('Service Worker: Notification failed:', err);
            });
        }
        return Promise.resolve();
    };

    // Helper to broadcast cache completion message to all open client windows
    const notifyClientsPrecacheComplete = () => {
        return self.clients.matchAll({ includeUncontrolled: true, type: 'window' }).then(clients => {
            clients.forEach(client => {
                client.postMessage({
                    type: 'PRECACHE_COMPLETE',
                    title: 'Brain Beats Ready Offline!',
                    body: 'All preset and generator pages are cached and ready for offline use.'
                });
            });
        });
    };

    // --- ACTIVATE Phase ---
    // Runs when caching is complete and the Service Worker takes control
    self.addEventListener('activate', event => {
        console.log('Service Worker: Activating...');
        event.waitUntil(
            Promise.all([
                clients.claim(),
                showOfflineReadyNotification(),
                notifyClientsPrecacheComplete()
            ])
        );
    });

    // Handle incoming client messages (e.g., when notification permission is granted after activation)
    self.addEventListener('message', event => {
        if (event.data && event.data.type === 'SHOW_CACHE_NOTIFICATION') {
            showOfflineReadyNotification();
        }
    });

    /* --- Routing Rules --- */

    /* 1. Explicitly ensure blog posts and blog directories are NEVER cached - NetworkOnly */
    workbox.routing.registerRoute(
        ({ url }) => url.pathname.startsWith('/blog') || /^\/\d{4}\/\d{2}\/\d{2}\//.test(url.pathname),
        new workbox.strategies.NetworkOnly()
    );

    /* 2. Cache images */
    workbox.routing.registerRoute(
        ({ request, url }) => request.destination === 'image' || /\.(?:png|gif|jpg|jpeg|svg)$/.test(url.pathname),
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    purgeOnQuotaError: true,
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200],
                }),
            ]
        })
    );

    /* 3. Cache JS, CSS, JSON for preset & generator engines */
    workbox.routing.registerRoute(
        ({ request, url }) => (
            request.destination === 'script' ||
            request.destination === 'style' ||
            request.destination === 'manifest' ||
            /\.json$/.test(request.url)
        ) && !url.pathname.startsWith('/blog'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "assets",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
                    purgeOnQuotaError: true,
                })
            ]
        })
    );

    /* 4. Cache Google Fonts */
    workbox.routing.registerRoute(
        ({url}) => url.origin === 'https://fonts.googleapis.com',
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        })
    );
    workbox.routing.registerRoute(
        ({url}) => url.origin === 'https://fonts.gstatic.com',
        new workbox.strategies.CacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200],
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 30,
                    maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
                    purgeOnQuotaError: true,
                }),
            ],
        })
    );

} else {
    console.log("Oops! Workbox didn't load");
}
