module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,txt,css,scss,ico,png,js,json,svg}'
	],
	swSrc: 'sw.js',
  	swDest: 'sw-generated.js',
  	globIgnores: [
    	'sw-generated.js',
    	'workbox-config.js',
    	'node_modules/**/*',
    	'_layouts/**/*',
    	'_includes/**/*',
    	'blog/**/*',
    	'_site/**/*',
    	'_posts/**/*',
    	'.jekyll-cache/**/*',
    	'lab/**/*',
    	'scratch/**/*',
    	'generate_posts.py',
    	'README.md',
    	'DEVELOPMENT.md',
    	'CONTRIBUTING.md',
    	'LICENSE*',
    	'cocomo-cost-estimate.md',
    	'brain/**/*',
    	'.git/**/*'
  	],
	maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
};