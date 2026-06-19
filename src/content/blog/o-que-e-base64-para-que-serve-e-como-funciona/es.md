---
title: ¿Qué es Base64, para qué sirve y cómo funciona?
description: Base64 es un algoritmo de codificación que permite transformar
  cualquier carácter de cualquier idioma en un alfabeto que consta de letras,
  dígitos y signos l...
date: 2020-02-24T20:10:47.000Z
lang: es
translationKey: o-que-e-base64-para-que-serve-e-como-funciona
slug: que-y-base64-para-que-serve-y-como-funciona
category: tecnologia-es
tags: []
wpId: 9164
canonicalPath: /es/tecnologia-es/que-y-base64-para-que-serve-y-como-funciona/
needsReview: false
updated: 2021-12-12T11:23:43.000Z
---

**Base6**4 es un algoritmo de codificación que permite transformar cualquier carácter de cualquier idioma en un alfabeto que consta de letras, dígitos y signos latinos. Con esto podemos convertir caracteres especiales como logogramas chinos, emojis e incluso imágenes en una secuencia "legible" (para cualquier ordenador), que se puede guardar y/o transferir en cualquier otro lugar. A menudo se utiliza para transmitir datos binarios por medio de transmisiones que tratan sólo con texto, como para enviar imágenes y archivos adjuntos por correo electrónico.

Su alfabeto consta de 64 ca**racteres (,,, \[A-Z\]\[a-z\]"\[0-9\]/" y "+"), qu**e dieron lugar a su nombre. El carácter \- se utiliza como un sufijo especial, y la especificación original ([RFC 989](https://tools.ietf.org/html/rfc989)) ha definido que el sím`b`olo \* se puede utilizar para delimitar los datos convertidos pero sin cifrar dentro de una se*cuenci*a.

## ¿Es Seguro Base64? ¿Puedo usar el cifrado como método de cifrado?

El algoritmo de codificación **Base**64 no es un algoritmo de cifrado, se decodifica fácilmente y, por lo tanto, no debe utilizarse como un método de cifrado seguro. No utilice esta técnica para proteger los datos confidenciales, por lo que debe utilizar [métodos de cifrado seguros](https://cryptoid.com.br/valid/tipos-de-criptografia-conheca-os-10-mais-usados-e-como-funciona-cada-um/).

## ¿Base64 reduce el tamaño de mis archivos? ¿Puedo usarlo como método de compresión?

No, por el contrario, utilizando el algoritmo de codific**ación** Base64, el tamaño del archivo aumenta en un 33% (más precisamente 4-3), ya que reemplaza cada 3 bytes por 4 bytes. Para conocer el tamaño codificado final simplemente tome el tamaño del archivo original y aplique la siguiente fórmula`: n * 4 /` 3, donde n es el tamaño del archivo original.

## Entonces, ¿por qué existe? ¿Y de qué sirve?

Para entender por qué se **inven**tó Base64, necesitamos entender un poco de la historia de los ordenadores: Los ordenadores se comunican a través del sistema binario - 0s y 1s, pero la gente a menudo quiere comunicarse con los datos en formatos más avanzados, como texto o imágenes. Para transferir estos datos entre equipos, primero debe codificar en 0s y 1s, enviar y, a continuación, descodificar de nuevo. Hay muchas maneras diferentes de realizar esta codificación y sería mucho más simple si todos pudiéramos estar de acuerdo con una sola codificación, pero desafortunadamente ese no fue el caso.

Originalmente, se crearon muchas codificaciones diferentes (por ejemplo, código [Baudot](https://pt.wikipedia.org/wiki/C%C3%B3digo_Baudot)) que utilizaban un número diferente de bits por carácter hasta que finalmente [ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) se convirtió en un patrón de 7 bits por carácter. Sin embargo, la mayoría de los equipos almacenan datos binarios en bytes que constan de 8 bits cada uno, por lo que ASCII no es adecuado para transferir este tipo de datos.

Para resolver estos problemas, se introdujo la codificación base64. Esto le permite codificar bytes arbitrarios en bytes que son seguros para enviar sin dañarse (caracteres alfanuméricos ASCII y algunos símbolos). La desventaja es que la codificación del mensaje mediante Base64 aumenta su longitud - cada 3 bytes de datos se codifican a 4 caracteres ASCII.

Para enviar un mensaje de texto de forma fiable, primero puede codificar en bytes mediante una codificación de texto de su elección (por ejemplo, [UTF-8](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html)) y, a continuación, Base64 codifica los datos binarios resultantes en una secuencia de texto que es segura enviar codificada como ASCII. El receptor tendrá que invertir este proceso para recuperar el mensaje original. Por supuesto, esto requiere que el destinatario sepa qué codificaciones se utilizaron, y esta información normalmente debe enviarse por separado.

Históricamente, se ha utilizado para codificar datos binarios en mensajes de correo electrónico donde el servidor de correo electrónico puede modificar terminaciones de línea. Un ejemplo más moderno es el uso de la codificación Base64 para incrustar datos de imagen directamente en el código fuente HTML. Aquí debe codificar los datos para evitar que caracteres como<' e="" '="">'' se interpreten como etiquetas.</'>

## ¿Cómo funciona el algoritmo de codificación Base64?

Vamos a usar la palabra **BOLA** como ejemplo, recordando que las letras mayúsculas y minúsculas marcan la diferencia:

Bola

Primero encontraremos en nuestra [tabla ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) el código binario correspondiente de cada letra:

01000010010011110100110001000001

Ahora contamos todos los códigos binarios y nos dividimos en grupos de 6:

01000010010011110100110001000001

En este ejemplo, faltan 4 dígitos en nuestro último bloque, agregaremos cuatro ceros (0000) a su derecha:

010000100100111101001100010000010000

Ahora que necesitamos convertir nuestra tabla de 6 bits a 8 bits, haremos esto agregando dos ceros (00) delante:

000100000010010000111101000011000001000000010000

Ahora volvemos a consultar nuestra [tabla ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) buscando los binarios relacionados y anotando su número decimal correspondiente:

16 36 61 12 16 16 ?

Como podemos ver arriba, siempre necesitamos grupos completos de 24 bits, si su grupo no se completa, agregamos el marcador , que tiene un valor nulo para completar nuestro grupo. A continuación, buscamos nuestra referencia decimal en la [tabla de conversión Base64](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/):

Qk9MQQ

## ¿Y cómo funciona el descifrado base64?

La decodificación es tan simple como la codificación, simplemente haz la receta que aprendimos al revés. Vamos a usar un ejemplo diferente, la cadena codificada **TUF**S:

Comenzamos buscando las referencias decimales en [la tabla de conversión Base64](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/):

19 20 5 18

Ahora necesitamos encontrar los números binarios correspondientes en nuestra [tabla ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/):

00010011000101000000010100010010

Ahora necesitamos pasar de byte de 8 bits a byte de 6 bits, recomendaremos los dos prefijos 0 de cada grupo:

010011010100000101010010

Ahora necesitamos agrupar de nuevo en un byte de 8 bits, lo que resulta en 3 grupos de bytes de 8 bits:

010011010100000101010010

Ahora necesitamos encontrar los caracteres correspondientes a los números binarios en nuestra [tabla ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/):

Mar

Y finalmente tendremos nuestro texto original decodificado, la palabra **MA**R.
