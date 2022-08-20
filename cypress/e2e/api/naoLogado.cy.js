describe('API - Profile', () => {
    context('todos os perfis', () => {
        it('Valida api de perfis', () => {
            cy.request({
                method: 'GET',
                url: '/api/profile'
            })
        })
    })
})