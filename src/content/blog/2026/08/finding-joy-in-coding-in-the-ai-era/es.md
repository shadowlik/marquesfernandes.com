---
title: 'Intento reencontrar la alegría de programar en la era de la IA'
description: 'La IA hace que las ideas sean más fáciles de construir, pero también ha cambiado una parte de programar que me gustaba. Esto es lo que intento recuperar ahora.'
date: 2026-08-11T00:00:00.000Z
lang: es
translationKey: finding-joy-in-coding-in-the-ai-era
slug: intentando-reencontrar-la-alegria-de-programar-en-la-era-de-la-ia
category: desarrollo
tags:
  - inteligencia artificial
  - desarrollo de software
  - arquitectura de software
  - producto
cover: ./cover.png
coverAlt: 'Un desarrollador tomando notas junto a un portátil en un espacio de trabajo cálido y vivido'
draft: false
needsReview: false
---

Recuerdo el día exacto en que miré mi trabajo y sentí miedo: el 10 de enero.

Llevaba bastante más tiempo usando IA. La progresión probablemente fue parecida a la de muchos desarrolladores: autocompletado en el IDE, luego conversar con un asistente dentro de VS Code y, después, flujos más autónomos en la terminal.

Pero ese día algo hizo clic. La forma en que había escrito software durante casi 15 años estaba cambiando en cuestión de meses. El flujo de trabajo que conocía estaba desapareciendo, y eso me asustó.

