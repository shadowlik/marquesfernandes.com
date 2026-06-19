---
title: "Encrypting and Storing Passwords with NodeJS - Best Practices"
description: "In applications that handle user authentication, storing passwords in plain text should not be an option. You are responsible for ensuring the security of this data, so you should always encrypt all passwords and never store raw passwords in plain text."
date: 2020-05-11T23:13:02.000Z
lang: en
translationKey: cifrar-y-almacenar-contrasenas-con-nodejs-best-practices
slug: encrypting-and-storing-passwords-with-nodejs-best-practices
category: tecnologia-es
tags: []
needsReview: true
canonicalPath: /en/encrypting-and-storing-passwords-with-nodejs-best-practices/
---

In applications that handle user authentication, storing passwords in plain text should not be an option. You are responsible for ensuring the security of this data, so you should always encrypt all passwords and never store raw passwords in plain text. In this article we will learn how to encrypt passwords using the **salt** technique. I will use examples in pure JavaScript and ES5.

## What is the salt technique?

The **salt** technique consists of taking the user's password and encrypting it together with a unique set of random text, storing the result in the database, both the encrypted password and the text used as salt.

## Why use the salt technique?

The encryption of a password is always the same for that password, and even though the encryption is one-way and cannot be decrypted, there are tables that store this encrypted text and the original reference text, which makes it easier for a hacker to reach this hash. By adding a unique salt to each password, we ensure that the result generated from the encryption is unique, making it harder to identify.

## What about the salt and pepper technique?

There are other techniques for storing passwords securely. One variant **of** salt **is salt and pepper**, which consists of storing the unique salt per user and combining it with a **pepper** (pepper), which is basically a key in the text generated at the application level and shared by all passwords. Many argue that having this layer of security at the application level prevents possible access breaches to your database from compromising the passwords, since the attackers would also have access to the salt. The problem with this technique is maintenance, since you need to securely store this text, and in the event of any breach with the **pepper** all passwords would become invalid.

## Steps of the process

In summary, the practice of this technique will be:

### Creating and storing passwords

1.  Receive the user's password
2.  Generate a salt (random text)
3.  Match the salt with the password
4.  Encrypt the password and salt combination
5.  We will save the resulting password and also the salt used

### Password validation

1.  Validate the email (user identifier) and get the salt from the database
2.  Match the salt with the password being entered
3.  Encrypt the combination of the entered password and the salt
4.  Compare this hash with the hash saved in the database

In this article we will not cover the full process. For the encryption part we will use the [native Crypto library](https://nodejs.org/api/crypto.html), and for the database part we will simulate it with `console.log`.

## Let's get to the code

First we need to import the crypto module

var crypto - require('crypto');

### Function to generate Salt

To generate the salt we will use a function from the crypto module itself that already generates a random string; we will use a 16-character string as our salt.

the function generateSalt()
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0.16); 
};

### Function to encrypt the password with salt

Now we will make the function responsible for joining a salt and a password, returning an object with the generated encrypted hash and the salt. We will use the [sha512](https://emn178.github.io/online-tools/sha512.html) encryption algorithm.

function sha512 (password, salt)
    var hash á crypto.createHmac('sha512', salt); Crypto sha512 algorithm
    hash.update (password);
    var hash á hash.digest('hex');
    return ?
        Salt
        Hash
    };
};

### Function to generate a new password hash

Now let's create a function that generates a new password for the user, which can be used during registration or password update.

function generateSword (password)
    var salt á gerarSalt(16); Let's generate the salt
    var passwordESalt á sha512 (password, salt); We take the password and the salt
    From here you can return the password or save the salt and the password in the database
    console.log('Hash password: ' + passwordESalt.hash);
    console.log('Salt: ' + passwordESalt.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');

### Validate password (login)

Now that we have saved a password and salt hash in the database, we need a function to authenticate this user in our application:

function login (passwordDoLogin, saltNoBanco, hashNoBanco)
   var passwordESalt á sha512(passwordDoLogin, saltNoBanco)
   return hashNoBanco á senhaESalt.hash;
}

## Conclusion

We learned the process of generating a password and encrypting it securely to store in our database. The functions are simply basic examples of the technique; I recommend that you improve them and adapt them to your scenario.
