---
title: "Simplifica tu vida en Linux: SSH Config"
description: "Si tú también te conectas a diario a servidores remotos o VMs locales, probablemente te hayas topado con el tedioso e irritante trabajo de escribir y recordar..."
date: 2019-02-12T20:12:58.000Z
lang: es
translationKey: simplifique-sua-vida-no-linux-ssh-config
slug: simplifica-tu-vida-en-linux-ssh-config
category: tecnologia
tags:
  - linux
  - ssh
  - config
  - bash
  - ubuntu
cover: ./2019-02-Screenshot-from-2019-02-12-20-56-11.png
needsReview: true
canonicalPath: /es/simplifica-tu-vida-en-linux-ssh-config/
---

Si tú también te conectas a diario a servidores remotos o VMs locales, probablemente te hayas topado con el tedioso e irritante trabajo de escribir y recordar todas las combinaciones de usuario + ip/hostname + puerto.

$ ssh henrique@marquesfernandes.com

El ejemplo anterior parece simple y fácil de recordar, pero por desgracia no es así en la mayoría de los casos; probablemente te encontrarás con situaciones como esta:

$ ssh henrique@192.168.99.100 -p 22000 -i ~/.ssh/my.key

¡Aquí es donde entra la magia del archivo config! Permite definir atajos para las conexiones de una manera elegante y organizada, facilitando, y mucho, el trabajo del día a día. Vale, pero ¿dónde está este bendito archivo? Bueno, basta de rodeos y vamos a los ejemplos:

## Creando el archivo config

El archivo config debe quedar dentro de la carpeta .ssh del usuario:

$ touch ~/.ssh/config

## Escenario 1:

Supongamos que tienes una conexión simple como la del primer ejemplo dado al comienzo del artículo, donde tenemos un usuario llamado **henrique** que quiere acceder al servidor **marquesfernandes.com** utilizando una contraseña simple. En nuestro archivo config pondríamos las siguientes configuraciones:

Host mf
    HostName marquesfernandes.com
    User henrique

**Host:** Nombre del atajo para la conexión  
**HostName:** Dirección o IP del servidor  
**User:** Usuario con el que deseas conectarte

Ahora puedes conectarte con un simple comando:

$ ssh mf

## Escenario 2:

En el escenario más complicado, tenemos un usuario **henrique** que quiere conectarse al servidor **192.168.99.100** en el puerto **22000** utilizando el archivo de clave **~/.ssh/my.key:**

Host mf
    HostName 192.168.99.100
    Port 22000
    User henrique
    IdentityFile ~/.ssh/my.key

**Port:** Puerto para la conexión  
**IdentityFile:** Ruta completa al archivo de clave

### Preguntas frecuentes

#### 1\. ¿Cómo hago para poner mi contraseña en el archivo config?

No es posible; por cuestiones de seguridad, siempre que necesites conectarte vía SSH utilizando una contraseña en texto simple, será necesario escribirla en el prompt.

#### 2\. ¿Puedo tener más de un archivo config?

No, solo un config.
