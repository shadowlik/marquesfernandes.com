---
title: Relational (SQL) and Non-relational (NoSQL) Database - What are they,
  what are they for and what is the difference?
description: When choosing a database, one of the biggest questions and
  decisions is choosing between a relational (SQL) or non-relational (NoSQL)
  database. While both are great options, there are some important differences
  that we should be aware of!
date: 2020-04-01T12:36:22.000Z
lang: en
translationKey: banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca
slug: sql-relational-and-non-relational-database-in-sql-what-are-what-they-are-and-what-the-difference
category: technology
tags: []
wpId: 11949
canonicalPath: /en/technology/sql-relational-and-non-relational-database-in-sql-what-are-what-they-are-and-what-the-difference/
needsReview: false
updated: 2021-12-12T11:15:59.000Z
---

When choosing a database, one of the biggest questions and decisions is choosing between a relational database ( **SQL** ) or non-relational ( **NoSQL** ). While both are great options, there are some important differences that you should take into account when choosing the appropriate bank for your application.

This is not an article to talk about which is better or which is worse, as I want to make it clear that each bank has its strengths and weaknesses, and know that many companies use one or more types of bank together.

## SQL - Relational Database

Relational databases, commonly called SQL because of the implemented query language, were invented in 1970 by EF Codd, a young IBM programmer, he proposed changing data storage in hierarchical or navigational structures for organization of data in tables, containing rows and columns.

Each table in a relational database contains one or more data in columns, and each row, also called a record, contains a unique data instance or key for the data defined by the columns. Each table usually has a primary key column, a unique record within the table to identify records. The relationship between tables can be defined through the use of foreign keys - a field in one table that links to the primary key of another table.

We can imagine a relational database like an excel, where the database is a spreadsheet, each tab a table that contains its columns and rows.

| id | Name | age | country |
| --- | --- | --- | --- |
| 1 | Henrique Marques | 28 | Brazil |
| two | Terry Crews | 65 | USA |

Example of a table in a relational database

Relational database examples:

-   [MySQL](https://www.mysql.com/)
-   [PostgresSQL](https://www.postgresql.org/)
-   [Microsoft Access](https://products.office.com/en-us/access)

### Possible reasons for using a Relational Bank

-   you need guarantees with *ACID* (Atomicity, Consistency, Isolation, Durability). ACID reduces potential anomalies and protects the integrity of your database. It does this because it defines exactly how transactions interact with the database, which is not the case with NoSQL databases, which have a primary goal of flexibility and speed, rather than 100% data integrity.
-   Your data is structured and immutable.

## NoSQL - Nonrelational Database

When people use the term “NoSQL database”, they usually use it to refer to any non-relational database. Some say the term "NoSQL" means "not SQL", while others say it means "not just SQL".

A very common mistake is when they say that nonrelational databases don't store relationship data well. They can store relationship data, but they just store it differently than relational databases. In fact, many find modeling relationships in NoSQL databases easier than in SQL databases because the related data does not need to be split across tables.

NoSQL data models allow for example, related data to be made in a single data structure. Unlike relational databases, the data structure does not need to be defined in advance, therefore, in the same "table" you can have data with different properties.

NoSQL databases emerged in the late 2000s as the cost of storage dropped dramatically. Gone are the days of creating a complex and difficult-to-manage data model simply to reduce data duplication.

There are different types of non-relational databases, they are categorized by their way of storing data. The two most used types of NoSQL databases are:

-   **Document Bank:** Store your data in object-like documents [JSON (JavaScript Object Notation)](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) . Often having powerful query languages, these document databases are great for general uses. They can easily be scaled out to accommodate large volumes of data. MongoDB is consistently ranked as the most popular NoSQL database in the world, and is an example of a document database. Check out an example of a MongoDB collection ("table") below:

\[{ 
  "\_id": ObjectId("5e6261a1df9bcf90c29726d4"),
  "name": "Henrique Marques Fernandes",
  "age": 29
  },
  {
  "\_id": ObjectId("5e6261a1df9bcf90c29726d3"),
  "name": "Terry Crews",
  "age": 65,
  "parents": "USA"
}\]

-   **Key-Value:** They are a more "simple" type of database, where each item contains keys and values. These values can be any data type, a text, a number, a JSON and they can be retrieved by referencing your key, making your query very simple. These databases are great for when you need to store large amounts of data but don't need to run complex queries against them. The most common uses are for caching data. Redis and DynanoDB are probably the most popular banks of this type.

| 1 | { "id": 1, "name": "Terry Crews", "age": 65, "parents": "USA" } |
| --- | --- |
| two | Henrique Marques Fernandes |

Example of a Redis storage table

Examples of non-relational databases:

-   [MongoDB](https://www.mongodb.com/)
-   [CouchDB](https://couchdb.apache.org/)
-   [Redis](https://redis.io/)

### Possible reasons for using a Non-Relational Bank

-   Storing large volumes of data with no defined structure. A NoSQL database does not limit fields, unlike columns in SQL. Plus, you can add new properties as business needs change, without worrying about the impact on other stored information.
-   Using cloud computing and storage. As cloud services advance and become cheaper, it is possible to use NoSQL databases initially small, as they are designed to scale out you can easily scale them as your needs grow.
-   Rapid development. If you're developing using modern agile methodologies, a relational database will likely slow you down. A NoSQL database does not require the level of preparation normally required for relational databases.

## Table of Differences between SQL and NoSQL

|  | SQL | NoSQL |
| --- | --- | --- |
| Storage Model | Tables with fixed columns and rows | JSON documents, Key-Value and other types |
| Historic | Developed in the 70s, with a focus on reducing duplicate data | Developed in 2000 with a focus on scalability and rapid development change |
| Examples | Oracle, MySQL, Microsoft SQL Server, and PostgreSQL | Document: MongoDB and CouchDB, Key-Value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune |
| schemes | Rídigos | Flexible |
| scaling | Vertical (With more processing power on the same machine) | Horizontal (Scale distributing on two or more machines) |
| Transactions | supported | Most do not support it, however MongoDB does |
| Joins | normally needed | It is usually not necessary. |
| Data to Object Mapping | Requires an ORM (object-relational mapping) | May not need an ORM. Documents in MongoDB map directly to structure data for most languages |

## Why do some companies use both?

Well, as I mentioned at the beginning of this article, many companies use both together, but why? As you learned, each bank has its strengths, today the cost of storage is very affordable, allowing you to use the most suitable solutions for each use. Let's give an example, suppose your "main" database is of the NoSQL type, but you want to use BI tools to analyze a specific set of data, you might have a second relational database that is populated with the data handled for the your BI team. Or we can have the opposite, your application has SQL as its main database, but you want to store other data that may be important, but which for the time being does not need to have a well-defined structure, and for that you implement a database NoSQL data, as a "data lake" type.
