---
title: Base de datos relacional (SQL) y base de datos no relacional (NoSQL) -
  ¿Qué son, para qué sirven y cuál es la diferencia?
description: Cuando elegimos una base de datos, una de las preguntas y
  decisiones más importantes es elegir entre una base de datos relacional (SQL)
  o una base de datos no relacional (NoSQL). Si bien ambas son grandes opciones,
  ¡hay algunas diferencias importantes que debemos tener en cuenta!
date: 2020-04-01T12:36:22.000Z
lang: es
translationKey: banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca
slug: base-de-datos-relacional-y-no-relacional-nosql-what-sao-to-serve-and-what-the-difference
category: tecnologia-es
tags: []
wpId: 9141
canonicalPath: /es/tecnologia-es/base-de-datos-relacional-y-no-relacional-nosql-what-sao-to-serve-and-what-the-difference/
needsReview: false
updated: 2021-12-12T11:23:33.000Z
---

Cuando elegimos una base de datos, una de las preguntas y decisiones más importantes es elegir entre una base de datos relacional (SQL) o una **bas**e de datos no relacional **(NoSQ**L). Si bien ambas son excelentes opciones, hay algunas diferencias importantes que debemos tener en cuenta al elegir el banco adecuado para su solicitud.

Este no es un artículo para hablar de cuál es mejor o que es peor, quiero dejar claro que cada banco tiene sus fortalezas y debilidades, y saber que muchas empresas utilizan uno o más tipos de banco juntos.

## SQL - Base de datos relacional

Las bases de datos relacionales, comúnmente llamadas SQL, debido al lenguaje de consulta implementado, fueron inventadas en 1970 por E. F. Codd, un joven programador de IBM, propuso cambiar el almacenamiento de datos en estructuras jerárquicas o la navegación a la organización de datos en tablas, que contiene filas y columnas.

Cada tabla de una base de datos relacional contiene uno o varios datos en columnas y cada fila, también denominada registro, contiene una instancia única de datos o clave para los datos definidos por las columnas. Cada tabla normalmente tiene una columna de clave principal, un único registro dentro de la tabla para identificar los registros. La relación entre tablas se puede definir mediante claves externas: un campo de una tabla que se enlaza a la clave principal de otra tabla.

Podemos imaginar una base de datos relacional como un excel, donde el banco es una hoja de cálculo, cada pestaña una tabla que contiene sus columnas y filas.

| Id | Nombre | Edad | Padres |
| --- | --- | --- | --- |
| 1 | Henry Marques | 28 | Brasil |
| 2 | Terry Crews,\[16) | 65 | Utiliza |

Ejemplo de una tabla en un banco relacional

Ejemplos de bases de datos relacionales:

