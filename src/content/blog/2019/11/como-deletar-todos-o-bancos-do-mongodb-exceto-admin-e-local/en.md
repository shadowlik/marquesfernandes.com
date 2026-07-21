---
title: How to delete all MongoDB banks except admin and local
description: Sometimes you just need to delete all the banks and start from scratch!
date: 2019-11-18T21:43:00.000Z
lang: en
translationKey: como-deletar-todos-o-bancos-do-mongodb-exceto-admin-e-local
slug: how-to-delete-all-mongodb-banks-except-admin-and-local
category: development
tags: []
wpId: 12055
canonicalPath: /en/development/how-to-delete-all-mongodb-banks-except-admin-and-local/
needsReview: false
updated: 2021-12-12T11:14:49.000Z
---

Sometimes you just need to delete all the banks and start from scratch! Using the MongoDB shell this is very easy:

const dbs = db.getMongo().getDBNames();
for(let index in dbs){
    db = db.getMongo().getDB(dbs\[index\] );
    const dbName = db.getName();
    if(!\['admin', 'local'\] .includes(dbName)) {
        print(\`Deleting the database ${dbName}\`);
        db.dropDatabase();
    }
}

This code securely deletes all banks keeping only the banks: **Place** and **admin** , preserving all previously created users and accesses.

As you could see scripting using the [mongo shell](https://docs.mongodb.com/manual/mongo/) it's very simple and powerful.
