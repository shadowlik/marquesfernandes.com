---
title: Banco de Dados Relacional (SQL) e Não Relacional (NoSQL) - O que são,
  para que servem e qual a diferença?
description: Quando vamos escolher um banco de dados, uma das maiores dúvidas e
  decisão é escolher entre um banco de dados relacional (SQL) ou não relacional
  (NoSQL). Embora ambas sejam ótimas opções, existem algumas diferenças
  importantes que devemos levar em consideração!
date: 2020-04-01T12:36:22.000Z
lang: pt
translationKey: banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca
slug: banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca
category: tecnologia
tags:
  - mongodb
  - nosql
  - database
  - mysql
  - sql
wpId: 7921
cover: ./2020-03-bandwidth-close-up-computer-connection-1148820.jpg
canonicalPath: /tecnologia/banco-de-dados-relacional-sql-e-nao-relacional-nosql-o-que-sao-para-que-servem-e-qual-a-diferenca/
needsReview: false
updated: 2020-08-09T17:04:47.000Z
---

Quando vamos escolher um banco de dados, uma das maiores dúvidas e decisão é escolher entre um banco de dados relacional (**SQL**) ou não relacional (**NoSQL**). Embora ambas sejam ótimas opções, existem algumas diferenças importantes que devemos levar em consideração na hora de escolher o banco apropriado para a sua aplicação.

Esse não é um artigo para falar qual é melhor ou qual é pior, já quero deixar claro que cada banco tem seus pontos fortes e pontos fracos, e saiba que muitas empresas usam um ou mais tipos de banco em conjunto.

## SQL - Banco de Dados Relacional

Os bancos de dados relacionais, comumente chamados de SQL, em razão da linguagem de consulta implementada, foi inventado em 1970 por E. F. Codd, um jovem programador da IBM, ele propôs a mudança do armazenamento de dados em estruturas hierárquicas ou de navegação para a organização de dados em tabelas, contendo linhas e colunas.

Cada tabela em um banco de dados relacional contém um ou mais dados em colunas, e cada linha, também chamada de registro, contém uma instância exclusiva de dados ou chave para os dados definidos pelas colunas. Cada tabela normalmente possui uma coluna de chave primária, um registro único dentro da tabela para identificar os registros. O relacionamento entre tabelas pode ser definido através do uso de chaves estrangeiras - um campo em uma tabela que se vincula à chave primária de outra tabela.

Podemos imaginar um banco de dados relacional como um excel, onde o banco é uma planilha, cada aba um tabela que contém suas colunas e linhas.

| id | nome | idade | pais |
| --- | --- | --- | --- |
| 1 | Henrique Marques | 28 | Brasil |
| 2 | Terry Crews | 65 | USA |

Exemplo de uma tabela em um banco relacional

Exemplos de banco de dados relacionais:

