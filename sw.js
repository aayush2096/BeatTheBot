const staticAssests=[
'./',
'./btb.css',
'./app2.js',
'./images/star.png',
'./images/win.png',
'./images/girl.png',
'./images/lost.png'
];

self.addEventListener('install', async event =>{

const cache= await caches.open('game-cache');
cache.addAll(staticAssests);


});

self.addEventListener('fetch', async event=>{

	const req=event.request;
	event.respondWith(cachefirst(req));

});

async function cachefirst(req)
{
	const cacheRes = await caches.match(req);
	return cacheRes || fetch(req);
}
