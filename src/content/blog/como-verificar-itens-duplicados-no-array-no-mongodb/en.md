---
title: How to Check for Duplicate Array Items in MongoDB
description: If you have a large collection and need to find out if there are
  items with duplicate values inside an array. This problem will probably happen
  to you someday, but don't worry! To check an array for duplicates, we'll use
  .aggregate() in MongoDB.
date: 2020-10-16T15:19:41.000Z
lang: en
translationKey: como-verificar-itens-duplicados-no-array-no-mongodb
slug: how-to-check-duplicate-items-in-array-in-mongodb
category: technology
tags: []
wpId: 11839
canonicalPath: /en/technology/how-to-check-duplicate-items-in-array-in-mongodb/
needsReview: false
updated: 2021-12-12T11:17:16.000Z
---

If you have a large collection and need to find out if there are items with duplicate values inside an array. This problem will probably happen to you someday, but don't worry! To check an array for duplicates, we'll use the `.aggregate()` on MongoDB.

Let's create a collection with example documents, first we insert a test record:

db.demo.insertOne({"subject":\["MySQL","MongoDB","Node", "MySQL"\] });

Then let's insert one more record with a duplicate item into our subject array:

db.demo.insertOne({"subject":\["Java","C+","Node", "C+"\] });

And now just for testing, let's insert a record with no duplicate items:

db.demo.insertOne({"subject":\["JavaScript","C#","Python"\] });

Now display all documents in our collection with the help of the method `.find()`

db.demo.find();

This will produce the following result:

/\* 1 \*/ { "\_id" : ObjectId("5f89f5da526ef077555fe4aa"), "subject" : \[ "MySQL", "MongoDB", "Node" \] } /\* 2 \*/ { "\_id" : ObjectId("5f89f718526ef077555fe4ab" ), "subject" : \[ "Java", "C+", "Node" \] } /\* 3 \*/ { "\_id" : ObjectId("5f89f71f526ef077555fe4ac"), "subject" : \[ "JavaScript", "C#", "Python" \] }

We will use the method `.aggregate` to consult and check for duplicates in a matrix in the documents of our collection:

db.demo.aggregate(\[ {"$project": {"subject":1}}, {"$unwind":"$subject"}, {"$group": {"\_id":{"\_id": "$\_id", "Name":"$subject"}, "count":{"$sum":1}}}, {"$match": {"count":{"$gt":1}} }, {"$group": {"\_id": "$\_id.\_id", "subject":{"$addToSet":"$\_id.Name"}}} \])

You should expect the following result:

/\* 1 \*/ { "\_id" : ObjectId("5f89ff1f526ef077555fe4b0"), "subject" : \[ "MySQL" \] } /\* 2 \*/ { "\_id" : ObjectId("5f89ff24526ef077555fe4b1"), "subject" : \[ " C+" \] }
