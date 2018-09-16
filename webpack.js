var THREE = require('three');
var PhysijsWorker = require('worker-loader!./physijs_worker.js');

// inject Three.js and Physijs's Worker
var Physijs = require('./physi.js')(THREE, PhysijsWorker);

module.exports = Physijs;
