---
title: Cómo ver el historial de comandos en el terminal linux utilizando el
  comando history
description: Dado que el nombre ya entrega, el comando history enumera todo el
  historial de comandos de su terminal (el mismo historial se puede encontrar en
  el archivo .bash_history en la carpeta de inicio).
date: 2020-01-07T08:39:33.000Z
lang: es
translationKey: como-ver-o-historico-de-comandos-no-terminal-linux-usando-o-comando-history
slug: como-ver-el-historico-de-comandos-no-terminal-linux-using-the-command-history
category: tecnologia-es
tags: []
wpId: 9178
canonicalPath: /es/tecnologia-es/como-ver-el-historico-de-comandos-no-terminal-linux-using-the-command-history/
needsReview: false
updated: 2021-12-12T11:24:08.000Z
---

Cuanto más trabajes con terminales Linux, más necesitarás para optimizar tus tareas recurrentes, buscando comandos que optimicen tu día a día y mejoren tu productividad: El comando his`tory es` sin duda uno de ellos. Dado que el nombre ya entrega, el comando history enumera todo el historial de comandos de su terminal (el mismo historial se puede encontrar en el archivo .b`ash_history en` la carpeta de i*nici*o). De forma predeterminada, el comando history muestra los últimos 5k comandos guardados.

***También echa un vistazo:** [Cómo escanear su servidor Linux en busca de malware (Debian / Ubuntu)](http://marquesfernandes.com/2019/12/04/como-escanear-seu-servidor-linux-por-malwares-debian-ubuntu)*

## Uso del comando de historial básico

Sólo tiene que es`cribir e`l historial en el terminal linux para utilizar el modo más simple del comando:

$ historia

• Resultado
1o claro
2 ls-la
3 sudo apt-get actualización
4a historia

El comando `histor`y mostrará un historial de comandos de su sesión, al principio de cada línea hay un número, podemos usar esta numeración para recuperar y volver a ejecutar el comando deseado:

$!2

• Resultado
drwxr-xr-x 2 shadowlik shadowlik 4096 Dic 28 17:40 Escritorio
drwxr-xr-x 2 shadowlik shadowlik 4096 Dic 28 17:40 Documentos
drwxr-xr-x 6 shadowlik shadowlik shadowlik 4096 Ene 6 23:26 Descargas

Hay otra manera de encontrar y volver a ejecutar comandos haciendo una búsqueda genérica en el comando `histor`y:

$ !ls

También puede volver a ejecutar el último comando escribiendo `!`!.

## Búsqueda de un comando mediante el historial

Ahora vamos a combinar el coman`do hist`ory con el coma`ndo` grep, para que podamos filtrar nuestro historial en busca del comando deseado:

$historial ? grep ls

• Resultado
2 sudo ls -la
5a historia ? grep ls

Otra forma de acceder a la funcionalidad de búsqueda es a través del acceso di`recto Ct`rl-R. Escriba lo que está buscando y su mensaje traerá el resultado:

(búsqueda inversa)'':

## Cambio de un comando ejecutado

A menudo queremos encontrar un comando para volver a ejecutar, pero cambiando alguna opción o parámetro. El comando `histor`y le permite volver a ejecutar comandos con una sintaxis diferente. Por ejemplo, si queremos cambiar nuestro comando de histor`ial anterior. grep ls-`la par`a la historia grep ls` \-ln, puedo ejecutar el siguiente comando:

$'ls'ln'

La `historia` volverá a ejecutar el comando intercambia`ndo` ls por `l`n.

## Eliminación del historial

Es posible que algún día deba eliminar un comando que contenga algunos datos confidenciales o incluso todos los comandos de su historial. Para eliminar un comando determinado, escriba his`tory -d <nº da="" linha=""`\>y elimine todo el contenido del historial, escriba hist`ory -c.</n`º>
