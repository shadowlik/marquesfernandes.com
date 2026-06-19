---
title: Cómo saber si Linux está en disco duro o SSD
description: Imagine la siguiente situación. Debe averiguar por qué su bloc de
  notas es lento, o incluso una instalación de una base de datos en la nube.
  ¿Recuerdas un artículo que leíste que mostraba la diferencia que EL SSD hace
  en el rendimiento de tu computadora, pero cómo averiguarlo?
date: 2020-07-10T20:51:17.000Z
lang: es
translationKey: como-descobrir-se-o-linux-esta-em-disco-rigido-ou-ssd
slug: how-to-discover-the-linux-this-on-disk-rigido-or-ssd
category: tecnologia-es
tags: []
wpId: 9118
canonicalPath: /es/tecnologia-es/how-to-discover-the-linux-this-on-disk-rigido-or-ssd/
needsReview: false
updated: 2021-12-12T11:23:00.000Z
---

Imagine la siguiente situación. Debe averiguar por qué su bloc de notas es lento, o incluso una instalación de una base de datos en la nube. ¿Recuerdas un artículo que leíste que mostraba la diferencia que EL SSD hace en el rendimiento de tu computadora, pero cómo averiguarlo?

A partir de la vers**ión 2.**6.29 del kernel, los sistemas operativos Linux pueden detectar automáticamente SSD. Hay algunas maneras de averiguar si el disco es SSD o HDD.

#### Método 1 - Asegúrese de que el disco es rotacional

Como ya sabrás, el disco duro tr**adicional (HDD) almacena** los datos en un disco circular conocido como **plat**o. Cuando el disco gira, el cabezal de lectura/escritura sobre la marcha accede a los datos. Cuanto más rápido gire el disco, más rápido funciona el disco duro.

Por otro lado, So**lid State Drive (SDD)** es una tecnología de almacenamiento moderna y un tipo de disco más rápido que almacena datos en chips de memoria flash accesibles al instante. A diferencia de los discos duros tradicionales, los SSD no tienen piezas móviles y **las SSD no gir**an.

Por lo tanto, si desea averiguar si el disco instalado es SSD o HDD normal, asegúrese de que el disco es rotacional mediante el siguiente comando:

$cat /sys/block/sda/queue/rotational

Si la salida es 1, el disco es HDD. Si la salida es **0** (cero), el disco es SDD. Porque, los SSD no se rotarán. Por lo tanto, la salida debe ser cero si tiene SSD en su sistema.

