# PhysiJS port for bundlers

## Usage

### webpack

```javascript
var Physijs = require('physijs-webpack');
```

and install `worker-loader` with:

```bash
npm install -D worker-loader
```

### browserify

```javascript
var Physijs = require('physijs-webpack/browserify');
```

and install `webworkify` with:

```bash
npm install -D webworkify
```

### other bundlers

See the [webpack.js](webpack.js) and [browserify.js](browserify.js) files for examples as to how one might configure for a different bundler.

## Credits

Thanks to @silviopaganini for creating the [initial browserify version](https://github.com/silviopaganini/physijs-browserify)!
And of course @chandlerprall for creating [Physijs itself](https://github.com/chandlerprall/Physijs)!

## Misc

Check out [WhitestormJS](https://github.com/WhitestormJS/whs.js) and [its physics integration](https://github.com/WhitestormJS/physics-module-ammonext) for a more modern experience with ThreeJS and physics.
It's modern enough to even have [React](https://github.com/WhitestormJS/react-whs) and [Angular](https://github.com/WhitestormJS/ngx-whs) integrations!
