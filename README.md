# PhysiJS port for webpack

Usage:

```javascript
var THREE = require('three');
var PhysijsWorker = require('worker-loader!physijs-webpack/physijs_worker.js');

// inject Three.js and Physijs's Worker
var Physijs = require('physijs-webpack')(THREE, PhysijsWorker);
```

Thanks to @silviopaganini for creating the [initial browserify version](https://github.com/silviopaganini/physijs-browserify)!
And of course @chandlerprall for creating [Physijs itself](https://github.com/chandlerprall/Physijs)!
