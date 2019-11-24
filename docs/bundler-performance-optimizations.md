# Bundler Performance Optimizations

**Please note**: this is entirely _optional_, it is only for advanced users and not necessary to use this library.

Using `physijs-webpack` may bulk up your bundle by quite a bit, primarily because `physijs` depends on `ammo.js`, which is roughly ~1.2MB (minified) alone.
While caching of repeated builds will certainly speed up performance by quite a bit, we can use some other optimizations to further improve your bundler's performance.

## noParse

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

## other optimizations

If you are looking to speed up your build even further, you may want to look into configuring `externals` ([webpack](https://webpack.js.org/configuration/externals/)|[browserify](https://github.com/browserify/browserify#bexternalfile)) (and possibly configuring `ignore`s ([webpack](https://webpack.js.org/plugins/ignore-plugin/)|[browserify](https://github.com/browserify/browserify#bignorefile))).

You may also want to apply these same bundler performance optimizations to `three` as well, as it is also a fairly large library.

Please send a PR if you identify any other performance optimizations that you think may be useful to others!
