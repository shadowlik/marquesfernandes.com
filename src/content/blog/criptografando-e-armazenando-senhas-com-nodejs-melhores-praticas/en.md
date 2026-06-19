---
title: Encrypting and Storing Passwords with NodeJS - Best Practices
description: In applications that handle user authentication, storing passwords
  in plain text should not be an option. You are responsible for looking after
  and ensuring the security of this data, therefore, you must always encrypt all
  passwords and never store raw passwords in text.
date: 2020-05-11T23:13:02.000Z
lang: en
translationKey: criptografando-e-armazenando-senhas-com-nodejs-melhores-praticas
slug: encrypting-and-storing-passwords-with-nodejs-best-practices
category: technology
tags: []
wpId: 11919
canonicalPath: /en/technology/encrypting-and-storing-passwords-with-nodejs-best-practices/
needsReview: false
updated: 2021-12-12T11:16:55.000Z
---

In applications that handle user authentication, storing passwords in plain text should not be an option. You are responsible for looking after and ensuring the security of this data, therefore, you must always encrypt all passwords and never store raw passwords in text. In this article we will learn how to encrypt passwords using the technique **salt.** I will use examples in pure JavaScript and ES5.

## What is the Salt technique?

the technique **salt** (salt in Portuguese), consists of taking the user's password and encrypting it together with a set of unique and random text and storing the result in the bank, both the encrypted password and the text used as salt.

## Why use the Salt technique?

Encrypting a password is always the same for that password, although encryption is a one-way street, it is not possible to decrypt, there are tables that store this encrypted text and the original reference text, making it easier for a hacker to get this hash. By adding a unique salt for each password, we ensure that the generated result of the encryption is unique and making it difficult to identify them.

## And the Salt and Pepper technique?

There are other techniques to securely store passwords, a variant of **salt** and the **salt and pepper** , which in addition to storing the unique salt per user, combine with the **pepper** (pepper), which is basically a text key generated at the application level and shared by all passwords. Many argue that having this layer of security at the application level prevents possible access breaches to your bank from compromising passwords, since attackers will have access to the salt as well. The problem with this technique is maintenance, since you need to securely store this text, and in case of any breach with the **pepper** all passwords will be invalid.

## Process Steps

In summary, the practice of this technique will be:

### Password creation and storage

1.  Receive user password
2.  Generate a salt (random text)
3.  Match salt with password
4.  Encrypt password and salt combination
5.  We will save the result of the password and also the salt used.

### password validation

1.  Validate the email (user identifier) and search the database for the salt
2.  Match the salt with the entered password
3.  Encrypt typed password and salt combination
4.  Compare this password (hash) stored with the hash saved in the database

In this article we won't cover the whole process, for the encryption part we will use the native library [crypto](https://nodejs.org/api/crypto.html) and for the bank part we will simulate with the `console.log` .

## let's go to code

First we need to import the crypto module

var crypto = require('crypto');

### Function to generate the Salt

To generate the salt we will use a function from the crypto module itself that already generates a random string, we will use a string with 16 characters as our salt.

function generateSalt(){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex')
            .slice(0.16); 
};

### Function to encrypt password with salt

We will now make the function responsible for joining a salt and a password, returning an object with the generated encrypted hash and the salt. We will use the encryption algorithm [sha512](https://emn178.github.io/online-tools/sha512.html) .

function sha512(password, salt){
    var hash = crypto.createHmac('sha512', salt); // sha512 crypto algorithm
    hash.update(password);
    var hash = hash.digest('hex');
    return {
        salt,
        hash,
    };
};

### Function to generate a new password hash

Now let's create a function that generates a new password for the user, it can be used when registering or updating a password.

function generatePassword(password) {
    var salt = generateSalt(16); // Let's generate the salt
    var passwordESalt = sha512(password, salt); // We get the password and the salt
    // From here you can return the password or save the salt and password in the bank
    console.log('Password Hash: ' +passwordESalt.hash);
    console.log('Salt: ' + passwordESalt.salt);
}

saltHashPassword('123456');
saltHashPassword('ABC123');

### Validate password (login)

Now that we've saved a password hash and salt in the database, we need a function to authenticate this user in our application:

function login(LoginPassword, saltOnBank, hashOnBank) {
   varESaltpassword = sha512(Loginpassword, saltNoBank)
   return hashNoBank ===passwordESalt.hash;
}

## Conclusion

We learned the process of generating a password and encrypting it in a secure way to store in our bank. Functions are merely basic examples of the technique, I recommend that you improve and adapt to your scenario.
