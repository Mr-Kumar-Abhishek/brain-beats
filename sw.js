// /var/www/html/sw.js (Your SOURCE file)
importScripts('/js/workbox/workbox-v7.3.0/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/js/workbox/workbox-v7.3.0/',
});

if (workbox) {
    console.log("Yay! Workbox is loaded !");

    // --- INSTALL Phase ---
    // Precaching happens during install. Workbox handles adding this to event.waitUntil internally.
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    // Add an install listener primarily to trigger skipWaiting
    self.addEventListener('install', event => {
        console.log('Service Worker: Installing...');
        alert("Brain Beats is installing...");
        // Force the waiting service worker to become the active service worker.
        self.skipWaiting();
    });

    // --- ACTIVATE Phase ---
    // This runs *after* install is complete and the SW is controlling the page(s)
    self.addEventListener('activate', event => {
        console.log('Service Worker: Activating...');
        alert("Brain Beats sync operation is being deployed, app may be unresponsive until syncing is complete!");
        // Ensure the SW takes control of clients without waiting for reload
        event.waitUntil(clients.claim());

        // --- Show Notification Here ---
        // This requires the user to have granted notification permission via your web app's client-side JS.
        const notificationPromise = self.registration.showNotification('App Ready!', {
            body: 'Content is cached and ready for offline use.',
            icon: 'img/128x128-mandala-1757304_1280.png', // Optional: Specify an icon path relative to the root
            tag: 'app-ready-notification' // Optional: Give it a tag to prevent multiple similar notifications
        }).then(() => {
            console.log('Service Worker: Offline ready notification shown.');
        }).catch(err => {
            console.error('Service Worker: Notification failed:', err);
            alert("Notification failed: However the Brain Beats is ready for offline use.");
            // Fail silently if notifications aren't permitted or supported
        });

        // Optionally, ensure activation waits for the notification attempt
        event.waitUntil(Promise.all([clients.claim(), notificationPromise]));
    });


    /* --- Runtime Caching Rules --- */

    /* Cache images */
    workbox.routing.registerRoute(
        // Match image files based on directory or extension
        ({ request, url }) => request.destination === 'image' || /\.(?:png|gif|jpg|jpeg|svg)$/.test(url.pathname),
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 60, // Increased slightly
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    purgeOnQuotaError: true, // Automatically clean up if quota is exceeded
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200], // Cache opaque responses too (e.g., CORS images)
                }),
            ]
        })
    );

    /* Cache JS, CSS, JSON */
    workbox.routing.registerRoute(
        ({ request }) => request.destination === 'script' ||
                         request.destination === 'style' ||
                         request.destination === 'manifest' || // Cache the manifest itself
                         /\.json$/.test(request.url), // Explicitly match .json files
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "assets",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 7 * 24 * 60 * 60, // Cache assets for 7 days
                    purgeOnQuotaError: true,
                })
            ]
        })
    );

    /* Cache Google Fonts */
    // Cache the font stylesheets (CSS)
    workbox.routing.registerRoute(
        ({url}) => url.origin === 'https://fonts.googleapis.com',
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        })
    );
    // Cache the actual font files (WOFF2)
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
                    maxAgeSeconds: 365 * 24 * 60 * 60, // Cache fonts for a year
                    purgeOnQuotaError: true,
                }),
            ],
        })
    );

    // Removed explicit skipWaiting() and clientsClaim() from here as they are handled in event listeners

} else {
    console.log("Oops! Workbox didn't load");
}
