require('browser-env')()
require('@react-frontend-developer/jsdom-worker')

var Physijs = require('./test-utils/browserify/import-bundle-to-module.js')
console.log(Physijs)

var scene = new Physijs.Scene()
console.log(scene)
