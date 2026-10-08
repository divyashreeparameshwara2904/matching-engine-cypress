const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.matchingengine.com',
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    supportFile: false,
    video: false,
    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
