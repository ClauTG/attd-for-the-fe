var config = require('./config')
var apiKey = config.apiKeyApplitools

module.exports = {
  testConcurrency: 1,
  apiKey: apiKey,
  batchName: 'TAU Todo App',
  browser: [
    { width: 800, height: 600, name: 'chrome' },
    { deviceName: 'Pixel 2', screenOrientation: 'portrait' },
  ],
};
