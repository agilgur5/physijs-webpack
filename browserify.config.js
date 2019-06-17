const browserify = require('browserify')
const fs = require('fs')

browserify({
  entries: './test-utils/browserify/_export-to-window.js',
  // don't parse ammo
  noParse: ['vendor/ammo.js'],
  // don't bundle three
}).external('three')
  .bundle()
  .pipe(fs.createWriteStream('./build/browserify.bundle.js'))
