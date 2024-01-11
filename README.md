## Este desafio consiste em criar uma API REST para um sistema de cadastro de veículos.
## A API deve ser capaz de:
- [x] Cadastrar um veículo
- [x] Listar os veículos cadastrados
- [x] Buscar um veículo pelo ID
- [x] Atualizar um veículo
- [x] Deletar um veículo

## A API deve estar totalmente cobeerta por testes unitários e de integração.

## Para executar o projeto, basta clonar o repositório e executar o comando:
```bash
docker-compose up -d
```

## Migrações
```bash
knex migrate:latest
```

## Executar os testes
# unitarios
```bash
npm run test:unit
```
# integração
```bash
npm run test:integration
```

