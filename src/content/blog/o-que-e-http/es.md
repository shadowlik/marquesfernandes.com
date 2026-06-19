---
title: ¿Qué es HTTP?
description: Protocolo de transferencia de hipertexto o HTTP para los más
  íntimos es un conjunto de reglas para transferir datos como archivos de texto,
  imágenes, audio, vídeo y otros archivos multimedia.
date: 2019-10-08T19:31:31.000Z
lang: es
translationKey: o-que-e-http
slug: what-and-http
category: tecnologia-es
tags: []
wpId: 9201
canonicalPath: /es/tecnologia-es/what-and-http/
needsReview: false
updated: 2021-12-12T11:24:13.000Z
---

**Protocolo de transferencia d**e hi**perte**xto o HTTP para los más íntimos es un conjunto de reglas para transferir datos como archivos de texto, imágenes, audio, vídeo y otros archivos multimedia.

## ¿Uh?

![Resultado de la imagen para netscape gif](https://media2.giphy.com/media/UML8EuuiFZkUU/giphy.gif)

Cuando escribe un sitio web en su navegador, está en segundo plano enviando una solicitud **HTTP** solicitando la página deseada a algún servidor web. Piense en los protocolos de Internet como reglas de tráfico, que son necesarios para que todos los coches (datos) lleguen a su destino (cliente).

El protocol**o HTT**P se desarrolló junto con el lenguaje de marcado HT[ML](https://pt.wikipedia.org/wiki/HTML) para crear la primera experiencia interactiva en navegadores web. A día de hoy el protocolo sigue siendo el principal medio de comunicación de Internet!

## ¿Cuándo y cómo surgió?

El protocolo fue redactado en 1989 por [Sir Tim Berners Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) y ahora está bajo la responsabilidad del [W3](https://www.w3.org/)C.

-   HTTP/1.1 fue documentado en 1997 en R[FC 2068](https://tools.ietf.org/html/rfc2068)
-   En 2015 la versión HTTP/2 fue lanzada con numerosas mejoras, como la compatibilidad con TLS y ALPN.
-   El 26 de septiembre de 2019, Cloudflare, Google Chrome y Mozilla Firefox introdujeron la versión HTTP/3 q[ue utiliza](http://cloudflare.com) e[l protocolo U](https://www.google.com/chrome/)DP [en lugar de TCP](https://www.mozilla.org/pt-BR/firefox/new/).

## ¿Cómo funciona?

La comunicación entre clientes y servidores se realiza básicamente a través d**e solicitud**es **y respuest**as a un recurso det**erminad**o.

### Recursos

Una característica HTTP no es más que una parte de la URL, cuando escribimos en el nave[gador marquesfernandes.com/category/desig](http://marquesfernandes.com/category/design/)n/ estamos solicitando la característica /category/design/ que se encuentra en el servid[or marquesfernandes.co](http://marquesfernandes.com)m.

### Métodos

Para interactuar con estos recurso**s, HT**TP utiliza métodos de solicitud predefinidos que indican al servidor qué tarea debe realizar en el recurso deseado:

-   **Sol**icitar GET un recurso
-   **POST** añade/crea una función
-   **PUT** modifica directamente un recurso
-   **DELETE** elimina una función específica
-   **PATCH** modifica parcialmente una función

[Echa un vistazo a la lista completa de métodos.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Códigos de estado

Cuando se realiza una solicitud se espera una respuesta (durd), para esto los servidores además de responder a la solicitud con el cuerpo de la respuesta, ya sea un html, audio y etc. también enviar códigos de respuesta que indiquen cuál fue el estado de esa solicitud, si tuvo algún error o si se realizó correctamente. Los códigos más comunes son:

-   **200** OK: Significa que su solicitud funcionó con éxito.
-   **301** Movido permanentemente: este código indica que esta ruta de acceso de solicitud se ha movido permanentemente a otra dirección.
-   **401** No autorizado: el usuario que intenta realizar la solicitud no está autenticado.
-   **403** Prohibido: El usuario que intenta realizar la solicitud está autenticado pero no tiene los permisos necesarios.
-   **404** No encontrado: Significa que no se encontró el recurso solicitado.
-   **500** Error interno del servidor: error genérico que el servidor no pudo controlar.

[Echa un vistazo a la lista completa de códigos de estado.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Ciclo de solicitudes HTTP

Una solicitud HTTP normalmente desencadena una serie de otras solicitudes, tenga en cuenta un ejemplo ampliamente utilizado:

1.  El cliente (un explorador) solicita una página para Internet, por ejemplo, www.u[ol.com.br el ex](https://uol.com.br)plorador, a continuación, rea**liza una solicitu**d HTTP de **ti**po GET al servidor.
2.  El servidor recibe la **solicitud** y realiza cualquier rutina interna vinculada a ella.
3.  Si todo es correcto, el servidor devuelve una **respuesta** con el contenido HTML de la página y con el código de **estado 200** para el explorador. Y una serie de otras solicitudes pueden suceder:
    1.  El navegador realiza una solicitud para una hoja de estilos. El servidor devuelve un archivo CSS;
    2.  El navegador realiza una solicitud de una imagen. Jpg. El servidor devuelve un archivo .jpg;
    3.  El navegador realiza una solicitud de código JavaScript. El servidor devuelve un archivo .js;
    4.  El navegador realiza una solicitud de datos adicionales. El servidor devuelve un archivo de datos estructurado (XML, CSV, JSON, ...);
4.  El explorador finalmente interpreta las **respuestas** y representa la página.

## HTTP vs. HTTPS

[HTTPS](https://searchsoftwarequality.techtarget.com/definition/HTTPS) (HTTP sobre SSL o HTTP Secure) es el uso de Secure Sockets Layer [(SS](https://searchsecurity.techtarget.com/definition/Secure-Sockets-Layer-SSL)L) o Transport Layer Security ([TLS](https://searchsecurity.techtarget.com/definition/Transport-Layer-Security-TLS)) como una subcapa de una solicitud HTTP. HTTPS básicamente cifra y descifra las solicitudes de los usuarios, así como las respuestas del servidor. El uso de HTTPS protege contra ataques conocidos que tienen como objetivo interceptar estas solicitudes y secuestrar datos confidenciales, co[mo ma](https://www.kaspersky.com.br/blog/what-is-a-man-in-the-middle-attack/462/)n-in-the-middle (MitM).
