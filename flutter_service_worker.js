'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aa895d921506c09ba0773c2d4ddeb270",
"index.html": "816d0ec289f5aa94e76f8693bef17a4e",
"/": "816d0ec289f5aa94e76f8693bef17a4e",
"main.dart.js": "0079299022f0724c554d219097788dc7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63714e05c0257c56a238fb8ea10cec67",
"assets/images/ic_building.png": "a6fb2c4a3cc3e0e89fd96e778b89317c",
"assets/images/ic_folder_light.png": "5452f323f7fbe3da47bdab2280e84257",
"assets/images/artikel_on.png": "e7130ad88fd2c26d39e6ee05f1a4a7b8",
"assets/images/ic_bookmark.png": "fade193057880092c4a8ec9c5fa62386",
"assets/images/ic_laporan_kegiatan_bersama.png": "fd4471e04c54c6bb12bf0f58f86c1a93",
"assets/images/ic_lainnya.png": "76cf7144847636b04972b121ec657b5d",
"assets/images/ic_fgd_lainnya.png": "5290e85577a1b40becb7dd4b2c11f45a",
"assets/images/ic_tanggal.png": "ed13116f444bd7c7fc3a70ded2987f95",
"assets/images/ic_3user.png": "917bff5c13e30f5bf72e5eddb438c7ab",
"assets/images/ic_rapat_klarifikasi_satker.png": "24b44d1147ee694b507693347eb8f291",
"assets/images/ic_image.png": "5da3b551e81719028a395aa014b9759e",
"assets/images/ic_konsinyering.png": "f910a9d47229a1ff1e8e4197cf272eab",
"assets/images/ic_kajian_kampus.png": "9a784bfc5a1df004d950c65e6614a430",
"assets/images/ic_info_hitam.png": "a3a18f4d8f2c56b888e06b450f103cd9",
"assets/images/ic_fgd_luar_kota.png": "46b568425aceffda77f7c008154da2f5",
"assets/images/ic_folder.png": "df387038cecdfcca19334f1b70d18565",
"assets/images/ic_error.png": "ce0dc13b9d11676482c26a95c03eb033",
"assets/images/profile_on.png": "f78450ad4aa72db03d7f9b658d9652b5",
"assets/images/arsip_on.png": "dcb04305a9d2a2b0d8128e29611a6299",
"assets/images/ic_excel.png": "b027c41e7cd872d9a359428b26ad63c1",
"assets/images/ic_folder_dark.png": "42b788981b18237c3231535d37af6ec3",
"assets/images/ic_lock.png": "0159f8c50429ebc1595422926c50accb",
"assets/images/ic_kegiatan_lainnya.png": "308717d8ce028d3226c4c9400493368c",
"assets/images/ic_success.png": "ec43acdddb32ea9906904498a02ea791",
"assets/images/ic_checklist.png": "a2e81d3c21c5c0cb3eb69b65d2a4171c",
"assets/images/kegiatan_on.png": "c9026c323c35ae847367c071e94bd1b6",
"assets/images/ic_file_light.png": "2876dcb07337db34e537eed1310f233a",
"assets/images/logo_dpr.png": "2c4e766002a35f240431af697f69a54d",
"assets/images/header_login.png": "caec75d93c47b1b87e268b24f94f1b89",
"assets/images/ic_filter.png": "433fa0fef212e2330891f91535f77524",
"assets/images/profile_off.png": "2cf1c7ef61b91ea10480491fb68a7645",
"assets/images/arsip_off.png": "5e3bc464c1bc5ed53fe913dd5ed80790",
"assets/images/ic_document.png": "3b95ef7682a83c21b88d480c2243d7fe",
"assets/images/artikel_off.png": "c388f891aa2437e7be781ad008c3f37e",
"assets/images/bsbi_icon.png": "aa89b902041da20ce1752b9b0073a8a4",
"assets/images/ic_rapat_pimpinan.png": "51b3b276fa3877a61abce87693b3ff63",
"assets/images/ic_pdf.png": "7b52c60cd39066e8055a35c4fc5bc7c7",
"assets/images/ic_rrj.png": "9c0a6f962858fad78891a5bd8d466602",
"assets/images/ic_search.png": "1f704e0dbb67e6f12ca8192862ec55c0",
"assets/images/ic_info_biru.png": "5da142f3e06b8b84fdccb8c3d90cb3ba",
"assets/images/ic_jam.png": "bcd14d8bd9072d95debb470d4ad7c22e",
"assets/images/ic_back.png": "52d8a5e048c38758920378b04b303188",
"assets/images/ic_pengumuman.png": "29a1164bc6adb19b9b032264ea5f80da",
"assets/images/ic_3dot.png": "550d39262c202b16059a42c634ca26c2",
"assets/images/ic_mic.png": "a2c7d86c0172d1bcf4206f377c4cb1f1",
"assets/images/ic_file_dark.png": "768633c5e470fe661dd95a07aa82d397",
"assets/images/ic_fgd_dalam_kota.png": "333f5a813d63801c9640715100ce4fab",
"assets/images/ic_group_person.png": "4cebaa178bafe6f60e9d34800d46689c",
"assets/images/ic_supervisi.png": "1fe6cfd8707b54edbfc9fe0b18fbd097",
"assets/images/ic_person.png": "40bfd33e5e857e7c294e2e1e6e721974",
"assets/images/ic_pmk.png": "a6d3602ef5008fce1fd21790f54a65fc",
"assets/images/ic_seminar_kampus.png": "c6c9d53da6e4a886a43f6bb6da787dd0",
"assets/images/ic_warning.png": "52fc28ac3add21ea7d2155850c03edff",
"assets/images/ic_dokumen_baru.png": "333ff917660ef6630da65376e4573769",
"assets/images/kegiatan_off.png": "d48837140befe30f23c55b22cc0ba7c6",
"assets/images/ic_silang.png": "e2af624e5ac570f007c8556c3cdb8cc8",
"assets/images/ic_lokasi.png": "5f1c38f062c91a154b9c718011c29054",
"assets/images/logo_bsbi.png": "1a5aaa887d624c7a7d683491f87686e1",
"assets/images/ic_kunjungan_kerja.png": "d28099537df3bd8f930a6a19cfaff5aa",
"assets/images/edaran_off.png": "58c8be68ae6ec7088a0dc0a9777a4a09",
"assets/images/edaran_on.png": "652b166fe1911ad17479c5b8213d9e59",
"assets/AssetManifest.json": "62c849e28fefe96aa3ed990e97366c14",
"assets/NOTICES": "927f5801b86e3c981fe1c2e2f465d191",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
