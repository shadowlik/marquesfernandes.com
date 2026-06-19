---
title: Debug NodeJS com TypeScript usando o Visual Studio Code
description: Quando estamos no processo de desenvolvimento, passamos grande
  parte do nosso tempo "debugando" o código e tentando entender o porque dele
  não funcionar ou p...
date: 2020-01-19T21:44:58.000Z
lang: pt
translationKey: debug-nodejs-com-typescript-usando-o-visual-studio-code
slug: debug-nodejs-com-typescript-usando-o-visual-studio-code
category: desenvolvimento
tags:
  - node
  - nodejs
  - vscode
  - typescript
  - debug
wpId: 7002
canonicalPath: /desenvolvimento/debug-nodejs-com-typescript-usando-o-visual-studio-code/
needsReview: false
updated: 2020-01-19T21:45:05.000Z
---

Quando estamos no processo de desenvolvimento, passamos grande parte do nosso tempo "debugando" o código e tentando entender o porque dele não funcionar ou pior, o porque ele funciona... A etapa de debug é muito importante e pode consumir muito tempo, então se otimizamos essa caça aos bugs, otimizamos o tempo de entrega e também a qualidade.

![Only half of programming is coding. The other 90% is debugging](/wp-content/uploads/2020/01/591b0f2b-56af-4179-8bc0-d7f575bf4ed0.jpeg)

O Visual Studio Code tem suporte ao debugger do TypeScript através de seu debugger de JavaScript nativo.

Nesse tutorial iremos aprender como debugar o typescript rodando diretamente na máquina, clique aqui se você procura como debugar typescript com docker.

O debugger não funciona automaticamente, então precisamos de algumas configurações para ele funcionar.

## Suporte ao JavaScript source map

Para conseguir o debug no TypeScript precisamos habilitar o source maps na hora de compilar, essa configuração indica para o compilador gerar um arquivo de mapa, que permite a engenharia reversa para o debugger identificar a exata linhada do código no TypeScript.

## Criando o arquivo `tsconfig.json`

Se seu projeto ainda não possuí o arquivo `tsconfig.json`, vamos criar um arquivo com as configurações mínimas para esse tutorial:

{
    "compilerOptions": {
      "target": "ES2020",
      "rootDir": "./src",
      "outDir": "./dist",
      "sourceMap": true,
    }
  }

Uma breve explicação do que significam essas opções, para mais opções consulte a [documentação oficial](https://www.typescriptlang.org/docs/handbook/compiler-options.html):

-   **target:** Qual a versão do ECMAScript desejamos compilar
-   **rootDir:** Qual a pasta dos nossos arquivos TypeScript
-   **outDir:** Qual a pasta de destino dos arquivos JavaScript compilados
-   **sourceMap:** Habilita a criação dos arquivos de mapa de arquivo para usar o debugger

## Criando o arquivo `launch.json` de debug do VSCode

O arquivo launch.json contém todas as configurações de debuggers para o projeto, cria uma pasta chamada .vscode e dentro dela um arquivo launch.json com o seguinte conteúdo:

{
  "version": "0.2.0",
  "configurations": \[
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "${workspaceFolder}/src/main.ts",
      "outFiles": \["${workspaceFolder}/dist/\*\*/\*.js"\]
    }
  \]
}

## Testando nossa nova configuração

![](/wp-content/uploads/2020/01/image-6-1024x548.png)

Agora que configuramos toda configuração necessária, podemos iniciar a debuggar nossa aplicação. Clique no botão ▶️ na aba de debug ou pelo atalho **F5**. Se tudo estiver correto, o processo de compilação ocorrerá e o debugger pausar na linha selecionada.
