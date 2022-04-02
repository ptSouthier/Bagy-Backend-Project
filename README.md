# Boas vindas ao repositório do Bagy-Backend-Project!
## Contexto

Este projeto foi um desafio enviado para mim durante o Processo Seletivo na empresa [Bagy](https://www.linkedin.com/company/bagyapp/).
O desafio consiste em escrever uma <b>API GraphQL Node</b> utilizando <b>JavaScript</b> e fazendo conexão a um banco de dados <b>SQLite</b>, desenvolvendo o CRUD de algumas "rotas", simulando uma aplicação simples de e-commerce.

---

## Bibliotecas utilizadas no desenvolvimento:

[graphql-merge-resolvers](https://www.npmjs.com/package/graphql-merge-resolvers)<br>
[graphql-yoga](https://www.npmjs.com/package/graphql-yoga)<br>
[sequelize](https://www.npmjs.com/package/sequelize)<br>
[sqlite](https://www.npmjs.com/package/sqlite)<br>
[nodemon](https://www.npmjs.com/package/nodemon)<br>


---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo orientado, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _patrick.southier@hotmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir** _nome-do-diretório_:
```javascript
  mkdir desafio-backend-bagy
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd desafio-backend-bagy
  git clone git@github.com:ptSouthier/Bagy-Backend-Project.git
```

3. Agora entre no diretório do projeto clonado e rode o comando **npm install** para instalar as dependências do projeto _(não se preocupe, você poderá excluir tudo depois que utilizar o app :nerd_face:)_. 
```javascript
  cd Bagy-Backend-Project
  npm install
```

4. Depois da instalação, basta executar o comando **npm start** para criar o banco de dados e subir o servidor API. _(Caso alguma mensagem de **erro** apareça no seu terminal, verifique se já possui alguma aplicação em execução em seu localhost:4000)_
```javascript
  npm start
```

5. Se em seu terminal apareceu a mensagem _"Connection has been established successfully!"_, significa que o banco de dados e o servidor API está rodando! Abra seu navegador e acesse **localhost:4000** para ter acesso ao Playground do GraphQL. Agora é só escrever suas [requisições GraphQL](https://graphql.org/learn/queries/) 😁


---


## Futuras Melhorias

Refatoração do código atual e implementação dos serviços incompletos.

Acréscimos ao README, como:
  * Área de _Problemas Conhecidos_
  * Exemplos de requisições à _API GraphQL_ do projeto
  * Breve explicação das bibliotecas utilizadas
  * Versão em inglês (uso de seções colapsadas com details e summary)


---
