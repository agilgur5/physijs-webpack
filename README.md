# PhysiJS port for browserify

Include the folder libs on your project, it has `ammo.js` and PhysiJS worker

Usage: 

```
var THREE = require('three');

// inject Three.js
var Physijs = require('physijs-browserify')(THREE);

Physijs.scripts.worker = '/libs/physi-worker.js';
Physijs.scripts.ammo = '/libs/ammo.js';


```

For more info see [https://github.com/chandlerprall/Physijs](https://github.com/chandlerprall/Physijs)

Full example [http://labs.fluuu.id/syn](http://labs.fluuu.id/syn)