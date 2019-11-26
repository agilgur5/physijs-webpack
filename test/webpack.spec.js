const Physijs = require('./utils/webpack/_import-bundle-to-module.js')

describe('webpack', () => {
  it('should create a scene', () => {
    const scene = new Physijs.Scene()
    expect(scene.type).toBe('Scene')
  })
})
