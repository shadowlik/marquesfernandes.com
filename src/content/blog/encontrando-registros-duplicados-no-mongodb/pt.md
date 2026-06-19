---
title: Encontrando registros duplicados no MongoDB
description: Precisando encontrar registros duplicados no seu banco de dados
  MongoDB? Nesse artigo explicarei como encontrar os documentos (registros)
  duplicados utilizando o método aggregate.
date: 2019-07-29T07:03:46.000Z
lang: pt
translationKey: encontrando-registros-duplicados-no-mongodb
slug: encontrando-registros-duplicados-no-mongodb
category: desenvolvimento
tags:
  - mongo
  - mongodb
  - nosql
  - database
  - query
wpId: 5946
cover: ./2019-07-ly7k6a4so4gac3ewtcml.jpeg
canonicalPath: /desenvolvimento/encontrando-registros-duplicados-no-mongodb/
needsReview: false
updated: 2019-07-28T17:46:38.000Z
---

Precisando encontrar registros duplicados no seu banco de dados [MongoDB](https://www.mongodb.com/)? Nesse artigo explicarei como encontrar os documentos (registros) duplicados utilizando o método aggregate.

## O banco de dados

Vamos supor que fizemos uma carga massiva de dados de uma lista de usuários e queremos descobrir quantos registros duplicados existem com o mesmo CPF.  
Utilizaremos como exemplo a seguinte estrutura de documentos:

db.list.findOne();
{
    "\_id" : ObjectId("8902a01b2ec12a2383328b61"),
    "nome" : "Henrique Marques Fernandes",
    "site": "http://marquesfernandes.com",
    "cidade" : "SP",
    "cpf": "182.983.460-68"
}

## Encontrando dados duplicados com aggregate

Para isso utilizaremos o método [aggregate](https://docs.mongodb.com/manual/aggregation/) com os operadores [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/) e [$match](https://docs.mongodb.com/manual/reference/operator/aggregation/match/) para agrupar e filtrar nosso resultado, usando como identificador único o campo CPF e adicionaremos dois novos campos: O campo "idsUnicos" contendo todos os ids únicos duplicados encontrados e o campo "total" somando o total de documentos duplicados encontrados por CPF:

db.list.aggregate(\[  
    {$group: {
        \_id: {cpf: "$cpf"},
        idsUnicos: {$addToSet: "$\_id"},
        total: {$sum: 1}
        }
    }
\]);

A query acima retornará uma lista com todos os CPFs e as respectivas contagens. Agora para encontrar e retornar apenas os CPFs com um ou mais registros duplicados devemos adicionar o operador $match para filtrar apenas as consultas com mais de um registro no campo total:

db.list.aggregate(\[
    {$group: {
        \_id: {cpf: "$cpf"},
        idsUnicos: {$addToSet: "$\_id"},
        total: {$sum: 1}
        }
    },
    {$match: { 
        total: {"$gt": 1}
        }
    }
\]);
