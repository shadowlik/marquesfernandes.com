---
title: Cómo crear un usuario sudo en Linux (Debian/Ubuntu)
description: El comando sudo permite a los usuarios normales acceder a funciones
  administrativas, normalmente disponibles solo para el usuario raíz.
date: 2019-04-01T21:14:30.000Z
lang: es
translationKey: como-criar-um-usuario-sudo-no-linux-debian-ubuntu
slug: how-to-create-a-user-sudo-no-linux-debian-ubuntu
category: tecnologia-es
tags: []
wpId: 9213
canonicalPath: /es/tecnologia-es/how-to-create-a-user-sudo-no-linux-debian-ubuntu/
needsReview: false
updated: 2021-12-12T11:24:16.000Z
---

El comando sudo permite a los usuarios normales acceder a funciones administrativas, normalmente disponibles solo para el usuario *raíz.* Con eso en mente, tenga mucho cuidado con qué usuario le da estos permisos a... Si desea agregar permisos para un usuario existente, vaya al paso 2.

## TL;DR;

$ sudo adduser nomedousuario
$ sudo usermod -aG sudo nomedousuario

## Crear un usuario

**1\.** En el terminal escriba el siguiente comando y no olvide cambiar namedo nota por el nombre que desea crear.

$ sudo adduser nomedousuario

A continuación, tendrá que establecer una contraseña, ya que es un usuario que tendrá permisos de root utilizar una [contraseña muy segura](https://passwordsgenerator.net). A continuación, tendrá que rellenar algunos datos de usuario opcionales, ya que no es necesario que puede dejar vacío.

**2.** Ahora vamos a usar el comando usermod para agregar el usuario al grupo sudo.

$ sudo usermod -aG sudo nomedousuario

**3.** Ahora vamos a probar el nuevo usuario creado y sus poderes como **sudo**.

$ su - nomedo tercero
namedo usuario$ sudo ls -ls /root

Deberá introducir la contraseña la primera vez que utilice el comando **sudo** cada vez que inicie una nueva sesión de terminal.

## Extra: Quitar un usuario

### TL;DR;

$ sudo su -
$userdel -r nomedo amada

**1.** Cambiar al usuario raíz:

$ sudo su -

**2.** Utilice el comando userdel para quitar al usuario anterior:

$userdel nomedodó.

**3\.** También puede eliminar este usuario y su directorio de inicio (/home/username):

$userdel -r nomedo amada

\[the\_ad id="8530"\]
