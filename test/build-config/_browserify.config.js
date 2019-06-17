const browserify = require('browserify')
const exorcist = require('exorcist')
const fs = require('fs')

browserify({
  entries: './test/utils/browserify/_export-to-window.js',
  // don't parse ammo
  noParse: [require.resolve('../../physijs/vendor/ammo.js')],
  // add source maps for coverage reporting
  debug: true
  // don't bundle three
}).external('three')
  .bundle()
  // output source maps as external file
  .pipe(exorcist('./build/browserify.bundle.js.map'))
  .pipe(fs.createWriteStream('./build/browserify.bundle.js'))
