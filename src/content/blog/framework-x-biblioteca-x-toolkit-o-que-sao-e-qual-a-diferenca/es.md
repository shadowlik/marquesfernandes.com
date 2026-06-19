---
title: Framework x Library x Toolkit - ¿Qué son y cuál es la diferencia?
description: ¿Alguna vez se ha preguntado la diferencia entre un marco, una
  biblioteca y un kit de herramientas? Hay muchas definiciones y esto puede
  confundir a cualquiera.
date: 2020-03-05T21:26:51.000Z
lang: es
translationKey: framework-x-biblioteca-x-toolkit-o-que-sao-e-qual-a-diferenca
slug: framework-x-library-x-toolkit-what-is-and-what-the-difference
category: tecnologia-es
tags: []
wpId: 9160
canonicalPath: /es/tecnologia-es/framework-x-library-x-toolkit-what-is-and-what-the-difference/
needsReview: false
updated: 2021-12-12T11:23:42.000Z
---

¿Alguna vez se ha preguntado la diferencia entre un marco, una biblioteca y un kit de herramientas? Hay muchas definiciones y esto puede confundir a cualquiera. Aunque hay un consenso del 100% entre los límites de las definiciones de cada uno, podemos tratar de enmarcar y generalizar para que los principiantes puedan al menos entender lo que significa cuando un tutorial o curso utiliza cada término.

## Marco de referencia

Un framework es un framework genérico que proporciona una arquitectura estándar, un esqueleto con el que podemos desarrollar software específico. Esta abstracción permite que los patrones de diseño comunes se reutilicen fácilmente, al tiempo que permite que los detalles de las reglas de negocio se dejen a los desarrolladores. La reutilización de patrones de diseño comunes significa tener la estructura general para resolver tipos similares de problemas. Por ejemplo, React proporciona la funcionalidad y el marco de trabajo para programar páginas web complejas mediante la creación de una arquitectura y un conjunto de funcionalidad estándar que permite la creación coherente de proyectos. Otro ejemplo son los famosos marcos Model-View-Controller (MVC), que separan en términos muy abstractos las tres partes principales de una aplicación web. Estos marcos de trabajo pueden manifestarse como funciones, clases e incluso organización de carpetas que necesariamente deben implementarse, como el método render() en React, que es el método necesario para representar cualquier componente.

## Biblioteca

Una biblioteca hace referencia al código que proporciona funciones estándar que se pueden ejecutar dentro de su propio código para controlar tareas comunes. Por ejemplo, una biblioteca matemática proporcionará funcionalidad para cálculos matemáticos comunes, como funciones trigonométricas o logarítmicas. Los lenguajes de programación a menudo tienen bibliotecas para todo tipo de tareas, como procesamiento de datos, análisis de texto, conexión de base de datos, etc. Una vez incluidas, las bibliotecas ahorran la molestia de escribir todas estas funciones.

## Toolkit

El kit de herramientas es una definición poco utilizada y algo ambigua, lo que podemos concluir es que se refiere a cualquier colección de "herramientas" (otro término suelto) que tienen un objetivo común. *Apenas se ve el término que se utiliza actualmente.*

## ¿Cuál es la diferencia?

Ta, describimos en la parte superior lo que cada uno es, pero ¿cuál es la diferencia entre ellos en la práctica?

La diferencia más importante y, de hecho, la diferencia definitoria entre una biblioteca y una estructura es la [inversión de control](https://pt.wikipedia.org/wiki/Invers%C3%A3o_de_controle).

Ta, ¿qué más significa esto? Bueno, eso significa que cuando se llama a una biblioteca, está en control, pero en un marco de trabajo, el control se invierte: el marco de trabajo le llama. *También llamado el Principio de Hollywood: no nos llames, te llamaremos.* Dibujé un boceto para tratar de ejemplificar mejor esta diferencia:

![Framework x Library x Toolkit - ¿Qué son y cuál es la diferencia?](./2020-03-frameworkvsbibliotecavstoolkit.jpg)

Podemos concluir entonces que básicamente, todo el flujo de control ya está en el marco de trabajo y sólo hay unas pocas "pantallas" en blanco predefinidas que puede rellenar con su código y con la regla de negocio de su proyecto, ya que una biblioteca, por otro lado, es "sólo" una colección de características que puede llamar.

Por supuesto, esta interpretación no es la única existente y muchas personas pueden estar en desacuerdo con la definición presentada, si usted tiene alguna mejor idea de cómo definir o ejemplificar, por favor contribuya a la comunidad y deje su comentario!
