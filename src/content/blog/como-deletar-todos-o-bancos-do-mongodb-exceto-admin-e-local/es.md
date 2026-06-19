---
title: Cómo eliminar todos los bancos de MongoDB excepto el administrador y local
description: A veces sólo tiene que eliminar todos los bancos y empezar de cero!
date: 2019-11-18T21:43:00.000Z
lang: es
translationKey: como-deletar-todos-o-bancos-do-mongodb-exceto-admin-e-local
slug: how-delete-all-the-banks-of-the-mongodb-except-admin-and-local
category: tecnologia-es
tags: []
wpId: 9193
canonicalPath: /es/tecnologia-es/how-delete-all-the-banks-of-the-mongodb-except-admin-and-local/
needsReview: false
updated: 2021-12-12T11:24:12.000Z
---

A veces sólo tiene que eliminar todos los bancos y empezar de cero! El uso de la cáscara de MongoDB hace esto muy fácil:

const dbs á db.getMongo().getDBNames();
for(let index in dbs)
    db á db.getMongo().getDB(dbs\[index\]);
    const dbName á db.getName();
    if(\['admin', 'local'\]!. includes(dbName))
        print('Eliminación del banco $'dbName'');
        db.dropDatabase();
    }
}

Este código elimina de forma segura todos los bancos manteniendo solo los bancos: Loca**l y A**dmi**n, con**servando todos los usuarios y los accesos creados anteriormente.

Como se podía ver hacer scripts usando el shel[l mongo es](https://docs.mongodb.com/manual/mongo/) bastante simple y potente.
