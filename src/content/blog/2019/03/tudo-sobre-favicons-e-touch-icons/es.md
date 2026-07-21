---
title: ¿Qué son los Favicons y los Iconos Táctiles?
description: Favicon, "Icono Favorito", es una imagen utilizada por los
  navegadores para representar gráficamente una página web. Anteriormente el
  único formato aceptado era ".ico" y en tamaño 16x16 píxeles, pero hoy en día
  podemos utilizar otros formatos como ".png", ".jpg" y ".svg".
date: 2019-03-14T21:46:27.000Z
lang: es
translationKey: tudo-sobre-favicons-e-touch-icons
slug: todo-sobre-favicons-y-iconos-toque
category: tecnologia-es
tags: []
wpId: 9216
canonicalPath: /es/tecnologia-es/todo-sobre-favicons-y-iconos-toque/
needsReview: false
updated: 2021-12-12T11:24:17.000Z
---

Favicon, "Icono Favorito", es una imagen utilizada por los navegadores para representar gráficamente una página web. Anteriormente el único formato aceptado era el ".ico" y en tamaño 16x16 píxeles, pero hoy en día podemos utilizar otros formatos como ".png", ".jpg" y "svg" y tamaños. Actualmente favicon se utiliza comúnmente para:

-   Barra de navegación
-   Barra de favoritos
-   Iconos de escritorio
-   Icono de la pantalla de inicio móvil

![](./2019-03-screenshot-bitsofco.de-2019.03.14-21-23-38.png)

La mayoría de los navegadores tendrán por defecto un archivo en la raíz de su sitio llamado "favicon.ico", pero podemos proporcionar otra ubicación de icono y tamaños a través de la <link /> etiqueta html.

## Etiqueta HTML Link

Si no queremos utilizar el método predeterminado de navegadores para que el icono esté disponible y también para proporcionar variaciones en los tamaños utilizamos la etiqueta html <link /> .

<link rel="" type="" sizes="" href="">

### Rel

La propiedad "rel" significa "relación" y se utiliza para indicar la relación del vínculo en cuestión con la página. En los navegadores muy antiguos se utilizó el valor "icono de acceso directo", pero nos centraremos en el moderno y más utilizado, por lo que utilizaremos el valor "icono".

<link rel="icon" type="" sizes="" href="">

### Tipo, Nuevo

La propiedad "type" indica el [tipo de formato MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) del archivo al que se hace referencia. Por ejemplo: Para un archivo en el formato ".ico" usamos "image/x-icon", ya en el formato ".png" sería "image/png". Aunque no se recomienda una propiedad obligatoria para admitir exploradores más antiguos (IE9 e IE10).

<link rel="icon" type="image/png" sizes="" href="">

### Tamaños, Año Nuevo

La propiedad "sizes" se utiliza para indicar el tamaño del icono al que se hace referencia. Como podemos proporcionar versiones optimizadas para diferentes usos, aquí hablamos con el navegador de qué tamaño y para que sepa cuál es el mejor icono para usar en cada caso.

<link rel="icon" type="image/png" sizes="228x228" href="">

### Href

La propiedad "href" indica la ubicación en el servidor del archivo al que se hace referencia.

<link rel="icon" type="image/png" sizes="228x228" href="/icons/favicon.ico">

### Colinha

| Explorador | Etiqueta de enlace: "rel" / "type" | Formatos aceptados |
| --- | --- | --- |
| IE 8 o anterior | rel"icono de acceso directo" | .ico |
| IE 9, IE 10 | rel"icon" type -"image/x-icon" | .ico |
| IE 11 | rel"icon" type"image/x-icon o png o gif" | .ico, .png, .gif |
| Cromo | rel"icon" type"image/x-icon o png o gif" | .ico, .png, .gif |
| Firefox | rel"icon" type"image/x-icon o png o gif" | .ico, .png, .gif, [.svg\*](http://caniuse.com/#feat=link-icon-svg) |
| Safari | rel"icon" type"image/x-icon o png o gif" | .ico, .png, .gif |
| Ópera | rel"icon" type"image/x-icon o png o gif" | .ico, .png, .gif |

## Dispositivos móviles

![](./2019-03-Screenshot_20190314-220947.png)

Algunos navegadores móviles permiten la creación de accesos directos en la pantalla de inicio y para ello podemos proporcionar imágenes con calidad y tamaños optimizados:

| Dispositivo / Navegador | Etiqueta de enlace "rel" | Tamaños (tamaño) |
| --- | --- | --- |
| Apple / Safari | rel"apple-touch-icon" o  
rel"apple-touch-icon-precomposed" | 76x76 - iPad 2 y iPad mini  
120x120 - iPhone 4s, 5, 6  
152x152 - iPad (retina)  
180x180 - iPhone 6 Plus |
| Manzana / Opera Coast | rel"icono"  
 | 228x228 |
| Android / Chrome | rel"icono"  
 | 192x192 |

## Tamaños más utilizados

Para terminar separé una lista con la mayoría de los tamaños utilizados y por quién:

| **Tamaño** | **Nombre** | **Uso** |
| --- | --- | --- |
| 32x32 | favicon-32.png | Estándar para la mayoría de los navegadores |
| 57 x 57 | favicon-57.png | Predeterminado para la pantalla de inicio de iOS y iPhone de hasta 3 generaciones |
| 76-76 | favicon-76.png | Pantalla de inicio del iPad |
| 96-96 | favicon-96.png | GoogleTV |
| 120-120 | favicon-120.png | retina iPhone |
| 128-128 | favicon-128.png | Icono de Chrome Web Store y pantalla de inicio de Windows 8 |
| 144-144 | favicon-144.png | Icono de metro IE10 \* |
| 152-152 | favicon-152.png | Ipad |
| 167-167 | favicon-167.png | Retina iPad |
| 180-180 | favicon-180.png | iPhone 6 plus |
| 192-192 | favicon-192.png | Recomendación de la aplicación web para desarrolladores de Google |
| 195-195 | favicon-195.png | Opera Speed Dial (Versión 15 y anteriores) |
| 196-196 | favicon-196.png | Acceso directo a la pantalla de inicio de Chrome en Android |
| 228-228 | favicon-228.png | Icono de la costa de la ópera |

## Sitios generadores de Favicons

Para hacer nuestras vidas más fáciles hay sitios web que generan todos los tamaños principales automáticamente:

-   [https://www.favicon-generator.org/](https://www.favicon-generator.org/)
-   [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
-   [https://favicon.io/](https://favicon.io/)
-   [http://www.genfavicon.com/](http://www.genfavicon.com/pt/)
-   [https://www.favicon.cc/](https://www.favicon.cc/)
