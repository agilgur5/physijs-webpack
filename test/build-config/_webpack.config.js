const path = require('path')

module.exports = {
  entry: './test/utils/webpack/_export-to-window.js',
  output: {
    path: path.join(process.cwd(), '/build/'),
    filename: 'webpack.bundle.js',
    library: 'Physijs',
    libraryTarget: 'umd'
  },
  // fast builds, build is only used for testing purposes
  mode: 'development',
  // don't bundle three
  externals: /^three$/,
  // don't parse ammo
  module: {
    noParse: require.resolve('../../physijs/vendor/ammo.js')
  },
  // source maps needed for test coverage reporting
  devtool: 'source-map'
}
