---
title: Como Verificar Itens Duplicados no Array no MongoDB
description: Se você tem uma collection grande e precisa descobrir se existem
  items com valores duplicados dentro de um array. Esse problema algum dia
  provavelmente irá acontecer com você, mas não se preocupe! Para verificar se
  há duplicatas em um array, usaremos o .aggregate() no MongoDB.
date: 2020-10-16T15:19:41.000Z
lang: pt
translationKey: como-verificar-itens-duplicados-no-array-no-mongodb
slug: como-verificar-itens-duplicados-no-array-no-mongodb
category: tecnologia
tags:
  - mongo
  - mongodb
  - database
wpId: 10307
canonicalPath: /tecnologia/como-verificar-itens-duplicados-no-array-no-mongodb/
needsReview: false
updated: 2020-10-16T15:19:43.000Z
---

Se você tem uma collection grande e precisa descobrir se existem items com valores duplicados dentro de um array. Esse problema algum dia provavelmente irá acontecer com você, mas não se preocupe! Para verificar se há duplicatas em um array, usaremos o `.aggregate()` no MongoDB.

Vamos criar uma coleção com documentos de exemplo, primeiro inserimos um registro de teste:

db.demo.insertOne({"assunto":\["MySQL","MongoDB","Node", "MySQL"\]});

Depois vamos inserir mais um registro com um item duplicado dentro do nosso array de assunto:

db.demo.insertOne({"assunto":\["Java","C+","Node", "C+"\]});

E agora apenas para teste, vamos inserir um registro sem nenhum item duplicado:

db.demo.insertOne({"assunto":\["JavaScript","C#","Python"\]});

Agora exiba todos os documentos da nossa coleção com a ajuda do método `.find()`

db.demo.find();

Isso produzirá o seguinte resultado:

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

Usaremos o método `.aggregate` para consultar e verificar se há duplicatas em uma matriz nos documentos da nossa coleção:

db.demo.aggregate(\[
    {"$project": {"assunto":1}},
    {"$unwind":"$assunto"},
    {"$group": {"\_id":{"\_id":"$\_id", "Name":"$assunto"}, "count":{"$sum":1}}},
    {"$match": {"count":{"$gt":1}}},
    {"$group": {"\_id": "$\_id.\_id", "assunto":{"$addToSet":"$\_id.Name"}}}
 \])

Você deve esperar o seguinte resultado:

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
