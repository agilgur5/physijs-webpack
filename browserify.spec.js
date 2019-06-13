import test from 'ava'

import Physijs from './test-utils/browserify/_import-bundle-to-module.js'

test('Scene creation', t => {
  const scene = new Physijs.Scene()
  t.is(scene.type, 'Scene')
})
