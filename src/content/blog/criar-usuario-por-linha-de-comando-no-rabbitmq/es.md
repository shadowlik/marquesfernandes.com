---
title: Cómo crear un usuario por línea de comandos en RabbitMQ
description: A continuación se muestra un fragmento rápido de cómo crear un
  usuario por línea de comandos con privilegios de administrador en
  RabbitMhttps://www.rabbitmq....
date: 2019-10-09T12:47:47.000Z
lang: es
translationKey: criar-usuario-por-linha-de-comando-no-rabbitmq
slug: create-user-by-command-line-no-rabbitmq
category: tecnologia-es
tags: []
wpId: 9197
canonicalPath: /es/tecnologia-es/create-user-by-command-line-no-rabbitmq/
needsReview: false
updated: 2021-12-12T11:24:13.000Z
---

A continuación se muestra un fragmento rápido de cómo crear un usuario por línea de comandos con privilegios de administrador e[n RabbitM](https://www.rabbitmq.com/)Q.

• Creamos un usuario "admin" con la contraseña "password"
rabbitmqctl add\_user contraseña de administrador
• Añadimos la etiqueta "admin" para el usuario "admin"
rabbitmqctl set\_user\_tags admin
• Agregamos permisos para el usuario "admin" en vhost "/"
rabbitmqctl set\_permissions -p / admin ".\*" ".\*" ".\*" ".\*" ".\*"
