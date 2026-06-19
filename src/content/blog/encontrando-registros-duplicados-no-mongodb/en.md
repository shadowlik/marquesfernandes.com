---
title: Finding Duplicate Records in MongoDB
description: Looking to find duplicate records in your MongoDB database? In this
  article I will explain how to find the duplicate documents (records) using the
  aggregate method.
date: 2019-07-29T07:03:46.000Z
lang: en
translationKey: encontrando-registros-duplicados-no-mongodb
slug: finding-duplicate-records-in-mongodb
category: development
tags: []
wpId: 12079
canonicalPath: /en/development/finding-duplicate-records-in-mongodb/
needsReview: false
updated: 2021-12-12T11:14:45.000Z
---

Looking to find duplicate records in your database [MongoDB](https://www.mongodb.com/) ? In this article I will explain how to find the duplicate documents (records) using the aggregate method.

## the database

Let's suppose we've massively loaded data from a list of users and we want to find out how many duplicate records there are with the same CPF.  
We will use the following document structure as an example:

db.list.findOne();
{
    "\_id" : ObjectId("8902a01b2ec12a2383328b61"),
    "name" : "Henrique Marques Fernandes",
    "site": "http://marquesfernandes.com",
    "city" : "SP",
    "cpf": "182.983.460-68"
}

## Finding Duplicate Data with Aggregate

For this we will use the method [aggregate](https://docs.mongodb.com/manual/aggregation/) with the operators [$group](https://docs.mongodb.com/manual/reference/operator/aggregation/group/) and [$match](https://docs.mongodb.com/manual/reference/operator/aggregation/match/) to group and filter our result, using the CPF field as a unique identifier and we'll add two new fields: The "idsUnicos" field containing all duplicate unique ids found and the "total" field adding the total number of duplicate documents found by CPF:

db.list.aggregate(\[  
    {$group: {
        \_id: {cpf: "$cpf"},
        idsUnicos: {$addToSet: "$\_id"},
        total: {$sum: 1}
        }
    }
\]);

The query above will return a list with all CPFs and their respective counts. Now to find and return only CPFs with one or more duplicate records, we must add the $match operator to filter only queries with more than one record in the total field:

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
