---
title: Como descobrir o nome e versão da distribuição linux pela linha de comando
description: Provavelmente em algum momento da sua vida você estará de frente
  para um terminal linux desconhecido onde você não faz a mínima ideia de qual
  seja a distribu...
date: 2019-06-18T19:43:32.000Z
lang: pt
translationKey: como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando
slug: como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando
category: desenvolvimento
tags:
  - linux
  - distro
  - kernel
  - cat
  - lsb_release
  - hostnamectl
  - version
wpId: 5846
canonicalPath: /desenvolvimento/como-descobrir-o-nome-e-versao-da-distribuicao-linux-pela-linha-de-comando/
needsReview: false
updated: 2019-06-18T19:43:37.000Z
---

Provavelmente em algum momento da sua vida você estará de frente para um terminal linux desconhecido onde você não faz a mínima ideia de qual seja a distribuição e muito menos a versão... Mas então como eu descubro qual distribuição/versão estou rodando?

**TL;DR** - Você pode usar um dos seguintes métodos abaixo:

1.  cat /etc/\*-release
2.  lsb\_release -a
3.  hostnamectl

## 1\. Usando o arquivo /etc/\*-release

Para descobrir a versão e outras informações do seu Linux rode o comando cat abaixo no seu terminal:

$ cat /etc/\*-release

Exemplo rodando no meu desktop com [Ubuntu](https://ubuntu.com/):

DISTRIB\_ID=Ubuntu
DISTRIB\_RELEASE=19.04
DISTRIB\_CODENAME=disco
DISTRIB\_DESCRIPTION="Ubuntu 19.04"
NAME="Ubuntu"
VERSION="19.04 (Disco Dingo)"
ID=ubuntu
ID\_LIKE=debian
PRETTY\_NAME="Ubuntu 19.04"
VERSION\_ID="19.04"
HOME\_URL="https://www.ubuntu.com/"
SUPPORT\_URL="https://help.ubuntu.com/"
BUG\_REPORT\_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY\_POLICY\_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION\_CODENAME=disco
UBUNTU\_CODENAME=disco

## 2\. Usando o comando lsb\_release

O comando lsb\_release mostra o LSD (Linux Standard Base) e informações específicas da distro. Rode o seguinte comando:

$ lsb\_release -a

Exemplo do resultado:

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 19.04
Release:	19.04
Codename:	disco

## 3\. Usando o comando hostnamectl

Para distribuições baseadas em GNU systemd essa é a melhor opção:

$ hostnamectl

Exemplo do resultado:

  Static hostname: \*\*\*\*\*\*\*
         Icon name: computer-laptop
           Chassis: laptop
        Machine ID: 07c27ab13c7c49b59e53df8781de\*\*\*\*
           Boot ID: 77062197a37d45eeb656c889c7e5\*\*\*\*
  Operating System: Ubuntu 19.04
            Kernel: Linux 5.0.0-16-generic
      Architecture: x86-64

## Como eu descubro a versão do meu Linux Kernel?

Rodando um dos seguintes comandos

$ uname -a
$ uname -mrs

Exemplo do resultado:

Linux \*\*\*\*\*\* 5.0.0-16-generic #17-Ubuntu SMP Wed May 15 10:52:21 UTC 2019 x86\_64 x86\_64 x86\_64 GNU/Linux

1.  **Linux -** Nome do Kernel
2.  **5.0.0-16 -** Versão do Kernel
3.  **x86\_64** \- Versão da arquitetura (64 bit)
