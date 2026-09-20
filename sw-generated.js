// /var/www/html/sw.js (Your SOURCE file)
importScripts('/js/workbox/workbox-v7.3.0/workbox-sw.js');

workbox.setConfig({
    modulePathPrefix: '/js/workbox/workbox-v7.3.0/',
});

if (workbox) {
    console.log("Yay! Workbox is loaded !");

    // --- INSTALL Phase ---
    // Precaching happens during install. Workbox handles adding this to event.waitUntil internally.
    workbox.precaching.precacheAndRoute([{"revision":"dd9974b527b98edfc1973c48529dc657","url":"webring.html"},{"revision":"9daeecc843bb6ebdbd0340b2d2e2501f","url":"square-wave-monaural-beats-generator.html"},{"revision":"6d2073b957fbf15d16ff53627b2b3b0d","url":"square-wave-monaural-base-beats.html"},{"revision":"7d81468fc111ee65c505247c6ce1db89","url":"solfeggio-frequency.html"},{"revision":"8bd773de23f24672498f04b8b76b12e6","url":"sine-wave-monaural-generator.html"},{"revision":"ea2117276e4a2f7541c189bbb3ec61b5","url":"sine-wave-3d-generator.html"},{"revision":"5a1f1701765e1bf23633b07ec1b297d4","url":"sine-wave-3d-auto-generator.html"},{"revision":"52cefceeb709c47c3d7c729a9fa2f4ef","url":"search.html"},{"revision":"d31db6f7976f3c59ce42b771f370d7ad","url":"robots.txt"},{"revision":"910053b591f48826346559417ac538f9","url":"rife-monaural-generator.html"},{"revision":"b3a226e3e06560f909f97db03d765537","url":"rife-frequencies-cafl-xref.html"},{"revision":"3e25c26a1323e4b86c6ff5ed959494c8","url":"rife-3d-generator.html"},{"revision":"ae8b34c52fbc52c663e1cb40655c6928","url":"rife-3d-auto-generator.html"},{"revision":"4414303bc6ba64fcf5a661157fd156e1","url":"pure-tones.html"},{"revision":"68a2bb9227668fdb1f6ecaa6933869b3","url":"pure-tone-generator.html"},{"revision":"378b8314bc3574b9e215e403238a9e04","url":"privacy-policy.html"},{"revision":"7404f6e03861991a494e79e8f2d7e4bb","url":"package.json"},{"revision":"4f31b8f6190d7711b15550b16fa018d1","url":"package-lock.json"},{"revision":"aa56c6e796303e1ebfddd52153a6aa20","url":"noise.html"},{"revision":"bc748472ef90e06214e463050956eda9","url":"monaural-rife-machine.html"},{"revision":"ed0057b87e8c81df0b88656ce3fa943b","url":"monaural-bio-frequency.html"},{"revision":"83cfaae2fa31a38deed3bc1a892cc3a9","url":"monaural-beats-generator.html"},{"revision":"8b158c3e4cb9fac8e94a40551bd37783","url":"monaural-base-beats.html"},{"revision":"c5cc15d788c758704a2cf1698eb2d19e","url":"monaural-alt-frequency.html"},{"revision":"e59c06bbc505f3c63fe40654bbe5f322","url":"manifest.json"},{"revision":"e3babcb241b0d29e9fc5af4e24854e50","url":"licenses.html"},{"revision":"99a9c0ee0a8bec0665ce3fd6f33e091f","url":"kundalini-ascension.html"},{"revision":"6593bf1808c21b95e55d5ff90ca2be67","url":"isochronic-tones.html"},{"revision":"323db82d4a41f75127ac7d3fb2791617","url":"isochronic-tones-generator.html"},{"revision":"bee66d6072589ca44e1b91edd5a5fb0c","url":"index.html"},{"revision":"8795b76b8c926be24b65e1eb2f84c300","url":"google7484c80835cfba45.html"},{"revision":"100bdcda97bda57c03676d8870c33937","url":"fileList.js"},{"revision":"482597c0f3065dc2f3b6a81c4258bfbf","url":"favorites.html"},{"revision":"f8ba0d2a05ab64d937ed2eec2fbad379","url":"favicon.ico"},{"revision":"a168d13603066ef0dcdd5e31b135bea6","url":"dreamachine-presets.html"},{"revision":"31cd9dc3ad731e0fd8f5bfac60283d90","url":"dreamachine-generator.html"},{"revision":"c9c80afc68f093dd1cb569a091b30b34","url":"cocomo.html"},{"revision":"f650ef1beb6f3bfefa4cc83e06592946","url":"binaural-mind-machine-generator.html"},{"revision":"591b7da5d7ace8baea7411a7ddb81623","url":"binaural-beats-generator.html"},{"revision":"8262eca6991275c4f0ea8b08fbe6a324","url":"binaural-base-beats.html"},{"revision":"64163da407001aa88f841b1cb55b8106","url":"astral-broadcaster.html"},{"revision":"4ad19a3549186fe15e6776a66296fbba","url":"app-ads.txt"},{"revision":"e5f76fe5be50e788e0767f9d092e1b39","url":"angel-frequency.html"},{"revision":"f9071d9be59c6e76f61778b506217055","url":"ads.txt"},{"revision":"8d276402eef18089781807f90547c40c","url":"3d-xtra-frequency-presets.html"},{"revision":"3c7df2e99db81c5528da441c3722efce","url":"3d-vega-frequency-presets.html"},{"revision":"a5fea3bda621e8cfb6b8a8a17fe1bd34","url":"3d-rife-machine.html"},{"revision":"66ae5da290c6772a56e3caa13bd929cd","url":"3d-prov-frequency-presets.html"},{"revision":"bdb8beba0860fdaab4bc7bcf7d1a4223","url":"3d-original-rife-frequency-presets.html"},{"revision":"2e0e9d5bd012d31e859aad14afe74293","url":"3d-khz-frequency-presets.html"},{"revision":"82ffaa06337bf9f6160ecec78228f668","url":"3d-hc-frequency-presets.html"},{"revision":"079beec5d50c8e5f1c15a2aaa687a043","url":"3d-cust-frequency-presets.html"},{"revision":"ac14a377e8f932951493f07bfcd97d87","url":"3d-bio-frequency.html"},{"revision":"b06b3597df0cb370340fd1960f83ac09","url":"3d-alt-frequency.html"},{"revision":"136f61205fe510a5a9b303637ead0a1a","url":"tests/audio-engine.test.js"},{"revision":"9fbfeef3caeb8ec6ab66a744b42b9976","url":"scripts/generate-sitemap.js"},{"revision":"f5e858eddebb132da1cf8b9206b11158","url":"noise-processor/yellow-noise-processor.js"},{"revision":"86f942fcdb6fbff15197a18958cbed9c","url":"noise-processor/white-noise-processor.js"},{"revision":"2e96ecb1a01a1ce46f6509b7a425e95d","url":"noise-processor/violet-noise-processor.js"},{"revision":"f0ec0ce4f4287e6b8c716418ccc5e4f0","url":"noise-processor/velvet-noise-processor.js"},{"revision":"bc11446f15e8e14d5eb667f0b8c1efb6","url":"noise-processor/turquoise-noise-processor.js"},{"revision":"3b078739629b0901682843f679658eed","url":"noise-processor/red-noise-processor.js"},{"revision":"d6a42b1517758dbe9f71720e523dac01","url":"noise-processor/pink-noise-processor.js"},{"revision":"83dbd15f081767482b11fc2f559e932f","url":"noise-processor/orange-noise-processor.js"},{"revision":"2dbcdeea928d5f7241bf032bdd4378d0","url":"noise-processor/noise-processor.js"},{"revision":"4b33357014caf6f60b1e410fea65db62","url":"noise-processor/grey-noise-processor.js"},{"revision":"c284259da487479bd2f050ec40a209fc","url":"noise-processor/green-noise-processor.js"},{"revision":"e009baa26965d503b4a2d49453c75b14","url":"noise-processor/brown-noise-processor.js"},{"revision":"865bc08e85a0dc699918ace94a83aa58","url":"noise-processor/blue-noise-processor.js"},{"revision":"658ee57c5b645715f5beeb6fac3bd9aa","url":"noise-processor/black-noise-processor.js"},{"revision":"d13b8fc67597da19041a9a2d38f2d19b","url":"json/xtra-freq.json"},{"revision":"ba5d3520510c2c6a459d54c84b5c95c6","url":"json/webring.json"},{"revision":"dfbd50d98ae07703e2fe0ddb91d4a955","url":"json/vega-freq.json"},{"revision":"6e7d4caacf760b6a571fb72798deb900","url":"json/sq_monaurals.json"},{"revision":"9abf7f3227f9426f352b9d333f2b351b","url":"json/solfeggio.json"},{"revision":"e985f8601a84f10e56ea190ba2bf9503","url":"json/rife3Dfreq.json"},{"revision":"5013acfedf99468a977bb880efde4c51","url":"json/rife-monaural-freq.json"},{"revision":"1e28bb553eac687e119463cca2889d45","url":"json/rife-frequencies-cafl-xref.json"},{"revision":"b067a20a7b12f07d69a7096c08de5e31","url":"json/rife-freq.json"},{"revision":"48350c9d19ddea5ab0aa5b619b104122","url":"json/puretones.json"},{"revision":"7d8f53f8ea2c08ed6a7202e643e13f3c","url":"json/prov-freq.json"},{"revision":"86a9d67c28055bdc04264abaef8a1ccd","url":"json/noise.json"},{"revision":"2db49cdd6958d3a5d028ee1f8b96020f","url":"json/monaurals.json"},{"revision":"bf0320eaeac885830272cacd2f0927cb","url":"json/isochronic.json"},{"revision":"94a2d450698f70da7147d2eabe1ec37d","url":"json/indexer.json"},{"revision":"d979b00d4c4a55349144cf60b46e0956","url":"json/dreamachines.json"},{"revision":"89c2bdfe0b66368e96067a64eb467100","url":"json/cust-freq.json"},{"revision":"5219cc9628f3695e2d9a486c0493acef","url":"json/bio-monaural-freq.json"},{"revision":"0fe8a332741477d95e165a3e6c2ca7b3","url":"json/bio-freq-auto.json"},{"revision":"1f1f2c8ef63993fbe374234b3169abe0","url":"json/binaurals.json"},{"revision":"6f4a84faf6b20aa4c75dc2c435911f7e","url":"json/angel.json"},{"revision":"b143285794f3515681558e3c79d5ef85","url":"json/alt-freq-monaural.json"},{"revision":"cc93c5906fa4ac639bfbf6dc8d41a3e7","url":"json/alt-freq-auto.json"},{"revision":"9e85c81f4a37b0889a849fdd25cf867b","url":"json/3d-khz-frequency-presets.json"},{"revision":"75dee146e281f6fa23d0ea9fb9ab5fb8","url":"json/3d-hc-frequency-presets.json"},{"revision":"4f824041de79e1c90c4584c93eaa73cb","url":"js/serviceLoader.js"},{"revision":"1e5ae893720dd1b6ac7c17fca93de54f","url":"js/search-data.js"},{"revision":"91d98762047002ff488cf1b537e1ed7d","url":"js/plugins.js"},{"revision":"780f875a443a39aa06929753de8bc0fd","url":"js/main.js"},{"revision":"ae397d989c3a4b4b03cff9f234127cb6","url":"js/jsonDataArray.js"},{"revision":"c7393ff783202680516ed44393d69897","url":"js/jquery-3.6.0.slim.min.js"},{"revision":"8c401a04f929a32ce25732efa185aa17","url":"js/google-analytics.js"},{"revision":"de964a0cec12f714a647d17adc297600","url":"js/google-ads.js"},{"revision":"80f725f3099f14c4cef609969bbf548c","url":"js/favs.js"},{"revision":"ef9019d8860c1029e100dabe11644db0","url":"js/favorites-data.js"},{"revision":"4434aacf1e8672606291ef46a338c5fb","url":"js/desc-data.js"},{"revision":"17a25925ed6790212598832f69a3ca16","url":"js/data.js"},{"revision":"5a5aaca0d7e99e8ced447ac4eee1c1e7","url":"js/data-id.js"},{"revision":"0d18ee02e32909aa686045e9edf5dde9","url":"js/custom-editors.js"},{"revision":"259e416ef6833be43801b8b68a93b008","url":"js/bootstrap.min.js"},{"revision":"4706e3135214d1a3f6c28e98c40c0724","url":"js/bootstrap.js"},{"revision":"feadf83193b853084d9820170c4178d5","url":"js/bootstrap.esm.min.js"},{"revision":"7c5450bd1e09b3176e598a835aab0ed3","url":"js/bootstrap.esm.js"},{"revision":"7ccd9d390d31af98110f74f842ea9b32","url":"js/bootstrap.bundle.min.js"},{"revision":"bb2ab2f5bb58154ca9cc11ea437bfdbb","url":"js/bootstrap.bundle.js"},{"revision":"2aa6422e6065ff2639c88a02f6d5e5ee","url":"js/bootstrap-input-spinner.js"},{"revision":"7526eac808d6b2d82b533795861a7220","url":"js/workbox/workbox-v7.3.0/workbox-window.prod.umd.js"},{"revision":"c9050b3f542e9b1335e5bb4de56a35f2","url":"js/workbox/workbox-v7.3.0/workbox-window.dev.umd.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/workbox/workbox-v7.3.0/workbox-sw.js"},{"revision":"9259cf1a135007d6a0893b8cde11bfd3","url":"js/workbox/workbox-v7.3.0/workbox-streams.prod.js"},{"revision":"da5b52186bde92126440bea1d1f6e459","url":"js/workbox/workbox-v7.3.0/workbox-streams.dev.js"},{"revision":"41b3f1fa8839eaad412eb38825850272","url":"js/workbox/workbox-v7.3.0/workbox-strategies.prod.js"},{"revision":"6b51ad7cf0e44b533b8c617ca0109c63","url":"js/workbox/workbox-v7.3.0/workbox-strategies.dev.js"},{"revision":"bc309ea484e6d6e07e8f9216d677f3fe","url":"js/workbox/workbox-v7.3.0/workbox-routing.prod.js"},{"revision":"018d149d3a27546c153457908042d72c","url":"js/workbox/workbox-v7.3.0/workbox-routing.dev.js"},{"revision":"fab10eeef1a8c9755d5bb38883d4c23d","url":"js/workbox/workbox-v7.3.0/workbox-recipes.prod.js"},{"revision":"72ac803e8ae404c639cf8c1526fc14d1","url":"js/workbox/workbox-v7.3.0/workbox-recipes.dev.js"},{"revision":"15b201b6b595a97bb0be3d7577b25e9f","url":"js/workbox/workbox-v7.3.0/workbox-range-requests.prod.js"},{"revision":"aaafb1bb11c1b6d8e476d881f3e57652","url":"js/workbox/workbox-v7.3.0/workbox-range-requests.dev.js"},{"revision":"311b92de0b058ae6b2564d4cfcb6d0e7","url":"js/workbox/workbox-v7.3.0/workbox-precaching.prod.js"},{"revision":"d38878e5da541af031e060f94cbd7ef5","url":"js/workbox/workbox-v7.3.0/workbox-precaching.dev.js"},{"revision":"193bda9357eb6424434895a7aff8be0e","url":"js/workbox/workbox-v7.3.0/workbox-offline-ga.prod.js"},{"revision":"e0582d1549ee33859a7a539194380aff","url":"js/workbox/workbox-v7.3.0/workbox-offline-ga.dev.js"},{"revision":"a8b7d0af987ec66a222fd77dd9edde8a","url":"js/workbox/workbox-v7.3.0/workbox-navigation-preload.prod.js"},{"revision":"9b8d62a5b332dfd1ca149ae544d86943","url":"js/workbox/workbox-v7.3.0/workbox-navigation-preload.dev.js"},{"revision":"855cdca5da43a57ceebc5bc71453053f","url":"js/workbox/workbox-v7.3.0/workbox-expiration.prod.js"},{"revision":"0fbf1e2552d85b4ef27d405f08695a33","url":"js/workbox/workbox-v7.3.0/workbox-expiration.dev.js"},{"revision":"0f005de088aa3880813a40d4f3a6e2ca","url":"js/workbox/workbox-v7.3.0/workbox-core.prod.js"},{"revision":"f4cf052402578b2bdc3862223ee15cd4","url":"js/workbox/workbox-v7.3.0/workbox-core.dev.js"},{"revision":"a39fe4b9bb1ce7004ff866cc099d4a66","url":"js/workbox/workbox-v7.3.0/workbox-cacheable-response.prod.js"},{"revision":"98fd7c87ad917a757a80fcb13a0447f7","url":"js/workbox/workbox-v7.3.0/workbox-cacheable-response.dev.js"},{"revision":"c1d6cc1a26b73a488811f841756c1e3c","url":"js/workbox/workbox-v7.3.0/workbox-broadcast-update.prod.js"},{"revision":"8ebfef1474c401abc98ac889913a8fc9","url":"js/workbox/workbox-v7.3.0/workbox-broadcast-update.dev.js"},{"revision":"7df2b4af75f09fd8b18431c69477b127","url":"js/workbox/workbox-v7.3.0/workbox-background-sync.prod.js"},{"revision":"fdea78e10dc15a4990329b2bc73f4418","url":"js/workbox/workbox-v7.3.0/workbox-background-sync.dev.js"},{"revision":"d521e3f85f4ac9d83c04e72b6a196a18","url":"js/workbox/workbox-v6.5.3/workbox-window.prod.umd.js"},{"revision":"9828ddebd1e42cf5e630d2af1da2cfa5","url":"js/workbox/workbox-v6.5.3/workbox-window.dev.umd.js"},{"revision":"827debec1c9cfc242406040a15e3676e","url":"js/workbox/workbox-v6.5.3/workbox-sw.js"},{"revision":"c8fb5ce071f1bdae59ae97df0bd8610b","url":"js/workbox/workbox-v6.5.3/workbox-streams.prod.js"},{"revision":"fe9e5a197a262813dc8ac4a8887b5190","url":"js/workbox/workbox-v6.5.3/workbox-streams.dev.js"},{"revision":"7961b3bdf692839e42f5116fada4abdf","url":"js/workbox/workbox-v6.5.3/workbox-strategies.prod.js"},{"revision":"42cc9c5771fb1ca3a405b750a212baab","url":"js/workbox/workbox-v6.5.3/workbox-strategies.dev.js"},{"revision":"9ed3b4cf463c63a4b823d96e442ea45d","url":"js/workbox/workbox-v6.5.3/workbox-routing.prod.js"},{"revision":"7acb5988c8a932503f354a9a948e0edc","url":"js/workbox/workbox-v6.5.3/workbox-routing.dev.js"},{"revision":"efa90e16c1e803116f6a1d167d3b07e9","url":"js/workbox/workbox-v6.5.3/workbox-recipes.prod.js"},{"revision":"15b7f89b3fa338c8f34bdce8f7583731","url":"js/workbox/workbox-v6.5.3/workbox-recipes.dev.js"},{"revision":"f93967d4f606bc1c6ae091cd24c19756","url":"js/workbox/workbox-v6.5.3/workbox-range-requests.prod.js"},{"revision":"0c6235c99a584134c08cd37475467df0","url":"js/workbox/workbox-v6.5.3/workbox-range-requests.dev.js"},{"revision":"613d909f7abba984bb0377b6f1a6dce0","url":"js/workbox/workbox-v6.5.3/workbox-precaching.prod.js"},{"revision":"d355105f5d8df9eabcb450d0bb4c22b9","url":"js/workbox/workbox-v6.5.3/workbox-precaching.dev.js"},{"revision":"bc993f204720065c9b840ed6cfb05c32","url":"js/workbox/workbox-v6.5.3/workbox-offline-ga.prod.js"},{"revision":"ceb776f16e7b71d2fdd2d193098a3b9b","url":"js/workbox/workbox-v6.5.3/workbox-offline-ga.dev.js"},{"revision":"d38f2da3cbc0489284171ec9c64a0214","url":"js/workbox/workbox-v6.5.3/workbox-navigation-preload.prod.js"},{"revision":"d9d30d7a696027d63371419c86dedf07","url":"js/workbox/workbox-v6.5.3/workbox-navigation-preload.dev.js"},{"revision":"ac04c7e01a8eb3c4e89f2add2b3d4cb9","url":"js/workbox/workbox-v6.5.3/workbox-expiration.prod.js"},{"revision":"a5e5cbb6dc3089a2352525687b9f32a1","url":"js/workbox/workbox-v6.5.3/workbox-expiration.dev.js"},{"revision":"b60b740078293e75c6fbf8d0fde9e0dd","url":"js/workbox/workbox-v6.5.3/workbox-core.prod.js"},{"revision":"81092b1182e0a48e6cdc5204ef4f6137","url":"js/workbox/workbox-v6.5.3/workbox-core.dev.js"},{"revision":"e507a1725aa7af958bc074e5fa344815","url":"js/workbox/workbox-v6.5.3/workbox-cacheable-response.prod.js"},{"revision":"9464fbb361bf67eb4e3af0ce81b6c5ee","url":"js/workbox/workbox-v6.5.3/workbox-cacheable-response.dev.js"},{"revision":"035a6d63339c771751b3ca33b816c7ae","url":"js/workbox/workbox-v6.5.3/workbox-broadcast-update.prod.js"},{"revision":"07d1c84b40fcbdf7ecb13bca93268cfc","url":"js/workbox/workbox-v6.5.3/workbox-broadcast-update.dev.js"},{"revision":"d5200671b7fa31711ffa66d3983535cc","url":"js/workbox/workbox-v6.5.3/workbox-background-sync.prod.js"},{"revision":"68e2d9b98b2815e3e6e33eeb5240aa19","url":"js/workbox/workbox-v6.5.3/workbox-background-sync.dev.js"},{"revision":"6a94bec1d7122cf197425d9f0109e56a","url":"img/maskable_icon.png"},{"revision":"cefb3d9470b831b7e6bff1c4287b627c","url":"img/mandala-1757304_1280.png"},{"revision":"68e8e49786a696f0460640d3d437e169","url":"img/mandala-1757304-cropped.svg"},{"revision":"184220824061f8ff22f1b1a5675212a3","url":"img/brain-beats-netlify.png"},{"revision":"f5a6fc885c164225de7dbcf9f38b3254","url":"img/512x512-mandala-1757304_1280.png"},{"revision":"05045317de8c8f51885f17a397bec2c6","url":"img/256x256-mandala-1757304_1280.png"},{"revision":"e4ff38b3907a2bf3d892d8b011b8855b","url":"img/192x192-mandala-1757304_1280.png"},{"revision":"7270a1ba534e2eecc507e07040eda64a","url":"img/152x152-mandala-1757304_1280.png"},{"revision":"931b6bf6a798d23bb5c85f0e4b2d9fa6","url":"img/144x144-mandala-1757304_1280.png"},{"revision":"f4f654088d661d2d971ac5ad1368e96e","url":"img/128x128-mandala-1757304_1280.png"},{"revision":"ac230a49d6d655cc2498c292b6acb158","url":"css/normalize.min.css"},{"revision":"1d27b7670be5b8cd0c4dc3848957399d","url":"css/main.css"},{"revision":"665c3cacfdb309d6ae1c58c959598d5b","url":"css/bootstrap.rtl.min.css"},{"revision":"c89fe4420c13b8f3a61b318eaa28505b","url":"css/bootstrap.rtl.css"},{"revision":"94994c66fec8c3468b269dc0cc242151","url":"css/bootstrap.min.css"},{"revision":"346152dfe092ca2554e4c1c31817461d","url":"css/bootstrap.css"},{"revision":"87671032915d6842953cc42d1b115dc4","url":"css/bootstrap-utilities.rtl.min.css"},{"revision":"1d8910ba73226c80ab585479b65bbc81","url":"css/bootstrap-utilities.rtl.css"},{"revision":"e26b2acc296db4ca8056301f8933260c","url":"css/bootstrap-utilities.min.css"},{"revision":"dad106626326e17a6156072bf75251da","url":"css/bootstrap-utilities.css"},{"revision":"93530896b671920b6abc0d35c13fcedd","url":"css/bootstrap-reboot.rtl.min.css"},{"revision":"986ce35c2b5555e18433587b2c098454","url":"css/bootstrap-reboot.rtl.css"},{"revision":"185ea8d03d4ca4a29061bb874e888bf0","url":"css/bootstrap-reboot.min.css"},{"revision":"8fff8325874c2aa6fb8fd5988919a132","url":"css/bootstrap-reboot.css"},{"revision":"e2fc2c59953cdae3468ce175351c7ee7","url":"css/bootstrap-grid.rtl.min.css"},{"revision":"20f75e24001ca5ca7b074a2f30587424","url":"css/bootstrap-grid.rtl.css"},{"revision":"a92ffe0efac491b009a7c8e4e15b6861","url":"css/bootstrap-grid.min.css"},{"revision":"a62459a7eb63f39415876be696bd6118","url":"css/bootstrap-grid.css"}]);

    // Add an install listener primarily to trigger skipWaiting
    self.addEventListener('install', event => {
        console.log('Service Worker: Installing...');
        // Force the waiting service worker to become the active service worker.
        self.skipWaiting();
    });

    // --- ACTIVATE Phase ---
    // This runs *after* install is complete and the SW is controlling the page(s)
    self.addEventListener('activate', event => {
        console.log('Service Worker: Activating...');
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
