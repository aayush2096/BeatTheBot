const staticAssests=[
'./',
'./btb.css',
'./app2.js'
];

self.addEventListener('install', evvent =>{

const cache= await caches.open('game-cache');
cache.addAll(staticAssests);


});
