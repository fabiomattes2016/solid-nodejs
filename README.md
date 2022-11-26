
# Projeto Node/Typescript

Este projeto usa o typeorm como ORM padrão.
Este projeto usa o SOLID como padrão.

Comandos:

Compilar: npm run|yarn compile

Desenvolvimento: npm run|yarn dev

**Produção: npm run|yarn prod

Criar novas migrations: npm run|yarn typeorm migration:generate -d .\src\infra\database\PostgresDataSource.ts .\src\infra\database\migrations\CreateTableUsers

Executar as migrations:npm run|yarn typeorm migration:run -d .\src\infra\database\PostgresDataSource.ts

** Somente depois de compilar


