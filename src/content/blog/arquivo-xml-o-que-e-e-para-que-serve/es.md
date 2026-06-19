---
title: Archivo XML - ¿Qué es y para qué sirve?
description: Probablemente se ha encontrado con un archivo con la extensión .xml
  y se pregunta cuál es ese tipo de archivo. XML, del lenguaje de marcado
  extensible en ing...
date: 2020-03-20T12:31:51.000Z
lang: es
translationKey: arquivo-xml-o-que-e-e-para-que-serve
slug: file-xml-what-and-and-for-that-serves
category: tecnologia-es
tags: []
wpId: 9154
canonicalPath: /es/tecnologia-es/file-xml-what-and-and-for-that-serves/
needsReview: false
updated: 2021-12-12T11:23:39.000Z
---

Probablemente se ha encontrado con un archivo con la ext`ensi`ón .xml y se pregunta cuál es ese tipo de archivo. XML, del lenguaje de marcado extensible en inglés, es un lenguaje de marcado para crear documentos con datos organizados jerárquicamente, como texto, base de datos o dibujos vectoriales. El lenguaje XML se clasifica como extensible porque permite definir elementos de marcado, lo que significa que puede crear sus propias etiquetas e interpretarlas en el código como considere oportuno, a diferencia de otros lenguajes de marcado, como HTML, que requieren el uso de algunas etiquetas predefinidas.

## Lenguaje de marcado

El lenguaje de marcado es un conjunto de códigos y/o convenciones aplicadas a los datos o texto para que los equipos lean y, en segundo lugar, las personas. Los lenguajes de marcado más famosos son HTML, que es un lenguaje de marcado para dar formato a páginas web, y XML, que tiene el mismo concepto, pero para estandarizar secuencias de datos para facilitar la comunicación con y entre sistemas digitales. Aquí hay una comparación de los dos idiomas:

### Xml

<?xml version="1.0"?>
<filmes>
    <filme id="1">
        <titulo>The White Brans</titulo>
        <genero>Comedia</genero>
        <elenco>
            <ator>Terry Crews,\[16)</ator>
            <ator>Marlon Wayans</ator>
            <ator>Shawn Wayans(1)</ator>
        
    

### Html

<!DOCTYPE html>
<html>
<head></head>
<meta charset="UTF-8">
<title>Título de la página</title>


<body></body>
Contenido de la página

## Breve historia de XML

XML comienza con el desarrollo del Lenguaje de Marcado Generalizado Estandarizado (SGML) de Charles Goldfarb, junto con Ed Mosher y Ray Lorie en la década de 1970, mientras trabajaba en IBM (Anderson, 2004).

Una de las aplicaciones más populares de SGML vino con el desarrollo de HTML (HyperText Markup Language) por Tim Berners Lee a finales de la década de 1980 (Raggett, Lam, Alexander & Kmiec, 1998).

Cuando se trata de almacenamiento e intercambio de datos, HTML es un lenguaje inapropiado porque fue concebido originalmente como una tecnología de presentación, mientras que SGML se considera demasiado complejo para uso general.

XML llena este vacío al ser legible tanto por los seres humanos como por los sistemas, y es lo suficientemente flexible como para admitir el intercambio de datos independiente de la plataforma y la arquitectura.

Durante mucho tiempo XML fue el estándar de comunicación entre sistemas, facilitando la integración humana con varios programas, varios protocolos de comunicación web implementan xml como sus medios de comunicación, siendo el más famoso SOAP. Con la creación d[e JS](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/)ON XML ha perdido mucho espacio y se ha vuelto obsoleto en ciertos usos.

## Aplicaciones XML

Como hemos visto antes, XML permite una lectura fácil para humanos y máquinas, por lo que su gama de aplicaciones es muy completa:

-   Publicación web: XML le permite crear páginas interactivas, permite al cliente personalizar esas páginas y hace que la creación de aplicaciones de comercio electrónico sea más intuitiva.
-   Búsqueda web y automatización de tareas web: XML define el tipo de información contenida en un documento, facilitando la devolución de resultados útiles al buscar en la web, un ejemplo práctico de los cuales son la[s fuentes RS](https://rockcontent.com/blog/o-que-e-feed-rss/)S.
-   Aplicaciones generales: XML proporciona un método estándar para acceder a la información, facilitando el uso, almacenamiento, transmisión y visualización de datos desde aplicaciones y dispositivos de todo tipo.
-   Aplicaciones de negocio electrónico: las implementaciones XML hacen que el intercambio electrónico de datos (EDI) sea más accesible para el intercambio de información, las transacciones de negocio a negocio y las transacciones entre empresas y consumidores.
-   Aplicaciones de metadatos: XML facilita la expresión de metadatos en un formato portátil y reutilizable.

## Marco XML

Cada lenguaje de marcado comienza con una etiqueta inicial, que identifica qué tipo de archivo es, en el caso de xml tenemos<?x`ml version="1.0" encoding="utf-8" ?>, y en` secuencia tenemos la etiqueta raíz, es quien organizará y encapsulará todas las demás etiquetas secundarias:

<?xml version="1.0" encoding="UTF-8"?>
<root>
  <filha>
    <subfilha>.....</subfilha>
  

Ahora vamos a un ejemplo más práctico:

<?xml version="1.0" encoding="UTF-8"?>
<clientes>
  <cliente>
    <nome>Henrique Marques Fernandes</nome>
    <idade>28</idade>
    <pais>Brasil</pais>
  
  <cliente>
    <nome>Terry Crews,\[16)</nome>
    <idade>55</idade>
    <pais>Utiliza</pais>
  

## Cómo crear un archivo XML

Crear un archivo XML es muy simple, puede utilizar edi[tores en línea p](https://codebeautify.org/xmlviewer)ara esto o simplemente un editor de texto simple, lo importante es guardar siempre el archivo con la extensión `.xm`l.

Si desea obtener más información sobre cómo crear un archivo XML, le den la lectura de la do[cumentación en el sitio web de moz](https://developer.mozilla.org/pt-PT/docs/Web/XML/Introducao_a_XML)illa, es muy didáctico y por lo que no me pareció necesario crear un tutorial para esto.
