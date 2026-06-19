---
title: Cómo averiguar espacio libre en disco en Linux mediante la línea de comandos
description: ¿Quieres saber cuánto espacio libre tienes en tu disco? Si estás
  acostumbrado a los sistemas operativos con interfaz gráfica, como Windows,
  esta tarea es probablemente muy simple. Pero, ¿qué pasa si te encuentras con
  un terminal simple?
date: 2019-12-03T18:46:49.000Z
lang: es
translationKey: como-descobrir-o-espaco-livre-em-disco-no-linux-usando-a-linha-de-comando
slug: how-to-discover-the-space-free-on-disk-on-linux-using-a-command-line
category: tecnologia-es
tags: []
wpId: 9188
canonicalPath: /es/tecnologia-es/how-to-discover-the-space-free-on-disk-on-linux-using-a-command-line/
needsReview: false
updated: 2021-12-12T11:24:11.000Z
---

¿Quieres saber cuánto espacio libre tienes en tu disco? Si estás acostumbrado a los sistemas operativos con interfaz gráfica como Windows, esta tarea es probablemente muy simple. Pero, ¿qué pasa si te encuentras con un terminal simple? ¿Necesita instalar alguna herramienta? La respuesta es **NO**. En Linux se puede con sólo unos pocos comandos averiguar cuánto almacenamiento se está utilizando en sus discos e incluso en carpetas sin salir de su terminal.

## [Df](https://linux.die.net/man/1/df)

Este comando es probablemente el más simple y servirá a los análisis más básicos. Tiene una amplia variedad de opciones, pero nos centraremos en los informes más s**imples**: df -H. La opción H significa que desea que el comando vuelva de una manera fácil de leer. El informe mostrará agrupados por discos cuánto espacio está disponible, utilizado, gratuito y el porcentaje de uso.

$df -H

![](/wp-content/uploads/2019/11/image-13.png)

Pero, ¿qué pasa si la cantidad de discos es demasiado grande? Como en el caso de la imagen anterior, tenemos discos creados por ubuntu snaps aplicaciones *(/dev/loopX*Y) y queremos centrarnos sólo en la partición principal *(/dev/sda*6):

$df -H/dev/sda6

El resultado ahora se limitará a ese disco:

![](/wp-content/uploads/2019/11/image-14.jpg)

## [Du](https://linux.die.net/man/1/du)

Ahora que sabes cómo identificar cuánto espacio libre te queda o no, es muy probable que quieras averiguar qué carpetas y/o archivos están abarrotando la memoria de tu ordenador y ahí es donde entra en juego otro comando muy útil: The **du** (acrónimo de "**uso de disco**"). Con el coman**do** du puede identificar cuánto utiliza cada carpeta y archivo el almacenamiento. Imaginemos que nuestro almacenamiento se está agotando y queremos saber si el problema está en nuestra carpeta de descargas:

$du-sh /home/shadowlik/Downloads

![](/wp-content/uploads/2019/11/image-15.jpg)

\* *No necesitamos pasar la ruta completa al comando, podemos pasar sólo la ruta de referencia de la carpeta en la que nos estamos ejecutando, en caso de que la imagen de arriba podríamos ejecuta**r descargas du-sh** /.*

Hemos visto anteriorment*e que la* carpeta Descargas pesa aproximadamente 19 gigabytes, ahora averiguaremos qué archivos pesados están en esa carpeta y para ello pasaremos el com**o**dín \* al comando:

$du -sh Descargas/\*

![](/wp-content/uploads/2019/12/image.jpg)

Las capturas de pantalla son diferentes porque formateé mi computadora mientras terminaba este artículo.  
\* Los nombres de archivo se han desenfocado por seguridad.

Ahora ya sabe cuánto espacio de almacenamiento le queda disponible y cómo encontrar los lugares que podrían estar sobrecargando el disco. También aprender [a descubrir la versión linux y la distribución](http://marquesfernandes.com/2019/06/18/como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando) y también par[a crear un usuario sud](http://marquesfernandes.com/2019/04/01/como-criar-um-usuario-sudo-no-linux-debian-ubuntu/)o!
