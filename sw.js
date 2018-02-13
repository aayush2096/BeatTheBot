
const staticAssets=[
"./",
"./btb.css",
"./app2.js"
];

self.addEventListener('install', async function()
{

	const cache = await caches.open('game-static');
	cache.addAll(staticAssets);
});
self.addEventListener('fetch', async event=>{
	const req=event.request;
	event.respondWith(cachefirst(req));

});

async function cachefirst(req)
{
	const cacheresponse=await caches.match(req);
	return cacheresponse || fetch(req);
}