Ese miedo es la parte que exploré en [La IA me quitará el trabajo, pero antes tengo que revisar su PR](https://marquesfernandes.com/es/la-ia-me-quitara-el-trabajo-pero-antes-tengo-que-revisar-su-pr/). Mi primera reacción fue casi apocalíptica. Tenía miedo de quedarme obsoleto. Miedo de que las habilidades que había construido ya no fueran suficientes. Miedo de que el trabajo que estaba acostumbrado a hacer simplemente hubiera desaparecido.

## La parte de programar que echo de menos

Unos meses después, sigo disfrutando de programar. Pero he notado que parte de la pasión se ha apagado.

He leído entradas de blog e hilos largos de Reddit de personas que parecen sentir algo parecido. Hay una alegría particular en sentarte frente a un problema, entender qué tiene que ocurrir, escribir tú mismo el código, conocer tanto los detalles de bajo nivel como la forma general y, al final, verlo funcionar.

Esa alegría parece más fácil de perder cuando gran parte de la implementación llega después de unos cuantos prompts. Al menos, para mí.

Algunas personas dicen que programar nunca fue el punto, que los desarrolladores son personas que resuelven problemas y siempre lo serán. Estoy de acuerdo con parte de eso. Me encanta resolver problemas, ya sea arreglando algo en internet o fuera de ella.

Pero no creo que sea honesto fingir que escribir código nunca fue parte del atractivo. Programar era un diferenciador. Una habilidad ganada con esfuerzo en un mercado competitivo y bien pagado. Sigo echando de menos la forma en que escribíamos código, aprendíamos y resolvíamos un problema, pieza por pieza.

## La parte que realmente me gusta

También hay algo realmente increíble en esta nueva realidad: las ideas pueden hacerse reales mucho más rápido.

Siempre me han gustado los proyectos paralelos y las soluciones DIY, incluso construir cosas que probablemente no necesitaba solo para no pagar por una herramienta. Ahora puedo hacer una prueba de concepto en unas horas, probarla y decidir si merece más tiempo. Eso es increíble.

La IA no ha quitado la satisfacción de construir. Ha cambiado dónde aparece esa satisfacción. La tensión es que también echo de menos las partes más lentas.

## Todavía no tengo una respuesta

Este no es un artículo con una respuesta redonda al final. Es más bien una idea en proceso.

No puedo controlar este cambio, y nadie puede. Así que intento aceptar que el flujo de trabajo antiguo se ha ido, adaptarme a lo que hay ahora y encontrar nuevos motivos para disfrutar del trabajo.

Para mí, eso ha significado ir más allá de aprender la última herramienta, modelo, skill o repositorio de IA. He intentado construir mi propio harness y mi flujo de trabajo sobre los proyectos en los que trabajo. Eso es divertido.

No quiero usar las herramientas predeterminadas a ciegas ni asumir que un framework como Superpowers es la única forma de trabajar sin entender las ideas que hay debajo. Quiero saber por qué un flujo ayuda, dónde falla y cómo cambiarlo cuando el proyecto necesita algo distinto.

## Mantenerme cerca del trabajo

También he empezado a prestar más atención a los pull requests antes de que se abran. Sigo los cambios mientras ocurren, usando Lazygit y VS Code, para entender qué se está entregando, cambiar de dirección cuando hace falta y detectar dónde mi harness necesita ajustes.

Esto devuelve parte de la autonomía. El trabajo no consiste solo en aceptar un resultado generado. Consiste en decidir qué debería ocurrir, comprobar si ocurrió y responsabilizarse de los tradeoffs.

![Un desarrollador revisando un pull request absurdamente largo en papel mientras un pequeño robot de hojalata observa](./pr-review.png)

## La arquitectura sigue siendo una conversación

Hay otra parte del trabajo que he empezado a apreciar más: tomar decisiones de alto nivel antes de que alguien empiece a generar código.

¿Esto debería suceder de forma síncrona o pasar por una cola? ¿Qué pasa si el job se ejecuta dos veces? ¿Cuánto retraso puede tolerar el usuario? ¿Necesitamos consistencia inmediata o la consistencia eventual basta aquí? ¿Cómo se comporta esto cuando el camino feliz deja de ser el único camino?

La IA puede darte una implementación muy convincente para cualquiera de esas opciones. Pero no puede decidir qué tradeoff tiene sentido sin el contexto. Una cola no es un rasgo de personalidad. A veces es la decisión correcta. A veces solo estás añadiendo otra pieza móvil porque el problema parecía demasiado tranquilo.

Entender esos tradeoffs sigue siendo muy satisfactorio para mí. Es donde el trabajo deja de ser producir código lo más rápido posible y pasa a ser conseguir que un sistema se comporte bien cuando aparecen personas reales, datos reales y errores reales.

## El trabajo de producto importa más ahora

El mayor cambio para mí ha sido dedicar más tiempo a la parte de producto.

Estoy intentando escribir mejores especificaciones, PRDs, TDDs o como lo llame tu equipo. Estoy pensando con más intención en el problema, la solución y el impacto de la solución. Estoy pensando en los flujos de usuario, haciendo mockups y dibujando diagramas.

Escribí más sobre ese cambio cuando [dejé de crear funcionalidades al azar y encontré una dirección de producto](https://marquesfernandes.com/es/1-como-deje-de-crear-funcionalidades-al-azar-y-encontre-una-direccion-de-producto/).

La especificación, el flujo de usuario y la arquitectura de alto nivel no son casillas separadas que marcar. Se dan forma mutuamente. Un flujo que necesita respuesta inmediata puede cambiar la decisión entre hacer algo de forma síncrona o usar una cola. Una limitación técnica puede cambiar lo que el usuario debería ver cuando algo falla. Una decisión de producto puede hacer que una arquitectura elegante sea completamente innecesaria.

Por eso intento describir esas decisiones con claridad antes de correr hacia un agente y pedirle que escriba el código. Un agente puede producir una implementación muy plausible, pero no puede recuperar de forma fiable los detalles que nunca entraron en el prompt. Y esos detalles, juntos, son los que hacen que una entrega parezca completa, y no simplemente terminada.

Antes, esas eran partes del trabajo que a menudo me parecían aburridas. Ahora son más fáciles de explorar, y ese es un punto claramente a favor de la era de la IA.

Tal vez ahí es donde se mueve una parte de la alegría. Menos alegría al producir cada línea a mano y más al entender el problema lo bastante bien como para tomar buenas decisiones sobre lo que se va a construir.

Todavía lo estoy entendiendo. Pero no quiero perder la sensación que me hizo amar este trabajo al principio. Quiero encontrarla de nuevo, aunque ahora tenga otra forma.
