'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "448648627b00c261918ccd968cedaed9",
"assets/assets/fonts/AvenyTMedium.otf": "fa9886c662fff04977de1bc3fef5b974",
"assets/assets/fonts/AvenyTRegular.otf": "3e271f1b663e1d7d3eb0f2923529a8d3",
"assets/assets/fonts/Billabong.ttf": "52b04f1c2bd73f240b4ad620924a40c9",
"assets/FontManifest.json": "20faf8b4b661df94d5dbacb9e924e058",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/1.png": "e66af8c4e7eaf94ad62720bbbdad7f2c",
"assets/images/10.jpg": "a7bb548d90342d1310cf22511dc7a05e",
"assets/images/11.jpg": "70d14ae66ca8f8c85e86fd39271d48dc",
"assets/images/12.jpg": "2291a251c4762e783ed9bc98aee9bd6e",
"assets/images/13.jpg": "28cc83ee10a50b1b9724ee0b0c740783",
"assets/images/14.jpg": "bbde4c451caca160e0d185b2ff653bc2",
"assets/images/15.jpg": "7f750332c8ca467cd1f2081d5d4bbc03",
"assets/images/16.jpg": "6925a4658bd5e9ae54002711a9b9a87d",
"assets/images/17.jpg": "6b9f2df72cfb7260ca1371033a0304bb",
"assets/images/18.jpg": "33317aa52dab6de3b216619f027850f1",
"assets/images/19.jpg": "d45bc62b855974c3221e656eedc0df70",
"assets/images/2.png": "f198c2f5d2aba84d4d6eb6179a72dbef",
"assets/images/3.png": "b17bbd05e88223bcd3cbc67ceabcba8c",
"assets/images/4.png": "be8bef4a712af08e7680db8d2ee768da",
"assets/images/5.jpg": "8e4761e52ef21061076cf63a081efca0",
"assets/images/6.jpg": "456e5fe9ff9ff4440f551b3321f8044c",
"assets/images/7.jpg": "3f989043cfa6f033f00f543011b1fd20",
"assets/images/9.jpg": "d0ebd639224f70fe9458f0be6b72e4be",
"assets/images/dennis.jpg": "28492660fce040500743a7d024b89717",
"assets/images/hamida.jpg": "36d85c074e6cdad5b94f6a58eb727e6d",
"assets/images/jedidiah.jpg": "0ad6bf46ecd068f9811218beb13bd99e",
"assets/images/logo1black.png": "1c62d2cf338afc44a4d5bb74669bcd64",
"assets/images/logo1blacktrans.png": "c76ab3105a5f5a307aee4e5ae8380af6",
"assets/images/logo1white.png": "334468f0b8b774db3ff4019e8e6a9ef6",
"assets/images/logo2black.png": "40cff07400bad8e9cc34d2b0306993c8",
"assets/images/logo2blacktrans.png": "81ed0ebd0c254421f927c39ab946befa",
"assets/images/logo2white.png": "b43359bdc0b3fc3adc64b74230337ab6",
"assets/images/logo2whitetrans.png": "27e391cd418915330c187f3b73d6affe",
"assets/images/logo2_trans.png": "27e391cd418915330c187f3b73d6affe",
"assets/images/logonone.png": "572ff6ea81fc46ab0b4bf3f4e8e48641",
"assets/images/logononetrans.png": "9699b841099ba8022c8b976c87d68fc6",
"assets/images/name.png": "67b2d257255e34911d596b0bba95d020",
"assets/images/nametrans.png": "a8a0708cc207f0c7e2fe7ea63a01a6e0",
"assets/images/shardow.jpg": "38e60d8e4bafec6b3b0ff3e2f5e197f2",
"assets/NOTICES": "7666a6785f5a62cbef34fc8aa332912c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "d73bf36657f58346135a628d88f1a140",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "11e466431814c9132b02fe08f435508b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "4a68faeb878f4aa45d591ef18dd07532",
"icons/android-chrome-512x512.png": "b536b4a78f5ae277130f5fc48af8d89a",
"icons/apple-touch-icon.png": "fb3e4c21dd1a3a5e6108735e45df444a",
"icons/favicon-16x16.png": "5695366665da146e82f0c35edd0632cb",
"icons/favicon-32x32.png": "904cec53115d5f60bdb3ac955b04881a",
"index.html": "bc3c1ee983e687d21c7297e4a23376fc",
"/": "bc3c1ee983e687d21c7297e4a23376fc",
"main.dart.js": "f777fda003d43b31a1f3de4d327307ae",
"manifest.json": "69cbac2c80ac8ccba2634a7d512284de",
"version.json": "ed1f2143abf4837182dcf4b48897aee0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
