---
title: JSON Web Token (JWT) - What is it and how does it work?
description: JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a
  compact, self-contained way to securely transmit information between two
  points in the form of a JSON object. Information can be verified and trusted
  because it is digitally signed, either through an encryption using a secret
  key (Made with the HMAC algorithm) or by the public/private key system using
  RSA or ECDSA.
date: 2019-02-23T18:32:37.000Z
lang: en
translationKey: json-web-token-jwt-o-que-e-para-que-serve-como-funciona
slug: json-web-token-jwt-what-is-what-is-it-for-how-it-works
category: technology
tags: []
wpId: 12111
canonicalPath: /en/technology/json-web-token-jwt-what-is-what-is-it-for-how-it-works/
needsReview: false
updated: 2021-12-12T11:14:42.000Z
---

## What is a JSON Web Token?

[JSON Web Token (JWT)](https://jwt.io/) it's an open convention ( [RFC 7519](https://tools.ietf.org/html/rfc7519) ) which makes it possible in a compact and self-contained way to securely transmit information between two parties in the form of an object [JSON](https://www.json.org/) .

Information can be verified and trusted because it is digitally signed by encryption using a secret key ( **[HMAC](https://pt.wikipedia.org/wiki/HMAC)** ) or by public/private keys using [RSA](https://pt.wikipedia.org/wiki/RSA_\(sistema_criptogr%C3%A1fico\)) or [ECDSA](https://pt.wikipedia.org/wiki/ECDSA) .

In this post we will focus on signed tokens, as they are the most used form for JWTs.

## What is it for?

JWT is useful in many scenarios, but the two most common are:

**Authentication:** The token is used to verify a user's identity and permissions. These tokens typically include non-sensitive user information and identifiers.

**Information exchange:** As a secure way for two applications to talk, thanks to the way the tokens are digitally signed, they guarantee the identity of the parties involved and that the information has not been altered along the way.

## How is it composed?

A JWT consists of 3 parts:

![](/wp-content/uploads/2019/02/jwt_parts_big.png)

### Header

The header commonly consists of two parts: The token type, JWT most of the time, and the type of signature algorithm used (HMAC SHA256 or RSA). This information is encoded in base64 forming the first part of our token:

{
  "alg": "HS256",
  "typ": "JWT"
  "exp": "1516239022"
}
// base64:
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ

### Contents

In this part you will find information about the entity that that token represents, information about management and issuance of the token, and for example the data of a user. There are 3 ways to store this information:

1.  **Registered:** We can define as common information of the token structure, the properties of the registered type can only have 3 characters. The most common are:
    1.  " **this":** Token issuer name/URI.
    2.  **"exp":** Token expiration time.
2.  **Public:** As the name defines well, any information that can be considered public and not sensitive, that makes sense to send in this token, such as the name or some identifier of the user.
3.  **Private:** Any private information that is agreed between the two parties that will use that token.

Remembering that the properties cannot be conflicting, that is, we cannot have a property with the same name even if its type is different. This information is encoded in base64 forming the second part of our token:

{
  "id": "1",
  "name": "Henrique",
  "admin": true
}

// base64:
// eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0

### Signature

Finally we have our token signature, basically in this part we have the junction of all other generated parts: Encoded header + Encoded content. All this content is encrypted with the chosen method resulting in our signature.

Let's take one of the most used example formats, the HMAC SHA256 method, which encrypts all this information using a secret key/word:

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(content),
  key)

It is with this signature that we can verify later that the token provided is valid and that no information has been changed.

The result is 3 base64 encoded texts separated by dots. The generated token will look something like this:  
  
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ .  
eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0 .  
3PKPbLcWbXlxKh\_63hupialSPhA1YzMGAAa1Kd19kJo

### Debug

You can see the token generated in this article on the website [JWT.io](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6IjE1MTYyMzkwMjIifQ.eyJpZCI6IjEiLCJuYW1lIjoiSGVucmlxdWUiLCJhZG1pbiI6dHJ1ZX0.3qdEDgz9QMMU4zSIGLuLDEah9o-QVKBe-OsqNcJkto4) , in it you can also generate your tokens and understand the JWTs generation flow in an easy and visual way.

![](/wp-content/uploads/2019/02/image-6.png)

## Use case:

Well, now that you understand what a JWT is, what it is for and how it works, let's show its use in a real scenario.

As mentioned at the beginning of the text, the most common use of JWTs is in user authentication, we will use an example REST API:

![](/wp-content/uploads/2019/02/jwt_flow.jpg)

1.  The user sends the necessary information for authentication.
2.  The server validates the information, generates and returns the JWT to the user.
3.  With the JWT in hand, the user can now perform authenticated requests by sending the authorization header: Authorization: Bearer <token>.
4.  The user requests private information from their profile.
5.  The server validates the JWT and decides whether or not the user can access this information.

In this scenario we have a "stateless" authentication mechanism. Our protected resources will only have to verify that a valid JWT was provided in the authorization header. If our token has all the necessary information for that request, this can help to drastically reduce database queries. Keeping in mind that JWTs are access credentials and should be treated with caution, one way to protect your system is by setting the token expiration date to the lowest feasible date.
