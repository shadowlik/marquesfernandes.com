---
title: ¿Qué es CSS y para qué sirve?
description: Hojas de estilo en cascada (CSS) es un lenguaje de diseño diseñado
  para simplificar la presentación y personalización de páginas web (HTML).
date: 2020-07-08T21:10:21.000Z
lang: es
translationKey: o-que-e-css-e-para-que-serve
slug: what-and-css-and-for-that-serves
category: tecnologia-es
tags: []
wpId: 9121
canonicalPath: /es/tecnologia-es/what-and-css-and-for-that-serves/
needsReview: false
updated: 2021-12-12T11:23:26.000Z
---

**H**ojas de e**s**tilo **e**n casca**da** (CSS) es un lenguaje de diseño diseñado para simplificar la presentación y personalización de páginas web **[(HTM](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/)**L).

Si ya sabes lo [que es HTML](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/), entendido que es el esqueleto de todas las páginas en Internet, podemos pensar en css como piel o incluso ropa, es responsable de aplicar todas las personalizaciones visuales como, tamaño de fuente y color, color de fondo, y más. Las reglas presentes para la personalización se establecen en cascada, jerárquicamente, para cada etiqueta secundaria y etiquetas. Por ejemplo:

cuerpo ?
  color de fondo: negro;
  color: blanco;
  tamaño de fuente: 10px;
}
cuerpo h1 ?
  color: rojo;
}

La primera regla anterior aplica una personalización en la página, dejando su color de fondo negro, el color del texto blanco en el tamaño de 10px, ya en la segunda informamos que todas las etiquetas de tipo h1 dentro de la etiqueta body tendrán el color de fuente en rojo.

## Sintaxis CSS

Hay reglas predefinidas para aplicar las reglas en el documento HTML, que están separadas por se**lector** y d**eclaración**.

**.add-red-**c**olor: rojo;**

Un selector es un conjunto de propiedades (también predefinidas) y valores. Los selectores se pueden aplicar a lo siguiente:

-   En todos los [elementos](https://en.wikipedia.org/wiki/HTML_element) de un tipo específico por su etiqueta, por ejemplo, h1.
-   Elementos especificados por algún atributo, en particular:
    -   *id*: Un identificador único dentro del documento `(<h1 id=**"identificado**r"></h1`\>)
    -   *clase*: identificador que puede existir en varios elementos (`<h1 class="**classe**"></h1>`)

Los selectores por clase e id distinguen mayúsculas de minúsculas, deben comenzar con letras y pueden incluir caracteres alfanuméricos, guiones y guiones bajos. Una clase se puede aplicar a cualquier número de instancias de cualquier elemento. Un identificador solo se puede aplicar a un único elemento.

