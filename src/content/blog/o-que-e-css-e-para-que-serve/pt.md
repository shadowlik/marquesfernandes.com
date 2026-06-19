---
title: O que é CSS e para que serve?
description: Cascading Style Sheets (CSS) é uma linguagem de design feita para
  simplificar a apresentação e customização de páginas na internet (HTML).
date: 2020-07-08T21:10:21.000Z
lang: pt
translationKey: o-que-e-css-e-para-que-serve
slug: o-que-e-css-e-para-que-serve
category: desenvolvimento
tags:
  - frontend
  - html
  - html5
  - css
  - css3
wpId: 8119
cover: ./2020-04-pankaj-patel-6JVlSdgMacE-unsplash.jpg
canonicalPath: /desenvolvimento/o-que-e-css-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:05:08.000Z
---

**C**ascading **S**tyle **S**heets (**CSS**) é uma linguagem de design feita para simplificar a apresentação e customização de páginas na internet (**[HTML](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/)**).

Se você já sabe [o que é HTML](http://marquesfernandes.com/o-que-e-html-e-para-que-serve/), entendeu que ele é o esqueleto de todas as páginas na internet, podemos pensar no CSS como a pele ou até mesmo a roupa, ele é responsável por aplicar todas as customizações visuais como, tamanho e cor da fonte, cor de fundo, e muito mais. As regras presentes para customização são definidas em cascada, hierarquicamente, para cada tag e tags filhas. Por exemplo:

body {
  background-color: black;
  color: white;
  font-size: 10px;
}
body h1 {
  color: red;
}

A primeira regra acima aplica uma customização na página, deixando sua cor de fundo preta, a cor do texto branco no tamanho de 10px, já na segunda informamos que todas as tags do tipo h1 dentro da tag body terão a cor da fonte em vermelho.

## Sintaxe do CSS

Existe regras pré-definidas para aplicar as regras em seu documento HTML, elas são separadas por **seletor** e **declaração**.

**.add-red-color** **{ color: red; }**

Um seletor é um conjunto de propriedade (também pré-definida) e valores. Os seletores podem se aplicar ao seguinte:

-   Em todos os [elementos](https://en.wikipedia.org/wiki/HTML_element) de um tipo específico por sua tag, por exemplo, h1.
-   Elementos especificados por algum atributo, em particular:
    -   *id*: Um identificador único dentro do documento (`<h1 id="**identificador**"></h1>`)
    -   *classe*: Um identificador que pode existir em vários elementos (`<h1 class="**classe**"></h1>`)

Os seletores por classe e id diferenciam maiúsculas de minúsculas, devem começar com letras e podem incluir caracteres alfanuméricos, hifens e sublinhados. Uma classe pode ser aplicada a qualquer número de instâncias de qualquer elemento. Um ID pode ser aplicado apenas a um único elemento.

Existem também as *pseudo-classes*, elas são usadas nos seletores CSS para permitir a formatação com base em informações ou interações que não estão explicitamente contidas no HTML. Um exemplo de uma pseudo-classe muito usada é a que identifica o conteúdo somente quando o usuário passa o mouse em cima do elemento, normalmente essa classe é utilizada para informar e mudar a cor, por exemplo, um [link](#). As pseudo classes são separadas e identificadas por `:` ou `::`.

## Lista de Seletores do CSS

| Seletor | Descrição |
| --- | --- |
| `**E**` | Um elemento do tipo E |
| `**E**:link` | Um elemento E é a âncora de origem de um hiperlink cujo destino ainda não foi visitado (: link) ou já foi visitado (: visited) |
| `**E**:active` | Um elemento E durante determinadas ações do usuário |
| `**E**::first-line` | A primeira linha formatada de um elemento E |
| `**E**::first-letter` | A primeira letra de um elemento E |
| `.**c**` | Todos os elementos com class = "c" |
| `#**meuid**` | O elemento com id = "meuid" |
| `**E**.**aviso**` | Um elemento E cuja classe é "aviso" |
| `**E**#**meuid**` | um elemento E com ID igual a "meuid" |
| `.**c**#**meuid**` | o elemento com class = "c" e ID igual a "meuid" |
| `**E** **F**` | Um elemento F que está dentro de um elemento E |
| `*` | Qualquer elemento |
| `**E**[**foo**]` | Um elemento E com um atributo "foo" |
| `**E**[**foo**="bar"]` | Um elemento E cujo valor do atributo "foo" é exatamente igual a "bar" |
| `**E**[**foo**~="bar"]` | Um elemento E cujo valor de atributo "foo" é uma lista de valores separados por espaços em branco, um dos quais é exatamente igual a "bar" |
| `**E**[**foo**|="en"]` | Um elemento E cujo atributo "foo" possui uma lista de valores separados por hífen começando (da esquerda) com "en" |
| `**E**:first-child` | Um elemento E, o primeiro elemento encontrado dentro da tag pai |
| `**E**:lang(**fr**)` | Um elemento do tipo E na linguagem "fr" |
| `**E**::before` | Conteúdo gerado antes do conteúdo de um elemento E |
| `**E**::after` | Conteúdo gerado após o conteúdo de um elemento E |
| `**E** > **F**` | Um filho do elemento F de um elemento E |
| `**E** + **F**` | Um elemento F imediatamente precedido por um elemento E |
| `**E**[**foo**^="bar"]` | Um elemento E cujo valor do atributo "foo" começa exatamente com a string "bar" |
| `**E**[**foo**$="bar"]` | Um elemento E cujo valor do atributo "foo" termina exatamente com a string "bar" |
| `**E**[**foo***="bar"]` | Um elemento E cujo valor do atributo "foo" contém a "barra" da subcadeia |
| `**E**:root` | Um elemento E, raiz do documento |
| `**E**:nth-child(**n**)` | Um elemento E, o nono filho de seu pai |
| `**E**:nth-last-child(**n**)` | Um elemento E, o nono filho de seu pai, contando desde o último |
| `**E**:nth-of-type(**n**)` | Um elemento E, o n-ésimo irmão de seu tipo |
| `**E**:nth-last-of-type(**n**)` | Um elemento E, o n-ésimo irmão de seu tipo, contando desde o último |
| `**E**:last-child` | Um elemento E, último filho de seu pai |
| `**E**:first-of-type` | Um elemento E, primeiro irmão desse tipo |
| `**E**:last-of-type` | Um elemento E, último irmão desse tipo |
| `**E**:only-child` | Um elemento E, único filho de seu pai |
| `**E**:only-of-type` | Um elemento E, apenas irmão desse tipo |
| `**E**:empty` | Um elemento E que não possui filhos (incluindo nós de texto) |
| `**E**:target` | Um elemento E sendo o alvo do URI de referência |
| `**E**:enabled` | Um elemento de interface do usuário E que está ativado |
| `**E**:disabled` | Um elemento de interface do usuário E que está desativado |
| `**E**:checked` | Um elemento da interface do usuário E marcado (por exemplo, um botão de opção ou uma caixa de seleção) |
| `**E**:not(**s**)` | Um elemento E que não corresponde ao seletor simples s |
| `**E** ~ **F**` | Um elemento F precedido (vizinho) por um elemento E |

## Como Usar o CSS

Existem duas maneiras de usar o CSS dentro do seu arquivo HTML.

Você pode utilizar as regras diretamente nas tags HTML:

<h1 **style="color: red;"**\> Texto com a Cor Vermelha </h1>

Você pode criar uma tag de estilo (<style>) no seu documento e centralizar todas as regras:

**<style>**
h1 {
    color: red;
}
**</style>**

Você pode adicionar um arquivo CSS externo:

<**link** href="caminho/para/arquivo.css" rel="stylesheet" type="text/css">

Onde o arquivo conteria todas as regras CSS centralizadas:

h1 {
color: red;
}

## Versões do CSS

O CSS foi proposto pela primeira vez por Håkon Wium Lie em 10 de outubro de 1994. Diversas outras linguagens similares foram propostas na mesma época, e após algumas discussões foi lançando a primeira Recomendação CSS do W3C (CSS1) em 1996. Atualmente a linguagem ainda é mantida pela organização W3C, responsável por cuidar dos padrões e dos lançamentos das novas versões.

CSS 1

A primeira especificação CSS a se tornar uma recomendação oficial do W3C é o nível 1 do CSS, publicado em 17 de dezembro de 1996.

-   Propriedades de texto, como fonte e ênfase (**negrito**, *itálico*, ~sublinhado~, ...)
-   Cor do texto, planos de fundo e outros elementos
-   Atributos de texto, como espaçamento entre palavras, letras e linhas de texto
-   Alinhamento de texto, imagens, tabelas e outros elementos
-   Margem, borda, preenchimento e posicionamento para a maioria dos elementos de layout
-   Identificação única e classificação genérica de grupos de atributos (Seletores)

*O W3C não mantém mais a Recomendação CSS 1.*

### CSS 2

A especificação de nível 2 do CSS foi desenvolvida pelo W3C e publicada como recomendação em maio de 1998. Um superconjunto do CSS 1, CSS 2 inclui vários novos recursos, como posicionamento absoluto, relativo e fixo de elementos e índice z (z-index para posicionamento relativo a sobreposição dos elementos), o conceito de tipos de mídia, texto bidirecional e novas propriedades de fonte, como sombras.

*O W3C não mantém mais a recomendação do CSS 2.*

### CSS 3

Ao contrário do CSS 2, que é uma grande especificação única que define vários recursos, o CSS 3 é dividido em vários documentos separados chamados "módulos". Cada módulo adiciona novos recursos ou estende os recursos definidos no CSS 2, preservando a compatibilidade com versões anteriores. O trabalho no nível 3 do CSS começou na época da publicação da recomendação original do CSS 2. Os primeiros rascunhos do CSS 3 foram publicados em junho de 1999.

Resumo das principais especificações do módulo:

-   Título da especificação do módulo Status Data
-   css3-background Módulo CSS Backgrounds and Borders Candidato nível 3 Rec. Out 2017
-   css3-box CSS basic box model Rascunho de trabalho julho de 2018
-   css-cascade-3 CSS em cascata e herança Nível 3 Rec. Maio 2016
-   css3-color CSS Color Module Recomendação de nível 3 jun 2018
-   Rascunho de trabalho do módulo de conteúdo gerado e substituído por CSS3 css3-content Jun 2016
-   css-fonts-3 Módulo de fontes CSS Recomendação de nível 3 set 2018
-   css3-gcpm Conteúdo gerado por CSS para o módulo de mídia paginada Rascunho de trabalho maio de 2014
-   css3-layout Módulo de layout de modelo CSS Nota Mar 2015
-   css3-mediaqueries Recomendação sobre consultas de mídia Junho de 2012
-   mediaqueries-4 Consultas de mídia nível 4 Rec. Set 2017
-   Rascunho de trabalho do nível 1 do módulo de layout de várias colunas do css3-multicol Maio de 2018
-   Rascunho de trabalho do nível 3 do módulo de mídia paginada CSS de 3 páginas
-   selectors-3 Seletores Nível 3 Recomendação Nov 2018
-   selectors-4 Seletores Nível 4 Working Draft Feb 2018
-   css3-ui Recomendação básica de nível 3 do módulo de interface do usuário do CSS (CSS3 UI) jun 2018

**Referências:  
**[https://www.w3schools.com/whatis/whatis\_css.asp](https://www.w3schools.com/whatis/whatis_css.asp)  
[http://www.simplehtmlguide.com/whatiscss.php](http://www.simplehtmlguide.com/whatiscss.php)  
[https://pt.wikipedia.org/wiki/Cascading\_Style\_Sheets](https://pt.wikipedia.org/wiki/Cascading_Style_Sheets)
