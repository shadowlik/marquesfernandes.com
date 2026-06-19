---
title: How to create a user from the command line in RabbitMQ
description: Below is a quick snippet on how to create a command-line user with
  administrator privileges on RabbitMQhttps://www.rabbitmq.com/ .
date: 2019-10-09T12:47:47.000Z
lang: en
translationKey: criar-usuario-por-linha-de-comando-no-rabbitmq
slug: create-user-by-command-line-in-rabbitmq
category: development
tags: []
wpId: 12061
canonicalPath: /en/development/create-user-by-command-line-in-rabbitmq/
needsReview: false
updated: 2021-12-12T11:14:48.000Z
---

Below is a quick snippet on how to create a command-line user with administrator privileges on [RabbitMQ](https://www.rabbitmq.com/) .

\# We created an "admin" user with the password "password"
rabbitmqctl add\_user admin password
# Added the "admin" tag to the "admin" user
rabbitmqctl set\_user\_tags admin administrator
# Added permissions for user "admin" on vhost "/"
rabbitmqctl set\_permissions -p / admin ".\*" ".\*" ".\*"
