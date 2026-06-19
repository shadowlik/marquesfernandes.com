---
title: Cifrado y almacenamiento de contraseñas con NodeJS - Prácticas recomendadas
description: En las aplicaciones que controlan la autenticación de usuarios,
  almacenar contraseñas en texto sin formato no debe ser una opción. Usted es
  responsable de garantizar y garantizar la seguridad de estos datos, por lo que
  siempre debe cifrar todas las contraseñas y nunca almacenar las contraseñas
  sin procesar en texto.
date: 2020-05-11T23:13:02.000Z
lang: es
translationKey: cifrar-y-almacenar-contrasenas-con-nodejs-best-practices
slug: cifrar-y-almacenar-contrasenas-con-nodejs-best-practices
category: tecnologia-es
tags: []
wpId: 9126
canonicalPath: /es/tecnologia-es/cifrar-y-almacenar-contrasenas-con-nodejs-best-practices/
needsReview: false
---

En las aplicaciones que controlan la autenticación de usuarios, almacenar contraseñas en texto sin formato no debe ser una opción. Usted es responsable de garantizar y garantizar la seguridad de estos datos, por lo que siempre debe cifrar todas las contraseñas y nunca almacenar las contraseñas sin procesar en texto. En este artículo vamos a aprender cómo cifrar contraseñas utilizando la técnica d**e sal.** Usaré ejemplos en JavaScript puro y ES5.

## ¿Qué es la técnica de la sal?

La técnic**a de** sal (sal en portugués) es tomar la contraseña del usuario y cifrar junto con un conjunto de texto aleatorio único y almacenar el resultado en el banco, tanto la contraseña cifrada como el texto utilizado como sal.

## ¿Por qué usar la técnica de sal?

El cifrado de una contraseña es el mismo siempre para esa contraseña, aunque el cifrado es unidireccional, y no se puede descifrar, hay tablas que almacenan este texto cifrado y el texto de referencia original, lo que facilita a un hacker lograr este hash. Al agregar una sola sal a cada contraseña, nos aseguramos de que el resultado generado a partir del cifrado es único y dificultando su identificación.

## ¿Y la técnica de sal y pimienta?

Existen otras técnicas para almacenar contraseñas de forma segura, una variante **de l**a sal **es una sal y pi**mienta, que consiste en almacenar la única sal por usuario, combinar con pimient**a (pep**per), que es básicamente una clave en el texto generado a nivel de aplicación y compartida por todas las contraseñas. Muchos argumentan que tener esta capa de seguridad a nivel de aplicación evita que los posibles agujeros de acceso a su banco comprometan las contraseñas, ya que los atacantes también tendrán acceso a la sal. El problema de esta técnica es el mantenimiento, ya que es necesario almacenar de forma segura este texto, y en caso de cualquier brecha con pim**ienta** todas las contraseñas no serán válidas.

## Pasos del proceso

En resumen, la práctica de esta técnica será:

### Creación y almacenamiento de contraseñas

1.  Recibir la contraseña del usuario
2.  Generar una sal (texto aleatorio)
3.  Coincide con sal con contraseña
4.  Cifrar contraseña y combinación de sal
5.  Guardaremos el resultado de la contraseña y también la sal utilizada

### Validación de contraseña

1.  Validar el correo electrónico (identificador de usuario) y obtener la sal en la base de datos
2.  Haga coincidir la sal con la contraseña que introduzca
3.  Cifrar la combinación de la contraseña introducida y la sal
4.  Compare este hash almacenado con el hash guardado en el banco

En este artículo no cubriremos el proceso completo, para la parte de cifrado usaremos la biblioteca [Criptográfica nativa](https://nodejs.org/api/crypto.html) y para la parte del banco simularemos con el `console.lo`g.

## Vamos al código

Primero tenemos que importar el módulo criptográfico

var crypto - require('crypto');

### Función para generar Sal

Para generar la sal vamos a utilizar una función del propio módulo criptográfico que ya genera una cadena aleatoria, vamos a utilizar una cadena con 16 caracteres como nuestra sal.

la función generateSalt()
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0.16); 
};

### Función para cifrar la contraseña con sal

Ahora haremos la función responsable de unir una sal y una contraseña, devolviendo un objeto con el hash cifrado generado y la sal. Usaremos el algoritmo de cifrado [sha512](https://emn178.github.io/online-tools/sha512.html).

función sha512 (contraseña, sal)
    var hash á crypto.createHmac('sha512', sal); Algoritmo Crypto sha512
    hash.update (contraseña);
    var hash á hash.digest('hex');
    retorno ?
        Sal
        Hash
    };
};

### Función para generar un nuevo hash de contraseña

Vamos a crear el gora una función que genera una nueva contraseña para el usuario, se puede utilizar en el registro o actualización de contraseña.

función generateSword (contraseña)
    var sal á gerarSalt(16); Vamos a generar la sal
    var passwordESalt á sha512 (contraseña, sal); Tomamos la contraseña y la sal
    Desde aquí se puede devolver la contraseña o ya guardar en el banco la sal y la contraseña
    console.log('Hash password: ' + passwordESalt.hash);
    console.log('Salt: ' + passwordESalt.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');

### Validar contraseña (inicio de sesión)

Ahora que hemos guardado un hash de contraseña y sal en el banco, necesitamos un rol para autenticar a ese usuario en nuestra aplicación:

inicio de sesión de la función (passwordDoLogin, saltNoBanco, hashNoBanco)
   var passwordESalt á sha512(passwordDoLogin, saltNoBanco)
   devolver hashNoBanco á senhaESalt.hash;
}

## Conclusión

Aprendemos el proceso de generar una contraseña y cifrar de forma segura para almacenar en nuestro banco. Las funciones son simplemente ejemplos básicos de la técnica, te recomiendo que mejores y te adaptes a tu escenario.
