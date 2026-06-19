---
title: What is Base64, what is it for and how does it work?
description: Base64 is an encoding algorithm that allows you to transform any
  character of any language into an alphabet consisting of Latin letters, digits
  and signs. Wi...
date: 2020-02-24T20:10:47.000Z
lang: en
translationKey: o-que-e-base64-para-que-serve-e-como-funciona
slug: what-is-base64-what-is-it-and-how-it-works
category: self-en
tags: []
wpId: 11995
canonicalPath: /en/self-en/what-is-base64-what-is-it-and-how-it-works/
needsReview: false
updated: 2021-12-12T11:15:49.000Z
---

**Base64** is an encoding algorithm that allows you to transform any character of any language into an alphabet consisting of Latin letters, digits and signs. With this we can convert special characters such as Chinese logos, emoji and even images into a "readable" sequence (for any computer), which can be saved and/or transferred to any other place. It is often used to transmit binary data by means of transmissions that only deal with text, for example to send images and file attachments via e-mail.

Its alphabet consists of **64 characters (\[A-Z\] ,\[a-z\] ,\[0-9\] , "/" and "+"),** what gave rise to its name. the character `=` is used as a special suffix and the original specification ( [RFC 989](https://tools.ietf.org/html/rfc989) ) defined that the symbol `*` can be used to enclose converted but unencrypted data within a *stream* .

## Is Base64 secure? Can I use it as an encryption method?

The encoding algorithm of **Base64** it is not an encryption algorithm, it is easily decoded and therefore should not be used as a secure encryption method. Do not use this technique to protect sensitive data, use the [secure encryption methods](https://cryptoid.com.br/valid/tipos-de-criptografia-conheca-os-10-mais-usados-e-como-funciona-cada-um/) .

## Does Base64 reduce the size of my files? Can I use it as a method for compression?

No, on the contrary, using the encoding algorithm **Base64** , file sizes increase by 33% (more precisely 4 ⁄ 3 ) as it replaces every 3 bytes with 4 bytes. To find the final encoded size, just take the original file size and apply the following formula: `n * 4 / 3` , Where **no** is the original size of the file.

## So why does it exist? And what is its use?

To understand why the **Base64** was invented, we need to understand some of the history of computers: Computers communicate via a binary system - 0s and 1s, but people generally want to communicate with data in more advanced formats, such as text or images. To transfer this data between computers, it is necessary to first encode in 0s and 1s, send and then decode again. There are many different ways to perform this encoding and it would be much simpler if we could all agree on a single encoding, but unfortunately this was not the case.

Originally, many different encodings were created (eg code [Baudot](https://pt.wikipedia.org/wiki/C%C3%B3digo_Baudot) ) that used a different number of bits per character until eventually the [ASCII](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) become a pattern with 7 bits per character. However, most computers store binary data in bytes consisting of 8 bits each, so ASCII is not suitable for transferring this type of data.

To solve these problems, Base64 encoding was introduced. This allows you to encode arbitrary bytes into bytes that are safe to send without being corrupted (ASCII alphanumeric characters and some symbols). The downside is that encoding the message using Base64 increases its length - every 3 bytes of data is encoded to 4 ASCII characters.

To send a text message reliably, you can first encode to bytes using a text encoding of your choice (for example, [UTF-8](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html) ) and then Base64 encodes the resulting binary data into a text string that is safe to send encoded as ASCII. The receiver will have to reverse this process to retrieve the original message. Of course, this requires the recipient to know which encodings were used and this information usually needs to be sent separately.

Historically, it has been used to encode binary data in email messages where the email server can modify line endings. A more modern example is using Base64 encoding to embed image data directly into HTML source code. Here it is necessary to encode the data to prevent characters like '<' and '>' from being interpreted as tags.

## How does the Base64 encoding algorithm work?

let's use the word **BALL** as an example, remembering that uppercase and lowercase letters make a difference:

B THE L THE

First let's find in our [ASCII table](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) the corresponding binary code of each letter:

01000010 01001111 01001100 01000001

Now we've concatenated all the binary codes and split into groups of 6:

010000 100100 111101 001100 010000 01

In this example, we are missing 4 digits in our last block, we will add four zeros (0000) to its right:

010000 100100 111101 001100 010000 010000

Now we need to convert our 6-bit table to 8-bit, we'll do that by adding two zeros (00) in front:

00010000 00100100 00111101 00001100 00010000 00010000

Now we consult again our [ASCII table](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) looking for related binaries and noting their corresponding decimal number:

16 36 61 12 16 16 = =

As we can see above, we always need complete 24-bit groups, if your group happens not to complete, we add the = tag which has null value to complete our group. We then look for our decimal reference in the [Base64 conversion table](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/) :

Q k 9 M Q Q ==

## And how does Base64 decoding work?

Decoding is as simple as coding, just make the recipe we learned backwards. Let's use a different example, the encoded string **T U F s** :

We started by looking for decimal references in the [Base64 conversion table](http://marquesfernandes.com/tabela-de-caracteres-base64-completa-codificacao-decodificacao/) :

19 20 5 18

Now we need to find the corresponding binary numbers in our [ASCII table](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) :

00010011 00010100 00000101 00010010

Now we need to transform from 8-bit byte to 6-bit byte, we will do this I recommend the two 0s of the prefix of each group:

010011 010100 000101 010010

Now we need to group in 8-bit byte again, resulting in 3 groups of 8-bit byte:

01001101 01000001 01010010

Now we need to find the characters corresponding to the binary numbers in our [ASCII table](http://marquesfernandes.com/codigo-ascii-tabela-ascii-completa/) :

M THE R

And finally we will have our original decoded text, the word **SEA** .
