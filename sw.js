// Garde l'appli dans le téléphone pour qu'elle marche sans réseau.
// Changer VERSION à chaque mise à jour pour que les téléphones la récupèrent.
const VERSION = 'bon-dosage-0.9.5';
const FICHIERS = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Réseau d'abord quand il y en a (mises à jour), sinon la copie gardée dans le téléphone
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Compteur de visites : jamais mis en cache
  if (/goatcounter\.com|gc\.zgo\.at/.test(e.request.url)) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copie = r.clone();
      caches.open(VERSION).then(c => c.put(e.request, copie)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
  );
});
