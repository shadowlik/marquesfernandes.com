---
title: O que é o campo _id do MongoDB e como usar?
description: "Se você está começando ou já utiliza um banco MongoDB, já deve ter
  notado a existência obrigatório de um curioso campo: _id. Você sabe para que
  ele realmente serve e o que está escondido no meio de tantas letras e
  números?"
date: 2020-03-21T19:58:27.000Z
lang: pt
translationKey: o-que-e-o-campo-_id-do-mongodb-e-como-usar
slug: o-que-e-o-campo-_id-do-mongodb-e-como-usar
category: desenvolvimento
tags:
  - mongo
  - mongodb
  - database
  - objectid
  - bson
wpId: 6323
cover: ./2019-11-logo-gray-1024x512-993867aa92.png
canonicalPath: /desenvolvimento/o-que-e-o-campo-_id-do-mongodb-e-como-usar/
needsReview: false
updated: 2020-03-21T19:58:35.000Z
---

MongoDB é um banco de dados que vem ganhado muita popularidade nos últimos tempos, sua capacidade de crescimento do banco de dados e modelagem amigável com objetos vem atraído cada vez mais adeptos. Afinal, o slogan do sistema é "para idéias gigantes" e por boas razões. O sistema suporta extrema escalabilidade e foi projetado para armazenar um número excepcionalmente grande de documentos.

Se você está começando ou já utiliza um banco MongoDB, já deve ter notado a existência obrigatório de um curioso campo: `_id`. Você sabe para que ele realmente serve e o que está escondido no meio de tantas letras e números?

## Características do ObjectId

O campo \_id é um dado do tipo ObjectId, e ele tem algumas funções padrões primárias:

-   \_id é a chave primária de todos os elementos de uma coleção, isso permite que os registros sejam diferenciados por padrão.
-   \_id é um campo indexado automaticamente. As pesquisas que especificam {\_id: } referem-se ao índice \_id como guia.
-   Em termos de arquitetura, por padrão, o campo \_id é um ObjectID, um dos tipos [BSON](http://bsonspec.org/) do MongoDB. Os usuários também podem substituir \_id por algo diferente de um ObjectID, embora não seja muito recomendado.

Um dos motivos pelos quais os ObjectId são gerados da maneira mencionada acima é que ele contém um comportamento útil devido à maneira como a ordenação funciona. Como ele contém um carimbo de data/hora de 4 bytes (resolução de segundos) e um contador de incremento, além de alguns identificadores mais exclusivos, como o identificador da máquina, graças a isso podemos usar o campo \_id para classificar documentos na ordem de criação, basta ordenar o campo \_id. Isso pode ser útil em bases que precisam economizar o espaço, não sendo necessário um carimbo de data / hora de criação adicional.

## Estruturas do ObjectId

Um ObjectId é um tipo BSON binário de 12 bytes representados em 24 caracteres hexadecimais:

{
    "\_id": ObjectId("54759eb3c090d83494e2d804")
}

Esses bytes são gerados automaticamente e separados em grupos com funcionalidades específicas:

| Tamanho | Descrição |
| --- | --- |
| 4 bytes | 4 bytes que representa os segundos desde a época do Unix |
| 3 bytes | 3-byte com identificador de máquina |
| 2 bytes | 2-byte com o identificador único do processo |
| 3 bytes | 3-byte contador que começa com um número aleatório por coleção |

**Referências:**  
[https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/  
](https://mongodb.github.io/node-mongodb-native/2.0/tutorials/objectid/)[https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T\_MongoDB\_Bson\_ObjectId.htm  
](https://mongodb.github.io/mongo-csharp-driver/2.6/apidocs/html/T_MongoDB_Bson_ObjectId.htm)[https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it](https://www.vividcortex.com/blog/what-is-mongodbs-id-field-and-how-to-use-it)
