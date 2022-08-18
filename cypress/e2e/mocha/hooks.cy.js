describe('DESCRIBE - testes do site Iterasys', () => {
    
    before(() => {
        // Executado uma unica vez, antes do primeiro teste
        cy.log('DESCRIBE - BEFORE ALL')
    })

    beforeEach(() => 
    {
        // Chamdo antes de cada teste
        cy.log('DESCRIBE - BEFORE EACH')
    })
    
    after(() => {
        cy.log('DESCRIBE - AFTER ALL')
    })

    afterEach(() => {
        cy.log('DESCRIBE - AFTER EACH')
    })

    context('CONTEXT - pagina inicial', () => {
        before(() => {
            cy.log('CONTEXT 1 - Before all - ')
        })

        // crio testes em cypress com o it
        it('meu primeiro teste', () => {
            // cy.visit('https://iterasys.com.br/pt')
            cy.log('meu primeiro teste')
        })

        it('meu segundo caso de teste', () => {
            cy.log('meu segundo teste')
        });
    })

    context('CONTEXT - cursos', () => {
        before(() => {
            cy.log('Context 2 - BEFORE all')
        })

        it('Meu terceiro teste', () => {
            cy.log('terceiro teste')
        })
    })
});
