// /var/www/html/sw.js (Your SOURCE file)
importScripts('/js/workbox/workbox-v7.3.0/workbox-sw.js');
// importScripts('fileList.js'); // REMOVE THIS LINE

workbox.setConfig({
    modulePathPrefix: '/js/workbox/workbox-v7.3.0/',
});

if (workbox) {
    console.log("Yay! Workbox is loaded !");

    // Use the injected manifest:
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

    /*  cache images ... */
    workbox.routing.registerRoute(
        /(.*)img(.*)\.(?:png|gif|jpg|svg)/,
        new workbox.strategies.CacheFirst({
            cacheName: "images",
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                })
            ]
        })
    );

    /* Make your JS and CSS fast ... */
    workbox.routing.registerRoute(
        /.*\.(?:css|js|scss|json|)/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "assets",
        })
    );

    // cache google fonts
    workbox.routing.registerRoute(
        new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
        new workbox.strategies.CacheFirst({
            cacheName: "google-fonts",
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200],
                }),
            ],
        })
    );

    /* Install a new service worker ... */
    self.skipWaiting();
    workbox.core.clientsClaim();

} else {
    console.log("Oops! Workbox didn't load");
}
