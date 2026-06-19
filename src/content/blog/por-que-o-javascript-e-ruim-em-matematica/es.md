---
title: ¿Por qué Javascript es malo en matemáticas?
description: En JavaScript, todos los números son números de punto flotante IEEE
  754. Debido a la naturaleza binaria de su codificación, algunos números
  decimales no se pueden representar con una precisión perfecta.
date: 2020-03-22T12:19:18.000Z
lang: es
translationKey: por-que-o-javascript-e-ruim-em-matematica
slug: by-what-the-javascript-and-bad-in-mathmatic
category: tecnologia-es
tags: []
wpId: 9147
canonicalPath: /es/tecnologia-es/by-what-the-javascript-and-bad-in-mathmatic/
needsReview: false
updated: 2021-12-12T11:23:36.000Z
---

Probablemente haya oído a alguien decir que "[Javascript](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/) es malo con las cuentas", y esa declaración no está del todo equivocada. Por ignorancia algunas personas incluso se comparan con otros idiomas, he oído "Utiliza Phyton que ella sabe dar cuenta", tal vez porque es un lenguaje con alta popularidad en el campo de la ciencia de datos muchas personas asumen esto. No defender JS, ni criticar Phyton, sólo que usted entiende que muchos idiomas comparten este mismo problema Javascript.

## Observación del error en la práctica

Imaginemos el siguiente escenario, quiero inscribirme en el gimnasio y decidí pagar trimestralmente, tengo dinero disponible $ 600.90 y el precio de la cuota mensual del gimnasio es de $ 200.30, teóricamente si realizas esta cuenta tienes suficiente dinero disponible, pero cuando intentamos replicar esta lógica al código no es lo que sucede:

Ahora para probar mi punto, veamos el mismo ejemplo en Phyton:

Bueno, bueno, ¿quién sabía que no lo era?

## El problema: **Punto flotante** y redondeo

Para tratar de evitar confusiones, como el concepto de punto flotante no es algo muy fácil de entender, vamos a tratar de explicar superficialmente el concepto, pero si quieres profundizar y entender en la raíz, te recomiendo leer este [artículo en inglés](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html).

En JavaScript, todos los números son números de punto flotante [IEEE 754.](https://pt.wikipedia.org/wiki/IEEE_754) Debido a la naturaleza binaria de su codificación, algunos números decimales no se pueden representar con una precisión perfecta.

Para entender lo que es un punto flotante, primero debe entender que hay muchos tipos de números y maneras de representarlos que vamos a pasar. Llamamos entero 1 - es un entero sin valores fraccionarios.

1/2 es lo que es la fracción famosa. Esto implica que el entero 1 se está dividiendo en 2. Este concepto de fracciones es muy importante en la derivación de puntos flotantes.

0.5 se conoce como un número decimal. Sin embargo, es necesario hacer una distinción muy importante - 0,5 es sólo la representación decimal (base 10) de la fracción 1/2. Así es como se representa 1/2 cuando se escribe como un número base 10 - para este artículo, podemos llamar a esto una notación de punto. Llamamos a la representación finita 0.5 porque los números en la representación de fracción son finitos - no hay más números después de 5 de 0.5. Una representación infinita sería, una diezma periódica, por ejemplo, 0.3333 ... representando 1/3.

Hay otra forma de representar números distintos de enteros, fracciones o notaciones decimales. Usted puede haber visto esto antes, son las notaciones científicas, algo como esto: 6,022 x 1023 y ese es el formato IEEE 754 adoptado. Este formato tiene una limitación de 64 bits, por lo que cuando se alcanza el límite de almacenamiento del número, debe redondear el último dígito hacia arriba o hacia abajo.

Tu primer pensamiento podría ser intentar redondear al segundo decimal. Desafortunadamente, el redondeo interno de JavaScript solo funciona para el entero más cercano.

## Cómo calcular con precisión utilizando JavaScript

Ahora que ha entendido el problema, aunque el error de precisión es bajo, puede causar problemas graves de lógica y coherencia de datos, pero entonces, ¿cómo consigue JavaScript para hacer las matemáticas correctamente y con precisión?

Hay algunas soluciones propuestas, algunas más restringidas indican que la mejor manera es multiplicar a enteros antes de hacer las matemáticas:

const meuDinheiro = 600.90 \* 100;
const precoDaMensalidade = 200.30 \* 100;
const totalDeMensalidades = precoDaMensalidade \* 3;

// Salidas: true
console.log(meuDinheiro >= totalDeMensalidades);

// Salidas: 60090
console.log(totalDeMensalidades);

Y otras soluciones utilizan la transformación y el cálculo basados en cadenas, lo que puede ser útil, pero viene con el costo del rendimiento.

La mejor y más fácil solución para manejar cuentas y puntos flotantes en javascript es mediante el uso de algunas bibliotecas ya probadas y aprobadas por la comunidad, como [dinerojs](https://dinerojs.com/) o [mathjs](https://mathjs.org/).

## Pero entonces, ¿todos los idiomas tienen este problema?

Entienda que otros lenguajes, como C, Java, Phyton y muchos otros, también utilizan IEEE-754, así que no crea que se saldrá con la suya simplemente cambiando el idioma.

La diferencia es que otros idiomas a menudo tienen otros tipos de tiendas de números que puede usar para evitar estos problemas. Por ejemplo, C- tiene un tipo nativo de decimal que se debe usar para tareas como los cálculos monetarios.

Lo que siempre tenemos que entender es que cada aplicación tiene un enfoque y cada idioma tiene sus ventajas, si tienes una aplicación que no hará cuentas extensas y que el coste operativo no tendrá impacto, ve con Javascript, pero si este no es el caso, busca un lenguaje que satisfaga las necesidades de tu proyecto. Mi consejo es: **no tener amor por el lenguaje o los códigos, sino en la resolución de problemas**.

**Referencias:**

-   [https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/](https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/)
-   [https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a](https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a)
-   [http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)
-   [https://frontstuff.io/how-to-handle-monetary-values-in-javascript](https://frontstuff.io/how-to-handle-monetary-values-in-javascript)
-   [https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ](https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ)