-   [Mysql](https://www.mysql.com/)
-   [PostgresSQL](https://www.postgresql.org/)
-   [Microsoft Access](https://products.office.com/en-us/access)

### Posibles razones para utilizar un Banco Relacional

-   Necesita garantías con AC*ID (*Atomicity, Consistency, Isolation, Durability). ACID reduce las posibles anomalías y protege la integridad de la base de datos. Puede hacerlo porque define exactamente cómo interactúan las transacciones con la base de datos, que no es el caso con las bases de datos NoSQL, que tienen un objetivo principal de flexibilidad y velocidad en lugar de 100% integridad de los datos.
-   Sus datos son estructurados e inmutables.

## NoSQL - Base de datos no relacional

Cuando las personas usan el término "base de datos NoSQL", a menudo lo utilizan para referirse a cualquier base de datos no relacional. Algunos dicen que el término "NoSQL" significa "no SQL", mientras que otros dicen que significa "no sólo SQL".

Un error muy común es cuando dicen que las bases de datos no relacionales no almacenan bien los datos de relación. Pueden almacenar datos de relación, pero solo almacenar de forma diferente que las bases de datos relacionales. De hecho, muchos consideran modelar relaciones en bases de datos NoSQL más fácil que en bases de datos SQL, porque los datos relacionados no necesitan dividirse entre tablas.

Los modelos de datos NoSQL permiten, por ejemplo, que los datos relacionados se realicen en una única estructura de datos. A diferencia de las bases de datos relacionales, la estructura de datos no necesita definirse de antemano, por lo que en la misma "tabla" puede tener datos con propiedades diferentes.

Las bases de datos NoSQL surgieron a finales de la década de 2000 a medida que el costo del almacenamiento disminuyó drásticamente. Atrás quedaron los días en que era necesario crear un modelo de datos complejo y difícil de administrar, simplemente con el objetivo de reducir la duplicación de datos.

Hay varios tipos de base de datos no relacional, que se clasifican por su forma de almacenar datos. Los dos tipos más utilizados de bancos NoSQL son:

-   **Document Db: almac**ena los datos en documentos similares a los objetos [JSON (JavaScript Object Notation)](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/). Normalmente tienen lenguajes de consulta eficaces, estas bases de datos de documentos son ideales para usos generales. Se pueden escalar fácilmente horizontalmente para dar cabida a grandes volúmenes de datos. MongoDB se clasifica constantemente como la base de datos NoSQL más popular en el mundo, y es un ejemplo de una base de datos de documentos. A continuación se muestra un ejemplo de una colección MongoDB:

\[{ 
  "\_id": ObjectId("5e6261a1df9bcf90c29726d4"),
  "name": "Henrique Marques Fernandes",
  "edad": 29
  },
  {
  "\_id": ObjectId("5e6261a1df9bcf90c29726d3"),
  "name": "Terry Crews",
  "edad": 65,
  "parents": "USA"
}\]

-   **Key-Value: s**on un tipo de base de datos más "simple", donde cada elemento contiene claves y valores. Estos valores pueden ser cualquier tipo de datos, un texto, un número, un JSON y se pueden recuperar haciendo referencia a la clave, lo que hace que la consulta sea muy sencilla. Estas bases de datos son ideales para cuando necesita almacenar grandes cantidades de datos, pero no tiene que ejecutar consultas complejas en ellas. Los usos más comunes son para almacenar en caché los datos. Redis y DynanoDB son probablemente los bancos más populares de este tipo.

| 1 | •"id": 1, "name": "Terry Crews", "age": 65, "parents": "USA" |
| --- | --- |
| 2 | Henrique Marques Fernandes |

Ejemplo de una tabla de almacenamiento de Redis

Ejemplos de bases de datos no relacionales:

-   [Mongodb](https://www.mongodb.com/)
-   [Couchdb](https://couchdb.apache.org/)
-   [Redis](https://redis.io/)

### Posibles razones para utilizar un banco no relacional

-   Almacenamiento de grandes volúmenes de datos sin estructura definida. Una base de datos NoSQL no limita los campos, a diferencia de las columnas de SQL. Además, puede agregar nuevas propiedades a medida que cambian las necesidades empresariales, sin preocuparse por el impacto en otra información almacenada.
-   Uso de almacenamiento informático y en la nube. Al avanzar y abaratar los servicios en la nube, puede usar inicialmente pequeñas bases de datos NoSQL, ya que están diseñadas para escalar horizontalmente, puede escalarlas fácilmente a medida que aumenten sus necesidades.
-   Desarrollo rápido. Si está desarrollando utilizando metodologías ágiles modernas, una base de datos relacional probablemente le retrasará. Una base de datos NoSQL no requiere el nivel de preparación normalmente necesario para las bases de datos relacionales.

## Tabla de diferencias entre SQL y NoSQL

|  | Sql | Nosql |
| --- | --- | --- |
| Modelo de almacenamiento | Tablas con columnas y filas fijas | Documentos JSON, valor de clave y otros tipos |
| Histórico | Desarrollado en la década de 1970, centrándose en la reducción de datos duplicados | Desarrollado en 2000 con un enfoque en la escalabilidad y el rápido cambio de desarrollo |
| Ejemplos | Oracle, MySQL, Microsoft SQL Server y PostgreSQL | Documento: MongoDB y CouchDB, Key-Value: Redis y DynamoDB, Wide-column: Cassandra y HBase, Graph: Neo4j y Amazon Neptune |
| Esquemas | Rídigos | Flexible |
| Escalada | Vertical (con más potencia de procesamiento en la misma máquina) | Horizontal (distribución de escala en dos o más máquinas) |
| Transacciones | Apoyado | La mayoría no soporta, sin embargo mongodb sí |
| Une | Por lo general es necesario | Por lo general, no es necesario |
| Asignación de datos a objeto | Requiere una asignación relacional de objetos (ORM) | Es posible que no necesite un ORM. Los documentos de MongoDB se asignan directamente a la estructura de datos de la mayoría de los idiomas |

## ¿Por qué algunas empresas usan ambas?

Bueno, como mencioné al principio de este artículo, muchas empresas usan los dos juntos, pero ¿por qué? Como aprendió, cada banco tiene su fuerza, hoy en día el costo de almacenamiento es muy asequible, lo que le permite utilizar las soluciones más adecuadas para cada uso. Vamos a ejemplificar, supongamos que su base de datos "primaria" es de tipo NoSQL, pero desea usar herramientas de BI para analizar un conjunto específico de datos, puede tener una segunda base de datos relacional que se rellena con los datos procesados para su equipo de BI. O puede que tengamos lo contrario, su aplicación tiene sql como su base de datos principal, pero desea almacenar otros datos que pueden resultar importantes, pero que por ahora no es necesario tener una estructura bien definida, y para ello se implementa una base de datos NoSQL, como un tipo de "lago de datos".
