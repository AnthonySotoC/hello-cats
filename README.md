[![Strict TypeScript Checked](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# NEST GRAPHQL API

## Tech

- [NestJS](https://docs.nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)

## Getting started

- Installation

```bash
$ npm install
```

- Create the .env file

```sh
cd <project-name>
cp .env.development
```

- Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Project structure

```
Project Root/
│
├── dist/
├── node_modules/
├── src/
│   └── api/ # DESCRIPTION
│   └── shared/
│       └── config/ # DESCRIPTION
│       └── datasource/
│       └── modules/
│           └── dataloader/ # Resolve the N+1 problem with graphql
├── test
├── .env.example # example of how the env file have to look like
├── .env.test
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package.json
├── README.md
├── schema.gql
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json
```

- Author - Anthony Soto Córdoba