También hay pse*udo-clases, se* utilizan en selectores CSS para permitir el formato basado en información o interacciones que no están explícitamente contenidas en HTML. Un ejemplo de una pseudo-clase ampliamente utilizada es aquella que identifica el contenido solo cuando el usuario pasa el cursor sobre el elemento, normalmente esta clase se utiliza para informar y cambiar de color, por ejemplo, un ví[ncul](#)o. Las pseudoclases se separan e identifican por : o `::`.

## Lista de selectores CSS

| Selector | Descripción |
| --- | --- |
| `**Y**` | Un elemento del tipo E |
| `**E**:link` | Un elemento E es el ancla de origen de un hipervínculo cuyo destino aún no ha sido visitado (: link) o ya ha sido visitado (: visitado) |
| `**E**:Activo` | Un elemento E durante determinadas acciones del usuario |
| `**E**::Primera línea` | La primera línea formateada de un elemento E |
| `**E**::primera letra` | La primera letra de un elemento E |
| `.**c**` | Todos los elementos con la clase "c" |
| `#**meuid**` | El elemento con id á "meuid" |
| `**Y.**` | Un elemento E cuya clase es "advertencia" |
| `**E**-**meuid**` | un elemento E con id igual a "meuid" |
| `.**c**'**meuid**` | el elemento con la clase "c" y el ID igual a "meuid" |
| `**Y** **F**` | Un elemento F que está dentro de un elemento E |
| `*` | Cualquier elemento |
| `**Y**[**foo**]` | Un elemento E con un atributo "foo" |
| `**Y**[**foo**]` | Un elemento E cuyo valor del atributo "foo" es exactamente igual a "bar" |
| `**Y**[**foo**]` | Un elemento E cuyo valor de atributo "foo" es una lista de valores separados por espacios en blanco, uno de los cuales es exactamente igual a "bar" |
| `**Y**[**foo**]` | Un elemento E cuyo atributo "foo" tiene una lista de valores separados por guión que comienza (desde la izquierda) con "en" |
| `**E**:primer niño` | Un elemento E, el primer elemento que se encuentra dentro de la etiqueta primaria |
| `**E**:lang(**fr**)` | Un elemento de tipo E en el lenguaje "fr" |
| `E::antes` | Contenido generado antes del contenido de un elemento E |
| `**E**::after` | Contenido generado después del contenido de un elemento E |
| `**E** > **F**` | Un elemento secundario del elemento F de un elemento E |
| `**E** + **F**` | Un elemento F precedido inmediatamente por un elemento E |
| `**Y**[**foo**^="bar"]` | Un elemento E cuyo valor del atributo "foo" comienza exactamente con la cadena "bar" |
| `**Y**[**foo**^="bar"]` | Un elemento E cuyo valor del atributo "foo" termina exactamente con la cadena "bar" |
| `**Y**[**foo**^="bar"]` | Un elemento E cuyo valor del atributo "foo" contiene la "barra" de la subcadena |
| `**E**:root` | Un elemento E, raíz del documento |
| `**E**:nth-child(**n**)` | Un elemento E, el noveno hijo de su padre |
| `**E**:nth-last-child(**n**)` | Un Elemento E, el noveno hijo de su padre, contando desde el último |
| `**E**:nth-of-type(**n**)` | Un elemento E, el enésimo hermano de su clase |
| `**E**:nth-last-of-type(**n**)` | Un elemento E, el enésimo hermano de su tipo, contando desde el último |
| `**E**:last-child` | Un elemento E, el último hijo de su padre |
| `**E**:primero de tipo` | Un elemento E, primer hermano de su tipo |
| `**E**:último de tipo` | Un elemento E, el último hermano de su tipo |
| `**E**:only-child` | Un elemento E, el único hijo de su padre |
| `**E**:solo de tipo` | Un elemento E, único hermano de ese tipo |
| `**E**:Vacío` | Un elemento E que no tiene elementos secundarios (incluidos los nodos de texto) |
| `**E**:target` | Un elemento E que es el destino del URI de referencia |
| `**E**:enabled` | Un elemento de interfaz de usuario E que está habilitado |
| `**E**:disabled` | Un elemento de interfaz de usuario E que está deshabilitado |
| `**E**:checked` | Un elemento de interfaz de usuario E seleccionado (por ejemplo, un botón de opción o una casilla de verificación) |
| `**E**:not(**s**)` | Un elemento E que no coincide con el selector simple s |
| `**E** a **F**` | Un elemento F precedido (vecino) por un elemento E |

## Cómo usar CSS

Hay dos maneras de usar CSS dentro de su archivo HTML.

Puede utilizar las reglas directamente en las etiquetas html:

<h1 **style="color: re**d;">Texto con color rojo</h1>

Puede crear una etiqueta de estilo (<style>) no seu documento e centralizar todas as regras:

<**style>**
h1 ?
    color: rojo;
}

Puede agregar un archivo CSS externo:

<**link** href="caminho/para/arquivo.css" rel="stylesheet" type="text/css">

Donde el archivo contendría todas las reglas CSS centralizadas:

h1 ?
color: rojo;
}

## Versiones CSS

