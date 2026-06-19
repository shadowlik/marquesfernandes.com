---
title: ¿Qué es el campo de _id de MongoDB y cómo lo uso?
description: "Si está empezando o ya está utilizando un banco MongoDB, es
  posible que ya haya notado la existencia obligatoria de un campo curioso: _id.
  ¿Sabes lo que realmente sirve y lo que se esconde en medio de tantas letras y
  números?"
date: 2020-03-21T19:58:27.000Z
lang: es
translationKey: o-que-e-o-campo-_id-do-mongodb-e-como-usar
slug: what-and-the-field-_id-of-the-mongodb-and-how-to-use
category: tecnologia-es
tags: []
wpId: 9149
canonicalPath: /es/tecnologia-es/what-and-the-field-_id-of-the-mongodb-and-how-to-use/
needsReview: false
updated: 2021-12-12T11:23:37.000Z
---

MongoDB es una base de datos que ha ganado mucha popularidad en los últimos tiempos, su capacidad para el crecimiento de bases de datos y el modelado amigable con objetos ha atraído a más y más adherentes. Después de todo, el lema del sistema es "por ideas gigantes" y por una buena razón. El sistema admite una escalabilidad extrema y está diseñado para almacenar un número excepcionalmente grande de documentos.

Si está empezando o ya está utilizando un banco MongoDB, es posible que ya haya notado la existencia obligatoria de un campo curioso: `_id`. ¿Sabes lo que realmente sirve y lo que se esconde en medio de tantas letras y números?

## Características de objectid

El campo \_id es un dato de tipo ObjectId y tiene algunas funciones predeterminadas principales:

-   \_id es la clave principal para todos los elementos de una colección, esto permite que los registros se diferencien de forma predeterminada.
-   \_id es un campo indexado automáticamente. Las búsquedas que especifican el valor de \_id: se refieren al índice \_id como guía.
-   En términos de arquitectura, de forma predeterminada, el campo \_id es un ObjectID, uno de los tipos [BSON](http://bsonspec.org/) de mongodb. Los usuarios también pueden reemplazar \_id con algo distinto de un ObjectID, aunque no es muy recomendable.

Una de las razones por las que los objectids se generan de la manera mencionada anteriormente es que contiene un comportamiento útil debido a la forma en que funciona el orden. Debido a que contiene una marca de tiempo de 4 bytes (resolución de segundos) y un contador de incrementos, además de algunos identificadores más únicos, como el identificador de la máquina, gracias a esto podemos utilizar el campo \_id para ordenar los documentos en el orden de creación, simplemente ordene el campo \_id. Esto puede ser útil en bases que necesitan ahorrar espacio, y no se requiere ninguna marca de tiempo de creación adicional.

## Estructuras ObjectId

Un ObjectId es un tipo BSON binario de 12 bytes representado en 24 caracteres hexadecimales:

{
    "\_id": ObjectId("54759eb3c090d83494e2d804")
}

Estos bytes se generan automáticamente y se separan en grupos con funcionalidad específica:

| Tamaño | Descripción |
| --- | --- |
| 4 bytes | 4 bytes que representan los segundos desde el tiempo unix |
| 3 bytes | 3 bytes con asa de máquina |
| 2 bytes | 2 bytes con identificador de proceso único |
| 3 bytes | Contador de 3 bytes que comienza con un número aleatorio por colección |

**Referencias**  
[https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/  
](https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/)[https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T\_MongoDB\_Bson\_ObjectId.htm  
](https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T_MongoDB_Bson_ObjectId.htm)[https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it](https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it)
