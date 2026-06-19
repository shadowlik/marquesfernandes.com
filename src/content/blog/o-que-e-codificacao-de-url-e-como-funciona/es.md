---
title: ¿Qué es la codificación de URL y cómo funciona?
description: Una URL (acrónimo de Uniform Resource Locator) es la dirección de
  un recurso en la red mundial. Las URL tienen una estructura bien definida que
  fue formulada en RFC 1738 por Tim Berners-Lee, inventor de la World Wide Web.
date: 2021-02-20T20:46:42.000Z
lang: es
translationKey: o-que-e-codificacao-de-url-e-como-funciona
slug: que-es-la-codificacion-de-url-y-como-funciona
category: tecnologia-es
tags: []
wpId: 11300
canonicalPath: /es/tecnologia-es/que-es-la-codificacion-de-url-y-como-funciona/
needsReview: false
updated: 2021-12-12T11:22:48.000Z
---

Una URL (acrónimo de Uniform Resource Locator) es la dirección de un recurso en la red mundial. Las URL tienen una estructura bien definida que fue formulada en [RFC 1738](https://tools.ietf.org/html/rfc1738) por [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee), inventor de la World Wide Web.

Una URL sigue la siguiente *sintaxis:*

```
protocolo[//[usuario:senha@]: ho[:porta]st] ruta[?parametro][#fragmento]
```

El uso más conocido de la URL es para conectarse a sitios web, como podemos ver en el siguiente ejemplo.

```
https://google.com
```

Se realizaron varias mejoras al RFC inicial.El RFC actual que define la sintaxis de URI es [RFC 3986](https://tools.ietf.org/html/rfc3986)\. Esta publicación contiene información del documento RFC más reciente.

## Diferencia entre URL y URI

Probablemente escuche en algunos lugares hablar URL y en otros URI.

-   Un URI es un identificador de un recurso específico. Como página, libro o documento
-   La URL es un tipo especial de identificador que también le indica cómo acceder a ella, como HTTP, FTP, etc. Un ejemplo sería el sitio http://marquesfernandes.com

Si el protocolo (HTTPS, FTP, etc.) está presente o implícito para un dominio, debe llamarlo URL, aunque también es un URI. Todas las URL son URI, pero no todas las URI son URL.

## Codificación de URL (codificación porcentual)

Una URL está formada por un conjunto limitado de caracteres que pertenecen al conjunto de caracteres US-[ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/).Estos caracteres incluyen dígitos (0-9), letras (AZ, az), y algunos caracteres especiales, `(` "-`",` "\_`",` "~`" "`"), ya que son US-ASCII, los caracteres permitidos no incluya acentos como los que se encuentran en el idioma portugués.

Hay algunos caracteres especiales que tienen un uso especial en las URL. Algunos ejemplos de caracteres reservados son ?, /, \# `,`: `E`tc. Los datos transmitidos como parte de la URL, ya sea en un segmento de cadena de consulta o en una ruta, no deben contener estos caracteres directamente.

Además, los caracteres peligrosos como `el esp`ac`i`o, , <,>`,` {`,`} etc. y cualquier carácter fuera del conjunto de caracteres [ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/), no se permiten directamente en las URL.

Entonces, ¿qué hacer cuando necesitamos enviar datos en la URL que contiene estos caracteres no permitidos?Usamos la magia de la codificación.

La codificación de URL convierte los caracteres reservados e inseguros a un formato comprendido por todos los navegadores y servidores de Internet.Primero convertimos el carácter a uno o más bytes.Luego, cada byte está representado por dos dígitos hexadecimales con un prefijo% (por ejemplo,% `20`).El signo de porcentaje se utiliza como carácter de seguridad.

### Ejemplo de codificación de URL

**Espacio**: uno de los caracteres codificados en URL más frecuentes que probablemente encontrará es un `espacio vací`o.El valor ASCII del e`spacio de car`acteres vacío en decimal e`s` 32, que cuando se convierte a hexadecimal se convierte en `2`0.Ahora, agregamos el prefijo de porcentaje (%), `q`ue nos da el valor codificado de la URL:% `20`.

## Tabla de referencia de codificación de porcentaje de caracteres ASCII

La siguiente tabla es una referencia a los caracteres ASCII para su forma codificada de URL correspondiente.

| Decimal | Personaje | Codificación de URL (UTF-8) |
| --- | --- | --- |
| 0 | NUL (carácter nulo) | % 00 |
| 1 | SOH (inicio de encabezado) | % 01 |
| dos | STX (comienzo del texto) | % 02 |
| 3 | ETX (final del texto) | % 03 |
| 4 | EOT (fin de transmisión) | % 04 |
| 5 | ENQ (encuesta) | % 05 |
| 6 | ACK (reconocer) | % 06 |
| 7 | BEL (campana) | % 07 |
| 8 | BS (rebobinar) | % 08 |
| 9 | HT (guía horizontal) | % 09 |
| 10 | LF (avance de línea) | % 0A |
| 11 | VT (guía vertical) | % 0B |
| 12 | FF (alimentación de formulario) | % 0C |
| 13 | CR (retorno de carro) | % 0D |
| 14 | SO (cambiar) | % 0E |
| 15 | SI (cambio) | % 0F |
| dieciséis | DLE (escape de enlace de datos) | % 10 |
| 17 | DC1 (control de dispositivo 1) | % 11 |
| 18 | DC2 (control de dispositivo 2) | % 12 |
| 19 | DC3 (control del dispositivo 3) | % 13 |
| 20 | DC4 (control del dispositivo 4) | % 14 |
| 21 | NAK (reconocimiento negativo) | % 15 |
| 22 | SYN (sincronización) | % dieciséis |
| 23 | ETB (final del bloque de transmisión) | % 17 |
| 24 | CAN (cancelar) | % 18 |
| 25 | EM (fin de los medios) | % 19 |
| 26 | SUB (sustituto) | % 1A |
| 27 | ESC (escapar) | % 1B |
| 28 | FS (separador de archivos) | % 1C |
| 29 | GS (separador de grupos) | % 1D |
| 30 | RS (separador de registros) | % 1 Y |
| 31 | EE. UU. (Separador de unidades) | % 1F |
| 32 | espacio | % 20 |
| 33 | ! | % 21 |
| 34 | " | % 22 |
| 35 | # | % 23 |
| 36 | PS | % 24 |
| 37 | % | % 25 |
| 38 | Y | % 26 |
| 39 | ' | % 27 |
| 40 | ( | % 28 |
| 41 | ) | % 29 |
| 42 | \* | % 2A |
| 43 | + | % 2B |
| 44 | , | % 2C |
| 45 | \- | % 2D |
| 46 | . | % 2E |
| 47 | / | % 2F |
| 48 | 0 | % 30 |
| 49 | 1 | % 31 |
| 50 | dos | % 32 |
| 51 | 3 | % 33 |
| 52 | 4 | % 34 |
| 53 | 5 | % 35 |
| 54 | 6 | % 36 |
| 55 | 7 | % 37 |
| 56 | 8 | % 38 |
| 57 | 9 | % 39 |
| 58 | : | % 3A |
| 59 | ; | % 3B |
| 60 | < | % 3C |
| 61 | \= | % 3D |
| 62 | \> | % 3E |
| 63 | ? | % 3F |
| 64 | @ | % 40 |
| sesenta y cinco | LA | % 41 |
| 66 | B | % 42 |
| 67 | C | % 43 |
| 68 | D | % 44 |
| 69 | Y | % 45 |
| 70 | F | % 46 |
| 71 | GRAMO | % 47 |
| 72 | H | % 48 |
| 73 | I | % 49 |
| 74 | J | % 4A |
| 75 | K | % 4B |
| 76 | L | % 4C |
| 77 | METRO | % 4D |
| 78 | norte | % 4E |
| 79 | LA | % 4F |
| 80 | POR | % 50 |
| 81 | Q | % 51 |
| 82 | R | % 52 |
| 83 | s | % 53 |
| 84 | T | % 54 |
| 85 | U | % 55 |
| 86 | V | % 56 |
| 87 | C | % 57 |
| 88 | X | % 58 |
| 89 | Y | % 59 |
| 90 | Z | % 5A |
| 91 | \[ | % 5B |
| 92 |  | % 5C |
| 93 | \] | % 5D |
| 94 | ^ | % 5E |
| 95 | \_ | % 5F |
| 96 | ' | % 60 |
| 97 | los | % 61 |
| 98 | B | % 62 |
| 99 | C | % 63 |
| 100 | D | % 64 |
| 101 | y | % sesenta y cinco |
| 102 | F | % 66 |
| 103 | gramo | % 67 |
| 104 | H | % 68 |
| 105 | I | % 69 |
| 106 | j | % 6A |
| 107 | k | % 6B |
| 108 | I | % 6C |
| 109 | metro | % 6D |
| 110 | norte | % 6E |
| 111 | los | % 6F |
| 112 | por | % 70 |
| 113 | q | % 71 |
| 114 | r | % 72 |
| 115 | s | % 73 |
| 116 | t | % 74 |
| 117 | tu | % 75 |
| 118 | v | % 76 |
| 119 | C | % 77 |
| 120 | X | % 78 |
| 121 | y | % 79 |
| 122 | z | % 7A |
| 123 | { | % 7B |
| 124 | | | % 7C |
| 125 | } | % 7D |
| 126 | ~ | % 7E |
| 127 | DEL (borrar) | % 7F |

## [Codificación de URL (Percent-Encoding)](https://www.urlencoder.io/learn/#url-encoding-percent-encoding)
