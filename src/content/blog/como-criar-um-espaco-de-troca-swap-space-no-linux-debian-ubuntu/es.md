---
title: Cómo crear un espacio de intercambio en Linux (Debian/Ubuntu)
description: Si desea mejorar el rendimiento de su instalación Debian/Ubuntu,
  crear un espacio de intercambio virtual puede ayudarlo. Cuando el sistema
  necesita más recursos de memoria de los disponibles, estos recursos se pueden
  mover al espacio virtual evitando errores e interrupciones inesperadas.
date: 2019-12-08T22:55:37.000Z
lang: es
translationKey: como-criar-um-espaco-de-troca-swap-space-no-linux-debian-ubuntu
slug: how-create-a-space-swap-swap-space-no-linux-debian-ubuntu
category: tecnologia-es
tags: []
wpId: 9184
canonicalPath: /es/tecnologia-es/how-create-a-space-swap-swap-space-no-linux-debian-ubuntu/
needsReview: false
updated: 2021-12-12T11:24:10.000Z
---

Si desea mejorar el rendimiento de su instalación Debian/Ubuntu, crear un espacio de intercambio virtual puede ayudarlo. Cuando el sistema necesita más recursos de memoria de los disponibles, estos recursos se pueden mover al espacio virtual evitando errores e interrupciones inesperadas. Dado que esta memoria se asigna normalmente en discos de acceso más lentos, esto puede comprometer la velocidad del sistema, por lo que debe ser el último recurso de la máquina. Siempre trate de liberar más espacio en su memoria cerrando los programas no utilizados para poder seguir trabajando a velocidad normal.

## Consejo en Ubuntu

Si ya utilizas las últimas versiones de Ubuntu, es muy probable que este espacio ya se haya creado automáticamente durante la instalación del sistema operativo. Podemos comprobar con la utilidad **htop** para ver fácilmente si hay un espacio de intercambio, cantidad de espacio libre y usado asignado:

![htop - Intercambio espacial](/wp-content/uploads/2019/12/image-12.png)

En una búsqueda en Internet encontré el siguiente con***sejo: El tamaño de su espacio virtual debe ser igual al doble de la RAM de su ordenador o 32 MB, lo que sea más grande. Pero no debe ser mayor que 2048 MB (o 2 GB).***

## Antes de empezar

Primero vamos a averiguar si nuestro sistema ya tiene un espacio virtual asignado:

$ sudo swapon --show

Si el resultado está vacío, significa que el equipo no tiene un espacio asignado, de lo contrario, espere un resultado similar a:

• Resultado
TAMAÑO DE TIPO DE NOMBRE UTILIZADO PRIO
/swapfile archivo 2G 67.7M -2

Aunque es posible, no es muy común tener más de un espacio de intercambio configurado en el equipo.

## Creación del archivo de intercambio

Recuerde que su usuario necesita tener permisos de root, para esto [vea aquí cómo crear un](http://marquesfernandes.com/2019/04/01/como-criar-um-usuario-sudo-no-linux-debian-ubuntu)o. En este tutorial vamos a crear un espacio virtual con 2G, si necesita menos o más espacio, simplemente reemplace el número 2 con la cantidad en GB deseada.

$ sudo fallocate -l 2G /swapfile

Sólo los usuari**os s**udo deben tener permiso para cambiar el archivo, para ello cambiaremos sus permisos:

$ sudo chmod 600 /swapfile

Ahora vamos a usar el comando mksw**ap par**a configurar el marcador de posición como un espacio de intercambio virtual:

$ sudo mkswap /swapfile

Activamos el archivo de intercambio utilizando el siguiente comando:

$ sudo swapon /swapfile

Tenemos que hacer este cambio permanente, de lo contrario en el próximo inicio del sistema su espacio de intercambio se perderá:

$sudo echo "/swapfile swap defaults 0 0" >> /etc/fstab

Verificamos que nuestro espacio de trading está activo con el comando **swapo**n:

$ sudo swapon --show

• Resultado esperado
TAMAÑO DE TIPO DE NOMBRE UTILIZADO PRIO
/swapfile archivo 2G 147.4M -2

## Ajuste del swappiness

La capacidad de intercamb**io, swappin**ess en inglés, es una propiedad que define cuánto utilizará el sistema el espacio de intercambio. Swappiness puede tener un valor entre 0 y 100. Cuanto menor sea el valor, el sistema intentará evitar el uso de espacio, mayor será el uso de este espacio de forma más agresiva.

El valor predeterminado de swappiness es 60. Usted puede marcar el valor configurado en su sistema con el comando:

$cat /proc/sys/vm/swappiness

• Resultado esperado
60

El valor de 60 está configurado para adaptarse a la mayoría de los sistemas, pero si está configurando este espacio en una máquina utilizada como servidor, especialmente en entornos de producción, se indica que se debe utilizar un valor inferior, en el 10, por ejemplo:

$sudo sysctl vm.swappiness-10

Ahora vamos a hacer este cambio permanente:

$sudo echo "vm.swappiness-10" >> /etc/sysctl.conf

El valor óptimo para el swappiness depende de su sistema y de la carga que manejará. Debe ajustar según sea necesario.

## Eliminación del archivo Swap

Primero desactivamos de forma segura el archivo Swap de nuestro sistema:

$ sudo swapoff -v /swapfile

Elimine el cambio que hicimos en el ar**chivo /etc/**fstab para evitar alertas y problemas de inicio, luego eliminaremos el marcador de posición para no ocupar la memoria sin necesidad:

$ sudo rm /swapfile

Para más detalles técnicos echa un vista[zo: Archlinux - Swap (Portugués)](https://wiki.archlinux.org/index.php/Swap_\(Portugu%C3%AAs\))
