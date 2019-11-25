const browserify = require('@cypress/browserify-preprocessor')
const webpack = require('@cypress/webpack-preprocessor')

const ammoPath = require.resolve('../../physijs/vendor/ammo.js')

const bProcess = browserify({
  browserifyOptions: {
    // don't parse ammo
    noParse: [ammoPath],
    // override the preprocessor default (which runs babelify)
    transform: []
  }
})

const wProcess = webpack({
  webpackOptions: {
    // fast builds, build is only used for testing purposes
    mode: 'development',
    // don't parse ammo
    module: {
      noParse: ammoPath,
    }
  }
})

module.exports = (on) => {
  // process webpack test w/ webpack and browserify test w/ browserify
  on('file:preprocessor', (file) => {
    if (file.filePath.includes('webpack.spec.js')) {
      return wProcess(file)
    }
    return bProcess(file)
  })
}
