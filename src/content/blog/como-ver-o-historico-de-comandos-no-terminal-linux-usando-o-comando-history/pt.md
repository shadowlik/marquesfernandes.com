---
title: Como ver o histórico de comandos no terminal linux usando o comando history
description: Como o nome já entrega, o comando history lista todo o histórico de
  comandos do seu terminal (o mesmo histórico pode ser encontrado no arquivo
  .bash_history na sua pasta home).
date: 2020-01-07T08:39:33.000Z
lang: pt
translationKey: como-ver-o-historico-de-comandos-no-terminal-linux-usando-o-comando-history
slug: como-ver-o-historico-de-comandos-no-terminal-linux-usando-o-comando-history
category: desenvolvimento
tags:
  - linux
  - ubuntu
  - terminal
  - debian
  - cli
  - history
wpId: 6932
canonicalPath: /desenvolvimento/como-ver-o-historico-de-comandos-no-terminal-linux-usando-o-comando-history/
needsReview: false
updated: 2020-01-07T08:39:40.000Z
---

Quanto mais você trabalha com terminais linux, mais você acaba precisando otimizar suas tarefas recorrentes, buscando comandos que otimizem seu dia-a-dia e melhorem sua produtividade: O comando `history` com certeza é um deles. Como o nome já entrega, o comando history lista todo o histórico de comandos do seu terminal (o mesmo histórico pode ser encontrado no arquivo `.bash_history` na sua pasta *home*). Por padrão, o comando histórico exibe os últimos 5k comandos salvos.

***Confira também:** [Como escanear seu servidor linux por Malwares (Debian/Ubuntu)](http://marquesfernandes.com/2019/12/04/como-escanear-seu-servidor-linux-por-malwares-debian-ubuntu)*

## Usando o comando history básico

Basta digitar `history` no terminal do linux para usar o modo mais simples do comando:

$ history

# Resultado
1 clear
2 ls -la
3 sudo apt-get update
4 history

O comando `history` exibirá uma o histórico de comandos de sua sessão, no começo de cada linha existe um número, podemos usar essa numeração para recuperar e reexecutar o comando desejado:

$ !2

# Resultado
drwxr-xr-x  2 shadowlik shadowlik 4096 dez 28 17:40 Desktop
drwxr-xr-x  2 shadowlik shadowlik 4096 dez 28 17:40 Documents
drwxr-xr-x  6 shadowlik shadowlik 4096 jan  6 23:26 Downloads

Existe uma outra forma de encontrar e reexecutar os comandos, fazendo uma busca genérica no comando `history`:

$ !ls

Você pode também reexecutar o seu último comando digitando `!!`.

## Buscando um comando usando history

Agora vamos combinar o comando `history` com o comando `grep` , assim conseguiremos filtrar o nosso histórico em busca do comando desejado:

$ history | grep ls

# Resultado
2  sudo ls -la
5  history | grep ls

Outra maneira de acessar a funcionalidade de busca é pelo atalho `Ctrl-R`. Digita o que procura e o seu prompt trará o resultado:

(reverse-i-search)\`':

## Mudando um comando executado

Muitas vezes queremos encontrar um comando para reexecutar, mas trocando alguma opção ou parâmetro. O comando `history` permite que você reexecute comandos com uma sintaxe diferente. Por exemplo, se queremos trocar o nosso comando anterior `history | grep ls -la` para `history | grep ls -ln`, eu posso executar o seguinte comando:

$ ^ls^ln^

O `history` reexecutará o comando trocando `ls` por `ln`.

## Deletando o histórico

Talvez você precise algum dia excluir um comando que contenha algum dado sensível ou até mesmo todos os comandos de seu histórico. Para deletar um comando em particular, digite `history -d <nº da linha>` e para apagar todo o conteúdo do histórico, digite `history -c`.
