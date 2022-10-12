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
            // Não tem espera alterada, espera o tempo definido no arquivo cypress.config
            cy.contains('h1','Perfis')
                .should('be.visible')
            
            cy.contains('h1','perfis', { matchCase: false, log: false, timeout:15000 })
                .should('be.visible')

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
            // cy.intercept({
            //    method:'GET',
            //    url: 'api/profile'
            // eslint-disable-next-line
            //}).as('apiPerfil')

            cy.intercept('GET','/api/profile')
                .as('apiPerfil')
            
            cy.visit('/perfis')
                .wait('@apiPerfil')
        })

        it('Valida se a página carregou com espera de spy', () => {

            cy.contains('p','Navegue e conecte-se com outros QAs')
                .should('be.visible')
        })

        it.only('Click no botão Ver Perfil', () => {
            cy.getElement('profile-viewMore')
                .eq(6)
                .click()
        })
    })
})