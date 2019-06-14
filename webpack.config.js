module.exports = {
  module: {
    rules: [{
      test: /physijs_worker\.js$/,
      loader: 'worker-loader',
      // inline the worker as a Blob so no relative URLs
      // so it's compatible with node-fetch/jsdom-worker for testing
      options: { inline: true, fallback: false, name: 'blah' }
    }]
  }
}
