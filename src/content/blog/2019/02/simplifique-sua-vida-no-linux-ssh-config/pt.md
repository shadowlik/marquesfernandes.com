---
title: "Simplifique sua vida no Linux: SSH Config"
description: Se você também se conecta diariamente a servidores remotos ou VMs
  locais, provavelmente se deparou com o entediante e irritante trabalho de
  digitar e lembrar...
date: 2019-02-12T20:12:58.000Z
lang: pt
translationKey: simplifique-sua-vida-no-linux-ssh-config
slug: simplifique-sua-vida-no-linux-ssh-config
category: tecnologia
tags:
  - linux
  - ssh
  - config
  - bash
  - ubuntu
wpId: 4748
cover: ./2019-02-Screenshot-from-2019-02-12-20-56-11.png
canonicalPath: /tecnologia/simplifique-sua-vida-no-linux-ssh-config/
needsReview: false
updated: 2020-08-09T17:09:16.000Z
---

Se você também se conecta diariamente a servidores remotos ou VMs locais, provavelmente se deparou com o entediante e irritante trabalho de digitar e lembrar todos as combinações de usuário + ip/hostname + porta.

$ ssh henrique@marquesfernandes.com

O exemplo acima parece simples e fácil de lembrar mas infelizmente não é a maioria dos casos, você provavelmente vai se deparar com situações assim:

$ ssh henrique@192.168.99.100 -p 22000 -i ~/.ssh/my.key

Ei que entra a magia do arquivo config! Ele permite definir atalhos para conexões de uma maneira elegante e organizada, facilitando, e muito, o trabalho no dia-a-dia. Ta, mas onde ta esse bendito arquivo? Ok, chega de lenga-lenga e vamos para os exemplo:

## Criando o arquivo config

O arquivo config deve ficar dentro da pasta .ssh do usuário:

$ touch ~/.ssh/config

## Cenário 1:

Supondo que você tenha uma conexão simples como do primeiro exemplo dado no começo do artigo, onde temos um usuário chamado **henrique** querendo acessar o servidor **marquesfernandes.com** utilizando senha simples. Em nosso arquivo config colocaríamos as seguintes configurações:

Host mf
    HostName marquesfernandes.com
    User henrique

**Host:** Nome do atalho para conexão  
**HostName:** Endereço ou IP do servidor  
**User:** Usuário que deseja conectar

Agora você pode conectar com um simples comando:

$ ssh mf

## Cenário 2:

Já no cenário mais complicadinho, temos um usuário **henrique** querendo conectar no servidor **192.168.99.100** na porta **22000** utilizando o arquivo chave **~/.ssh/my.key:**

Host mf
    HostName 192.168.99.100
    Port 22000
    User henrique
    IdentityFile ~/.ssh/my.key

**Port:** Porta para conexão  
**IdentityFile:** Caminho completo para o arquivo chave

### Perguntas frequentes

#### 1\. Como faço para colocar minha senha no arquivo config?

Não é possível, por questões de segurança sempre que você precisar se conectar via SSH utilizando senha em texto simples, será necessário digitar via prompt.

#### 2\. Eu posso ter mais de um config file?

Não, apenas um config.
