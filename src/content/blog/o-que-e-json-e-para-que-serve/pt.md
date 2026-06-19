---
title: O que é JSON e para que serve?
description: JSON, é um acrônimo de JavaScript Object Notation, um formato de
  dados de transferência leve e compacto, de padrão aberto e independente
  utilizado para troca de dados entre sistemas. Embora o nome possa ser
  sugestivo, o JSON não é só utilizado pela linguagem JavaScript, hoje ele vem
  se tornando o formato padrão de comunicação em aplicações Web.
date: 2020-03-06T17:27:59.000Z
lang: pt
translationKey: o-que-e-json-e-para-que-serve
slug: o-que-e-json-e-para-que-serve
category: tecnologia
tags:
  - javascript
  - json
  - rest
wpId: 7561
canonicalPath: /tecnologia/o-que-e-json-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:06:35.000Z
---

Se você escutou recentemente o termo JSON e não faz ideia do que é, não se preocupe, não é uma doença e é muito simples de entender.

JSON, é um acrônimo de *JavaScript Object Notation*, um formato de dados de transferência leve e compacto, de padrão aberto e independente utilizado para troca de dados entre sistemas. Embora o nome possa ser sugestivo, o JSON não é só utilizado pela linguagem JavaScript, hoje ele vem se tornando o formato padrão de comunicação em aplicações Web.

Simplificando em poucas palavras, o formato JSON fornece uma coleção de dados legível por humanos que podem ser acessados de uma maneira lógica e consistente.

## Breve História do JSON

O JSON surgiu da necessidade de um protocolo de comunicação entre o servidor e o navegador em tempo real, [sem estado](http://marquesfernandes.com/json-web-token-jwt-o-que-e-para-que-serve-como-funciona/) e sem o uso de plug-ins ou softwares de terceiros no navegador, como applets Flash ou Java, esses eram os métodos dominantes usados no início dos anos 2000.

[Douglas Crockford](https://pt.wikipedia.org/wiki/Douglas_Crockford) foi o primeiro a especificar e popularizar o formato JSON. A sigla teve sua origam na State Software, uma empresa fundada por Crockford em março de 2001. Nos últimos 18 anos, o JSON vem substituindo o XML e se tornando o formato de arquivo padrão para transferência de dados na web.

## Estrutura do JSON

Um arquivo JSON é um conjunto não ordenado de pares nome/valor. Um JSON começa com `{` e termina com `}` e então é formado por pares de "*nome*": "*valor*". Cada nome é seguido por: dois pontos e os pares nome / valor são separados por vírgula.

*Nome* pode ser qualquer texto que identifique o seu dado e o *Valor* pode ser um dado do tipo `texto`, `número`, `objeto`, `matriz`, `verdadeiro/falso` ou `null` . Você pode conferir mais informações em [json.org.](https://www.json.org/json-en.html)

Separei um exemplo que cobre a maioria dos usos e tipos de dados que podem ser encontrados em um JSON:

{
  "nome": "Henrique Marques Fernandes",
  "idade": 70,
  "usaOculos": true,
  "alergias": null,
  "sites": \["marquesfernandes.com", "uol.com.br"\],
  "numerosDaSorte": \[05, 07, 28\],
  "amigos": \[{
     "nome": "Ulisses",
      "cidade": "Londres"
  }\]
  "endereco": {
    "cidade": "São Paulo",
    "estado": "São Paulo",
    "pais": "Brasil"
  }
}

### Propriedade do tipo Matriz (Array)

Todos os tipos de valores aceitos podem ser utilizados como membros das matrizes:

{
  "matrizDeTexto": \["texto1", "texto2"\],
  "matrizDeNumeros": \[1, 2, 3\],
  "matrizDeObjetos": \[{ "a": 1 }, { "b": 2 }\],
  "matrizDeBoolean": \[true, false, false, true\],
  "matrizDeNulos": \[null, null\],
}

### Propriedade do tipo Objeto

Todos os tipos de valores aceitos podem ser utilizados como valores de propriedades filhas:

{
 "souUmObjeto": {
   "texto": "texto1",
   "numero": 1,
   "nulo": null,
   "verdadeiro\_falso": false,
   "matriz": \[1, 2, 3\]
 }
}

## Caso de uso do JSON

JSON é muito utilizado na comunicação entre o seu navegador e o servidor, fazendo com que páginas consigam consumir pequenos conjuntos de dados no lugar de ter que pegar todos os dados necessários para carregar a página de uma vez. Então quando você entra em alguma aplicação web é muito provável que ela esteja fazendo uso desse padrão de comunicação.
