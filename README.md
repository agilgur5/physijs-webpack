# PhysiJS port for bundlers

## Installation

```bash
npm install -S agilgur5/physijs-webpack
```

This will install from this repo.
Why not an NPM package?

Because the existing `physijs` and `physijs-webpack` packages are not owned by me... :/
They do apparently refer back to this repo, but were created when this repo was in an incomplete and broken state some years ago; they never worked to begin with as a result.
See also [this Twitter thread](https://twitter.com/_drewpowers/status/907719141213200385).

I'll see if I can get ownership of those NPM packages somehow. TBD.

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
