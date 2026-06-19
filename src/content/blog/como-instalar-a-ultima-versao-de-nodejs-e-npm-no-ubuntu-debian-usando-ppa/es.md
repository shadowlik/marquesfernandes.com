---
title: Cómo instalar la última versión de NodeJS y NPM en Ubuntu/Debian usando PPA
description: PPA de Node está siendo actualizado y mantenido en su sitio web
  oficial. Podemos añadir este PPA a nuestro sistema Debian y Ubuntu 19.10,
  18.04 LTS, 16.04 LTS (Trusty Tahr) y 14.04 LTS (Xenial Xerus) e instalar Node
  usando el administrador de paquetes nativo.
date: 2020-01-07T23:17:10.000Z
lang: es
translationKey: como-instalar-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-usando-ppa
slug: how-install-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-using-ppa
category: tecnologia-es
tags: []
wpId: 9176
canonicalPath: /es/tecnologia-es/how-install-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-using-ppa/
needsReview: false
updated: 2021-12-12T11:24:07.000Z
---

**[NodeJS](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)** es una plataforma basada en el motor de ejecución de JavaScript de Chrome para crear fácilmente aplicaciones de red escalables y rápidas. El [PPA de Node](https://deb.nodesource.com/setup_13.x) está siendo actualizado y mantenido en su sitio web oficial. Podemos añadir este PPA a nuestro sistema Debian y Ubuntu 19.10, 18.04 LTS, 16.04 LTS (Trusty Tahr) y 14.04 LTS (Xenial Xerus) e instalar Node usando el administrador de paquetes nativo.

***Echa un vistazo a más en:** [¿Qué es NodeJS de todos modos?](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)*

## Añadido NodeJS PPA

El paquete de instalación de node siempre está disponible en la versión LTS y, en la versión actual, depende de usted elegir qué versión instalar. Vamos a añadir ppa a nuestro sistema e instalar Node en Debian/Ubuntu.

En la última actualización de este artículo NodeJS está en la versión 12 LTS y 13 actual, para instalar la última versión disponible:

$sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_13.x ? sudo -Y bash -

Si desea instalar la última vers**ión de** **LTS**:

$sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_12.x ? sudo -Y bash -

## Instalación de NodeJS

Ahora que hemos agregado el PPA, vamos a ejecutar el comando para instalar NodeJS y también su administrador de dependencias, Node Package Manager (NPM). Usaremos el comando `apt-get update` para actualizar la información de nuestros paquetes `y apt-get instal`l para iniciar el proceso de instalación:

$sudo actualización apt-get
$sudo apt-get install nodejs

## Comprobación de node.js y versión NPM

La instalación puede tardar un tiempo dependiendo de su conexión a Internet, si todo sucede como se esperaba, una vez completada la instalación tenemos que verificar que las versiones instaladas de NodeJS y NPM son correctas. Para obtener más información sobre las versiones disponibles, consulte el [sitio web oficial](https://nodejs.org/download/).

$node -v 

• Resultado esperado
v13.3.0

También marque la versión [NPM](https://npmjs.com/):

$npm -v 

• Resultado esperado
6.13.1

## Ejecutar un javascript simple

Podemos probar si nuestro nodo funciona correctamente ejecutando un script simple directamente desde nuestro terminal:

$ nodo -e "para (deje i á 0; Yo< 10; i++) { console.log(i) }"

• Resultado esperado
0
1
2
3
4
5
6
7
8
9
