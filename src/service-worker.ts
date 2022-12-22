//Services worker are for offline applications
//See the documentation for service workers: 
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
//All of this is handeld by parcel. 
import { manifest, version } from '@parcel/service-worker';

declare var self: ServiceWorkerGlobalScope;

async function install() {
  const cache = await caches.open(version);
  await cache.addAll(manifest);
}

self.addEventListener('install', e => e.waitUntil(install()));

async function activate() {
  const keys = await caches.keys();
  await Promise.all(
    keys.map(key => key !== version && caches.delete(key))
  );
}

self.addEventListener('activate', e => e.waitUntil(activate()));

export default null;