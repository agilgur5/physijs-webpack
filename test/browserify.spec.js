const Physijs = require('./utils/browserify/_import-bundle-to-module.js')

test('Scene creation', () => {
  const scene = new Physijs.Scene()
  expect(scene.type).toBe('Scene')
})
