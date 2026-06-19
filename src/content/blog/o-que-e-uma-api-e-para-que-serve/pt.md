---
title: O que é uma API e para que serve?
description: API é um acrônimo do Inglês "Application Programming Interface"
  (Interface de Programação de Aplicações), o que significa um conjunto de
  funções e procedimentos pré-estabelecidos que permitem a criação de aplicações
  que acessam recursos ou dados de outra aplicação, serviço ou sistema
  operacional.
date: 2020-04-07T23:39:13.000Z
lang: pt
translationKey: o-que-e-uma-api-e-para-que-serve
slug: o-que-e-uma-api-e-para-que-serve
category: tecnologia
tags:
  - json
  - http
  - api
wpId: 8094
cover: ./2020-04-blake-connally-IKUYGCFmfw4-unsplash.jpg
canonicalPath: /tecnologia/o-que-e-uma-api-e-para-que-serve/
needsReview: false
updated: 2020-08-09T17:04:46.000Z
---

**API** é um acrônimo do Inglês "***Application Programming Interface***" (**Interface de Programação de Aplicações**), o que significa um conjunto de funções e procedimentos pré-estabelecidos que permitem a criação de aplicações que acessam recursos ou dados de outra aplicação, serviço ou sistema operacional.

## Descomplicando o termo API

Ainda não entendeu? Imagine uma *API* como um restaurante, eles fornecem um cardápio para seus clientes (*funções e procedimentos*) com opções e descrições dos pratos, obviamente pré-definidos. Quando um cliente pede um prato (*requisição*), ele pode fornecer informações relevantes (*dados - inputs*) para que o resultado esperado seja alcançado, como o ponto da carne ou se deseja remover algum ingrediente. No final o cliente não sabe exatamente como o restaurante preparou sua comida lá na cozinha, apenas recebe o resultado (*resposta*).

É mais ou menos nesse fluxo que uma API funciona, por exemplo, um desenvolvedor quer utilizar a API do Facebook para automatizar as postagens de sua empresa, ele não precisa e nem vai saber como o Facebook implementou a regra de negócio. O Facebook apenas fornece para o desenvolvedor uma série de recursos, no formato de uma API Web, que podem ser usados para ele alcançar o resultado esperado, ele apenas precisa fornecer os dados necessários para isso.

Vamos imaginar outro cenário, um desenvolvedor deseja criar uma aplicação desktop para o Windows, essa aplicação precisa abrir um caixa de diálogo para selecionar arquivos, ele apenas precisar ter em mãos a documentação da linguagem que está sendo desenvolvida e encontrar a função de API do Windows referente a abertura dessa caixa. Ele não se preocupa em como isso ocorre, ele apenas precisa que aconteça.

Então as APIs simplificam parte da programação para os desenvolvedores, abstraindo a implementação em baixo nível e expondo apenas objetos ou ações em alto nível que o desenvolvedor precisa.

No primeiro exemplo vimos o cenário de uso de uma API Web, enquanto no segundo exemplo temos uma API no nível da aplicação. Existem diversos tipos e usos de APIs, as mais famosas são as APIs Web, já falaremos mais sobre elas.

## APIs por política de acesso

As APIs são normalmente categorizadas por seu nível de acesso:

-   **Privadas:** A API está disponível apenas para uso interno da empresa.
-   **Parceiros:** Apenas parceiros tem acesso as APIs. Por exemplo, a Nubank permite apenas que certas empresas utilizem suas APIs para conectar com suas aplicações. Isso permite o controle e curadoria por parte da empresa fornecendo a API, dando mais controle a eles de quem está acessando seus recursos.
-   **Públicas:** As APIs públicas são disponibilizadas para uso público, qualquer pessoa pode ter acesso. Por exemplo, a Microsoft libera as [APIs do Windows](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list) para que qualquer desenvolvedor consiga desenvolver uma aplicação para seu sistema operacional, ou então o LinkedIn que fornece uma [API pública](https://developer.linkedin.com/docs/rest-api#) para qualquer usuário conectar com sua aplicação.

![Como uma API funciona](./2020-04-como-api-funciona.jpg)

## APIs Web

Agora que já entendemos que uma API é qualquer conjunto de funções que permitem o acesso a informações de uma aplicação de uma maneira pré-estabelecida, seja esse acesso remoto (web) ou programado. Vamos falar das APIs mais populares, as APIs Web.

Elas são a maneira que a internet se comunica atualmente, diversos protocolos de comunicação foram desenvolvidos e são usados diariamente para que aquele meme do seu amigo chegue no seu celular. Uma API remota permite que você, ou a sua aplicação, acesse os recursos dinamicamente de uma maneira simplificada e automatizada. Normalmente utilizam métodos de autenticação para segurança e auditoria, elas se comunicam através da implementação de especificações, como o [HTTP](http://marquesfernandes.com/o-que-e-http/), para as requisições e um padrão de dados para a resposta, como o [JSO](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/)[N](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/).
