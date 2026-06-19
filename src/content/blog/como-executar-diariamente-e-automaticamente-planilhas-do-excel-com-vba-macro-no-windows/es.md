---
title: Cómo ejecutar hojas de cálculo de Excel diarias y automáticas con VBA
  Macro en Windows
description: "¿Alguna vez ha tenido que ejecutar una hoja de cálculo de Excel a
  diario? Recientemente me encontré con este escenario, y como un programador
  perezoso pensé: No se puede no para no automatizar esto! Encontré una solución
  relativamente simple y decidí documentar."
date: 2019-09-25T17:35:18.000Z
lang: es
translationKey: como-executar-diariamente-e-automaticamente-planilhas-do-excel-com-vba-macro-no-windows
slug: how-run-daily-and-automatically-excel-spreadsheets-com-vba-macro-no-windows
category: tecnologia-es
tags: []
wpId: 9206
canonicalPath: /es/tecnologia-es/how-run-daily-and-automatically-excel-spreadsheets-com-vba-macro-no-windows/
needsReview: false
updated: 2021-12-12T11:24:14.000Z
---

¿Alguna vez ha tenido que ejecutar una hoja de cálculo de Excel a diario? Recientemente me encontré con este escenario, y como un programador perezoso pensé: No se puede no para no automatizar esto! Encontré una solución relativamente simple y decidí documentar.

> **Siempre elijo a una persona perezos  
> a para hacer un trabajo duro... Porque encontrará una manera fácil de hacerlo.**
> 
> Bill Gates

Explicaré cómo puede hacer esto usando el Progra**mador de tareas (Pro**g**ramador de tareas de Windows - ya instalado**) para: Abrir; Ejecutar macros VBA; Guardar; Cierre Excel. Esta solución permite una amplia variedad de ajustes de programación!

**PARA QUE EL PROGRAMADOR FUNCIONE, EL EQUIPO DEBE ESTAR ENCENDIDO**

## Requisitos previos

Todos los requisitos previos ya vienen instalados de forma predeterminada en Windows:

-   Programador de tareas (Programador de tareas de Windows)
-   Bloc de notas (o algún editor de texto neutro)
-   CScript **(C:-Windows-System32-cscript.exe)**

## Creación del archivo VBS

El archivo que hará que toda la magia suceda será un script de Visual Basic Script (VBS). Si está familiarizado con VBA, no tendrá ninguna dificultad para entender los comandos de script.

Abra el *Bloc de notas y* copie el contenido siguiente:

'Ruta completa a la hoja de trabajo de Excel 
PathQuix ? "C:-Usuarios-henrique-Documentos-nome\_da\_planilha.xlsm" 
 
'Alcance y nombre completo de la macro para ejecutar 
PathMacro á "Module1.NameMacro" 

"Creamos una instancia de Excel 
Establecer ExcelApp á CreateObject("Excel.Application") 

"¿Desea que esta instancia sea visible? 
ExcelApp.Visible - Verdadero 'o "Falso" 

'Impide que Excel muestre alertas
ExcelApp.DisplayAlerts - Falso 

'Abrimos el archivo excel 
Conjunto de wb: ExcelApp.Workbooks.Open(PathArchiveExcel) 

«Ejecutamos la macro 
ExcelApp.Run PathMacro

'Guardamos el archivo de Excel después de ejecutar la macro 
Wb. Ahorro, Año Nuevo 

'Estamos de vuelta con el parámetro alerts para evitar problemas con otras hojas de trabajo 
ExcelApp.DisplayAlerts - Verdadero 
 
'Cerramos el archivo de Excel 
Wb. Cierre, Año Nuevo 

'Cerramos la instancia de Excel 
ExcelApp.Quit 
  
'Alerta para advertirle cuando la hoja de cálculo se ejecuta correctamente 
MsgBox "Su hoja de cálculo se ejecutó correctamente en:" & TimeValue(Now), vbInformation 

Ahora necesitamos reemplazar alguna información:

1.  Intercambie el valor de la **variable File PathEx**cel por la ubicación exacta del archivo de Excel que desea abrir. Importante poner el nombre correcto y la extensión.
2.  Cambie el valor de la vari**able PathMacr**o por el valor exacto de la macro que desea rotar.
3.  En **ExcelApp.Visible** puede decidir si desea que la aplicación abra una instancia visible (v**erdade**ra) o que la ejecute en segundo plano **(false).** **Algunos** **complementos no funcionan en segundo plano.**
4.  **MsgBox**: Alerta con mensaje visible al usuario si la macro se ha ejecutado correctamente, si no desea simplemente quitar esta línea.

