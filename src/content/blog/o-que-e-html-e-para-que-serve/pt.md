---
title: O que é HTML e para que serve?
description: HTML é um acrônimo para HyperText Markup Language (linguagem de
  marcação de hipertexto). É a linguagem de marcação padrão para a criação de
  páginas na web.
date: 2020-05-05T21:55:53.000Z
lang: pt
translationKey: o-que-e-html-e-para-que-serve
slug: o-que-e-html-e-para-que-serve
category: tecnologia
tags:
  - html
  - html5
wpId: 8115
canonicalPath: /tecnologia/o-que-e-html-e-para-que-serve/
needsReview: false
updated: 2020-09-08T12:05:11.000Z
---

**HTML** é um acrônimo para **HyperText Markup Language** (linguagem de marcação de hipertexto). É a linguagem de marcação padrão para a criação de páginas na web.

**HTML** não é uma linguagem de programação, embora muita gente confunda, é uma linguagem de marcação que define estruturalmente um conteúdo. O **HTML** consiste em uma série de elementos pré-definidos, chamadas de tags, que são utilizadas para separar, organizar e exibir o conteúdo conforme programado. As tags permitem criar um hiperlink; uma imagem; um título; aumentar ou diminuir a fonte e muito mais.

## Breve história do HTML

O HTML foi criado originalmente pelo físico britânico [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee), também criador do procolo **[HTTP](http://marquesfernandes.com/o-que-e-http/)**. Na época a linguagem ainda não era uma especificação e sim uma coleção de ferramentas para resolver um problema de pessoal de Tim: a comunicação e compartilhamento de pesquisas entre ele e seus colegas.

As primeiras versões do HTML foram definidas com regras sintáticas flexíveis e com o passar do tempo, a utilização do HTML aumentou, sendo necessário tornar a sintaxe mais definida e padronizada.

As primeiras especificações formais da linguagem surgiram na década de 1990, inspiradas nas propostas originais de Tim Berners-Lee em criar uma linguagem baseada em [SGML](https://pt.wikipedia.org/wiki/SGML) para a Internet. A primeira publicação foi esboçada por Tim Berners-Lee e Dan Connolly, tendo sua primeira versão publicada em 1993, dois anos depois, em 1995 a versão 2.0 desenvolvida por um grupo de trabalho da *[Internet Engineering Task](https://pt.wikipedia.org/wiki/Internet_Engineering_Task_Force)* foi publicada. Desde 1996, as especificações do HTML são mantidas pela [World Wide Web Consortium](https://pt.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) e em [2000](https://pt.wikipedia.org/wiki/2000) a linguagem tornou-se uma norma internacional ([ISO](https://pt.wikipedia.org/wiki/International_Organization_for_Standardization)/[IEC](https://pt.wikipedia.org/wiki/International_Electrotechnical_Commission) 15445:2000). A recomendação HTML 4.01 foi publicada no final de 1999 pelo W3C e a versão HTML5, a qual utilizamos hoje, foi publicada em 2008.

| Versão | Ano |
| --- | --- |
| HTML | 1991 |
| HTML 2.0 | 1995 |
| HTML 3.2 | 1997 |
| HTML 4.01 | 1999 |
| XHTML | 2000 |
| HTML5 | 2014 |
| HTML5.1 | 2016 e 2017 (2ª ed.) |
| HTML5.2 | 2017 |

*Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/HTML#Hist%C3%B3ria)*

## Estrutura do HTML

Abaixo podemos ver uma estrutura básica do **HTML5**:

<!doctype html>

<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Título da Página</title>
</head>

<body>
  <h1>Título do Texto</h1>
  <p>Parágrafo</p>
  <img src="examplo\_de\_imagem.jpeg" />
</body>
</html>

### Tags HTML

Como falamos anteriormente a estrutura do HTML é baseada em tags pré-definidas. Você pode criar, embora não muito comum, suas próprias tags HTML. As tags são basicamente divididas em: **nível de bloco (block-level)** e **em linha (inline)**.

1.  Tags do tipo **block-level** costumam ocupar todo espaço disponível e "pulam" uma linha. Títulos (H1, H2, ...) são um bom exemplo de tags block.
2.  Tags do tipo **inline** apenas ocupam espaço conforme o necessário e normalmente não começam uma nova linha no documento. Elas servem normalmente para enfatizar algum conteúdo dentro do documento. Como as tags de link (<a><a/>) e de negrito (<strong><strong/>).

#### Tags Block-level

Existem três tags no nível do bloco que todo documento HTML precisa ter: **<html>**, **<head>**, e **<body>**.

-   A tag **<html></html>** é o elemento de nível mais alto que envolve todas as páginas HTML.
-   A tag **<head></head>** contém as informações meta, como o título da página, descrição, etc.
-   A tag **<body></body>** inclui todo o conteúdo que aparece na página.

<html>
  <head>
    <!-- INFORMAÇÕES META -->  
  </head>
  <body>
    <!-- CONTEÚDO DA PÁGINA -->
  </body>
</html>

-   As tags de título têm 6 níveis. Elas variam de ***<h1></h1>*** a ***<h6></h6>***, onde h1 é o título de nível mais alto, normalmente o título da página, e h6 é o de nível mais baixo.
-   Os parágrafos são delimitados por ***<p></p>*** .
-   Divisões são seções de conteúdo maiores que normalmente contêm vários títulos, parágrafos e outros elementos menores. Podemos marcá-los usando a tag ***<div></div>*** ou **<section></section>**.
-   Existem também as tags para listas, elas podem ser ordenadas **<ol></ol>** ou não ordenadas **<ul></ul>**. Os itens individuais de uma lista devem estar entre a tag **<li></li>**. Por exemplo, é assim que uma lista básica não ordenada se parece em HTML:

<ul>
    <li>Item da Lista 1</li>
    <li>Item da Lista 2</li>
    <li>Item da Lista 3</li>
</ul>

#### Tags inline

Muitas tags inline são usadas para formatar o texto. Por exemplo, uma tag **<strong></strong>**renderizaria um elemento em negrito, enquanto as tags **<i></i>** mostrariam em itálico.

Os hiperlinks também são elementos inline que exigem tags e atributos `href` para indicar o destino do link:

<a href="http://marquesfernandes.com.br">Link para meu blog!</a>

Imagens também são elementos inline. Você pode adicionar um usando sem nenhuma marca de fechamento. Mas você também precisará usar o atributo `src` para especificar o caminho da imagem, por exemplo:

<img src="/images/example.jpg" alt="Example image">

## HTML5, na prática!

Agora que aprendemos sobre o que é e como funciona o HTML, podemos pôr em prática o uso de algumas tags para criar uma página web básica:

See the Pen [O que é HTML?](https://codepen.io/shadowlik/pen/YzyYmWb) by Henrique Marques Fernandes ([@shadowlik](https://codepen.io/shadowlik)) on [CodePen](https://codepen.io).
