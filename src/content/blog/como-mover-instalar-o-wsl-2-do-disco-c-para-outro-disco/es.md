---
title: Cómo mover/instalar WSL 2 desde el disco C:/ a otro disco
description: Cómo mover/instalar WSL 2 desde el disco C:/ a otro disco. Si tiene
  poco espacio disponible en el disco principal, tenga en cuenta que puede mover
  las instalaciones de WSL a otro disco o ubicación.
date: 2020-07-22T21:24:19.000Z
lang: es
translationKey: como-mover-instalar-o-wsl-2-do-disco-c-para-outro-disco
slug: como-mover-instalar-el-wsl-2-disco-c-a-otro-disco
category: tecnologia-es
tags: []
wpId: 9100
canonicalPath: /es/tecnologia-es/como-mover-instalar-el-wsl-2-disco-c-a-otro-disco/
needsReview: false
updated: 2021-12-12T11:22:57.000Z
---

Recientemente hice un artículo explica[ndo cómo instalar y configurar WSL](http://marquesfernandes.com/como-desenvolver-com-docker-no-linux-dentro-do-windows-sem-dual-boot-wsl-2/) 2 para tener un entorno de desarrollo directo de ventanas Linux completas. Pero como no todo son flores, mi ordenador tiene un SSD con poco almacenamiento, lo que me limita a instalar muchos programas en el disco C:/ Pre`det`erminado. En poco tiempo vi la instalación de WSL 2 empezando a consumir espacio, con tantas imágenes de docker y proyectos frontales con node\_modules, mi límite de almacenamiento se estaba agotando. Como mi portátil también tiene un disco duro de 1 TB, comencé a buscar una manera de instalar / mover WSL 2 a otro disco.

## Instalar LxRunOffline

[LxRunOffline](https://github.com/DDoSolitary/LxRunOffline) es una completa utilidad para administrar El subsistema de Windows para Linux (WSL). Este programa que nos permitirá mover nuestra instalación del di`sco` C:/ a otro disco, en mi caso `D:/`.

La forma más fácil de instalar es mediante el uso de la utilidad [choc](https://chocolatey.org/)o:

choco instalar lxrunoffline

## Listado de instalaciones WSL

Ahora vamos a enumerar todas las instalaciones WSL disponibles, en mi caso estoy en busca de Ubuntu 20.04:

lxrunoffline list

![WSL, Año Nuevo](/wp-content/uploads/2020/07/image-39.png)

## Mover la instalación de Ubuntu 20.04 WSL a otro disco

Primero apague el WSL con el comando `wsl --shutdown`. Debe ejecutar este comando desde un Power Shell con privilegios de administrador.

Ahora que encontramos la instalación que queremos mover a otro disco, es bastante simple, vamos a pasar un comando para mover la instalació`n de Ubuntu` 20.04 al disco `D:`/ carpeta interna llamada `WS`L:

lxrunoffline moves -n Ubuntu-18.04 -d D:'wsl'

Espere un momento hasta que finalice el proceso, después de lo cual la instalación ya se estará ejecutando desde el nuevo disco.
