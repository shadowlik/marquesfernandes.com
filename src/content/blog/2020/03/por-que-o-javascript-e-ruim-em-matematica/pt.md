---
title: Por que o Javascript é ruim em matemática?
description: No JavaScript, todos os números são números de ponto flutuante IEEE
  754. Devido à natureza binária de sua codificação, alguns números decimais não
  podem ser representados com precisão perfeita.
date: 2020-03-22T12:19:18.000Z
lang: pt
translationKey: por-que-o-javascript-e-ruim-em-matematica
slug: por-que-o-javascript-e-ruim-em-matematica
category: desenvolvimento
tags:
  - javascript
  - phyton
  - matematica
wpId: 7785
cover: ./2020-03-javascript_matematica.jpg
canonicalPath: /desenvolvimento/por-que-o-javascript-e-ruim-em-matematica/
needsReview: false
updated: 2020-03-22T12:31:26.000Z
---

Você provavelmente já escutou alguém falar que "[Javascript](http://marquesfernandes.com/javascript-o-que-e-como-funciona-e-para-que-serve/) é ruim com contas", e essa afirmação não está inteiramente errada. Por ignorância algumas pessoas chegam a comparar com outras linguagens, já cheguei a escutar "Usa Phyton que ela sabe fazer conta", talvez por ser uma linguagem com alta popularidade no campo de ciência de dados muita gente assume isso. Não defendendo o JS, nem criticando o Phyton, apenas que vocês entendam que muitas linguagens compartilham desse mesmo problema do Javascript.

## Observando o erro na prática

Vamos imaginar o seguinte cenário, eu quero me inscrever na academia e resolvi pagar trimestralmente, eu tenho disponível de dinheiro R$600,90 e o preço da mensalidade da academia é de R$200,30, teoricamente se você realizar essa conta você tem dinheiro suficiente disponível, mas quando tentamos replicar essa lógica para o código não é o que acontece:

Agora para provar meu ponto, vamos ver o mesmo exemplo em Phyton:

Ora, ora, quem diria não é mesmo?

## O problema: **Ponto flutuante** e Arrendondamento

Para tentar evitar confusão, como o conceito de ponto flutuante não é algo muito fácil de entender, vamos tentar explicar superficialmente o conceito, mas se você deseja ir a fundo e entender na raiz, eu recomendo a leitura desse [artigo em inglês](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html).

No JavaScript, todos os números são números de ponto flutuante [IEEE 754.](https://pt.wikipedia.org/wiki/IEEE_754) Devido à natureza binária de sua codificação, alguns números decimais não podem ser representados com precisão perfeita.

Para entender o que é um ponto flutuante, primeiro você precisa entender de que existem muitos tipos de números e maneiras de representar-los, pelos quais passaremos. Chamamos 1 de número inteiro - é um número inteiro sem valores fracionários.

½ é o que é a famosa fração. Isso implica que o número inteiro 1 está sendo dividido em 2. Esse conceito de frações é muito importante na derivação de pontos flutuantes.

0,5 é conhecido como um número decimal. No entanto, uma distinção muito importante precisa ser feita - 0,5 é apenas a representação decimal (base 10) da fração ½. É assim que ½ é representado quando escrito como um número base 10 - para este artigo, podemos chamar isso de notação de ponto. Chamamos 0,5 de representação finita porque os números na representação da fração são finitos - não há mais números após 5 em 0,5. Uma representação infinita seria, uma dizima periódica, por exemplo, 0,3333 … ao representar ⅓.

Existe outra maneira de representar números que não sejam números inteiros, frações ou notações decimais. Você já deve ter visto isso antes, são as notações científicas, algo assim: 6.022 x 10²³ e esse é o formato IEEE 754 adotado. Esse formato tem uma limitação de 64 bits, então quando o limite de armazenamento do número é atingido, você precisará arredondar o último dígito para cima ou para baixo.

Seu primeiro pensamento pode ser tentar arredondar para a segunda casa decimal. Infelizmente, o arredondamento interno do JavaScript funciona apenas para o número inteiro mais próximo.

## Como calcular com precisão usando o JavaScript

Agora que você entendeu o problema, embora o erro de precisão seja baixo, ele pode causar sérios problemas de lógica e consistência de dados, mas então como fazer com o que o JavaScript faça as contas corretamente e com precisão?

Existem algumas soluções propostas, algumas mais restritas indicam que a melhor maneira é multiplicar para números inteiros antes de fazer as contas:

const meuDinheiro = 600.90 \* 100;
const precoDaMensalidade = 200.30 \* 100;
const totalDeMensalidades = precoDaMensalidade \* 3;

// Outputs: true
console.log(meuDinheiro >= totalDeMensalidades);

// Outputs: 60090
console.log(totalDeMensalidades);

E outras soluções usam a transformação e calculo baseado em strings, o que pode ser útil mas vem com o custo de performance.

A melhor e mais fácil solução para lidar com contas e pontos flutuantes no javascript é utilizando algumas bibliotecas já testadas e aprovadas pela comunidade, como [dinerojs](https://dinerojs.com/) ou [mathjs](https://mathjs.org/).

## Mas então, todas as linguagens tem esse problema?

Entenda que outras linguagens, como C #, Java, Phyton e muitas outras, também usam o IEEE-754, portanto, não pense que você vai se safar desse problema simplesmente mudando a linguagem.

A diferença está em que outras linguagens geralmente têm outros tipos de armazenamento de números que você pode usar e que evitam esses problemas. Por exemplo, o C # tem um tipo nativo de decimal que deve ser usado para tarefas como cálculos monetários.

O que precisamos sempre entender é que cada aplicação tem um foco e cada linguagem tem suas vantagens, se você tem uma aplicação que não vai fazer contas extensivas e que o custo operacional não será impactante, vá com Javascript, mas se esse não for o caso, procure uma linguagem que supra as necessidades de seu projeto. Minha dica é: **não tenha amor a linguagem e nem a códigos e sim em solucionar problemas**.

**Referências:**

-   [https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/](https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/)
-   [https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a](https://hackernoon.com/understanding-the-problem-javascript-maths-2119d85dad2a)
-   [http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)
-   [https://frontstuff.io/how-to-handle-monetary-values-in-javascript](https://frontstuff.io/how-to-handle-monetary-values-in-javascript)
-   [https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ](https://gooroo.io/GoorooTHINK/Article/16306/Is-Math-Broken-in-JavaScript-Part-2/18867#.XneLOXVKjiQ)
