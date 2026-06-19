---
title: Como instalar o Chrome no Ubuntu
description: O Google Chrome é o navegador da web mais popular do mundo. É
  rápido, seguro e cheio de recursos para oferecer a melhor experiência de
  navegação. Quando você entra em uma nova instalação do Ubuntu, o navegador
  padrão instalado é o Firefox, ele melhorou bastante nos últimos anos, mas o
  Chrome ainda é a opção padrão da maioria dos usuários.
date: 2020-08-02T00:25:46.000Z
lang: pt
translationKey: como-instalar-o-chrome-no-ubuntu
slug: como-instalar-o-chrome-no-ubuntu
category: tecnologia
tags:
  - linux
  - ubuntu
  - debian
  - chrome
  - google-chrome
wpId: 8968
canonicalPath: /tecnologia/como-instalar-o-chrome-no-ubuntu/
needsReview: false
updated: 2020-08-09T16:59:06.000Z
---

O Google Chrome é o navegador da web mais popular do mundo. É rápido, seguro e cheio de recursos para oferecer a melhor experiência de navegação. Quando você entra em uma nova instalação do Ubuntu, o navegador padrão instalado é o Firefox, ele melhorou bastante nos últimos anos, mas o Chrome ainda é a opção padrão da maioria dos usuários. Se você for na loja do ubuntu (Ubuntu Store), provavelmente não encontrará o Google Chrome para instalar, e sim a sua versão de código aberto Chromium, embora sejam similares (Chromium é o projeto de código aberto), eles não são o mesmo.

Então, como você instala o Google Chrome no Ubuntu? Existem duas maneiras de instalar, usuários mais avançados podem fazer isso direto pela linha de comando ou baixando o instalável igual se faz no Windows.

-   [Instalando o Google Chrome por arquivo](#metodo1)
-   [Instale o Google Chrome por linha de comando](#metodo2)

## 1\. Instalando o Google Chrome no Ubuntu por arquivo

Se você é novo no mundo do Linux, instalar por linha de comando pode ser algo extremamente complicado, mas não se preocupe, o Ubuntu sabe disso e por isso tenta trazer uma experiência mais descomplicada para você.

Primeiro acesse [https://www.google.com/chrome/](https://www.google.com/chrome/) para acessar a página de download do Google Chrome.

![Passo 1 Chrome](./2020-08-image-6.jpg)

Clique em baixar, certifique-se que o Ubuntu instalado é o 64 bits, se for a última versão do Ubuntu ela com certeza é 64 bits.

![Passo 2 Chrome](./2020-08-image-7.jpg)

Escolha a opção DEB para Ubuntu/Debian.

![Passo 3 Chrome](./2020-08-image-8.jpg)

Salve o arquivo localmente, abrir diretamente com o Ubuntu Store pode não funcionar.

![Passo 4 Chrome](./2020-08-image-9.jpg)

Abra o arquivo, e siga os passos de instalação! Simples assim! Agora você já tem o Google Chrome instalado em seu Ubuntu.

## 2\. Instalando o Google Chrome no Ubuntu pelo Terminal

Se você é um usuário já acostumado com o mundo Linux, provavelmente prefere fazer as coisas pela linha de comando. Embora não tão simples como instalar outras aplicações, usando somente o apt-get install chrome não funcionará.

Para instalar o Google Chrome a partir do terminal, precisamos baixar o arquivo *DEB* usando o comando `wget`:

$ wget https://dl.google.com/linux/direct/google-chrome-stable\_current\_amd64.deb

Agora podemos usar o `dpkg` para instalar o Chrome a partir do arquivo DEB baixado:

$ sudo dpkg -i google-chrome-stable\_current\_amd64.deb

Agora basta procurar o Google Chrome na sua lista de aplicações e iniciar.

## Como otimizar o Google Chrome

Agora que você já tem o seu Google Chrome instalado e rodando, confira [este artigo](http://marquesfernandes.com/como-otimizar-a-velocidade-e-desempenho-do-seu-google-chrome/) de como otimizar o navegador e manter a sua performance sempre em dia.
