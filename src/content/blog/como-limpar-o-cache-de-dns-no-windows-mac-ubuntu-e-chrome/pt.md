---
title: Como limpar o cache de DNS no Windows, Mac, Ubuntu e Chrome?
description: DNS, do inglês Domain Name System (Sistema de Nomes de Domínios),
  atua como um tradutor de endereços de IP (192.168.0.1) para domínios
  (marquesfernandes.com), como uma espécie de agência dos correios que consegue
  transformar um CEP (IP) em uma rua (domínio).
date: 2019-07-30T20:54:28.000Z
lang: pt
translationKey: como-limpar-o-cache-de-dns-no-windows-mac-ubuntu-e-chrome
slug: como-limpar-o-cache-de-dns-no-windows-mac-ubuntu-e-chrome
category: self
tags:
  - ubuntu
  - chrome
  - windows
  - dns
  - cache
  - dominios
  - macos
wpId: 5901
canonicalPath: /self/como-limpar-o-cache-de-dns-no-windows-mac-ubuntu-e-chrome/
needsReview: false
updated: 2020-08-09T17:08:47.000Z
---

## O que é DNS?

DNS, do inglês Domain Name System (Sistema de Nomes de Domínios), atua como um tradutor de endereços de IP (192.168.0.1) para domínios ([marquesfernandes.com](http://marquesfernandes.com)), como uma espécie de agência dos correios que consegue transformar um CEP (IP) em uma rua (domínio).

## O que é cache de DNS?

Como o histórico de navegação, imagens e outros arquivos são salvos pelo seu navegador para melhorar a velocidade de navegação, o computador também armazena as localizações (endereços de IP) dos sites que você visitou assim ele evita ter de buscar toda vez qual IP ele deve acessar quando você entra em um site economizado o tempo de resposta e carregamento. Isto é o famoso cache de DNS, então se a referência de IP em um domínio é mudada no servidor de DNS, pode ser que você ainda esteja tentando acessar uma informação desatualizada.

## Como limpar?

Antes de mostrar algumas maneiras de limpar o cache de DNS do seu computador vale lembrar que dependendo da onde você está conectado podem haver outras camadas de cache na rede, muito comum em empresas que utilizam um sistema de proxy e o qual provavelmente você não tem acesso. Nessa situação você infelizmente vai precisar esperar o cache de DNS se renovar sozinho ☹.

### Windows

-   Pressione Win + X para abrir o Menu
-   Clique no botão direito do mouse em Comand Prompt e selecione Run as Administrator (Executar como Administrador).
-   Digite o seguinte comando e pressione enter:

ipconfig /flushdns

Se o comando for efetuado com sucesso, você verá a seguinte mensagem:  
*Windows IP configuration successfully flushed the DNS Resolver Cache (A configuração IP do Windows limpou com sucesso o Cache de Resolução de DNS).*

### **MacOS**

1.  Clique em Aplicativos
2.  Clique em Serviços
3.  Clique duplo no aplicativo Terminal
4.  Digite o seguinte comando:

sudo killall -HUP mDNSResponder

### Ubuntu e distribuições Debian

1.  Abra o terminal (normalmente o atalho é Ctrl+Alt+T)
2.  Execute o seguinte comando:

sudo /etc/init.d/networking restart

Insira a senha root e aguarde a seguinte resposta: *\[ ok \] Restarting networking (via systemctl): networking.service*

### Google Chrome

Abra o navegador Google Chrome, digite **chrome://net-internals/#dns** na barra de navegação e pressione o botão **Clear host cache**:

![](/wp-content/uploads/2019/07/image.png)
