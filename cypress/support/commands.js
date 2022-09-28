Cypress.Commands.add('login', (email, password2) => 
{
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: {
            email, // quando tem o mesmo nome, não é necessário incluir chave e valor
            password: password2
        }
    }).then(({ status }) => {
        expect(status).to.eq(200)
        Cypress.Cookies.defaults({
            preserve: 'jwt'
        })
    })
})

Cypress.Commands.add('getElement',(seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})