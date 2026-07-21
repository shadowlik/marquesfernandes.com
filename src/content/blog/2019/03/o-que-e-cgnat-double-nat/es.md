---
title: ¿Qué es CGNAT (Doble NAT)?
description: >-
  CGNAT es como si el operador hubiera instalado un segundo router en su región
  y compartido su conexión a Internet con sus otros clientes.

  Ser un poco más técnico: Los proveedores comparten un IPV4 público a más de un
  cliente y enrutan la conexión a través de un segundo enrutado a su router
  doméstico.
date: 2019-03-07T12:05:34.000Z
lang: es
translationKey: o-que-e-cgnat-double-nat
slug: o-que-e-cgnat-double-nat-2
category: tecnologia-es
tags: []
wpId: 9218
canonicalPath: /es/tecnologia-es/o-que-e-cgnat-double-nat-2/
needsReview: false
updated: 2021-12-12T11:24:18.000Z
---

Cada vez surgen más quejas con respecto a la dirección de red de grado de portadora (CGNAT), si experimenta algún problema con los juegos o el reenvío de puertos y servicios, es posible que la solución CGNAT le afecte.

Si utiliza un servicio de Internet en Brasil, por ejemplo NET, probablemente se encuentre en un escenario CGNAT.

## ¿Qué es CGNAT y qué significa?

CGNAT es como si el operador hubiera instalado un segundo router en su región y compartido su conexión a Internet con sus otros clientes.

Ser un poco más técnico: Los proveedores comparten un IPV4 público a más de un cliente y enrutan la conexión a través de un segundo router a su router doméstico.

### ¿Por qué hacen esto? :(

Esta solución es necesaria porque el estándar vigente hoy en día en Brasil (IPV4) ya no tiene ips libres, las 4.300 millones de combinaciones posibles ya no anticipan el número de dispositivos / conexiones hoy en día.

Esta solución debe ser temporal hasta el intercambio completo por el nuevo estándar IPV6, que permite 340 billones de millones de combinaciones, más que suficiente para satisfacer la demanda actual de dispositivos conectados a Internet.

### Desventajas de CGNAT

Además de añadir un punto de error de red más y más "resistencia" a la conexión a Internet, CGNAT complica las tareas administrativas de red como el reenvío de puertos y las conexiones p2p (peer-to-peer) que pueden generar problemas en juegos en línea, streaming de vídeo, VoIP (Skype, Discord, etc.).

Y al agregar este nuevo router, también creamos agujeros de seguridad, porque es otro router en la red, mediando todas las conexiones en esta región, un atacante puede encargarse de este router y comenzar a monitorear los paquetes que se transmiten, y además el intercambio de IPV4 público puede obstaculizar las investigaciones criminales porque el control y el registro de acceso se vuelven más complejos en este escenario.
