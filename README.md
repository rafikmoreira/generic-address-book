# Generic Address Book API

### Node.js and TypeScript

## CONFIGURAÇÃO ORM PRISMA

### Documentação: https://www.prisma.io/docs/getting-started/quickstart

npx prisma init --datasource-provider sqlite

### Importante

Para construir migrações o comando é
npx prisma migrate ambiente --name nome_migration

Exemplo:

npx prisma migrate dev --name add_email_to_user
Esse comando irá gerar um novo arquivo de migração no diretório root/prisma/migrations
