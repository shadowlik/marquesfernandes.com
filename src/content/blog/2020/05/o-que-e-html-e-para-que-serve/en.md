---
title: What is HTML and what is it for?
description: HTML is an acronym for HyperText Markup Language. It is the
  standard markup language for creating web pages.
date: 2020-05-05T21:55:53.000Z
lang: en
translationKey: o-que-e-html-e-para-que-serve
slug: what-is-html-and-what-is-it-for
category: technology
tags: []
wpId: 11925
canonicalPath: /en/technology/what-is-html-and-what-is-it-for/
needsReview: false
updated: 2021-12-12T11:16:03.000Z
---

**HTML** is an acronym for **HyperText Markup Language** (hypertext markup language). It is the standard markup language for creating web pages.

**HTML** it is not a programming language, although many people confuse it, it is a markup language that structurally defines a content. THE **HTML** it consists of a series of pre-defined elements, called tags, which are used to separate, organize and display content as programmed. Tags allow you to create a hyperlink; An image; a title; increase or decrease the font and more.

## Short History of HTML

HTML was originally created by the British physicist [Tim Berners-Lee](https://pt.wikipedia.org/wiki/Tim_Berners-Lee) , also creator of the protocol **[HTTP](http://marquesfernandes.com/o-que-e-http/)** . At the time, the language was not yet a specification but a collection of tools to solve a problem with Tim's people: the communication and sharing of research between him and his colleagues.

The first versions of HTML were defined with flexible syntactic rules and over time, the use of HTML increased, making it necessary to make the syntax more defined and standardized.

The first formal language specifications emerged in the 1990s, inspired by Tim Berners-Lee's original proposals to create a language based on [SGML](https://pt.wikipedia.org/wiki/SGML) to the Internet. The first publication was drafted by Tim Berners-Lee and Dan Connolly, having its first version published in 1993, two years later, in 1995 version 2.0 developed by a working group at *[Internet Engineering Task](https://pt.wikipedia.org/wiki/Internet_Engineering_Task_Force)* has been published. Since 1996, HTML specifications are maintained by [World Wide Web Consortium](https://pt.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C) and in [2000](https://pt.wikipedia.org/wiki/2000) language has become an international norm ( [ISO](https://pt.wikipedia.org/wiki/International_Organization_for_Standardization) / [IEC](https://pt.wikipedia.org/wiki/International_Electrotechnical_Commission) 15445:2000). The HTML 4.01 recommendation was published in late 1999 by the W3C and the HTML5 version, which we use today, was published in 2008.

| Version | Year |
| --- | --- |
| HTML | 1991 |
| HTML 2.0 | 1995 |
| HTML 3.2 | 1997 |
| HTML 4.01 | 1999 |
| XHTML | 2000 |
| HTML5 | 2014 |
| HTML5.1 | 2016 and 2017 (2nd ed.) |
| HTML5.2 | 2017 |

*Source: [Wikipedia](https://pt.wikipedia.org/wiki/HTML#Hist%C3%B3ria)*

## HTML structure

Below we can see a basic structure of the **HTML5** :

<!doctype html>

<html lang="en-US">
<head>
  <meta charset="utf-8">
  <title>Page Title</title>
</head>

<body>
  <h1>Text Title</h1>
  <p>Paragraph</p>
  <img src="example\_of\_image.jpeg" />
</body>
</html>

### HTML Tags

As we said before, the HTML structure is based on pre-defined tags. You can create, although not very common, your own HTML tags. Tags are basically divided into: **block-level** and **online (inline)** .

1.  Type Tags **block-level** usually take up all available space and "skip" a line. Headings (H1, H2, ...) are a good example of block tags.
2.  Type Tags **inline** they just take up space as needed and usually don't start a new line in the document. They are usually used to emphasize some content within the document. Like link (<a><a/>) and bold (<strong><strong/>) tags.

#### Block-level tags

There are three block-level tags that every HTML document must have: **<html>** , **<head>** , and **<body>** .

-   the tag **<html></html>** it is the highest level element that surrounds all HTML pages.
-   the tag **<head></head>** contains meta information such as page title, description, etc.
-   the tag **<body></body>** includes all content that appears on the page.

<html>
  <head>
    <!-- META INFORMATION -->  
  </head>
  <body>
    <!-- PAGE CONTENT -->
  </body>
</html>

-   Title tags have 6 levels. They range from ***<h1></h1>*** The ***<h6></h6>*** , where h1 is the highest level title, typically the page title, and h6 is the lowest level.
-   Paragraphs are delimited by ***<p></p>*** .
-   Divisions are larger sections of content that typically contain multiple headings, paragraphs, and other smaller elements. We can tag them using the tag ***<div></div>*** or **<section></section>** .
-   There are also tags for lists, they can be sorted. **<ol></ol>** or not ordered **<ul></ul>** . Individual items in a list must be enclosed in the tag. **<li></li>** . For example, this is what an unordered basic list looks like in HTML:

<ul>
    <li>List 1 Item</li>
    <li>Item in List 2/li>
    <li>Item in List 3/li>
</ul>

#### inline tags

Many inline tags are used to format text. For example, a tag **<strong></strong>** would render an element in bold, while the tags **<i></i>** would show in italics.

Hyperlinks are also inline elements that require tags and attributes. `href` to indicate the link destination:

<a href="http://marquesfernandes.com.br">Link to my blog!</a>

Images are also inline elements. You can add one using no closing tags. But you will also need to use the attribute `src` to specify the image path, for example:

<img src="/images/example.jpg" alt="Example image">

## HTML5 in practice!

Now that we've learned what HTML is and how it works, we can practice using a few tags to create a basic web page:

See the Pen [What is HTML?](https://codepen.io/shadowlik/pen/YzyYmWb) by Henrique Marques Fernandes ( [@shadowlik](https://codepen.io/shadowlik) ) on [CodePen](https://codepen.io) .
