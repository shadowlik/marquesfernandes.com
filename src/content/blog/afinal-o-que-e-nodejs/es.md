---
title: ¿Qué es NodeJS?
description: NodeJS es un entorno de ejecución Javascript. Eso es bueno, pero
  ¿qué significa eso? ¿Cómo funciona?
date: 2019-03-05T12:12:41.000Z
lang: es
translationKey: afinal-o-que-e-nodejs
slug: despues-de-todo-lo-que-y-nodojs
category: tecnologia-es
tags: []
wpId: 9220
canonicalPath: /es/tecnologia-es/despues-de-todo-lo-que-y-nodojs/
needsReview: false
updated: 2021-12-12T11:24:18.000Z
---

Probablemente ya has oído hablar de **[NodeJS](https://nodejs.org)** y que de alguna manera está relacionado con Javascript... Pero después de todo, ¿qué diablos está haciendo **NodeJS**?

**NodeJS es un entorno de ejecución Javascript.** Eso es bueno, pero ¿qué significa eso? ¿Cómo funciona?

***También echa un vistazo: [](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/)*** *[Javascript - ¿Qué es, cómo funciona y para qué servidor?](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/)*

Probablemente escuchará a los desarrolladores que se refieren solo a N**ode** y no a **NodeJS.**

El entorno **de n**odo tiene todo lo que necesita para ejecutar scripts en javascript, donde hasta entonces\* era posible sólo en los navegadores. Le permite utilizar javascript como lenguaje backend y utiliza el moto*r javascript V8 desa*rrollado por Google para Chrome, por lo que si utiliza ese navegador está utilizando la misma máquina de ejecución javascript que el nodo.\* **Nod**e  
*JS **ha ex**istido durante 9 años.*

## Motor V8

"**V8** es el nombre del [intérprete de JavaScript](https://pt.wikipedia.org/wiki/Interpretador_JavaScript), también llamado la [máquina virtual](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual) Javascript *(o motor)*, desarrollado por [Google](https://pt.wikipedia.org/wiki/Google) y utilizado en su [navegador](https://pt.wikipedia.org/wiki/Navegador_\(inform%C3%A1tica\)) [Google Chrome](https://pt.wikipedia.org/wiki/Google_Chrome). V8 es una herramienta desarrollada en el lenguaje [C++](https://pt.wikipedia.org/wiki/C%2B%2B) y distribuida en el régimen de [código abierto](https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto).  
El propósito de V8 es acelerar el rendimiento de una aplicación mediante la compilación de código Javascript en el formato de máquina nativa antes de ejecutarlo, lo que le permite ejecutar la velocidad de código binario compilado" \- [Wikipedia.](https://pt.wikipedia.org/wiki/V8_\(JavaScript\))

## ¿Por qué NodeJS?

"**NodeJS** utiliza un modelo "I/O" orientado a eventos y sin bloqueos que lo hace ligero y eficiente"

E/S significa "entrada" y "salida". Esto significa que cualquier tarea es una llamada HTTP hasta que lea un archivo en el disco.

Esto es muy importante porque el n**odo** es de un solo subproceso (consume sólo un procesador), no es 100% cierto, pero vamos a simplificar y dejar silencio por ahora, por lo que si tiene alguna función de bloqueo todo el código se verá comprometido y probablemente lento:

Imagine que ha desarrollado una API Rest que devuelve el contenido de un archivo de disco de su servidor, si desarrolla de forma blocante, supongamos que su archivo es pesado y tarda 1 minuto en leerse, cualquier siguiente llamada tendrá que esperar a que la primera llamada sea leída para que se responda e inicie el turno de su lectura. Usando el modelo sin bloqueo el nodo **"pon**e en cola" estas llamadas, comienza a procesarlas en paralelo y responde tan pronto como sea posible.

## [Npm](http://npmjs.com)

![](./2019-03-npm.png)

Otra parte maravillosa del **nod**o está en su comunidad: **NPM** es el administrador de paquetes ("dependencias") **de No**deJS, aquí encontrará las más variadas soluciones escritas por la comunidad. Probablemente te encontrarás con situaciones/problemas al desarrollar que alguna buena alma ha pasado y publicado un paquete NPM **pa**ra hacer tu vida más fácil. ¡Todo este ecosistema hace que el desarrollo de aplicaciones en Node sea rápido y eficiente!

## Próximos pasos

Bueno, ahora que ya sabes lo que es N**odeJS** recomiendas que de una xeretada en la documentación oficial es muy fácil, intuitivo y tiene buenos tutoriales para escribir tu primera aplicación en el nodo: [https://nodejs.org](https://nodejs.org)
