describe('Paginação QAs', () => {
    it('Valida 7 perfis', () => {
        cy.intercept('GET','/api/profile',{ fixture: 'paginacao_7_usuarios.json'})
        cy.visit('/perfis')
    })
})