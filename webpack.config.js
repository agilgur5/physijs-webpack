const path = require('path')

module.exports = {
  entry: './test-utils/webpack/_export-to-window.js',
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'webpack.bundle.js'
  },
  // fast builds, build is only used for testing purposes
  mode: 'development'
}
