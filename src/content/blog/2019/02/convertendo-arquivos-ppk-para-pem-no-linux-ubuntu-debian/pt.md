---
title: Convertendo arquivos PPK para PEM no Linux (Ubuntu/Debian)
description: Recentemente recebi um arquivo PPK para conectar em um servidor da
  empresa, como usuário do Ubuntu precisei fazer a conversão para o formato PEM
  que é aceito pelo OpenSSH.
date: 2019-02-18T21:10:41.000Z
lang: pt
translationKey: convertendo-arquivos-ppk-para-pem-no-linux-ubuntu-debian
slug: convertendo-arquivos-ppk-para-pem-no-linux-ubuntu-debian
category: desenvolvimento
tags:
  - ssh
  - ubuntu
  - ppk
  - pem
  - openssh
  - servidor
wpId: 5224
cover: ./2019-02-connect-to-ssh.png
canonicalPath: /desenvolvimento/convertendo-arquivos-ppk-para-pem-no-linux-ubuntu-debian/
needsReview: false
updated: 2019-02-24T00:07:37.000Z
---

Recentemente recebi um arquivo PPK para conectar em um servidor da empresa, como usuário do Ubuntu precisei fazer a conversão para o formato PEM que é aceito pelo [OpenSSH.](https://www.openssh.com/)

*Glossário:*  
***PPK (PuTTY Private Key):*** *Arquivo gerados pelo programa* [*PuttyGEN*](https://www.putty.org/)***PEM (Privacy Enhanced Mail):*** *Arquivo de certificado codificado em base64*

  
**1.** Instale a ferramenta [putty](https://www.putty.org/) tools no seu Linux:

$ sudo apt-get install putty-tools

  
**2.** Convertemos o arquivo PPK para o formato PEM:

$ puttygen henrique.fernandes.ppk -O private-openssh -o myserver.pem

*\-O : Tipo de arquivo que queremos gerar    
\-o : Nome do arquivo convertido*

  
**3.** Por segurança quando conectamos usando o [OpenSSH](https://www.openssh.com/) ele verifica se as permissões do arquivo de identidade não estão muito abertas. Precisamos então 'fechar' as permissões do arquivo gerado:

$ chmod 400 myserver.pem

*Se você, como eu, nunca lembra o que significa a numeração de permissões:* [*chmodcommand*](https://chmodcommand.com/chmod-400)

  
**4.** Agora testamos a conexão com o arquivo gerado:

$ ssh -i myserver.pem ubuntu@11.22.33.44
