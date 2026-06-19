---
title: What is a Monolith/Monolithic system/application?
description: Monolithic means "work built in a single stone" so it is used to
  define the architecture of some systems, it refers to the way to develop a
  system, program or application where all the functionalities and codes are in
  a single process. These various functionalities are in the same source code
  and in their execution they share resources from the same machine, whether
  processing, memory, databases and files.
date: 2020-07-08T21:51:18.000Z
lang: en
translationKey: o-que-e-um-sistema-aplicacao-monolito-monolitica
slug: what-is-a-monolithic-application-system-monolithic
category: technology
tags: []
wpId: 11906
canonicalPath: /en/technology/what-is-a-monolithic-application-system-monolithic/
needsReview: false
updated: 2021-12-12T11:16:57.000Z
---

With the advancement of software architecture and new ways of developing systems gaining popularity, the definition of monolithic or monolith is once again in high demand, especially in comparison with microservices and distributed services.

Monolithic means "work built in a single stone" so it is used to define the architecture of some systems, it refers to the way to develop a system, program or application where all the functionalities and codes are in a single process. These various functionalities are in the same source code and in their execution they share resources from the same machine, whether processing, memory, databases and files.

As the system is whole in a single block, its development is more agile, if compared to other architectures, being possible to develop an application in less time and with less initial complexity, look at the initial word.

The extent to which an application is described as monolithic depends very much on its perspective. Perhaps an application that is not service-oriented can be considered monolithic.

And in less formal terms, you've probably heard the use of the word to refer to some large system that has only one source code.

The blog where this article is located is an example of a monolith, there is an installation that contains all the necessary features that share resources from the same server.

## Advantages and Disadvantages of a Monolithic System

The disadvantages and advantages vary greatly from the proposal and the problem your system needs to solve. Generalizing the problems found, we can list:

### **maintainability**

As a monolithic application grows, several functions are added to the same code and process, which can result in cascading downtime of the application as a whole. Code becomes complex and difficult to maintain, deliveries in turn become more critical, less frequent and even stable.

### Scalability

As we are in the cloud and cost-on-demand era, a monolithic application can become expensive to scale, as it is a single code, all features need to be scaled as a whole, usually vertically scaled, adding more machine (processor, memory, ...) for application, or horizontally by load balancer models.

### Complexity

For new applications or proof of concept, where the idea still needs to be validated, the monolithic system presents less complexity for initial development, compared to other architectures. Many companies opt for a "hybrid" path, where they develop and validate their ideas by building a monolith, but already thinking and preparing the ground for a possible migration to distributed systems, for example.

## costs

The cost of an application can be an advantage or a disadvantage, depending on the scenario in which the system finds itself. For initial projects its cost tends to be an advantage, as you only need one machine to run the entire system. Over time and as your application escalates, it can become a disadvantage.
