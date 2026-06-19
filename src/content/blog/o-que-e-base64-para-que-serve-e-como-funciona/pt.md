---
title: O que é Base64, para que serve e como funciona?
description: Base64 é um algoritmo de codificação encoding que permite
  transformar qualquer caractere de qualquer idioma em um alfabeto que consiste
  em letras latinas, dí...
date: 2020-02-24T20:10:47.000Z
lang: pt
translationKey: o-que-e-base64-para-que-serve-e-como-funciona
slug: o-que-e-base64-para-que-serve-e-como-funciona
category: self
tags: []
wpId: 7418
canonicalPath: /self/o-que-e-base64-para-que-serve-e-como-funciona/
needsReview: false
updated: 2020-10-09T10:34:18.000Z
---

**Base64** é um algoritmo de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. Com isso podemos converter caracteres especiais como os logogramas chineses, emoji e até imagens em uma sequência "legível" (para qualquer computador), que pode ser salvo e/ou transferido para qualquer outro lugar. É utilizado frequentemente para transmitir dados binários por meio de transmissões que lidam apenas com texto, como, por exemplo, para enviar imagens e arquivos em anexo por e-mail.

Seu alfabeto é constituído por **64 caracteres (\[A-Z\],\[a-z\],\[0-9\], "/" e "+"),** o que deu  origem ao seu nome. O carácter `=` é utilizado como um sufixo especial e a especificação original ([RFC 989](https://tools.ietf.org/html/rfc989)) definiu que o símbolo `*` pode ser utilizado para delimitar dados convertidos, mas não criptografados, dentro de um *stream*.

## O Base64 é seguro? Posso usar como método de criptografia?

O algoritmo de codificação do **Base64** não é um algoritmo de criptografia, ele é facilmente decodificado, portanto não deve ser utilizado como método de criptografia segura. Não utilize essa técnica para proteger dados sensíveis, para isso recorra a [métodos de criptografia seguros](https://cryptoid.com.br/valid/tipos-de-criptografia-conheca-os-10-mais-usados-e-como-funciona-cada-um/).

## O Base64 reduz o tamanho dos meus arquivos? Posso usar como método para compressão?

Não, pelo contrário, usando o algoritmo de codificação **Base64**, o tamanho dos arquivos aumentam em 33% (mais precisamente 4⁄3), pois ele substitui cada 3 bytes por 4 bytes. Para saber o tamanho final codificado basta pegar o tamanho original do arquivo e aplicar a seguinte fórmula: `n * 4 / 3`, onde **n** é o tamanho original do arquivo.

## Então porque ele existe? E qual o seu uso?

Para entender por que o **Base64** foi inventado, precisamos entender um pouco da história dos computadores: Os computadores se comunicam via sistema binário - 0s e 1s, mas as pessoas geralmente desejam se comunicar com dados em formatos mais avançados, como textos ou imagens. Para transferir esses dados entre computadores, é necessário primeiro codificar em 0s e 1s, enviar e depois decodificar novamente. Existem muitas maneiras diferentes de executar essa codificação e seria muito mais simples se todos pudéssemos concordar com uma única codificação, mas infelizmente esse não era o caso.

Originalmente, muitas codificações diferentes foram criadas (por exemplo, código [Baudot](https://pt.wikipedia.org/wiki/C%C3%B3digo_Baudot)) que usavam um número diferente de bits por caractere até que, eventualmente, o [ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) se tornasse um padrão com 7 bits por caractere. No entanto, a maioria dos computadores armazena dados binários em bytes que consistem em 8 bits cada, portanto o ASCII não é adequado para transferir esse tipo de dados.

Para resolver esses problemas, a codificação Base64 foi introduzida. Isso permite que você codifique bytes arbitrários em bytes que são seguros enviar sem serem corrompidos (caracteres alfanuméricos ASCII e alguns símbolos). A desvantagem é que a codificação da mensagem usando Base64 aumenta seu comprimento - a cada 3 bytes de dados são codificados para 4 caracteres ASCII.

Para enviar uma mensagem de texto de forma confiável, você pode primeiro codificar para bytes usando uma codificação de texto de sua escolha (por exemplo, [UTF-8](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html)) e, em seguida, Base64 codifica os dados binários resultantes em uma sequência de texto que é segura para enviar codificada como ASCII. O receptor terá que reverter esse processo para recuperar a mensagem original. É claro que isso requer que o destinatário saiba quais codificações foram usadas e essas informações geralmente precisam ser enviadas separadamente.

Historicamente, tem sido usado para codificar dados binários em mensagens de email em que o servidor de email pode modificar as terminações de linha. Um exemplo mais moderno é o uso da codificação Base64 para incorporar dados de imagem diretamente no código-fonte HTML. Aqui é necessário codificar os dados para evitar que caracteres como '<' e '>' sejam interpretados como tags.

## Como funciona o algoritmo de codificação Base64?

Vamos usar a palavra **BOLA** como exemplo, lembrando que letras maiúsculas e minúsculas fazem diferença:

BOLA

Primeiro vamos encontrar em nossa [tabela ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) o código binário correspondente de cada letra:

01000010010011110100110001000001

Agora concatenamos todos os códigos binários e dividimos em grupos de 6:

01000010010011110100110001000001

Nesse exemplo, estão faltando 4 dígitos em nosso último bloco, adicionaremos quatro zeros (0000) a sua direita:

010000100100111101001100010000010000

Agora precisamos converter nossa tabela de 6 bits para 8 bits, faremos isso adicionando dois zeros (00) na frente:

000100000010010000111101000011000001000000010000

Agora consultamos novamente nossa [tabela ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) procurando os binários relacionados e anotando o seu número decimal correspondente:

16 36 61 12 16 16 \= \=

Como podemos ver acima, precisamos sempre de grupos completos de 24 bits, se acontecer de seu grupo não completar, adicionamos o marcador = que tem valor nulo para completar nosso grupo. Procuramos então a nossa referência decimal na [tabela de conversão do Base64](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/):

Qk9MQQ\==

## E como funciona a decodificação do Base64?

A decodificação é tão simples quanto a codificação, basta fazer a receita que aprendemos de trás pra frente. Vamos usar um exemplo diferente, a string codificada **TUFS**:

Começamos procurando a as referências decimais na [tabela de conversão do Base64](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/):

19 20 5 18

Agora precisamos encontrar os números binários correspondentes em nossa [tabela ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/):

00010011000101000000010100010010

Agora precisamos transformar de 8-bit byte para 6-bit byte, faremos isso removendo os dois 0 do prefixo de cada grupo:

010011010100000101010010

Agora precisamos novamente agrupar em 8-bit byte, resultando em 3 grupos de 8-bit byte:

010011010100000101010010

Agora precisamos encontrar os caracteres correspondentes aos números binários em nossa [tabela ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/):

MAR

E finalmente teremos o nosso texto original decodificado, a palavra **MAR**.
