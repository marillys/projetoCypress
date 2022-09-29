class LoginPage {

    visitar() {
        cy.visit('/login')
    }

    preencherEmail(valor) {
        cy.getElement('login-email')
            .type(valor)
    }

    preencherSenha(senha) {
        cy.getElement('login-password')
            .type(senha)
    }

    submeter() {
        cy.getElement('login-submit')
            .click()
    }
}

export default LoginPage