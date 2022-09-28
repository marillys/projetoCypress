describe('Cabeçalho home Page', () => {
    before(() => {
        cy.visit('/')
    })

    context('Valida o cabeçalho da area nao logada', () => {
        it('', () => {

            cy.getElement('navbar-conexaoQA')
                .should('have.attr','href','/')
                .and('not.have.attr','target','_blank')

            cy.getElement('navbar-QAs')
                .should('have.attr','href','/perfis')
                .and('not.have.attr','target','_blank')

            cy.getElement('navbar-about')
                .should('have.attr','href','/sobre')
                .and('not.have.attr','target','_blank')

            cy.getElement('navbar-register')
                .should('have.attr','href','/cadastrar')
                .and('not.have.attr','target','_blank')    

            cy.getElement('navbar-login')
                .should('have.attr','href','/login')
                .and('not.have.attr','target','_blank')
        })        
    })
})