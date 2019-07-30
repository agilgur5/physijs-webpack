const browserify = require('browserify')
const fs = require('fs')

browserify({
  entries: './test/utils/browserify/_export-to-window.js',
  // don't parse ammo
  noParse: [require.resolve('../../physijs/vendor/ammo.js')],
  // add inline source maps for jest's coverage reporting
  debug: true
  // don't bundle three
}).external('three')
  .bundle()
  .pipe(fs.createWriteStream('./build/browserify.bundle.js'))
