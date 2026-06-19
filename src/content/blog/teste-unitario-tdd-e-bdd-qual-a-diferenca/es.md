---
title: Prueba unitaria, TDD y BDD - ¿Cuál es la diferencia?
description: Probablemente haya escuchado a alguien hablar sobre pruebas
  unitarias, desarrollo controlado por pruebas (TDD) o desarrollo basado en el
  comportamiento (BDD). Pero, ¿cuál es la verdadera diferencia entre ellos? ¿Y
  cuál debo usar?
date: 2020-04-01T13:36:37.000Z
lang: es
translationKey: teste-unitario-tdd-e-bdd-qual-a-diferenca
slug: prueba-unitario-tdd-and-bdd-qual-a-diferenca
category: tecnologia-es
tags: []
wpId: 9137
canonicalPath: /es/tecnologia-es/prueba-unitario-tdd-and-bdd-qual-a-diferenca/
needsReview: false
updated: 2021-12-12T11:23:33.000Z
---

Probablemente haya escuchado a alguien hablar sobre pruebas unitarias, desarrollo controlado por pruebas (TDD) o desarrollo basado en el comportamiento (BDD). Pero, ¿cuál es la verdadera diferencia entre ellos? ¿Y cuál debo usar? Estas son las preguntas más frecuentes, aunque no hay una respuesta correcta cuál es la de todos los buenos desarrolladores: necesita pruebas.

## Pruebas unitarias

Comenzaré con la más fácil de explicar, las pruebas unitarias tienen como objetivo probar unidades de código. Normalmente, la prueba está restringida a una función de un objeto o módulo. Estas pruebas deben ser específicas de la función, simples y rápidas de escribir y ejecutar. Cuantas más pruebas unitarias tenga el código, más errores se recogerán antes de que el código entre en producción. Las pruebas unitarias aportan tranquilidad a un equipo de desarrolladores, si confían en la cantidad de pruebas disponibles, saben que el cambio de código se realizará con garantía, los posibles descansos se recogerán al principio del proceso de desarrollo.

Las pruebas unitarias deben aislarse de cualquier dependencia externa, como la base de datos o la red. Si los necesita, hay bibliotecas específicas para simular estas situaciones por usted. Los principios básicos de una prueba unitaria deben estar ahí: Pruebas individuales; Prueban sólo una cosa; Aislados el uno del otro.

Hay una confusión entre las pruebas unitarias y las pruebas automatizadas, no son lo mismo. Hay diferentes tipos de pruebas automatizadas, ver algunos de los principales:

-   **Pruebas unitarias**: Se prueba un único fragmento de código (normalmente un objeto o función), aislado de otras partes.
-   **Pruebas de integración**: varios componentes se prueban juntos, por ejemplo, probando el código de acceso a la base de datos en una base de datos de prueba o incluso la interacción entre servicios distribuidos.
-   **Pruebas de extremo a extremo** (E2E): técnica utilizada para probar si el flujo de una aplicación de principio a fin se comporta según lo esperado.

Es importante que comprenda estas diferencias por la siguiente razón: Si está escribiendo una prueba unitaria y no está siendo fácil de escribir, es probable que no sea una prueba unitaria. Las pruebas de integración y aceptación, por ejemplo, son más complejas y a menudo son más lentas, así que asegúrese de que está probando unitariamente.

## Desarrollo controlado por pruebas (TDD)

TDD es en realidad un proceso, indica el flujo que se debe tomar en desarrollo. Su objetivo desde el principio para cubrir tanto código como sea posible con las pruebas, reduciendo así la cantidad de errores en su desarrollo e incluso errores en sus pruebas. El proceso TDD tiene el siguiente flujo:

1.  Comience a escribir la prueba
2.  Ejecute la prueba y cualquier otra prueba. La prueba recién agregada debe fallar. Si no fallas aquí, es posible que no estés probando lo correcto y por lo tanto tienes un error
3.  Escriba la cantidad mínima de código necesaria para pasar la prueba
4.  Ejecute las pruebas para comprobar los nuevos pases de prueba
5.  Opcionalmente, refactorice el código
6.  Repetir a partir de 1

Se necesita un cierto esfuerzo para adaptarse a esta práctica, pero gastar ese tiempo puede recompensar, y mucho! Los proyectos que aplican TDD generalmente tienen una cobertura de prueba del 90 al 100%, lo que significa que es fácil mantener el código y agregar nuevas características de calidad garantizada.

Para muchos desarrolladores, la parte más difícil de TDD es tener que desarrollar la prueba antes de cualquier línea de código.

## Desarrollo basado en el comportamiento (BDD)

BDD es donde tal vez puede complicarse entender. BDD es un conjunto de prácticas recomendadas para escribir grandes pruebas. BDD puede y debe utilizarse junto con métodos de prueba de unidades y TDD.

Un problema común con las pruebas unitarias incorrectas es que dependen en gran medida de cómo se implementa la función que se está probando. Esto significa que si actualiza la función, incluso sin cambiar las entradas y salidas, también debe actualizar la prueba. Hacer que el proceso sea tedioso y repetitivo sin necesidad, y ahí es exactamente donde entra el BDD, en el detalle de la implementación de la prueba.

BDD soluciona este problema mostrándole cómo debe realizar la prueba. No debe probar exclusivamente la implementación, sino más bien el comportamiento. Al sugerir probar el comportamiento y no en cómo se implementa el código, comenzamos a reflejar cuál es el escenario real. Normalmente, intenta separar la prueba en "esta prueba debe hacer algo", por ejemplo, al probar una función que se incrementa en un contador, "debe incrementar el contador en 1".
