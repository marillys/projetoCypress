# Projeto Cypress

<h4 align="center"> 
	🚧  Projeto Cypress Em construção...  🚧
</h4>

### Sobre o Projeto
Primeiros passos utilizando o Cypress. Aulas de Cypress do curso de Formação em Teste de Software da Iterasys, - FTS 135. 
Este projeto conta com exemplos de requisições POST e GET para o endereço https://conexaoqa.herokuapp.com, utilização de cookies, autenticação e inclusão de funções ouvintes.
Além disso, 

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

### Tecnologias
Os seguintes itens foram utilizados:

- Cypress
- Node.js
- JavaSript