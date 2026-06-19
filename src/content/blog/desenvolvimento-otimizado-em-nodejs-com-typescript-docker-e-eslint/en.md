---
title: Optimized development in NodeJS with Typescript, Docker and ESlint
description: This article was inspired by my own frustration with optimizing my
  NodeJS setup with Typescript and Docker. At the end of this tutorial you will
  have a NodeJS development environment with Typescript, ts-node-dev, Docker,
  ESlint with Airbnb Style Guide and Prettier.
date: 2019-12-11T10:44:09.000Z
lang: en
translationKey: desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint
slug: nodejs-optimized-development-with-typescript-docker-and-eslint
category: development
tags: []
wpId: 12033
canonicalPath: /en/development/nodejs-optimized-development-with-typescript-docker-and-eslint/
needsReview: false
updated: 2021-12-12T11:14:51.000Z
---

This article was inspired by my own frustration with optimizing my NodeJS setup with Typescript and Docker. Most processes and tutorials lead to settings that make development tiring and slow, between so many recompilations and reboots your patience runs out and your productivity goes down the drain. After a lot of research, testing and stress, I managed to put together an ideal setup!

It is necessary that you have at least the basic knowledge of node, typescript and docker, I will not explain any technology in depth, if you have any specific questions I will be happy to help in the comments.

