const Physijs = require('../../webpack.js')

describe('webpack', () => {
  it('should create a scene', () => {
    const scene = new Physijs.Scene()
    expect(scene.type).to.eq('Scene')
  })
})
