---
title: O que é NodeJS e para que serve?
description: NodeJS é um ambiente de execução Javascript. Que bacana, mas o que
  isso significa? Como funciona?
date: 2019-03-05T12:12:41.000Z
lang: pt
translationKey: afinal-o-que-e-nodejs
slug: afinal-o-que-e-nodejs
category: tecnologia
tags:
  - javascript
  - chrome
  - node
  - nodejs
  - npm
  - v8engine
wpId: 5673
canonicalPath: /tecnologia/afinal-o-que-e-nodejs/
needsReview: false
updated: 2020-08-16T14:52:44.000Z
---

Você provavelmente já deve ter escutado sobre **[NodeJS](https://nodejs.org)** e que ele de alguma maneira é relacionado com Javascript... Mas afinal, o que diabos é e faz o **NodeJS**?

**NodeJS é um ambiente de execução Javascript.** Que bacana, mas o que isso significa? Como funciona?

***Confira também: [](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/)*** *[Javascript - O que é, como funciona e para que server?](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/)*

Você provavelmente vai escutar desenvolvedores se referindo apenas como **Node** e não **NodeJS.**

O ambiente **node** possuí tudo o que se precisa para executar scripts em javascript, onde até então\* era possível apenas nos navegadores. Ele permite utilizar o javascript como linguagem backend e utiliza a *V8 javascript engine* desenvolvida pela Google para o Chrome, então se você utiliza esse navegador está utilizando a mesma máquina de execução javascript do **node**.  
*\* **NodeJS** já existe há 9 anos.*

## V8 Engine

"**V8** é o nome do [interpretador JavaScript](https://pt.wikipedia.org/wiki/Interpretador_JavaScript), também chamado de [máquina virtual](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual) Javascript *(ou engine)*, desenvolvido pela [Google](https://pt.wikipedia.org/wiki/Google) e utilizado em seu [navegador](https://pt.wikipedia.org/wiki/Navegador_\(inform%C3%A1tica\)) [Google Chrome](https://pt.wikipedia.org/wiki/Google_Chrome). V8 é uma ferramenta desenvolvida na linguagem [C++](https://pt.wikipedia.org/wiki/C%2B%2B) e distribuída no regime de [código aberto](https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto).  
A proposta do V8 é acelerar o desempenho de uma aplicação compilando o código Javascript para o formato nativo de máquina antes de executá-lo, permitindo que rode a velocidade de um código binário compilado" - [Wikipedia.](https://pt.wikipedia.org/wiki/V8_\(JavaScript\))

## Porque NodeJS?

"**NodeJS** usa um modelo orientado a evento, não blocante de "I/O" o que faz dele leve e eficiente"

I/O significa "input" e "output". Isso quer dizer que qualquer tarefa, seja uma chamada HTTP até leitura de um arquivo em disco.

Isso é muito importante porque o **node** é single threaded (consome apenas um processador), não é 100% verdade mas vamos simplificar e deixar quieto por enquanto, então se você tiver alguma função blocante todo seu código estará comprometido e provavelmente lento:

Imagina que você desenvolveu uma API Rest que devolve o conteúdo de um arquivo em disco do seu servidor, se você desenvolver de uma forma blocante, vamos supor que o seu arquivo seja pesado e demore 1 minuto para leitura, qualquer chamada seguinte terá que esperá a leitura da primeira chamada terminar pra que ela seja atendida e comece a vez da sua leitura. Utilizando o modelo não blocante o **node** "enfileira" essas chamadas, começa a processar elas em paralelo e responde assim que conseguir.

## [NPM](http://npmjs.com)

![](./2019-03-npm.png)

Outra parte maravilhosa do **node** está em sua comunidade: **NPM** é o gerenciador de de pacotes ("dependências") do **NodeJS**, aqui você vai encontrar as mais variadas soluções escritas pela comunidade. Provavelmente você vai se deparar em situações/problemas na hora de desenvolver que alguma boa alma já passou e publicou um pacote **NPM** para facilitar a sua vida. Todo esse ecossistema faz com que o desenvolvimento de aplicações em Node seja rápido e eficiente!

## Próximos passos

Bom, agora que você já sabe o que é **NodeJS** recomendo que de uma xeretada na documentação oficial ela é bem fácil, intuitiva e possuí bons tutoriais para escrever sua primeira aplicação em node: [https://nodejs.org](https://nodejs.org)
