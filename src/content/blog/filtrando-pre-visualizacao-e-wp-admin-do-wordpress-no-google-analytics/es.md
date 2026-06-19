---
title: Filtrado de la vista previa de Wordpress y wp-admin en Google Analytics
description: Es muy fácil estropear la recopilación de datos de Google Analytics
  en su sitio de Wordpress accediendo a su panel de administración (el famoso
  /wp-admin) y al escribir y previsualizar sus páginas (preview-true).
date: 2019-12-09T00:02:01.000Z
lang: es
translationKey: filtrando-pre-visualizacao-e-wp-admin-do-wordpress-no-google-analytics
slug: filtering-pre-preview-and-wp-admin-do-wordpress-no-google-analytics
category: tecnologia-es
tags: []
wpId: 9183
canonicalPath: /es/tecnologia-es/filtering-pre-preview-and-wp-admin-do-wordpress-no-google-analytics/
needsReview: false
updated: 2021-12-12T11:24:09.000Z
---

Si ejecuta un blog o sitio web en Wordpress, probablemente utilice Google Analytics para supervisar su tráfico. En los nuevos sitios, que todavía están empezando a ganar tráfico, es muy fácil sucio la recopilación de datos con éxitos "falsos" accediendo a su panel administrativo (el famoso /wp-admin) y al escribir y previsualizar sus páginas (vista previa-verdadero). Si a ti, como yo, te gusta previsualizar y ver cómo encajarán tus artículos y comportarte con tu tema, necesitamos filtrar estos hits para generar datos reales y limpios para su análisis futuro.

## Filtrado de páginas de vista previa

Antes de crear cualquier filtro, debemos crear una nueva **vista previa** en la propiedad. Esto genera una copia de seguridad de los datos para crear y probar los filtros; Si algo sale mal y ensuciamos sus datos, todavía tenemos los datos originales y sin procesar de la propiedad. Para crear una nueva visualización:

1.  Inicie sesión en [Analytics](http://analytics.google.com/) y haga clic en **Admin**.
2.  Asegúrese de que la cuenta y la propiedad correctas están seleccionadas en la lista desplegable superior izquierda.
3.  En la pestaña de **visita**, haga clic en **Crear visita**. De un nombre descriptivo, como *"Pruebas de filtro."*

![Crear nueva vista en la propiedad](./2019-12-image-15.png)

Crear nueva vista en la propiedad

Una vez creado, vuelva a la página Administrador y compruebe que la **visita** recién creada está seleccionada. Ahora vamos a crear dos filtros para eliminar las páginas de vista previa y wp-admin:

1.  Haga clic en **Filtros** en la pestaña **Visita** y haga clic en el botón **+Agregar filtro**.
2.  Ponga un nombre significativo, como *"Eliminar páginas de vista previa."*

![Crear nuevo filtro](./2019-12-image-17.png)

Crear nuevo filtro

3.  En **Tipo de filtro**, seleccione **Personalizado**.
4.  Seleccione la opción **Eliminar**.
5.  En **El campo Filtro**, seleccione **URI de solicitud**.
6.  En **Tipo de patrón de filtro**, *vista previa y  
    verdadero. (Este texto está presente en todas las páginas de vista previa, incluidas las [vistas previas públicas](http://marquesfernandes.com/2019/12/04/como-permitir-a-pre-visualizacao-publica-em-artigos-nao-publicados-no-wordpress), si está habilitado.)*

![Eliminar páginas de vista previa](./2019-12-image-18.png)

Eliminar páginas de vista previa

8.  Haga clic en **Guardar**.

## Filtrado de páginas del panel administrativo (/wp-admin)

Para filtrar las páginas del panel administrativo, seguiremos casi todos los mismos pasos antes, excepto la definición del filtro.

1.  Cree un nuevo filtro haciendo clic en el botón **+Agregar filtro** (en la misma propiedad de vista).
2.  Ponga un nombre significativo como "Eliminar páginas administrativas."
3.  En **Tipo de filtro**, seleccione **Predeterminado**.
4.  Seleccione la opción **Eliminar**, **tráfico al subdirectorio** y **qué contiene**.
5.  En **subdirectorio** type, */wp-admin/  
    *(Esta ruta está presente en todas las páginas del panel administrativo).

![Eliminar páginas administrativas (/wp-admin/)](./2019-12-image-19.png)

Eliminar páginas administrativas (/wp-admin/)

Listo, ahora los datos de su nueva **vista** creada deben borrarse de los hits y vistas de páginas falsas.
