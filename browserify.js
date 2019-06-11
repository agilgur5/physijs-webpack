class work {
	constructor(){
		const work = require('webworkify');
		return work;
	}
}

const THREE = require('three'),
	  PhysijsWorker = new work(require('./physijs_worker.js')),
	  
	  // inject Three.js and Physijs's Worker
	  Physijs = require('./physi.js')(THREE, PhysijsWorker);

module.exports = Physijs;
