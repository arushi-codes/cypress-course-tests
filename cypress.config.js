const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeFiles(on, config) {},
    pageLoadTimeout: 120000,
  },
});