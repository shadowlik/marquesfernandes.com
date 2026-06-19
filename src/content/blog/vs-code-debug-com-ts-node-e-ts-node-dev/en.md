---
title: VS Code debug with ts-node and ts-node-dev in Docker
description: If you are having trouble debugging in VS Code your Typescript
  projects that use ts-node or ts-node-dev, like wrong lines in the debuger or
  it not selecting any lines, don't worry, the solution is simple.
date: 2020-04-25T00:26:13.000Z
lang: en
translationKey: vs-code-debug-com-ts-node-e-ts-node-dev
slug: vs-code-debug-com-ts-node-and-ts-node-dev
category: development
tags: []
wpId: 11933
canonicalPath: /en/development/vs-code-debug-com-ts-node-and-ts-node-dev/
needsReview: false
updated: 2021-12-12T11:16:02.000Z
---

If you are having trouble debugging in VS Code your [Typescript projects](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/) that use ts-node or ts-node-dev, like wrong lines in debbuger or it not selecting any lines, don't worry, the solution is simple.

For some reason, the VS Code debugger gets confused when trying to interpret the .map files and ends up selecting the wrong lines, which can make using the debugger in your application unfeasible. This solution is also useful for those who are developing with [docker](http://marquesfernandes.com/conteineres-e-docker-o-que-e-e-para-que-serve/) .

I will explain the settings step by step so that you can identify any possible problems in your project.

## Setting up package.json

It must include the `ts-node` or `ts-node-dev` on its premises:

"devDependencies": {
  "ts-node": "8.90",
  "ts-node-dev": "1.0.0-pre.44",
}

Create a script to run your project with ts-node-dev or ts-node:

"scripts": {
  "dev": "ts-node-dev --inspect=0.0.0.0:7001 --exit-child --respawn src/index.ts",
}

### Configuring your tsconfig.json

We always need to enable the option to `sourceMap` in `compilerOptions` , this option causes the compiler to generate the necessary mapping files for the debug to work correctly:

"compilerOptions": {
  ...  
  "sourceMap": true
}

## Setting up the VS Code debugger

Create or modify your `.vscode/launch.json` . Don't forget to set it to the port we configured our run script in `package.json` .

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

The balcony is here on the property. `sourceMapPathOverrides` , we need to explicitly tell the debugger which path it should take from sourcemap files to files inside the Docker container.

"sourceMapPathOverrides": {  
 "<WORKDIR>/\*": "${workspaceRoot}/\*"  
 }

There is one [open issue in Typescript repository](https://github.com/Microsoft/vscode-recipes/issues/187) about this problem, for now the solution is to use this setting.

Thanks to the original solution: [https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f](https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f)
