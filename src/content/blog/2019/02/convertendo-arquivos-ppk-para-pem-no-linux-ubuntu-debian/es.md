---
title: Conversión de archivos PPK a PEM en Linux (Ubuntu/Debian)
description: Recientemente recibí un archivo PPK para conectarme a un servidor
  de la empresa, como usuario ubuntu tuve que convertir al formato pem que es
  aceptado por OpenSSH.
date: 2019-02-18T21:10:41.000Z
lang: es
translationKey: convertendo-arquivos-ppk-para-pem-no-linux-ubuntu-debian
slug: converting-files-ppk-to-pem-no-linux-ubuntu-debian
category: tecnologia-es
tags: []
wpId: 9224
canonicalPath: /es/tecnologia-es/converting-files-ppk-to-pem-no-linux-ubuntu-debian/
needsReview: false
updated: 2021-12-12T11:24:33.000Z
---

Recientemente recibí un archivo PPK para conectarme a un servidor de la empresa, como usuario ubuntu tuve que convertir al formato pem que es aceptado por [OpenSSH.](https://www.openssh.com/)

*Glosario:*  
***PPK (clave privada de PuTTY):*** *Archivo generado por* [*PuttyGEN*](https://www.putty.org/)***PEM (Privacy Enhanced Mail):*** *Archivo de certificado codificado en base64*

  
**1.** Instale la herramienta [putty](https://www.putty.org/) tools en su Linux:

$sudo apt-get install putty-tools

  
**2.** Hemos convertido el archivo PPK al formato PEM:

$ puttygen henrique.fernandes.ppk -The private-openssh -o myserver.pem

*\-O : Tipo de archivo que queremos generar -  
o : Nombre del archivo convertido*

  
**3.** Por motivos de seguridad cuando nos conectamos mediante [OpenSSH](https://www.openssh.com/), comprueba que los permisos del archivo de identidad no están abiertos de par en par. A continuación, necesitamos 'cerrar' los permisos del archivo generado:

$chmod 400 myserver.pem

*Si usted, como yo, nunca recuerde lo que significa la numeración de permisos:* [*chmodcommand*](https://chmodcommand.com/chmod-400)

  
**4.** Ahora probamos la conexión al archivo generado:

$ssh -i myserver.pem ubuntu@11.22.33.44
