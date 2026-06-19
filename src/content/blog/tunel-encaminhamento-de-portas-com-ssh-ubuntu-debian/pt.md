---
title: Túnel/Encaminhamento de Portas com SSH - Ubuntu/Debian
description: Utilizando o protocolo SSH para encaminhar portas para um servidor
  com acesso externo para web, chamamos isso de SSH Tunnel.
date: 2020-03-21T19:26:17.000Z
lang: pt
translationKey: tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian
slug: tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian
category: desenvolvimento
tags:
  - ssh
  - ssh-tunnel
  - autossh
wpId: 5685
canonicalPath: /desenvolvimento/tunel-encaminhamento-de-portas-com-ssh-ubuntu-debian/
needsReview: false
updated: 2020-03-21T19:26:24.000Z
---

Recentemente me deparei com um problema para criar um servidor web em casa usando um computador velho, então resolvi escrever sobre o [Carrier Grade NAT (CGNAT)](http://marquesfernandes.com/2019/03/07/o-que-e-cgnat-double-nat/), que é o que impossibilita o roteamento de portas e o acesso externo a servidores/serviços web caseiros. Felizmente existe uma maneira de contornar essa situação utilizando o protocolo [SSH](https://pt.wikipedia.org/wiki/Secure_Shell) para encaminhar portas para um servidor com acesso externo para web, chamamos isso de [SSH Tunnel.](https://www.ssh.com/ssh/tunneling/example)

## Pré-requisitos

-   Open SSH instalado na sua máquina local
-   [Servidor Web com acesso externo a internet e SSH Server instalado](https://m.do.co/c/6bc37502c1d9)

## Começando...

Você tem um servidor web no seu computador da sua casa e você gostaria de conseguir acessar ele fora da sua rede local, para isso você vai precisar ter alguma máquina que possua acesso externo, por exemplo, um droplet básico na [digitalocean](https://m.do.co/c/6bc37502c1d9) (5 doletas mensais) que já vem com SSH instalado e habilitado por padrão, você pode consultar também os serviços da [Amazon](https://aws.amazon.com/pt/) e [Google cloud](https://cloud.google.com/?&utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-bkws-all-all-trial-e-dr-1008075-LUAC0010101&utm_content=text-ad-none-none-DEV_c-CRE_380746899544-ADGP_BKWS+%7C+Multi+~+GCP-KWID_43700047045899971-kwd-155951229-userloc_1001773&utm_term=KW_gcp-ST_GCP&gclid=Cj0KCQjw9tbzBRDVARIsAMBplx-vPL2bYpnbkP49E7n_QpkMwSEJ0VbcLbssHOeHDUbDZuOhIjEbMUoaAmAHEALw_wcB&gclsrc=aw.ds), eles oferecem alguns limites gratuitos e até um crédito inicial para usar.

Para não causar confusão, nesse tutorial sempre que eu me referir a servidor, estou falando da máquina que tem um IP com acesso externo, ou seja, a máquina criada em algum provedor cloud como citamos acima.

## Configurando o servidor SSH

Supondo que você está utilizando um servidor linux, Ubuntu por exemplo, precisaremos editar algumas configurações no arquivo /etc/ssh/sshd\_config, procure pela linha contendo as propriedades AllowTcpForwarding e GatewayPorts para yes. E então você precisará restartar o servidor SSH:

sudo systemctl restart sshd
sudo service sshd restart

## Encaminhando Portas Remotas

Imagine que você tem um servidor em sua casa e você precisa acessar ele externamente, fora da sua rede local. Para isso vamos usar a funcionalidade de "Encaminhamento de Porta Remota", basicamente vamos criar um túnel, uma conexão com o computador que queremos que tenha acesso externo no servidor que tem acesso externo, esse servidor vai atuar com o que chamamos de proxy, ele apenas vai receber e rotear por esse túnel as requisições. Para isso vamos usar o seguinte comando:

$ ssh -R porta\_remota:endereco\_local:porta\_local usuario@servidorexterno.com

Então, supondo que temos o nosso servidor web rodando na porta 6060 e deixar esse servidor acessível pela porta 8080 do servidor externo, usaríamos o seguinte comando:

$ ssh -R 8080:localhost:6060 henrique@marquesfernandes.com

Se tudo der certo, agora quando a gente acessar o servidor pela URL marquesfernandes.com:8080 (poderia ser um IP também), a requisição vai ser roteada para a porta 6060 da máquina local e a resposta devolvida para o usuário.

## Encaminhando Portas Locais

Imagine que você tem um banco de dados MySQL na rede de seu escritório que só permite conexões locais, e você deseja acessar esse banco por uma porta local em seu computador. Usamos o seguinte comando:

ssh -L 4000:127.0.0.1:3306 user@example.com

Isso fará um ligação para a porta `4000` no seu computador. Qualquer requisição que chegar nessa porta será encaminhada para a porta `3306` do servidor externo, agora você pode conectar seu cliente MySQL localmente na porta 4000.

## Auto SSH

Se você deseja manter o seu SSH Tunnel sempre ativo, restartando em caso de desconexão, use o programa [Auto SSH](https://www.everythingcli.org/ssh-tunnelling-for-fun-and-profit-autossh/). Ele permite que você monitore túneis SSH e cuida de todo o trabalho de reiniciar em caso de queda, você pode inclusive deixar ele rodando como um serviço da sua máquina para máxima persistência.
