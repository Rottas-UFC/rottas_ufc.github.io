'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "382674d8f40f07a4f9bceb124ac00657",
".git/config": "4e2a0e935980e4198873ece273c5a3af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fea85be70843d1107f6ebb9503f13bcc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82b3dcb5995ce6a2aa4e5629fbd1bae5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5155ecb2adfd73c49f9886307e634b9",
".git/logs/refs/heads/main": "a5155ecb2adfd73c49f9886307e634b9",
".git/logs/refs/remotes/origin/HEAD": "66ff5e3ea8ab77218e4da70a94359e71",
".git/logs/refs/remotes/origin/main": "14d56c29f993e9774f2ee62477b92007",
".git/objects/01/fea0c9b7092cca0145073cedc7a8cffd86a498": "f77c88ae47b629f44dd28c9e95a780d0",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/572950c1f5a912dabc7b81ddea1537ca24902a": "1f7b71069d6ab8d4f0a37edbe0cf5fb6",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/06/f35ceb50a1f91b8739d14b936cbc35f00b1cdb": "d9dd4bcf80827b71202a153b2f786805",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/57d86f21a8a526b6c2cd23acd1f0729121fe18": "0233cf85bfd1969ecf7c08c310c0fa4b",
".git/objects/11/4025087f2f56c041a1a978a03499c241779fca": "74d8b4beb53e4b8d2aa0af15562900e3",
".git/objects/12/bccdf2ab710b2956ad0a201a25db49043cb13c": "a28d470d287f53bb16af8d20f3d7c872",
".git/objects/13/252c9b20700aefd702efd541dfa79757f5b28f": "1293efb5f8a23eb3bca8ad62066d965b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/3687bad6d6405d5aadc4e089a281574ba62e64": "4ba141db53abdd5108f42ed777dea411",
".git/objects/23/b7c8be7d70b25d8a9f977af00f2094d5308402": "30b2d41aca8e72486e589b7f103beca8",
".git/objects/2c/c3ac67d8776f31266bebb9f35f7354a268c017": "7ecf3389bd37005460b3f620b182919f",
".git/objects/2f/804ca3167546f337d5e8665cd5359149a531d6": "37cf727f2856691f4b78fa961232a121",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/535fd08d4c1256348818a000a3fa7027aeb8af": "7555d3e9212818e063d9d05ddbcfaa88",
".git/objects/40/dd4bd0a3989e0454ca8eb1fe820fc6a9932860": "ba6fb7ac81b4719f831cb66fa080c8bd",
".git/objects/50/20a8802a7e8a4296df9ff27ba577c7ea314a3a": "ff70049633cdf5671f596c7132d5c6bd",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5e/ba73ec320c6e9d694bdcf6f028545a2e45b391": "8037632fff6639a914ad3ca928940934",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/21980288daa8c9388620c2fffec967bc342826": "b5fceb8cfb03bee1ecb7710e09db1d50",
".git/objects/63/92e399d1b0ce093109d9dbe808dfef59d2d4fd": "b8854fb7218099f8105879bde2ce1f70",
".git/objects/64/4abc4a00e9176e3f13f6af3f339b4237338462": "9b4fac528f0a0891758e82bc29c1f0e8",
".git/objects/64/be6778132276614ac6353f93a0856941194f84": "694d9a96ebe83851621e73f166c7f48f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/0613d54bf3d89e1da03e2ce556d81fd105e741": "c7ee1edbbd9322cd6c399ba7a22c3937",
".git/objects/7a/f7694e4c85ae475389b29c00a88728c56ef95e": "d98d479b8dafa49c60632e6bb3ee3694",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7f/79d093a3e6ee1cae4f1ba34f9b4d71f3e5a3ac": "7e271b16e7d91ab1a2b8d63e23abeaee",
".git/objects/82/3b22c01dbb92a57e98119e04c4498e50c2a1bc": "ccf2d1b9fdb2989bd5d44ab8e73c7aac",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/05ae482fbf28769f895e1a4993e73aa85141a0": "6a6feceddada3c3db154889d0f852b59",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/2e2b5390bfd19b7a74ba2396739c83bda5a894": "46927da4fc1ee1fe43d51acb5c2e0e51",
".git/objects/8f/b7b8754e844f40b672668fada23fd6f6e89d69": "63df1493b1370a9add819b902b6acb40",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/9f/ac4b6883cbb98a323a499bf69e6fb4e643c5ed": "8a5dcbc961be0ff84641b02fadd79873",
".git/objects/a1/3b15953960360f4b640bbed59c21b4f464eb86": "482bea60c5c59ed5c0afb3fc4d32525b",
".git/objects/a2/fc79e563cae3270fb5336eac7a51f9276fbdeb": "ab92726af963c985553e7c82e3810c63",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/aa6720cea94cee202bab50318d9e9e2d3c314b": "8a0c50854fa53bf565e61201d985f1e4",
".git/objects/b0/fdaf5972fbe63e0d3989ca8013d9f72313b1e6": "e575324e3f6602f0e9a2bc01c1e3f6b3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/9fa594a49fdb9e0e88779fc52720ec4e4a134f": "8ac1f3f08a799d603adae0cd338607cd",
".git/objects/b4/37a60ea0446755164065aa6f5d933ff7d73c0b": "8c7ce96eedcd55921930bf9a99d390de",
".git/objects/b7/3585fc0d455e395d2d79e9e0d239c4ee00388d": "6d7f833c355409a8cbf29ef008913054",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/f9be8173b1911f20549274a123affc3571f7e3": "b3161a5525d665e46ee8d30e0c385bbc",
".git/objects/c4/331ff5d70f0679c47f9c6559f3f9a4567248a4": "898516aa94b3731b78eacee201f453aa",
".git/objects/c8/6127dafb29c76f25415943f11499bc9fd20a89": "d79ce6ff140484137852bbb99440bcd6",
".git/objects/cc/5dddb98ec976b59fbb172f3bde32f0d2fe255b": "cb865c72f6802b614f6ba1c00fb2450b",
".git/objects/cf/612b868e482bd0ee2e269813a395090d37a8f1": "f87f1613ce87ca248d5dba3676f0100c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ff61174738642deb827a7a2aa473cd2701e0bf": "15c1ee0fae05f138d7db43dcf5a8e31c",
".git/objects/da/856407581d34a45ff3976728fa3dd45b210523": "6929053a5282f34877800e6f495a2aab",
".git/objects/e7/ccfd160e1b3b645a7efcb18ebe541226120339": "66d9f7e4d411e33fa7d5e4d665fd96a5",
".git/objects/e8/dd4f9465edc743defe5b6a3dcc76de623ab3b8": "1c4bb8c8590ab2334e9d8bbd21d62a34",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ca131243a9ed8783cad17d8b26d35ef11f6f98": "884bde71978daa125bcf5074bbe670ed",
".git/objects/f8/12934d6bc69335ebbe52b17abf8062651bedaa": "47709e2155301dc3bb5caa3ed178c7b1",
".git/objects/f8/5b86783ccedf186d35c546ef90e2388819e74a": "5ae948e57187e2d6df46645a95c76efc",
".git/objects/f8/e2ad003323dc1fc7a8d231b94f092b0b0cc6c9": "8177c249fcbffdcbb0bb3e10305f1599",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fd/15d0567ca545f3db43a889dba34f2341030db1": "51e92f44adef7036fd2ea5979af73b97",
".git/objects/ff/e63cb7a9781251ba237289506dfae8b9fbacf3": "505e518b3bf25b4c1cbc386708054ba4",
".git/objects/pack/pack-31f2bde9cc9a654de5ef41d876dd7713d86732cd.idx": "dece08aef4103bfd9a0b89c67f62d758",
".git/objects/pack/pack-31f2bde9cc9a654de5ef41d876dd7713d86732cd.pack": "ebd4ecd7520bbb3b6899775450d38d32",
".git/objects/pack/pack-31f2bde9cc9a654de5ef41d876dd7713d86732cd.rev": "b48c45626019e750bef5fa38d36d07af",
".git/ORIG_HEAD": "2b656f9458e7168ed01af10443a80b5e",
".git/packed-refs": "c023628bd0c987f3c6c865add40a8f33",
".git/refs/heads/main": "2b656f9458e7168ed01af10443a80b5e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2b656f9458e7168ed01af10443a80b5e",
"assets/AssetManifest.bin": "5d2c0d31c0f944d1cc0a6d9160342446",
"assets/AssetManifest.json": "c030f7c68192f1db0d7102043e2e6ca3",
"assets/assets/fonts/RobotoSlab-Black.ttf": "04fcc44c2ad102db37fa8b919d90f8d1",
"assets/assets/fonts/RobotoSlab-ExtraBold.ttf": "81320c7e624d7078e3185483ffd91b93",
"assets/assets/fonts/RobotoSlab-Regular.ttf": "fbd79c0a409a925126c37459e6f26dff",
"assets/assets/fonts/RobotoSlab-SemiBold.ttf": "ffca0ea6b3f6c8985348a5b4827faf56",
"assets/assets/images/logo_rottas/t_branco.png": "d21c5023e9ba0899b5c5fd060a621a1b",
"assets/assets/images/logo_rottas/t_preto.png": "8114a8a8f745d117b7aa72dab8419b29",
"assets/assets/marker.png": "72e102870642ee0c9dc2dd02205bdf56",
"assets/FontManifest.json": "0b667f22af548b1021f0a704b45bd015",
"assets/fonts/MaterialIcons-Regular.otf": "05609ba6b5affee2d3221dcbc7b33862",
"assets/NOTICES": "50c7d5f2646bfb77b1a1dfeb859b5da8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7fc110fa55074b99f2fd0a7304a2184a",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "10cb6f8a6e4d22f50fb2b6848d717bc1",
"/": "10cb6f8a6e4d22f50fb2b6848d717bc1",
"main.dart.js": "81bee5a980c2f73ad7f3d4179a261d1d",
"manifest.json": "5dfaff965b770f1cd3494257856c9b20",
"README.md": "74172fca646ae2ad5e9a8124123372d5",
"version.json": "9c26663a2054a64f44eee4a77244d07d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
