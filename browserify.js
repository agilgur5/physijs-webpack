var THREE = require('three');
var work = require('webworkify');

// wrap `work` into an ES5 constructor
// webworkify immediately instantiates Worker, unlike Webpack's worker-loader
function PhysijsWorker () {
  return work(require('./browserify-worker-stub.js'));
};

// inject Three.js and Physijs's Worker
var Physijs = require('./physijs/physi.js')(THREE, PhysijsWorker);

module.exports = Physijs;
