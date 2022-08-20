const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportHeight: 1920,
        viewportWidth: 1080,

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
