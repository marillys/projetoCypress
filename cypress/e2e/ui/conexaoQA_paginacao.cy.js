describe('Paginação QAs', {tags: '@regressao'}, () => {

    const paginacao = () => cy.get('.paginationBttns li')
    const URL_API = '/api/profile'
    const URL_METHOD = 'GET'
    const validarPaginas = (RESULTADO_ESPERADO) => {
        paginacao()
            .should('have.length', RESULTADO_ESPERADO.length)
            .each((el, index) => {
                cy.wrap(el)
                    .should('have.text', RESULTADO_ESPERADO[index])
            })
    }

    it('Valida 7 perfis', () => {
        cy.intercept(URL_METHOD, URL_API, { fixture: 'paginacao_7_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        paginacao()
            .should('not.exist')
    })

    it('Valida 8 perfis', () => {
        cy.intercept(URL_METHOD, URL_API, { fixture: 'paginacao_8_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '>']

        validarPaginas(RESULTADO_ESPERADO)
    })

    it('Valida 63 perfis', () => {
        cy.intercept(URL_METHOD, URL_API, { fixture: 'paginacao_63_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '3', '4', '5', '6', '7', '8', '9', '>']

        validarPaginas(RESULTADO_ESPERADO)
    })

    it('Valida 64 perfis', () => {
        cy.intercept(URL_METHOD, URL_API, { fixture: 'paginacao_64_usuarios.json' })
            .as('perfis')

        cy.visit('/perfis')
            .wait('@perfis')

        const RESULTADO_ESPERADO = ['<', '1', '2', '3', '4', '5', '6', '...', '8', '9', '10', '>']

        validarPaginas(RESULTADO_ESPERADO)
    })

    ;[
        {fixture: 'paginacao_8_usuarios', resultadoEsperado: ['<', '1', '2', '>']},
        { fixture: 'paginacao_63_usuarios', resultadoEsperado: ['<', '1', '2', '3', '4', '5', '6', '7', '8', '9', '>']},
        { fixture: 'paginacao_64_usuarios', resultadoEsperado: ['<', '1', '2', '3', '4', '5', '6', '...', '8', '9', '10', '>']}
    ].forEach(({fixture,resultadoEsperado}) => {
        it(`Valida a ${fixture}`, () => {
            cy.intercept(URL_METHOD, URL_API, { fixture })
                .as('perfis')

            cy.visit('/perfis')
                .wait('@perfis')

            validarPaginas(resultadoEsperado)
        })
    })
})