-   [MySQL](https://www.mysql.com/)
-   [PostgresSQL](https://www.postgresql.org/)
-   [Microsoft Access](https://products.office.com/en-us/access)

### Possíveis razões para usar um Banco Relacional

-   Você precisa de garantias com *ACID* (Atomicidade, Consistência, Isolamento, Durabilidade). O ACID reduz possíveis anomalias e protege a integridade do seu banco de dados. Ele consegue fazer isso porquê define exatamente como as transações interagem com o banco de dados, o que não é o caso dos bancos de dados NoSQL, que têm um objetivo principal de flexibilidade e velocidade, em vez de 100% de integridade dos dados.
-   Seus dados são estruturados e imutáveis.

## NoSQL - Banco de Dados Não Relacional

Quando as pessoas usam o termo “banco de dados NoSQL”, geralmente o usam para se referir a qualquer banco de dados não relacional. Alguns dizem que o termo "NoSQL" significa "não SQL", enquanto outros dizem que significa "não apenas SQL".

Um erro muito comum é quando dizem que os bancos de dados não relacionais não armazenam bem dados de relacionamento. Eles podem armazenar dados de relacionamento, mas apenas os armazenam de maneira diferente dos bancos de dados relacionais. De fato, muitos consideram a modelagem relacionamentos nos bancos de dados NoSQL mais fácil do que nos bancos de dados SQL, porque os dados relacionados não precisam ser divididos entre as tabelas.

Os modelos de dados NoSQL permitem por exemplo, que os dados relacionados sejam feitos em uma única estrutura de dados. Diferentemente dos bancos relacionais, a estrutura de dados não precisa ser definida previamente, portanto, em uma mesma "tabela" você pode ter dados com propriedades diferentes.

Os bancos de dados NoSQL surgiram no final dos anos 2000, à medida que o custo do armazenamento diminuiu drasticamente. Já se foram os dias em que era necessário criar um modelo de dados complexo e difícil de gerenciar, simplesmente com o objetivo de reduzir a duplicação de dados.

Existem diversos tipos de banco de dados não relacional, eles são categorizadas pela sua maneira de armazenamento de dados. Os dois tipos mais utilizados de bancos NoSQL são:

-   **Banco de Documentos:** Armazena seus dados em documentos semelhantes aos objetos [JSON (JavaScript Object Notation)](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/). Possuem normalmente poderosas linguagens de consulta, esses bancos de dados de documentos são ótimos para usos gerais. Eles podem ser facilmente escalados horizontalmente para acomodar grandes volumes de dados. O MongoDB é constantemente classificado como o banco de dados NoSQL mais popular no mundo, e é um exemplo de banco de dados de documentos. Confira abaixo um exemplo de uma collection ("tabela") do MongoDB:

\[{ 
  "\_id": ObjectId("5e6261a1df9bcf90c29726d4"),
  "nome": "Henrique Marques Fernandes",
  "idade": 29
  },
  {
  "\_id": ObjectId("5e6261a1df9bcf90c29726d3"),
  "nome": "Terry Crews",
  "idade": 65,
  "pais": "USA"
}\]

-   **Chave-Valor:** São um tipo mais "simples" de banco de dados, em que cada item contém chaves e valores. Esses valores podem ser qualquer tipo de dado, um texto, um número, um JSON e eles podem ser recuperados fazendo referência a sua chave, fazendo com que sua consulta seja muito simples. Esses bancos são ótimos para quando você precisa armazenar grandes quantidades de dados, mas não precisa executar consultas complexas neles. Os usos mais comuns são ​​para armazenamento de dados em cache. Redis e DynanoDB são provavelmente os bancos mais populares desse tipo.

| 1 | { "id": 1, "nome": "Terry Crews", "idade": 65, "pais": "USA" } |
| --- | --- |
| 2 | Henrique Marques Fernandes |

Exemplo de uma tabela de armazenamento do Redis

Exemplos de bancos de dados não relacionais:

-   [MongoDB](https://www.mongodb.com/)
-   [CouchDB](https://couchdb.apache.org/)
-   [Redis](https://redis.io/)

### Possíveis razões para usar um Banco Não Relacional

-   Armazenando grandes volumes de dados sem estrutura definida. Um banco de dados NoSQL não limita os campos, diferente das colunas no SQL. Além disso, você pode adicionar novas propriedades conforme as necessidades dos negócios mudam, sem se preocupar com o impacto nas demais informações armazenadas.
-   Usando computação e armazenamento em nuvem. Com o avanço e barateamento dos serviços clouds, é possível usar bancos de dados NoSQL inicialmente pequenos, como eles são projetados para escalar horizontalmente você consegue facilmente escalar-los conforme sua necessidade aumenta.
-   Desenvolvimento rápido. Se você estiver desenvolvendo usando metodologias ágeis modernas, um banco de dados relacional provavelmente o atrasará. Um banco de dados NoSQL não requer o nível de preparação normalmente necessário para bancos de dados relacionais.

## Tabela de Diferenças entre SQL e NoSQL

|  | SQL | NoSQL |
| --- | --- | --- |
| Modelo de Armazenamento | Tabelas com colunas e linhas fixas | Documentos JSON, Chave-Valor e outros tipos |
| Histórico | Desenvolvido nos anos 70, com foco em redução de dados duplicados | Desenvolvido em 2000 com o foco em escalabilidade e mudança rápida de desenvolvimento |
| Exemplos | Oracle, MySQL, Microsoft SQL Server, e PostgreSQL | Documento: MongoDB e CouchDB, Chave-Valor: Redis e DynamoDB, Wide-column: Cassandra e HBase, Graph: Neo4j e Amazon Neptune |
| Esquemas | Rídigos | Flexíveis |
| Escalonamento | Vertical (Com mais poder de processamento na mesma máquina) | Horizontal (Escala distribuindo em duas ou mais máquinas) |
| Transações | Suportado | A maioria não suporta, no entando o MongoDB sim |
| Joins | Normalmente necessário | Normalmente não é necessário |
| Mapeamento de Dado para Objeto | Requer um ORM (object-relational mapping) | Pode não precisar de um ORM. Os documentos no MongoDB mapeiam diretamente para dados de estrutura das maiorias das linguagens |

## Porque algumas empresas usam os dois?

Bom, como mencionei logo no começo desse artigo, muitas empresas utilizam os dois juntos, mas por quê? Como você aprendeu, cada banco tem seu ponto forte, hoje o custo de armazenamento está bem acessível, permitindo então que se use as soluções mais adequadas para cada uso. Vamos exemplificar, suponha que seu banco de dados "principal" é do tipo NoSQL, mas você deseja utilizar ferramentas de BI para analisar um conjunto específico de dados, você pode ter um segundo banco de dados relacional que é populado com os dados tratados para a sua equipe de BI. Ou podemos ter o inverso, sua aplicação tem como banco de dados principal o SQL, mas você deseja armazenar outros dados que possam vir a ser importantes, mas que por enquanto ainda não precisam ter uma estrutura bem definida, e para isso você implementar uma banco de dados NoSQL, como um tipo de "data lake".
