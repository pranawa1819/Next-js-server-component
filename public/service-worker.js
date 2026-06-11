const CACHE_NAME = "my-site-cache-v1";
const filesToCache = ["/landing-page", "/about-us"];

self.addEventListener("install", (event) => {
  // console.log("Opened Cached");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cached");
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

// Check cache first.
// If found → return cached version.
// Otherwise → fetch from network.

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         console.log("Cache Hit:", event.request.url); //A cache hit happens when the requested data is already available in the cache.
//         return cachedResponse;
//       }
//       console.log("Cache Miss:", event.request.url);   //A cache miss happens when the requested data is not found in the cache.
//       return fetch(event.request).then((networkResponse) => {
//         return caches.open(CACHE_NAME).then((cache) => {
//           cache.put(event.request, networkResponse.clone());
//           return networkResponse;
//         });
//       });
//     }),
//   );
// });

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const cacheRes = res.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(event.request, cacheRes));
        return res;
      })
      .catch(() => caches.match(event.request).then((res) => res)),
  );
});

// Cache only API requests
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname.startsWith("/lib")) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;

        return fetch(event.request).then((response) => {
          const responseClone = response.clone();

          caches.open("api-cache").then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        });
      }),
    );
  }
});