Cada unidad tiene un directorio **en /sys/class/block/**location. Por lo tanto, también puede comprobar los detalles de otras unidades.

$cat /sys/block/sdb/queue/rotational

#### Método 2 - utilizando el comando lsblk

El mandato **lsbl**k lee el sistema de archivo**s sys**fs y **udev db** para recopilar información sobre todos los dispositivos de bloque disponibles o especificados. El comando lsblk forma parte del paquete **util-linux** y viene preinstalado con la mayoría de las distribuciones de Linux.

Si el comando lsblk no está disponible, instale el paquete util-linux mediante el administrador de paquetes de la distribución.

Por ejemplo, en sistemas basados en arch, puede instalarlo mediante el comando:

$ sudo pacman -S util-linux

En sistemas basados en Debian:

$ sudo apt instalar util-linux

En sistemas basados en RPM:

$ sudo yum instalar util-linux

En openSUSE:

$ sudo zypper instalar util-linux

Ahora averigua si el disco es SSD o HDD usando el comando:

$ lsblk -d -o nombre,ruta

**Salida de muestra:**

NOMBRE ROTA
loop0 1
loop1 1
loop2 1
loop3 1
loop4 1
bucle5 1
loop6 1
**sda 1** 
sr0 1

Aquí, "ruta" significa **dispositivo de rotació**n. Si obtiene el valor de ruta en la salida anterior co**m**o 1, el disco es HDD. Si el valor es **0 (cer**o), el disco es SSD.

#### Método 3 - Uso de SMART Monitoring Tools

La otra manera de averiguar si el disco es SSD o HDD está utilizando el comand**o smartc**tl. smartctl forma parte del paquete de herramientas de supervisión SMART, que se utiliza para controlar y supervisar los discos duros ATA y SCSI habilitados para SMART.

Para instalar herramientas de supervisión inteligente en Arch Linux y sus variantes, ejecute:

$sudo pacman -S instalar smartmontools

En Debian, Ubuntu:

$sudo apt instalar smartmontools

En RHEL, CentOS:

$ sudo yum instala smartmontools

En openSUSE:

$sudo zypper instalar smartmontools

Después de instalar el paquete smartmontools, ejecute el siguiente comando para averiguar si el disco es SSD o HDD:

$ sudo smartctl -a / dev / sda grep 'Rotation rate'

Si el disco es SSD, obtendrá una salida como se muestra a continuación.

Velocidad de rotación: Dispositivo de estado sólido

Si el disco es HDD, obtendrá esta salida:

Velocidad de rotación: 5400 rpm

#### ¿Qué sucede si hay varios discos?

¿Qué pasa si tengo más de un registro? ¿Y ambos dicos tienen el mismo tamaño y fabricante? No sé en qué disco está instalado mi Linux. En este caso, simplemente busque en qué disco se encuentra el sistema de archivos raíz mediante el siguiente comando:

$df/-h

**Salida de muestra:**

Tamaño del sistema de archivos utilizado disponible Uso% Montado en
 **/ dev / s**da1 458G 341G 95G 79% /

Alternativamente, utilice el coma**ndo l**shw para encontrar más detalles sobre los discos:

$ sudo lshw -short -C disco

**Salida de muestra:**

Descripción de la clase de dispositivo H/W de la ruta
==================================================== ==================
Disco multi-tarjeta /0/100/1d/1/1/6/0.0.0 /Dev/SDB
/0/100/1d/1/1/6/0.0.0/0/dev/sdb disk           
**/0/1/0.0.0 /dev/sda disco 500GB ST9500325AS** 
/0/2/0.0.0 /dev/cdrom disk DVD + -RW DS-8A8SH

Como se ve en la salida anterior, mi sistema de archivos raíz está instalado **en /dev/sd**a. Ahora siga cualquiera de los métodos anteriores para averiguar si el disco es HDD o SSD.

**Nota:**

En algunos portátiles nuevos co**mo el lenovo ideapa**d s240, verás un nombre de dispositivo diferente, por ejemplo**, nvme0**n1. Echemos un vistazo a la lista de dispositivos de bloque disponibles mediante el comando:

$ls/sys/block

**Salida de muestra:**

encaje0 encaje11 14 encaje17 encaje2 encaje3 encaje6 encaje9
encaje1 encaje12 encaje15 encaje18 encaje20 encaje4 encaje**7 nvme0n1** 
encaje10 encaje13 encaje16 encaje19 encaje21 encaje5 encaje8

Vamos a averiguar en qué disco se encuentra el sistema de archivos raíz:

$df/-h

**Salida de muestra:**

Tamaño del sistema de archivos utilizado disponible Uso% Montado en
 **/ dev / nvme0n1p**6 96G 34G 58G 34% /

Como se ve en las salidas anteriores, no **hay** sda **o s**db. ¡No te asustes! Esto es normal. El nombre del disposi**tivo / dev** / nvme ... indica los últimos "discos" **NVM**e.

Aquí, **/ dev / nvme0n1** es equivalente a **/ dev / sd**a . Por lo tan**to, / dev / nvme0n1**p6 es equivalente **a / dev / sda**6 .

**Referencia:**  
[https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/](https://www.ostechnix.com/how-to-find-if-the-disk-is-ssd-or-hdd-in-linux/)
