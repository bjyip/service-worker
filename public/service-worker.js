const CACHE_NAME = 'v1'
const CACHE_FILES = [
  '/',
  'index/html',
  '/static/logo.png',
  '/static/app.css',
  '/static/app.js',
  '/favicon.ico',
  '/js/app.js'
]

self.addEventListener('install', function (event) {
  console.log('caches', caches)
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_FILES)
    }).then(() => {
      console.log('install')
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (CACHE_NAME !== key) {
            return caches.delete(key)
          }
        })
      )
    }).then(() => {
      console.log('activate')
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) { // 命中缓存
        console.log('命中缓存：', event.request.url)
        return response
      }
      console.log('未命中缓存：', event.request.url)
      return fetch(event.request)
    })
  )
})
