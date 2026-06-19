---
title: "Cifrando y Almacenando Contraseñas con NodeJS - Buenas Prácticas"
description: "En aplicaciones que gestionan la autenticación de usuarios, almacenar las contraseñas en texto plano no debería ser una opción. Eres responsable de velar y garantizar la seguridad de esos datos, por eso debes cifrar siempre todas las contraseñas y jamás almacenar las contraseñas en bruto como texto."
date: 2020-05-11T23:13:02.000Z
lang: es
translationKey: criptografando-e-armazenando-senhas-com-nodejs-melhores-praticas
slug: cifrando-y-almacenando-contrasenas-con-nodejs-buenas-practicas
category: tecnologia
tags:
  - javascript
  - auth
  - node
  - nodejs
cover: ./2020-05-jon-moore-bBavss4ZQcA-unsplash.jpg
needsReview: true
canonicalPath: /es/cifrando-y-almacenando-contrasenas-con-nodejs-buenas-practicas/
---

En aplicaciones que gestionan la autenticación de usuarios, almacenar las contraseñas en texto plano no debería ser una opción. Eres responsable de velar y garantizar la seguridad de esos datos, por eso debes cifrar siempre todas las contraseñas y jamás almacenar las contraseñas en bruto como texto. En este artículo vamos a aprender cómo cifrar contraseñas usando la técnica **salt.** Usaré ejemplos en JavaScript puro y ES5.

## ¿Qué es la técnica Salt?

La técnica **salt** (sal en español) consiste en tomar la contraseña del usuario y cifrarla junto con un conjunto de texto único y aleatorio, y almacenar el resultado en la base de datos, tanto la contraseña cifrada como el texto utilizado como salt.

## ¿Por qué usar la técnica Salt?

El cifrado de una contraseña es siempre el mismo para esa contraseña. Aunque el cifrado sea de una sola vía, no siendo posible descifrarlo, existen tablas que almacenan ese texto cifrado y el texto original de referencia, facilitándole a un hacker conseguir ese hash. Al añadir un salt único para cada contraseña, garantizamos que el resultado generado del cifrado sea único, dificultando su identificación.

## ¿Y la técnica Salt and Pepper?

Existen otras técnicas para almacenar de forma segura las contraseñas. Una variante del **salt** es el **salt and pepper**, que consiste en, además de almacenar el salt único por usuario, combinarlo con el **pepper** (pimienta), que es básicamente una clave en texto generada a nivel de aplicación y compartida por todas las contraseñas. Muchos argumentan que tener esa capa de seguridad a nivel de aplicación previene que posibles brechas de acceso a tu base de datos puedan comprometer las contraseñas, ya que los atacantes tendrán acceso también al salt. El problema de esta técnica es el mantenimiento, ya que necesitas almacenar de forma segura ese texto, y en caso de alguna brecha con el **pepper** todas las contraseñas quedarán invalidadas.

## Etapas del proceso

En resumen, la práctica de esta técnica será:

### Creación y almacenamiento de la contraseña

1.  Recibir la contraseña del usuario
2.  Generar un salt (texto aleatorio)
3.  Combinar el salt con la contraseña
4.  Cifrar la combinación de la contraseña y el salt
5.  Guardaremos el resultado de la contraseña y también el salt utilizado

### Validación de la contraseña

1.  Validar el email (identificador del usuario) y buscar en la base de datos el salt
2.  Combinar el salt con la contraseña introducida
3.  Cifrar la combinación de la contraseña introducida y el salt
4.  Comparar esa contraseña (hash) con el hash guardado en la base de datos

En este artículo no vamos a abordar el proceso completo. Para la parte de cifrado usaremos la biblioteca nativa [Crypto](https://nodejs.org/api/crypto.html) y para la parte de base de datos lo simularemos con `console.log`.

## Vamos al código

Primero necesitamos importar el módulo crypto

var crypto = require('crypto');

### Función para generar el Salt

Para generar el salt vamos a usar una función del propio módulo crypto que ya genera una cadena aleatoria. Usaremos una cadena de 16 caracteres como nuestro salt.

function gerarSalt(){
    return  crypto.randomBytes(16).toString('hex');
};

### Función para cifrar la contraseña con el salt

Ahora haremos la función responsable de juntar un salt y una contraseña, devolviendo un objeto con el hash cifrado generado y el salt. Usaremos el algoritmo de cifrado [sha512](https://emn178.github.io/online-tools/sha512.html).

function sha512(senha, salt){
    var hash = crypto.createHmac('sha512', salt); // Algoritmo de cripto sha512
    hash.update(senha);
    var hash = hash.digest('hex');
    return {
        salt,
        hash,
    };
};

### Función para generar un nuevo hash de contraseña

Vamos a crear ahora una función que genera una nueva contraseña para el usuario. Puede usarse en el registro o en la actualización de contraseña.

function gerarSenha(senha) {
    var salt = gerarSalt(16); // Vamos gerar o salt
    var senhaESalt = sha512(senha, salt); // Pegamos a senha e o salt
    // A partir daqui você pode retornar a senha ou já salvar no banco o salt e a senha
    console.log('Senha Hash: ' + senhaESalt.hash);
    console.log('Salt: ' + senhaESalt.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');

### Validar contraseña (login)

Ahora que ya guardamos un hash de contraseña y el salt en la base de datos, necesitamos una función para autenticar a ese usuario en nuestra aplicación:

function login(senhaDoLogin, saltNoBanco, hashNoBanco) {
   var senhaESalt = sha512(senhaDoLogin, saltNoBanco)
   return hashNoBanco === senhaESalt.hash;
}

## Conclusión

Aprendimos el proceso de generar una contraseña y cifrarla de una manera segura para almacenarla en nuestra base de datos. Las funciones son meramente ejemplos básicos de la técnica; recomiendo que las mejores y las adaptes a tu escenario.
