---
title: O que é HTTP?
description: Hypertext Transfer Protocol ou HTTP para os mais íntimos é um
  conjunto de regras para transferência de dados como arquivos de texto,
  imagens, audio, vídeo e outros arquivos multimedia.
date: 2019-10-08T19:31:31.000Z
lang: pt
translationKey: o-que-e-http
slug: o-que-e-http
category: tecnologia
tags:
  - http
  - internet
  - protocolo
  - http2
  - https
wpId: 6133
cover: ./2019-10-Untitled-Design.jpg
canonicalPath: /tecnologia/o-que-e-http/
needsReview: false
updated: 2020-09-04T15:46:59.000Z
---

**Hypertext Transfer Protocol** ou **HTTP** para os mais íntimos é um conjunto de regras para transferência de dados como arquivos de texto, imagens, audio, vídeo e outros arquivos multimedia.

## Ahn?

![Image result for netscape gif](https://media2.giphy.com/media/UML8EuuiFZkUU/giphy.gif)

Quando você digita um site em seu navegador, ele por trás dos panos está enviando uma requisição **HTTP** solicitando a página desejada para algum servidor web. Pense nos protocolos da internet como regras de trânsito, elas são necessárias para que todos os carros (dados) consigam chegar em seu destino (cliente).

O protocolo **HTTP** foi desenvolvido junto com a linguagem de marcação [HTML](https://pt.wikipedia.org/wiki/HTML) para criar a primeira experiência interativa em navegadores web. Até hoje o protocolo segue sendo o principal meio de comunicação da internet!

## Quando e como surgiu?

O protocolo foi elaborado em 1989 por [Sir Tim Berners Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) e agora está sob responsabilidade da [W3C](https://www.w3.org/).

-   A versão HTTP/1.1 foi documentada em 1997 na [RFC 2068](https://tools.ietf.org/html/rfc2068)
-   Em 2015 a versão HTTP/2 foi lançada com inúmeras melhorias, como suporte para TLS e ALPN.
-   Em 26 de setembro de 2019 a versão HTTP/3 que utiliza o protocolo UDP no lugar de TCP foi introduzido pela [Cloudflare](http://cloudflare.com), [Google Chrome](https://www.google.com/chrome/) e [Mozilla Firefox](https://www.mozilla.org/pt-BR/firefox/new/).

## Como funciona?

A comunicação entre clientes e servidores é feita basicamente através de **requisições** e **respostas** a um determinado **recurso**.

### Recursos

Um recurso HTTP nada mais é que uma parte da URL, quando digitamos no navegador [marquesfernandes.com/category/design/](http://marquesfernandes.com/category/design/) estamos solicitando o recurso /category/design/ que está localizado no servidor [marquesfernandes.com](http://marquesfernandes.com).

### Métodos

Para interagir com esses recursos o **HTTP** utiliza métodos de requisições predefinidos que informam ao servidor qual tarefa ele deve executar no recurso desejado:

-   **GET** requisição de um recurso
-   **POST** adiciona/cria um recurso
-   **PUT** modifica diretamente um recurso
-   **DELETE** remove um recurso específico
-   **PATCH** modifica parcialmente um recurso

[Confira a lista completa de métodos.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Códigos de status

Quando uma requisição é feita uma resposta é esperada (durd), para isso os servidores além de responderem a requisição com o corpo da resposta, seja um html, audio e etc, enviam também códigos de resposta que indicam qual foi o estado daquela requisição, se ela teve algum erro ou se foi bem sucedida. Os códigos mais comuns são:

-   **200** OK: Significa que sua requisição funcionou com sucesso.
-   **301** Movido Permanentemente (Moved Permanently): Esse código informa que esse caminho da requisição foi movido permanentemente para outro endereço.
-   **401** Não autorizado (Unauthorized): O usuário que está tentando fazer a requisição não esta autenticado.
-   **403** Proibido (Forbidden): O usuário que está tentando realizar a requisição está autenticado porém não possui as permissão necessárias.
-   **404** Não Encontrado (Not Found): Significa que o recurso solicitado não foi encontrado.
-   **500** Erro Interno no Servidor (Internal Server Error): Erro genérico que o servidor não soube tratar.

[Confira a lista completa de códigos de status.](http://marquesfernandes.com/tecnologia/lista-completa-de-codigos-http/)

### Ciclo de requisição HTTP

Um requisição HTTP normalmente desencadeia uma serie de outras requisições, observe um exemplo bastante utilizado:

1.  O cliente (um navegador) solicita uma página para a internet, por exemplo [www.uol.com.br](https://uol.com.br) o navegador então faz uma **requisição HTTP** do tipo **GET** para o servidor.
2.  O servidor recebe a **requisição** e executa qualquer rotina interna atrelada a ela.
3.  Caso tudo de certo o servidor retorna uma **resposta** com o conteúdo HTML da página e com o código de **status 200** para o navegador. E uma série de outras requisições podem acontecer:
    1.  O navegador faz uma requisição para uma folha de estilo. O servidor retorna um arquivo CSS;
    2.  O navegador faz uma requisição para uma imagem .JPG. O servidor retorna um arquivo .jpg;
    3.  O navegador faz uma requisição para um código JavaScript. O servidor retorna um arquivo .js;
    4.  O navegador faz uma requisição de um dado extra. O servidor retorna um arquivo de dados estruturado (XML, CSV, JSON, …);
4.  O navegador finalmente interpreta as **respostas** e renderiza a página.

## HTTP vs. HTTPS

[HTTPS](https://searchsoftwarequality.techtarget.com/definition/HTTPS) (HTTP sobre SSL ou HTTP Seguro) é o uso de Secure Sockets Layer ([SSL](https://searchsecurity.techtarget.com/definition/Secure-Sockets-Layer-SSL)) ou Transport Layer Security ([TLS](https://searchsecurity.techtarget.com/definition/Transport-Layer-Security-TLS)) como subcamada de uma requisição HTTP. Basicamente o HTTPS criptografa e descriptografa as requisições do usuário bem como as respostas do servidor. O uso do HTTPS protege contra ataques conhecidos que visam interceptar essas requisições e sequestrar dados sensíveis, como o [MitM](https://www.kaspersky.com.br/blog/what-is-a-man-in-the-middle-attack/462/) (man-in-the-middle).
