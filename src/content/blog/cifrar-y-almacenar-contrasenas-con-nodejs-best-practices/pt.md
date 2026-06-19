---
title: "Criptografar e armazenar senhas com NodeJS - Boas práticas"
description: "Em aplicações que controlam a autenticação de usuários, armazenar senhas em texto puro não deve ser uma opção. Você é responsável por garantir a segurança desses dados, por isso deve sempre criptografar todas as senhas e nunca armazenar as senhas em texto puro."
date: 2020-05-11T23:13:02.000Z
lang: pt
translationKey: cifrar-y-almacenar-contrasenas-con-nodejs-best-practices
slug: criptografar-e-armazenar-senhas-com-nodejs-boas-praticas
category: tecnologia-es
tags: []
needsReview: true
canonicalPath: /criptografar-e-armazenar-senhas-com-nodejs-boas-praticas/
---

Em aplicações que controlam a autenticação de usuários, armazenar senhas em texto puro não deve ser uma opção. Você é responsável por garantir a segurança desses dados, por isso deve sempre criptografar todas as senhas e nunca armazenar as senhas em texto puro. Neste artigo vamos aprender como criptografar senhas utilizando a **técnica de sal.** Usarei exemplos em JavaScript puro e ES5.

## O que é a técnica do sal?

A **técnica do** sal (salt em inglês) consiste em pegar a senha do usuário e criptografá-la junto com um conjunto de texto aleatório único, armazenando o resultado no banco, tanto a senha criptografada quanto o texto utilizado como sal.

## Por que usar a técnica do sal?

A criptografia de uma senha é sempre a mesma para aquela senha, e ainda que a criptografia seja unidirecional, e não possa ser descriptografada, existem tabelas que armazenam esse texto criptografado e o texto de referência original, o que facilita para um hacker chegar a esse hash. Ao adicionar um sal único a cada senha, garantimos que o resultado gerado a partir da criptografia seja único, dificultando sua identificação.

## E a técnica de sal e pimenta?

Existem outras técnicas para armazenar senhas de forma segura. Uma variante **do sal é o sal e pimenta**, que consiste em armazenar o sal único por usuário e combiná-lo com a **pimenta (pepper)**, que é basicamente uma chave no texto gerada a nível de aplicação e compartilhada por todas as senhas. Muitos argumentam que ter essa camada de segurança a nível de aplicação evita que possíveis falhas de acesso ao seu banco comprometam as senhas, já que os atacantes também teriam acesso ao sal. O problema dessa técnica é a manutenção, pois é necessário armazenar de forma segura esse texto, e em caso de qualquer brecha com a **pimenta** todas as senhas se tornarão inválidas.

## Etapas do processo

Em resumo, a prática dessa técnica será:

### Criação e armazenamento de senhas

1.  Receber a senha do usuário
2.  Gerar um sal (texto aleatório)
3.  Combinar o sal com a senha
4.  Criptografar a combinação de senha e sal
5.  Salvaremos o resultado da senha e também o sal utilizado

### Validação de senha

1.  Validar o e-mail (identificador do usuário) e obter o sal no banco de dados
2.  Combinar o sal com a senha que for digitada
3.  Criptografar a combinação da senha digitada e o sal
4.  Comparar esse hash com o hash salvo no banco

Neste artigo não cobriremos o processo completo. Para a parte de criptografia usaremos a biblioteca [Cripto nativa](https://nodejs.org/api/crypto.html) e para a parte do banco simularemos com o `console.log`.

## Vamos ao código

Primeiro precisamos importar o módulo cripto

```js
var crypto = require('crypto');
```

### Função para gerar o Sal

Para gerar o sal vamos utilizar uma função do próprio módulo cripto que já gera uma string aleatória; vamos utilizar uma string com 16 caracteres como nosso sal.

```js
var generateSalt = function (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex')
        .slice(0, length);
};
```

### Função para criptografar a senha com o sal

Agora faremos a função responsável por unir um sal e uma senha, retornando um objeto com o hash criptografado gerado e o sal. Usaremos o algoritmo de criptografia [sha512](https://emn178.github.io/online-tools/sha512.html).

```js
var sha512 = function (password, salt) {
    var hash = crypto.createHmac('sha512', salt); // Algoritmo Crypto sha512
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        hash: value
    };
};
```

### Função para gerar um novo hash de senha

Vamos criar agora uma função que gera uma nova senha para o usuário, que pode ser usada no registro ou na atualização de senha.

```js
function saltHashPassword(userpassword) {
    var salt = generateSalt(16); // Vamos gerar o sal
    var passwordData = sha512(userpassword, salt); // Pegamos a senha e o sal
    // A partir daqui é possível retornar a senha ou salvar no banco o sal e a senha
    console.log('Hash password: ' + passwordData.hash);
    console.log('Salt: ' + passwordData.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');
```

### Validar senha (login)

Agora que salvamos um hash de senha e sal no banco, precisamos de uma função para autenticar esse usuário em nossa aplicação:

```js
function login(passwordEntered, salt, hash) {
    var passwordData = sha512(passwordEntered, salt);
    return hash === passwordData.hash;
}
```

## Conclusão

Aprendemos o processo de gerar uma senha e criptografá-la de forma segura para armazenar em nosso banco. As funções são apenas exemplos básicos da técnica; recomendo que você as melhore e adapte ao seu cenário.
