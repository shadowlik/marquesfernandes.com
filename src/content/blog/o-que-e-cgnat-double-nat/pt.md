---
title: O que é CGNAT (Double NAT)?
description: >-
  CGNAT é como se a operadora tivesse instalado um segundo roteador na sua
  região e compartilhado sua conexão de internet com seus outros clientes.

  Sendo um pouco mais técnico: Os provedores estão compartilhando um IPV4
  público para mais de um cliente e roteando a conexão através de um segundo
  roteado para o seu roteador em casa.
date: 2019-03-07T12:05:34.000Z
lang: pt
translationKey: o-que-e-cgnat-double-nat
slug: o-que-e-cgnat-double-nat
category: tecnologia
tags:
  - cgnat
  - doublenat
  - ipv4
  - ipv6
  - roteador
  - carrier-grade-network
  - nat444
  - nicbr
wpId: 5688
cover: ./2019-03-maxresdefault.jpg
canonicalPath: /tecnologia/o-que-e-cgnat-double-nat/
needsReview: false
updated: 2020-08-09T17:09:15.000Z
---

Cada vez mais reclamações surgem a respeito do Carrier Grade Network Address (CGNAT), se você enfrenta algum problema com jogos ou encaminhamento de portas e serviços, você pode estar sendo impactado por conta da solução CGNAT.

Se você utiliza um serviço de internet no Brasil, por exemplo NET, você provavelmente está em um cenário CGNAT.

## O que é CGNAT e o que isso significa?

CGNAT é como se a operadora tivesse instalado um segundo roteador na sua região e compartilhado sua conexão de internet com seus outros clientes.

Sendo um pouco mais técnico: Os provedores estão compartilhando um IPV4 público para mais de um cliente e roteando a conexão através de um segundo roteador para o seu roteador em casa.

### Porque eles estão fazendo isso? :(

Essa solução é necessária porque o padrão vigente hoje no brasil (IPV4) não possuí mais ips livres, as 4.3 bilhões de combinações possíveis já não antedem mais a quantidade de dispositivos/conexões de hoje.

Essa solução deveria ser temporária até a troca completa pelo novo padrão IPV6, que permite 340 trilhões de trilhões de trilhões de combinações, mais do que suficiente para atender a atual demanda de dispositivos conectados na internet.

### Desvantagens do CGNAT

Além de adicionar mais um ponto de falha na rede e mais "resistência" na conexão para a internet, o CGNAT complica tarefas administrativas de rede, como encaminhamento de portas e conexões p2p (ponto a ponto) que pode gerar problemas em jogos online, streaming de vídeo, VoIP (Skype, Discord, etc.)

E ao adicionar esse novo roteador, criamos também brechas de segurança, por se tratar de mais um roteador na rede, intermediando todas as conexões dessa região, um invasor pode tomar conta desse roteador e começar a monitorar os pacotes sendo transmitidos, e além disso o compartilhamento do IPV4 público pode atrapalhar investigações criminais pois o controle e registro de acesso se tornam mais complexo nesse cenário.