At the end of this tutorial you will have a development environment [NodeJS](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs) with [typescript](https://www.npmjs.com/package/typescript) , [ts-node-dev](https://github.com/whitecolor/ts-node-dev) , [docker](https://www.docker.com/) , [ESlint](https://eslint.org/) with [Airbnb Style Guide](https://www.npmjs.com/package/eslint-config-airbnb-typescript) and [prettier](https://prettier.io/) .

All code from this tutorial is available at [GitHub](https://github.com/shadowlik/node-ts-otimizado) .

In the first part of the article we will configure our IDE [Visual Studio Code](https://code.visualstudio.com/) for development, feel free to skip this part if you use another IDE.

## configuring the [VS Code](https://code.visualstudio.com/download)

First let's create an empty folder for our project and start VS Code in it:

$ mkdir node-ts-optimized && code node-ts-optimized/

### Useful VS Code Extensions

I recommend installing the extensions listed below, they will boost your productivity:

-   [Latest TypeScript and Javascript Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.typescript-javascript-grammar) - Microsoft Extension for Typescript and Javascript support
-   [Typescript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero) - Organizes typescript imports
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integration of ESLint directly into the IDE
-   [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier integration directly into the IDE
-   [docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - For autocomplete, code highlighting and Docker commands
-   [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - This one is not necessary, but I like the cute icons and wanted to share

### configuring the [Workspace](https://code.visualstudio.com/docs/getstarted/settings)

Inside your project, if it doesn't already exist, create a folder `.vscode` and in it the file `settings.json` . Add the following properties:

{
  "eslint.autoFixOnSave": true,
  "eslint.validate": \[
    "javascript",
    {"language": "typescript", "autoFix": true },
  \],
  "editor.formatOnSave": true,
  "\[javascript\] ": {
    "editor.formatOnSave": false,
  },
  "\[typescript\] ": {
    "editor.formatOnSave": false,
  }
}

This automatically enables ESlint and Prettier's auto-correction when saving any files.

## Starting a NodeJS project

Now we need to initialize a node project:

$ cd node-ts-optimized && npm init

Within the project, let's create a folder `src/` , that's where we'll put all our source files `.ts` . Enjoy and create an empty file with the name `index.ts` , we will use it later.

### TypeScript and ts-node-dev

We now need to install all the dependencies we will need for our development environment:

$ npm i --save-dev typescript ts-node-dev 

The option [--save-dev](https://docs.npmjs.com/cli/install) installs the dependencies as devDependencies, because they won't be needed or installed on our production Docker image.

-   ***typescript:*** Official Lib to compile our files **.ts**
-   ***ts-node-dev:*** Enables REPL for TypeScript, with automatic restart, which allows our TypeScript code to work in real time, without compilation (think nodemon or node-dev, but for TypeScript).

create the file `tsconfig.json` with the settings for the Typescript compiler:

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "build"
  }
}

In *target* We are going to use the 2020 version of ECMAScript, you can change the version according to your project's needs.

### ESLint and Prettier

I decided to choose ESLint as the linter for this setup for the simple reason that there was the [TSLint project discontinuation announcement](https://github.com/palantir/tslint/issues/4534) , although I have used it and liked it in other projects, it is not worth investing in an important facility, which has its days of life numbered. Locally install ESLint and all its dependencies:

$ npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier prettier

At the root of your project create a file `.eslintrc.js` ESLint configuration:

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      project: './tsconfig.json',
    },
    extends: \[
      'airbnb-base', // Add Airbnb Style Guide rules
      'plugin:@typescript-eslint/recommended', // Add the default recommendations @typescript-eslint/eslint-plugin
      'prettier/@typescript-eslint', // Add prettier settings to avoid rules conflicts @typescript-eslint/eslint-plugin
      'plugin:prettier/recommended', // Add prettier plugin
    \],
  }

Now create the file `.prettierrc.js` Prettier Configuration:

module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: false,
  printWidth: 120,
  tabWidth: 2,
};

Now let's add a script to our file. `package.json` to run lint:

...
"scripts": {
  "test": "echo "Error: no test specified" && exit 1",
  "lint": "eslint --fix ./src/\*"
}
...

This command basically makes ESLint analyze all the files inside the folder. `src/` and try to automatically fix any possible problems. Not all issues are fixed automatically, and to be honest the vast majority of important issues you will need to fix manually.

run `npm run lint` and check that no errors should be returned.

If you are using VS Code with the configuration at the beginning of the article, these errors will appear automatically highlighted in your IDE and when saving some file ESLint will try to fix any problems and Prettier will do the automatic formatting.

## Developing in Typescript without compiling all the time

If you've already developed with Typescript, you've probably been annoyed with the whole process of compiling and restarting your application. There are several ways to configure your environment to compile your files ***.ts*** and restart your application, here we're going to focus on the setup that I felt most productive using the lib **ts-node-dev** . This library compiles the Typescript but shares this compilation between application restarts, this means that we will be able to have an auto-reload without having to wait for the entire compilation process. The ts-node-dev lib is a mix of two other libraries, [node-dev](https://github.com/fgnass/node-dev) with [ts-node](https://github.com/TypeStrong/ts-node) .

Let's create the script `must` that will be used during development:

...
"scripts": {
  "test": "echo "Error: no test specified" && exit 1",
  "lint": "eslint --fix ./src/\*",
  "dev": "ts-node-dev --inspect=8181 --respawn --transpileOnly src/index.ts"
}
...

-   `--inspect` Defines the port on which the *debugger* will be listening.
-   `--respawn` Keep watching files for changes even if the main process dies.
-   `--transpileOnly` Disables typing checking and outputting definitions files, promoting faster transpilation.

## Adding some real code to the project

Let's add some simple code to be able to test our configuration. Install the express dependency and its typing:

$npm i --save express
$ npm install --save-dev @types/express @types/node

Now open the file `index.ts` and paste the following code:

import \* as express from "express";

const PORT = 8080; // Port of our web server

const app = express(); // We create an instance of express

// We add a test route
app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

// We start our web server
app.listen(PORT, () => {
  console.log(\`Application listening on port ${PORT}\`);
});

run the command `npm run dev` , open your browser and access [http://localhost:8080/hello-world](http://localhost:8080/hello-world)

![](/wp-content/uploads/2019/12/image-26-1024x521.png)

## Testing our new setup

To test whether our setup was successful, let's modify our original code and add a new route:

import \* as express from "express";

const PORT = 8080; // Port of our web server

const app = express(); // We create an instance of express

// We add a test route
app.get("/hello-world", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Hello World",
  });
});

// We add a test route with parameters
app.get("/hello-world/:name", (req: express.Request, res: express.Response) => {
  const { name } = req.params;
  res.json({
    message: \`Hello ${name}!\`,
  });
});

// We start our web server
app.listen(PORT, () => {
  console.log(\`Application listening on port ${PORT}\`);
});

Save the file and watch the magic happen, the expected result is that the application identifies our modification and updates the process automatically. To validate, go to [http://localhost:8080/helo-world/henrique](http://localhost:8080/helo-world/henrique) :

![](/wp-content/uploads/2019/12/image-27-1024x521.png)

## Dockerizing the application

Let's create the file `dockerfile.dev` which will be the configuration of our development image:

FROM node:12-alpine

WORKDIR /app

ADD package\*.json ./

RUN npm i

Now we need to create the file `docker-compose.yml` :

version: "3.7"

services:
  node-ts-optimized:
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

Let's test our development by starting the [docker compose](https://docs.docker.com/compose/) :

$ docker-compose up

Repeat the steps of the last step and change some codes, check in your browser if your application has started and if your code is updating.

## Setting up the debugger in VS Code

As we are developing inside our container, we need to access node remote debugging, so we release the port `8181` in docker compose and also in our script `must` of `package.json` . Let's create a file `launch.json` inside our folder `.vscode` and paste the configuration:

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

Now we can start the debugger. If you are on VS Code, press **F5** .

## Creating the Docker Image for Production

Finally, let's create the image script that will be implemented in production, it has some optimization differences:

FROM node:12-alpine

WORKDIR /home/node/app

ADD . .

ENV NODE\_ENV=production

RUN npm ci

USER node

EXPOSE 8080

CMD\[ "node", "build/index.js" \]

file differences `dockerfile.dev` to `dockerfile` they are:

1.  We set the environment variable `NODE_ENV` for `production` , this will prevent the dependencies listed in ***devDependencies*** in our `package.json` are installed.
2.  For best practices, we will not use the " *indeed* " from script of `npm` to start our application, this reduces the number of processes started and forces the termination signals SIGTERM and SIGINT to be received directly by the Node process instead of being intercepted by npm: [Docker Node - Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#cmd) .

## Conclusion

We learned how to set up a development environment for NodeJS with Typescript, with auto-reload and linter. If you have any tips to improve this setting, please leave your comment!
