---
title: Cómo desarrollar con Docker en Linux dentro de Windows sin arranque dual
  - WSL 2
description: WSL es una característica disponible en Windows 10, a través de la
  habilitación, desde la versión 1607, y desde la versión 2004 versión 2 se ha
  puesto a disposición de todo el mundo. WSL le permite ejecutar comandos en una
  distribución Linux directamente en Windows, sin necesidad de una máquina
  virtual o arranque dual.
date: 2020-06-18T11:59:11.000Z
lang: es
translationKey: como-desenvolver-com-docker-no-linux-dentro-do-windows-sem-dual-boot-wsl-2
slug: how-to-develop-with-docker-no-linux-within-windows-without-dual-boot-wsl-2
category: tecnologia-es
tags: []
wpId: 9120
canonicalPath: /es/tecnologia-es/how-to-develop-with-docker-no-linux-within-windows-without-dual-boot-wsl-2/
needsReview: false
updated: 2021-12-12T11:23:27.000Z
---

Este es un artículo que he estado esperando ansiosamente durante años para poder escribir, finalmente es posible, de una manera sencilla y optimizada, desarrollar utilizando todas las ventajas de Linux directamente desde Windows. Durante mucho tiempo preferí configurar mi ordenador con arranque dual, usa windows para juegos y otras aplicaciones, [y Ub](http://marquesfernandes.com/?s=ubuntu)untu para trabajar y desarrollar a diario. El entorno Linux aporta algunas ventajas al desarrollo diario, desde un mejor rendimiento con algunas aplicaciones y servicios, Docker, por ejemplo, hasta su potente línea de comandos. Sin embargo, la falta de algunas aplicaciones ampliamente utilizadas y la compatibilidad con los juegos hacen que Windows siga siendo necesario. Hasta que finalmente, en la actualización de Windows de 2004, se agregó WSL2 (Windows Subsytem para Linux), permitiendo ahora una integración más nativa con algunos sistemas en Linux, como [Docker](http://marquesfernandes.com/conteineres-e-docker-o-que-e-e-para-que-serve/).

## ¿Qué es el subsistema de Windows para Linux (WSL2)?

WSL es una característica disponible en Windows 10 por habilitar, ha estado presente desde la versión 1607, pero desde la versión 2004 la versión WSL 2 se ha puesto a disposición de todo el mundo. WSL le permite ejecutar comandos en una distribución Linux directamente en Windows, sin necesidad de una máquina virtual o arranque dual.

WSL le permite instalar varias distribuciones de Linux populares en su máquina, crea una estructura de archivos aislada independiente del sistema principal, pero también le permite acceder a los archivos desde su instalación de Windows.

![Tienda Windows - Linux](/wp-content/uploads/2020/06/image-10-1-1024x560.jpg)

La documentación de Microsoft es muy didáctica y le enseña cómo habilitar y configurar WSL en su máquina, [consulte aqu](https://docs.microsoft.com/pt-br/windows/wsl/install-win10)í.

## WSL2 y Docker

Dado que el subsistema de Windows para Linux WSL 2 introduce un cambio arquitectónico significativo porque es un kernel completo de Linux, permite que los contenedores de Linux se ejecuten de forma nativa sin emulación (Goodbye Hyper-V).

Con Docker Desktop ejecutándose en WSL 2, los usuarios pueden aprovechar las áreas de trabajo de Linux y evitar mantener scripts de compilación de Linux y Windows. Además, WSL 2 proporciona mejoras en el uso compartido del sistema de archivos en el momento del inicio y permite el acceso a algunas características nuevas interesantes para los usuarios de Docker Desktop.

Docker Desktop utiliza la característica de asignación de memoria dinámica en WSL 2 para mejorar considerablemente el consumo de recursos. Esto significa que Docker Desktop solo usa la cantidad necesaria de recursos de CPU y memoria que necesita, y permite que las tareas que consumen mucha cpu y memoria, como la creación de un contenedor, se ejecuten mucho más rápido.

Además, con WSL 2, el tiempo que se tarda en iniciar un demonio de Docker después de un inicio en frío es significativamente más rápido. Se tarda menos de 10 segundos en iniciar el demonio de Docker en comparación con casi un minuto de la versión anterior de Docker Desktop.

Un ejemplo práctico para los desarrolladores de n[odejs y docker, e](http://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)s que ya no es necesario utilizar la `marca --legacy-`watch con nodemon, los cambios en los archivos se propagarán con la misma velocidad y compatibilidad, después de todo, se estarán ejecutando en Linux.

## Configuración de VS Code y Docker con WSL2

Voy a explicar el proceso que hice para mi escenario, uso el editor de código VS (busqué y vi que muchos otros identificadores tienen soporte para WSL también), y desarrollo prácticamente todas mis aplicaciones con Docker, aprenderemos a configurarlo para usar WSL también.

Lo primero que tenemos que entender es la forma en que tratamos con los archivos, después de habe[r habilitado WSL e instalado su distribución](https://docs.microsoft.com/pt-br/windows/wsl/install-win10) de Linux preferida, ahora tendrá dos entornos, como si tuviera una máquina virtual con su propio disco. Aunque puede tener acceso a los datos de Windows desde la línea de comandos WSL, este acceso no es nativo, utiliza una sugerencia para compartir estos archivos que afecta al rendimiento, por lo que todo lo que desea desarrollar en Linux para aprovechar las mejoras debe crearse en la estructura de datos directos WSL.

Así que si estás en una carpeta que se parece a /m`nt/c/, e`stás accediendo a los archivos en Windows, no queremos que se necesite para el desarrollo.

### VS Code - Extensión WSL

Para configurar su VS Code para que admita WSL, simplemente instale la ext**[ensión WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)** remota, desarrollada por Microsfot, hace que toda la magia suceda. Le permite abrir los archivos directamente desde el sistema Linux, y ya integra su terminal con el terminal Linux.

![Remoto - WSL](/wp-content/uploads/2020/06/image-5-1024x560.jpg)

Remoto - WSL

Una vez instalado y configurado, deberá instalar las extensiones de VS Code dentro del subsistema. No te preocupes, es bastante fácil, la extensión Remote - WSL ya habilitó una opción para reinstalar las extensiones:

![Instalar la extensión VS Code en WSL](/wp-content/uploads/2020/06/image-10-1024x560.jpg)

### Docker y WSL 2

Configurar Docker para usar el motor WSL también es bastante simple, solo tienes que ir a la configuración y encontrar la opción para habilitar el uso.

![Wsl Docker 2](/wp-content/uploads/2020/06/image-6-1024x560.jpg)

Una vez habilitado, deberá habilitar la integración con la distribución instalada:

![Wsl Docker 2](/wp-content/uploads/2020/06/image-7-1024x560.jpg)

Si todo sucede según lo esperado, ahora puede usar Docker directamente desde la línea de comandos en WSL:

![VS Code, Docker y WSL 2](/wp-content/uploads/2020/06/image-9-1024x560.jpg)

### Optimización de WSL 2

Poco después de configurar y comenzar a probar esta nueva configuración, me di cuenta de que el consumo de memoria era absurdo (llegué a 8 GB de Ram) separado sólo para WSL 2. Después de una búsqueda, vi que ya hay un pr[oblema en gith](https://github.com/microsoft/WSL/issues/4166)ub para apoyar el problema, aparentemente WSL 2 guarda muchos archivos de caché. Pero hay una solución simple, limitando la cantidad de memoria que WSL puede consumir:

Sólo tiene que crear un archi`vo en %UserProfile%.wslconfi`g con el siguiente contenido:

\[wsl2\]
memoria de 4 GB de memoria- Límites a 4 GB
swap-0
localhostForwarding-true

Y si empiezas a consumir demasiado, podemos ejecutar el comando para borrar las cachés:

`eco 1 ? sudo tee /proc/sys/vm/drop_caches`

Espero que resuelvan este problema pronto, no es una deterrance, pero ciertamente dificulta la experiencia, porque el umbral de la cantidad de RAM puede causar un comportamiento inesperado dentro del subsistema.

## Conclusión

Aunque sí, todavía hay problemas en esta configuración, resulta muy prometedor. Actualmente he desinstalado el arranque dual de mi máquina y estoy 2 semanas trabajando en esta estructura y nada que impida quejarse. Haz una prueba, mira si te adaptas a esta nueva estructura antes de desinstalar tu arranque dual o vuelve por completo a Windows, si encuentras algún problema o tienes algún consejo, ¡comparte con nosotros!
