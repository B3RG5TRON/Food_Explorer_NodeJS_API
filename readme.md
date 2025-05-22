<p align="center"><img src="https://raw.githubusercontent.com/gist/B3RG5TRON/cd3fe42f3def995f9f073ec0cad621e3/raw/ac6ceae7c24c859342521162b46b6c3b552d4639/foodExplorerLogo.svg" alt="Food Explorer Logo" />
</p>

<!-- [![Deploy Status](SEU_BADGE_DEPLOY_AQUI)](COLAR_LINK) -->

## 📑 Índice

- [Sobre a API](#sobre-a-api)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como Utilizar](#como-utilizar)
- [Front-end](#front-end)
- [Licença](#licença)
- [Contato](#contato)

## 💡 Sobre a API

A API do Food Explorer foi desenvolvida para fornecer todos os recursos necessários à aplicação web, permitindo o gerenciamento eficiente de usuários, pratos, pedidos e favoritos. Construída com foco em performance, segurança e escalabilidade, ela garante uma experiência robusta tanto para clientes quanto para administradores do sistema.

## 🚀 Funcionalidades

- Cadastro e autenticação de usuários (JWT)
- Gerenciamento de pratos (CRUD)
- Upload de imagens de pratos
- Favoritar/desfavoritar pratos
- Gerenciamento de pedidos e status
- Consulta de pedidos por usuário ou administrador

## 🛠️ Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [Node.js](https://nodejs.org/): Ambiente de execução robusto para JavaScript no lado do servidor, proporcionando alta performance e escalabilidade.
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem de programação dinâmica e versátil, utilizada em toda a aplicação para garantir flexibilidade e produtividade.
- [express (v4.18.2)](https://expressjs.com/): Framework web minimalista e eficiente para Node.js, facilitando a criação de APIs e aplicações web.
- [express-async-errors (v3.1.1)](https://www.npmjs.com/package/express-async-errors): Middleware que simplifica o tratamento de erros em rotas assíncronas, tornando o código mais limpo e seguro.
- [Nodemon](https://nodemon.io/): Ferramenta que monitora alterações no código-fonte e reinicia automaticamente o servidor durante o desenvolvimento, agilizando o workflow.
- [sqlite (v5.1.1)](https://www.npmjs.com/package/sqlite) & [sqlite3 (v5.1.6)](https://www.npmjs.com/package/sqlite3): Banco de dados leve e eficiente, ideal para aplicações de pequeno a médio porte e para ambientes de desenvolvimento.
- [knex (v3.0.1)](https://knexjs.org/): Query builder SQL para Node.js, que facilita a construção, manutenção e portabilidade de consultas em bancos de dados relacionais.
- [bcryptjs (v2.4.3)](https://www.npmjs.com/package/bcryptjs): Biblioteca para hash e verificação de senhas, garantindo a segurança dos dados dos usuários.
- [jsonwebtoken (v9.0.2)](https://jwt.io/): Implementação de autenticação baseada em tokens JWT, proporcionando sessões seguras e escaláveis.
- [cookie-parser (v1.4.6)](https://www.npmjs.com/package/cookie-parser): Middleware para leitura e manipulação de cookies, facilitando o gerenciamento de sessões e autenticação.
- [multer (v1.4.5-lts.1)](https://github.com/expressjs/multer): Middleware para upload e gerenciamento de arquivos, essencial para o envio de imagens dos pratos.
- [cors (v2.8.5)](https://expressjs.com/en/resources/middleware/cors.html): Middleware que habilita o compartilhamento de recursos entre diferentes origens, permitindo integração segura entre front-end e back-end.
- [dotenv (v16.3.2)](https://github.com/motdotla/dotenv): Gerenciador de variáveis de ambiente, proporcionando configuração flexível e segura para diferentes ambientes.
- [pm2 (v5.3.1)](https://pm2.keymetrics.io/): Gerenciador de processos para Node.js, garantindo alta disponibilidade, monitoramento e fácil gerenciamento em produção.

## 📝 Como Utilizar

Clone o projeto:

```bash
git clone https://github.com/B3RG5TRON/Food_Explorer_NodeJS_API.git
```

Entre na pasta do projeto:

```bash
cd Food_Explorer_NodeJS_API
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` com as configurações necessárias (exemplo abaixo ou localizado no arquivo '.env.example'):

```env
PORT=3333
AUTH_SECRET="default"
```

Execute as migrations:

```bash
npx knex migrate:latest
```

Inicie o servidor:

```bash
npm run dev
```

A API estará disponível em:  
`http://localhost:3333`

## 🔗 Front-end

Acesse: [https://github.com/B3RG5TRON/Food_Explorer_ReactJS.git](https://github.com/B3RG5TRON/Food_Explorer_ReactJS.git)

## 📄 Licença

MIT © Eduardo Bergstron

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📬 Contato

Fique à vontade para entrar em contato para dúvidas, sugestões ou oportunidades de colaboração!

[![LinkedIn](https://img.shields.io/badge/-Eduardo%20Bergstron-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardo-bergstron-986108143/)](https://www.linkedin.com/in/eduardo-bergstron-986108143/)