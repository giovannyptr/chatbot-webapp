# chatbot-webapp

### Requirement
- Postgres: installaion instruction: https://www.postgresql.org/download/

### Set up


Run:

```
npm install

npx sequelize-cli db:create
npx sequelize-cli db:migrate

npm run dev
```

Branch and commits naming convention:

```
{Jira-ticket}-{commit-or-branch-descriptive-name}
```

To create a model and its migration:
```
npx sequelize-cli model:create --name
```

To create a new migration file:
```
npx sequelize-cli migration:create --name
```

To undo migration:
```
npx sequelize-cli db:migrate:undo:all
```

To drop your database:
```
npx sequelize-cli db:drop 
```


