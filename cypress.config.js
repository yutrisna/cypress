const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',  // Ensure there's no trailing slash
    specPattern: 'cypress/e2e/*.cy.js', // Correct pattern for test files
  },
  projectId: "p8byg8", //connect to Cypress Dashboard
});

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
