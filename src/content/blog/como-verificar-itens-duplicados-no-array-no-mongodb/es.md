---
title: Cómo buscar elementos duplicados en la matriz en MongoDB
description: Si tiene una colección grande y necesita averiguar si hay elementos
  con valores duplicados dentro de una matriz. Este problema probablemente te
  sucederá algún día, ¡pero no te preocupes! Para verificar si hay duplicados en
  una matriz, usaremos .aggregate () en MongoDB.
date: 2020-10-16T15:19:41.000Z
lang: es
translationKey: como-verificar-itens-duplicados-no-array-no-mongodb
slug: como-verificar-elementos-duplicados-en-arreglo-en-mongodb
category: tecnologia-es
tags: []
wpId: 10441
canonicalPath: /es/tecnologia-es/como-verificar-elementos-duplicados-en-arreglo-en-mongodb/
needsReview: false
updated: 2021-12-12T11:22:51.000Z
---

Si tiene una colección grande y necesita averiguar si hay elementos con valores duplicados dentro de una matriz. Este problema probablemente te sucederá algún día, ¡pero no te preocupes! Para verificar si hay duplicados en una matriz, usaremos `.aggregate()` en MongoDB.

Creemos una colección con documentos de muestra, primero insertamos un registro de prueba:

db.demo.insertOne({"assunto":\["MySQL","MongoDB","Node", "MySQL"\]});

Luego insertaremos un registro más con un elemento duplicado dentro de nuestra matriz de asunto:

db.demo.insertOne({"assunto":\["Java","C+","Node", "C+"\]});

Y ahora, solo para probar, insertemos un registro sin elementos duplicados:

db.demo.insertOne({"assunto":\["JavaScript","C#","Python"\]});

Ahora muestre todos los documentos de nuestra colección con la ayuda del método `.find()`

db.demo.find();

Esto producirá el siguiente resultado:

/\* 1 \*/
{
    "\_id" : ObjectId("5f89f5da526ef077555fe4aa"),
    "assunto" : \[ 
        "MySQL", 
        "MongoDB", 
        "Node"
    \]
}

/\* 2 \*/
{
    "\_id" : ObjectId("5f89f718526ef077555fe4ab"),
    "assunto" : \[ 
        "Java", 
        "C+", 
        "Node"
    \]
}

/\* 3 \*/
{
    "\_id" : ObjectId("5f89f71f526ef077555fe4ac"),
    "assunto" : \[ 
        "JavaScript", 
        "C#", 
        "Python"
    \]
}

Usaremos el método `.aggregate` para consultar y comprobar si hay duplicados en una matriz en los documentos de nuestra colección:

db.demo.aggregate(\[
    {"$project": {"assunto":1}},
    {"$unwind":"$assunto"},
    {"$group": {"\_id":{"\_id":"$\_id", "Name":"$assunto"}, "count":{"$sum":1}}},
    {"$match": {"count":{"$gt":1}}},
    {"$group": {"\_id": "$\_id.\_id", "assunto":{"$addToSet":"$\_id.Name"}}}
 \])

Debe esperar el siguiente resultado:

/\* 1 \*/
{
    "\_id" : ObjectId("5f89ff1f526ef077555fe4b0"),
    "assunto" : \[ 
        "MySQL"
    \]
}

/\* 2 \*/
{
    "\_id" : ObjectId("5f89ff24526ef077555fe4b1"),
    "assunto" : \[ 
        "C+"
    \]
}
