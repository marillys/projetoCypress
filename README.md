# Projeto Cypress

<h4 align="center"> 
	🚧  Projeto Cypress Em construção...  🚧
</h4>

### Sobre o Projeto
Primeiros passos utilizando o Cypress. Aulas de Cypress do curso de Formação em Teste de Software da Iterasys, - FTS 135. 
Este projeto conta com exemplos de requisições POST e GET para o endereço https://conexaoqa.herokuapp.com, utilização de cookies, autenticação e inclusão de funções ouvintes.
Além disso, possui também testes de interface.
Interceptar o resultado de uma API, modifica-la e exibir o resultado modificado.
Validar se um elemento some da tela em determinado tempo usando o clock() e o tick().
Documentação dos comandos customizados (arquivo index.d.ts)

### Features
O que já foi feito, funcionalidades:
- [x] Realizar requisições POST e GET;
- [X] Capturar o token do usuário logado e guardar o valor para ser usado em testes posteriores;
- [X] Validação de um perfil de usuário;
- [X] Ler variáveis de ambientes do sistema operacional através de tasks(observar arquivo: cypress.config.js);
- [X] Limpar os cookies ao final dos testes;

### Pré-requisitos

- Instalar o node;
- Instalar o Cypress;
- Incluir o arquivo cypress.env.json contendo as credenciais para acessar a API. Observe o exemplo abaixo:
``` Json
{
    "email": "email", 
    "password": "senha"
} 
```

### Executando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/marillys/projetoCypress>

# Acesse a pasta do projeto no terminal/cmd
$ cd projetoCypress

# Abra o cypress
$ npx cypress open

# O Cypress abrirá e o terminal ficará bloqueado
```
### Estrutura
- cypress/e2e/api/ -> Contém os exemplos de testes de API;
- cypress/e2e/nodejs/ -> Contém os exemplos de task, funções para manipular informações fora do browser;
- cypress/e2e/ui/ -> Contém testes para validar as telas da aplicação.

### Tecnologias
Os seguintes itens foram utilizados:

- Cypress
- Node.js
- JavaSript

Pular teste, use o .skip nos testes

```js
it.skip('seleciona varios elementos', () => {
        cy.get('a')
            .eq(5)
            .should('have.text', 'Cadastrar')

    })
```
Rodar determinado teste, use o .only

````js
it.only('seleciona varios elementos', () => {
        cy.get('a')
            .eq(5)
            .should('have.text', 'Cadastrar')

    })
````

Pegar um elemento posterior ao 0 - usa o next
````js
 it.only('Seleciona elementos com o next', () => {
        cy.get('li')
            .eq(0)
            .next()
    })
````

Pegar um elemento anterior ao 0 - usa o next
````js
 it.only('Seleciona elementos com o next', () => {
        cy.get('li')
            .eq(0)
            .next()
            .prev()
    })
````

Validar o valor de um atributo

````js
cy.get('[data-test="navbar-conexaoQA"]')
            .should('have.attr','href','/')
````

Comandos customizados são incluídos no arquivo commands.js
````js
Cypress.Commands.add('getElemet',(seletor) => {
    return cy.get(`[data-test=${seletor}]`)
})
````

interagir com elementos de um array
````js
cy.get('.paginationBttns li')
            .should('have.length', RESULTADO_ESPERADO.length)
            .each((el, index) => {
                cy.wrap(el)
                    .should('have.text', RESULTADO_ESPERADO[index])
            })
````