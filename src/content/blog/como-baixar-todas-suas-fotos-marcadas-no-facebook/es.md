---
title: Cómo descargar todas tus fotos etiquetadas en Facebook
description: "Facebook ha estado cayendo en desgracia por un tiempo. Así que
  recientemente pensé en hacer una copia de seguridad de todas mis fotos, hasta
  que me encontré con un problema: ¿Cómo descargar las fotos en las que estaba
  etiquetado?"
date: 2021-01-05T19:06:13.000Z
lang: es
translationKey: como-baixar-todas-suas-fotos-marcadas-no-facebook
slug: como-descargar-todas-sus-fotos-etiquetadas-en-facebook
category: tecnologia-es
tags:
  - pyhton
wpId: 11100
canonicalPath: /es/tecnologia-es/como-descargar-todas-sus-fotos-etiquetadas-en-facebook/
needsReview: false
updated: 2021-12-12T11:22:48.000Z
---

Facebook ha estado cayendo en desgracia por un tiempo. Recientemente pensé en hacer una copia de seguridad de todas mis fotos, hasta que me encontré con un problema: ¿cómo descargar las fotos en las que estaba etiquetado? 

Facebook ahora te permite descargar todos los datos que se le proporcionan, fotos, me gusta, publicaciones, contactos y más, pero no ofrece la opción de descargar tus fotos etiquetadas por amigos.

Encontré una solución, relativamente simple, pero necesitará tener instalado Python 2 para ejecutar un script:

1\. Descargue el script de Pytho[n: https://github.com/mgjohnston/fmpd](https://github.com/mgjohnston/fmpd)

dos. Ve a la página "Fotos contigo" y desplázate hasta el final: [https://www.facebook.com/me/photos](https://www.facebook.com/me/photos)

3\. Abra Google Chrome Inspect (ctrl + sh`ift + i), ignore` la advertencia de seguridad y ejecute el siguiente código:

para (enlace de document.getElementsByTagName ('a')) {
  si (! link.href.includes ("? fbid =")) continuar;
  console.log (nueva URL (link.href) .searchParams.get ("fbid"));
}

Ahora necesita copiar todas las URL generadas y guardarlas en un archivo llamado list.txt. No olvide limpiar el archivo y dejar solo los FBID de las fotos.

4\. Ahora necesitaremos cookies de Facebook para que el script funcione y acceda a las fotos para descargarlas en su computadora. Te recomiendo que uses la extensión co[okies.txt para Chrome y gu](https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg)ardes el archivo como "cookies.txt" en la misma carpeta donde descargaste el script.

5\. Use Python 2 para ejecutar el script y descargar las fotos.

python download.py
