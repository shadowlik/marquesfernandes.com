---
title: "JSON Web Token (JWT): ¿Qué es y cómo funciona?"
description: JSON Web Tokens (JWT) es un estándar abierto (RFC 7519) que define
  una forma compacta y independiente de transmitir información de forma segura
  entre dos puntos en forma de un objeto JSON. La información puede ser
  verificada y de confianza porque está firmada digitalmente, ya sea a través
  del cifrado mediante una clave secreta (Made with the HMAC algorithm) o por el
  sistema de claves pública/privada que utiliza RSA o ECDSA.
date: 2019-02-23T18:32:37.000Z
lang: es
translationKey: json-web-token-jwt-o-que-e-para-que-serve-como-funciona
slug: json-web-token-jwt-what-and-for-that-serves-as-works
category: tecnologia-es
tags: []
wpId: 9226
canonicalPath: /es/tecnologia-es/json-web-token-jwt-what-and-for-that-serves-as-works/
needsReview: false
updated: 2021-12-12T11:24:32.000Z
---

## ¿Qué es un token web JSON?

[JSON Web Token (J](https://jwt.io/)WT) es una convención [abierta](https://tools.ietf.org/html/rfc7519) (RFC 7519) que permite de forma compacta y independiente transmitir información entre dos partes en forma de un objeto [JSON](https://www.json.org/).

La información se puede verificar y confiar porque está firmada digitalmente por cifrado mediante una clave secreta (HMAC) o **[med](https://pt.wikipedia.org/wiki/HMAC)**iante claves públicas/privadas mediante [RS](https://pt.wikipedia.org/wiki/RSA_\(sistema_criptogr%C3%A1fico\))A o [ECDSA](https://pt.wikipedia.org/wiki/ECDSA).

En este post nos centraremos en los tokens firmados, ya que es el formulario más utilizado para los JWT.

## ¿Para qué es?

JWT es útil en una variedad de escenarios, pero los dos más comunes son:

**Autenticación**: el token se usa para comprobar la identidad y los permisos de un usuario. Estos tokens suelen incluir identificadores e información de usuario no confidencial.

**Intercambio de informac**ión: Debido a que es un medio seguro para que dos aplicaciones hablen, gracias a la forma en que los tokens están firmados digitalmente, garantizan la identidad de las partes implicadas y si la información no ha cambiado en medio de la carretera.

## ¿Cómo se compone?

Un JWT consta de 3 partes:

![](/wp-content/uploads/2019/02/jwt_parts_big.png)

### Rúbrica

El encabezado suele constar de dos partes: el tipo de token, JWT la mayor parte del tiempo y el tipo de algoritmo de firma utilizado (HMAC SHA256 o RSA). Esta información está codificada en base64 formando la primera parte de nuestro token:

{
  "alg": "HS256",
  "typ": "JWT"
  "exp": "1516239022"
}
base64:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzwMjIifQ

### Contenido

En esta parte encontrará información sobre la entidad que representa el token, la información de administración y emisión de tokens, y por ejemplo los datos de un usuario. Hay 3 maneras de almacenar esta información:

1.  **Registrado:** podemos definir como información de estructura de token común, las propiedades del tipo registrado pueden tener solo 3 caracteres. Los más comunes son:
    1.  "**iss":** Nombre del emisor de tokens/URI.
    2.  **"exp":** Tiempo de validez del token.
2.  **Público:** como el nombre ya define bien, cualquier información que se pueda considerar pública y no sensible, que tenga sentido enviar este token, como el nombre o algún identificador del usuario.
3.  **Privado**: cualquier información privada que se acuerde entre las dos partes que usarán este token.

Recordar que las propiedades no pueden ser conflictivas, es decir, no podemos tener una propiedad con el mismo nombre incluso si su tipo es diferente. Esta información está codificada en base64 formando la segunda parte de nuestro token:

{
  "id": "1",
  "name": "Henry",
  "admin": true
}

base64:
eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0

### Firma

Finalmente tenemos nuestra firma de token, básicamente en esta parte tenemos la unión de todas las demás partes generadas: Encabezado codificado + Contenido codificado. Todo este contenido se cifra con el método elegido dando como resultado nuestra firma.

Tomemos uno de los formatos de ejemplo más utilizados, el método HMAC SHA256, que cifra toda esta información usando una palabra clave/secreta:

HMACSHA256(
  base64UrlEncode (cabeza) + "." +
  base64UrlEncode(content),
  clave)

Es con esta firma que pudimos verificar más adelante que el token proporcionado es válido y que ninguna información ha cambiado.

El resultado son 3 textos codificados en base64 separados por puntos. El token generado tendrá más o menos el siguiente form  
  
ato:eyJhbGciOiJIUZI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYYMzkwMjIifQ  
.eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWLLZG1bip1biP1bipL6dHJ1Z  
3PKPbLcWbXlxKh\_63hupialSPhA1YzMGAAa1Kd19kJo.

### Depuración

Puede ver el token generado en este artículo en el [sitio](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ.eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0.3qdEDgz9QMMU4zSIGLuLDEah9o-QVKBe-OsqNcJkto4) JWT.io, en él también puede generar sus tokens y comprender de una manera fácil y visual el flujo de generación de JWT.

![](/wp-content/uploads/2019/02/image-6.png)

## Caso de uso:

Bueno, ahora que entiendes lo que es, para qué sirve y cómo funciona un JWT, vamos a mostrar su uso en un escenario real.

Como se mencionó al principio del texto, el uso más común de JWT es en la autenticación de usuario, usaremos una API REST de ejemplo:

![](/wp-content/uploads/2019/02/jwt_flow.jpg)

1.  El usuario envía la información necesaria para la autenticación.
2.  El servidor valida la información, genera y devuelve el JWT al usuario.
3.  Con JWT en la mano, el usuario ahora puede realizar las peticiones autenticadas enviando el encabezado de la autorización: Autorización: <token>Portador.</token>
4.  El usuario solicita información privada de su perfil.
5.  El servidor valida el JWT y decide si el usuario puede acceder o no a esta información.

En este escenario tenemos un mecanismo de autenticación "sin estado". Nuestros recursos protegidos solo tendrán que verificar que se ha proporcionado un JWT válido en el encabezado de autorización. Si nuestro token tiene toda la información necesaria para esa solicitud, esto puede ayudar a reducir drásticamente las consultas en la base de datos. Recordando que los JWT son credenciales de acceso y deben tratarse con precaución, una forma de proteger el sistema es estableciendo la expiración del token en la fecha más baja posible.
