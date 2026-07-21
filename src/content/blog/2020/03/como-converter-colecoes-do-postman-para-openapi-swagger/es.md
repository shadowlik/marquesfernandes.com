---
title: Cómo convertir colecciones Postman a OpenAPI/Swagger
description: Bueno, si te gusto comenzó a desarrollar toda tu documentación en
  Postman y ahora estás buscando una solución fácil y rápida para convertir de
  Postman a OpenAPI, ten la seguridad de que podemos usar el servicio gratuito
  de APIMatic para realizar esta conversión.
date: 2020-03-13T22:25:40.000Z
lang: es
translationKey: como-converter-colecoes-do-postman-para-openapi-swagger
slug: how-convert-colecoes-do-postman-to-openapi-swagger
category: tecnologia-es
tags: []
wpId: 9156
canonicalPath: /es/tecnologia-es/how-convert-colecoes-do-postman-to-openapi-swagger/
needsReview: false
updated: 2021-12-12T11:23:41.000Z
---

**[Postman](https://www.postman.com/)** es una gran herramienta para desarrollar y probar API RESTful creadas por otros o probar y desarrollar las que creó usted mismo. Ofrece una interfaz de usuario elegante con la que puede realizar solicitudes JSON, XML e incluso HTML sin necesidad de escribir mucho código solo para probar la funcionalidad de una API.

[**Swagger**](https://swagger.io/docs/specification/about/) es un conjunto de herramientas de código abierto creadas en torno a la especificación **OpenAPI** que pueden ayudarle a diseñar, crear, documentar y consumir API REST. Las principales herramientas de Swagger incluyen:

-   Swagger Editor - editor en el navegador donde puede escribir las especificaciones OpenAPI.
-   Swagger UI: representa las especificaciones de OpenAPI como documentación de API interactiva en el explorador.
-   Codegen Swagger: genera códigos auxiliares de servidor y bibliotecas de cliente a partir de una especificación OpenAPI.

La especificación **OpenAPI** es un formato de descripción de API para las API de REST. Un archivo OpenAPI le permite describir toda su API, incluyendo:

-   Puntos finales disponibles (/usuarios) y operaciones en cada punto de co`nex`ión (GET/usuari`os,` POST/usuarios)
-   Parámetros de operación Entrada y salida para cada operación
-   Métodos de autenticación de la API de REST
-   Información de contacto, licencia, términos de uso y otra información.

Bueno, ahora que entendemos lo que es cada herramienta/servicio y lo hace podemos entender dónde aplicar cada una. **OpenAPI** se ha convertido en un estándar de la comunidad para compartir la documentación de las API RESTful, pero realmente me gusta la herramienta de **Postman** para desarrollar y probar API en el día a día, pero la funcionalidad para el tiempo y el intercambio de documentación de Postman se paga, lo que hace que sea inviable para su uso en pequeños proyectos o empresas con un presupuesto restringido, pero al mismo tiempo mantener dos bases de documentación es muy laborioso y puede ser inviable dependiendo de la número de puntos finales.

## ¡La solución!

La solución que encontré fue centralizar y desarrollar toda la documentación de las API en formato **OpenAPI**, ya que como esta especificación se desarrolla en un archivo YAML o JSON, pudimos versionar estos archivos por proyectos, en el caso de una arquitectura de microservicios esto es extremadamente útil, y como Postman permite la importación de la especificación OpenAPI, es fácil actualizar su versión local.

Bueno, si te gusto comenzó a desarrollar toda tu documentación en Postman y ahora estás buscando una solución fácil y rápida para convertir de Postman a OpenAPI, ten la seguridad de que podemos usar el [servicio gratuito de APIMatic](https://apimatic.io/transformer) para realizar esta conversión. Regístrese en el sitio y en pocos minutos tener toda su documentación convertida!
