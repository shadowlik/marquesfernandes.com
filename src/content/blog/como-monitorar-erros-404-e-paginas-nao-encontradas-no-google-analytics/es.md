---
title: Cómo supervisar 404 errores y páginas que no se encuentran en Google Analytics
description: En este artículo aprenderemos a supervisar los errores 404 de su
  sitio por parte de Google Analytics. Los informes personalizados que
  aprenderemos a crear le ayudarán a identificar y corregir fácilmente qué
  páginas están causando este error.
date: 2020-02-01T20:31:29.000Z
lang: es
translationKey: como-monitorar-erros-404-e-paginas-nao-encontradas-no-google-analytics
slug: como-monitorear-errores-404-y-paginas-no-found-no-google-analytics
category: tecnologia-es
tags: []
wpId: 9169
canonicalPath: /es/tecnologia-es/como-monitorear-errores-404-y-paginas-no-found-no-google-analytics/
needsReview: false
updated: 2021-12-12T11:24:05.000Z
---

En este artículo aprenderemos a supervisar los errores 404 de su sitio por parte de [Google Analytics](https://analytics.google.com/analytics/web/). Si su sitio está configurado correctamente para este tipo de error, Analytics ya puede supervisar automáticamente. Los informes personalizados que aprenderemos a crear le ayudarán a identificar y corregir fácilmente qué páginas están causando este error.

**También echa un vistazo:** [Filtrado de vista previa y wp-admin de WordPress en Google Analytics](http://marquesfernandes.com/filtrando-pre-visualizacao-e-wp-admin-do-wordpress-no-google-analytics/)

Primero tenemos que averiguar si nuestras 404 páginas están configuradas correctamente:

-   Su página 404 siempre debe cargarse en la misma URL que presentó el error, **NO** DEBEMOS redirigir a una página personalizada (Ejemplo: /404/)
-   Que una página no existe en su sitio, debe devolver el código de estado **HTTP 404 (No encontrado)**, no el código 200 (Ok) y ningún código de redirección, leer el punto anterior.
-   **Para facilitar la supervisión:** Padrónice el título de esta página, preferiblemente con títulos que identifiquen fácilmente el error, como "Página no encontrada" o "404".

Podemos usar como ejemplo esta página: [http://marquesfernandes.com/esta-pagina-nao-existe](http://marquesfernandes.com/esta-pagina-nao-existe).

## Informe personalizado para encontrar 404 errores causados por enlaces INTERNOS

El primer informe aprenderemos a crear monitores de enlaces internos que están causando 404 errores en su sitio. Los enlaces internos son enlaces que apuntan de una página a otra dentro de su sitio. Como teóricamente tenemos control total sobre estos enlaces, podremos actuar para organizarlos más rápidamente. Los enlaces rotos son malos para el rendimiento SEO y para la experiencia del usuario.

1.  En el panel de Analytics, vaya a **Personalización > Informes personalizados > + Nuevo informe personalizado**.
2.  Selecciona el tipo **de tabla fija**.
3.  Selecciona las dimensiones **de página; Ruta de la página anterior; Título de la página.**
4.  Selecciona la métrica **Vistas de página única**.
5.  Agregue un filtro que **excluya** el valor **(entrada)** de la dimensión **Ruta de página anterior**. Este filtro se asegura de que solo aparezcan 404 errores causados por un vínculo interno.
6.  Agregue un filtro al **título de la página** que identifique las páginas no descubiertas.

![Informe personalizado para encontrar 404 errores causados por enlaces INTERNOS](./2020-02-image-1.png)

Ahora guarde el informe y vea el resultado:

![](./2020-02-image-2.png)

## Informe personalizado para encontrar 404 errores causados por enlaces EXTERNOS

Ahora vamos a aprender cómo monitorear los errores 404 procedentes de enlaces externos. Los enlaces externos son enlaces que conducen a alguna página de su sitio en un sitio que no sea el suyo. Normalmente no tiene control directo sobre estos vínculos, pero tan pronto como se encuentre puede advertir fácilmente al administrador del sitio para corregir.

1.  En el panel de Analytics, vaya a **Personalización > Informes personalizados > + Nuevo informe personalizado**.
2.  Selecciona el tipo **de tabla fija**.
3.  Selecciona las dimensiones **de página; Referente completo; Título de la página.**
4.  Selecciona la métrica **Vistas de página única**.
5.  Agregue un filtro que **incluya** el valor **(entrada)** de la dimensión **Ruta de página anterior**. Este filtro se asegura de que solo aparezcan 404 errores causados por un vínculo interno.
6.  Agregue un filtro al **título de la página** que identifique las páginas no descubiertas.

![Informe personalizado para encontrar 404 errores causados por enlaces EXTERNOS](./2020-02-image-5.png)

Si todo va bien, ahora tendrá dos informes para ayudarle a identificar y corregir esos errores. Supervise estos informes siempre que sea posible, no deje que un simple error para ser corregido afectar a su SEO!

![](./2020-02-image-6.png)
