
# Projeto Node/Typescript

Este projeto usa o typeorm como ORM padrão.
Este projeto usa o SOLID como padrão.

Comandos:

Compilar: npm run compile

Desenvolvimento: npm run dev

**Produção: npm run prod

Criar novas migrations: yarn typeorm migration:generate -d .\src\infra\database\PostgresDataSource.ts .\src\infra\database\migrations\CreateTableUsers

Executar as migrations: yarn typeorm migration:run -d .\src\infra\database\PostgresDataSource.ts

** Somente depois de compilar


