---
title: Creación de un servicio Linux con systemd
description: Es muy fácil crear un servicio Linux, puede crear un servicio que
  ejecute cualquier script o programa en cualquier lenguaje de programación, y
  hacer que el sistema sea persistente y resistente como un servicio en su
  máquina.
date: 2020-07-10T20:36:14.000Z
lang: es
translationKey: criando-um-servico-linux-com-systemd
slug: creating-a-servico-linux-com-systemd
category: tecnologia-es
tags: []
wpId: 9115
canonicalPath: /es/tecnologia-es/creating-a-servico-linux-com-systemd/
needsReview: false
updated: 2021-12-12T11:23:01.000Z
---

A menudo veo la necesidad de crear algún programa o script que necesita estar siempre ejecutándose en el equipo, y también cuando el equipo se reinicia.

Hay algunas herramientas para resolver este trabajo, pero siempre considere el uso de soluciones integradas en su sistema operativo primero.

Es muy fácil crear un servicio Linux, puede crear un servicio que ejecute cualquier script o programa en cualquier lenguaje de programación, y hacer que el sistema sea persistente y resistente como un servicio en su máquina.

En este artículo vamos a utilizar [systemd](https://pt.wikipedia.org/wiki/Systemd) para gestionar nuestro servicio, está presente en la mayoría de las distribuciones linux como Ubuntu, Debian, OpenSuse...

## Creación del programa

Vamos a crear una aplicación web simple en [NodeJs](http://marquesfernandes.com/afinal-o-que-e-nodejs/) de ejemplo. Escuchará en el puerto 99`99 y` devolverá la fecha actual.

const http - require('http');

http.createServer(function (req, res)
  res.write(new Date().toString());
  res.end();
.escuchar (9999);

Vamos a probar, en el navegador escrib`a http://localhost:999`9.

![](./2020-07-image-2.png)

Ahora que hemos validado que nuestro programa funciona, haremos que siempre se ejecute, si por alguna razón deja de funcionar debe reiniciarse y si se reinicia la máquina el servicio también debe iniciarse.

## Creación del servicio

Llamaré a nuestro servici`o webda`te, con su editor de terminal preferido crea un archivo en la ruta `/etc/systemd/system/webdate.service`.

\[Unit\]
Descripción-WebDate - Servicio Web de Datos
After-network.target
StartLimitIntervalSec-0
\[Service\]
Tipo-simple
Reiniciar siempre
RestartSec-1
Ient0 de usuario
ExecStart/usr/bin/node /path/arquivo.js

\[Install\]
WantedBy-multi-user.target

Tendrá que cambiar las siguientes variables:

-   `Usua`rio : Pongo a su usuario actual, será el usuario que ejecutará el servicio
-   `ExecStart:` Esta es la ruta de acceso al script que se ejecutará, debe proporcionar primero la ruta de acceso completa a la línea de comandos en el /usr/bin/no`de normal y, a` continuación, la ruta de acceso completa al archivo.

Ahora para iniciar nuestro servicio sólo tiene que ejecutar el siguiente comando:

systemctl webdate start

Para habilitar el inicio automático cuando el sistema está encendido:

systemctl enable webdate

Listo, ahora el servicio ya se está ejecutando y configurado para reiniciarse en caso de fallo e iniciarse automáticamente junto con el sistema. Para detener el servicio, ejecute el siguiente comando:

systemctl stop webdate
