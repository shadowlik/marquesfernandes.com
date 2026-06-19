---
title: Elimine la fecha de la URL/Enlaces permanentes y redirija en Wordpress
description: Si tienes un blog de Wordpress, probablemente hayas notado que tu
  URL viene en formato /year/month/day/url-do-post. Este formato crea vínculos
  más largos, y este marcado de fecha puede ser perjudicial para su sitio,
  muchos usuarios miran el enlace y seleccionan el sitio con el contenido más
  reciente...
date: 2020-02-01T20:51:11.000Z
lang: es
translationKey: remover-a-data-da-url-links-permanentes-e-redirecionar-no-wordpress
slug: remove-the-date-of-url-permanent-links-and-redirect-no-wordpress
category: tecnologia-es
tags: []
wpId: 9168
canonicalPath: /es/tecnologia-es/remove-the-date-of-url-permanent-links-and-redirect-no-wordpress/
needsReview: false
updated: 2021-12-12T11:24:05.000Z
---

Si tienes un blog de [Wordpress](https://br.wordpress.org/), probablemente hayas notado que tu URL viene en formato `/year/month/day/url-do-post`. Este formato crea vínculos más largos, y este marcado de fecha puede ser perjudicial para su sitio, muchos usuarios miran el vínculo y seleccionan el sitio con el contenido más reciente, por lo que incluso si mantiene sus publicaciones actualizadas, esto puede tener un impacto en el alcance de sus artículos.

En este artículo aprenderemos cómo configurar Wordpress para usar un formato de URL más simple y redirigir las publicaciones ya indexadas o compartidas al nuevo formato usando `.htaccess`.

## Configuración de enlaces permanentes en Wordpress

Entra en el panel administrativo de tu Wordpress y cambia al formato deseado, en este artículo utilizaremos el formato simple, solo con el nombre de la publicación en la URL:

`/%postname%/`

![Configuración de enlaces permanentes en Wordpress](./2020-02-image-7.png)

## Redirección de enlaces antiguos mediante mod\_rewrite en .htaccess

Ahora vamos a agregar una pequeña configuración en nuestro **.htaccess** (Se encuentra en la raíz de su instalación de Wordpress).

`RewriteRule ^([0-9]+)/([0-9]+)/([0-9]+)/(.*)$ /$4 [R=301,NC,L]`

Su archivo debe tener este aspecto:

<IfModule mod\_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^(\[0-9\]+)/(\[0-9\]+)/(.\*)$ /$3 \[R=301,NC,L\]
RewriteRule ^index\\.php$ - \[L\]
RewriteCond %{REQUEST\_FILENAME} !-f
RewriteCond %{REQUEST\_FILENAME} !-d
RewriteRule . /index.php \[L\]
</IfModule>

**Consejo:** Si utiliza alguna extensión de optimización, rendimiento o redirección SEO en Wordpress, lo más probable es que su archivo sea mucho más grande que el del ejemplo anterior, recuerde colocar la línea justo al principio del archivo para que la redirección funcione.

Pruebe algunas URL antiguas y vea si su redirección funciona correctamente, para supervisar posibles errores de 404 compruebe el artículo: [Cómo supervisar 404 errores y páginas que no se encuentran en Google Analytics](http://marquesfernandes.com/como-monitorar-erros-404-e-paginas-nao-encontradas-no-google-analytics/)
