---
title: 'Estou tentando reencontrar a alegria de programar na era da IA'
description: 'A IA deixou as ideias mais fáceis de construir, mas também mudou uma parte da programação de que eu gostava. É isso que estou tentando recuperar agora.'
date: 2026-08-11T00:00:00.000Z
lang: pt
translationKey: finding-joy-in-coding-in-the-ai-era
slug: tentando-reencontrar-a-alegria-de-programar-na-era-da-ia
category: desenvolvimento
tags:
  - inteligência artificial
  - desenvolvimento de software
  - arquitetura de software
  - produto
cover: ./cover.png
coverAlt: 'Desenvolvedor fazendo anotações ao lado de um notebook em uma mesa de trabalho acolhedora e usada no dia a dia'
draft: true
needsReview: true
---

Eu lembro do dia exato em que olhei para o meu trabalho e fiquei com medo: 10 de janeiro.

Eu já usava IA havia bem mais tempo. A progressão provavelmente foi parecida com a de muitos desenvolvedores: autocomplete na IDE, depois conversar com um assistente dentro do VS Code, até chegar a fluxos mais autônomos no terminal.

Mas, naquele dia, caiu a ficha. A forma como eu escrevia software havia quase 15 anos estava mudando em questão de meses. O fluxo de trabalho que eu conhecia estava desaparecendo, e isso me assustou.

