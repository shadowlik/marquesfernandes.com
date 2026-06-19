---
title: Fazendo o terminal tab auto-complete case-insensitive no Ubuntu
description: Por padrão o terminal do Ubuntu faz diferença entre pastas e
  arquivos com nomes começando em maiúscula e minúscula, particularmente acho
  contra produtivo e é...
date: 2019-02-16T14:30:20.000Z
lang: pt
translationKey: fazendo-o-terminal-tab-auto-complete-case-insensitive-no-ubuntu
slug: fazendo-o-terminal-tab-auto-complete-case-insensitive-no-ubuntu
category: desenvolvimento
tags:
  - ubuntu
  - terminal
  - inputrc
  - case-insensitive
  - case-sensitive
wpId: 4782
canonicalPath: /desenvolvimento/fazendo-o-terminal-tab-auto-complete-case-insensitive-no-ubuntu/
needsReview: false
updated: 2019-02-24T00:07:48.000Z
---

Por padrão o terminal do Ubuntu faz diferença entre pastas e arquivos com nomes começando em maiúscula e minúscula, particularmente acho contra produtivo e é um dos primeiros ajustes que faço em uma nova instalação do SO.

Para aqueles que também não gostam do terminal case-sensitive, existe uma solução que facilitará sua vida.

Mas antes devo lembrar que essa configuração é global e afetará os demais usuários do sistema!

Então vamos lá, obviamente primeiro abra o terminal (ctrl + alt + t).

## Crie um backup

**Sempre, sempre, sempre** faça um backup quando estiver modificando arquivos de configurações:

$ sudo cp -p /etc/inputrc /etc/\_inputrc.bk

*A flag* *\-p* *faz com que a cópia do arquivo preserve as permissões, dono e data.*

Caso algo saia errado você pode simplesmente voltar ao arquivo original:

$ sudo cp /etc/\_inputrc.bk /etc/inputrc

## Configurando

Existem outras maneiras de editar o arquivo, para simplificar e evitar explicações de comandos específicos de editores, usaremos um simples comando que vai adicionar a configuração necessária na última linha do arquivo:

$ sudo echo "set completion-ignore-case on" >> /etc/inputrc

## Testando

Uma maneira fácil de testar é navegar até a sua pasta de usuário (*home*) e tentar navegar para a pasta *Desktop.*

Para testar precisamos abrir um novo terminal para que a modificação seja carregada:

$ cd ~
$ cd desk # Pressione o tab
$ cd Desktop # Voilà
