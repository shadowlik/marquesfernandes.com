---
title: "Hacer que el autocompletado con tab del terminal sea insensible a mayúsculas en Ubuntu"
description: "Por defecto el terminal de Ubuntu distingue entre carpetas y archivos con nombres que empiezan en mayúscula y minúscula; particularmente lo encuentro contraproducente y es..."
date: 2019-02-16T14:30:20.000Z
lang: es
translationKey: fazendo-o-terminal-tab-auto-complete-case-insensitive-no-ubuntu
slug: hacer-que-el-autocompletado-con-tab-del-terminal-sea-insensible-a-mayusculas-en-ubuntu
category: desenvolvimento
tags:
  - ubuntu
  - terminal
  - inputrc
  - case-insensitive
  - case-sensitive
needsReview: true
canonicalPath: /es/hacer-que-el-autocompletado-con-tab-del-terminal-sea-insensible-a-mayusculas-en-ubuntu/
cover: ./2019-02-Screenshot-from-2019-02-16-14-13-37.png
---

Por defecto el terminal de Ubuntu distingue entre carpetas y archivos con nombres que empiezan en mayúscula y minúscula; particularmente lo encuentro contraproducente y es uno de los primeros ajustes que hago en una nueva instalación del SO.

Para aquellos a quienes tampoco les gusta el terminal sensible a mayúsculas, existe una solución que te facilitará la vida.

Pero antes debo recordarte que esta configuración es global y afectará a los demás usuarios del sistema.

Así que vamos allá; obviamente primero abre el terminal (ctrl + alt + t).

## Crea una copia de seguridad

**Siempre, siempre, siempre** haz una copia de seguridad cuando estés modificando archivos de configuración:

$ sudo cp -p /etc/inputrc /etc/\_inputrc.bk

*La bandera* *\-p* *hace que la copia del archivo preserve los permisos, el dueño y la fecha.*

En caso de que algo salga mal puedes simplemente volver al archivo original:

$ sudo cp /etc/\_inputrc.bk /etc/inputrc

## Configurando

Existen otras maneras de editar el archivo; para simplificar y evitar explicaciones de comandos específicos de editores, usaremos un simple comando que añadirá la configuración necesaria en la última línea del archivo:

$ sudo echo "set completion-ignore-case on" >> /etc/inputrc

## Probando

Una manera fácil de probar es navegar hasta tu carpeta de usuario (*home*) e intentar navegar a la carpeta *Desktop*.

Para probar necesitamos abrir un nuevo terminal para que la modificación se cargue:

$ cd ~
$ cd desk # Presiona el tab
$ cd Desktop # Voilà
