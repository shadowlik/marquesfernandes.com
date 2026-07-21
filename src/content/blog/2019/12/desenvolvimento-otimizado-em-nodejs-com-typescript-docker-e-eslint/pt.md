---
title: Desenvolvimento otimizado em NodeJS com Typescript, Docker e ESlint
description: Esse artigo foi inspirado pela minha própria frustração em otimizar
  o meu setup  NodeJS com Typescript e Docker. Ao final desse tutorial você terá
  um ambiente de desenvolvimento NodeJS com Typescript, ts-node-dev, Docker,
  ESlint com Airbnb Style Guide e Prettier.
date: 2019-12-11T10:44:09.000Z
lang: pt
translationKey: desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint
slug: desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint
category: desenvolvimento
tags:
  - nodejs
  - typescript
  - eslint
  - docker
wpId: 6690
cover: ./2019-12-node-typescript-eslint-docker.jpg
canonicalPath: /desenvolvimento/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/
needsReview: false
updated: 2019-12-11T18:42:16.000Z
---

Esse artigo foi inspirado pela minha própria frustração em otimizar o meu setup NodeJS com Typescript e Docker. A maioria dos processos e tutoriais levam a configurações que tornam o desenvolvimento cansativo e lento, entre tantas recompilações e reinicializações sua paciência acaba e sua produtividade vai por água abaixo. Após muita pesquisa, testes e estresse, consegui montar uma configuração ideal!

É necessário que você tenha pelo menos o conhecimento básico de node, typescript e docker, não explicarei nenhuma tecnologia a fundo, se tiverem alguma dúvida específica ficarei feliz em ajudar nos comentários.

Ao final desse tutorial você terá um ambiente de desenvolvimento [NodeJS](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs) com [Typescript](https://www.npmjs.com/package/typescript), [ts-node-dev](https://github.com/whitecolor/ts-node-dev), [Docker](https://www.docker.com/), [ESlint](https://eslint.org/) com [Airbnb Style Guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript) e [Prettier](https://prettier.io/).

Todos os códigos desse tutorial estão disponíveis no [GitHub](https://github.com/shadowlik/node-ts-otimizado).

Na primeira parte do artigo vamos configurar a nossa IDE [Visual Studio Code](https://code.visualstudio.com/) para o desenvolvimento, fique a vontade para pular essa parte caso você utilize outra IDE.

## Configurando o [VS Code](https://code.visualstudio.com/download)

Primeiro vamos criar uma pasta vazia para o nosso projeto e iniciar o VS Code nela:

$ mkdir node-ts-otimizado && code node-ts-otimizado/

### Extensões úteis do VS Code

Recomendo a instalação das extensões listadas abaixo, elas vão dar um boost na sua produtividade:

-   [Latest TypeScript and Javascript Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.typescript-javascript-grammar) - Extensão da Microsoft para suporte de Typescript e Javascript
-   [Typescript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) - Organiza os imports do typescript
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integração do ESLint diretamente na IDE
-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Integração do Prettier diretamente na IDE
-   [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) \- Para autocomplete, destaque de código e comandos do Docker
-   [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - Esse não é necessário, mas eu gosto dos ícones bonitinhos e quis compartilhar

### Configurando o [Workspace](https://code.visualstudio.com/docs/getstarted/settings)

Dentro do seu projeto, caso ainda não exista, crie uma pasta `.vscode` e nela o arquivo `settings.json`. Adicione as seguintes propriedades:

{
  "eslint.autoFixOnSave":  true,
  "eslint.validate":  \[
    "javascript",
    {"language":  "typescript",  "autoFix":  true  },
  \],
  "editor.formatOnSave":  true,
  "\[javascript\]":  {
    "editor.formatOnSave":  false,
  },
  "\[typescript\]":  {
    "editor.formatOnSave":  false,
  }
}

Isso habilita automaticamente o auto-corretor do ESlint e Prettier ao se salvar algum arquivo.

## Inicializando um projeto NodeJS

Agora precisamos inicializar um projeto node:

$ cd node-ts-otimizado && npm init

Dentro do projeto vamos criar uma pasta `src/`, é nela que vamos colocar todos os nossos arquivos fontes `.ts`. Aproveite e crie um arquivo vazio com o nome `index.ts`, usaremos ele mais tarde.

### TypeScript e ts-node-dev

Precisamos agora instalar todas as dependências que vamos precisar para o nosso ambiente de desenvolvimento:

$ npm i --save-dev typescript ts-node-dev 

A opção [\--save-dev](https://docs.npmjs.com/cli/install) instala as dependências como devDependencies, porque elas não serão necessárias e nem instaladas em nossa imagem Docker de produção.

-   ***typescript:*** Lib oficial para compilar os nossos arquivos **.ts**
-   ***ts-node-dev:*** Habilita o REPL para TypeScript, com reinicialização automática, o que permite nosso código TypeScript funcionar em tempo real, sem compilação (pense em nodemon ou node-dev, mas para TypeScript).

Crie o arquivo `tsconfig.json` com as configurações para o compilador do Typescript:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "build"
  }
}

Em *target* vamos utilizar as versão 2020 do ECMAScript, você pode alterar a versão conforme as necessidades do seu projeto.

### ESLint e Prettier

Resolvi escolher o ESLint como o linter para esse setup pelo simples motivo que houve o [anúncio de descontinuação do projeto TSLint](https://github.com/palantir/tslint/issues/4534), embora tenha usado ele e gostado em outros projetos, não vale a pena investir em uma dependência importante, que já tem seus dias de vida contados. Instale localmente o ESLint e todas suas dependências:

$ npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier prettier

Na raiz do seu projeto crie um arquivo `.eslintrc.js` de configuração do ESLint:

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      project: './tsconfig.json',
    },
    extends:  \[
      'airbnb-base', // Adicionaas regras do Airbnb Style Guide
      'plugin:@typescript-eslint/recommended',  // Adiciona as recomendações padrões @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint',  // Adiciona as configurações do prettier para evitar conflitos de regras @typescript-eslint/eslint-plugin
      'plugin:prettier/recommended',  // Adiciona o plugin do prettier
    \],
  }

Agora crie o arquivo `.prettierrc.js` de configuração do Prettier:

module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
};

Agora vamos adicionar um script em nosso arquivo `package.json` para executar o lint:

...
"scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1",
  "lint": "eslint --fix ./src/\*"
}
...

