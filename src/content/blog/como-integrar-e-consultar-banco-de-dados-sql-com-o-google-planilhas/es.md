---
title: Cómo integrar y consultar SQL Database con Hojas de cálculo de Google
description: Google App Scripts permite el acceso al conector JDBC, lo que nos
  permite conectar nuestra hoja de cálculo de Google a una base de datos MySQL
  (hasta la versión 5.7), Microsoft SQL Server, Oracle o Google Cloud SQL.
date: 2020-08-03T16:20:33.000Z
lang: es
translationKey: como-integrar-e-consultar-banco-de-dados-sql-com-o-google-planilhas
slug: como-integrar-y-consultar-base-de-datos-sql-con-google-hojas-de-calculo
category: tecnologia-es
tags: []
wpId: 9099
canonicalPath: /es/tecnologia-es/como-integrar-y-consultar-base-de-datos-sql-con-google-hojas-de-calculo/
needsReview: false
updated: 2021-12-12T11:22:55.000Z
---

Empecé a trabajar en una hoja de cálculo de Google para rastrear mis entradas de blog y algunas otras métricas de seguimiento, ya que odio el trabajo repetitivo, así que me cansé de copiar, pegar y actualizar toda la información manualmente. Fue cuando descubrí que hay una manera de conectar directamente mi hoja de cálculo a la base de datos de mi instalación de WordPress y hacer algunas consultas para extraer automáticamente los datos que necesito. Todo esto es posible a través de Google App Scripts, una plataforma de scripting desarrollada por Google para el desarrollo de aplicaciones ligeras utilizando el lenguaje de desarrollo Javascript.

*\* Si está familiarizado con Excel, Apps Scripts es el VBA de Hojas de cálculo de Google.*

Google App Scripts permite el acceso al conector JDBC[, lo](https://developers.google.com/apps-script/guides/jdbc) que nos permite conectar nuestra hoja de cálculo de Google a una base de datos MySQL (Hasta la versión 5.7), Microsoft SQL Server, Oracle o Google Cloud SQL.

Aprenderemos a conectarnos en nuestra base de datos, realizar consultas y mostrarlas en una amplia gama de celdas en nuestra hoja de cálculo. Si no conoces JavaScript o tienes poca familiaridad con el código, no te preocupes, siguiendo los pasos de este artículo podrás tener una función fácil y genérica para realizar consultas SQL sin tener que modificar casi nada.

## Creación de la hoja de cálculo

Bueno, lo primero que tenemos que hacer es crear una nueva hoja de cálculo y abrir el editor de código de Google Apps Scripts:

![](/wp-content/uploads/2020/08/image-11-1024x487.png)

Entonces vamos a tener un editor de código similar al siguiente:

![](/wp-content/uploads/2020/08/image-12-1024x487.png)

## Creación de scripts de aplicaciones para conectarse a la base de datos

Ahora vamos a copiar [el código de ejem](https://gist.github.com/shadowlik/0ead7e8ace5a5ba9062bb00a368811f5)plo a nuestro archivo:

función getPosts()  
      /\* 
       \* Datos de conexión 
       \* 
       \* Cambiar los datos a continuación con sus datos de conexión
       \*/
      VAR BANK á "mysql"; Conector de banco
      HOST var á "0.0.0.0"; IP (0.0.0.0) o HOST (seudominio.com.br)
      VAR PORTA á "3306"; Puerto para conexión
      var DATABASES - "wordpress" // Base de datos deseada
      var USUARIO - "usuario"; Usuario
      var PASSWORD - "contraseña"; Contraseña
      VAR ABA - "posts" // Tab para imprimir los resultados
     
      var start - new date(); Depurar, vamos a usar para conocer el tiempo de ejecución del script
  
      Hojas de cálculo de Google       
      var doc á SpreadsheetApp.getActiveSpreadsheet(); Devuelve la pestaña activa 
      var posts á doc.getSheetByName(ABA); Seleccionamos la pestaña para borrar los datos
      posts.clear();  Borramos todos los datos
  
      var cell á doc.getRange('a1'); Vamos a introducir los datos de la primera celda

      Creamos la conexión a la base de datos 
  var conn á Jdbc.getConnection("jdbc:" + BANK +"://" + HOST + ":" + PORTA + "/" + BANCODEDADOS, USUARIO, PASSWORD);
      var stmt á conn.createStatement();
      var rs á stmt.executeQuery("SELECT \* FROM wp\_posts LIMIT 10"); Ejecutamos la consulta para buscar en nuestra base de datos
      
      var row á 0;
      var getCount .rs.getMetaData().getColumnCount(); Contamos cuántas columnas devolvió la consulta
      
      para (var i a 0; i< getCount; i++){  
         cell.offset(row, i).setValue(rs.getMetaData().getColumnName(i+1)); Añadimos los nombres de las columnas
      }  
      
      var row 1; 
      while (rs.next())
        para (var col 0; col< rs.getMetaData().getColumnCount(); col++) { 
          cell.offset(row, col).setValue(rs.getString(col + 1)); Añadimos datos por fila
        }
        row++;
      }
      
      rs.close();
      stmt.close();
      conn.close();
      var end - new date();
      Logger.log('Runtime: ' + (end.getTime() - start.getTime())); Generamos un registro en tiempo de ejecución
    } 

Cambiar todas las variables indicadas al principio del script a la configuración de su conexión, recomiendo que en la var`iable` HOST utilice la IP, porque Google App Script tiene algunos problemas con la resolución DNS que pueden dar un error de conexión falso en la base de datos.

Este script básicamente hace una conexión a la base de datos, en el ejemplo utilicé una base de datos de una instalación de WordPress, donde hago una simple selec`ción, SELET * DESDE wp_posts LIMI`T 10 , donde me devuelve 10 mensajes (filas) de la tabla `wp_post`s. Con el resultado hacemos un bucle para crear los encabezados y popular las líneas en la pestaña de men`sajes,` vea el resultado a continuación:

![](/wp-content/uploads/2020/08/image-10-1024x487.png)

## Conclusión

Este fue un ejemplo sencillo de cómo conectarse a la base de datos y ejecutar una consulta SQL, puede cambiar ese script y realizar cualquier consulta SQL. Esta integración le permite crear una herramienta poderosa, podemos extraer y actualizar automáticamente los datos de nuestros sistemas para el análisis, la generación de informes y mucho más!
