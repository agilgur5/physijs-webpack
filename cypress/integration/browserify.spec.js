const Physijs = require('../../browserify.js')

describe('browserify', () => {
  it('should create a scene', () => {
    const scene = new Physijs.Scene()
    expect(scene.type).to.eq('Scene')
  })
})
