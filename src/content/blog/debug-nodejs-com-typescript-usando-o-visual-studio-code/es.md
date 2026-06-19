---
title: Depurar NodeJS con TypeScript mediante Visual Studio Code
description: Cuando estamos en el proceso de desarrollo, pasamos mucho tiempo
  "depurando" el código y tratando de entender por qué no funciona o peor, por
  qué funciona......
date: 2020-01-19T21:44:58.000Z
lang: es
translationKey: debug-nodejs-com-typescript-usando-o-visual-studio-code
slug: debug-nodejs-com-typescript-using-the-visual-studio-code
category: tecnologia-es
tags: []
wpId: 9174
canonicalPath: /es/tecnologia-es/debug-nodejs-com-typescript-using-the-visual-studio-code/
needsReview: false
updated: 2021-12-12T11:24:07.000Z
---

Cuando estamos en el proceso de desarrollo, pasamos mucho tiempo "depurando" el código y tratando de entender por qué no funciona o peor, por qué funciona... El paso de depuración es muy importante y puede llevar mucho tiempo, por lo que si optimizamos esta búsqueda de errores, optimizamos el tiempo de entrega, así como la calidad.

![Sólo la mitad de la programación es codificación. El otro 90% está depurando](/wp-content/uploads/2020/01/591b0f2b-56af-4179-8bc0-d7f575bf4ed0.jpeg)

Visual Studio Code admite el depurador typeScript a través de su depurador nativo de JavaScript.

En este tutorial vamos a aprender cómo debum typescript mediante la ejecución directamente en la máquina, haga clic aquí si usted está buscando cómo depurar el tipo de escritura con docker.

El depurador no funciona automáticamente, por lo que necesitamos algunos ajustes para que funcione.

## Compatibilidad con mapas de origen de JavaScript

Para lograr la depuración en TypeScript necesitamos habilitar los mapas de origen en tiempo de compilación, esta configuración indica que el compilador genere un archivo de mapa, lo que permite la ingeniería inversa para que el depurador identifique la línea exacta de código en TypeScript.

## Creación del archiv`o tsconfig.json`

Si el proyecto aún no tiene el archivo ts`config.json,` vamos a crear un archivo con la configuración mínima para este tutorial:

{
    "compilerOptions":
      "target": "ES2020",
      "rootDir": "./src",
      "outDir": "./dist",
      "sourceMap": true,
    }
  }

Una breve explicación de lo que significan estas opciones, para más opciones ver la [documentación oficia](https://www.typescriptlang.org/docs/handbook/compiler-options.html)l:

-   **objetivo**: ¿Qué versión de ECMAScript queremos compilar
-   **rootDir:** ¿Cuál es la carpeta de nuestros archivos TypeScript
-   **outDir:** ¿Cuál es la carpeta de destino de los archivos JavaScript compilados
-   **sourceMap:** permite la creación de archivos de mapa de archivos para utilizar el depurador

## Creación de arch`ivo vscode` debug launch.json

El archivo launch.json contiene toda la configuración de los depuradores del proyecto, crea una carpeta denominada .vscode y, dentro de ella, un archivo launch.json con el siguiente contenido:

{
  "version": "0.2.0",
  "configuraciones": \[
    {
      "type": "nodo",
      "request": "lanzamiento",
      "name": "Programa de lanzamiento",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "$-workspaceFolder/src/main.ts",
      "outFiles":\["${workspaceFolder}/dist/\*\*/\*.js"\]
    }
  \]
}

## Probar nuestra nueva configuración

![](/wp-content/uploads/2020/01/image-6-1024x548.png)

Ahora que hemos configurado toda la configuración necesaria, podemos empezar a depurar nuestra aplicación. Haga clic en el botón ▶️ de la ficha De depuración o en el acceso direct**o F**5\. Si todo es correcto, se producirá el proceso de compilación y el depurador se detiene en la fila seleccionada.
