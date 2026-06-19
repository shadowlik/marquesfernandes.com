---
title: XML file - What is it and what is it for?
description: You've probably come across a file with the extension .xml and are
  wondering what this type of file is. XML, in English eXtensible Markup
  Language, is a mark...
date: 2020-03-20T12:31:51.000Z
lang: en
translationKey: arquivo-xml-o-que-e-e-para-que-serve
slug: xml-file-what-and-what-it-is-what-it-is
category: technology
tags: []
wpId: 11973
canonicalPath: /en/technology/xml-file-what-and-what-it-is-what-it-is/
needsReview: false
updated: 2021-12-12T11:15:54.000Z
---

You've probably come across a file with the extension `.xml` and are wondering what this type of file is. XML, in English eXtensible Markup Language, is a markup language for creating documents with hierarchically organized data, such as text, database or vector drawings. The XML language is classified as extensible because it allows you to define the markup elements, this means that you can create your own markup and interpret it in your code as you see fit, unlike other markup languages, like HTML, which enforce the use of some predefined tags.

## Markup Language

Markup language is a set of codes and/or conventions applied to data or texts to be read by computers and secondarily by people. The most famous markup languages are HTML, which is a markup language for formatting web pages, and XML, which has the same concept, but to standardize data sequences to facilitate communication with and between digital systems. See a comparison of the two languages:

### XML

<?xml version="1.0"?>
<movies>
    <movie id="1">
        <title>The Whites</title>
        <genre>Comedy</genre>
        <cast>
            <actor>Terry Crews</actor>
            <actor>Marlon Wayans</actor>
            <actor>Shawn Wayans</actor>
        </cast>
    </film>
</movies>

### HTML

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Page Title</title>
</head>

<body>
page content
</body>

</html>

## Brief History of XML

XML begins with the development of SGML (Standardized Generalized Markup Language) by Charles Goldfarb, along with Ed Mosher and Ray Lorie in the 1970s, while working at IBM (Anderson, 2004).

One of the most popular applications of SGML came with the development of HTML (HyperText Markup Language) by Tim Berners Lee in the late 1980s (Raggett, Lam, Alexander & Kmiec, 1998).

When it comes to storing and exchanging data, HTML is an inadequate language as it was originally conceived as a presentation technology, while SGML is considered too complex for general use.

XML fills this gap by being both human and system readable, and flexible enough to support platform and architecture-independent data exchange.

For a long time XML was the standard for communication between systems, facilitating human integration with various programs, several web communication protocols implement XML as their means of communication, the most famous being SOAP. With the creation of the [JSON](http://marquesfernandes.com/o-que-e-json-e-para-que-serve/) XML has lost a lot of space and is becoming obsolete in certain uses.

## XML Applications

As we've seen previously, XML is easy to read for humans and machines, so its range of applications is pretty broad:

-   Web Publishing: XML allows you to create interactive pages, allows the customer to customize these pages, and makes building e-commerce applications more intuitive.
-   Web Search and Web Task Automation: XML defines the type of information contained in a document, making it easy to return useful results when searching the Web, a practical example of this is [RSS feeds](https://rockcontent.com/blog/o-que-e-feed-rss/) .
-   General Applications: XML provides a standard method for accessing information, making it easy to use, store, transmit, and display data from applications and devices of all types.
-   e-business applications: XML implementations make electronic data interchange (EDI) more accessible for information exchange, business-to-business transactions, and business-to-consumer transactions.
-   Metadata Applications: XML makes it easy to express metadata in a portable, reusable format.

## XML Structure

Every markup language starts with an initial tag, which identifies what type of file it is, in the case of xml we have `<?xml version="1.0" encoding="utf-8" ?>` , and then we have the root tag, it is the one who will organize and encapsulate all the other child tags:

<?xml version="1.0" encoding="UTF-8"?>
<root>
  <daughter>
    <sub-daughter>....</sub-daughter>
  </daughter>
</root>

Now let's go to a more practical example:

<?xml version="1.0" encoding="UTF-8"?>
<customers>
  <customer>
    <name>Henrique Marques Fernandes</title>
    <age>28</age>
    <country>Brazil</country>
  </customer>
  <customer>
    <name>Terry Crews</title>
    <age>55</age>
    <country>USA</country>
  </customer>
</customers>

## How to create an XML file

Creating an XML file is pretty simple, you can use [online editors](https://codebeautify.org/xmlviewer) for this or just a simple text editor, the important thing is to always save the file with the extension `.xml` .

If you want to learn more about how to create an XML file, I recommend reading the [documentation on the Mozilla website](https://developer.mozilla.org/pt-PT/docs/Web/XML/Introducao_a_XML) , it is very didactic and that's why I didn't think it was necessary to create a tutorial for that.
