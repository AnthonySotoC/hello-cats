[![Strict TypeScript Checked](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)](https://www.typescriptlang.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# NEST GRAPHQL API

### Tech

- [NestJS](https://docs.nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)

### Getting started

- Docker is required to run this project locally
  Download it on: https://www.docker.com/get-started
- Create the .env file:

```sh
cd <project-name>
cp .env.dev .env
```

- Install dependencies and run the project:

```sh
yarn install
yarn run dev
```

### Project structure

```
Project Root/
│
├── dist
├── node_modules/
├── src/
│   └── api/ # DESCRIPTION
│   └── shared/ # DESCRIPTION
├── test
├── .env.development
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

### Unit Tests

- To run the unit tests execute the following script:

```sh
$/ yarn test-watch
```

- The test-watch script runs jest --coverage, which generates a html coverage report. To view this report go to the coverage folder, then open the Icov-report folder, and finally open the index.html file.
