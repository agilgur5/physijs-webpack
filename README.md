# PhysiJS port for bundlers

[//]: # (releases / versioning)
[![package-json](https://img.shields.io/github/package-json/v/agilgur5/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![releases](https://img.shields.io/github/release/agilgur5/physijs-webpack.svg)](https://github.com/agilgur5/physijs-webpack/releases)
[![commits](https://img.shields.io/github/commits-since/agilgur5/physijs-webpack/latest.svg)](https://github.com/agilgur5/physijs-webpack/commits/master)

[//]: # (downloads)
[![dt](https://img.shields.io/npm/dt/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dy](https://img.shields.io/npm/dy/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dm](https://img.shields.io/npm/dm/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)
[![dw](https://img.shields.io/npm/dw/physijs-webpack.svg)](https://npmjs.org/package/physijs-webpack)

[//]: # (status / activity)
[![build status](https://img.shields.io/travis/agilgur5/physijs-webpack.svg)](https://travis-ci.org/agilgur5/physijs-webpack)

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
