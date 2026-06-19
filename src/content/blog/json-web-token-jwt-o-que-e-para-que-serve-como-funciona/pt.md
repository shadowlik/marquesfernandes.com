---
title: JSON Web Token (JWT) - O que é e como funciona?
description: JSON Web Tokens (JWT) é um padrão aberto (RFC 7519) que define uma
  maneira compacta e auto-contida para transmitir com segurança informação entre
  dois pontos com o formato de um objecto JSON. As informações podem ser
  verificadas e confiadas porque elas são assinadas digitalmente, tanto por meio
  de uma criptografia utilizando uma chave de segredo (Feita com o algoritmo
  HMAC) ou pelo sistema de chaves públicas/privada usando RSA ou ECDSA.
date: 2019-02-23T18:32:37.000Z
lang: pt
translationKey: json-web-token-jwt-o-que-e-para-que-serve-como-funciona
slug: json-web-token-jwt-o-que-e-para-que-serve-como-funciona
category: tecnologia
tags:
  - jwt
  - tokens
  - auth
  - json
  - jsonwebtokens
  - bearer
  - authorization
wpId: 5517
canonicalPath: /tecnologia/json-web-token-jwt-o-que-e-para-que-serve-como-funciona/
needsReview: false
updated: 2020-08-09T17:09:16.000Z
---

## O que é um JSON Web Token?

[JSON Web Token (JWT)](https://jwt.io/) é uma convenção aberta ([RFC 7519](https://tools.ietf.org/html/rfc7519)) que possibilita de uma maneira compacta e auto-contida transmitir com segurança informação entre duas partes no formato de um objeto [JSON](https://www.json.org/).

As informações podem ser verificadas e confiadas porque elas são assinadas digitalmente por criptografia utilizando uma chave secreta (**[HMAC](https://pt.wikipedia.org/wiki/HMAC)**) ou por chaves pública/privada utilizando [RSA](https://pt.wikipedia.org/wiki/RSA_\(sistema_criptogr%C3%A1fico\)) ou [ECDSA](https://pt.wikipedia.org/wiki/ECDSA).

Nesse post focaremos em tokens assinados, por ser a forma mais utilizada para os JWTs.

## Para que serve?

O JWT é útil em diversos cenários, porém os dois mais comuns são:

**Autenticação:** O token é utilizado para verificar a identidade de um usuário e suas permissões. Esses tokens normalmente incluem identificadores e informações não sensíveis do usuário.

**Troca de informação:** Por ser um meio seguro para duas aplicações conversarem, graças a maneira que os tokens são assinados digitalmente, eles garantem a identidade das partes envolvidas e se a informação não foi alterada no meio da caminho.

## Como ele é composto?

Um JWT consiste em 3 partes:

![](/wp-content/uploads/2019/02/jwt_parts_big.png)

### Cabeçalho

O cabeçalho comumente consiste em duas partes: O tipo de token, JWT na maioria das vezes, e o tipo de algoritmo de assinatura utilizado (HMAC SHA256 ou RSA). Essas informações são codificadas em base64 formando a primeira parte do nosso token:

{
  "alg": "HS256",
  "typ": "JWT"
  "exp": "1516239022"
}
// base64:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ

### Conteúdo

Nessa parte você vai encontrar informações sobre a entidade que aquele token representa, informações de gestão e emissão do token, e por exemplo os dados de um usuário. Existem 3 maneiras de armazenar essas informações:

1.  **Registrado:** Podemos definir como informações comuns da estrutura do token, as propriedades do tipo registrado podem ter apenas 3 carácteres. As mais comuns são:
    1.  "**iss":** Nome/URI do emissor do token.
    2.  **"exp":** Tempo de validade do token.
2.  **Público:** Como o nome já define bem, qualquer informação que pode ser considerada pública e não sensível, que faça sentido enviar nesse token, como por exemplo o nome ou algum identificador do usuário.
3.  **Privado:** Qualquer informação privada que seja acordada entre as duas partes que vão utilizar esse token.

Lembrando que as propriedades não podem ser conflitantes, ou seja, não podemos ter uma propriedade com mesmo nome mesmo que seu tipo seja diferente. Essas informações são codificadas em base64 formando a segunda parte do nosso token:

{
  "id": "1",
  "name": "Henrique",
  "admin": true
}

// base64:
// eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0

### Assinatura

Por fim temos a nossa assinatura do token, basicamente nessa parte temos a junção de todas as outras partes geradas: Cabeçalho codificado + Conteúdo codificado. Todo esse conteúdo é criptografado com o método escolhido resultando então na nossa assinatura.

Vamos pegar um dos formatos mais utilizados de exemplo, o método HMAC SHA256, que criptografa toda essa informação utilizando uma chave/palavra secreta:

HMACSHA256(
  base64UrlEncode(cabecalho) + "." +
  base64UrlEncode(conteudo),
  chave)

É com essa assinatura que conseguimos verificar depois se o token fornecido é valido e se nenhuma informação foi alterada.

O resultado são 3 textos codificados em base64 separados por pontos. O token gerado terá mais ou menos o seguinte formato:  
  
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ.  
eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0.  
3PKPbLcWbXlxKh\_63hupialSPhA1YzMGAAa1Kd19kJo

### Debug

Você pode ver o token gerado nesse artigo no site [JWT.io](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ.eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0.3qdEDgz9QMMU4zSIGLuLDEah9o-QVKBe-OsqNcJkto4), nele você consegue também gerar seus tokens e entender de uma maneira fácil e visual o fluxo de geração dos JWTs.

![](/wp-content/uploads/2019/02/image-6.png)

## Caso de uso:

Bom, agora que você entendeu o que é, para que serve e como funciona um JWT, vamos mostrar o seu uso em um cenário real.

Como mencionado no começo do texto, o uso mais comum dos JWT é na autenticação de usuários, usaremos uma API REST de exemplo :

![](/wp-content/uploads/2019/02/jwt_flow.jpg)

1.  O usuário envia as informações necessárias para autenticação.
2.  O servidor valida as informações, gera e retorna o JWT para o usuário.
3.  Com o JWT em mãos, o usuário agora pode realizar requisições autenticadas enviando o cabeçalho de autorização: Authorization: Bearer <token>.
4.  O usuário solicita informações privadas de seu perfil.
5.  O servidor valida o JWT e decide se o usuário pode ou não acessar essa informações.

Nesse cenário temos um mecanismo de autenticação "stateless". Nossos recursos protegidos terão apenas que verificar se um JWT válido foi fornecido no cabeçalho de autorização. Caso nosso token tenha todas as informações necessárias para aquela requisição, isso pode ajudar a reduzir drasticamente consultas no banco de dados. Lembrando que JWTs são credenciais de acesso e devem ser tratados com cautela, um maneira de proteger seu sistema é configurando a expiração do token para a menor data viável.
