// webworkify requires one to "export [...] a function [...] with no arguments"
// all code outside of the function will be run in main thread
// quite different from Webpack's worker-loader
module.exports = function init () {
  require('./physijs_worker.js')
}
