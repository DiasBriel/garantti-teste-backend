# Teste Garantti - Cadastro de Usuários - **Back End**

Foi solicitada a criação de um pequeno sistema que respeitasse as solicitações:
- Listagem
- Cadastro
- Visualização

### Observações:
1. Para facilitar na avaliação, fiz deploy em nuvem do banco de dados MySQL que criei, simplesmente para não ser de que vocês realizem toda a configuração inicial do DB
2. ormconfig.json já está com as credenciais necessárias
3. Em caso de quaisquer dúvidas, estou à disposição para respondê-las. <br/>
4. Desde já, agradeço e espero conseguir atender minimamente o que os senhores esperavam! <br/>

### Arquitetura:

Como se trata de um sistema simples, utilizei a arquitetura de MVC (Model View Controller), pois funciona muito bem nesses casos.

<img src="https://user-images.githubusercontent.com/86886134/155746622-6537d76a-6b32-47bc-9c25-5b1174e4f59b.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="500" height="350" />

## Execução:

Para utilizar o código, basta:

1. Clone este repositório.
2. Execute ``npm install `` para instalar as dependências necessárias.
3. Execute ``npm run start:dev `` para iniciar a aplicação localmente.

Link de deploy da aplicação, para acesso aos endpoints: https://garantti-test-backend.herokuapp.com/

### Endpoints
Para realizar as requisições necessárias, foram criados os seguintes endpoints:
- https://garantti-test-backend.herokuapp.com/user -> GET, irá listar todos os usuários
- https://garantti-test-backend.herokuapp.com/user -> POST, irá listar criar um novo usuário
- https://garantti-test-backend.herokuapp.com/:email-do-usuario -> GET, irá buscar um usuário via Params
- https://garantti-test-backend.herokuapp.com/:id -> PUT, irá atualizar um usuário específico de acordo com o ID (FUNCIONALIDADE NÃO IMPLEMENTADA NO FRONT) <br/>
- https://garantti-test-backend.herokuapp.com/:id -> DELETE, irá deletar um usuário específico de acordo com o ID (FUNCIONALIDADE NÃO IMPLEMENTADA NO FRONT) <br/>

### Postman
Para auxilio da execução dos endpoints, utilizei a ferramente Postman. [site oficial Postman](https://www.postman.com/). <br/>
Requests criadas:

<img src="https://user-images.githubusercontent.com/86886134/155749735-68b4ba75-7129-4f90-8143-c616f948a95f.png" width="300" height="170" />

Para utilizar cada um:
- basta utilizar o endpoint e metodo corretos.

## Git
 - **main**: Branch principal
 - **feature/NomeDaBranch**: Branch para adicionar novas features à aplicação 


## Considerações finais
Mais uma vez agradeço pela oportunidade e espero conseguir atender ao solicitado. Me desculpe qualquer coisa. :) <br/>
**Para acessar o repositório do Front-End da aplicação, [clique aqui](https://github.com/DiasBriel/garantti-teste-frontend)**.

