describe('home page',() => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Valida o título e subtítulo da aplicação', {tags: 'smoke'}, () => {
        cy.get('[data-test=landing-title]')
            .should('exist')
            .and('not.have.class','x-large2')

        cy.contains('portfolio, compartilhe posts e obtenha ajuda da comunidade de QA')
            .should('exist')

        cy.contains('.x-large','QAs')
            .should('exist')
    })

    it.skip('seleciona varios elementos', () => {
        cy.get('a')
            .eq(5)
            .should('have.text', 'Cadastrar')

    })

    it('Seleciona elementos com o find', () => {
        cy.get('.landing')
            .find('h1')
            .should('have.text', 'Conectando QAs ...')
    })

    it.only('Seleciona elementos com o next', () => {
        cy.get('li')
            .eq(0)
            .next()
            .prev()
    })
})