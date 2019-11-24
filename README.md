# PhysiJS port for bundlers

<!-- releases / versioning -->
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![releases](https://img.shields.io/github/release/agilgur5/physijs-webpack.svg)](https://github.com/agilgur5/physijs-webpack/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/physijs-webpack/latest.svg)](https://github.com/agilgur5/physijs-webpack/commits/master)
<br><!-- downloads -->
[![dt](https://img.shields.io/npm/dt/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dy](https://img.shields.io/npm/dy/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dm](https://img.shields.io/npm/dm/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dw](https://img.shields.io/npm/dw/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
<br><!-- status / activity -->
[![build status](https://img.shields.io/travis/agilgur5/physijs-webpack/master.svg)](https://travis-ci.org/agilgur5/physijs-webpack)
<br>
[![NPM](https://nodei.co/npm/physijs-webpack.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/physijs-webpack)

A [PhysiJS](https://github.com/chandlerprall/Physijs) port for bundlers with out-of-the-box support for Webpack and Browserify

## Installation

```bash
npm install -S physijs-webpack
```

## Usage

### webpack

```javascript
var Physijs = require('physijs-webpack');
```

and install [`worker-loader`](https://github.com/webpack-contrib/worker-loader) with:

```bash
npm install -D worker-loader
```

### browserify

```javascript
var Physijs = require('physijs-webpack/browserify');
```

and install [`webworkify`](https://github.com/browserify/webworkify) with:

```bash
npm install -D webworkify
```

### other bundlers

See the [webpack.js](webpack.js) and [browserify.js](browserify.js) files for examples as to how one might configure for a different bundler.

## Bundler Performance Optimizations

**Please note**: this section is entirely _optional_, it is only for advanced users and not necessary to use this library.

Using `physijs-webpack` may bulk up your bundle by quite a bit, primarily because `physijs` depends on `ammo.js`, which is roughly ~1.2MB (minified) alone.
While caching of repeated builds will certainly speed up performance by quite a bit, we can use some other optimizations to further improve your bundler's performance.

### noParse

One of these is the `noParse` config option ([webpack](https://webpack.js.org/configuration/module/#modulenoparse)|[browserify](https://github.com/browserify/browserify#usage)) that instructs the bundler to skip parsing of certain files and is usually used as an optimization for large files (like `ammo.js`!).

With `webpack`, this optimization might look like:

```javascript
// ...
module.exports = {
  // ...
  module: {
    // don't parse ammo
    noParse: require.resolve('physijs-webpack/physijs/vendor/ammo.js')
  },
  // ...
}
```

And with the [`browserify` API](https://github.com/browserify/browserify#browserifyfiles--opts), this optimization might look like:

```javascript
const browserify = require('browserify')
// ...

browserify({
  // ...
  // don't parse ammo
  noParse: [require.resolve('physijs-webpack/physijs/vendor/ammo.js')],
  // ...
})
```

### other optimizations

If you are looking to speed up your build even further, you may want to look into configuring `externals` ([webpack](https://webpack.js.org/configuration/externals/)|[browserify](https://github.com/browserify/browserify#bexternalfile)) (and possibly configuring `ignore`s ([webpack](https://webpack.js.org/plugins/ignore-plugin/)|[browserify](https://github.com/browserify/browserify#bignorefile))).

You may also want to apply these same bundler performance optimizations to `three` as well, as it is also a fairly large library.

Please send a PR if you identify any other performance optimizations that you think may be useful to others!

## Credits

Thanks to @silviopaganini for creating the [initial browserify version](https://github.com/silviopaganini/physijs-browserify)!
And of course @chandlerprall for creating [Physijs itself](https://github.com/chandlerprall/Physijs)!

## Misc

Check out [WhitestormJS](https://github.com/WhitestormJS/whs.js) and [its physics integration](https://github.com/WhitestormJS/physics-module-ammonext) for a more modern experience with ThreeJS and physics.
It's modern enough to even have [React](https://github.com/WhitestormJS/react-whs) and [Angular](https://github.com/WhitestormJS/ngx-whs) integrations!