Esse comando faz basicamente com que o ESLint analise todos os arquivos dentro da pasta`src/`e tente arrumar automaticamente qualquer problema possível. Nem todos os problemas são corrigidos automaticamente, e para ser sincero a grande maioria dos problemas importantes você precisará arrumar manualmente.

Execute `npm run lint` e verifique que nenhum erro deve ser retornado.

Se você estiver usando o VS Code com a configuração do início do artigo, esses erros vão aparecer ressaltados automaticamente na sua IDE e ao salvar algum arquivo o ESLint tentará corrigir qualquer problema e o Prettier fará a formatação automática.

## Desenvolvendo em Typescript sem compilar o tempo todo

Se você já desenvolveu com Typescript provavelmente já se irritou com todo o processo de compilação e reinicialização da sua aplicação. Existem diversas maneiras de configurar seu ambiente para compilar seus arquivos ***.ts*** e reinicializar sua aplicação, aqui vamos focar no setup que eu senti mais produtivo, usando a lib **ts-node-dev**. Essa biblioteca compila o Typescript mas compartilha essa compilação entre a reinicialização da aplicação, isso significa que vamos conseguir ter um auto-reload sem precisar esperar todo o processo de compilação. A lib ts-node-dev é uma mistura de outras duas bibliotecas, [node-dev](https://github.com/fgnass/node-dev) com [ts-node](https://github.com/TypeStrong/ts-node).

Vamos criar o script `dev` que será utilizado durante o desenvolvimento:

...
"scripts": {
  "test": "echo \\"Error: no test specified\\" && exit 1",
  "lint": "eslint --fix ./src/\*",
  "dev": "ts-node-dev --inspect=8181 --respawn --transpileOnly src/index.ts"
}
...

-   `--inspect` Define a porta em que o *debugger* estará escutando.
-   `--respawn` Continua observando os arquivos por mudanças mesmo se o processo principal morrer.
-   `--transpileOnly` Desabilita a checagem de tipagem e o saída dos arquivos de definições, promovendo uma transpilação mais rápida.

## Adicionando algum código real no projeto

Vamos adicionar um código simples para conseguir testar nossa configuração. Instale a dependência express e sua tipagem:

$ npm i --save express
$ npm install --save-dev @types/express @types/node

Agora abra o arquivo `index.ts` e cole o seguinte código:

import \* as express from "express";

const PORT = 8080; // Porta do nosso servidor web

const app = express(); // Criamos uma instância do express

// Adicionamos uma rota de teste
app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

// Iniciamos o nosso servidor web
app.listen(PORT, () => {
  console.log(\`Aplicação escutando na porta ${PORT}\`);
});

Rode o comando `npm run dev` , abra seu navegador e acesse [http://localhost:8080/hello-world](http://localhost:8080/hello-world)

![](./2019-12-image-26.png)

## Testando nossa nova configuração

Para testar se a nossa configuração foi bem sucedida, vamos modificar o nosso código original e adicionar uma nova rota:

import \* as express from "express";

const PORT = 8080; // Porta do nosso servidor web

const app = express(); // Criamos uma instância do express

// Adicionamos uma rota de teste
app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

// Adicionamos uma rota de teste com parametros
app.get("/hello-world/:nome", (req: express.Request, res: express.Response) => {
  const { nome } = req.params;
  res.json({
    message: \`Olá ${nome}!\`,
  });
});

// Iniciamos nosso servidor web
app.listen(PORT, () => {
  console.log(\`Aplicação escutando na porta ${PORT}\`);
});

Salve o arquivo e veja a mágica acontecer, o resultado esperado é que a aplicação identifique a nossa modificação e atualize o processo automaticamente. Para validar acesse [http://localhost:8080/helo-world/henrique](http://localhost:8080/helo-world/henrique):

![](./2019-12-image-27.png)

## Dockerizando a aplicação

Vamos criar o arquivo `Dockerfile.dev` que será a configuração da nossa imagem de desenvolvimento:

FROM node:12-alpine

WORKDIR /app

ADD package\*.json ./

RUN npm i

Agora precisamos criar o arquivo `docker-compose.yml`:

version: "3.7"

services:
  node-ts-otimizado:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container\_name: example-web-server
    volumes:
      - ./src:/app/src
    ports:
      - "8080:8080"
      - "8181:8181"
    command: npm run dev

Vamos testar nosso desenvolvimento iniciando o [docker compose](https://docs.docker.com/compose/):

$ docker-compose up

Repita os passos da última etapa e altere alguns códigos, verifique em seu navegador se sua aplicação inicializou e se seu código está atualizando.

## Configurando o debugger no VS Code

Como estamos desenvolvendo dentro do nosso container, precisamos acessar o debug remoto do node, por isso liberamos a porta `8181` no docker compose e também em nosso script `dev` do `package.json`. Vamos criar um arquivo `launch.json` dentro da nossa pasta `.vscode` e colar a configuração:

{
  "type": "node",
  "request": "attach",
  "name": "Docker ts-node",
  "address": "localhost",
  "port": 8181,
  "localRoot": "${workspaceFolder}",
  "remoteRoot": "/app",
  "protocol": "inspector"
}

Agora já podemos inicializar o debugger. Se você estiver no VS Code, pressione **F5**.

## Criando a imagem Docker para produção

Finalmente vamos criar o script da imagem que será implementar em produção, ela possui algumas diferenças de otimização:

FROM node:12-alpine

WORKDIR /home/node/app

ADD . .

ENV NODE\_ENV=production

RUN npm ci

USER node

EXPOSE 8080

CMD \[ "node", "build/index.js" \]

As diferenças do arquivo `Dockerfile.dev` para o `Dockerfile` são:

1.  Definimos a variável de ambiente `NODE_ENV` para `production`, isso evitará que as dependências listadas em ***devDependencies*** em nosso `package.json` sejam instaladas.
2.  Por boas práticas não vamos utilizar os "*alias*" de script do `npm` para iniciar nossa aplicação, isso reduz o número de processos iniciados e obriga que os sinais de finalização SIGTERM e SIGINT sejam recebidos diretamente pelo processo Node ao invés de ser interceptados pelo npm: [Docker Node - Boas Práticas](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#cmd).

## Conclusão

Aprendemos como configurar um ambiente de desenvolvimento para NodeJS com Typescript, com auto-reload e linter. Se você tem alguma dica para aprimorar essa configuração, por favor deixe seu comentário!
