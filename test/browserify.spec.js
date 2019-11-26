const Physijs = require('./utils/browserify/_import-bundle-to-module.js')

describe('browserify', () => {
  it('should create a scene', () => {
    const scene = new Physijs.Scene()
    expect(scene.type).toBe('Scene')
  })
})