Css fue propuesto por primera vez por el 10 de octubre de 1994 por el 10 de octubre de 1994. Al mismo tiempo se propusieron varios otros idiomas similares, y después de algunos debates se puso en marcha la primera Recomendación de la CSS del CM3C (CSS1) en 1996. Actualmente el idioma sigue siendo mantenido por la organización W3C, responsable de cuidar de los estándares y versiones de las nuevas versiones.

CSS 1

La primera especificación CSS que se convertirá en una recomendación oficial de W3C es el nivel 1 de CSS, publicado el 17 de diciembre de 1996.

-   Propiedades de texto como fuente y énfasis **(negrit**a, *cursiv*a, ~subrayado~, ...)
-   Color del texto, fondos y otros elementos
-   Atributos de texto, como el espaciado entre palabras, letras y líneas de texto
-   Alineación de texto, imágenes, tablas y otros elementos
-   Margen, borde, relleno y relación de posición para la mayoría de los elementos de diseño
-   Identificación única y clasificación genérica de grupos de atributos (Selectores)

*W3C ya no mantiene la Recomendación CSS 1.*

### CSS 2

La especificación de nivel 2 de CSS fue desarrollada por W3C y publicada como recomendación en mayo de 1998. Un superconjunto de CSS 1, CSS 2 incluye varias características nuevas, como el posicionamiento absoluto, relativo y fijo de elementos, y el índice z (índice z para posicionar en relación con elementos superpuestos), el concepto de tipos de medios, texto bidireccional y nuevas propiedades de fuente como sombras.

*W3C no mantiene más la recomendación CSS2.*

### CSS 3

A diferencia de CSS 2, que es una especificación única grande que define múltiples características, CSS 3 se divide en varios documentos separados llamados "módulos". Cada módulo agrega nuevas características o extiende las características definidas en CSS 2, preservando la compatibilidad con versiones anteriores. El trabajo en el nivel 3 de la CSS comenzó en el momento de la publicación de la recomendación original de CSS 2. Los primeros borradores de LA CSS 3 se publicaron en junio de 1999.

Resumen de las principales especificaciones del módulo:

-   Título de especificación del módulo de datos de estado
-   módulo css3-background Fondos CSS y Bordes Candidato nivel 3 Rec. Octubre 2017
-   css3-box CSS modelo básico Borrador trabajo julio 2018
-   css-cascade-3 CSS en cascada y herencia Nivel 3 Rec. Mayo de 2016
-   css3-color CSS Color Module Recommendation nivel 3 Jun 2018
-   Borrador de trabajo del módulo de contenido generado y reemplazado por CSS3 css3-content Jun 2016
-   css-fonts-3 Módulo de fuentes CSS Nivel 3 recomendación Sep 2018
-   css3-gcpm Contenido generado por CSS para el módulo multimedia paginado Borrador de trabajo mayo 2014
-   css3-layout CSS Model Layout Module Nota Mar 2015
-   Recomendación css3-mediaqueries sobre las consultas con los medios de comunicación junio de 2012
-   mediaqueries-4 Nivel 4 Consultas de medios Rec. Sep 2017
-   CSS3-Multicol Multicol Multicol Módulo de Diseño Multicol Nivel 1 Borrador de Trabajo Mayo 2018
-   Módulo de medios paginado CSS de 3 páginas nivel 3 borrador de trabajo
-   selectores-3 Selectores Nivel 3 Recomendación Nov 2018
-   selectores-4 Selectores Nivel 4 Borrador de Trabajo Feb 2018
-   css3-ui CSS UI Module Level 3 Basic Recommendation (CSS3 UI) Jun 2018

**Referencias:  
**[https://www.w3schools.com/whatis/whatis\_css.asp](https://www.w3schools.com/whatis/whatis_css.asp)  
[http://www.simplehtmlguide.com/whatiscss.php](http://www.simplehtmlguide.com/whatiscss.php)  
[https://es.wikipedia.org/wiki/Cascading\_Style\_Sheets](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
