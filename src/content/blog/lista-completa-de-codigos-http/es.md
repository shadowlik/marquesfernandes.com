---
title: Lista completa de códigos HTTP
description: La siguiente es una lista de códigos de respuesta HTTP. Los códigos
  (códigos) se utilizan para informar al cliente del estado (estado) de sus
  solicitudes, con el fin de estandarizar y facilitar la comunicación entre
  ellos. El primer dígito de cada código de estado indica a cuál de las cinco
  clases de respuesta pertenece.
date: 2020-09-04T14:35:33.000Z
lang: es
translationKey: lista-completa-de-codigos-http
slug: http-lista-completa-de-codigos
category: tecnologia-es
tags: []
wpId: 10126
canonicalPath: /es/tecnologia-es/http-lista-completa-de-codigos/
needsReview: false
updated: 2021-12-12T11:22:52.000Z
---

**El Protocolo de transferencia de hipertexto** o **HTTP** para los más íntimos es un conjunto de reglas para transferir datos como archivos de texto, imágenes, audio, video y otros archivos multimedia. Cuando escribe un sitio web en su navegador, detrás de escena está enviando una solicitud **HTTP** solicitando la página deseada a un servidor web. Piense en los protocolos de Internet como reglas de tráfico, son necesarios para que todos los automóviles (datos) lleguen a su destino (cliente). [Obtenga más información sobre HTTP](http://marquesfernandes.com/tecnologia/o-que-e-http/).

La siguiente es una lista de códigos de respuesta HTTP. Los códigos (códigos) se utilizan para informar al cliente del estado (estado) de sus solicitudes, con el fin de estandarizar y facilitar la comunicación entre ellos. El primer dígito de cada código de estado indica a cuál de las cinco clases de respuesta pertenece.

## 1XX - Informativo

Indica que la solicitud ha sido recibida y entendida. Esta respuesta se envía mientras la solicitud aún se está procesando. Sirve para alertar al cliente de que puede esperar una respuesta final.

| Código | Estado | descripción |
| --- | --- | --- |
| 100 | Seguir | Significa que el servidor ha recibido los encabezados de la solicitud, y que el cliente debe proceder a enviar el cuerpo de la solicitud, |
| 101 | Cambio de protocolos | Significa que el solicitante ha pedido al servidor que cambie los protocolos y el servidor está reconociendo que lo hará. |
| 102 | Procesando  | Significa que el servidor entendió la solicitud pero que llevará tiempo procesarla y no tendrá una respuesta inmediata, enviando este estado para evitar que el usuario espere y exceda el tiempo límite de la solicitud. |

## 2XX - Éxito

Esta clase de códigos de estado indica que la solicitud del cliente ha sido recibida, comprendida, aceptada y procesada con éxito.

| Código | Estado | descripción |
| --- | --- | --- |
| 200 | Okay | La solicitud fue aceptada y la respuesta enviada. |
| 201  | Creado | Se aceptó el pedido y se creó un nuevo recurso. |
| 202  | acepto | El pedido ha sido aceptado para su procesamiento, pero el procesamiento aún no se ha completado. |
| 203 | Información no autorizada | El servidor procesó correctamente la solicitud, pero está devolviendo información que puede provenir de otra fuente, por ejemplo, de un caché. |
| 204 | Sin contenido | El servidor procesó correctamente la solicitud, pero no hay respuesta. |
| 205 | Reiniciar | Advierte al agente que reinicie el documento que realizó la solicitud. |
| 206 | Contenido parcial | El servidor entrega solo una parte del recurso debido a un encabezado de intervalo enviado por el cliente. Este intervalo se utiliza mucho para poder reanudar las descargas interrumpidas. |
|  |  |  |

## 3XX - Redirección

El solicitante debe tomar medidas adicionales para completar la solicitud. Esta clase de código de estado indica que la acción aún necesita alguna acción por parte del usuario. La acción requerida puede ser realizada por el agente, sin interacción con el usuario, si y solo si el método utilizado en el segundo orden es GET o HEAD. Por lo general, 5 es el límite de redireccionamientos en esta clase, para evitar problemas con interacciones infinitas entre solicitudes.

| Código | Estado | descripción |
| --- | --- | --- |
| 300 | Opción multiple | Indica más opciones para el mismo recurso. Se puede utilizar para presentar opciones para formatos distintos a videos o imágenes. |
| 301 | Movido permanentemente | Esta y todas las solicitudes futuras deben dirigirse a un nuevo URI. |
| 302 | Encontró | Este código de respuesta significa que el URI del recurso solicitado se ha cambiado temporalmente. Es posible que se realicen otros cambios en el URI en el futuro. Por lo tanto, el cliente debe utilizar este mismo URI en solicitudes futuras. |
| 303 | Ver otros | El servidor envió esta respuesta para indicarle al cliente que obtenga el recurso solicitado en otro URI con una solicitud GET. |
| 304 | No modificado | Esto se utiliza con fines de almacenamiento en caché. Informa al cliente que la respuesta no ha sido modificada, de modo que el cliente puede seguir usando la misma versión en caché de la respuesta. |
| 307 | Redirección temporal | En esta ocasión, la solicitud debe repetirse con otro URI, pero las solicitudes futuras aún pueden usar el URI original. A diferencia del 303, el método de pedido no debe cambiarse al volver a emitir el pedido original. Por ejemplo, una solicitud POST debe repetirse con otra solicitud POST. |
| 308 | Redirección permanente | Indica que el recurso se ha movido a un nuevo URI permanente y todas las solicitudes futuras deben utilizar uno de los URI devueltos. Los códigos 307 y 308 son similares al comportamiento de los códigos 302 y 301, pero no permiten modificar el método HTTP. |
|  |  |  |

## 4XX - Error del cliente

La clase de estado 4XX está destinada a advertir de un posible error en la solicitud del usuario. El servidor debe incluir una respuesta que contenga una posible explicación del error y si se trata de una situación temporal o permanente.

| Código | Estado | descripción |
| --- | --- | --- |
| 400 | Solicitud no válida | El pedido no se pudo entregar debido a un error en la solicitud por parte del usuario. |
| 401 | No autorizado | El recurso solicitado necesita autenticación y no se ha proporcionado. |
| 403 | prohibido | El servidor reconoce la solicitud, pero el usuario no puede acceder. Usualmente se usa para cuando el usuario está autenticado pero no tiene el permiso necesario para acceder a esta función. |
| 404 | No encontrado | No se encontró el recurso solicitado. |
| 405 | Método no permitido | Se realizó una solicitud para un recurso usando un método de pedido que no se acepta, por ejemplo, usando GET en un recurso que solo acepta POST. |
| 406 | Inaceptable | Esta respuesta se envía cuando el servidor web, después de realizar la negociación de contenido basada en servidor, no encuentra ningún contenido que cumpla con los criterios proporcionados por el agente de usuario. |
| 407 | Se requiere autenticación proxy | Similar al 401, pero la autenticación debe realizarse a través de un proxy. |
| 408 | Solicitar tiempo de espera (tiempo de espera) | Algunos servidores envían esta respuesta a través de una conexión inactiva, incluso sin ninguna solicitud previa del cliente. Esto significa que el servidor desea finalizar esta conexión no utilizada. |
| 409 | Conflicto general | Esta respuesta se envía cuando una solicitud entra en conflicto con el estado actual del servidor. |
| 410 | Eliminado (ido) | Esta respuesta se envía cuando el contenido solicitado se ha eliminado definitivamente del servidor, sin dirección de reenvío. |
| 411 | Longitud requerida | El servidor rechazó la solicitud porque el campo de encabezado `Content-Length` no está definido y el servidor lo requiere. |
| 412 | Condición previa Falló | El cliente ha indicado condiciones previas en sus encabezados que el servidor no cumple. |
| 413 | Solicitud muy grande | La solicitud es mayor de lo que el servidor desea o puede procesar. |
| 414 | URI de solicitud demasiado larga | El URI solicitado por el cliente es más largo de lo que el servidor está dispuesto a interpretar. |
| 415 | Tipo de papel no admitido | El formato multimedia de los datos solicitados no es compatible con el servidor, por lo que el servidor está rechazando la solicitud. |
| 416 | Rango insatisfactorio | No se puede cumplir el rango especificado por `Rango` en el campo de encabezado de la solicitud. Es posible que el rango esté fuera del tamaño de los datos del URI de destino. |
| 417 | Error de expectativa | Este código de respuesta significa que el servidor no puede cumplir con la expectativa indicada por `Expect` en el campo del encabezado de la solicitud. |
| 418 | Soy una tetera | Este código se definió en 1998 como uno de los juegos tradicionales del 1 de abril y no se espera que lo implementen servidores HTTP reales. |
| 422 | Entidad no procesable | La solicitud estaba bien formada, pero no se pudo seguir debido a errores semánticos. |
| 423 | Cerrado | El recurso al que se accede está bloqueado. |
| 424 | Falla de dependencia | La solicitud falló debido a la falla de una solicitud anterior (por ejemplo, un PROPPATCH). |
| 425 | Muy temprano | Indica que el servidor no está dispuesto a correr el riesgo de procesar una solicitud reproducible. |
| 426 | Actualización obligatoria | El servidor se niega a realizar la solicitud utilizando el protocolo actual, pero puede estar dispuesto a hacerlo después de que el cliente se actualice a un protocolo diferente. |
| 429 | Exceso de pedidos | El usuario envió muchas solicitudes en un período de tiempo determinado, que se utiliza para limitar el número de solicitudes realizadas por el usuario. |

## 5XX - Otros errores

Esta categoría contiene errores genéricos o no manejados en el lado del servidor.

| Código | Estado | descripción |
| --- | --- | --- |
| 500 | error de servidor interno | El servidor recibió la solicitud, pero encontró un error que no sabía cómo manejar. |
| 501 | No se ha implementado | El servidor aún no admite la funcionalidad habilitada. |
| 502 | Puerta de enlace incorrecta | Esta respuesta de error significa que el servidor, mientras trabajaba como puerta de enlace para obtener una respuesta necesaria para manejar la solicitud, obtuvo una respuesta no válida. |
| 503 | Servicio no disponible | El servidor está en mantenimiento o no puede manejar el procesamiento de recursos debido a una sobrecarga del sistema. Esta debe ser una condición temporal. |
| 504 | Puerta de enlace de tiempo de espera | Se caracteriza por errores particulares del sitio web en cuestión. Puede ser que el sitio esté en mantenimiento o no exista. |
| 505 | Versión HTTP no compatible | La versión HTTP utilizada en la solicitud no es compatible con el servidor. |
