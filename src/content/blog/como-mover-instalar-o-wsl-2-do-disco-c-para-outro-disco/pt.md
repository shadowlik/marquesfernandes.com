---
title: Como mover/instalar o WSL 2 do disco C:/ para outro disco
description: Como mover/instalar o WSL 2 do disco C:/ para outro disco. Se você
  tem pouco espaço disponível em seu disco principal, saiba que é possível mover
  suas instalações WSL para outro disco/local.
date: 2020-07-22T21:24:19.000Z
lang: pt
translationKey: como-mover-instalar-o-wsl-2-do-disco-c-para-outro-disco
slug: como-mover-instalar-o-wsl-2-do-disco-c-para-outro-disco
category: tecnologia
tags:
  - linux
  - windows
  - wsl
  - wsl2
  - lxrunoffline
wpId: 8882
canonicalPath: /tecnologia/como-mover-instalar-o-wsl-2-do-disco-c-para-outro-disco/
needsReview: false
updated: 2021-10-18T13:44:26.000Z
---

Recentemente fiz um artigo explicando [como instalar e configurar o WSL 2](http://marquesfernandes.com/como-desenvolver-com-docker-no-linux-dentro-do-windows-sem-dual-boot-wsl-2/) para ter um ambiente linux completo de desenvolvimento direto do Windows. Mas como nem tudo são flores, meu computador possui um SSD com pouco armazenamento, o que me limita em instalar muitos programas no disco `C:/` padrão. Em pouco tempo vi a instalação do WSL 2 começando a consumir espaço, com tantas imagens docker e projetos front com node\_modules, meu limite de armazenamento foi acabando. Como meu notebook tem também um HDD de 1TB, comecei a procurar uma maneira de instalar/mover o WSL 2 para outro disco.

## Opção 1 - wsl

### Exporte a instância do WSL e importe para a pasta de destion

Execute os passos abaixo, trocando as informações conforme as suas informações de disco, pastas e distribuição do WSL

\# cd D:\\
# mkdir WSL
# cd WSL
# wsl --export Ubuntu ubuntu.tar
# wsl --unregister Ubuntu
# mkdir Ubuntu
# wsl --import Ubuntu Ubuntu ubuntu.tar 

### Teste o WSL

Vamos testar a nossa instalação agora já em outro disco

\# wsl -d Ubuntu

### Definir o WSL como padrão (Opcional)

Abra o PowerShell ou Prompt de Comando e liste as instalações wsl

\# wsl --list --all

Agora copie o nome da instação wsl desejada e execute o seguinte comando

\# wsl --setdefault <nome\_wsl>

## Opção 2 - LxRunOffline

### Instalar o LxRunOffline

[LxRunOffline](https://github.com/DDoSolitary/LxRunOffline) é um utilitário completo para gerenciar o Windows Subsystem for Linux (WSL). Esse programa que vai nos permitir mover nossa instalação do disco `C:/` para outro disco, no meu caso `D:/`.

A maneira mais fácil de instalar é usando o utilitário [choco](https://chocolatey.org/):

choco install lxrunoffline

### Listando as instalações WSL

Agora vamos listar todas as instalações WSL disponíveis, no meu caso estou em busca do Ubuntu 20.04:

lxrunoffline list

![WSL](/wp-content/uploads/2020/07/image-39.png)

### Movendo a instalação do Ubuntu 20.04 WSL para outro disco

Primeiro desligue o WSL com o comando `wsl --shutdown`. Você precisa executar esse comando a partir de um Power Shell com privilégios de administrador.

Agora que encontramos a instalação que desejamos mover para outro disco, é bem simples, vamos passar um comando para mover a instalação do `Ubuntu 20.04` para o disco `D:/` dentro de pasta chamada `WSL`:

lxrunoffline move -n Ubuntu-18.04 -d D:\\wsl\\

Aguarde um pouco até o processo terminar, depois disso sua instalação já estará sendo executada a partir do novo disco.
