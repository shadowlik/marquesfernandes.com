---
title: O que é JavaScript, como funciona e para que serve?
description: JavaScript, ou JS para os íntimos, é uma das linguagens de
  programação mais populares e usadas no mundo. Ela é uma linguagem
  interpretada, de alto nível e multi-paradigma (orientado a objeto, funcional,
  imperativo e, protótipos). Com ela, é possível desenvolver desde páginas
  dinâmicas, aplicativos para smartphones, sistemas complexos e até jogos
  eletrônicos.
date: 2020-02-05T21:15:14.000Z
lang: pt
translationKey: javascript-o-que-e-como-funciona-e-para-que-serve
slug: javascript-o-que-e-como-funciona-e-para-que-serve
category: desenvolvimento
tags:
  - javascript
  - nodejs
  - v8engine
  - js
wpId: 7047
canonicalPath: /desenvolvimento/javascript-o-que-e-como-funciona-e-para-que-serve/
needsReview: false
updated: 2020-08-15T22:30:47.000Z
---

**JavaScript,** ou **JS** para os íntimos, é uma das linguagens de programação mais populares e usadas no mundo. Ela é uma linguagem interpretada, de alto nível e multi-paradigma (orientado a objeto, funcional, imperativo e, protótipos). Com ela, é possível desenvolver desde páginas dinâmicas, aplicativos para smartphones, sistemas complexos e até jogos eletrônicos.

Hoje vamos aprender mais sobre o que é JavaScript, como ele funciona, e onde podemos utilizar essa linguagem.

## Disclaimer: JavaScript não é Java

O nome é parecido e causa muita confusão mas, **JavaScript** NÃO é Java. Existe uma breve relação na criação da linguagem, mas ela para por ai. Explicarei melhor no próximo parágrafo.

## Breve história do JavaScript

A internet era muito diferente de como conhecemos hoje, houve um tempo em que as páginas não passavam de sites estáticos, chatos e sem vida. Em seus primórdios, a *World Wide Web* era apenas um grande aglomerado de páginas tabeladas escritas em HTML, com links e imagens chamativas. Com o passar dos anos, e a popularização da internet, as necessidades e funcionalidades foram ficando cada vez mais complicadas e exigiam uma forma mais avançada de criar páginas que interagissem melhor com os usuários.

