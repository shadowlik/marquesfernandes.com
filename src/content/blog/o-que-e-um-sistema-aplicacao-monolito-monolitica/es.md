---
title: ¿Qué es un sistema/aplicación monolito/monolítico?
description: Monolito significa "trabajo construido sobre una piedra" por lo que
  se utiliza para definir la arquitectura de algunos sistemas, se refiere a cómo
  desarrollar un sistema, programa o aplicación donde todas las funcionalidades
  y códigos están en un solo proceso. Estas diversas funcionalidades están en el
  mismo código fuente y en su ejecución comparten recursos desde la misma
  máquina, ya sea procesamiento, memoria, bases de datos y archivos.
date: 2020-07-08T21:51:18.000Z
lang: es
translationKey: o-que-e-um-sistema-aplicacao-monolito-monolitica
slug: o-que-e-um-sistema-aplicacao-monolith-monolithic
category: tecnologia-es
tags: []
wpId: 9116
canonicalPath: /es/tecnologia-es/o-que-e-um-sistema-aplicacao-monolith-monolithic/
needsReview: false
updated: 2021-12-12T11:23:26.000Z
---

Con el avance de la arquitectura de software y las nuevas formas de desarrollar sistemas ganando popularidad, la definición monolítica o monolítica ha vuelto a aumentar, especialmente en comparaciones con microservicios y servicios distribuidos.

Monolito significa "trabajo construido sobre una piedra" por lo que se utiliza para definir la arquitectura de algunos sistemas, se refiere a cómo desarrollar un sistema, programa o aplicación donde todas las funcionalidades y códigos están en un solo proceso. Estas diversas funcionalidades están en el mismo código fuente y en su ejecución comparten recursos desde la misma máquina, ya sea procesamiento, memoria, bases de datos y archivos.

Como el sistema es completo en un solo bloque, su desarrollo es más ágil, en comparación con otras arquitecturas, siendo posible desarrollar una aplicación en menos tiempo y con menos complejidad inicial, notar la palabra inicial.

La medida en que una aplicación se describe como monolítica depende en gran medida de su perspectiva. Tal vez una aplicación que no está orientada a servicios se puede considerar monolítica.

Y términos menos formales, probablemente escuchado el uso de la palabra para referirse a algún sistema grande que tiene sólo un código fuente.

El blog donde se encuentra este artículo es un ejemplo de un monolito, hay una instalación que contiene toda la funcionalidad necesaria que comparten recursos desde el mismo servidor.

## Ventajas y desventajas de un sistema monolítico

Las desventajas y ventajas varían mucho de la propuesta y del problema que su sistema necesita resolver. Generalizando los problemas encontrados, podemos enumerar:

### **Mantenibilidad**

A medida que crece una aplicación monolítica, se agregan varias funciones al mismo código y proceso, lo que puede dar lugar a caídas en cascada de la aplicación en su conjunto. El código se vuelve complejo y difícil de mantener, las entregas a su vez terminan siendo más críticas, menos frecuentes e incluso estables.

### Escalabilidad

Como estamos en la era de la nube y los costos bajo demanda, una aplicación monolítica puede llegar a ser costosa de escalar, ya que es un solo código, toda la funcionalidad debe ser escalada en su conjunto, normalmente escalada verticalmente, agregando más máquina (procesador, memoria, ...) para la aplicación, u horizontalmente por modelos de equilibrador de carga.

### Complejidad

Para nuevas aplicaciones o pruebas de concepto, donde la idea todavía debe ser válida, el sistema monolítico presenta menos complejidad para el desarrollo inicial, en comparación con otras arquitecturas. Muchas empresas eligen un camino "híbrido", donde desarrollan y validan sus ideas construyendo un monolito, pero ya pensando y preparando el terreno para una posible migración a sistemas distribuidos, por ejemplo.

## Costos de

El costo de una aplicación puede ser una ventaja o una desventaja, dependiendo del escenario en el que se encuentra el sistema. Para los proyectos iniciales, su costo tiende a ser una ventaja, ya que solo necesita una máquina para ejecutar todo el sistema. Con el paso del tiempo y con su aplicación de escalado, puede convertirse en una desventaja.
