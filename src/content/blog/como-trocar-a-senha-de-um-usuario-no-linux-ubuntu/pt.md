---
title: Como Trocar a Senha de um Usuário no Linux Ubuntu?
description: Você precisa alterar a senha de uma conta de usuário no Linux,
  talvez para acessar um sftp ou ssh no Ubuntu. Como alterar a senha de um
  usuário no Ubuntu Linux?
date: 2020-09-23T23:01:14.000Z
lang: pt
translationKey: como-trocar-a-senha-de-um-usuario-no-linux-ubuntu
slug: como-trocar-a-senha-de-um-usuario-no-linux-ubuntu
category: tecnologia
tags:
  - linux
  - ubuntu
wpId: 10295
cover: ./2020-09-Linux-Wallpaper-42.jpg
canonicalPath: /tecnologia/como-trocar-a-senha-de-um-usuario-no-linux-ubuntu/
needsReview: false
updated: 2020-09-23T23:06:20.000Z
---

Você precisa alterar a senha de uma conta de usuário no Linux, talvez para acessar um sftp ou ssh no Ubuntu. Como alterar a senha de um usuário no Ubuntu Linux?

As informações da sua conta Ubuntu Linux são armazenadas em um arquivo com o nome **/etc/passwd** e a senha criptografada em **/etc/shadow**. Felizmente, para sua segurança, não é possível ter acesso a senhas já armazenadas em texto limpo. 

## Como Alterar uma Senha de Usuário no Ubuntu

1.  Abra o terminal pressionando Ctrl+ Alt+T
2.  Para alterar a senha de um usuário chamado *henrique* no Ubuntu, digite:  
    **sudo passwd henrique**
3.  Para alterar a senha do usuário root no Ubuntu Linux, execute:  
    **sudo passwd root**
4.  E para alterar sua própria senha para o Ubuntu, execute:  
    **passwd**

## Como altero a senha da conta do usuário no Ubuntu?

Abra novamente uma janela de terminal. Digite o seguinte comando para alterar a senha de uma conta de usuário regular do Ubuntu chamada *henrique*:

`sudo passwd {nomeDoUsuario}   sudo passwd henrique   sudo passwd marques`

## Conclusão

Este é um tutorial rápido ensinando como alterar a senha de qualquer usuário no Linux Ubuntu, lembrando que você sempre precisará ter acesso elevado e executar os comandos usando o `sudo`.
