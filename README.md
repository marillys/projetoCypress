# Projeto Cypress

<h4 align="center"> 
	🚧  Projeto Cypress Em construção...  🚧
</h4>

### Sobre o Projeto
Primeiros passos utilizando o Cypress. Aulas do curso de Formação em Teste de Software da Iterasys, - FTS 135. 
Este projeto conta com exemplos de requisições POST e GET para o endereço https://conexaoqa.herokuapp.com, utilização de cookies, autenticação e inclusão de funções ouvintes.

### Features
O que já foi feito, funcionalidades:
- [x] Consultar todos os Posts
- [X] Capitular o token do usuário logado
- [X] Validação de um perfil de usuário
- [X] Consultar um usuário inválido
- [X] Consultar usuário válido

### Pré-reqisitos

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

### Tecnologias
Os seguintes itens foram utilizados:

- Cypress
- Node.js
- JavaSript