---
title: ¿Qué es HTML y para qué sirve?
description: HTML es un acrónimo de HyperText Markup Language. Es el lenguaje de
  marcado predeterminado para crear páginas web.
date: 2020-05-05T21:55:53.000Z
lang: es
translationKey: o-que-e-html-e-para-que-serve
slug: what-and-html-and-for-that-serves
category: tecnologia-es
tags: []
wpId: 9129
canonicalPath: /es/tecnologia-es/what-and-html-and-for-that-serves/
needsReview: false
updated: 2021-12-12T11:23:29.000Z
---

**HTML** es un acrónimo de **HyperText Markup Language**. Es el lenguaje de marcado predeterminado para crear páginas web.

**HTML** no es un lenguaje de programación, aunque muchas personas lo confunden, es un lenguaje de marcado que define estructuralmente un contenido. **HTML** consta de una serie de elementos predefinidos, denominados etiquetas, que se utilizan para separar, organizar y mostrar contenido según lo programado. Las etiquetas le permiten crear un hipervínculo; una imagen; un título; aumentar o disminuir la fuente y más.

## Breve historia de HTML

El HTML fue creado originalmente por el físico británico [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee), también creador del procolo **[HTTP](http://marquesfernandes.com/o-que-e-http/)**. En ese momento el lenguaje no era todavía una especificación, sino más bien una colección de herramientas para resolver un problema personal de Tim: la comunicación y el intercambio de investigación entre él y sus colegas.

Las primeras versiones de HTML se definieron con reglas sintácticas flexibles y con el tiempo, el uso de HTML aumentó, lo que requiere hacer que la sintaxis sea más definida y estandarizada.

Las primeras especificaciones formales del lenguaje surgieron en la década de 1990, inspiradas en las propuestas originales de Tim Berners-Lee para crear un lenguaje basado en [SGML](https://pt.wikipedia.org/wiki/SGML) para Internet. La primera publicación fue redactado por Tim Berners-Lee y Dan Connolly, y su primera versión fue publicada en 1993, dos años más tarde, en 1995 versión 2.0 desarrollado por un grupo de trabajo de *[Internet Engineering Task](https://pt.wikipedia.org/wiki/Internet_Engineering_Task_Force)* fue publicado. Desde 1996, las especificaciones HTML han sido mantenidas por el [World Wide Web Consortium](https://pt.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) y en el lenguaje [2000](https://pt.wikipedia.org/wiki/2000) se ha convertido en un estándar internacional ([ISO](https://pt.wikipedia.org/wiki/International_Organization_for_Standardization)/[IEC](https://pt.wikipedia.org/wiki/International_Electrotechnical_Commission) 15445:2000). La recomendación HTML 4.01 fue publicada a finales de 1999 por W3C y la versión HTML5, que usamos hoy en día, fue publicada en 2008.

| Versión | año |
| --- | --- |
| Html | 1991 |
| HTML 2.0 | 1995 |
| HTML 3.2 | 1997 |
| HTML 4.01 | 1999 |
| Xhtml | 2000 |
| HTML5 | 2014 |
| HTML5.1 | 2016 y 2017 (2a ed.) |
| HTML5.2 | 2017 |

*Fuente: [Wikipedia](https://pt.wikipedia.org/wiki/HTML#Hist%C3%B3ria)*

## Marco HTML

A continuación podemos ver una estructura básica de **HTML5**:

<!doctype html>

<html lang="pt-BR">
<head></head>
  <meta charset="utf-8">
  <title>Título de la página</title>


<body></body>
  <h1>Título del texto</h1>
  <p>Párrafo</p>
  <img src="examplo\_de\_imagem.jpeg" />

### Etiquetas HTML

Como mencionamos anteriormente, la estructura HTML se basa en etiquetas predefinidas. Puede crear, aunque no muy común, sus propias etiquetas HTML. Las etiquetas se dividen básicamente en: **nivel de bloque** y **nivel en línea**.

1.  Las etiquetas **de nivel de bloque** a menudo ocupan todo el espacio disponible y "saltan" una línea. Los títulos (H1, H2, ...) son un buen ejemplo de etiquetas de bloque.
2.  Las etiquetas **en línea** solo ocupan espacio según sea necesario y normalmente no inician una nueva línea en el documento. Por lo general, sirven para enfatizar algún contenido dentro del documento. Como las etiquetas de enlace (<a> <a/> ) y negrita (<strong> <strong/> ).</strong> </a>

#### Etiquetas a nivel de bloque

Hay tres etiquetas de nivel de bloque que cada documento HTML debe tener:**<html>**,**<head\>**Y**<body\>**.</body></head></html>

-   La etiqueta**<html></html>**es el elemento de nivel más alto que implica todas las páginas HTML.
-   La etiqueta**<head></head>**contiene información meta, como el título de la página, la descripción, etc.
-   La etiqueta**<body></body>**incluye todo el contenido que aparece en la página.

<html>
  <head></head>
    <!-- INFORMAÇÕES META -->  
  
  <body></body>
    <!-- CONTEÚDO DA PÁGINA -->
  

-   Las etiquetas de título tienen 6 niveles. Van desde***<h1></h1>***el***<h6\></h6>***, donde h1 es el título de nivel más alto, normalmente el título de la página, y h6 es el nivel más bajo.
-   Los párrafos están delimitados por ***<p\>***.
-   Las divisiones son secciones de contenido más grandes que normalmente contienen varios encabezados, párrafos y otros elementos más pequeños. Podemos marcarlos usando la etiqueta***<div></div>***o **<section></section>** .
-   También hay etiquetas para listas, se pueden ordenar **<ol></ol\>** o no **<ul></ul>** ordenar. Las posiciones individuales de una lista deben estar entre los**<li></li\>**. Por ejemplo, esto es lo que una lista básica desordenada se ve como en HTML:

<ul>
    <li>Lista del punto 1</li>
    <li>Listar el punto 2/li></li>
    <li>Listar el punto 3/li></li>

#### Etiquetas en línea

Muchas etiquetas en línea se utilizan para dar formato al texto. Por ejemplo, una etiqueta **<strong></strong\>** representaría un elemento en negrita, mientras que las etiquetas mostrarían **<i></i>** cursiva.

Los hipervínculos también son elementos en línea que requieren etiquetas y atributos `href` para indicar el destino del vínculo:

<a href="http://marquesfernandes.com.br">¡Enlace a mi blog!</a>

Las imágenes también son elementos en línea. Puede agregar uno sin etiqueta de cierre. Pero también necesitará utilizar el atributo `src` para especificar la ruta de la imagen, por ejemplo:

<img src="/images/example.jpg" alt="Example image">

## HTML5, en la práctica!

Ahora que hemos aprendido qué es HTML y cómo funciona, podemos poner en práctica usando algunas etiquetas para crear una página web básica:

Ver la pluma [¿Qué es HTML?](https://codepen.io/shadowlik/pen/YzyYmWb) por Henrique Marques Fernandes ([@shadowlik](https://codepen.io/shadowlik)) en [CodePen](https://codepen.io).
