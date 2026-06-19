---
title: Cómo eliminar archivos usando el patrón de búsqueda de Windows
description: Entonces, tiene una carpeta con varios archivos dentro, y estos
  archivos siguen un patrón de nombre o tal vez desea eliminar todos los
  archivos con una determinada extensión. Hay dos formas de realizar esta tarea,
  abordaremos las dos formas de realizar esta tarea.
date: 2020-10-16T18:19:26.000Z
lang: es
translationKey: como-deletar-arquivos-usando-padrao-de-busca-no-windows
slug: como-eliminar-archivos-usando-patron-de-busqueda-en-windows
category: tecnologia-es
tags: []
wpId: 10469
canonicalPath: /es/tecnologia-es/como-eliminar-archivos-usando-patron-de-busqueda-en-windows/
needsReview: false
updated: 2021-12-12T11:22:50.000Z
---

Entonces, tiene una carpeta con varios archivos dentro, y estos archivos siguen un patrón de nombre o tal vez desea eliminar todos los archivos con una determinada extensión. Hay dos formas de realizar esta tarea, abordaremos las dos formas de realizar esta tarea.

## 1\. Usando PowerShell

Puede encadenar un comando G`et-ChildItem` a través de un filtro `Where-Objec`t que acepta un patró`n Reg`Ex y luego encadenar el comando Re`move-Item` para eliminar. 

Get-ChildItem $ Path | Donde {$ \_.Nombre -Match "<RegEx>"} | Remover el artículo

El atributo de nombre solo coincidirá con el nombre del archivo o carpeta, junto con la extensión del archivo.No corresponderá a otras cosas en el proceso.Esto pasará un objeto Fil`eInfo a t`ravés del canal, q`ue Remove-It`em toma como entrada al canal y eliminará los archivos en cuestión.

Si desea incluir subcarpetas para la búsqueda, debemos agregar la opción `-Recurse` al comando `Get-ChildItem`:

Get-ChildItem $ Path -Recurse | Donde {$ \_.Nombre -Match "<RegEx>"} | Remover el artículo

Si solo desea excluir archivos, puede especificar esto en la instrucción `Wher`e, mirando la propiedad PS`IsContainer` del objeto `FileInfo`:

Get-ChildItem $ Path -Recurse | Donde {$ \_.Nombre -Match "<RegEx>" -and! $ \_. PSIsContainer} | Remover el artículo

## 2\. Usando Explorer

Para los usuarios que no tienen el hábito de usar la línea de comandos, existe la posibilidad de filtrar usando la búsqueda del Explorador de Windows y seleccionar todos los archivos filtrados para su eliminación. Esta forma no es la más eficiente y puede llevar un poco más de trabajo, ya que el filtro a veces devuelve elementos que no necesariamente queremos eliminar, en el siguiente ejemplo vemos el filtro por la extensión `.pn`g. Entonces, si va a usar este método, asegúrese de verificar antes de seleccionar todo y eliminar, si todos los archivos enumerados son realmente los que desea eliminar.

![](/wp-content/uploads/2020/10/image-1-1024x560.jpg)
