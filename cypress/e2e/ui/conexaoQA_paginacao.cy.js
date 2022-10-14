describe('Paginação QAs', () => {
    it('Valida 7 perfis', () => {
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_7_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        cy.get('.paginationBttns li')
            .should('not.exist')
    })

    it('Valida 8 perfis', () => {
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_8_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '>']

        cy.get('.paginationBttns li')
            .should('have.length', RESULTADO_ESPERADO.length)
            .each((el, index) => {
                cy.wrap(el)
                    .should('have.text', RESULTADO_ESPERADO[index])
            })
    })

    it('Valida 63 perfis', () => {
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_63_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '3', '4', '5', '6', '7', '8', '9', '>']

        cy.get('.paginationBttns li')
            .should('have.length', RESULTADO_ESPERADO.length)
            .each((el, index) => {
                cy.wrap(el)
                    .should('have.text', RESULTADO_ESPERADO[index])
            })
    })

    it('Valida 64 perfis', () => {
        cy.intercept('GET', '/api/profile', { fixture: 'paginacao_64_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '3', '4', '5', '6', '...', '8', '9', '10', '>']

        cy.get('.paginationBttns li')
            .should('have.length', RESULTADO_ESPERADO.length)
            .each((el, index) => {
                cy.wrap(el)
                    .should('have.text', RESULTADO_ESPERADO[index])
            })
    })
})