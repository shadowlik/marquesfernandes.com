---
title: Búsqueda de registros duplicados en MongoDB
description: ¿Necesita encontrar registros duplicados en su base de datos
  MongoDB? En este artículo explicaré cómo encontrar documentos duplicados
  (registros) utilizando el método agregado.
date: 2019-07-29T07:03:46.000Z
lang: es
translationKey: encontrando-registros-duplicados-no-mongodb
slug: finding-duplicate-records-no-mongodb
category: tecnologia-es
tags: []
wpId: 9207
canonicalPath: /es/tecnologia-es/finding-duplicate-records-no-mongodb/
needsReview: false
updated: 2021-12-12T11:24:15.000Z
---

¿Necesita encontrar registros duplicados en su base de datos [MongoDB](https://www.mongodb.com/)? En este artículo explicaré cómo encontrar documentos duplicados (registros) utilizando el método agregado.

## La base de datos

Supongamos que hemos hecho una enorme carga de datos de una lista de usuarios y queremos averiguar cuántos registros duplicados hay con el mismo CPF.  
Usaremos como ejemplo la siguiente estructura de documentos:

db.list.findOne();
{
    "\_id" : ObjectId("8902a01b2ec12a2383328b61"),
    "name": "Henrique Marques Fernandes",
    "site": "http://marquesfernandes.com",
    "city": "SP",
    "cpf": "182.983.460-68"
}

## Búsqueda de datos duplicados con agregados

Para ello utilizaremos el método [agregado](https://docs.mongodb.com/manual/aggregation/) con los operadores [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/) y [$match](https://docs.mongodb.com/manual/reference/operator/aggregation/match/) para agrupar y filtrar nuestro resultado, utilizando como identificador único el campo CPF y agregaremos dos nuevos campos: El campo "idsUnicos" que contiene todos los identificadores duplicados únicos encontrados y el campo "total" sumando el total de documentos duplicados encontrados por CPF:

db.list.aggregate(\[  
    •$group: .
        \_id: .cpf: "$cpf",
        idsUnicos: $addToSet: "$\_id",
        total: $sum: 1o
        }
    }
\]);

La consulta anterior devolverá una lista de todos los CPF y sus recuentos. Ahora para buscar y devolver solo cpfs con uno o más registros duplicados, debemos agregar el operador $match para filtrar solo las consultas con más de un registro en el campo total:

db.list.aggregate(\[
    •$group: .
        \_id: .cpf: "$cpf",
        idsUnicos: $addToSet: "$\_id",
        total: $sum: 1o
        }
    },
    •$match: 
        total: "$gt": 1o
        }
    }
\]);
