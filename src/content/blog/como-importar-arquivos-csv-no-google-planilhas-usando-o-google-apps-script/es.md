---
title: Cómo importar archivos CSV en Hojas de cálculo de Google mediante Google
  Apps Script
description: Si utiliza Microsoft Excel, probablemente esté acostumbrado a usar
  e importar datos de orígenes externos, por ejemplo, archivos CSV. Podemos
  tener la misma facilidad en Hojas de cálculo de Google usando Google Apps
  Script.
date: 2020-01-07T21:41:24.000Z
lang: es
translationKey: como-importar-arquivos-csv-no-google-planilhas-usando-o-google-apps-script
slug: how-import-files-csv-no-google-spreadsheets-using-the-google-apps-script
category: tecnologia-es
tags: []
wpId: 9179
canonicalPath: /es/tecnologia-es/how-import-files-csv-no-google-spreadsheets-using-the-google-apps-script/
needsReview: false
updated: 2021-12-12T11:24:07.000Z
---

Si utiliza Microsoft Excel, probablemente esté acostumbrado a usar e importar datos de orígenes externos, por ejemplo, archivos CSV. Podemos tener la misma facilidad en Hojas de cálculo de Google usando Google Apps Script.

## ¿Qué es Google Apps Script?

Ap[ps Script es](https://developers.google.com/apps-script) una plataforma de scripting desarrollada por Google para el desarrollo de aplicaciones ligeras en la plataforma G Suite. Se basa en JavaScript 1.6, pero también incluye algunas características de 1.7, 1.8 y un subconjunto de la API de ECMAScript 5. Los proyectos de [Apps Script](https://developers.google.com/apps-script) se ejecutan en la infraestructura en la nube de Google. Según el propio Google*, Apps* Script "proporciona formas sencillas de automatizar tareas en productos y servicios de terceros". Apps Script también está disponible para Google Docs y Slides.

Encontrará todo*s los scripts de este tutorial en la [hoja de cálculo de](https://docs.google.com/spreadsheets/d/1qHZgB9PDH70RkgPmzzMmrHmNyk6gettTuawES3miHgA/edit?usp=sharing)* ejemplo, haga una copia en su unidad para poder ver los scripts y editar la hoja de cálculo.

***También echa un** vi[stazo: Transferencia de archivos por SFTP en Google Cloud usando FileZilla](http://marquesfernandes.com/2019/11/19/transferindo-arquivos-por-sftp-no-google-cloud-usando-o-filezilla)*

## Acceso al script de aplicaciones

Para acceder a los scripts de Google Apps, cree una hoja de cálculo en blanco o cop[ie la hoja de ejemplo](https://docs.google.com/spreadsheets/d/1qHZgB9PDH70RkgPmzzMmrHmNyk6gettTuawES3miHgA/edit?usp=sharing); Haga clic e*n Herramientas > Editor de script*s:

![Hojas de cálculo de Google](./2020-01-image.png)

Se abrirá una nueva pestaña con el editor de texto de Google Apps Script:

![Editor de texto de google Apps Script](./2020-01-image-5.png)

## Creación de scripts

Podemos importar fácilmente archivos CSV en Hojas de cálculo de Google utilizando la f`unción Google Apps Scr`ipt Utilities.parseCsv(). Los siguientes códigos muestran cómo importar y mostrar datos de un archivo CSV por URL, excepto en Google Drive o como archivo adjunto en Gmail.

### Autorización de scripts de Google Apps

Para todos los ejemplos siguientes, al ejecutar los scripts necesitamos autorizar a Google Apps Scripts a acceder a algunas funciones de las API de Google.

![Autorización de scripts de Google Apps - 1](./2020-01-image-2.png)

Probablemente, debido a que su script aún no está homologado, aparecerá la siguiente pantalla:

![Autorización de scripts de Google Apps - 2](./2020-01-image-3.png)

Haga clic *en Mostrar pro*yec*to de acceso av*anzado y continúe autorizando:

![Autorización de scripts de Google Apps - 3](./2020-01-image-4.png)

### Importación del archivo CSV desde un archivo adjunto de correo electrónico en Gmail

función importCSVDoGmail()
  
  var emails á GmailApp.search("from:henrique@marquesf.com"); Filtramos nuestros correos electrónicos
  var email á emails.\[0\]getMessages(); \[0\]Tomamos el primer mensaje del hilo de correo electrónico
  var attachment á email.getAttachments(); Toma\[0\]mos el primer archivo adjunto del correo electrónico
  
  Validamos que este archivo adjunto es un CSV
  if (attachment.getContentType() á "text/csv")
    
    var spreadsheet á SpreadsheetApp.getActiveSheet(); Seleccionamos el objeto de la hoja de trabajo activa
    var csv - Utilities.parseCsv(spreadsheet.getDataAsString(), ",");
    
    Borramos el contenido de la hoja de trabajo antes de importar los datos
    sheet.clearContents().clearFormats();
    Importamos todos los datos de la celda A1
    sheet.getRange(1, 1, csv.length, csv\[0\].length).setValues(csv);
  } 
}

En nuestra variable de correos electrónicos realizaremos una búsqueda de filtros en nuestro Gmail para devolver el primer correo electrónico correspondiente, podemos utilizar cualquier operador de búsqueda de Gmail dentro de la `función GmailApp.search ("operator:se`arch"), consulta aqu[í la lista completa de operadore](https://support.google.com/mail/answer/7190?hl=pt-BR)s.

### **Importación del archivo CSV desde Google Drive**

función importCSVDoGoogleDrive()

    var file á DriveApp.getFilesByName("data.csv").next();
    var csv - Utilities.parseCsv(file.getBlob().getDataAsString());
    var spreadsheet á SpreadsheetApp.getActiveSheet();
    spreadsheet.getRange(1, 1, csv.length, c\[0\]sv.length).setValues(csv);

}

En el ejemplo anterior estamos buscando el a`rchivo d`ata.csv que está en la raíz de Google Drive, cambie esta ruta según sea necesario.

## **Descargue e importe el archivo CSV desde un sitio web externo**

función importCSVDaWeb()

    URL de descarga de archivos CSV
    var csvUrl á "/wp-content/uploads/2020/01/exemplo\_csv.csv";
    var csv - UrlFetchApp.fetch(csvUrl).getContentText();
    var data - Utilities.parseCsv(csv);

    var spreadsheet á SpreadsheetApp.getActiveSheet();
    spreadsheet.getRange(1, 1, data.length, data\[0\].length).setValues (datos);

}

Recuerde que el servici*o UrlFetchA*pp solo realiza solicitudes HTTP y aún no es posible conectarse a servidores FTP.
