---
title: Depuración de VS Code con ts-node y ts-node-dev en Docker
description: Si tiene problemas para depurar en VS Code sus proyectos con
  Typescript que usan ts-node o ts-node-dev, como líneas incorrectas en debbuger
  o no selecciona ninguna línea, no se preocupe, la solución es simple.
date: 2020-04-25T00:26:13.000Z
lang: es
translationKey: vs-code-debug-com-ts-node-e-ts-node-dev
slug: vs-code-debug-com-ts-node-e-ts-node-dev-2
category: tecnologia-es
tags: []
wpId: 9132
canonicalPath: /es/tecnologia-es/vs-code-debug-com-ts-node-e-ts-node-dev-2/
needsReview: false
updated: 2021-12-12T11:23:30.000Z
---

Si tiene problemas para depurar en VS Code sus proyectos [con Typescript que u](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)san ts-node o ts-node-dev, como líneas incorrectas en debbuger o no selecciona ninguna línea, no se preocupe, la solución es simple.

Por alguna razón, el depurador de VS Code se confunde al intentar interpretar los archivos .map y termina seleccionando las líneas incorrectas, lo que puede hacer imposible usar debbuger en la aplicación. Esta solución también es para aquellos que están desarrollando con [Docke](http://marquesfernandes.com/conteineres-e-docker-o-que-e-e-para-que-serve/)r.

Explicaré la configuración paso a paso para que pueda identificar cualquier problema potencial en su proyecto.

## Configuración de package.json

Debe incluir ts-`node o` ts`-node-dev` en sus dependencias:

"devDependencies":
  "ts-node": "8.9.0",
  "ts-node-dev": "1.0.0-pre.44",
}

Cree un script para ejecutar el proyecto con ts-node-dev o ts-node:

"scripts":
  "dev": "ts-node-dev --inspect-0.0.0.0:7001 --exit-child --respawn src/index.ts",
}

### Configuración de tsconfig.json

Siempre necesitamos habilitar la opción `sourceMap` en `compilerOptions,` esta opción hace que el compilador genere los archivos de asignación necesarios para que el debug funcione correctamente:

"compilerOptions":
  ...  
  "sourceMap": true
}

## Configuración del depurador de VS Code

Cree o modifique su archi`vo .vscode/launch.jso`n . No olvide configurar el puerto que configuramos nuestro script de ejecución n`opackage.jso`n.

{
  "version": "0.2.0",
  "configuraciones": \[
    {
      "type": "nodo",
      "request": "adjuntar",
      "name": "Docker: Adjuntar al nodo",
      "port": 7001,
      "address": "localhost",
      "localRoot": "$-workspaceFolder",
      "sourceMapPathOverrides":
        "/app/\*": "$-workspaceRoot-/\*"
      },
      "remoteRoot": "/app/"
    }
  \]
}

El balcón está aquí en la propiedad s`ourceMapPathOverrides, n`ecesitamos indicar explícitamente al depurador qué ruta de acceso debe seguir desde los archivos de mapa de origen hasta los archivos dentro del contenedor de Docker.

"sourceMapPathOverrides": "<W  
ORKDIR>/\*": "$-workspaceRoot-/\*"</WORKDI  
R>

Hay un prob[lema abierto en el repositorio de Typescript so](https://github.com/Microsoft/vscode-recipes/issues/187)bre este problema, por ahora la solución es utilizar esta configuración.

Gracias por la solución original: [https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f](https://medium.com/@mitsuhideohi/debugging-uncompiled-typescript-code-running-on-a-docker-container-213418ab2b1f)
