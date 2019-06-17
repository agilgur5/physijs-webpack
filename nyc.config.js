module.exports = {
  exclude: [
    // no physijs code
    './physi.js',
    './physijs_worker.js',
    // no tests or test helpers
    '*.spec.js',
    'test-utils/**'
  ]
}
