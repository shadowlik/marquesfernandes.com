---
title: VS Code debug com ts-node e ts-node-dev no Docker
description: Se você está tendo problema para debuggar no VS Code os seus
  projetos com Typescript que usam ts-node ou ts-node-dev, como linhas erradas
  no debbuger ou ele não selecionando nenhuma linha, não se preocupe, a solução
  é simples.
date: 2020-04-25T00:26:13.000Z
lang: pt
translationKey: vs-code-debug-com-ts-node-e-ts-node-dev
slug: vs-code-debug-com-ts-node-e-ts-node-dev
category: desenvolvimento
tags:
  - vscode
  - typescript
  - debug
wpId: 8161
canonicalPath: /desenvolvimento/vs-code-debug-com-ts-node-e-ts-node-dev/
needsReview: false
updated: 2020-04-25T00:31:31.000Z
---

Se você está tendo problema para debuggar no VS Code os seus [projetos com Typescript](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/) que usam ts-node ou ts-node-dev, como linhas erradas no debbuger ou ele não selecionando nenhuma linha, não se preocupe, a solução é simples.

Por algum motivo o debugger do VS Code se confunde ao tentar interpretar os arquivos .map e acaba selecionando as linhas erradas, o que pode inviabilizar o uso do debbuger na sua aplicação. Essa solução serve também para quem estiver desenvolvendo com [Docker](http://marquesfernandes.com/conteineres-e-docker-o-que-e-e-para-que-serve/).

Explicarei passo a passo as configurações para que você identifique qualquer possível problema em seu projeto.

## Configurando o package.json

Ele deve incluir o `ts-node` ou `ts-node-dev` nas suas dependências:

"devDependencies": {
  "ts-node": "8.9.0",
  "ts-node-dev": "1.0.0-pre.44",
}

Crie um script para rodar o seu projeto com ts-node-dev ou ts-node:

"scripts": {
  "dev": "ts-node-dev --inspect=0.0.0.0:7001 --exit-child --respawn src/index.ts",
}

### Configurando seu tsconfig.json

Precisamos sempre habilitar a opção de `sourceMap` em `compilerOptions`, essa opção faz com que o compilador gere os arquivos de mapeamento necessários para o debug funcionar corretamente:

"compilerOptions": {
  ...  
  "sourceMap": true
}

## Configurando o debugger do VS Code

Crie ou modifique seu `.vscode/launch.json` . Não esqueça de configurar para a porta que configuramos nosso script de execução no`package.json` .

{
  "version": "0.2.0",
  "configurations": \[
    {
      "type": "node",
      "request": "attach",
      "name": "Docker: Attach to Node",
      "port": 7001,
      "address": "localhost",
      "localRoot": "${workspaceFolder}",
      "sourceMapPathOverrides": {
        "/app/\*": "${workspaceRoot}/\*"
      },
      "remoteRoot": "/app/"
    }
  \]
}

A sacada está aqui na propriedade `sourceMapPathOverrides`, precisamos explicitamente indicar para o debugger qual o caminho ele deverá seguir dos arquivos sourcemap para os arquivos dentro do contêiner Docker.

"sourceMapPathOverrides": {  
  "<WORKDIR>/\*": "${workspaceRoot}/\*"  
}

Existe uma [issue em aberto no repositório do Typescript](https://github.com/Microsoft/vscode-recipes/issues/187) sobre esse problema, por enquanto a solução é usar essa configuração.

Agradecimentos a solução original: [https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f](https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f)
