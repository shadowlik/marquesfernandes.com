---
title: Transferencia de archivos a través de SFTP a Google Cloud mediante FileZilla
description: Cómo utilizar FileZilla para conectar y acceder a sus archivos en
  sus instancias de máquina virtual en Google Cloud Compute Engine mediante SFTP
  mediante Putty para generar las claves SSH y PPK necesarias.
date: 2019-11-19T21:06:13.000Z
lang: es
translationKey: transferindo-arquivos-por-sftp-no-google-cloud-usando-o-filezilla
slug: transferencia-archivos-por-sftp-no-google-cloud-using-the-filezilla
category: tecnologia-es
tags: []
wpId: 9194
canonicalPath: /es/tecnologia-es/transferencia-archivos-por-sftp-no-google-cloud-using-the-filezilla/
needsReview: false
updated: 2021-12-12T11:24:12.000Z
---

En este artículo le enseñaré cómo utilizar [FileZilla](https://filezilla-project.org/) para conectar y acceder a sus archivos en sus instancias de máquina virtual [en Google Cloud Compute Engin](https://cloud.google.com/compute/)e mediante SFTP media[nte P](https://www.putty.org/)utty para generar las claves SSH [y](http://marquesfernandes.com/2019/02/18/convertendo-arquivos-ppk-para-pem-no-linux-ubuntu-debian/) PPK necesarias.

## Descarga de Masilla y FileZilla

Descarga e instal[a PU](https://www.ssh.com/ssh/putty/#sec-PuTTY-downloads)TTY y [FileZill](https://filezilla-project.org/download.php)a en tu ordenador.

*El programa PUTTY es un generador de claves SSH para crear claves privadas y públicas que le permiten cifrar conexiones.*

*FileZilla es una herramienta para transferir y administrar archivos a través del protocolo FTP.*

## Generación de claves públicas y privadas con PUTTYgen

Abra el program**a PUTTYg**en y haga clic en el botó*n Genera*r.

![](./2019-11-download.jpg)

Aparecerá una barra de progreso pidiéndole que mueva el ratón para generar aleatoriedad. Mueva el ratón sobre el área gris del programa, espere a que la barra de progreso se rellene por completo y luego se generarán las claves.

![](./2019-11-download-1.jpg)

Después de generar las claves, aparecerán nuevos campos justo debajo. En el camp**o Comentario c**lave, escriba el usuario deseado.

Copie la clave pública y guarde la clave privada en un lugar seguro del equipo.

![](./2019-11-download-2.jpg)

## Adición de la clave pública a la instancia en Google Cloud

Inicie sesión en su cuenta de Google Cloud y vaya **a Compute Engine > Vm Instance**s.

Seleccione la instancia a la que desea acceder, haga clic en editar y vaya hacia abajo hasta que encuentre la sesión **de claves SS**H.

![](./2019-11-image-6.png)

Pegue la clave pública que copió anteriormente en el campo **"Introducir todos los datos c**lave", para que vea el usuario que ha especificado al crear la clave izquierda.

![](./2019-11-image-7.png)

Ahora actualice la instancia haciendo clic en **Guarda**r.

## Configuración de la autenticación de clave pública en FileZilla

Abra F**ileZill**a y vaya a Ed**itar > Configuración**.

![](./2019-11-image-9.png)

En el menú del lado izquierdo vaya a **Conexión > FTP > SFT**P.

Haga clic **en Agregar archivo de c**lave y seleccione la clave privada que guardó.

![](./2019-11-image-8.png)

Haga clic en **A**ceptar para guardar la configuración.

## Establecimiento de una conexión segura (SFTP) con su instancia

Para conectarse a la instancia en Google Cloud, necesita la dirección IP y el usuario que crea la clave pública/privada.

En la ventana FileZilla, en el campo host, escrib**a sftp://ipdainstanci**a. En el camp**o Usuari**o, introduzca el usuario y haga clic en Conexión rápida.

Una vez hecho esto, podrá acceder y transferir archivos a su instancia.
