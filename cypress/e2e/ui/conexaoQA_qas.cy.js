describe('Valida a página de QAs', () => {
    
    context('Espera sem intercept', () => {
        beforeEach(() => {
            cy.intercept({ method: 'GET', url: '/api/profile'} , (req) => {
                req.on('response', (res) => {
                    res.setDelay(3000)
                })
            })
            cy.visit('/perfis')
        })
    
        it('Valida se a página carregou com espera de elemento', () => {
            cy.contains('h1','Perfis')
                .should('exist')
    
            cy.log('Mensagem de Teste')
        })
    
        it('Valida se a página carregou com espera de tempo', () => {
            // eslint-disable-next-line
            cy.wait(10000)
            cy.contains('p','Navegue e conecte-se com outros QAs')
                .should('be.visible')
        })
    })

    context('Espera com intercept', () => {

        beforeEach(() => {
            cy.visit('/perfis')
        })
        
        it.only('Valida se a página carregou com espera de spy', () => {

            cy.contains('p','Navegue e conecte-se com outros QAs')
                .should('be.visible')
        })
    })
})