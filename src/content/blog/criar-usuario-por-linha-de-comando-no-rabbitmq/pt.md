---
title: Como criar um usuário por linha de comando no RabbitMQ
description: Abaixo segue um snippet rápido de como criar um usuário por linha
  de comando com privilégios de administrador no
  RabbitMQhttps://www.rabbitmq.com/.
date: 2019-10-09T12:47:47.000Z
lang: pt
translationKey: criar-usuario-por-linha-de-comando-no-rabbitmq
slug: criar-usuario-por-linha-de-comando-no-rabbitmq
category: desenvolvimento
tags:
  - tutorial
  - cli
  - rabbitmq
wpId: 6188
canonicalPath: /desenvolvimento/criar-usuario-por-linha-de-comando-no-rabbitmq/
needsReview: false
updated: 2019-10-09T12:48:49.000Z
---

Abaixo segue um snippet rápido de como criar um usuário por linha de comando com privilégios de administrador no [RabbitMQ](https://www.rabbitmq.com/).

\# Criamos um usuário "admin" com a senha "password"
rabbitmqctl add\_user admin password
# Adicionamos a tag de "administrador "para o usuário "admin"
rabbitmqctl set\_user\_tags admin administrator
# Adicionamos as permissões para o usuário "admin" no vhost "/"
rabbitmqctl set\_permissions -p / admin ".\*" ".\*" ".\*"