Vamos a guardar este archivo con la extensión **.vbs**: en el Bloc de notas en el momento de guardar en el tipo de campo de nombre de archivo algo así co**mo: excelautomatico.vbs** y en el tipo de archivo seleccione**: Todos los archivo**s. Un bien si todas las rutas son correctas y guardar este archivo en un lugar seguro donde nadie puede eliminar accidentalmente. ¡Anote la ruta del archivo guardado porque lo necesitaremos para más adelante!

[![](/wp-content/uploads/2019/09/image.jpg)](/wp-content/uploads/2019/09/image.jpg)

## Creación de la programación con el Programador de tareas

Para encontrar el programa sólo tiene que escribir en el menú de búsqueda inicia**r El Programador de tarea**s. 

[![](/wp-content/uploads/2019/09/image-1.jpg)](/wp-content/uploads/2019/09/image-1.jpg)

Para crear una nueva tarea simplemente haga clic en el botón en el lado derec**ho: Crear tarea...**

[![captura de pantalla-marquesfernandes.com-2019.09.24-16\_39\_54.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ca63bcb61328d843bcc4d5199d845ee6/screenshot-marquesfernandes.com-2019.09.24-16_39_54.png)

### Crear tarea - Ficha General 

[![captura de pantalla-marquesfernandes.com-2019.09.24-16\_41\_55.png](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)](https://trello-attachments.s3.amazonaws.com/561604bf662a944db46d79d2/5d8a68c16ff6e127a13d7129/ec8ed4c4d718fadfac9c908f76d213dc/screenshot-marquesfernandes.com-2019.09.24-16_41_55.png)

En **la pestaña** General rellenará el nombre de la programación y su descripción.

*Consejo: La descripción es opcional, pero una buena práctica para que en el futuro usted o alguien más pueda entender lo que hace este horario. ¡Experimenta el tuyo, crea una descripción objetiva!*

En esta pestaña también podemos establecer si queremos que la programación se ejecute cuando el usuario no ha iniciado sesión en e**l equipo, recordando de nuevo que para trabajar el equipo siempre debe estar encendid**o. Asumo que siempre desea ejecutar incluso con el equipo bloqueado: seleccione Ejecutar si **el usuario ha iniciado sesión o no, e intro**duzca su usuario y contraseña para validar esta opción. 

### Crear tarea - pestaña Desencadenadores 

En **la pestaña Desencade**nadores configuramos programaciones de tareas, haga clic en el bo**tón** Nuevo para crear y configurar una nueva programación. En el ejemplo siguiente estamos creando una regla para ejecutar nuestra programación todos los días a las 16:43 hs:

[![captura de pantalla-marquesfernandes.com-2019.09.24-16\_44\_36.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/617x512/a9aae6c23cf29987b1719a0b8fa745bf/screenshot-marquesfernandes.com-2019.09.24-16_44_36.png)

Puede crear más de una regla para cada programación.

### Crear tarea - pestaña Acciones 

En **la pestaña** Acciones vamos a trazar los acciones que se deben realizar. Para ejecutar el script creado al principio del tutorial necesitamos usar un programa nativo de Windows llamado CSc**ript que** nos permita ejecutar nuestro archivo **.vb**s: 

En el campo "Programa/script" agregue: **"C:-Windows-System32-cscript.exe"** 

Ahora vamos a mover como argumento a C**Script** qué archivo queremos que se ejecute. Pegue la ruta completa del archivo .**vbs** que creamos al principio: 

En el campo "Agregar argumentos (opcional)" cambiar los valores y añadir algo como: "C:**\-Usu****arios****\-****henrique****\-****excelautomatico****.vbs"** 

**Ambos valores deben estar entre comillas.** 

[![captura de pantalla-marquesfernandes.com-2019.09.24-16\_46\_38.png](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)](https://trello-attachments.s3.amazonaws.com/5d8a68c16ff6e127a13d7129/444x496/54ca5124a4c8a2022389264752fab181/screenshot-marquesfernandes.com-2019.09.24-16_46_38.png)

### Crear tarea - Otras pestañas 

Algunos ajustes adicionales se pueden encontrar en las otras pestañas, por lo que le recomiendo una comprobación y ver si se requerirá cualquier otra configuración para su caso.