[![Spacejam Site](/wp-content/uploads/2020/01/SPACE-1024x576.jpg)](https://www.spacejam.com/)

Um dos sites mais famosos dos anos 90 e um [exemplo ainda vivo](https://www.spacejam.com/) de como era a internet raiz.

O JavaScript foi criado por Brendan Eich em 1995 durante seu tempo na Netscape Communications (para os geração Z, Netscape foi um dos primeiros navegadores), que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation. Inicialmente chamada de Mocha, suas primeiras versões eram de uso exclusivo da Netscape e seu desenvolvimento foi inspirado nas linguagens Java, Scheme e Self. No decorrer da história, a Netscape acabou fazendo uma parceria com a Sun, desenvolvedora do Java, que queria usar a tecnologia da Netscape para fortalecer a sua recém criada linguagem (Java), começaram então a veicular a linguagem de script JavaScript como uma companheira do Java, sem notar a possível concorrência que as duas acabariam por ter.

Durante um tempo, a luta por espaço de outras tecnologias na web mantiveram o JavaScript um tanto "congelado" e com uma certa rejeição de alguns desenvolvedores. Mas por volta de 2000, [Douglas Crockford](https://pt.wikipedia.org/wiki/Douglas_Crockford), um dos grandes responsáveis pela popularização do formato JSON e consequentemente o redescobrimento do JavaScript, então em pouco tempo a linguagem ganhou tração e dominou o mundo da internet graças ao trabalho de desenvolvedores independentes e de uma crescente comunidade. O JavaScript se torna cada vez mais uma linguagem robusta e com multi-aplicações, praticamente um Bombril com suas mil e uma utilidades.

## Como funciona?

> Computadores não entendem JavaScript, os ambientes sim.

JavaScript é uma linguagem interpretada e não compilada para código de máquina, ou seja, o JavaScript não vira um monte de 1 e 0, por isso "computadores não entendem javascript". Para isso acontecer a linguagem precisa de um motor *(engine)* e de um ambiente de execução (*runtime environment*) para que ela possa funcionar.

Uma motor (*engine*) de JavaScript é um programa "escrito em C++" (nem todas as engines são, apenas para exemplo), que é uma linguagem compilada que o computador consegue entender e executar, então o motor passa por todo o código JavaScript e transforma em algo que o processador do computador consegue entender e executar - código de máquina. Esse motor roda dentro de um contexto, que compõe o nosso *runtime environment*, como no caso do navegador Chrome e do NodeJS, ambos usam a mesma engine mas possuem alguns contextos e funcionalidades diferentes. Temos alguns motores famosos, o já mencionado [V8](https://v8.dev/) roda no Chrome, Opera e Node e foi desenvolvido pela Google, já o Firefox embarca a engine [SpiderMonkey](https://developer.mozilla.org/pt-BR/docs/Mozilla/Projects/SpiderMonkey) desenvolvida pela Mozilla.

E todo esse contexto torna o JavaScript uma linguagem de alto nível, o motor é responsável por toda a abstração e problema de se comunicar com a máquina, fazendo com que o desenvolvimento seja mais fácil e otimizado.

## ECMAScript

O JavScript segue as especificações definidas no [ECMAScript](https://www.ecma-international.org/publications/standards/Ecma-262.htm), uma especificação de linguagem de programação baseada em scripts, padronizada e mantida pela [Ecma International](https://pt.wikipedia.org/wiki/Ecma_International). Ela foi criada para padronizar as linguagens de script e ajudar a organizar as várias implementações independentes da linguagem.

## Para que serve?

O JavaScript é uma linguagem muito versátil, com uma comunidade que cresce a cada dia, e suas aplicações também, o que a torna uma escolha popular para empresas com equipe reduzida: JavaScript, uma linguagem para governar tudo (one language to rule them all). Você provavelmente vai escutar [muitas ~verdades~ brincadeiras](https://dayssincelastjavascriptframework.com/) de que a cada 5 minutos nasce uma biblioteca feita em JavaScript nova...

### JavaScript no Navegador

Como aprendemos anteriormente, essa linguagem nasceu para dar vida ao navegador e segue firme e forte em seu objetivo. Antigamente o principal e praticamente único framework famoso da internet era o [jQuery](https://jquery.com/) (na realidade atualmente mais de [70 milhões de sites](https://trends.builtwith.com/websitelist/jQuery) ainda rodam com jQuery), mas com o avanço das engines e da capacidade de processamento dos computadores e celulares, novos frameworks, mais robustos e complexos surgiram para melhorar a experiência do usuário.

Alguns dos frameworks mais populares atualmente:

-   [ReactJS](https://pt-br.reactjs.org/) - Desenvolvido e mantido pelo Facebook, e aberto para a comunidade.
-   [VueJS](https://vuejs.org/) - Desenvolvido e mantido por [Evan You](https://twitter.com/youyuxi) (ex Google), e aberto para a comunidade.
-   [Angular](https://angular.io/) - Desenvolvido e mantido pelo Google, e aberto para a comunidade.

### JavaScript no Backend com [NodeJS](http://marquesfernandes.com/afinal-o-que-e-nodejs/)

Em 2009, o [Node.js](http://nodejs.org/) foi desenvolvido por Ryan Dahl em torno do V8; Essencialmente como uma forma de rodar programas JavaScript fora do contexto de um navegador. Confira o artigo [Afinal o que é NodeJS](http://marquesfernandes.com/afinal-o-que-e-nodejs/), onde explico melhor a história do NodeJS e como ele funciona.

No exemplo abaixo, temos um script simples que consome um recurso da internet que contém [todos os dados de Pokemons](https://pokeapi.co/) e retorna as informações do Pikachu:

### JavaScript em Desenvolvimento Mobile

O JavaScript possuí boas bibliotecas para desenvolvimento mobile, virando uma boa alternativa ao desenvolvimento nativo. Com apenas uma base de código, conseguimos desenvolver páginas na web, aplicativos iOS e Android. Alguns aplicativos famosos como Facebook, Instagram e Airbnb são desenvolvidos com JS. Veja alguns dos frameworks mais famosos:

-   [React Native](https://facebook.github.io/react-native/)
-   [PhoneGap](https://phonegap.com/)/[Cordova](https://cordova.apache.org/)
-   [NativeScript](https://www.nativescript.org/)
-   [Ionic](https://ionicframework.com/)

No exemplo abaixo temos um aplicativo de calculadora construído com React Native:

See the Pen <a href='https://codepen.io/necolas/pen/KrBQmd'>React Native Calculator</a> by Nicolas Gallagher (<a href='https://codepen.io/necolas'>@necolas</a>) on <a href='https://codepen.io'>CodePen</a>.

### JavaScript no [IoT](http://marquesfernandes.com/internet-das-coisas/)

Sua portabilidade ampla permite também a programação de [dispositivos embarcados](http://marquesfernandes.com/internet-das-coisas/). Bibliotecas como a [Johnny-Five](http://johnny-five.io/) permitem que você desenvolva para placas [Arduino](http://johnny-five.io/#arduino), [Tessel 2](http://johnny-five.io/#tessel), [Raspberry Pi](http://johnny-five.io/#raspberrypi), [Intel Edison](http://johnny-five.io/#edison), [Particle Photon](http://johnny-five.io/#spark),  [e muito mais...](http://johnny-five.io/platform-support/) usando JavaScript, a linguagem é compilada para a linguagem nativa de cada dispositivo.

![](/wp-content/uploads/2020/02/led-scene-0.gif)

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});

### JavaScript para Desenvolvimento de Jogos

E finalmente, graças aos grandes avanços em melhorias na performance das engines  e as novas funcionalidades embarcadas nos navegadores, podemos criar jogos que rodam diretamente no navegador:

See the Pen <a href='https://codepen.io/davisonpro/pen/pGbxmP'>JavaScript Game</a> by Davison Pro (<a href='https://codepen.io/davisonpro'>@davisonpro</a>) on <a href='https://codepen.io'>CodePen</a>.

Mais exemplos de jogos feitos com JavaScript podem ser encontrados nesse [link](https://developer.mozilla.org/en-US/docs/Games/Examples).

## Onde aprender a programar com JavaScript?

Se você se animou com a linguagem e com todas as suas aplicações, tenho uma boa notícia para você! Existem diversos e bons materiais na internet, você pode também encontrar bons cursos na Udemy.

[![Career Category (Portuguese)728x90](https://ad.linksynergy.com/fs-bin/show?id=FPuxaVz3TuY&bids=507388.1523&subid=0&type=4&gridnum=16)](https://click.linksynergy.com/fs-bin/click?id=FPuxaVz3TuY&offerid=507388.1523&subid=0&type=4)
