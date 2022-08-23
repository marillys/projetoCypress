describe('Teste do cypress.config.js', () => {

    it('teste de mensagem no console - browser', () => {
        console.log('teste de mensagem no browser')
    })

    it.only('teste de task', () => {
        cy.task('msgConsole')
    })

    it('conta o total de arquivos da pasta API', () => {
        // Lê pasta
        cy.task('lerPasta', 'cypress/e2e/api')
            .then(variavel => {
                cy.log(`Quantidade de arquivos: ${variavel}`)
            })
    })

    it('conta o total de arquivos da pasta NODEJS', () => {
        cy.task('lerPasta', 'cypress/e2e/nodejs')
            .then(totalArquivos => {
                cy.log(`Quantidade de arquivos: ${totalArquivos}`)
            })
            
    })
})