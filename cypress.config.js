const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://coffee-cart.app',
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      require('./cypress/plugins/index')(on, config);
      return config;
    }
  }
});
