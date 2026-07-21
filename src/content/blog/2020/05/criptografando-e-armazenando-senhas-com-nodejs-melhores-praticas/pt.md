---
title: Criptografando e Armazenando Senhas com NodeJS - Melhores Praticas
description: Em aplicações que tratam a autenticação de usuários, armazenar as
  senhas em texto simples não deveria ser uma opção. Você é responsável por
  zelar e garantir a segurança desses dados, por isso, deve sempre criptografar
  todas as senhas e jamais armazenar a senhas brutas em texto.
date: 2020-05-11T23:13:02.000Z
lang: pt
translationKey: criptografando-e-armazenando-senhas-com-nodejs-melhores-praticas
slug: criptografando-e-armazenando-senhas-com-nodejs-melhores-praticas
category: tecnologia
tags:
  - javascript
  - auth
  - node
  - nodejs
wpId: 8268
cover: ./2020-05-jon-moore-bBavss4ZQcA-unsplash.jpg
canonicalPath: /tecnologia/criptografando-e-armazenando-senhas-com-nodejs-melhores-praticas/
needsReview: false
updated: 2021-08-15T17:42:25.000Z
---

Em aplicações que tratam a autenticação de usuários, armazenar as senhas em texto simples não deveria ser uma opção. Você é responsável por zelar e garantir a segurança desses dados, por isso, deve sempre criptografar todas as senhas e jamais armazenar a senhas brutas em texto. Nesse artigo vamos aprender como criptografar senhas usando a técnica **salt.** Usarei exemplos em JavaScript puro e ES5.

## O que é a técnica Salt?

A técnica **salt** (sal em português), consiste em pegar a senha do usuário e criptografar junto com um conjunto de texto único e randômico e armazenar o resultado no banco, tanto a senha criptografada quanto o texto utilizado como salt.

## Porque usar a técnica Salt?

A criptografia de uma senha é a mesma sempre para aquela senha, embora a criptografia seja uma via de uma mão, não sendo possível descriptografar, existem tabelas que armazenam esse texto criptografado e o texto original de referência, facilitando para um hacker conseguir essa hash. Ao adicionar uma salt única para cada senha, garantimos que o resultado gerado da criptografia seja único e dificultando a identificação delas.

## E a técnica Salt and Pepper?

Existem outras técnicas para armazenar seguramente as senhas, uma variante do **salt** é a **salt and pepper**, que consiste em além de armazenar o salt único por usuário, combinar com o **pepper** (pimenta), que é basicamente um chave em texto gerada no nível de aplicação e compartilhada por todas as senhas. Muitos argumentam que tendo essa camada de segurança no nível de aplicação previne que possíveis brechas de acesso ao seu banco possa comprometer as senhas, uma vez que os atacantes terão acesso ao salt também. O problema dessa técnica é a manutenção, uma vez que você precisa armazenar seguramente esse texto, e em caso de alguma brecha com o **pepper** todas as senhas serão inválidadas.

## Etapas do processo

Em resumo a prática dessa técnica será:

### Criação e armazenamento da senha

1.  Receber a senha do usuário
2.  Gerar uma salt (texto randomico)
3.  Combinar o salt com a senha
4.  Criptografar a combinação da senha e salt
5.  Salvaremos o resultado da senha e também o salt utilizado

### Validação da senha

1.  Validar o email (identificador do usuário) e buscar no banco de dados o salt
2.  Combinar a salt com a senha digitada
3.  Criptografar a combinação da senha digitada e do salt
4.  Comparar essa senha (hash) armazenada com a hash salva no banco

Nesse artigo não vamos abordar o processo completo, para a parte de criptografia usaremos a biblioteca nativa [Crypto](https://nodejs.org/api/crypto.html) e para a parte de banco simularemos com o `console.log`.

## Vamos ao código

Primeiro precisamos importar o módulo crypto

var crypto = require('crypto');

### Função para gerar o Salt

Para gerar o salt vamos usar uma função do próprio módulo crypto que já gera uma string randômica, usaremos uma string com 16 caracteres como nosso salt.

function gerarSalt(){
    return  crypto.randomBytes(16).toString('hex');
};

### Função para criptografar a senha com o salt

Faremos agora a função responsável por juntar um salt e uma senha, retornando um objeto com a hash criptografada gerada e o salt. Usaremos o algoritmo de criptografia [sha512](https://emn178.github.io/online-tools/sha512.html).

function sha512(senha, salt){
    var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
    hash.update(senha);
    var hash = hash.digest('hex');
    return {
        salt,
        hash,
    };
};

### Função para gerar uma nova hash de senha

Vamos criar a gora uma função que gera uma nova senha para o usuário, ela pode ser usada no cadastro ou na atualização de senha.

function gerarSenha(senha) {
    var salt = gerarSalt(16); // Vamos gerar o salt
    var senhaESalt = sha512(senha, salt); // Pegamos a senha e o salt
    // A partir daqui você pode retornar a senha ou já salvar no banco o salt e a senha
    console.log('Senha Hash: ' + senhaESalt.hash);
    console.log('Salt: ' + senhaESalt.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');

### Validar senha (login)

Agora que já salvamos uma hash de senha e o salt no banco, precisamos de uma função para autenticar esse usuário em nossa aplicação:

function login(senhaDoLogin, saltNoBanco, hashNoBanco) {
   var senhaESalt = sha512(senhaDoLogin, saltNoBanco)
   return hashNoBanco === senhaESalt.hash;
}

## Conclusão

Aprendemos o processo de gerar uma senha e criptografar de uma maneira segura para armazenar em nosso banco. As funções são meramente exemplos básicos da técnica, recomendo que melhore e adapte ao seu cenário.
