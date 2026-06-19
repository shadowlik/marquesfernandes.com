---
title: What is URL encoding and how does it work?
description: A URL (acronym for Uniform Resource Locator) is the address of a
  resource on the world wide web. URLs have a well-defined structure that was
  formulated in RFC 1738 by Tim Berners-Lee, inventor of the World Wide Web.
date: 2021-02-20T20:46:42.000Z
lang: en
translationKey: o-que-e-codificacao-de-url-e-como-funciona
slug: what-is-url-encoding-is-how-it-works
category: technology
tags: []
wpId: 11809
canonicalPath: /en/technology/what-is-url-encoding-is-how-it-works/
needsReview: false
updated: 2021-12-12T11:17:19.000Z
---

A URL (acronym for Uniform Resource Locator) is the address of a resource on the world wide web. URLs have a well-defined structure that was formulated in [RFC 1738](https://tools.ietf.org/html/rfc1738) per [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) , inventor of the world wide web.

A URL follows the following *syntax:*

```
protocol:[//[usuario:senha@] host[:porta] ]path[?parametro][#fragmento]
```

The best known use for the URL is for connecting to websites, as we can see in the example below.

```
https://google.com.br
```

Several improvements were made to the initial RFC.The current RFC defining the URI syntax is [RFC 3986](https://tools.ietf.org/html/rfc3986) . This post contains information from the most recent RFC document.

## Difference between URL and URI

You will probably hear URLs in some places and URIs in other places.

-   A URI is an identifier for a specific resource. Like a page, book or document
-   URL is special type of identifier that also tells you how to access it, like HTTPs, FTP, etc. An example would be the website http://marquesfernandes.com

If the protocol (HTTPS, FTP, etc.) is present or implied for a domain, you should call it a URL, even though it is also a URI. All URLs are URIs, but not all URIs are URLs.

## URL encoding (percent encoding)

A URL is made up of a limited set of characters belonging to the US- character set. [ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/) .These characters include digits (0-9), letters (AZ, az), and some special characters, ( `"-"` , `"."` , `"_"` , `"~"` ), as it is US-ASCII, the characters allowed do not include accents like those found in Portuguese.

There are some special characters that have a special use in URLs. Some examples of reserved characters are `?` , `/` , `#` , `:` etc. Any data passed as part of the URL, whether in string or path segment query, must not contain these characters directly.

Also, dangerous characters like `space` , , `<` , `>` , `{` , `}` etc, and any character outside the character set [ASCII](http://marquesfernandes.com/desenvolvimento/codigo-ascii-tabela-ascii-completa/) , are not allowed directly in URLs.

So what to do when we need to send data in the URL that contains these disallowed characters?We use the magic of encoding.

URL encoding converts reserved and unsafe characters into a format understood by all web browsers and servers.We first convert the character to one or more bytes.So each byte is represented by two hexadecimal digits with a prefix of % (for example `%20` ).The percent sign is used as a security character.

### URL encoding example

**Space:** one of the most frequent URL encoded characters you are likely to encounter is a `empty space` .The ASCII value of the `empty space` decimal character is `32` , which when converted to hexadecimal becomes `20` .Now we add the percentage prefix ( `%` ), which gives us the encoded value of the URL: `%20` .

## ASCII Character Percent Encoding Reference Table

The following table is an ASCII character reference to its corresponding URL encoded form.

| Decimal | Character | URL encoding (UTF-8) |
| --- | --- | --- |
| 0 | NUL (null character) | %00 |
| 1 | SOH (header start) | %01 |
| two | STX (beginning of text) | %02 |
| 3 | ETX (end of text) | %03 |
| 4 | EOT (End of Transmission) | %04 |
| 5 | ENQ (survey) | %05 |
| 6 | ACK (acknowledge) | %06 |
| 7 | BEL (bell) | %07 |
| 8 | BS (backward) | %08 |
| 9 | HT (horizontal guide) | %09 |
| 10 | LF (line feed) | %0A |
| 11 | VT (vertical guide) | %0B |
| 12 | FF (form feed) | %0C |
| 13 | CR (car return) | %0D |
| 14 | SO (switch out) | %0E |
| 15 | SI (change) | %0F |
| 16 | DLE (data link escape) | %10 |
| 17 | DC1 (Device Control 1) | %11 |
| 18 | DC2 (device control 2) | %12 |
| 19 | DC3 (device control 3) | %13 |
| 20 | DC4 (device control 4) | %14 |
| 21 | NAK (negative recognition) | %15 |
| 22 | SYN (synchronize) | %16 |
| 23 | ETB (end of transmission block) | %17 |
| 24 | MAY (cancel) | %18 |
| 25 | EM (end of media) | %19 |
| 26 | SUB (substitute) | %1A |
| 27 | ESC (escape) | %1B |
| 28 | FS (file separator) | %1C |
| 29 | GS (group separator) | %1D |
| 30 | RS (record tab) | %1 AND |
| 31 | US (unit separator) | %1F |
| 32 | space | %20 |
| 33 | ! | %21 |
| 34 | " | %22 |
| 35 | # | %23 |
| 36 | $ | %24 |
| 37 | % | %25 |
| 38 | AND | %26 |
| 39 | ' | %27 |
| 40 | ( | %28 |
| 41 | ) | %29 |
| 42 | \* | %2A |
| 43 | + | %2B |
| 44 | , | %2C |
| 45 | \- | %2D |
| 46 | . | %2E |
| 47 | / | %2F |
| 48 | 0 | %30 |
| 49 | 1 | %31 |
| 50 | two | %32 |
| 51 | 3 | %33 |
| 52 | 4 | %34 |
| 53 | 5 | %35 |
| 54 | 6 | %36 |
| 55 | 7 | %37 |
| 56 | 8 | %38 |
| 57 | 9 | %39 |
| 58 | : | %3A |
| 59 | ; | %3B |
| 60 | < | %3C |
| 61 | \= | %3D |
| 62 | \> | %3E |
| 63 | ? | %3F |
| 64 | @ | %40 |
| 65 | THE | %41 |
| 66 | B | %42 |
| 67 | Ç | %43 |
| 68 | D | %44 |
| 69 | AND | %45 |
| 70 | F | %46 |
| 71 | G | %47 |
| 72 | H | %48 |
| 73 | I | %49 |
| 74 | J | %4A |
| 75 | K | %4B |
| 76 | L | %4C |
| 77 | M | %4D |
| 78 | N | %4E |
| 79 | THE | %4F |
| 80 | P | %50 |
| 81 | Q | %51 |
| 82 | R | %52 |
| 83 | s | %53 |
| 84 | T | %54 |
| 85 | U | %55 |
| 86 | V | %56 |
| 87 | Ç | %57 |
| 88 | X | %58 |
| 89 | Y | %59 |
| 90 | Z | %5A |
| 91 | \[ | %5B |
| 92 |  | %5C |
| 93 | \] | %5D |
| 94 | ^ | %5E |
| 95 | \_ | %5F |
| 96 | \` | %60 |
| 97 | The | %61 |
| 98 | B | %62 |
| 99 | ç | %63 |
| 100 | d | %64 |
| 101 | and | %65 |
| 102 | f | %66 |
| 103 | g | %67 |
| 104 | H | %68 |
| 105 | i | %69 |
| 106 | j | %6A |
| 107 | k | %6B |
| 108 | I | %6C |
| 109 | m | %6D |
| 110 | no | %6E |
| 111 | The | %6F |
| 112 | P | %70 |
| 113 | what | %71 |
| 114 | r | %72 |
| 115 | s | %73 |
| 116 | t | %74 |
| 117 | u | %75 |
| 118 | v | %76 |
| 119 | Ç | %77 |
| 120 | x | %78 |
| 121 | y | %79 |
| 122 | z | %7A |
| 123 | { | %7B |
| 124 | | | %7C |
| 125 | } | %7D |
| 126 | ~ | %7E |
| 127 | DEL (delete) | %7F |

## [URL Encoding (Percent-Encoding)](https://www.urlencoder.io/learn/#url-encoding-percent-encoding)
