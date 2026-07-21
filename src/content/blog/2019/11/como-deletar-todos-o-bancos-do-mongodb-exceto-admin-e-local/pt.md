---
title: Como deletar todos os bancos do MongoDB exceto admin e local
description: As vezes você simplesmente precisa deletar todos os bancos e começar do zero!
date: 2019-11-18T21:43:00.000Z
lang: pt
translationKey: como-deletar-todos-o-bancos-do-mongodb-exceto-admin-e-local
slug: como-deletar-todos-o-bancos-do-mongodb-exceto-admin-e-local
category: desenvolvimento
tags:
  - mongo
  - mongodb
  - mongoshell
wpId: 6341
cover: ./2019-11-mongodb.jpg
canonicalPath: /desenvolvimento/como-deletar-todos-o-bancos-do-mongodb-exceto-admin-e-local/
needsReview: false
updated: 2019-12-04T21:32:03.000Z
---

As vezes você simplesmente precisa deletar todos os bancos e começar do zero! Usando o shell do MongoDB isso fica muito fácil:

const dbs = db.getMongo().getDBNames();
for(let index in dbs){
    db = db.getMongo().getDB(dbs\[index\]);
    const dbName = db.getName();
    if(!\['admin', 'local'\].includes(dbName)) {
        print(\`Deletando o banco ${dbName}\`);
        db.dropDatabase();
    }
}

Esse código deleta de uma maneira segura todos os bancos mantendo apenas os bancos: **Local** e **Admin**, preservando todos os usuários e acessos previamente criados.

Como você pôde ver fazer scripts utilizando o [mongo shell](https://docs.mongodb.com/manual/mongo/) é bem simples e poderoso.
