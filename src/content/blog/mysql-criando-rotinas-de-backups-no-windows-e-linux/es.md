---
title: MySQL - Creación de rutinas de copia de seguridad en Windows y Linux
description: La mejor manera de prevenirse es mantener una rutina diaria (o
  según lo necesite) copias de seguridad, y eso es exactamente lo que
  aprenderemos a hacer en este artículo!
date: 2020-03-23T21:19:49.000Z
lang: es
translationKey: mysql-criando-rotinas-de-backups-no-windows-e-linux
slug: mysql-creating-routines-of-backups-no-windows-e-linux
category: tecnologia-es
tags: []
wpId: 9145
canonicalPath: /es/tecnologia-es/mysql-creating-routines-of-backups-no-windows-e-linux/
needsReview: false
updated: 2021-12-12T11:23:36.000Z
---

Si tiene una base de datos MySQL, lo más probable es que ya haya necesitado o necesite acceder a una copia de seguridad desde su banco. La mejor manera de prevenirse es mantener una rutina diaria (o según lo necesite) copias de seguridad, y exactamente lo que aprenderemos a hacer en este artículo. Aprenderemos a crear rutinas de copia de seguridad mysql en Windows y Linux, nuestro objetivo será crear un script que cree una copia de seguridad de nuestro banco en un archivo comprimido con marcado de fecha y una rutina diaria para ejecutar, nuestro script también será capaz de eliminar archivos de más de 7 días.