Esse medo é a parte que explorei em [A IA vai roubar meu emprego, mas primeiro preciso revisar o PR dela](https://marquesfernandes.com/a-ia-vai-roubar-meu-emprego-mas-primeiro-preciso-revisar-o-pr-dela/). Minha primeira reação foi quase apocalíptica. Eu tinha medo de ficar obsoleto. Medo de que as habilidades que construí não fossem mais suficientes. Medo de que o trabalho que eu estava acostumado a fazer simplesmente tivesse acabado.

## A parte da programação de que sinto falta

Alguns meses depois, eu ainda gosto de programar. Mas percebi que uma parte da paixão diminuiu.

Li posts de blog e threads longas no Reddit de pessoas que parecem sentir algo parecido. Existe uma alegria específica em sentar diante de um problema, entender o que precisa acontecer, escrever o código você mesmo, conhecer tanto os detalhes de baixo nível quanto o desenho geral e, no fim, ver aquilo funcionar.

Essa alegria parece mais fácil de perder quando boa parte da implementação chega depois de alguns prompts. Pelo menos pra mim.

Algumas pessoas dizem que programar nunca foi o ponto, que desenvolvedores são solucionadores de problemas e sempre serão. Concordo com uma parte disso. Eu adoro resolver problemas, seja consertando algo online ou offline.

Mas não acho honesto fingir que escrever código nunca foi parte do apelo. Programar era um diferencial. Uma habilidade construída com muito esforço em um mercado competitivo e bem remunerado. Ainda sinto falta da forma como escrevíamos código, aprendíamos e destravávamos um problema, uma peça de cada vez.

## A parte de que eu realmente gosto

Também existe algo realmente incrível nessa nova realidade: as ideias podem virar algo real muito mais rápido.

Eu sempre gostei de projetos paralelos e de soluções DIY, incluindo construir coisas de que provavelmente nem precisava só pra não pagar por uma ferramenta. Agora consigo fazer uma prova de conceito em algumas horas, testar e decidir se vale investir mais tempo. Isso é incrível.

A IA não tirou a satisfação de construir. Ela mudou onde essa satisfação aparece. A tensão é que eu também sinto falta das partes mais lentas.

## Ainda não tenho uma resposta

Este não é um guia com uma resposta redonda no final. É mais um pensamento em andamento.

Eu não controlo essa mudança, e ninguém controla. Então estou tentando aceitar que o fluxo de trabalho antigo acabou, me adaptar ao que existe agora e encontrar novos motivos para gostar do trabalho.

Pra mim, isso significou ir além de aprender a ferramenta, o modelo, a skill ou o repositório de IA da vez. Tenho tentado construir meu próprio harness e meu fluxo de trabalho em cima dos projetos em que trabalho. Isso é divertido.

Não quero usar a ferramenta padrão no automático nem assumir que um framework como o Superpowers é a única forma de trabalhar sem entender as ideias por trás dele. Quero saber por que um fluxo ajuda, onde ele falha e como mudá-lo quando o projeto precisa de algo diferente.

## Continuar perto do trabalho

Também comecei a prestar ainda mais atenção nos pull requests antes de eles serem abertos. Acompanho as mudanças enquanto elas acontecem, usando Lazygit e VS Code, para entender o que está sendo entregue, mudar de direção quando necessário e perceber onde o meu harness precisa de ajuste.

Isso devolve uma parte da autonomia. O trabalho não é só aceitar um resultado gerado. É decidir o que deveria acontecer, conferir se aconteceu e assumir a responsabilidade pelos tradeoffs.

![Um desenvolvedor revisando um pull request absurdamente longo em papel enquanto um pequeno robô de lata observa](./pr-review.png)

## Arquitetura ainda é uma conversa

Existe outra parte do trabalho que passei a apreciar mais: tomar decisões de alto nível antes de alguém começar a gerar código.

Isso deve acontecer de forma síncrona ou passar por uma fila? O que acontece se o job rodar duas vezes? Quanto atraso o usuário tolera? Precisamos de consistência imediata ou consistência eventual é suficiente aqui? Como isso se comporta quando o caminho feliz deixa de ser o único caminho?

A IA consegue entregar uma implementação bastante convincente para qualquer uma dessas opções. Mas ela não consegue decidir qual tradeoff faz sentido sem o contexto. Uma fila não é traço de personalidade. Às vezes ela é a escolha certa. Às vezes você só está adicionando outra peça móvel porque o problema parecia calmo demais.

Entender esses tradeoffs ainda é muito satisfatório pra mim. É quando o trabalho deixa de ser produzir código o mais rápido possível e passa a ser fazer um sistema se comportar bem quando pessoas reais, dados reais e erros reais aparecem.

## A parte de produto importa mais agora

A maior mudança pra mim foi passar mais tempo na parte de produto.

Estou tentando escrever especificações, PRDs, TDDs, ou o nome que isso tiver onde você trabalha. Estou pensando com mais intenção no problema, na solução e no impacto dela. Estou pensando no fluxo do usuário, fazendo mockups e desenhando diagramas.

Escrevi mais sobre essa mudança quando [parei de construir funcionalidades aleatórias e encontrei uma direção de produto](https://marquesfernandes.com/1-como-parei-de-construir-funcionalidades-aleatorias-e-encontrei-uma-direcao-de-produto/).

A especificação, o fluxo do usuário e a arquitetura de alto nível não são caixinhas separadas para marcar. Eles moldam uns aos outros. Um fluxo que precisa de feedback imediato pode mudar a decisão entre algo síncrono e uma fila. Uma limitação técnica pode mudar o que o usuário deveria ver quando algo falha. Uma decisão de produto pode tornar uma arquitetura elegante completamente desnecessária.

É por isso que estou tentando descrever essas decisões com clareza antes de sair correndo para um agente e pedir que ele escreva o código. Um agente consegue produzir uma implementação muito plausível, mas não consegue recuperar de forma confiável os detalhes que nunca entraram no prompt. E são esses detalhes, juntos, que fazem uma entrega parecer completa, e não apenas terminada.

Essas eram partes do trabalho que eu muitas vezes achava chatas antes da IA. Agora estão mais fáceis de explorar, e esse é um ponto claramente a favor da era da IA.

Talvez seja aí que uma parte da alegria vá parar. Menos alegria em produzir cada linha à mão e mais em entender bem o suficiente o problema para tomar boas decisões sobre o que será construído.

Ainda estou entendendo isso. Mas não quero perder a sensação que me fez amar esse trabalho lá no começo. Quero encontrá-la de novo, mesmo que ela tenha outra cara agora.
