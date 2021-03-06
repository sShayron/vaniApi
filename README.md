# Projeto VaniApi
### *REST API usando Node, Express e GraphQL*

## Recursos

✓ Multi-plataforma, desenvolva no macOS, Windows ou Linux  usando [Docker](https://www.docker.com/)<br>
✓ Única dependência do projeto [Docker](https://www.docker.com/) v1.12.5 ou posterior<br>
✓ Autenticação e autorização via [Passport.js]([`src/passport`](./src/passport))<br>
✓ Gerênciamento em cache da sessão com [Redis] (https://redis.io/)<br>
✓ Banco de dados utilizado [PostgreSQL](https://www.postgresql.org/): Migrations ([`migrations`](./migrations))<br>
✓ [GraphQL](http://graphql.org/) Faz a função da ORM, sendo uma linguagem de query baseada em promise<br>
✓ O mesmo processo utilizado pra fazer o build pra local é o usado pra fazer build em produção<br>

## Estrutura de Pastas
```bash
.
├── /build/                     # Arquivos compilados via Babel
├── /migrations/                # Entidades do banco de dados
├── /scripts/                   # Scripts para build automático
├── /src/                       # Código fonte da aplicação
│   ├── /db/                    # Conexão e controladores do banco de dados
│   ├── /routes/                # Definição de rotas da aplicação
│   ├── /types/                 # Modelos das entidades do banco de dados
│   │   ├── /User.js            # Entidade User (id, email, etc.)
│   │   └── /...                # etc.
│   ├── /app.js                 # Aplicação Express.js
│   ├── /passport.js            # Passport.js como forma de autenticação
│   ├── /schema.js              # Entidade GraphQL
│   └── /server.js              # Node.js server (entry point)
├── /test/                      # Teste automatizados
├── .env                        # Configurações de variável de ambiente para desenvolvimento
├── .env.example                # Referência de configurações de variaveis de ambiente
├── docker-compose.yml          # Docker: serviços, networks e volumes
├── Dockerfile                  # Comandos para fazer o build da imagem de docker em produção
├── Dockerfile.dev              # Comandos para fazer o build da imagem de docker em desenvolvimento
├── package.json                # Lista de dependência do projeto
└── yarn.lock                   # Mantém versões fixas para todas depêndencias
```

## Iniciando aplicação
Tenha instalado:
- [Docker](https://www.docker.com/) v1.12.5 ou superior
- [Docker-Compose](https://docs.docker.com/compose/install/)

```bash
$ docker-compose up               # Inicia os containers Docker com aplicação rodando 
```
Sua API estará disponível em [http://localhost:5000/](http://localhost:5000/)

- Uma vez que o container do docker chamado `api` for iniciado, a Docker engine executará: `node scripts/run.js`  comando que instalará as depêndencias do projeto, os migrates dos esquemas do banco de dados para ultima versão, compilar os arquivos do código fonte([`src`](./src)).
- Para abrir uma sessão por terminal dentro do container `api` execute:
```bash
$ docker-compose exec api /bin/sh
```
Nesta sessão poderá rodar scripts de teste `yarn test`, migrate `yarn run db:migrate` e os outros dentro de [`scripts`](./scripts) e [`package.json`](./package.json).

## Testando

```bash
$ yarn run lint                   # Testa padrões do código
$ yarn run check                  # Testa se o código fonte tem erros de tipagem
$ yarn run test                   # Execute testes unitário uma única vez
$ yarn run test:watch             # Executa testes unitários e observer
```

## Deploy

Edite, se necessário, o arquivo `scripts/publish.js` no macOS/Linux ou converta-o para
`publish.cmd` no Windows. Então a única coisa que você precisa pra fazer o deploy para um servidor é um único comando:

```bash
$ /bin/sh scripts/publish.sh      # ou, `scripts/publish.cmd` no Windows
```
