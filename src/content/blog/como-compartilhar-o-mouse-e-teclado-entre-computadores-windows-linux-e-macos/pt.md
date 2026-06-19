---
title: Como Compartilhar o Mouse e Teclado Entre Computadores - Windows, Linux e MacOS
description: Você tem dois computadores e apenas um teclado e mouse? Ou apenas
  quer otimizar seu tempo e usar um computador antigo como segunda tela? E se eu
  te falar que é possível compartilhar o teclado e mouse do seu computador e
  controlar mais de um computador com eles, e que não importa qual sistema
  operacional as suas máquinas tem, sim é possível!
date: 2020-07-17T18:18:04.000Z
lang: pt
translationKey: como-compartilhar-o-mouse-e-teclado-entre-computadores-windows-linux-e-macos
slug: como-compartilhar-o-mouse-e-teclado-entre-computadores-windows-linux-e-macos
category: tecnologia
tags:
  - linux
  - windows
  - macos
  - barrier
  - mouse
  - teclado
wpId: 8828
cover: ./2020-07-marko-hankkila-TxCL6AWWtMo-unsplash.jpg
canonicalPath: /tecnologia/como-compartilhar-o-mouse-e-teclado-entre-computadores-windows-linux-e-macos/
needsReview: false
updated: 2020-08-09T16:59:07.000Z
---

Você tem dois computadores e apenas um teclado e mouse? Ou apenas quer otimizar seu tempo e usar um computador antigo como segunda tela? E se eu te falar que é possível compartilhar o teclado e mouse do seu computador e controlar mais de um computador com eles, e que não importa qual sistema operacional as suas máquinas tem, sim é possível!

Aqui na minha configuração do dia a dia eu sempre estou com dois computadores, o principal rodando Windows e um antigo com Ubuntu rodando, e para fazer esse setup ser o mais otimizado possível, uso um programinha que permite que eu controle os dois computadores a partir do mesmo mouse e teclado.

## O software: Barrier - KVM

O Barrier é um software que imita a funcionalidade de um [chaveador KVM](https://pt.wikipedia.org/wiki/Chaveador_KVM), que permite o uso de um único teclado, mouse e até monitor para controlar vários computadores girando fisicamente um seletor no dispositivo para alternar qual máquina está sendo controlada naquele momento. O Barrier faz isso sem a necessidade de um aparelho físico, através de software e se comunicando pela rede interna, para funcionar todos computadores precisam estar conectados na mesma rede. Ele permite que você diga qual máquina está controlando, como se estivesse conectada a dois ou mais monitores, movendo o mouse para a borda da tela ou usando uma tecla para alternar o foco entre os computadores configurados.

O mais interessante é que além de gratuito, o barrier é de código aberto [github.com/debauchee/barrier](https://github.com/debauchee/barrier), permitindo que você baixe e modifique seu código fonte caso haja necessidade.

## Sistemas Operacionais Suportados

O Barrier suporta todos os sistemas operacionais populares, você encontrará as instruções para instalação em cada uma deles em [github.com/debauchee/barrier](https://github.com/debauchee/barrier/) e as versões para download em [github.com/debauchee/barrier/releases](https://github.com/debauchee/barrier/releases).

-   Windows 7, 8, 8.1, e 10
-   MacOS/OS X
-   Linux (Ubuntu, Debian, CentOS, Fedora, OpenSuse, ...)
-   FreeBSD
-   OpenBSD

## Instalando e Configurando o Computador Principal

O primeiro computador que vamos configurar deverá ser aquele que queremos utilizar o mouse e teclado para controlar os demais também. Neste tutorial usarei o meu computador Windows como principal, mas você pode escolher qualquer um deles como principal e inclusive alternar depois, qual computador configurado é o principal.

Baixe a última versão do `.exe` do Barrier em [github.com/debauchee/barrier/releases](https://github.com/debauchee/barrier/releases), e clique duas vezes no arquivo baixado. Provavelmente o Windows exibirá uma mensagem parecida com essa:

![Instalando o Barrier](./2020-07-barrier-1.jpg)

Clique em *Mais informações* e *Executar assim mesmo*, depois basta aceitar os termos e condições e prosseguir clicando em *próximo* para concluir a instalação.

![Configurando o primário](./2020-07-image-33.png)

Agora procure o seu atalho do Barrier em seu computador e execute o programa. Seleciona a primeira opção *"Server"* para configurar como o computador principal. Anote o IP do seu computador dentro da sua rede, usaremos ele para configurar o computador secundário, no nosso caso é o IP ao lado do número em negrito, usaremos o *192.168.0.43*.

## Instalando e Configurando o Computador Secundário

Agora vamos instalar e configurar o nosso computador secundário, que será controlado pelo mouse e teclado do nosso computador principal, no meu caso estarei usando a distribuição Ubuntu 20.04 do Linux como secundário.

A instalação é bem simples e rápida, com apenas dois comandos:

$ sudo apt-get update
$ sudo apt-get install -y barrier

Agora abra a aplicação e siga o processo de instalação. Quando concluido, abra o programa, selecione o modo *"Client"* e desmarque a seleção de *"Auto config".* No campo *IP do servidor* adicione o número do IP copiado do passo anterior. Anote também o *Nome da tela*, usaremos ele para configurar a posição da tela em nosso computador principal.

![Barrier Configurando Secundário](./2020-07-image-35.jpg)

## Configurando a Posição da Tela

Agora que temos o programa rodando nos dois computadores, precisamos configurar e autorizar no computador principal a posição do computador secundário que desejamos controlar. Abra o programa novamente e clique no botão *Configurar servidor*, certifique-se que o Barrier não está rodando, se não você não conseguirá editar as configurações.

![Barrier Adicionado Computador](./2020-07-image-36.jpg)

Clique no computador para adicionar um novo computador secundário. Adicione em *Nome da tela* o nome que anotamos no passo anterior e clique em OK.

![Barrier Configuração Secundário](./2020-07-image-38.png)

Nesse caso configuramos a posição do nosso computador secundário a esquerda de nosso computador primário, isso significa que quando arrastarmos o mouse para o extremo esquerdo do computador principal, ele irá mudar o controle para o computador secundário. Vamos testar nossa configuração, clique em *Iniciar* no computador primário e em *Aplicar* no secundário, se tudo ocorrer conforme esperado, você já conseguirá controlar os dois computadores a partir de um único mouse e teclado. Você pode inclusive adicionar um terceiro computador, por exemplo, um computador da Apple com MacOS, para configurar basta seguir os mesmos passos e escolher a posição dele referente ao seu computador primário.

## Problemas Comuns com o Barrier

1.  **Mouse no computador secundário lento:** Como essa configuração depende da rede interna, caso ela esteja sobrecarregada oscilações e lentidões podem ocorrer, não tem muito jeito, ainda mais se estiver conectado no WiFi.
2.  **Computador primário parou de funcionar:** O seu computador primário pode mudar de endereço de IP, normalmente quando é reiniciado, então caso pare de funcionar, de uma olhada se o IP não mudou. Existe uma maneira de deixar o IP fixo para o seu computador na rede, mas isso ficará para um outro post.
3.  **Computador não consegue conectar:** Confira se o IP está correto, caso esteja, verifique se o seu firewall/anti-virus não está bloqueando as conexões.
