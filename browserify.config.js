const browserify = require('browserify')
const fs = require('fs')

browserify({
  entries: './test-utils/browserify/_export-to-window.js',
}).bundle()
  .pipe(fs.createWriteStream('./build/browserify.bundle.js'))
