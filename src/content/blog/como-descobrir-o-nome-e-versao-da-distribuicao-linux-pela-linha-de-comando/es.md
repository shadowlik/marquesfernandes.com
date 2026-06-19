---
title: Cómo averiguar el nombre y la versión de la distribución linux por la
  línea de comandos
description: Probablemente en algún momento de tu vida te enfrentarás a un
  terminal linux desconocido donde no tienes idea de cuál es la distribución, y
  mucho menos la ve...
date: 2019-06-18T19:43:32.000Z
lang: es
translationKey: como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando
slug: como-descubrir-el-nombre-y-versao-de-la-distribucion-linux-por-la-linea-de-comando
category: tecnologia-es
tags: []
wpId: 9212
canonicalPath: /es/tecnologia-es/como-descubrir-el-nombre-y-versao-de-la-distribucion-linux-por-la-linea-de-comando/
needsReview: false
updated: 2021-12-12T11:24:16.000Z
---

Probablemente en algún momento de tu vida te enfrentarás a un terminal linux desconocido donde no tienes idea de cuál es la distribución, y mucho menos la versión... Pero entonces, ¿cómo averé qué distribución/versión estoy ejecutando?

**TL;D**R - Puede utilizar uno de los siguientes métodos:

1.  gato /etc/\*-liberación
2.  lsb\_release -a
3.  hostnamectl

## 1\. Uso del archivo /etc/\*-release

Para averiguar la versión y otra información de su Linux, ejecute el comando cat a continuación en su terminal:

$ gato /etc/\*-release

Ejemplo de ejecución en mi escritorio con [Ubuntu](https://ubuntu.com/):

DISTRIB\_ID-Ubuntu
DISTRIB\_RELEASE 19,04
DISTRIB\_CODENAME-disco
DISTRIB\_DESCRIPTION"Ubuntu 19.04"
NOMBRE "Ubuntu"
VERSION"19.04 (Disco Dingo)"
ID-ubuntu
ID\_LIKE-debian
PRETTY\_NAME"Ubuntu 19.04"
VERSION\_ID"19.04"
HOME\_URL"https://www.ubuntu.com/"
SUPPORT\_URL"https://help.ubuntu.com/"
BUG\_REPORT\_URL"https://bugs.launchpad.net/ubuntu/"
PRIVACY\_POLICY\_URL"https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION\_CODENAME-disco
UBUNTU\_CODENAME-disco

## 2\. Uso del comando lsb\_release

El comando lsb\_release muestra La base estándar de Linux (LSD) y la información específica de la distribución. Active el siguiente comando:

$lsb\_release-a

Ejemplo del resultado:

No hay módulos LSB disponibles.
ID del distribuidor: Ubuntu
Descripción: Ubuntu 19.04
Versión: 19.04
Nombre en clave: disco

## 3\. Utilizando el comando hostnamectl

Para distribuciones systemd basadas en GNU esta es la mejor opción:

$hostnamectl

Ejemplo del resultado:

  Nombre de host estático: \*\*\*\*\*\*\*
         Nombre del icono: ordenador portátil
           Chasis: portátil
        Id. de la máquina: 07c27ab13c7c49b59e53df8781de\*\*\*\*
           ID de arranque: 77062197a37d45eeb656c889c7e5\*\*\*\*
  Sistema operativo: Ubuntu 19.04
            Kernel: Linux 5.0.0-16-genérico
      Arquitectura: x86-64

## ¿Cómo puedo averiguar la versión de mi kernel de Linux?

Ejecutar uno de los siguientes comandos

$uname -a
$uname -mrs

Ejemplo del resultado:

Linux \*\*\*\*\*\* 5.0.0-16-genérico #17-Ubuntu SMP Wed Mayo 15 10:52:21 UTC 2019 x86\_64 x86\_64 x86\_64 GNU/Linux

1.  **Linux - N**ombre del núcleo
2.  **5.0.0-16 -** Versión del núcleo
3.  **x86\_64** \- Versión de arquitectura (64 bits)
