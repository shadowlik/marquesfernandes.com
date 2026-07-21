---
title: "Cómo configurar el headset bluetooth con micrófono en Ubuntu, Mint (Debian)"
description: "Si usas o acabas de migrar al entorno Linux, especialmente en las distros Ubuntu o Mint, derivadas de Debian, puedes encontrar problemas con el micrófono de tu headset bluetooth."
date: 2021-04-02T09:26:15.000Z
lang: es
translationKey: como-configurar-o-headset-bluetooth-com-microfone-no-ubuntu-mint-debian
slug: como-configurar-el-headset-bluetooth-con-microfono-en-ubuntu-mint-debian
category: tecnologia
tags:
  - linux
  - ubuntu
  - debian
  - mint
  - bluetooth
  - headset
  - fone
  - ofono
  - pulseaudio
needsReview: true
canonicalPath: /es/como-configurar-el-headset-bluetooth-con-microfono-en-ubuntu-mint-debian/
cover: ./2021-04-pexels-parag-deshmukh-577769.jpg
---

Si usas o acabas de migrar al entorno Linux, especialmente en las distros Ubuntu o Mint, derivadas de Debian, puedes encontrar problemas con el micrófono de tu headset bluetooth.

Especialmente ahora durante la pandemia, las famosas calls (videoconferencias) forman cada vez más parte de nuestro día a día. Entonces decidiste comprar ese auricular bluetooth genial para usarlo y, ¿cuando lo conectaste el micrófono no funcionó? No te preocupes, existe una manera de conseguir que el micrófono de tu headset bluetooth funcione en Linux.

Este tutorial fue probado con auriculares de JBL y Air Pods, pero debería funcionar para la mayoría de los casos.

## Activando el micrófono del headset bluetooth

Para que el headset funcione correctamente con el micrófono, necesitarás habilitar el perfil de audio HSP/HFP. Sin embargo, por defecto, [pulseaudio](https://wiki.archlinux.org/index.php/PulseAudio_\(Portugu%C3%AAs\)#:~:text=PulseAudio%20%C3%A9%20um%20software%20livre,GNU%20Lesser%20General%20Public%20License.) (servidor de sonido integrado en estas distribuciones de Linux) solo ofrece soporte para HSP. Para hacer que HSP/HFP funcione, necesitamos habilitar el HFP en pulseaudio y para ello vamos a usar el servicio [ofono](https://en.wikipedia.org/wiki/OFono).

1\. Instala `ofono`

$ sudo apt install ofono

2\. Configura `pulseaudio` para usar `ofono`  
Edita el archivo `/etc/pulse/default.pa`, encuentra la línea `load-module module-bluetooth-discover` y cámbiala por `load-module module-bluetooth-discover headset=ofono`

3\. Agrega el usuario `pulse` al grupo `bluetooth` para que tenga los permisos necesarios

$ sudo usermod -aG bluetooth pulse

4\. Edita y agrega los permisos en el archivo `/etc/dbus-1/system.d/ofono.conf`, agrega el código de abajo justo antes del cierre `</busconfig>`

<policy user="pulse">
    <allow send\_destination="org.ofono"/>
</policy>

5\. Para hacer que ofono funcione es necesario proporcionarle un módem. Y para ello vamos a instalar un emulador de módem llamado [phonesim](https://packages.debian.org/stretch/devel/ofono-phonesim) que será implementado por ofono para funcionar. Instala `ofono-phonesim`:

$ sudo add-apt-repository ppa:smoser/bluetooth
$ sudo apt-get update
$ sudo apt-get install ofono-phonesim

6\. Configura `phonesim` agregando las siguientes líneas en el archivo `/etc/ofono/phonesim.conf`

\[phonesim\]
Driver=phonesim
Address=127.0.0.1
Port=12345

Ahora, reinicia el servicio ofono:

$ sudo systemctl restart ofono.service

7\. Ahora necesitamos definir y habilitar algunos servicios para iniciar ofono-phonesim como servicio.

Para ejecutar `ofono-phonesim -p 12345 /usr/share/phonesim/default.xml` al iniciar el sistema, crea como root el archivo `/etc/systemd/system/ofono-phonesim.service` con el siguiente contenido:

\[Unit\]
Description=Run ofono-phonesim in the background

\[Service\]
ExecStart=ofono-phonesim -p 12345 /usr/share/phonesim/default.xml
Type=simple
RemainAfterExit=yes

\[Install\]
WantedBy=multi-user.target

Después de que `ofono-phonesim` se ejecute, también necesitarás habilitar y poner el módem phonesim en línea.

Para ello vamos a usar el código de un [repositorio](http://git.kernel.org/pub/scm/network/ofono/ofono.git) git:

$ cd /tmp
$ git clone git://git.kernel.org/pub/scm/network/ofono/ofono.git
$ sudo mv ofono /opt/

Ahora puedes habilitar y poner el módem phonesim en línea creando otro servicio que dependa del servicio ofono-phonesim. Nuevamente, crea un nuevo archivo de servicio como root en `/etc/systemd/system/phonesim-enable-modem.service` y coloca el siguiente contenido:

\[Unit\]
Description=Enable and online phonesim modem
Requires=ofono-phonesim.service

\[Service\]
ExecStart=/opt/ofono/test/enable-modem /phonesim
ExecStart=/opt/ofono/test/online-modem /phonesim
Type=oneshot
RemainAfterExit=yes

\[Install\]
WantedBy=multi-user.target

A continuación, ejecuta los siguientes comandos para habilitar y ejecutar los dos daemons:

$ sudo systemctl daemon-reload
$ sudo systemctl enable ofono-phonesim.service
$ sudo systemctl enable phonesim-enable-modem.service
$ sudo service phonesim-enable-modem start

Verifica que todo haya ocurrido como se esperaba y que el servicio se esté ejecutando:

$ sudo service phonesim-enable-modem status

8\. Por último, reinicia `pulseaudio`:

$ pulseaudio -k.

![](./2021-04-image.jpg)

Ahora ya deberías poder ver tu headset como dispositivo de entrada en la sección de configuración de sonido. Existe cierta inestabilidad en esta configuración: de vez en cuando puede que tu auricular se desconfigure o que el cambio de perfil de audio no funcione; cuando esto ocurra, reinicia los servicios como se describió arriba y también pulseaudio.
