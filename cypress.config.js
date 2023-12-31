const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    baseUrl: "https://hatstore.co.uk/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
