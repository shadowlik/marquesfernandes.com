---
title: Reenvío de túneles/puertos con SSH - Ubuntu/Debian
description: Usando el protocolo SSH para rutear los puertos a un servidor con
  acceso web externo, llamamos a esto el túnel SSH.
date: 2020-03-21T19:26:17.000Z
lang: es
translationKey: tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian
slug: tunnel-forward-ports-with-ssh-ubuntu-debian
category: tecnologia-es
tags: []
wpId: 9150
canonicalPath: /es/tecnologia-es/tunnel-forward-ports-with-ssh-ubuntu-debian/
needsReview: false
updated: 2021-12-12T11:23:37.000Z
---

Recientemente me encontré con un problema para crear un servidor web en casa usando un ordenador antiguo, así que decidí escribir sobre [Carrier Grid NAT (CGNAT)](http://marquesfernandes.com/2019/03/07/o-que-e-cgnat-double-nat/), que es lo que hace imposible enrutar puertos y acceso externo a servidores domésticos / servicios web. Afortunadamente hay una manera de evitar esta situación usando el protocolo [SSH](https://pt.wikipedia.org/wiki/Secure_Shell) para enrutar los puertos a un servidor con acceso web externo, lo llamamos el [túnel SSH.](https://www.ssh.com/ssh/tunneling/example)

## Requisitos previos

-   Abra SSH instalado en su equipo local
-   [Servidor web con acceso externo a Internet y servidor SSH instalado](https://m.do.co/c/6bc37502c1d9)

## Comenzando...

Tienes un servidor web en tu ordenador y te gustaría poder acceder a él fuera de tu red local, para ello necesitarás tener alguna máquina que tenga acceso externo, por ejemplo, una gota básica en [digitalocia](https://m.do.co/c/6bc37502c1d9) (5 doletas mensuales) que ya viene con SSH instalado y habilitado de forma predeterminada, también puedes consultar [amazon](https://aws.amazon.com/pt/) y [google cloud services](https://cloud.google.com/?&utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-bkws-all-all-trial-e-dr-1008075-LUAC0010101&utm_content=text-ad-none-none-DEV_c-CRE_380746899544-ADGP_BKWS+%7C+Multi+~+GCP-KWID_43700047045899971-kwd-155951229-userloc_1001773&utm_term=KW_gcp-ST_GCP&gclid=Cj0KCQjw9tbzBRDVARIsAMBplx-vPL2bYpnbkP49E7n_QpkMwSEJ0VbcLbssHOeHDUbDZuOhIjEbMUoaAmAHEALw_wcB&gclsrc=aw.ds), o ofrecen algunos límites gratuitos e incluso un crédito inicial para usar.

No causar confusión, en este tutorial cada vez que me refiero al servidor, estoy hablando de la máquina que tiene una IP con acceso externo, es decir, la máquina creada en algún proveedor de nube como mencionamos anteriormente.

## Configuración del servidor SSH

Suponiendo que está utilizando un servidor linux, Ubuntu por ejemplo, tendremos que editar algunos ajustes en el archivo /etc/ssh/sshd\_config, busque la línea que contiene las propiedades AllowTcpForwarding y GatewayPorts para yes. Y luego tendrá que reiniciar el servidor SSH:

systemctl sshd
sudo servicio reiniciar sshd

## Reenvío de puertos remotos

Imagine que tiene un servidor en su hogar y necesita acceder a él externamente, fuera de su red local. Para ello vamos a utilizar la funcionalidad de "Reenvío remoto de puertos", básicamente vamos a crear un túnel, una conexión al ordenador que queremos tener acceso externo en el servidor que tiene acceso externo, este servidor actuará con lo que llamamos proxy, sólo recibirá y enrutará a través de este túnel las solicitudes. Para ello utilizaremos el siguiente comando:

$ssh -R porta\_remota:endereco\_local:porta\_local usuario@servidorexterno.com

Así que suponiendo que tenemos nuestro servidor web ejecutándose en el puerto 6060 y dejamos ese servidor accesible a través del puerto 8080 del servidor externo, usaríamos el siguiente comando:

$ssh -R 8080:localhost:6060 henrique@marquesfernandes.com

Si todo va bien, ahora cuando accedemos al servidor a través de la URL marquesfernandes.com:8080 (podría ser una IP también), la solicitud se enrutará al puerto 6060 de la máquina local y la respuesta devuelta al usuario.

## Reenvío de puertos locales

Imagine que tiene una base de datos MySQL en su red de oficina que solo permite conexiones locales, y desea acceder a ese banco a través de un puerto local en su computadora. Usamos el siguiente comando:

ssh -L 4000:127.0.0.1:3306 user@example.com

Esto hará una conexión al puerto `4000` en su computadora. Cualquier solicitud que llegue a este puerto se reenviará al puerto 3306 `desd`e el servidor externo, ahora puede conectar su cliente MySQL localmente en el puerto 4000.

## SSH automático

Si desea mantener su túnel SSH siempre activo reiniciando en caso de desconexión, utilice el programa [Auto SSH](https://www.everythingcli.org/ssh-tunnelling-for-fun-and-profit-autossh/). Le permite monitorear túneles SSH y se encarga de todo el trabajo de reinicio en caso de caída, incluso puede dejarlo funcionando como un servicio de su máquina para la máxima persistencia.
