const staticAssests=[
'./',
'./btb.css',
'./app2.js'
];

self.addEventListener('install', async event =>{

const cache= await caches.open('game-cache');
cache.addAll(staticAssests);


});
