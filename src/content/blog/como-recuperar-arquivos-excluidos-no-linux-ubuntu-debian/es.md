---
title: Cómo recuperar archivos borrados en Linux - Ubuntu/Debian
description: En este artículo vamos a aprender cómo recuperar archivos
  eliminados en Linux utilizando las herramientas TestDisk y Photorec. No tengas
  miedo si no tienes mucha experiencia en la línea de comandos, es bastante
  fácil de usar y podrás recuperar los archivos eliminados en Ubuntu/Debian y
  otras distribuciones de Linux.
date: 2020-01-29T02:22:37.000Z
lang: es
translationKey: como-recuperar-arquivos-excluidos-no-linux-ubuntu-debian
slug: como-recuperar-deleted-files-no-linux-ubuntu-debian
category: tecnologia-es
tags: []
wpId: 9170
canonicalPath: /es/tecnologia-es/como-recuperar-deleted-files-no-linux-ubuntu-debian/
needsReview: false
updated: 2021-12-12T11:24:06.000Z
---

¿Alguna vez has tenido esa horrible sensación? ¿Una sensación desesperada que se produce cuando te das cuenta de que borraste accidentalmente un archivo importante y no está en la basura? Ser y ser que comienza el proceso de luto, negación, ira...

Pero, ¿qué tal si no pasas por todas las etapas del dolor? ¡Respira, no te preocupes y recuerda que no estás solo! Tarde o temprano todo e[l mundo termina haciéndolo en](https://www.tecmundo.com.br/programacao/103701-cara-cade-firma-rapaz-deleta-empresa-linha-codigo-errada.htm) un momento de distracción.

*\- Pero, ¿cómo me dices que no me preocupe? ¡¿Estás demente?! Acabo de borrar un guión en el que había estado trabajando durante horas!!!*

Fácil pequeño saltamontes, en este artículo vamos a aprender cómo recuperar archivos eliminados en Linux utilizando las herramientas TestDisk y Photorec. No tengas miedo si no tienes mucha experiencia en la línea de comandos, es bastante fácil de usar y podrás recuperar los archivos eliminados en Ubuntu/Debian y otras distribuciones de Linux.

Cuando eliminamos un archivo en Linux, se elimina de una lista y no necesariamente del disco. Mientras no haya guardado o cambiado muchas cosas en su máquina, esta lista todavía existe! ¡Ufa! Y sólo para que lo entiendas, dependiendo del tamaño del archivo y el espacio libre en tu DURO DRIVE, los archivos eliminados pueden persistir indefinidamente, incluso si cambias muchos archivos en tu disco.

[Echa un vistazo a cómo eliminar archivos de forma permanente y segura en Linux.](http://marquesfernandes.com/como-deletar-permanentemente-arquivos-no-linux/)

Ahora que estás más tranquilo, vamos a la parte buena, no necesitas ser un hacker para recuperar tus archivos eliminados, solo sabe cómo abrir el terminal, copiar / pegar algunos comandos y seguir el paso a paso que te mostraré cómo usar las herramientas para recuperar tus archivos eliminados.

## 0 - Descubrir el tipo de partición

Si está en modo EFI y/o la partición donde estaba el archivo eliminado es ext3 o e**xt4,** siga **el** paso 1.1 [**y, a cont**i](#Instalando-o-TestDisk)nuación, vaya a Rec**[uperación de archivos eliminados con Photore](#photorec)**c.

Si no está seguro de qué tipo de partición es, utilice el comando `df -Th` para enumerar todas las particiones y sus tipos desde sus unidades de disco:

![Captura de pantalla 1](/wp-content/uploads/2020/01/image-31.png)

df -th

## 1 - Cómo recuperar archivos eliminados en Linux usando TestDisk

Voy a explicar nuestro ejemplo: Tengo una memoria USB con tres archivos, y sin querer voy a eliminar con el comando rm c`urriculum.txt mi pr`ecioso currículum, me tomó horas escribiendo, ¡Oh cielos! Cuando eliminamos por la línea de comandos, nuestro archivo no va automáticamente a la papelera de reciclaje, por lo que tendremos la impresión de que se ha ido para siempre.

![Captura de pantalla 2](/wp-content/uploads/2020/01/image-20.png)

Nuestro escenario de ejemplo

Y mira lo bien, ya no me asusto, y no es porque estemos en un escenario simulado, sino porque sé que todo lo que necesito hacer para recuperarme es usar las herramientas adecuadas. Bonus obtendrás esa sensación de que te has convertido en un hacker recuperando archivos del más allá.

### 1.1 - Instalación de TestDisk

Primero tenemos que instalar la herramienta TestDisk. La mayoría de las distribuciones linux ya tienen esta herramienta en su repositorio. En Ubuntu/Debian puede instalar utilizando el gestor de paquetes directos del terminal:

`sudo apt install testdisk`

### 1.2 - Ejecución de TestDisk

Ahora ejecute TestDisk en el terminal con el comando:

`testdisk sudo`

![Captura de pantalla 3](/wp-content/uploads/2020/01/image-12.png)

### 1.3 - Creación de un archivo de registro

No te asustes por la interfaz, es bastante intuitivo. ¡Mantén la calma, estamos cerca de recuperar tu archivo! Utilice las flechas para navegar entre los menús y la tecla Intro que desea seleccionar.

Probablemente esté usando una versión superior de 7.0, por lo que muchos de los comandos recomendados ya se resaltarán. Casi siempre la recomendación lo hace bien, así que lo primero que necesitamos es crear un archivo de registro con la opció`n Crea`r. Selecciónelo y pulse la tecla Intro.

### 1.4 - Selección del disco

![Captura de pantalla 4](/wp-content/uploads/2020/01/image-21.png)

En este paso verá una lista de sus discos. Seleccione la partición donde estaba su archivo, si no sabe lo que sigue siguiendo las recomendaciones de la herramienta, en mi caso es el disco de la memoria USB de Kingston. *No olvide seleccionar la opción Continuar en el menú de na*`vegació`n.

### 1.5 - Selección del tipo de partición

![Captura de pantalla 5](/wp-content/uploads/2020/01/image-23.png)

Ahora sigamos los mismos consejos que el paso 4 y confíemos en la sugerencia de TestDisk.

### 1.6 - Selección de la utilidad

![Captura de pantalla 6](/wp-content/uploads/2020/01/image-24.png)

En esta etapa tendremos que ver un poco mejor. En caso de que no lo hayas notado, esta herramienta no es sólo para recuperar archivos eliminados, sino una poderosa utilidad para discos. Pero si echas un vistazo a la descripción de las opciones, verás que lo que queremos hacer está en `Avanzad`o.

### 1.7 - Selección de la partición

![Captura de pantalla 7](/wp-content/uploads/2020/01/image-26.png)

Ahora tenemos que seleccionar la partición donde se encuentra nuestro archivo, probablemente la partición correcta, será la partición con el mayor número de sectores. En el menú de navegación, seleccione `Recupera`r.

### 1.8 - Encontrar el directorio de nuestro archivo

Encontramos la carpeta en nuestro archivo, y mira quién está allí en rojo! ¡Nuestro archivo eliminado vive!

![Captura de pantalla 8](/wp-content/uploads/2020/01/image-29.png)

No me importa la diferencia de impresiones, tuve que rehacer los pasos y terminé necesitando eliminar el archivo de registro anterior de TestDrive

### 1.9 - Recuperación de archivos eliminados

![Captura de pantalla 9](/wp-content/uploads/2020/01/image-30.png)

Ahora para recuperar nuestros archivos necesitamos seleccionar nuestro archivo y presionar la tecla **"**c". Entonces usted tendrá que elegir para qué dirección desea recuperar el archivo y si todo va bien un mensaje como el siguiente debe aparecer: "Copiar hecho! 1 ok, 0 falló."

¡Listo! Si ha realizado todos los pasos y recibió el mensaje de éxito, su archivo estará seguro. Asegúrese de que su contenido sigue intacto, si algo salió mal, repita todos los pasos. Y si usted hizo todos los pasos, tal vez el tipo de su partición no se puede restaurar utilizando TestDisk, ext4 por ejemplo, pero no se preocupe... Podemos utilizar otra herramienta que se instala junto con el paquete TestDisk, Photorec!

## 2 - Cómo recuperar archivos eliminados en Linux usando Photorec

Desafortunadamente los pasos anteriores no son posibles para algunos tipos de particiones (ext3 y ext4 por ejemplo), para recuperar archivos eliminados en este tipo de partición tendremos que pasar por un proceso un poco más molesto y utilizando otro programa. Recuerde que este método también se puede utilizar para prácticamente todos los otros tipos de particiones.

El proceso puede tardar un poco más dependiendo de cuántos archivos eliminados tiene en el disco que son de la misma medida en que desea recuperar.

Supongamos que borré un archivo llamado c**urriculum.doc**.

![Captura de pantalla 10](/wp-content/uploads/2020/01/image-32.png)

### 2.1 - Ejecución de Photorec

![Captura de pantalla 11](/wp-content/uploads/2020/01/image-33-1024x576.png)

Ejecute el comando `photorec sud`o en su terminal para iniciar el programa de recuperación.

### 2.2 - Selección de tipos de archivo

![Captura de pantalla 12](/wp-content/uploads/2020/01/image-35-1024x576.png)

Selecciona el tipo de archivos que queremos recuperar, cuanto más específico sea, menos tiempo tardará en recuperar nuestro archivo. Haga clic en la **tec**la "s" para descelebrar todas las opciones y busque la extensión de su archivo, en nuestro caso **.do**c. Después de seleccionar todas las extensiones deseadas, haga clic en **"b**" para guardar la nueva configuración y, a continuación, haga clic en enter en la opción de salir para volver al menú principal.

### 2.3 - Selección de la partición

![Captura de pantalla 13](/wp-content/uploads/2020/01/image-36-1024x576.png)

Seleccione la partición y, con la opción Buscar seleccionada, pulse Intro.

En este paso, tenemos que seleccionar qué tipo de partición, seleccionar según su necesidad, en nuestro caso la selección automática ya ha golpeado qué opción es correcta.

### 2.4 - Selección del modo de búsqueda

![Captura de pantalla 14](/wp-content/uploads/2020/01/image-37-1024x576.png)

Seleccione la opción gratuita para una búsqueda más rápida solo en los espacios de memoria desasignados, o si lo prefiere, busque en toda la partición.

### 2.5 - Selección de la carpeta de destino

![Captura de pantalla 15](/wp-content/uploads/2020/01/image-39-1024x576.png)

Ahora tenemos que seleccionar a qué carpeta queremos que se envíen nuestros archivos recuperados, le recomiendo que cree una carpeta en un disco diferente de lo que está tratando de recuperar. He creado una carpeta llamada Recuperación en el disco principal para enviar los archivos recuperados. Navegue hasta que encuentre el destino deseado y luego presione la tecla "c" para iniciar la recuperación.

### 2.6 - Realización de la recuperación de archivos

![Captura de pantalla 16](/wp-content/uploads/2020/01/image-40-1024x576.png)

El proceso de búsqueda de Photoreco suele llevar más tiempo que TestDrive porque escanea toda la partición en busca de todos los archivos eliminados con las extensiones que seleccionamos para buscar, puede seguir el proceso y en tiempo real comprobar si algún archivo ya se ha recuperado en la carpeta seleccionada en el último paso.

### 2.7 - Encontrar el archivo recuperado

En la carpeta de destino verá que se crearán una o m`ás carpetas` recup\_dir.\*, en ellas estarán los archivos recuperados, si observa que hay muchas carpetas para buscar su archivo, utilice el comando bu`scar . -name *filename*.doc pa`ra encontrar recursivamente el archivo deseado.

## Conclusión

Como has visto, eliminar un archivo no es el fin del mundo, hay maneras de recuperar nuestros archivos incluso si no aparecen en la papelera de reciclaje. Pero no vamos a confiar sólo en la "suerte", siempre trataremos de ser muy cuidadosos al eliminar y ejecutar comandos en el terminal, algunos comandos y situaciones pueden ser irreversibles.
