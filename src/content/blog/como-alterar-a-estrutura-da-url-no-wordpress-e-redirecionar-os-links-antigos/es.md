---
title: Cómo cambiar la estructura de la URL en WordPress y redirigir enlaces antiguos
description: Si simplemente cambia la estructura y no redirige, todos los
  enlaces antiguos irán a una página de Error 404 - Página no encontrada.
  Entonces, ¿cómo hacer este cambio sin romper los enlaces ya creados e
  indexados en Google?
date: 2020-08-18T11:03:32.000Z
lang: es
translationKey: como-alterar-a-estrutura-da-url-no-wordpress-e-redirecionar-os-links-antigos
slug: como-cambiar-la-estructura-de-la-url-en-wordpress-y-redireccionar-los-enlaces-antiguos
category: desarrollo
tags: []
wpId: 9839
canonicalPath: /es/desarrollo/como-cambiar-la-estructura-de-la-url-en-wordpress-y-redireccionar-los-enlaces-antiguos/
needsReview: false
updated: 2021-12-12T11:22:53.000Z
---

Recientemente necesitaba cambiar la estructura de mis urls en WordPress, el enlace estaba configurado para estar en la raíz de mi sitio y necesitaba el nuevo formato para tener la categoría. La estructura de enlace permanente era /% `postname% / y` ahora en el nuevo formato sería /`% category% /% postman%` /. Un ejemplo práctico:

-   Enlace antiguo: http://marquesfernandes.com/o-que-e-python-e-pra-que-serve/
-   Nuevo enlace: http://marquesfernandes.com/desenvolvimento/o-que-e-python-e-pra-que-serve/

Si simplemente cambia la estructura y no redirige, todos los enlaces antiguos irán a una página de Error 404 - Página no encontrada. Entonces, ¿cómo hacer este cambio sin romper los enlaces ya creados e indexados en Google?

Lo que tenemos que hacer es intentar capturar la URL que causaría el error 404 e intentar encontrar el nuevo enlace permanente de la publicación. Si no se encuentra ningún enlace, mostraremos la página no encontrada. El método es muy simple, siempre que haya algo en su URL anterior que podamos usar para encontrar el nuevo enlace, como /`% postname%` /, podemos encontrar y redirigir a la página correcta.

Para ello, agregaremos el siguiente script al archivo `functions.php` del tema activo de WordPress:

add\_action ('template\_redirect', 'maybe\_redirect\_404\_old\_permalink');

function maybe\_redirect\_404\_old\_permalink () {
    // Realice esta función solo si es una página 404
    if (! is\_404 ()) {
        regreso;
    }
 
    // Truco para obtener la URL completa
    $ url = add\_query\_arg ('', '');

    // Tomamos la parte relacionada con% postname%
    $ partes = explotar ('/', $ url);
    $ partes = array\_filter ($ partes);
    $ tamaño = recuento ($ partes);
    $ maybe\_slug = $ parte\[ $size \]s;

    // Intentamos encontrar el nuevo enlace en la base de datos
    $ args = matriz (
        'nombre' => $ maybe\_slug,
        'post\_type' => 'publicación',
        'post\_status' => 'publicar',
        'numberposts' => 1,
    );

    $ publicaciones = get\_posts ($ args);

    // Encontramos la publicación
    if ($ publicaciones &&! empty ($ publica\[0\]ciones-> ID)) {
        $ post\_id = $ publicacion\[0\]es-> ID;

        $ post\_url = get\_permalink ($ post\_id);

        // Redirigimos a la nueva URL con el estado de redireccionamiento permanente 301
        if ($ post\_url) {
            wp\_safe\_redirect ($ post\_url, 301);
        }
    }

  // Si llegas aquí es porque no se encontró ninguna publicación
// y se mostrará la página 404
}

¡Gracias a [Ben Lobaugh](https://ben.lobaugh.net/blog/202980/wordpress-add-category-to-permalink-and-redirect-old-permalinks), el creador original de esta solución!
