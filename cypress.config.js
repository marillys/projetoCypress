const { defineConfig } = require('cypress');
const fs = require('fs')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://conexaoqa.herokuapp.com',
        viewportHeight: 1920,
        viewportWidth: 1080,

        // eslint-disable-next-line
        setupNodeEvents(on, config) {
            on('task', {
                // Funções para serem executadas no node
                // listener
                msgConsole() {
                    console.log('teste de mensagem no node')
                    return null
                }, 

                lerPasta(caminho) {
                    return fs.readdirSinc(caminho).length
                }
            })
        },
    },
});
