module.exports = {
  runner: '@jest-runner/electron',
  testEnvironment: '@jest-runner/electron/environment',
  // don't need to run babel on anything
  // (and browserify bundle takes very long and sometimes errors out if we do)
  transform: {}
}
