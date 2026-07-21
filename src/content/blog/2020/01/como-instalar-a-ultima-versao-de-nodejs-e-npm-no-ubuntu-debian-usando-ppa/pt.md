---
title: Como instalar a última versão do NodeJS e NPM no Ubuntu/Debian usando PPA
description: O PPA do Node está sendo atualizado e mantido em seu site oficial.
  Podemos adicionar esse PPA em nosso sistema Debian e Ubuntu 19.10, 18.04 LTS,
  16.04 LTS (Trusty Tahr) e 14.04 LTS (Xenial Xerus) e instalar o Node usando o
  gerenciador de pacotes nativo.
date: 2020-01-07T23:17:10.000Z
lang: pt
translationKey: como-instalar-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-usando-ppa
slug: como-instalar-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-usando-ppa
category: desenvolvimento
tags:
  - ubuntu
  - debian
  - node
  - nodejs
  - npm
wpId: 6984
cover: ./2020-01-EaGZh7-scaled.jpg
canonicalPath: /desenvolvimento/como-instalar-a-ultima-versao-de-nodejs-e-npm-no-ubuntu-debian-usando-ppa/
needsReview: false
updated: 2020-01-07T23:18:23.000Z
---

**[NodeJS](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)** é uma plataforma criada no motor de execução JavaScript do Chrome para criar facilmente aplicativos de rede escaláveis e rápidos. O [PPA do Node](https://deb.nodesource.com/setup_13.x) está sendo atualizado e mantido em seu site oficial. Podemos adicionar esse PPA em nosso sistema Debian e Ubuntu 19.10, 18.04 LTS, 16.04 LTS (Trusty Tahr) e 14.04 LTS (Xenial Xerus) e instalar o Node usando o gerenciador de pacotes nativo.

***Confira mais em:** [Afinal o que é NodeJS?](http://marquesfernandes.com/2019/03/05/afinal-o-que-e-nodejs)*

## Adicionado o PPA do NodeJS

O pacote de instalação do Node está disponível sempre na versão LTS e na versão atual, fica por sua conta escolher qual versão instalar. Vamos adicionar o PPA em nosso sistema e instalar o Node no Debian/Ubuntu.

Na última atualização desse artigo o NodeJS se encontra na versão 12 LTS e 13 atual, para instalar a última versão disponível:

$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_13.x | sudo -E bash -

Se você deseja instalar a última **versão** **LTS**:

$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup\_12.x | sudo -E bash -

## Instalando o NodeJS

Agora que adicionamos a PPA, vamos executar o comando para instalar o NodeJS e também o seu gerenciador de dependências, Node Package Manager (NPM). Usaremos o comando `apt-get update` para atualizar as informações de nossos pacotes e `apt-get install` para iniciar o processo de instalação:

$ sudo apt-get update
$ sudo apt-get install nodejs

## Verificando a versão do Node.js e NPM

A instalação pode demorar um pouco dependendo da sua conexão com internet, caso tudo ocorra conforme esperado, após a instalação concluída precisamos verificar se as versões instaladas do NodeJS e do NPM estão corretas. Para mais informações sobre as versões disponíveis verifique o [site oficial](https://nodejs.org/download/).

$ node -v 

# Resultado esperado
v13.3.0

Verifique também a versão do [NPM](https://npmjs.com/):

$ npm -v 

# Resultado esperado
6.13.1

## Executando um javascript simples

Podemos testar se o nosso Node está funcionando corretamente rodando um script simples diretamente de nosso terminal:

$ node -e "for (let i = 0; i < 10; i++) { console.log(i) }"

# Resultado esperado
0
1
2
3
4
5
6
7
8
9
