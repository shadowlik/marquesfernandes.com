---
title: ¿Cómo borrar la caché de dns en Windows, Mac, Ubuntu y Chrome?
description: DNS, del Sistema de nombres de dominio, actúa como traductor de
  direcciones IP (192.168.0.1) para dominios (marquesfernandes.com), como una
  especie de oficina de correos que puede transformar un código postal (IP) en
  una calle (dominio).
date: 2019-07-30T20:54:28.000Z
lang: es
translationKey: como-limpar-o-cache-de-dns-no-windows-mac-ubuntu-e-chrome
slug: como-borrar-el-cache-de-dns-no-windows-mac-ubuntu-e-chrome
category: tecnologia-es
tags: []
wpId: 9205
canonicalPath: /es/tecnologia-es/como-borrar-el-cache-de-dns-no-windows-mac-ubuntu-e-chrome/
needsReview: false
updated: 2021-12-12T11:24:15.000Z
---

## ¿Qué es DNS?

DNS, del Sistema de nombres de dominio, actúa como traductor de direcciones IP (192.168.0.1) para dominios ([marquesfernandes.com](http://marquesfernandes.com)), como una especie de oficina de correos que puede transformar un código postal (IP) en una calle (dominio).

## ¿Qué es el almacenamiento en caché de DNS?

Como el historial de navegación, imágenes y otros archivos son guardados por su navegador para mejorar la velocidad de navegación, el ordenador también almacena las ubicaciones (direcciones IP) de los sitios web que visitó por lo que evita tener que buscar cada vez a qué IP debe acceder cuando se introduce una respuesta guardada del sitio y el tiempo de carga. Esta es la famosa caché DNS, por lo que si la referencia IP en un dominio se cambia en el servidor DNS, es posible que todavía esté intentando acceder a información obsoleta.

## ¿Cómo limpiar?

Antes de mostrar algunas maneras de borrar la caché DNS de su ordenador vale la pena recordar que dependiendo de dónde esté conectado puede haber otras capas de caché en la red, muy comunes en las empresas que utilizan un sistema proxy y a las que probablemente no tenga acceso. En esta situación, lamentablemente tendrá que esperar a que la memoria caché DNS se renueve ☹.

### Windows

-   Pulse Win + X para abrir el menú
-   Haga clic con el botón derecho en el símbolo del sistema y seleccione Ejecutar como administrador.
-   Introduzca el siguiente comando y pulse Intro:

ipconfig /flushdns

Si el comando se ejecuta correctamente, verá el  
*siguiente mensaje:La configuración de IP de Windows vació correctamente la caché de resolución de DNS.*

### **Macos**

1.  Haga clic en Aplicaciones
2.  Haga clic en Servicios
3.  Haga doble clic en la aplicación Terminal
4.  Escriba el siguiente comando:

sudo killall -HUP mDNSResponder

### Distribuciones Ubuntu y Debian

1.  Abra el terminal (normalmente el acceso directo es Ctrl+Alt+T)
2.  Ejecute el siguiente comando:

sudo /etc/init.d/networking restart

Introduzca la contraseña raíz y espere a que se responda a la siguie*\[ ok \]nte respuesta: Reiniciar las redes (a través de systemctl): networking.service*

### Google Chrome

Abre el navegador Google Chrome, escribe **chrome://net-internals/#dns** en la barra de navegación y pulsa el botón Bor**rar caché de hos**t:

![](./2019-07-image.png)
