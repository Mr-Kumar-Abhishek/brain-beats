importScripts('/js/workbox/workbox-v6.5.3/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/js/workbox/workbox-v6.5.3/',
  });

if (workbox) {
    console.log("Yay! Workbox is loaded !");
    workbox.precaching.precacheAndRoute([]);
/*  cache images in the e.g others folder; edit to other folders you got
   and config in the sw.js file
    */
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
    /* Make your JS and CSS as fast by returning the assets from the cache,
  while making sure they are updated in the background for the next use.
  */
    workbox.routing.registerRoute(
    // cache js, css, scss, json files
        /.*\.(?:css|js|scss|json|)/,
        // use cache but update in the background ASAP
        new workbox.strategies.StaleWhileRevalidate({
            // use a custom cache name
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
/* Install a new service worker and have it update
and control a web page as soon as possible
*/
self.skipWaiting();
    workbox.core.clientsClaim();
} else {
    console.log("Oops! Workbox didn't load");
}