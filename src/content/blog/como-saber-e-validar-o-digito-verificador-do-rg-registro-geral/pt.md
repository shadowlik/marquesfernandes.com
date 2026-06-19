---
title: Como saber e validar o dígito verificador do RG (Registro Geral)
description: O dígito verificador, nada mais é que o dígito que vem após o traço
  (xx.xxx.xxx-d). Ele  é um mecanismo de autenticação utilizado para verificar a
  validade e a autenticidade do um valor numérico, funciona como uma prevenção
  de fraudes ou possíveis erros de transmissão e geração do documento.
date: 2021-04-03T16:04:51.000Z
lang: pt
translationKey: como-saber-e-validar-o-digito-verificador-do-rg-registro-geral
slug: como-saber-e-validar-o-digito-verificador-do-rg-registro-geral
category: self
tags:
  - rg
wpId: 11394
cover: ./2021-04-RG-novo-940x530-1.jpg
canonicalPath: /self/como-saber-e-validar-o-digito-verificador-do-rg-registro-geral/
needsReview: false
updated: 2021-04-03T16:05:11.000Z
---

O RG (Registro Geral), ou cédula de identidade, carteira de identidade, identidade é o nosso documento nacional de identificação civil no Brasil. Os dados que constam nesse documento variam de acordo com o órgão responsável pela sua emissão bem como a sua regra matemática de autenticidade. Nesse artigo vamos demonstrar a regra e validação baseado em um documento emitido pela [SSP-SP](https://www.ssp.sp.gov.br/).

O **dígito verificador**, nada mais é que o dígito que vem após o traço (xx.xxx.xxx-**d**). Ele  é um mecanismo de autenticação utilizado para verificar a validade e a autenticidade do um valor numérico, funciona como uma prevenção de fraudes ou possíveis erros de transmissão e geração do documento.

## Como calcular o dígito verificador do RG

Para aprender a lógica por trás da geração do dígito verificador utilizaremos neste artigo um RG válido e gerado randomicamente: `39.406.714-?`

Primeiro vamos fazer uma tabela com 3 linhas e 8 colunas, teremos na primeira linha os 8 primeiros algarismos do número do RG.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Agora precisamos preencher a segunda linha, ela sempre obedecerá uma sequência lógica de números para todos o cálculo de qualquer RG. A sequência é **2,3,4,5,6,7,8 e 9**.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Agora para obter os valores da terceira linha devemos multiplicar os números de cada linha por coluna. Por exemplo, 3x2, 9x3 e assim por diante.

<table><tbody><tr><td>3</td><td>9</td><td>4</td><td>0</td><td>6</td><td>7</td><td>1</td><td>4</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>6</td><td>27</td><td>16</td><td>0</td><td>36</td><td>49</td><td>8</td><td>36</td></tr></tbody></table>

Agora que temos nossa tabela completa, precisamos somar todos os números obtidos na terceira linha. Em nosso exemplo teremos: **6 + 27 + 16 + 0 + 36 + 49 + 8 + 36 = 178**.

Agora precisamos descobrir o resto da divisão desse número por 11, você pode descobrir usando a calculador do seu computador usando o operador `mod`**: 178 mod 11** **\= 2**.

Agora precisamos subtrair de 11 o resto da nossa divisão e teremos finalmente o nosso dígito verificador: **11 - 2 = 9**.

Abaixo você encontra o algoritmo feito em JavaScript ES5 seguindo a lógica explicada acima.

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

## Casos especiais

Como tudo no Brasil, temos alguns casos especiais que precisamos estar atentos:

### O dígito verificador do RG é X

Quando nos deparamos com o dígito verificador **X**, isso significa que o resultado da última etapa de nossa conta é **10 (11 - 1)**. Então o dígito verificador **10** foi substituído pelo algarismo romano **X**.

### O dígito verificador é 0

Qundo nos deparamos com o dígito verificador **0**, isso significa que o resultado da última etapa de nossa conta é **11 (11 - 0)**. Então o dígito verificador **11** foi substituído pelo algarismo 0.
