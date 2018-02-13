
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
