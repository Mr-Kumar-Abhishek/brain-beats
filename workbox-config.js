module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,txt,css,scss,ico,png,js,json,svg}'
	],

	swSrc: 'sw.js', // Your SOURCE service worker file
  	swDest: 'sw-generated.js', // The OUTPUT service worker file Workbox will create
  	globIgnores: [
    	'sw-generated.js', // Don't precache the generated service worker itself
    	'workbox-config.js', // Don't precache the config file
    	'node_modules/**/*' // Ignore development dependencies
    	// Add other patterns to ignore if needed
  	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};