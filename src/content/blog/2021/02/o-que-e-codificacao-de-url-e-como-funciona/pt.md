---
title: O que é codificação de URL e como funciona?
description: Um URL (acrônimo em inglês para Uniform Resource Locator) é o
  endereço de um recurso na rede mundial de computadores. Os URLs têm uma
  estrutura bem definida que foi formulada na RFC 1738 por Tim Berners-Lee,
  inventor da rede mundial de computadores.
date: 2021-02-20T20:46:42.000Z
lang: pt
translationKey: o-que-e-codificacao-de-url-e-como-funciona
slug: o-que-e-codificacao-de-url-e-como-funciona
category: tecnologia
tags:
  - internet
  - navegador
  - url
  - uri
  - web
wpId: 11296
cover: ./2021-02-richy-great-MAYEkmn7G6E-unsplash.jpg
canonicalPath: /tecnologia/o-que-e-codificacao-de-url-e-como-funciona/
needsReview: false
updated: 2021-02-20T20:55:05.000Z
---

Um URL (acrônimo em inglês para Uniform Resource Locator) é o endereço de um recurso na rede mundial de computadores. Os URLs têm uma estrutura bem definida que foi formulada na [RFC 1738](https://tools.ietf.org/html/rfc1738) por [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee), inventor da rede mundial de computadores.

Uma URL segue a seguinte *sintaxe:*

```
protocolo:[//[usuario:senha@]host[:porta]]caminho[?parametro][#fragmento]
```

O uso mais conhecido para a URL é para a conexão em sites, como podemos ver no exemplo abaixo.

```
https://google.com.br
```

Diversas melhorias foram feitas na RFC inicial. O RFC atual que define a sintaxe do URI é o [RFC 3986](https://tools.ietf.org/html/rfc3986). Esta postagem contém informações do documento RFC mais recente.

## Diferença entre URL e URI

Você provavelmente vai escutar em alguns lugares falando URL e em outros URI.

-   Um URI é um identificador para um recurso específico. Como uma página, livro ou documento
-   A URL é tipo especial de identificador que também lhe diz como acessá-lo, como HTTPs, FTP, etc. Um exemplo seria o próprio site http://marquesfernandes.com

Se o protocolo (HTTPS, FTP, etc.) estiver presente ou implícito para um domínio, você deve chamá-lo de URL, embora ele também seja um URI. Todos os URLs são URIs, mas nem todos os URIs são URLs.

## Codificação de URL (codificação com percentual)

Um URL é composto de um conjunto limitado de caracteres pertencentes ao conjunto de caracteres US-[ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/). Esses caracteres incluem dígitos (0-9), letras (AZ, az), e alguns caracteres especiais, (`"-"`, `"."`, `"_"`, `"~"`), por se tratar de US-ASCII, os caracteres permitidos não incluem os acentos como os encontrados na língua portuguesa.

Existem alguns caracteres especiais que possuem um uso especial nas URLs. Alguns exemplos de caracteres reservados são `?`, `/`, `#`, `:`etc. Quaisquer dados transmitidos como parte da URL, seja em consulta segmento de corda ou caminho, não deve conter esses caracteres diretamente.

Além disso, caracteres perigosos como `espaço`, `\`, `<`, `>`, `{`, `}`etc, e qualquer carácter fora do conjunto de caracteres [ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/), não são permitidos diretamente nas URLs.

Então, o que fazer quando precisamos enviar dados na URL que contenham esses caracteres não permitidos? Usamos a magia da codificação.

A codificação de URL converte os caracteres reservados e inseguros em um formato compreendido por todos os navegadores e servidores da internet. Primeiro convertemos o caractere em um ou mais bytes. Então, cada byte é representado por dois dígitos hexadecimais com um prefixo de % (por exemplo `%20`). O sinal de porcentagem é usado como um caractere de segurança.

### Exemplo de codificação de URL

**Espaço:** um dos caracteres codificados de URL mais frequentes que você provavelmente encontrará é um `espaço vazio`. O valor ASCII do `espaço vazio`caractere em decimal é `32`, que quando convertido em hexadecimal passa a ser `20`. Agora, adicionamos o prefixo de porcentagem ( `%`), que nos dá o valor codificado do URL: `%20`.

## Tabela de referência de codificação de porcentagem de caracteres ASCII

A tabela a seguir é uma referência de caracteres ASCII para sua forma codificada de URL correspondente.

| Decimal | Personagem | Codificação de URL (UTF-8) |
| --- | --- | --- |
| 0 | NUL (caractere nulo) | %00 |
| 1 | SOH (início do cabeçalho) | %01 |
| 2 | STX (início do texto) | %02 |
| 3 | ETX (fim do texto) | %03 |
| 4 | EOT (fim da transmissão) | %04 |
| 5 | ENQ (inquérito) | %05 |
| 6 | ACK (reconhecer) | %06 |
| 7 | BEL (sino) | %07 |
| 8 | BS (retrocesso) | %08 |
| 9 | HT (guia horizontal) | %09 |
| 10 | LF (alimentação de linha) | %0A |
| 11 | VT (guia vertical) | %0B |
| 12 | FF (alimentação de formulário) | %0C |
| 13 | CR (retorno de carro) | %0D |
| 14 | SO (mude para fora) | %0E |
| 15 | SI (mudança) | %0F |
| 16 | DLE (escape do link de dados) | %10 |
| 17 | DC1 (controle de dispositivo 1) | %11 |
| 18 | DC2 (controle de dispositivo 2) | %12 |
| 19 | DC3 (controle do dispositivo 3) | %13 |
| 20 | DC4 (controle do dispositivo 4) | %14 |
| 21 | NAK (reconhecimento negativo) | %15 |
| 22 | SYN (sincronizar ) | %16 |
| 23 | ETB (fim do bloco de transmissão) | %17 |
| 24 | POSSO (cancelar) | %18 |
| 25 | EM (fim da mídia) | %19 |
| 26 | SUB (substituto) | %1A |
| 27 | ESC (escapar) | %1B |
| 28 | FS (separador de arquivo) | %1C |
| 29 | GS (separador de grupo) | %1D |
| 30 | RS (separador de registro) | %1E |
| 31 | US (separador de unidade) | %1F |
| 32 | espaço | %20 |
| 33 | ! | %21 |
| 34 | " | %22 |
| 35 | # | %23 |
| 36 | $ | %24 |
| 37 | % | %25 |
| 38 | E | %26 |
| 39 | ' | %27 |
| 40 | ( | %28 |
| 41 | ) | %29 |
| 42 | \* | %2A |
| 43 | + | %2B |
| 44 | , | %2C |
| 45 | \- | %2D |
| 46 | . | %2E |
| 47 | / | %2F |
| 48 | 0 | %30 |
| 49 | 1 | %31 |
| 50 | 2 | %32 |
| 51 | 3 | %33 |
| 52 | 4 | %34 |
| 53 | 5 | %35 |
| 54 | 6 | %36 |
| 55 | 7 | %37 |
| 56 | 8 | %38 |
| 57 | 9 | %39 |
| 58 | : | %3A |
| 59 | ; | %3B |
| 60 | < | %3C |
| 61 | \= | %3D |
| 62 | \> | %3E |
| 63 | ? | %3F |
| 64 | @ | %40 |
| 65 | A | %41 |
| 66 | B | %42 |
| 67 | C | %43 |
| 68 | D | %44 |
| 69 | E | %45 |
| 70 | F | %46 |
| 71 | G | %47 |
| 72 | H | %48 |
| 73 | I | %49 |
| 74 | J | %4A |
| 75 | K | %4B |
| 76 | L | %4C |
| 77 | M | %4D |
| 78 | N | %4E |
| 79 | O | %4F |
| 80 | P | %50 |
| 81 | Q | %51 |
| 82 | R | %52 |
| 83 | S | %53 |
| 84 | T | %54 |
| 85 | U | %55 |
| 86 | V | %56 |
| 87 | C | %57 |
| 88 | X | %58 |
| 89 | Y | %59 |
| 90 | Z | %5A |
| 91 | \[ | %5B |
| 92 | \\ | %5C |
| 93 | \] | %5D |
| 94 | ^ | %5E |
| 95 | \_ | %5F |
| 96 | \` | %60 |
| 97 | a | %61 |
| 98 | b | %62 |
| 99 | c | %63 |
| 100 | d | %64 |
| 101 | e | %65 |
| 102 | f | %66 |
| 103 | g | %67 |
| 104 | h | %68 |
| 105 | i | %69 |
| 106 | j | %6A |
| 107 | k | %6B |
| 108 | eu | %6C |
| 109 | m | %6D |
| 110 | n | %6E |
| 111 | o | %6F |
| 112 | p | %70 |
| 113 | q | %71 |
| 114 | r | %72 |
| 115 | s | %73 |
| 116 | t | %74 |
| 117 | u | %75 |
| 118 | v | %76 |
| 119 | C | %77 |
| 120 | x | %78 |
| 121 | y | %79 |
| 122 | z | %7A |
| 123 | { | %7B |
| 124 | | | %7C |
| 125 | } | %7D |
| 126 | ~ | %7E |
| 127 | DEL (apagar) | %7F |

## [Codificação de URL (Percent-Encoding)](https://www.urlencoder.io/learn/#url-encoding-percent-encoding)