-   [¿Qué es MySQL?](#o-que-%C3%A9-mysql)
-   [Creación de copias de seguridad de MySQL diariamente en Windows](#criando-backups-do-mysql-diariamente-no-windows)
-   [Creación de copias de seguridad de MySQL diariamente en Linux](#criando-backups-do-mysql-diariamente-no-linux)

## ¿Qué es MySQL?

No voy a entrar en una gran cantidad de datos técnicos sobre el historial de MySQL, se puede comprobar este [enlace](https://www.hostinger.com.br/tutoriais/o-que-e-mysql/), pero brevemente MySQL es un sistema de gestión de bases de datos (DBMS), que utiliza el lenguaje SQL - Lenguaje de consulta estructurado, de Ingl*és Structured Query Languag*e. Actualmente es mantenido por [Oracle Corporation](https://www.oracle.com/br/corporate/) y distribuido bajo dos licencias: [GPL](https://pt.wikipedia.org/wiki/GNU_General_Public_License) y [Commercial License](http://www.mysql.com/company/legal/licensing/commercial-license.html).

## Creación de copias de seguridad de MySQL diariamente en Windows

Aprenderemos a crear un script completo en Windows, para ello es necesario haber instalado previamente MySQL y tener los datos de usuario legibles en la base de datos para ser copiados y usaremos [7zip](https://www.7-zip.org/) para comprimir nuestros archivos.

Primero vamos a crear el archivo que contendrá nuestras credenciales de acceso bancario: `config.cn`f.

• Configuración de usuario
\[mysqldump\]
 user-root
 contraseña-contraseña

Y ahora el archivo que realizará todo el proceso de copia de seguridad.

#Set-ExecutionPolicy -ExecutionPolicy Bypass 
$mysqlpath de la ruta de acceso a la instalación de MySQL" en "C:"Archivos de programa, MySQL Server 5.5-bin" - Ruta de acceso a la instalación de MySQL
$backuppath de la ruta de acceso para almacenar copias de seguridad para almacenar copias de seguridad
$7zippath - "C:-Archivos de programa (x86)-7-Zip" - Ruta de acceso a la instalación de 7zip
$config : "C:-config.cnf" - Ruta de acceso al archivo con credenciales
$database "blog" - Nombre de nuestra base de datos
$errorLog : "C:-error\_dump.log" - Ruta de acceso a nuestro archivo de registro
$days 7 días para guardar los archivos de copia de seguridad
$date - Fecha de obtención 
$timestamp " + $date.día + $date.month + $date.year + "\_" + $date.hour + $date.minute 
$backupfile á $backuppath + $database + "\_" + $timestamp +".sql" 
$backupzip - $backuppath + $database + "\_" + $timestamp +".zip" 
 
• Inicia el proceso de copia de seguridad 
$mysqlpath CD 
.-mysqldump.exe --defaults-extra-file-$config --log-error-$errorLog --result-file-$backupfile --databases $database /c 

• Inicia el proceso de compactación con 7zip  
CD $7zippath 
.-7z.exe a -tzip $backupzip $backupfile 
 
• Elimina el archivo sin procesar
Del $backupfile 

• Elimina los archivos antiguos
$backuppath de CD 
$oldbackups gci \*.zip\* 
 
for($i-0; $i -lt $oldbackups.count; $i++) 
    si ($oldbackups\[$i\]. CreationTime -lt $date. AddDays(-$days)) 
        $oldbackups de la\[$i\] casa de la casa de los Quita-Item -Confirm:$false 
    } 
}

### Programador de tareas - Creación de programación

Para crear la programación en Windows puede usar el Programador de tareas.

![Programador de tareas](./2020-03-image-1.jpg)

## Creación de copias de seguridad de MySQL diariamente en Linux

Ahora aprenderemos a crear un script completo en Linux, para ello es necesario haber instalado previamente MySQL y tener los datos de usuario legibles en la base de datos para ser copiados. También usaremos [bzip2](https://www.sourceware.org/bzip2/) para comprimir nuestros archivos, si no desea utilizar esta funcionalidad, comente las líneas 28 y 29.

!/bin/bash

DB\_NAME''dbname' - Nombre de la base de datos
DB\_USER'dbuser' - Usuario del banco
DB\_PASS 'dbpass' - Contraseña del banco
DB\_PARAM'--add-drop-table --add-locks --extended-insert --single-transaction -quick https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html'

MYSQLDUMP/usr/bin/mysqldump - Ruta de acceso a mysqldump binario
BACKUP\_DIR/backup/mysql: Ruta de acceso para guardar copias de seguridad
DIAS 7 - ¿Cuántos días de copias de seguridad desea mantener

FECHA 'fecha +%Y-%m-%d'
BACKUP\_NAME-mysql-$DATE.sql
BACKUP\_TAR-mysql-$DATE.tar
BACKUP\_BZ2-mysql-$DATE.tar.bz2

echo "Inicio del proceso de copia de seguridad..."

#Gerando archivo sql
echo "Generación de copia de seguridad de base de datos $DB\_NAME en $BACKUP\_DIR/$BACKUP\_NAME"
$MYSQLDUMP $DB\_NAME $DB\_PARAM -u $DB\_USER -p$DB\_PASS > $BACKUP\_DIR/$BACKUP\_NAME

• Comprimir el archivo en alquitrán
echo "Consolidando archivo en alquitrán..."
tar -cf $BACKUP\_DIR/$BACKUP\_TAR -C $BACKUP\_DIR $BACKUP\_NAME

• Comprimir el archivo con bzip2
echo " -- Comprimir archivo en bzip2 ..."
$BACKUP\_DIR/$BACKUP\_BZ2 $BACKUP

• Excluyendo archivos sin procesar
echo " -- Excluyendo archivos innecesarios ..."
rm -rf $BACKUP\_DIR/$BACKUP\_NAME

• Eliminación de archivos antiguos
find /backup/mysql -name "\*.tar.bz2" -type f -mtime +$DIAS -exec rm -f á;

Guarde el archivo como mysql\_backup.sh; Conceda permiso de ejecución con el comando chm`od +x mysql_backup.sh; Aho`ra ejecute el archivo de copia de seguridad co`n ./mysql_backup.s`h.

### Crontab - Creación de la programación

Para crear la rutina que ejecuta nuestra copia de seguridad diaria en Linux, usaremos [Crontab](http://marquesfernandes.com/crontab-o-que-e-e-como-usar-no-ubuntu-debian/).

Abra su Crontab:

$crontab -e

Ahora vamos a crear una programación que se ejecuta todos los días a las 00hs, así que agregue la siguiente línea al final del archivo:

0 0 \* \* \* sh /mysql\_backup.sh
