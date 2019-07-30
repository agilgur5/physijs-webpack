module.exports = {
  // don't need to run babel on anything (and browserify bundle will error out if we do)
  transform: {},
  setupFilesAfterEnv: [
    // polyfill worker
    '@react-frontend-developer/jsdom-worker'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/', // default
    'webpack:/node_modules/',
    'webpack:/webpack',
    'webpack:/test-utils/',
    '<rootDir>/test-utils/' // ignore test-utils
  ]
}
