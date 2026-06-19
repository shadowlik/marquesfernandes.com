---
title: "Cómo saber y validar el dígito verificador del RG (Registro General)"
description: "El dígito verificador no es más que el dígito que viene después del guion (xx.xxx.xxx-d). Es un mecanismo de autenticación utilizado para verificar la validez y autenticidad de un valor numérico; funciona como una prevención de fraudes o de posibles errores de transmisión y generación del documento."
date: 2021-04-03T16:04:51.000Z
lang: es
translationKey: como-saber-e-validar-o-digito-verificador-do-rg-registro-geral
slug: como-saber-y-validar-el-digito-verificador-del-rg-registro-general
category: self
tags:
  - rg
cover: ./2021-04-RG-novo-940x530-1.jpg
needsReview: true
canonicalPath: /es/como-saber-y-validar-el-digito-verificador-del-rg-registro-general/
---

El RG (Registro General), o cédula de identidad, carné de identidad, identidad, es nuestro documento nacional de identificación civil en Brasil. Los datos que constan en este documento varían de acuerdo con el organismo responsable de su emisión, así como su regla matemática de autenticidad. En este artículo vamos a demostrar la regla y la validación basándonos en un documento emitido por la [SSP-SP](https://www.ssp.sp.gov.br/).

El **dígito verificador** no es más que el dígito que viene después del guion (xx.xxx.xxx-**d**). Es un mecanismo de autenticación utilizado para verificar la validez y autenticidad de un valor numérico; funciona como una prevención de fraudes o de posibles errores de transmisión y generación del documento.

## Cómo calcular el dígito verificador del RG

Para aprender la lógica detrás de la generación del dígito verificador utilizaremos en este artículo un RG válido y generado aleatoriamente: `39.406.714-?`

Primero vamos a hacer una tabla con 3 filas y 8 columnas; tendremos en la primera fila los 8 primeros dígitos del número del RG.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Ahora necesitamos rellenar la segunda fila; siempre obedecerá una secuencia lógica de números para el cálculo de cualquier RG. La secuencia es **2, 3, 4, 5, 6, 7, 8 y 9**.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Ahora, para obtener los valores de la tercera fila debemos multiplicar los números de cada fila por columna. Por ejemplo, 3x2, 9x3 y así sucesivamente.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>6</td><td>27</td><td>16</td><td>0</td><td>36</td><td>49</td><td>8</td><td>36</td></tr></tbody></table>

Ahora que tenemos nuestra tabla completa, necesitamos sumar todos los números obtenidos en la tercera fila. En nuestro ejemplo tendremos: **6 + 27 + 16 + 0 + 36 + 49 + 8 + 36 = 178**.

Ahora necesitamos descubrir el resto de la división de ese número entre 11; puedes descubrirlo usando la calculadora de tu ordenador con el operador `mod`**: 178 mod 11** **\= 2**.

Ahora necesitamos restar de 11 el resto de nuestra división y tendremos finalmente nuestro dígito verificador: **11 - 2 = 9**.

A continuación encuentras el algoritmo hecho en JavaScript ES5 siguiendo la lógica explicada arriba.

function descobrirDigito(rg) {
    var digitos = rg.split("");
    var totais = \[\];
    var total = 0;
    
    // Multiplicamos os que seriam da primeira linha com os da segunda    
    digitos.forEach(function (digito, index) {
        totais.push(Number(digito) \* (2 + index));
    });
    
    // Multiplicamos as colunas
    totais.forEach(function(numero) { total += numero });

    // Descobrimos o resto da divisão
    var resto = total % 11;

    return 11 - resto;
}

console.log(descobrirDigito("39406714"));

## Casos especiales

Como todo en Brasil, tenemos algunos casos especiales a los que debemos prestar atención:

### El dígito verificador del RG es X

Cuando nos encontramos con el dígito verificador **X**, eso significa que el resultado de la última etapa de nuestra cuenta es **10 (11 - 1)**. Entonces el dígito verificador **10** fue sustituido por el número romano **X**.

### El dígito verificador es 0

Cuando nos encontramos con el dígito verificador **0**, eso significa que el resultado de la última etapa de nuestra cuenta es **11 (11 - 0)**. Entonces el dígito verificador **11** fue sustituido por el número 0.
