---
title: Criando um Serviço Linux com systemd
description: É muito fácil criar um serviço Linux, você pode criar um serviço
  que rode qualquer script ou programa em qualquer linguagem de programação, e
  tornar esse sistema persistente e resiliente como um serviço em sua máquina.
date: 2020-07-10T20:36:14.000Z
lang: pt
translationKey: criando-um-servico-linux-com-systemd
slug: criando-um-servico-linux-com-systemd
category: desenvolvimento
tags:
  - linux
  - ubuntu
  - debian
  - systemd
  - services
wpId: 8429
canonicalPath: /desenvolvimento/criando-um-servico-linux-com-systemd/
needsReview: false
updated: 2020-07-10T20:36:18.000Z
---

Frequentemente vejo a necessidade de criar algum programa ou script que precisa estar sempre rodando na máquina, e também quando o computador é reiniciado.

Existem algumas ferramentas para resolver esse trabalho, mas sempre considere usar soluções embutidas em seu sistema operacional primeiro.

É muito fácil criar um serviço Linux, você pode criar um serviço que rode qualquer script ou programa em qualquer linguagem de programação, e tornar esse sistema persistente e resiliente como um serviço em sua máquina.

Nesse artigo vamos usar o [systemd](https://pt.wikipedia.org/wiki/Systemd) para gerenciar nosso serviço, ele está presente na maioria das distribuições linux como Ubuntu, Debian, OpenSuse...

## Criando o Programa

Vamos criar uma aplicação web simples em [NodeJs](http://marquesfernandes.com/afinal-o-que-e-nodejs/) de exemplo. Ele vai escutar na porta `9999` e retornar a data atual.

const http = require('http');

http.createServer(function (req, res) {
  res.write(new Date().toString());
  res.end();
}).listen(9999);

Vamos testar, no navegador entre em `http://localhost:9999`.

![](/wp-content/uploads/2020/07/image-2.png)

Agora que validamos que nosso programa funciona, vamos fazer com que ele rode sempre, se por algum motivo ele parar de funcionar deve ser restartado e caso a máquina seja reiniciada o serviço precisa iniciar também.

## Criando o Serviço

Chamerei nosso serviço de `webdate`, com o seu editor de terminal preferido cria um arquivo no caminho `/etc/systemd/system/webdate.service`.

\[Unit\]
Description=WebDate - Serviço Web de Data
After=network.target
StartLimitIntervalSec=0
\[Service\]
Type=simple
Restart=always
RestartSec=1
User=centos
ExecStart=/usr/bin/node /caminho/arquivo.js

\[Install\]
WantedBy=multi-user.target

Você precisará alterar as seguintes variáveis:

-   `User=` : Coloquei o seu usuário atual, ele será o usuário que executará o serviço
-   `ExecStart=` : Esse é o caminho para o script que será executado, você precisa fornecer primeiro o caminho completo para a linha de comando no, normalmente, `/usr/bin/node` e em seguida o caminho completo para o seu arquivo.

Agora para iniciar o nosso serviço basta executar o seguinte comando:

systemctl start webdate

Para habilitar a inicialização automática quando o sistema é ligado:

systemctl enable webdate

Pronto, agora seu serviço já está executando e configurado para reiniciar em caso de falha e iniciar automaticamente junto com o sistema. Para parar o serviço basta executar o seguinte comando:

systemctl stop webdate
