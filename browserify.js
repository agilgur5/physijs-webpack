var THREE = require('three');
var work = require('webworkify');
var PhysijsWorker = work(require('./physijs_worker.js'));

// inject Three.js and Physijs's Worker
var Physijs = require('./physi.js')(THREE, PhysijsWorker);

module.exports = Physijs;
