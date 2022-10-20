import LoginPage from '../../pageObjects/LoginPage'
describe('Alertas', () => {
    const login = new LoginPage()

    it('Valida o alerta de senha inválida', {tags: 'smoke'}, () => {
        cy.clock()

        login.visitar()
        login.preencherEmail('emailinvalido@teste.com')
        login.preencherSenha('ertytt')
        login.submeter()

        cy.getElement('alert')
            .should('exist')
            .should('have.text','Credenciais inválidas')

        cy.tick(10000)

        cy.getElement('alert')
            .should('not.exist')
    })
})