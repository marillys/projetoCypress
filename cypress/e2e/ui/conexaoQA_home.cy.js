describe('home page',() => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Valida o título e subtítulo da aplicação', () => {
        cy.get('[data-test=landing-title]')
            .should('exist')
    })
})