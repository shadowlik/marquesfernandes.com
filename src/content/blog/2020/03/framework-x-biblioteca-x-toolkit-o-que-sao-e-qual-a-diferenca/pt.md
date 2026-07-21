---
title: Framework x Biblioteca x Toolkit - O que são e qual a diferença?
description: Você já se perguntou qual a diferença entre um Framework,
  Biblioteca e Toolkit? Existe muitas definições e isso pode confundir qualquer
  um.
date: 2020-03-05T21:26:51.000Z
lang: pt
translationKey: framework-x-biblioteca-x-toolkit-o-que-sao-e-qual-a-diferenca
slug: framework-x-biblioteca-x-toolkit-o-que-sao-e-qual-a-diferenca
category: tecnologia
tags:
  - framework
  - biblioteca
  - library
  - toolkit
wpId: 7550
cover: ./2020-03-maxresdefault.jpg
canonicalPath: /tecnologia/framework-x-biblioteca-x-toolkit-o-que-sao-e-qual-a-diferenca/
needsReview: false
updated: 2020-08-09T17:06:35.000Z
---

Você já se perguntou qual a diferença entre um Framework, Biblioteca e Toolkit? Existe muitas definições e isso pode confundir qualquer um. Embora não haja 100% um consenso entre os limites das definições de cada um, podemos tentar enquadrar e generalizar para que os iniciantes consigam ao menos entender o que quer dizer quando um tutorial ou curso usa cada termo.

## Framework

Um framework é uma estrutura genérica que fornece uma arquitetura padrão, um esqueleto com a qual podemos desenvolver um software específico. Essa abstração permite que padrões de design comuns sejam facilmente reutilizados, enquanto ainda permite que os detalhes de regra de negócio sejam deixados para os desenvolvedores. Reutilizar padrões comuns de design significa ter a estrutura geral para resolver tipos semelhantes de problemas. Por exemplo, o React fornece a funcionalidade e a estrutura para a programação de páginas web complexas criando um arquitetura e conjunto de funcionalidades padrões que permitem a criação consistente de projetos. Outro exemplo é são os famosos Frameworks Model-View-Controller (MVC), que separa em termos muito abstratos as três partes principais de uma aplicação web. Essas estrutura podem se manifestar como funções, classes e até organização de pastas que necessariamente precisam ser implementadas, como o método render() no React, que é o método necessário para a renderização de qualquer componente.

## Biblioteca

Uma biblioteca se refere a um código que fornece funções padrões que podem ser executadas dentro de seu próprio código para lidar com tarefas comuns. Por exemplo, uma biblioteca de matemática fornecerá funcionalidades para cálculos matemáticos comuns, como funções trigonométricas ou logarítmicas. As linguagens de programação geralmente têm bibliotecas para todos os tipos de tarefas, como processamento de dados, análise de texto, conexão com banco de dados, etc. Uma vez incluídas, as bibliotecas economizam o trabalho de escrever todas essas funções.

## Toolkit

Toolkit é uma definição pouca usada e um tanto ambígua, o que podemos concluir é que se refere a qualquer coleção de "ferramentas" (outro termo solto) que tenham um objetivo comum. *Dificilmente você vera termo sendo utilizado atualmente.*

## Qual a diferença?

Ta, descrevemos por cima o que é cada um, mas e qual a diferença deles na prática?

A diferença mais importante e, de fato, a diferença definidora entre uma biblioteca e uma estrutura é a [Inversão de Controle](https://pt.wikipedia.org/wiki/Invers%C3%A3o_de_controle).

Ta, mais o que isto significa? Bem, isso significa que quando você chama uma biblioteca, você está no controle, mas em um Framework, o controle é invertido: O Framework chama você. *Também chamado de Princípio de Hollywood: não ligue para nós, nós ligaremos para você.* Desenhei um esboço pra tentar exemplificar melhor essa diferença:

![Framework x Biblioteca x Toolkit - O que são e qual a diferença?](./2020-03-frameworkvsbibliotecavstoolkit.jpg)

Podemos concluir então que basicamente, todo o fluxo de controle já está no Framework e há apenas algumas "telas" em branco predefinidas que você pode preencher com seu código e com a regra de negócio de seu projeto, já uma biblioteca, por outro lado, é "apenas" uma coleção de funcionalidades que você pode chamar.

Lógico, essa interpretação não é a única existente e muitas pessoas podem discordar da definição apresentada, se você tem alguma ideia melhor de como definir ou exemplificar, por favor contribua para a comunidade e deixe seu comentário!
