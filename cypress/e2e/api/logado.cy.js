describe('API - POSTS', () => {

    // let jwt = ''

    before(() => {
        // função de login - arquivo commands.js - Comando customizado 
        cy.login(Cypress.env('email'), Cypress.env('password'))
    })

    after(() => {
        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })
    })

    it('valida todos os posts', () => {
        cy.request({
            method: 'GET',
            url: '/api/posts',
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('valida todos os posts2', () => {
        cy.request({
            method: 'GET',
            url: '/api/posts',

        }).then(({ status }) => {
            expect(status).to.eq(200)
        })

        // Colocar o cookie manualmente
        // headers: {
        // Cookie: `jwt=${jwt}`
        // }
    })
})