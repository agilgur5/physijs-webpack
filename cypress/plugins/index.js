const browserify = require('@cypress/browserify-preprocessor')
const webpack = require('@cypress/webpack-preprocessor')
const codeCovTask = require('@cypress/code-coverage/task')

const ammoPath = require.resolve('../../physijs/vendor/ammo.js')

const bProcess = browserify({
  browserifyOptions: {
    // don't parse ammo
    noParse: [ammoPath],
    debug: true, // inline source maps
    // add babelify solely for usage of babel-plugin-istanbul
    transform: [['babelify', {
      ignore: [/ammo/, /three/], // this is an EXPONENTIAL speed up
      ast: false,
      babelrc: false,
      plugins: ['istanbul'] // instrument with istanbul
    }]]
  }
})

const wProcess = webpack({
  webpackOptions: {
    // fast builds, build is only used for testing purposes
    mode: 'development',
    // don't parse ammo
    module: {
      noParse: ammoPath,
      rules: [{
        test: /\.js$/,
        use: { loader: 'istanbul-instrumenter-loader' },
        exclude: [/ammo/, /three/] // this is an EXPONENTIAL speed up
      }]
    },
    // sourcemaps for coverage reporting
    devtool: 'inline-cheap-source-map'
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

  on('task', codeCovTask)
}
