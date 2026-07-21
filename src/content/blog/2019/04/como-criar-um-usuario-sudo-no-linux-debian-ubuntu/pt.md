---
title: Como criar um usuário sudo no linux (Debian/Ubuntu)
description: O comando sudo permite usuários comuns acesso a funções
  administrativas, normalmente disponíveis apenas para o usuário root.
date: 2019-04-01T21:14:30.000Z
lang: pt
translationKey: como-criar-um-usuario-sudo-no-linux-debian-ubuntu
slug: como-criar-um-usuario-sudo-no-linux-debian-ubuntu
category: desenvolvimento
tags:
  - linux
  - ssh
  - ubuntu
  - debian
  - sudo
  - root
wpId: 5607
cover: ./2019-02-Untitled-Design.jpg
canonicalPath: /desenvolvimento/como-criar-um-usuario-sudo-no-linux-debian-ubuntu/
needsReview: false
updated: 2020-08-09T18:53:27.000Z
---

O comando sudo permite usuários comuns acesso a funções administrativas, normalmente disponíveis apenas para o usuário *root.* Com isso em mente, muito cuidado para qual usuário você dará essas permissões... Se você deseja adicionar as permissões para um usuário já existente, pule para a etapa 2.

## TL;DR;

$ sudo adduser nomedousuario
$ sudo usermod -aG sudo nomedousuario

## Criar um usuário

**1\.** No terminal digite o comando abaixo e não esqueça de trocar nomedousuario pelo nome que você deseja criar.

$ sudo adduser nomedousuario

Em seguida você precisará definir uma senha, por se tratar de um usuário que terá permissões root utilize uma [senha bem forte](https://passwordsgenerator.net). Em seguida você precisará preencher alguns dados opcionais do usuário, como não são obrigatórios você pode deixar vazio.

**2.** Agora vamos utilizar o comando usermod para adicionar o usuário no grupo sudo.

$ sudo usermod -aG sudo nomedousuario

**3.** Agora vamos testar o novo usuário criado e seus poderes como **sudo**.

$ su - nomedousuario
nomedousuario$ sudo ls -ls /root

Você precisará digitar a senha na primeira vez que utilizar o comando **sudo** sempre que iniciar uma nova sessão de terminal.

## Extra: Remover um usuário

### TL;DR;

$ sudo su -
$ userdel -r nomedousuario

**1.** Alternar para o usuário de root:

$ sudo su -

**2.** Use o comando userdel para remover o usuário antigo:

$ userdel nomedousuario

**3\.** Você pode também excluir esse usuário e seu diretório inicial (/home/nomedousuario):

$ userdel -r nomedousuario
