---
title: What is MongoDB's _id field and how to use it?
description: "If you are starting or already using a MongoDB database, you may
  have noticed the obligatory existence of a curious field: _id. Do you know
  what it's really for and what's hidden among so many letters and numbers?"
date: 2020-03-21T19:58:27.000Z
lang: en
translationKey: o-que-e-o-campo-_id-do-mongodb-e-como-usar
slug: what-is-field-mongodb-id-and-how-to-use
category: development
tags: []
wpId: 11965
canonicalPath: /en/development/what-is-field-mongodb-id-and-how-to-use/
needsReview: false
updated: 2021-12-12T11:15:55.000Z
---

MongoDB is a database that has gained a lot of popularity in recent times, its database growth capability and object-friendly modeling is attracting more and more adherents. After all, the system's slogan is "for giant ideas" and for good reason. The system supports extreme scalability and is designed to store an exceptionally large number of documents.

If you are starting or already using a MongoDB database, you may have noticed the obligatory existence of a curious field: `_id` . Do you know what it's really for and what's hidden among so many letters and numbers?

## ObjectId Features

The \_id field is a data of type ObjectId, and it has some primary standard functions:

-   \_id is the primary key of all elements of a collection, this allows records to be differentiated by default.
-   \_id is an automatically indexed field. Searches that specify {\_id: } refer to the \_id index as a guide.
-   In terms of architecture, by default the \_id field is an ObjectID, one of the types [BSON](http://bsonspec.org/) from MongoDB. Users can also replace \_id with something other than an ObjectID, although it's not really recommended.

One of the reasons ObjectIds are generated in the way mentioned above is that they contain useful behavior due to the way sorting works. As it contains a 4-byte timestamp (seconds resolution) and an increment counter, as well as some more unique identifiers such as the machine identifier, thanks to this we can use the \_id field to sort documents in order of creation, just order the \_id field. This can be useful in databases that need to save space and do not need an additional creation timestamp.

## ObjectId Structures

An ObjectId is a 12-byte binary BSON type represented in 24 hexadecimal characters:

{
    "\_id": ObjectId("54759eb3c090d83494e2d804")
}

These bytes are automatically generated and separated into groups with specific functionality:

| Size | Description |
| --- | --- |
| 4 bytes | 4 bytes representing seconds since Unix times |
| 3 bytes | 3-byte with machine identifier |
| 2 bytes | 2-byte with the unique identifier of the process |
| 3 bytes | 3-byte counter starting with a random number per collection |

**References:**  
[https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/  
](https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/)[https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T\_MongoDB\_Bson\_ObjectId.htm  
](https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T_MongoDB_Bson_ObjectId.htm)[https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it](https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it)
