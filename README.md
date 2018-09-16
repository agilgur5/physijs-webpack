# PhysiJS port for bundlers

## Usage

### webpack

```javascript
var THREE = require('three');
var PhysijsWorker = require('worker-loader!physijs-webpack/physijs_worker.js');

// inject Three.js and Physijs's Worker
var Physijs = require('physijs-webpack')(THREE, PhysijsWorker);
```

and install `worker-loader` with:

```bash
npm install -D worker-loader
```

### browserify

```javascript
var THREE = require('three');
var work = require('webworkify');
var PhysijsWorker = work(require('physijs-webpack/physijs_worker.js'));

// inject Three.js and Physijs's Worker
var Physijs = require('physijs-webpack')(THREE, PhysijsWorker);
```

and install `webworkify` with:

```bash
npm install -D webworkify
```

## Credits

Thanks to @silviopaganini for creating the [initial browserify version](https://github.com/silviopaganini/physijs-browserify)!
And of course @chandlerprall for creating [Physijs itself](https://github.com/chandlerprall/Physijs)!
