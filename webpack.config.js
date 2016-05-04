// webpack.config.js

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    header: './src/physi.js',
  },
  output: {
    path: './build',
    publicPath: './build', // used to generate URLs to workers
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  resolve: {
    root: path.resolve('./'), // allow libs/... to resolve
    extensions: ['', '.js']
  }
}
